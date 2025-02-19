function somar(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    var res = document.getElementById("res")
    res.innerHTML = numero1 + numero2
 
}

function sub(){
    var numero1 = parseFloat(document.getElementById("n3").value)
    var numero2 = parseFloat(document.getElementById("n4").value)
    var res = document.getElementById("resSub")
    res.innerHTML = numero1 - numero2
  
}

function multi(){
    var numero1 = parseFloat(document.getElementById("n5").value)
    var numero2 = parseFloat(document.getElementById("n6").value)
    var res = document.getElementById("resMulti")
    res.innerHTML = numero1 * numero2

}

function div(){
    document.getElementById("n8").style.border = "1px solid black"
    var numero1 = parseFloat(document.getElementById("n7").value)
    var numero2 = parseFloat(document.getElementById("n8").value)
    var res = document.getElementById("resDiv")
    if(numero2 !== 0){
        res.innerHTML = (numero1 / numero2).toFixed(1)
    }else{
        res.innerHTML = "Não é permitido divisão por 0"
        document.getElementById("n8").style.border = "2px solid red"
    } 
}

function media(){
    var m1 = parseFloat(document.getElementById("m1").value)
    var m2 = parseFloat(document.getElementById("m2").value) 
    var m3 = parseFloat(document.getElementById("m3").value) 
    var m4 = parseFloat(document.getElementById("m4").value) 
    var m5 = parseFloat(document.getElementById("m5").value) 
    var media = document.getElementById("respMedia")
    var msg = document.getElementById("msg")
    var res = (m1 + m2 + m3 + m4 + m5) / 5
    if(res >= 7){
        media.textContent = res
        msg.textContent = "PASSOU"
        msg.style.color = "green"
    }else{
        media.textContent = res
        msg.textContent = "REPROVOU"
        msg.style.color = "red"
    }
}
