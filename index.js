import esprima from 'esprima'
import escodegen from 'escodegen'
import fs from 'fs'

const program = fs.readFileSync('example.swsx').toString()
let source = program

const entries = []

const parsed = esprima.parseModule(program, { jsx: true, tokens: true, range: true }, (node, meta) => {
  /*if (node.type === 'ImportDeclaration')
    console.log(node.specifiers[1])*/
})

console.log(parsed.tokens)

/*const gen = escodegen.generate(parsed)

console.log(gen)*/

//fs.writeFileSync('output.jsx', formatted)
