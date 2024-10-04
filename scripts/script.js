function carregar(){
    const data = new Date()
    const hora = data.getHours()
    const min = data.getMinutes()
    const corpo = window.document.getElementById('corpo')
    var txtP = window.document.getElementById('txtP')
    var Nhora = Number(hora)
    txtP.innerHTML = `Agora são ${hora} Horas e ${min} minutos:`
    if(Nhora >=6 && Nhora < 12){
        corpo.style.backgroundColor = "#C7B78A"
        document.getElementById('img').innerHTML = "<img src='imagens/manha.jpg'>"
    }else if(Nhora >= 12 && Nhora <= 18){
        corpo.style.backgroundColor = "#A57865" 
        document.getElementById('img').innerHTML = "<img src='imagens/tarde.jpg'>"
    }else{
        corpo.style.backgroundColor = "#655577"
        document.getElementById('img').innerHTML = "<img src='imagens/noite.jpg'>"
    }
}
