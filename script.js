// let ax = 
// [
//   [1,[
//     "0.1.0",
//     "0.1.1",
//     "0.1.2"
//   ]],
//   [2,[
//     [1,[
//       "1.1.0.1.0",
//       "1.1.0.1.1",
//       "1.1.0.1.2"
//     ]],
//     [1,[
//       [1,[
//         "1.1.1.1.0.1.0"
//       ]],
//       [2,[
//         "1.1.1.1.0.2.0"
//     ]]
//     ]],
//     [3,[
//       "1.1.0.3.0",
//       "1.1.0.3.1",
//       "1.1.0.3.2"
//     ]],
//   ]]
// ]

// let ax = 
// [
//   [1,[
//     "0.1.0",
//     "0.1.1",
//     "0.1.2"
//   ]],
//   [2,[
//     [1,[
//       "1.1.0.1.0",
//       "1.1.0.1.1",
//       "1.1.0.1.2"
//     ]],
//     [1,[
//       [1,[
//         "1.1.1.1.0.1.0"
//       ]],
//       [2,[
//         "1.1.1.1.0.2.0"
//     ]]
//     ]]
//   ]]
// ]

// let ax = 
// [
//   [1,[
//     [1,[
//       "0.1.0.1.0",
//       "0.1.0.1.1",
//       "0.1.0.1.2"
//     ]],
//     [1,[
//       "0.1.1.1.0",
//       "0.1.1.1.1",
//       "0.1.1.1.2"
//     ]]
//   ]],
//   [1,[
//     [1,[
//       "1.1.0.1.0",
//       "1.1.0.1.1",
//       "1.1.0.1.2"
//     ]],
//     [2,[
//       "1.1.1.1.0",
//       "1.1.1.1.1",
//       "1.1.1.1.2"
//     ]],
//   ]]
// ]

let ax = //19689
[
  [1,[
    [1,[
      "0.1.0.1.0",
      "0.1.0.1.1",
      "0.1.0.1.2"
    ]],
    [1,[
      "0.1.1.1.0",
      "0.1.1.1.1",
      "0.1.1.1.2"
    ]]
  ]],
  [1,[
    [1,[
      "1.1.0.1.0",
      "1.1.0.1.1",
      "1.1.0.1.2"
    ]],
    [2,[
      [1,[
        [1,[
          [1,[
            "a",
            "b",
            "c",
          ]],
          [2,[
            "d",
            "e",
            "f",
          ]]
        ]  
        ],
        [2,[
          [1,[
            "g",
            "h",
            "i",
          ]],
          [2,[
            "j",
            "k",
            "l",
          ]]
        ]
        ],
      ]],
      [2,[
        [1,[
          [1,[
            "m",
            "n",
            "o",
          ]],
          [2,[
            "p",
            "q",
            "r",
          ]]
        ]
        ],
        [2,[
          [1,[
            "s",
            "t",
            "u",
          ]],
          [2,[
            "v",
            "w",
            "x",
          ]]
        ]
        ]
      ]]
    ]],
  ]]
]

conjuntosrespostas = []

function produto(xl) {
  if(xl.length <= 1){
    return xl
  }
    return xl.reduce(function(a,b){
        return a.map(function(x){
            return b.map(function(y){
                return x.concat([y]);
            })
        }).reduce(function(a,b){ return a.concat(b) },[])
    }, [[]])
}

tlx = []
function tirarIndx(lx, cs, ilx){
  tparar = false
  if(ilx == 0){
    tlx = lx
  }
  ilx++
  if(typeof lx == "number"){
    pcs = cs.slice(0,cs.length - 1)
    s = "tlx" + strgele(pcs)
    csc = "p = " + s
    var F = new Function (csc);
    F()
    p = p[1]
    tlx = transplante(tlx, pcs, p)
    tparar = true
    return tlx
  }
  if(Array.isArray(lx)){
    cs.push(0)
    lx.forEach((e, i) => {
      if(tparar){
        return
      }
      cs[cs.length - 1] = i
      ncs = [...cs]
      tirarIndx(e, ncs, ilx)
    });
  }
  return tlx
}

function tirarTodosIndxs(ttlx){
  ttparar = false
  ret = JSON.parse(JSON.stringify(ttlx))
  for(;!ttparar;){
    vttlx = JSON.parse(JSON.stringify(ret));
    ret = tirarIndx(ret,[], 0)
    if(JSON.stringify(ret) == JSON.stringify(vttlx)){
      ttparar = true
    }
  }
  return ret
}

function strgele(cs){
  let ret = ""
  cs.forEach(e => {
    ret += "[" + e + "]"
  });
  return ret
}

function formatarFinal(lx, f){
  lx.forEach((e, i) => {
    let s = JSON.stringify(e)
    s = s.replace(/[\[\]']+/g,'')
    let c = ""
    let ns = "[" + s + "]"
    c = "n = " + ns
    var F = new Function (c);
    F()
    if(!f){
      lx[i] = n
    }else{
      lx = n
    }
    
  });
  return lx
}

function formatarRedundancia(lx){
  nlx = lx[0]
  return nlx
}

srparar = false
function seRedundancia(lx, ilx){
  ret = false
    if(Array.isArray(lx)){
      if(lx.length <= 1 && Array.isArray(lx[0])){
        r = false
        conjuntosrespostas.forEach((e) => {
          if(JSON.stringify(e) == JSON.stringify(lx[0])){
            r = true
          }
        });
        if(!r){
          ret = true
        }
      }
  }
  return ret
}

flx = []
function formatarQualquer(lx, cs, ilx){
  fparar = false
  if(ilx == 0){
    flx = lx
  }
  ilx++
  if(Array.isArray(lx)){
    if(seRedundancia(lx)){
      lx = formatarRedundancia(lx, true)
      flx = transplante(flx, cs, lx)
      fparar = true
    }
    cs.push(0)
    lx.forEach((e , i) => {
      if(fparar){
        return
      }
      cs[cs.length - 1] = i
      ncs = [...cs]
      ilx++
      e = formatarQualquer(e, ncs, ilx)
    });
  }
  return flx
}

function formatarTudo(ftlx){
  ftparar = false
  for(;!ftparar;){
    vftlx = JSON.parse(JSON.stringify(ftlx));
    ftlx = formatarQualquer(ftlx,[], 0)
    if(JSON.stringify(ftlx) == JSON.stringify(vftlx)){
      ftparar = true
    }
  }
  return ftlx
}

glx = []
function transplante(lx, cs, n){
  glx = lx
  csc = "glx" + strgele(cs) + " = " + JSON.stringify(n)
  var F = new Function (csc);
  F() 
  return glx
}

function kx(cs){
  let prod = true
  csc = "e = ax" + strgele(cs)
  var F = new Function (csc);
  F()
  if(!(typeof e[0] == "number")){
    sc = false
    e = fazerunioes(e)
    if(e.length == 1){
      sc = true
    }
    e = produto(e)
    if(e.length != 1){
      e = formatarFinal(e)
    }else{
      if(!sc){
        conjuntosrespostas.push(e[0])
      }
    }
    ax = transplante(ax, cs, e)
  }
}

let resolvidos = []
function k(lx, cs){
  if(cs.length == nivel){
     let pr = cs.slice(0,cs.length - 3)
     let r = resolvidos.filter(e => JSON.stringify(e) == JSON.stringify(pr))
     if(r.length == 0)  {
      kx(pr)
      resolvidos.push(pr)
     }
  }
  if(Array.isArray(lx)){
    cs.push(0)
    lx.forEach((e, i) => {
      cs[cs.length - 1] = i
      let ncs = [...cs]
      k(e,ncs)
    })
  }
}

function fazerunioes(lx){
  if(lx.length == 1){
    return lx
  }
  if(typeof lx[0] == "number" && lx.length == 2){
    nret = [lx[1]]
    return nret
  }
  silx = tirarTodosIndxs(lx)
  if(JSON.stringify(silx) == JSON.stringify(lx)){
    return lx
  }
  let ret = []
  let retid = 0
  chave = -1
  for(i = 0; i < lx.length ; i++){
    e = lx[i]
    if(typeof e[0] == "number" && Array.isArray(e[1])){
      let unidos = e[1]
      if(chave != e[0]){
        chave = e[0]
        for(i2 = i+1; i2 < lx.length ; i2++){
          e2 = lx[i2]
          if(e2[0] == e[0]){
            unidos = unidos.concat(e2[1])
          }
        }
          ret[retid] = unidos
          retid++
      }
    }
  }
  return ret
}

nivel = 0
niveis = []
function acharNiveis(lx, cs){
  niveis.push(cs.length)
  if(Array.isArray(lx)){
    cs.push(0)
    lx.forEach((e, i) => {
      cs[cs.length - 1] = i
      let ncs = [...cs]
      acharNiveis(e, ncs)
    });
  }
}

function acharProfundidade(lx){
  niveis = []
  nivel = 0
  acharNiveis(lx, [])
  for(i = niveis.length; i != 0 ; i--){
    if(niveis[i] > nivel){
      nivel = niveis[i]
    }
  }
}

galhos = []
function obtergalhos(lx, ilx, galho){
  if(ilx == 0){
    galhos = []
  }
  if(Array.isArray(lx)){
    if(ilx != 0 && typeof lx[0] == "number"){
        galho.push(lx[0])
    }
    ilx++
    lx.forEach((e) => {
      ngalho = [...galho]
      obtergalhos(e,ilx,ngalho)
    });
  }
  galhos.push(galho)
  galho = []
}

nivel2 = 0
function obterProfundidadeGalhos(lx){
  nivel2 = 0
  obtergalhos(lx,0,[])
  galhos.forEach((e) => {
    if(e.length > nivel2){
      nivel2 = e.length
    }
  });
}

function run(){

    obterProfundidadeGalhos(ax)

    acharProfundidade(ax)

    while(nivel2 > 1){

      ax = formatarTudo(ax, [], 0)

      k(ax, [])

      nivel--

      ax = formatarTudo(ax, [], 0)

      obterProfundidadeGalhos(ax)
    }

    ax = fazerunioes(ax)

    let prod = true

    if(ax.length == 1){
      prod = false
    }

    ax = tirarTodosIndxs(ax, [], 0)

    ax = formatarTudo(ax, [], 0)

    if(prod){
      ax = produto(ax)
    }

    ax = formatarFinal(ax, false)

    console.log(JSON.stringify(ax))
    console.log(ax.length)

}

run();