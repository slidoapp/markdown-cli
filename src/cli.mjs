#!/usr/bin/env node
import convert from './lib.mjs'

console.log('markdown')
console.log(`  (runtime: node ${process.versions.node})`)
console.log('')

convert('# markdown-cli\nMarkdown content.')
