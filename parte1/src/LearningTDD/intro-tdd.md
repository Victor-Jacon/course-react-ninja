[Tests] 
Os testes automatizados substituem os testes manuais que a gente já faz durante o desenvolvimento. 

A ideia dos testes automatizados é: 

vc tem várias partes da sua aplicação e precisa garantir que ela se comporte conforme o esperado.

Se você não escreve testes automatizados você vai testar manualmente. Vai rolar, clicar, fazer tudo na mão mesmo.

Pra testar funções vc vai jogar valores diversos pra ver se ela se comporta conforme o esperado.

Se você não escreve testes automatizados você tem um problema: Você vai testar 1x algo. Você vai mexer no código. 

Como você garante que essa sua modificação do código não vai quebrar algum outro lugar da sua aplicação? 

Os testes tiram esse peso da sua memória e deixam o computador resolver pra vc. Assim vc foca 100% no desenvolvimento, sem precisar dividir sua atenção com testes.

[TDD]
Antes de escrever a implementação, e depois testar pra ver se funciona..

Vamos primeiro escrever um teste e depois vamos implementar.

De início não faz muito sentido, mas com o tempo acostuma.

São 3 momentos pra escrever cada teste:
MOMENTO RED: Escreva um teste para uma implementação inexistente e execute. ELe vai quebrar.

GREEN: Faz a implementação no código, e execute o teste. Ele deve passar.

BLUE: NEste momento todos os testes que você escreveu estão passando. Existe código duplicado? Refatore. Nesse passo, nenhum teste anterior pode quebrar.

Metodologia:
NO tdd a gente desenvolve com babysteps, partindo sempre da forma mais simples.
