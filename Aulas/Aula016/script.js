
let txtNum = document.getElementById('num_id')
let sel = document.getElementById('tab_id')
let res = document.getElementById('res')
var vet = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){

    if(isNumero(txtNum.value) && !inLista(txtNum.value, vet)){
        vet.push(Number(txtNum.value))
        let num = Number(txtNum.value)
        let item = document.createElement('option')
        item.text = `O valor ${txtNum.value} foi adicionado a lista`
        item.value = `sel${txtNum.value}`
        sel.appendChild(item)
        res.innerHTML = ''

    }else{
        window.alert(`Valor invalido ou já consta na lista`)
    }
    txtNum.value = ''
    txtNum.focus()
}

function resultado(){
    if(vet.length == 0){
        window.alert(`Adicione Valores antes de finalizar`)
    }else{
        let maior = vet[0]
        let menor = vet[0]
        let soma = 0
        for(let i in vet){
            soma += vet[i]
            if(vet[i] > maior){
                maior = vet[i]
            }
            if(vet[i] < menor){
                menor = vet[i]
            }
        }
        res.innerHTML = ''
        res.innerHTML += `Número adicionados: ${vet.length}<br> Soma dos valores: ${soma} <br> Média dos valores: ${soma/vet.length} <br> Maior número: ${maior} <br> Menor número: ${menor}`
    }
}
