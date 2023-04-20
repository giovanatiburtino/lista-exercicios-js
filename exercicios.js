// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    // return array.reverse()
    const novoArray = []
    for(let i = array.length-1; i >= 0; i--){
        novoArray.push(array[i])
    }
    return novoArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((numero) => {
        if(numero % 2 === 0){
            return numero
        }
    })
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    // const novoArray = retornaNumerosPares(array)
    // return novoArray.map((numero) => numero*numero)
    return array.filter((numero) => {
        if(numero % 2 === 0){
            return numero
        }
    }).map((numero) => numero **2)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    // return Math.max(...array)
    // return Math.max.apply(null, array)
    const max = array.reduce((a, b) => Math.max(a, b))
    return max
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = 0
    let menorNumero = 0 

    if(num1 > num2){
        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1
    }

    const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
    const diferenca = maiorNumero - menorNumero

    return {maiorNumero, maiorDivisivelPorMenor, diferenca}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    for (let i = 0; numerosPares.length < n; i += 2) {
        numerosPares.push(i);
    }
    return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    const comparaAB = ladoA === ladoB
    const comparaAC = ladoA === ladoC
    const comparaBC = ladoB === ladoC

    if(comparaAB && comparaAC){
        return "Equilátero"
    } else if (comparaAB || comparaAC || comparaBC){
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const arrayOrdenado = retornaArrayOrdenado(array)
    console.log(arrayOrdenado)
    return [arrayOrdenado[arrayOrdenado.length-2], arrayOrdenado[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const chamadaDeFilme = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
    return chamadaDeFilme
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const pessoaAnonima = {...pessoa,
    nome: 'ANÔNIMO'
   }
   return pessoaAnonima
//    return {...pessoa, nome: "ANÔNIMO"}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const pessoasAutorizadas = pessoas.filter((pessoa) => {
    if(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60){
        return pessoa
    }
   })   
   return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let naoPodeEntrar = []
    for (let requisitos of pessoas){
     if(requisitos.altura < 1.5 || requisitos.idade <= 14 || requisitos.idade >= 60){
     naoPodeEntrar.push(requisitos)
     }
    } return naoPodeEntrar
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    console.log(contas)
    const contasAtualizadas = contas.map((conta) => {
        let gastoTotal = 0
        conta.compras.map((compra) => {
            gastoTotal += compra
        })
        conta.saldoTotal -= gastoTotal
        conta.compras = []
        return conta
    })
    return contasAtualizadas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const arrayOrdenado = consultas.sort(function(a, b) {
        if(a.nome > b.nome){
            return 1;
        } else {
            return -1;
        }})
    return arrayOrdenado
    // console.log(arrayOrdenado)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    const arrayOrdenado = consultas.sort((a, b) => {
    const consultaA = new Date (a.dataDaConsulta.split("/").reverse()).getTime()
    const consultaB = new Date (b.dataDaConsulta.split("/").reverse()).getTime()
    console.log(consultaA, consultaB)
    return consultaA - consultaB
    })
    return arrayOrdenado
}

