#!/usr/bin/env node
import convert from './lib.mjs'
import fs from 'fs'

const args = process.argv.splice(2)

if (args.length > 0) {
    const markdownFile = args[0]
    const content = fs.readFileSync(markdownFile, 'utf8')

    convert(content)
      .then((html) => {
        process.stdout.write(String(html))
        process.exit(0)
      })
      .catch((err) => {
        process.stderr.write(err)
        process.exit(1)
      })
} else {
    console.log('markdown')
    console.log(`  (runtime: node ${process.versions.node})`)
}
