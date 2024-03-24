function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data =new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agoras são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'foto-manha.jpg'
        document.body.style.background = '#707070'
        
    } else if(hora >= 12 && hora < 18) {
        //bom tarde
        img.src = 'foto-tarde.jpg'
        document.body.style.background = '#000000'
    } else{
        //boa noite
        img.src = 'foto-noite.jpg'
    }
}
