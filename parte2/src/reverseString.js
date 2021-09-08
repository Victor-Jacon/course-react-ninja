const reverseString = str =>
  str
    .toLowerCase() // Nosso objetivo é que a função considere maiusculo e minusculo como iguais. Em um cenário de senhas não seria ideal mas aqui nós queremos. Então transformamos tudo em minusculo antes de continuar.
    .split('')
    .reverse() // retorna uma sequencia de elementos na sequencia reversa
    .join('')

module.exports = reverseString;