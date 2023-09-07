function calcular(tipo, valor) {
    if(tipo === 'acao') {
        if(valor === 'c') {
            document.getElementById('resultado').value = ''
        }
        else if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor 
        }

        else if(valor === '=') {
            var valorFinal = document.getElementById('resultado').value
            document.getElementById('resultado').value = eval(valorFinal)
        }
    }
    else if(tipo === 'valor') {
        document.getElementById('resultado').value += valor
    }
}