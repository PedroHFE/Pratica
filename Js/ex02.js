function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let anodig = document.getElementById('anonasc')
    let text = document.querySelector("p#txt")
    let imagem = document.querySelector("img#foto")
    if(anodig.value.length == 0 || Number(anodig.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
        imagem.src = "img/erro.png"
        text.innerHTML = "[ERRO] Dados Invalidos!!!!!!!"
        document.body.style.background = "#000000"
        } else {
            let sex = document.getElementsByName('sexo')
            let idade = ano - Number(anodig.value)
            let genero = ""
        if (sex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 4){
                imagem.src = "img/babym.png"
                document.body.style.background = "#484379"
            } else if (idade >= 5 && idade <= 12){
                imagem.src = "img/kidh.png"
                document.body.style.background = "#9cc4ba"
            } else if (idade >= 13 && idade <= 20){
                imagem.src = "img/mancebom.png"
                document.body.style.background = "#a5ba56"
            } else if (idade >= 21 && idade <= 55){
                imagem.src = "img/adulto.png"
                document.body.style.background = "#3a5035"
            } else if (idade >= 56){
                imagem.src = "img/anciao.png"
                document.body.style.background = "#356179"
            }
        } else if(sex[1].checked){
            genero = "Mulher"
            if(idade >= 0 && idade <= 4){
                imagem.src = "img/babyf.png"
                document.body.style.background = "#e6cad9"
            } else if(idade >= 5 && idade <= 12){
                imagem.src ="img/kidf.png"
                document.body.style.background = "#644b82"
            } else if(idade >= 13 && idade <= 20){
                imagem.src = "img/mancebof.png"
                document.body.style.background = "#8b5e33"
            } else if(idade >= 21 && idade <= 55){
                imagem.src = "img/adulta.png"
                document.body.style.background = "#edcaa3"
            } else if(idade >= 56){
                imagem.src = "img/ancia.png"
                document.body.style.background = "#e4a533"
            }
        }
        text.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}