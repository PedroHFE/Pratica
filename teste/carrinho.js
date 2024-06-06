function carrinho(){
    if(modal.style.display == 'block'){
        modal.style.display = 'none';
    }else{
        modal.style.display = 'block';
    }
}
const fr = (valor) => { //Formato Real p/ converter o valor e preenchimento das casas de milhar
    return valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}
const fm = (valor) => {// Formato Monetário p/ deixar 2 casas decimais
    if(valor){
        return valor.toFixed(2)
    }
}



function adc(){
    const infp = document.querySelector('p.produtos')
    const imgp= infp.getElementsByClassName("sp")[0].src
    const nomep = infp.getElementsByClassName('np')[0].innerText
    const precop = infp.getElementsByClassName("preco")[0].innerText
    let novop = document.createElement('tr')
    novop.classList.add("cartp")
    novop.innerHTML = 
    `<tbody>
        <tr class="cartp"><th id="item"><img src="${imgp}" class="sp" alt="${nomep}"></th>
        <td><span class="np"><strong>${nomep}</strong></span></td>
        <td id="preço"><span class="preco">${precop}</span></td>
        <td id="quant"><input type="number" min="1" name="quantidade" id="qn"></td>
        <td><button type="button" class="brm">Remover</button></td></tr>
    </tbody>
    `
    const tbody = document.querySelector('table#pcarrinho tbody')
    tbody.append(novop)
    document.querySelector("table#pcarrinho").style.display = "block";
    document.querySelector('button#bfc').innerText = 'Finalizar compra'
    const bremove = document.getElementsByClassName("brm")
    for (var i = 0; i < bremove.length; i++) {
    bremove[i].addEventListener("click", function(event) {
        event.target.parentElement.parentElement.remove()
    })
    const quantp = document.getElementsByClassName('quantidade')
    for (var p = 0; p < quantp.length; p++){
        precop[p].getElementById('#preco')[0]
        console.log(precop)
    }
    }
}