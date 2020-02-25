const esprima = require('esprima')
const escodegen = require('escodegen')
const fs = require('fs')

const program = fs.readFileSync('example.swsx').toString()
let source = program

const entries = []

const parsed = esprima.parseModule(program, { jsx: true, tokens: true, range: true }, (node, meta) => {
  /*if (node.type === 'ImportDeclaration')
    console.log(node.specifiers[1])*/
})

//console.log(parsed.tokens)

const gen = escodegen.generate(parsed)

console.log(gen)

fs.writeFileSync('output.jsx', gen)
