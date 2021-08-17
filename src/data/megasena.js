function geraNumero(){
    let qtdNumeros = [1,2,3,4,5,6]
    while(qtdNumeros.length < 10){
        
        var guardaNumeros = qtdNumeros.push(1)
        
        
        console.log(guardaNumeros)
    }
    console.log(guardaNumeros)
}

geraNumero()