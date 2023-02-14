Problema
Você foi contratado como desenvolvedor sênior pela Cubos Games, uma empresa da Cubos voltada ao desenvolvimento de jogos.

Você é responsável por implementar a função que mostra ao jogador do novo jogo que será lançado a quantidade de um determinado item, coletado durante o jogo, que ele possui. Por exemplo, um jogador pode querer saber a quantidade de capas ou a quantidade de espadas que ele tem em sua mochila (local no jogo onde os itens são guardados).

Entrada
A entrada do seu programa será composta por três variáveis:

itemProcurado: variável do tipo string que armazena o item que o jogador deseja saber a quantidade;

itensNaMochila: variável do tipo array que armazena os itens que o jogador possui e que são armazenados na mochila do personagem do jogo;

quantidade: variável do tipo array que armazena a quantidade de cada item.

Saída
Você deve imprimir na tela a quantidade que o jogador possui do item que ele deseja consultar. Caso o jogador não possua o item procurado, deve-se imprimir 0.

Exemplos
Entrada 1
itemProcurado = escudo

itensNaMochila = [flecha, porção, escudo, machado]

quantidade = [10, 3, 2, 20]

Saída 1
2

Explicação 1
O jogador possui 10 flechas, 3 porções, 2 escudos e 20 machados. Como ele deseja saber a quantidade de escudos, a resposta é 2.

Entrada 2
itemProcurado = capa

itensNaMochila = [machado, espada, ervas, luva]

quantidade = [1, 8, 1, 30]

Saída 2
0

Explicação 2
O jogador possui 1 machado, 8 espadas, 1 erva e 30 luvas. Como ele deseja saber a quantidade de capas, a resposta é 0 (não possui).


