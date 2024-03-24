function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById ('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE!!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <10){
                img.setAttribute('src' , 'bebe-m.jpg')
            } else if(idade < 21){
                img.setAttribute('src' , 'jovem-m.jpg')
            } else if (idade < 50){
                img.setAttribute('src' , 'adulto-m.jpg')
            } else{
                img.setAttribute('src' , 'idoso-m.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <10){
                img.setAttribute('src' , 'bebe-f.jpg')
            } else if(idade < 21){
                img.setAttribute('src' , 'jovem-f.jpg')
            } else if (idade < 50){
                img.setAttribute('src' , 'adulto-f.jpg')
            } else{
                img.setAttribute('src' , 'idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}