const quaseArray = {0: 'Sara', 1: 'Samara', 3:'SaChan'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function(){return Object.values(this)},
    enumerable: false
})
console.log(quaseArray[0])

const meuArray = ['Sara', 'Samara', 'SaChan']
console.log(quaseArray.toString(), meuArray)