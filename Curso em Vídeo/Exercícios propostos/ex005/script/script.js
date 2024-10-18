var res = document.querySelector("div#res")
var tab = document.querySelector("select#tabela")
var num = document.querySelector("input#numero")
var valores = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {  
    if (isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        var option = document.createElement('option')
        option.innerHTML = `Valor ${num.value} adicionado`
        tab.appendChild(option)
        res.innerHTML = ''
    } else {
        window.alert('Número inválido ou já encontrado na lista.')
    }
    return valores
}

function max(n) {
    return Math.max(...n)
}

function min(n) {
    return Math.min(...n)
}

function soma(n) {
    let s = 0
    for (let item = 0; item < n.length; item++) {
        s += n[item]
    }    
    return s
}

function calcular() {
    res.innerHTML = ''
    res.innerHTML += `Ao todo, temos ${valores.length} números cadastrados.<br> O maior valor informado foi ${max(valores)}.<br> O menor valor informado foi ${min(valores)}.<br> A soma de todos os valores é igual a ${soma(valores)}`
}

