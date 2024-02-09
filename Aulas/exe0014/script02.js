function gerar(){
    var txtNum = window.document.getElementById('num_id').value
    var sel = document.getElementById('tab_id')
    if(txtNum.length == 0){
        window.alert(`A caixa está vazia, por favor, digite um número`)
    }else{
        sel.innerHTML = ''
        var num = Number(txtNum)
        for(var i = 0; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${num} x ${i}: ${num*i}`
            item.value = `sel${i}`
            sel.appendChild(item)
        }
    }
}