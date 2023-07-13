let matriz = ['1','1','1']
let resultado = true

function isUniform(arr) {

    for (let index = 0; index < matriz.length; index++) {
        if (arr[0] !== arr[index]) {
            resultado = false
            break
        } 
        resultado = true
    }
}
isUniform(matriz)
alert(resultado)