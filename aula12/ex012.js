var agora = new Date()
var horario = agora.getHours()

if(horario >= 12 && horario < 18){
    console.log(`É ${horario}:00 da tarde Boa Tarde!`)
} else if(horario > 17){
    console.log(`É ${horario}:00 da noite Boa Noite!`)
} else{
    console.log(`É ${horario}:00 da Manha Bom Dia!`)
} 