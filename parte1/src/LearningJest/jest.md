[Jest]

*Como instalar jest?*
1-yarn add jest-cli
2-yarn add chai (realizar asserções)
3-yarn add babel-core babel-jest babel-preset-es2015 babel-preset-stage-0 (integrar com es2015)

*Como configurar jest?*
1-Em package.json, troca o script de test por
test: jest --coverage

O coverage permite que os testes gerem o relatório de cobertura de código.

2-Ainda no package.json, adicione uma nova linha
"test:watch": "yarn test -- --watch"

O jest vai procurar seus testes em:
Pasta: __tests__
Qualquer arquivo que seja: nome.test.js ou nome.spec.js

*Finalidade*
O facebook criou essa ferramenta para testar os componentes react.

*Outras ferramentas que também fazem o mesmo*
Mocha, jasmine, tape.

*Qual a vantagem de usar o JEST?*
-resultado dos testes: mais bonito e útil

*facilidade de usar es6*
Com outras ferramentas precisa instalar mais coisas pra rodar. O jest usa o próprio babel-jest.

*code coverage incluso*
O jest já vem com code coverage. Em outras ferramentas você precisa fazer uma configuração adicional.

*Pra que serve o code coverage*
O code coverage serve pra dizer quantos % do seu código está sendo coberto por testes.

*watch interativo*
A maioria das ferramentas vc consegue rodar com watch. Enquanto vc tá escrevendo seu teste, a ferramenta recarrega sozinha pra cada alteração que você fizer.

Pra ver se tudo continua passando da forma normal.

A diferença é que com o watch interativo, você consegue rodar testes específicos, rodar todos os testes, vc consegue personalizar quais testes realizar em sequência e outros.

*Pra quem serve o jsdom?*
Os testes que vc precisaria do browser pra executar, vc consegue executar sem um browser.

*Diferença do jsdom no jest e outras ferramentas*
Em outras ferramentas vc precisa configurar o jsdom manualmente.

*funciona com qualquer ferramenta de asserção*
O tape tem uma ferramenta própria de asserção. O mocha e o jest sim.
O jest funciona com qualquer ferramenta, até com console.assert

*Testar: ferramentas + react components*
A gente pode escrever tests unitários para nossas ferramentas, e para nossos componentes do react, tudo na mesma ferramenta.

*O que é o tdd?*
O tdd é mais uma forma de pensar do que qualquer outra coisa. Você precisa primeiro escrever um teste, e depois uma implementação mínima, para o teste passar.

*Dicas e boas práticas*
1-Os comandos disponíveis para serem executados nos scripts do package.json ficam disponíveis na pasta node_modules/.bin
2-As msgs de erro precisam ser em inglês.
3-Quando colocamos o --coverage no nosso script do package.json, a gente passa a ter acesso a pasta coverage na raiz do projeto.
Essa pasta tem um projetinho HTML+CSS que serve pra vc ter de forma mais visual e com mais detalhes os resultados do seu teste.
4-O jest guarda em cache um teste já realizado, isso pode ser a razão de bugs "sem motivo". Para isso, limpe o cache do jest: yarn test --no-cache
5-Rodando o modo interativo watch do jest, você pode apertar p e depois digitar o nome de um arquivo, desta forma, o jest mostrará os testes apenas dos arquivos que contém aquele termo pesquisado. Ele vai executar todos, porém vai filtrar pra te mostrar apenas dos termos pesquisados.
