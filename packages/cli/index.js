#!/usr/bin/env node
const { program } = require('commander')
const create = require('./commands/create')

const method = create.method

program.command('create')
.description('Creates a React Motor mashup. You will be prompted to configure your mashup details')
.action(method);

program.parse()