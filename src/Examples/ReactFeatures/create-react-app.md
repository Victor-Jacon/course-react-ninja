[Create React App]

Dentro do package json nós temos os scripts abaixo:

yarn start
roda o server de desenvolvimento

yarn build
Faz o bundle do app para produção. Ele otimiza o tamanho dos arquivos pra ficar mais rápido.

yarn test
Roda o test runner.

yarn eject
Essa opção é pra quem quer ter controle total sobre as dependências do react app. Geralmente usam isso antes de enviar para a produção. 
Neste caso o dev fica responsável por atualizar cada dependência,ao contrário do cra puro, que gerencia tudo isso pra gente.
O objetivo do facebook é torna o cra tão bom que vc não precise ejetar.
Quando você ejeta, o cra coloca no seu package.json todas as dependências que ele utiliza "por baixo dos panos"
A sugestão do daciuk é: 
1-criar com cra e depois ejetar.
2-configurar o webpack todo na mão.

[Testes]

O cra vem com jest. O arquivo App.test.js é o jest sendo implementado já.
