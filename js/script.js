function verificar() {
    const signo = document.querySelector('div#signo')
    const caracteristticas = document.querySelector('p#caracteristicas')
    var data = document.querySelector('input#data').value.split("-")[2]
    var mes = document.querySelector('input#data').value.split("-")[1]
    var resultado = ''
    
    if (data >= 21 && mes == 1 || data <= 19 && mes <= 2)  {
        resultado = `<b>Aquário<b>`
        descricao = 'Quem tem sol em Aquário costuma ter a amizade como cartão de visita e ter uma conexão intensa com a liberdade. Signo idealista, tende a dar preferência aos diálogos racionais. Aquário é solidário e humano, também pode ser radical e bem “do contra”.'
        signo.innerHTML = `Seu signo é ${resultado}.`
        caracteristticas.innerHTML = `<b>Características:</b> ${descricao}`
    } else if (data >= 19 && mes == 2 || data <= 20 && mes == 3){
        resultado = `<b>Peixes<b>`
        descricao = 'Quem tem sol em Peixes costuma entender tudo sem precisar de muitas palavras, possuem uma sensibilidade superior. Signo compassivo e inspirador, Peixes tende a ter uma forte conexão com a espiritualidade, mas pode se iludir com certa facilidade.'
        signo.innerHTML = `Seu signo é ${resultado}.`
        caracteristticas.innerHTML = `<b>Características:</b> ${descricao}`
    } else if (data >= 21 && mes == 3 || data < 21 && mes == 4) {
        resultado = `<b>Aries<b>`
        descricao = 'Quem tem sol em Áries costuma viver no agora; além de possuir um grande prazer em existir, ação e decisão também podem ser algumas de suas marcas.'
        signo.innerHTML = `Seu signo é ${resultado}.`
        caracteristticas.innerHTML = `<b>Características:</b> ${descricao}`
    } else if (data >= 21 && mes == 4 || data <= 20 && mes == 5) {
        resultado = `<b>Touro<b>`
        descricao = 'Quem nasce com o sol no signo Touro pode se identificar com virtudes como a paciência, o bom gosto e a sensualidade.'
        signo.innerHTML = `Seu signo é ${resultado}.`
        caracteristticas.innerHTML = `<b>Características:</b> ${descricao}`
    } else if (data >= 21 && mes == 5 || data <= 20 && mes == 6) {
        resultado = `<b>Gêmeos<b>`
        descricao = 'Quem nasce com o sol no signo de Gêmeos geralmente se identifica com características como a curiosidade, a inteligência e o desejo de liberdade.'
        signo.innerHTML = `Seu signo é ${resultado}.`
        caracteristticas.innerHTML = `<b>Características:</b> ${descricao}`
    } else if (data >= 21 && mes == 6 || data <= 22 && mes == 7) {
        resultado = `<b>Câncer<b>`
        descricao = 'Quem tem sol em Câncer costuma buscar o que lhe traz segurança. O signo é maternal e emotivo e tem uma proximidade com o apego ao passado.'
        signo.innerHTML = `Seu signo é ${resultado}.`
        caracteristticas.innerHTML = `<b>Características:</b> ${descricao}`
    } else if (data >= 23 && mes == 7 || data <= 22 && mes == 8) {
        resultado = `<b>Leão<b>`
        descricao = 'Quem tem sol em Leão costuma amar plateias e aplausos. O signo tem a coragem e o humor como marcas registradas, mas também o orgulho e o autoritarismo.'
        signo.innerHTML = `Seu signo é ${resultado}.`
        caracteristticas.innerHTML = `<b>Características:</b> ${descricao}`
    } else if (data >= 23 && mes == 8 || data <= 22 && mes == 9) {
        resultado = `<b>Virgem<b>`
        descricao = 'Quem tem sol em Virgem costuma buscar constantemente a perfeição, tudo sempre poderia estar um pouco melhor. Signo observador, que costuma identificar o detalhe que ninguém mais percebe.'    
        signo.innerHTML = `Seu signo é ${resultado}.`
        caracteristticas.innerHTML = `<b>Características:</b> ${descricao}`
    } else if (data >= 23 && mes == 9 || data <= 22 && mes == 10) {
        resultado = `<b>Libra<b>`
        descricao = 'Quem tem sol em Libra costuma buscar sempre o equilíbrio e conviver com a indecisão. Regido por Vênus, o signo tem uma aproximação natural com as artes.'
        signo.innerHTML = `Seu signo é ${resultado}.`
        caracteristticas.innerHTML = `<b>Características:</b> ${descricao}`
    } else if (data >= 23 && mes == 10 || data <= 21 && mes == 11) {
        resultado = `<b>Escorpião<b>`
        descricao = 'Quem tem sol em Escorpião costuma ter muita perspicácia, não é a toa que são naturalmente detetives. O sexto sentido do signo alerta para possíveis “perigos” logo de cara.'
        signo.innerHTML = `Seu signo é ${resultado}.`
        caracteristticas.innerHTML = `<b>Características:</b> ${descricao}`
    } else if (data >= 22 && mes == 11 || data <= 21 && mes == 12) {
        resultado = `<b>Sagitário<b>`
        descricao = 'Quem tem sol em Sagitário costuma ser viajante, sua casa é o mundo inteiro. O signo viaja muito também em sua própria mente. Não tente aprisionar Sagitário de nenhuma forma, ele não aceita limites.'
        signo.innerHTML = `Seu signo é ${resultado}.`
        caracteristticas.innerHTML = `<b>Características:</b> ${descricao}`
    } else {
        if (data && mes != null) {
            resultado = `<b>Capricórnio<b>`
            descricao = 'Quem tem sol em Capricórnio costuma ter seus propósitos e metas bem definidos. Signo de praticidade que segue as regras do jogo tem total noção dos seus limites. Capricórnio é maduro e bem humorado, mas também pode ser frio nas relações e um tanto pessimista.'
            signo.innerHTML = `Seu signo é ${resultado}.`
            caracteristticas.innerHTML = `<b>Características:</b> ${descricao}`
        }else {
            alert('Data inválida! Por favor, informe uma data válida.')
            signo.innerHTML = `Insira uma data válida.`
            caracteristticas.innerHTML = ''
        }
    }
    
}