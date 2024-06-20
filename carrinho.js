if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready(){
    //Botão de adicionar ao carrinho
    const adicionar = document.getElementsByClassName("bac")
    for (var p = 0; p < adicionar.length; p++) {
        adicionar[p].addEventListener("click", adc)
    }
    //Botão de remover produto do carrinho
    const bremove = document.getElementsByClassName("brm")
    for (var i = 0; i < bremove.length; i++) {
    bremove[i].addEventListener('click', function(event) {
        event.target.parentElement.parentElement.remove()
        totalcart()
    })
    //Mudança valor dos inputs
    const quantityInputs = document.getElementsByClassName("qua")
    for (var i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener("change", totalcart)
    }
    const inputq = document.getElementsByClassName("qua")
    for (var z = 0; inputq.length; z++){
        inputq[z].addEventListener("change", totalcart)
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
    const namep = document.getElementsByClassName('np')[0].innerText
    for (var i = 0; i < namep.length; i++) {
    if (namep[i].innerText === nomep) {
        namep[i].parentElement.getElementsByClassName("qua")[0].value++
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
        <tr class="cartp"><th id="item"><img src="${imgp}" class="sp" alt="${nomep}"></th>
        <td><span class="np"><strong>${nomep}</strong></span></td>
        <td id="preço"><span class="preco ">${precop}</span></td>
        <td id="quant"><input type="number" class= "qua" value="1" min="1" name="quantidade" id="qn"></td>
        <td><button type="button" class="brm">Remover</button></td></tr>
    </tbody>
    `
    const tbody = document.querySelector('table#pcarrinho tbody')
    tbody.append(novop)
    document.querySelector("table#pcarrinho").style.display = "block";
    document.querySelector('button#bfc').innerText = 'Finalizar compra'
    totalcart()
    novop.getElementsByClassName("brm")[0].addEventListener("click", remove)
    novop.getElementsByClassName("qua")[0].addEventListener("change", inputnull)
    
}
function makePurchase() {
    if (totalp === "0,00") {
    alert("Seu carrinho está vazio!")
    } else {   
    alert(
        `Obrigado pela sua compra!
        Valor do pedido: R$${totalp}\n
        Volte sempre :)`
    )
    document.querySelector('table#pcarrinho tbody').innerHTML = ""
    totalcart()
    }
}
//Atualizar o valor total do carrinho
function totalcart(){
    let totalp = 0
    const linhap = document.getElementsByClassName("prl")
    for(var i = 0; i < linhap.length; i++){
        const pprice = linhap[i].innerText.replace("R$", "").replace(",", ".")
        let pquant = linhap[i].getElementsByClassName("qua").value
        qn = Number(pquant.value)
        totalp += pprice * pquant
        var ptotal = document.querySelector('span#tl')
        ptotal.innerHTML = `${totalp}`
    }
    totalp = totalp.toFixed(2)
    totalp = totalp.replace(".", ",")
}