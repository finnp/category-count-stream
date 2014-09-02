#!/usr/bin/env node

var ldj = require('ldjson-stream')
var key = process.argv[2]
var categorycount = require('./')

if(!key) {
  console.error('Usage: category-count <key>')
  console.error('Write new line delimited JSON objects to stdin')
  process.exit()
}

var countkey = categorycount(key, function (result) {
  console.log(JSON.stringify(result))
})

process.stdin
  .pipe(ldj.parse())
  .pipe(countkey)

