function soma(){  //Função somar
    let nad1 = document.querySelector("input#ad1")
    let nad2 = document.querySelector("input#ad2")
    let resad = document.querySelector("div#ressoma")
    if(nad1.value.length == 0 || nad2.value.length == 0){
        window.alert('[ERRO] Por favor, digite os valores para somar!')
    } else{
        n1 = Number(nad1.value)
        n2 = Number(nad2.value)
        r = n1+n2
        resad.innerHTML = `A soma de ${n1} + ${n2} é = ${r}`
    }
}
function limparad(){ // Limpar soma
    let n1 = document.querySelector("input#ad1").value = ""
    let n2 = document.querySelector("input#ad2").value = ""
    let res = document.querySelector("div#ressoma")
    res.innerHTML = ""
}
function tirar(){ //Função subtrair
    let nsub1 = document.querySelector("input#sub1")
    let nsub2 = document.querySelector("input#sub2")
    let ressub = document.querySelector("div#restirar")
    if(nsub1.value.length == 0 || nsub2.value.length == 0){
        window.alert('[ERRO] Por favor, digite os valores para subtrair!')
    } else{
        n1 = Number(nsub1.value)
        n2 = Number(nsub2.value)
        r = n1-n2
        ressub.innerHTML = `A subtração de ${n1} - ${n2} = ${r}`
    }
}
function limparsub(){ //Limpar subtrair
    let n1 = document.querySelector("input#sub1").value = ""
    let n2 = document.querySelector("input#sub2").value = ""
    let res = document.querySelector("div#restirar")
    res.innerHTML = ""
}
function multi(){ //Função multiplicação
    let nmulti1 = document.querySelector("input#ml1")
    let nmulti2 = document.querySelector("input#ml2")
    let resmulti = document.querySelector("div#resmulti")
    if(nmulti1.value.length == 0 || nmulti2.value.length == 0){
        window.alert('[ERRO] Por favor, digite os valores para multiplicar!')
    } else{
        n1 = Number(nmulti1.value)
        n2 = Number(nmulti2.value)
        r = n1*n2
        resmulti.innerHTML =`A multiplicação de ${n1} x ${n2} = ${r}`
    }
}
function limparmt(){ //Limpar multiplicação
    let n1 = document.querySelector("input#ml1").value = ""
    let n2 = document.querySelector("input#ml2").value = ""
    let res = document.querySelector("div#resmulti")
    res.innerHTML = ""
}
function dividir(){ //Função de divisão
    let ndiv1 = document.querySelector("input#div1")
    let ndiv2 = document.querySelector("input#div2")
    let resdiv = document.querySelector("div#resdividir")
    if(ndiv1.value.length == 0 || ndiv2.value.length == 0){
        window.alert('[ERRO] Por favor digite os valores para dividir!')
    } else{
        n1 = Number(ndiv1.value)
        n2 = Number(ndiv2.value)
        r = n1/n2
        resdiv.innerHTML = `A divisão de ${n1} / ${n2} = ${r}`
    }
}
function limpardv(){ //Limpar divisão
    let n1 = document.querySelector("input#div1").value = ""
    let n2 = document.querySelector("input#div2").value = ""
    let res = document.querySelector("div#resdividir")
    res.innerHTML = ""
}
function caltudo(){
    let nad1 = document.querySelector("input#ad1")
    let nad2 = document.querySelector("input#ad2")
    let resad = document.querySelector("div#ressoma")
    let nsub1 = document.querySelector("input#sub1")
    let nsub2 = document.querySelector("input#sub2")
    let ressub = document.querySelector("div#restirar")
    let nmulti1 = document.querySelector("input#ml1")
    let nmulti2 = document.querySelector("input#ml2")
    let resmulti = document.querySelector("div#resmulti")
    let ndiv1 = document.querySelector("input#div1")
    let ndiv2 = document.querySelector("input#div2")
    let resdiv = document.querySelector("div#resdividir")
    if(nad1.value.length == 0 || nad2.value.length == 0){
        window.alert('[ERRO] Por favor, digite os valores para somar!')
    } else if(nsub1.value.length == 0 || nsub2.value.length == 0){
        window.alert('[ERRO] Por favor, digite os valores para subtrair!')
    } else if(nmulti1.value.length == 0 || nmulti2.value.length == 0){
        window.alert('[ERRO] Por favor, digite os valores para multiplicar!')
    } else if(ndiv1.value.length == 0 || ndiv2.value.length == 0){
        window.alert('[ERRO] Por favor digite os valores para dividir!')
    } else{
        nadi1 = Number(nad1.value)
        nadi2 = Number(nad2.value)
        radi = nadi1+nadi2
        resad.innerHTML = `A soma de ${nadi1} + ${nadi2} é = ${radi}`
        
        nsb1 = Number(nsub1.value)
        nsb2 = Number(nsub2.value)
        rsb = nsb1-nsb2
        ressub.innerHTML = `A subtração de ${nsb1} - ${nsb2} = ${rsb}`
        
        nml1 = Number(nmulti1.value)
        nml2 = Number(nmulti2.value)
        rml = nml1*nml2
        resmulti.innerHTML =`A multiplicação de ${nml1} x ${nml2} = ${rml}`

        ndv1 = Number(ndiv1.value)
        ndv2 = Number(ndiv2.value)
        rdv = ndv1/ndv2
        resdiv.innerHTML = `A divisão de ${ndv1} / ${ndv2} = ${rdv}`
    }
}
function limtudo(){
    let nad1 = document.querySelector("input#ad1").value = ""
    let nad2 = document.querySelector("input#ad2").value = ""
    let resad = document.querySelector("div#ressoma")
    let nsub1 = document.querySelector("input#sub1").value = ""
    let nsub2 = document.querySelector("input#sub2").value = ""
    let ressub = document.querySelector("div#restirar")
    let nmulti1 = document.querySelector("input#ml1").value = ""
    let nmulti2 = document.querySelector("input#ml2").value = ""
    let resmulti = document.querySelector("div#resmulti")
    let ndiv1 = document.querySelector("input#div1").value = ""
    let ndiv2 = document.querySelector("input#div2").value = ""
    let resdiv = document.querySelector("div#resdividir")
    resad.innerHTML = ""
    ressub.innerHTML = ""
    resmulti.innerHTML = ""
    resdiv.innerHTML = ""
}