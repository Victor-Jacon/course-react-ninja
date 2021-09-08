// Entendendo o método map (o desafio é criar uma função que faça a mesma coisa que o map)

// O map é imutável (por isso criamos uma nova array em branco no inicio)
// O map itera pelo tamanho de items que tem na array (arr.length)
// O map pega essa array nova e coloca nela os valores que vierem da função. O map executa aquela função pra cada item da array e depois salva ele na array nova.
// O map no final retorna ao usuário a nova array modificada, sem alterar a primeira array que foi passada como parâmetro.
// Precisamos passar dois parâmetros, a array e a função.
// Essa função recebe o index, e recebe o valor naquele index. Ex: const [1,2] que é a array, ele pega o 1, na posição 0
// Para testar os parâmetros eu posso passar um valor default , exemplo. arr = [] e func = () => {}. Dessa forma eu não preciso checar o type na função.
const map = (arr, func) => {
    if (typeof func !== 'function') {
        throw new TypeError('func is not a function')
    }

    if (!Array.isArray(arr)) {
        throw new TypeError('Arr is not an array')
    }

    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        const toPush = func(arr[i], i, arr)
        newArr.push(toPush)
    }
    return newArr
}

module.exports = map;