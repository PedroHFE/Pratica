function carregar() {
    let data = new Date()
    var hora = data.getHours()
    let min = data.getMinutes()
    let msg = window.document.getElementById('msg')
    var img = window.document.querySelector("img#foto")
    msg.innerHTML = `Agora são exatamente ${hora} horas e ${min} minutos`
    if(hora >= 0 && hora < 5){
        msg.innerHTML += `<p>Boa madrugada!</p>`
        img.src = "img/0a5.png"
        document.body.style.background = '#013949'
    } 
        else if( hora >= 6 && hora <= 8){
            msg.innerHTML += `<p>Bom dia!</p>`
            img.src = "img/6a8.png"
            document.body.style.background = '#b2ecfd'
        } 
            else if(hora >= 9 && hora <= 12){
            msg.innerHTML += `<p>Bom dia!</p>`
            img.src = "img/9a12.png" 
            document.body.style.background = '#5baac9'
        } 
        else if(hora >= 13 && hora <= 16){
            msg.innerHTML += `<p>Boa tarde!</p>`
            img.src = "img/13a16.png"
            document.body.style.background = '#ffd54f'
        } 
            else if(hora >= 17 && hora <= 19){
            msg.innerHTML += `<p>Boa Noite!</p>`
            img.src = "img/17a19.png"
            document.body.style.background = '#a43b50'
        } 
        else if(hora >= 20 && hora <= 23){
            msg.innerHTML += `<p>Boa Noite!</p>`
            img.src = "img/20a23.png"
            document.body.style.background = '#1e222a'
        }
}