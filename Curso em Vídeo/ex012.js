var hora = 8
console.log(`São exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else if (hora > 18) {
    console.log('Boa noite!')
} else if (hora >= 1 && hora < 4) {
    console.log('Boa madrugada!')
}