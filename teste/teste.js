function clickMain(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
        x.style.display = 'none'
        main.style.display = 'block'
    } else {
        itens.style.display = 'block'
        x.style.display = 'block'
        main.style.display = 'none'
    }
}
const slide = document.querySelectorAll('img.img')
const prev = document.querySelector('button#al')
const next = document.querySelector('button#ar')
let imgon = 1
function slideoff(){
    slide.forEach(item => item.classList.remove("on"))
}
function slideon(){
    slide[imgon].classList.add("on")
}
function avancar(){
    slideoff()
    if(imgon === slide.length -1){
        imgon = 0
    } else{
        imgon++
    }
    slideon()
}
function voltar(){
    slideoff()
    if(imgon === 0){
        imgon = slide.length -1
    } else{
        imgon--
    }
    slideon()
}
next.addEventListener('click', avancar)
prev.addEventListener('click', voltar)

// carrosel 2
const slide2 = document.getElementsByClassName('img2')
const prev2 = document.querySelector('button#al2')
const next2 = document.querySelector('button#ar2')
let imgon2 = 1
function slideoff2(){
    slide2[imgon2].classList.remove('on2')
}
function slideon2(){
    slide2[imgon2].classList.add("on2")
}
function avancar2(){
    slideoff2()
    if(imgon2 === slide2.length -1){
        imgon2 = 0
    } else{
        imgon2++
    }
    slideon2()
}
function voltar2(){
    slideoff2()
    if(imgon2 === 0){
        imgon2 = slide2.length -1
    } else{
        imgon2--
    }
    slideon2()
}
next2.addEventListener('click', avancar2)
prev2.addEventListener('click', voltar2)