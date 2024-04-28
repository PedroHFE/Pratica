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