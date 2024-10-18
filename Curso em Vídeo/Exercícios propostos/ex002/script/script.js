function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano_nascimento')
    var res = document.getElementById('res')
    var img = document.getElementById('img')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/criança_homem.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem_homem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto_homem.jpg')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/criança_mulher.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem_mulher.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto_mulher.jpg')
            }
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
}