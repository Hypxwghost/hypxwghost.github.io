function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'media/idade/foto-bebe-m.png')
            } else if (idade >= 11 && idade <= 21) {
                //Jovem
                img.setAttribute('src', 'media/idade/foto-jovem-m.png')
            } else if (idade >= 22 && idade <= 50) {
                //Adulto
                img.setAttribute('src', 'media/idade/foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'media/idade/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'media/idade/foto-bebe-f.png')
            } else if (idade >= 11 && idade <= 21) {
                //Jovem
                img.setAttribute('src', 'media/idade/foto-jovem-f.png')
            } else if (idade >= 22 && idade <= 50) {
                //Adulto
                img.setAttribute('src', 'media/idade/foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'media/idade/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
