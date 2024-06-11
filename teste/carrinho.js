function carrinho(){ //Abrir e fechar carrinho de compras
    if(modal.style.display == 'block'){
        modal.style.display = 'none';
        document.querySelector('span#car').style.color = '#0011fca4';
        document.querySelector('span#car').style.background = '#00ccff6c';
    }else{
        modal.style.display = 'block';
        document.querySelector('span#car').style.color = 'orange';
        document.querySelector('span#car').style.background = '#0011fca4';
    }
    
}
//Botão de adicionar ao carrinho
const adicionar = document.getElementsByClassName("bac")
for (var p = 0; p < adicionar.length; p++) {
    adicionar[p].addEventListener("click", adc)
}
function adc(event){//Adicionar e remover do carrinho produtos
    const btn = event.target
    const infp = btn.parentElement
    const imgp= infp.getElementsByClassName("sp")[0].src
    const nomep = infp.getElementsByClassName('np')[0].innerText
    var precop = infp.getElementsByClassName("preco")[0].innerText
    let novop = document.createElement('tr')
    document.querySelector('span#car').style.color = 'orange';
        document.querySelector('span#car').style.background = '#0011fca4';
    console.log(infp)
    novop.classList.add("cartp")
    novop.innerHTML = 
    `<tbody>
        <tr class="cartp"><th id="item"><img src="${imgp}" class="sp" alt="${nomep}"></th>
        <td><span class="np"><strong>${nomep}</strong></span></td>
        <td id="preço"><span class="preco">${precop}</span></td>
        <td id="quant"><input type="number" value="1" min="1" name="quantidade" id="qn"></td>
        <td><button type="button" class="brm">Remover</button></td></tr>
    </tbody>
    `
    const tbody = document.querySelector('table#pcarrinho tbody')
    tbody.append(novop)
    document.querySelector("table#pcarrinho").style.display = "block";
    document.querySelector('button#bfc').innerText = 'Finalizar compra'
    const bremove = document.getElementsByClassName("brm")
    for (var i = 0; i < bremove.length; i++) {
    bremove[i].addEventListener('click', function(event) {
        event.target.parentElement.parentElement.remove()
    })
    const quantp = document.getElementsByClassName('quantidade')
    for (var p = 0; p < quantp.length; p++){
        precop[p].getElementById('#preco')[0]
        console.log(precop)
    }
    }
    //Atualizar o preço do carrinho
    var ptotal = document.querySelector('span#tl')
    precop.replace(",", ".")
    var quant = document.querySelector('#qn')
    qn = Number(quant.value)
    price = Number(precop.value)
    pt = Number(ptotal.value)
    var total = qn*price
    ptotal.innerText = `${total}`
    console.log(typeof(qn))
    console.log(typeof(price))
    console.log(typeof(pt))
    console.log(typeof(ptotal))
}
const fr = (valor) => { //Formato Real p/ converter o valor e preenchimento das casas de milhar
    return valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}
const fm = (valor) => {// Formato Monetário p/ deixar 2 casas decimais
    if(valor){
        return valor.toFixed(2)
    }
}