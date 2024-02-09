function verifica(){
    
    const txtAno = window.document.getElementById('age_id').value  
    var txtP = window.document.getElementById('txtP')
    var nAno = Number(txtAno)
    const age = new Date();
    var anoA = age.getFullYear()
    var imge = document.createElement('img')
    imge.setAttribute('id', 'foto')
    const sexo = window.document.querySelector('input[name=sexo]:checked').value
    var idade = anoA - nAno
    
    if(txtAno == 0 || nAno > anoA){
        window.alert (`[ERRO] verifique os dados e tente novamente`)
    }else{
        switch(sexo){
            case 'masculino':
                if(idade < 18){
                    imge.setAttribute('src','imagens/homemC.jpg')
                }else if(idade < 65){
                    imge.setAttribute('src','imagens/homemA.jpg')
                }else{
                    imge.setAttribute('src','imagens/homemI.jpg')
                }
                break
            case 'feminino':
                if(idade < 18){
                    imge.setAttribute('src','imagens/mulherC.jpg')
                }else if(idade < 65){
                    imge.setAttribute('src','imagens/mulherA.jpg')
                }else{
                    imge.setAttribute('src','imagens/mulherI.jpg')
                }
                break
        }
        txtP.innerHTML = `Você nasceu em: ${nAno}, é do sexo ${sexo} e tem ${idade} anos <br>`
        txtP.appendChild(imge)
    }
}