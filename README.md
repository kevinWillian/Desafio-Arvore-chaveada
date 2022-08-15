# Desafio
Calcular todas as possíveis combinações de elementos terminais de uma arvore de ordem ilimitada onde galhos paralelos podem ou não ser excludentes entre si.

A entrada é um Array que pode conter Arrays que por sua vez também podem conter Arrays e assim por diante ilimitadamente. Na Arvore também temos strings e números (chaves) seguindo as seguintes regras:

• Arrays que contem strings só podem conter strings, assim sendo, strings são elementos terminais na arvore

• Cada String é única (id do elemento terminal)

• Cada Array de strings está numa estrutura chamada pasta, isto é, um array cujo o primeiro elemento é a chave da pasta e o segundo é um array de strings

• As pastas também podem ser pastas de pastas, assim, o primeiro elemento é a chave da pasta e o segundo é o array que contem mais pastas (de strings ou de outras pastas)

Para as combinações temos as seguintes regras:

• Pastas paralelas com chaves iguais são excludentes, ou seja, apenas uma delas pode estar em cada combinação 

• Pastas paralelas com chaves diferentes não são excludentes ou seja ambas devem estar em cada combinação 

• Para o caso da não seleção, uma das strings terminais representa o objeto nulo se aquele grupo é do caso em que possa nenhum elemento ser escolhido (ou seja, em nivel de código, não há não-seleção de elementos terminais que não foram excluídos pela regra de pastas paralelas, destes pelo menos um será escolhido)

Exemplos:

• [
   [1,[
      "A",
      "B"
   ],
   [1,[
      "C",
      "D"
   ]
]

Resultado: [["A"],["B"],["C"],["D"]]

• [
   [1,[
      "A",
      "B"
   ],
   [2,[
      "C",
      "D"
   ]
]

Resultado: [["A","C"],["A","D"],["B","C"],["B","D"]]

• [
   [1,[
      "A",
      "B"
   ],
   [2,[
      [1,[
           "C",
           "D"
        ]
      ],
      [2,[
            "E",
            "F"
        ]
      ]
   ]
]

Resultado: [["A","C","E"],["A","C","F"],["A","D","E"],["A","D","F"],["B","C","E"],["B","C","F"],["B","D","E"],["B","D","F"]]

* Na solução há exemplos chamados "ax", para usar um exemplo pronto descomente-o se estiver comentado e comente os outros se n estiverem. Para usar exemplo próprio comente todos os "ax" que não estejam comentados e crie seu próprio "ax" seguindo as regras deste arquivo.
