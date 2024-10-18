function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    // res.innerHTML = ''

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar...'
    } else {
        if (passo <= 0) {
            window.alert('Passo enválido! Considerando PASSO 1')
            passo = 1
        }
        
        res.innerHTML = 'Contando: <br>'

        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
    
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} &#x1F449`
            } 
            res.innerHTML += 'FIM!'
        } else {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} &#x1F449`
                    }
            res.innerHTML += 'FIM!'
        }
    }
}