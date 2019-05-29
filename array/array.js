console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Sara', 'SaChan', 'Ore')
console.log(aprovados)

aprovados = ['Sara', 'SaChan', 'Ore']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'BaChan'
aprovados.push('JiChan')
console.log(aprovados.length)

aprovados[9] = 'KaChan'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[2]
console.log(aprovados[2])
console.log(aprovados[3])
aprovados = ['Sara', 'SaChan', 'Ore']
aprovados.splice(2, 1)
console.log(aprovados)