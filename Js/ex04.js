function gerar(){
    let numero = document.querySelector("input#nm")
    let tab = document.querySelector("select#seltab")
    if (numero.value.length == 0){
        window.alert('[ERRO] Por favor, digite um número!')
    } else {
        nm = Number(numero.value)
        tab.innerHTML = ""
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${nm} x ${c} = ${nm*c}`
            tab.appendChild(item)
            item.value = `tab${c}`
        }
    }
}