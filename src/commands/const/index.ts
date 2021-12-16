import {Command, Flags} from '@oclif/core'
import {constantCase} from 'change-case'
import recursive from 'recursive-readdir'
import path from 'node:path'
export default class Const extends Command {
  static description = 'Say const'

  static examples = [
    `$ oex const friend --from oclif
const friend from oclif! (./src/commands/const/index.ts)
`,
  ]

  static flags = {
    include: Flags.string({char: 'i', description: 'Includes array in json default ["v1/tx.ts","v1alpha2/tx.ts"]', required: false}),
  }

  static args = [{name: 'dir', description: 'Directory to crawl', required: false}]

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Const)
    // console.log(args)
    let dir  = args.dir ?? 'src/generated/regen/'
    dir = path.resolve(dir)

    const filterFlag: string[] = JSON.parse(flags.include ?? 'false')
    const includesArray = filterFlag || ['v1/tx.ts', 'v1alpha2/tx.ts']
    const files = await recursive(dir)
    const filteredFiles = files.filter(eachFile => includesArray.some(eachInclude => eachFile.includes(eachInclude)))
    // console.log(filteredFiles)

    const PROTO: Record<string, Record<string, Record<string, string>>> = {}
    // const TxImports = [
    //   await import('../../generated/regen/divvy/v1/tx'),
    //   await import('../../generated/regen/ecocredit/v1alpha2/tx'),
    // ]
    const TxImports = await Promise.all(filteredFiles.map(async eachFile => {
      // console.log('importing', eachFile)
      return import(eachFile)
    }))

    for (const eachTxModule of TxImports) {
      const eachExport = Object.keys(eachTxModule)
      let [root, mod] = eachTxModule.protobufPackage.split('.')
      root = root.toUpperCase()
      mod = mod.toUpperCase()
      for (const eachMsg of eachExport) {
        // this.log(eachMsg, eachMsg.indexOf('Msg'))
        PROTO[root] = PROTO[root] ?? {}
        PROTO[root][mod] = PROTO[root][mod] ?? {}
        if (eachMsg.indexOf('Msg') === 0 && !eachMsg.includes('Resp')) {
          const slimMsgName = constantCase(eachMsg.replace('Msg', '').replace('Resp', ''))
          PROTO[root][mod][slimMsgName] = `/${eachTxModule.protobufPackage}.${eachMsg}`
        }
      }
    }

    const output = `
export const MSGS = ${JSON.stringify(PROTO, null, 2)} 
    `
    this.log(output)
  }
}
