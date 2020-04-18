function data(){
    var data = new Date()
    var horas = data.getHours()
    var dia = data.getDate()
    var D1 = document.querySelector("p#D1")
    var D2 = document.querySelector("p#D2")
    var text = document.querySelector("p#text")
    var diaC = 19
    var horasC = 20
    var resH = horasC - horas
    var resD = diaC - dia
    if (horas > horasC){
        resD -= 1
        if (resH <= 0)
        resH += 24 
    }
    D1.innerText = `${resD}D`
    D2.innerText = `${resH}H`
    text.innerHTML = `O sorteio irar ocorrer <br/> dia ${diaC} as ${horasC}:00h `
}
var body = document.querySelector("body")
var t = screen.width
var g = screen.height
if (t>=701){
    body.style.backgroundSize = `100% ${t+40}px`
}

console.log(`${t} ` + g)
