function contar(){
    let nin = document.getElementById('in')
    let nfm = document.querySelector("input#fm")
    let npas = document.querySelector("input#pas")
    let res = document.getElementById("resposta")
    
    if(nin.value.length == 0 || nfm.value.length == 0 || npas.value.length == 0){
        res.innerHTML = "Impossivel contar faltando dados!"
        window.alert("[ERRO] Falta de dados para continuar!")
    } else{
        res.innerHTML = `Contando:`
        let ni = Number(nin.value)
        let nf = Number(nfm.value)
        let np = Number(npas.value)
        if(np == 0){
            window.alert('Passo não pode ser 0! Considerando PASSO como 1!')
            np = 1
        }
        if (ni < nf){ //Contagem crescente
            for(let c = ni; c <= nf; c += np){
                res.innerHTML += `\u{1F449}${c}` //para usar emojis no JS usa \u{ }
                }
        } else{ //Contagem regressiva
            for(let c = ni; c >= nf; c -= np){
                res.innerHTML += `\u{1F449}${c}`
            }
        }
        res.innerHTML += ` \u{1F3C1}` //os emojis só funcionam dentro de ``
    }
    
}