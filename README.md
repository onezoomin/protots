protots (oclif generated cli)
=================

protots const will generate a tree of constants for all tx in the given folder. ([eventually via #3](https://github.com/onezoomin/protots/issues/3))




=================
oclif example stuff below

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g protots
$ protots COMMAND
running command...
$ protots (--version)
protots/0.0.0 darwin-x64 node-v14.18.2
$ protots --help [COMMAND]
USAGE
  $ protots COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`protots help [COMMAND]`](#protots-help-command)
* [`protots plugins`](#protots-plugins)
* [`protots plugins:inspect PLUGIN...`](#protots-pluginsinspect-plugin)
* [`protots plugins:install PLUGIN...`](#protots-pluginsinstall-plugin)
* [`protots plugins:link PLUGIN`](#protots-pluginslink-plugin)
* [`protots plugins:uninstall PLUGIN...`](#protots-pluginsuninstall-plugin)
* [`protots plugins update`](#protots-plugins-update)

## `protots help [COMMAND]`

Display help for protots.

```
USAGE
  $ protots help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for protots.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `protots plugins`

List installed plugins.

```
USAGE
  $ protots plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ protots plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `protots plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ protots plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ protots plugins:inspect myplugin
```

## `protots plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ protots plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ protots plugins add

EXAMPLES
  $ protots plugins:install myplugin 

  $ protots plugins:install https://github.com/someuser/someplugin

  $ protots plugins:install someuser/someplugin
```

## `protots plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ protots plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ protots plugins:link myplugin
```

## `protots plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ protots plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ protots plugins unlink
  $ protots plugins remove
```

## `protots plugins update`

Update installed plugins.

```
USAGE
  $ protots plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
