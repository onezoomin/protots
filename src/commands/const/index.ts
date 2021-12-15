import {Command, Flags} from '@oclif/core'
import {capitalCase, constantCase} from 'change-case'

export default class Const extends Command {
  static description = 'Say const'

  static examples = [
    `$ oex const friend --from oclif
const friend from oclif! (./src/commands/const/index.ts)
`,
  ]

  static flags = {
    from: Flags.string({char: 'f', description: 'Whom is saying const', required: false}),
  }

  static args = [{name: 'person', description: 'Person to say const to', required: false}]

  async run(): Promise<void> {
    // const {args, flags} = await this.parse(Const)
    const DivvyTx = await import('../../generated/regen/divvy/v1/tx')
    const PROTO: Record<string, Record<string, Record<string, string>>> = {}
    const TxImports = [DivvyTx]

    for (const eachTxModule of TxImports) {
      const eachExport = Object.keys(DivvyTx)
      let [root, mod] = eachTxModule.protobufPackage.split('.')
      root = capitalCase(root)
      mod = capitalCase(mod)
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

    this.log(JSON.stringify(PROTO, null, 2))
  }
}
