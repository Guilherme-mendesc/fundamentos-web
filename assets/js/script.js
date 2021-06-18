/*
Case Sensitive = reconhece letras maicusulas e minusculas
por Tag: getElementByName()
por ID: getElementById()
por nome: getElementbyClassName()
por Classe: GetElementByClassName()
por Seletor: querySelector()
*/

let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk =false
let emailOk =false
let assuntoOk =false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
   let txtNome = document.querySelector('#txtNome')
   if(nome.value.length < 3){
      txtNome.innerHTML='Nome Inválido'
      txtNome.style.color = 'red'
   }else{
     txtNome.innerHTML = 'Nome Válido'
     txtNome.style.color= 'green'
     let nomeOk =true
   }
}

function validaEmail() {
    let txtemail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color='red'
    }else{
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color='green'
        let emailOk =true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML= 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display='block'
    }else{
        txtAssunto.style.display='none'
        let assuntoOk =true
    }
}
    function enviar(){

            if(nomeOk == true && emailOk == true && assuntoOk == true){
                alert('Formulário enviado com suceesso!')
            }else {
              alert('Preencha o formulário corretamente, antes de enviar...')  
            }
    }

    function mapaZoom(){
        mapa.style.width = '800px'
        mapa.style.height= '600px'
    }
    function mapaNormal(){
        mapa.style.width = '400px'
        mapa.style.height= '250px'
    }


