[Jest]

*Como instalar jest?*
yarn add jest-cli

*Como configurar jest?*
A unica configuração é ir em package.json e trocar o script de test por test: jest

Isso é porque o jest usa convenção ao invés de configuração. Então ele sempre vai procurar seus testes em:
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
Os testes que vc precisaria do browser pra executar, vc consegue 
executar direto no browser.

*Diferença do jsdom no jest e outras ferramentas*
Em outras ferramentas vc precisa configurar o jsdom manualmente.

*funciona com qualquer ferramenta de asserção*
O tape tem uma ferramenta própria de asserção. O mocha e o jest sim.
O jest funciona com qualquer ferramenta, até com console.assert

*Testar: ferramentas + react components*
A gente pode escrever tests unitários para nossas ferramentas, e para nossos componentes do react, tudo na mesma ferramenta.

*Dicas*
Os comandos disponíveis para serem executados nos scripts do package.json ficam disponíveis na pasta node_modules/.bin
