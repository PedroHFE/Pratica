function soma(){
    let nad1 = document.querySelector("input#ad1")
    let nad2 = document.querySelector("input#ad2")
    let resad = document.querySelector("div#ressoma")
    if(nad1.value.length == 0 || nad2.value.length == 0){
        window.alert('[ERRO] Por favor, digite um valor!')
    } else{
        n1 = Number(nad1.value)
        n2 = Number(nad2.value)
        r = n1+n2
        resad.innerHTML = `A soma de ${n1} + ${n2} é = ${r}`
    }
}
function limparad(){
    let n1 = document.querySelector("input#ad1")
    let n2 = document.querySelector("input#ad2")
    let res = document.querySelector("div#ressoma")
    n1.innerHTML = ""
    n2.innerHTML = ""
    res.innerHTML = ""
}