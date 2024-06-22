if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
var totalp = "0"
function ready(){
    //Botão de adicionar ao carrinho
    const adicionar = document.getElementsByClassName("bac")
    for (var a = 0; a < adicionar.length; a++) {
        adicionar[a].addEventListener("click", adc)
    }
    //Botão de remover produto do carrinho
    const bremove = document.getElementsByClassName("brm")
    for (var r = 0; r < bremove.length; r++) {
    bremove[r].addEventListener('click', function(event) {
        event.target.parentElement.parentElement.remove()
        totalcart()
    })
    //Mudança valor dos inputs
    const inputq = document.getElementsByClassName("qua")
    for (var i = 0; inputq.length; i++){
        inputq[i].addEventListener("change", totalcart)
    }
    }
}
function remove(event) {
    event.target.parentElement.parentElement.remove()
    totalcart()
}
function inputnull(event) {
    if (event.target.value === "0") {
    event.target.parentElement.remove()
    }
    totalcart()
}
function carrinho(){ //Abrir e fechar carrinho de compras
    if(modal.style.display == 'block'){
        modal.style.display = 'none';
        document.querySelector('span#car').style.color = '#0011fca4';
        document.querySelector('span#car').style.background = '#00ccff6c';
        totalcart()
    }else{
        modal.style.display = 'block';
        document.querySelector('span#car').style.color = 'orange';
        document.querySelector('span#car').style.background = '#0011fca4';
        totalcart()
    }
    
}
function adc(event){//Adicionar produtos ao carrinho
    const btn = event.target
    const infp = btn.parentElement
    const imgp= infp.getElementsByClassName("sp")[0].src
    const nomep = infp.getElementsByClassName('np')[0].innerText
    const precop = infp.getElementsByClassName("preco")[0].innerText
    const namep = document.getElementsByClassName('name')
    for (var i = 0; i < namep.length; i++) {
    if (namep[i].innerText === nomep) {
        namep[i].parentElement.parentElement.parentElement.getElementsByClassName("qua")[0].value++
        totalcart()
        return
    }
    }
    let novop = document.createElement('tr')
    document.querySelector('span#car').style.color = 'orange';
    document.querySelector('span#car').style.background = '#0011fca4';
    novop.classList.add("cartp")
    novop.innerHTML = 
    `<tbody>
        <tr class="cartp">
        <th id="item"><img src="${imgp}" class="sp" alt="${nomep}"></th>
        <td><span class="np"><strong class="name">${nomep}</strong></span></td>
        <td id="preço"><span class="preco prl">${precop}</span></td>
        <td id="quant"><input type="number" class= "qua" value="1" min="1" name="quantidade" id="qn"></td>
        <td><button type="button" class="brm">Remover</button></td></tr>
    </tbody>
    `
    const tbody = document.querySelector('table#pcarrinho tbody')
    tbody.append(novop)
    document.querySelector("table#pcarrinho").style.display = "block";
    document.querySelector('button#bfc').innerText = 'Finalizar compra'
    novop.getElementsByClassName("brm")[0].addEventListener("click", remove)
    novop.getElementsByClassName("qua")[0].addEventListener("change", inputnull)
    totalcart()
}
var totalp = "0,00"
function finalizarc() {
    console.log(totalp)
    if (totalp === "0,00") {
    alert("Não é possivel finalizar a compra com o carrinho! Por favor selecione um dos nossos produtos!")
    } else {
        localStorage.produtos = document.querySelector('table#pcarrinho tbody')
    }
}
//Atualizar o valor total do carrinho
function totalcart(){
    totalp = 0
    const linhap = document.getElementsByClassName('cartp')
    for (var i = 0; i < linhap.length; i++) {
        const pr = linhap[i].getElementsByClassName("prl")[0].innerText.replace("R$", "").replace(",", ".")
        const pquant = linhap[i].getElementsByClassName("qua")[0].value
        qn = Number(pquant)
        totalp += pr*qn
        console.log(pr)
            console.log(typeof(pr))
        console.log(qn)
            console.log(typeof(qn))
    }
    var ptotal = document.querySelector('span#tl')
        ptotal.innerHTML = `${totalp}`
        totalp = totalp.toFixed(2)
        totalp = totalp.replace(".", ",")
    }