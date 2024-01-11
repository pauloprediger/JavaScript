
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
    if (l.indexOf(n) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(txtNum.value) && !inLista(txtNum.value, vet)){
        vet.push(txtNum.value)
        let item = document.createElement('option')
        item.text = `O valor ${txtNum.value} foi adicionado a lista`
        item.value = `sel${txtNum.value}`
        sel.appendChild(item)
        window.alert(vet.length)
        window.alert(vet)
    }else{
        window.alert(`Valor invalido ou já consta na lista`)
    }
}

