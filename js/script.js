function load() {
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
        hours.textContent = `Time: ${gthours}:${gtminutes}:${gtseconds}`
    }

    var tictac = setInterval(hours, 1000)
    hours()

    var date = new Date //mostra mensagem conforme a hora
    var time = date.getHours()
    var msg = document.getElementById('msg2')

    if (time >= 0 && time <= 12) {
        //Bom Dia!!
        msg.textContent = `Good Morning!`
    } else if (time > 12 && time <= 18) {
        // Boa Tarde
        msg.textContent = 'Good Afternoon!'
    } else {
        // Boa Noite
        msg.textContent = 'Good Night!'
    }
}