function contar(){
    let txtIni = document.getElementById('numIni_id').value
    let txtFim = document.getElementById('numFim_id').value
    let txtPasso = document.getElementById('passo_id').value
    let txtP = window.document.getElementById('txtP')

    passo = Number(txtPasso)
    
    if(txtIni.length == 0 || txtFim.length == 0 || txtPasso.length == 0){
        txtP.innerHTML = `Impossível contar`
    }else{
        if(passo <= 0){
            window.alert('Passo inválido, considerando PASSO 1')
            passo = 1
        }
        ini = Number(txtIni)
        fim = Number(txtFim)

        txtP.innerHTML = `Contando... <br>`
        if(fim < ini){
            do{
                txtP.innerHTML += `${ini} &#128073`
                ini -= passo
            }while(fim <= ini)
        }else{
            do{
                txtP.innerHTML += `${ini} &#128073`
                ini += passo
            }while(ini <= fim)
        }
        txtP.innerHTML += `&#128681`
    }
}