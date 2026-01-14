function carregar() {
    function hours() { //mostra a hora em tempo real
        var hours = document.getElementById('msg')
        var date1 = new Date()
        var gthours = date1.getHours()
        var gtminutes = date1.getMinutes()
        var gtseconds = date1.getSeconds()

        if (gthours < 10) {
            gthours = `0${gthours}`
        }
        if (gtminutes < 10) {
            gtminutes = `0${gtminutes}`
        }

        if (gtseconds < 10) {
            gtseconds = `0${gtseconds}`
        }
        hours.textContent = `Azora: ${gthours}:${gtminutes}:${gtseconds}`
    }

    var tictac = setInterval(hours, 1000)
    hours()

    var data = new Date //mostra mensagem conforme a hora
    var hora = data.getHours()
    var mensagem = document.getElementById('msg2')

    if (hora >= 0 && hora <= 12) {
        //Bom Dia!!
        mensagem.textContent = `Bom Dia!`
    } else if (hora > 12 && hora <= 18) {
        // Boa Tarde
        mensagem.textContent = 'Boa Tarde!'
    } else {
        // Boa Noite
        mensagem.textContent = 'Boa Noite!'
    }
}