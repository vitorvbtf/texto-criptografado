const letras = ['a', 'e', 'i', 'o', 'u',]
let textoDoUsuario = '';
let mensagemCriptografada = '';
let resposta = document.getElementById('resposta')
let imagem = document.querySelector('img.nada-encontrado-imagem')
let h1 = document.querySelector('h1.nada-encontrado')
let p = document.querySelector('p.nada-encontrado')


function criptografar(){
    textoDoUsuario = document.getElementById
    ('caixa-de-texto').value

    resposta.innerHTML = ""
    for (let i = 0; i < textoDoUsuario.length; i++) {
        switch (textoDoUsuario[i]) {
            case "a":
                mensagemCriptografada += 'ai'
                break;
            case "e":
                mensagemCriptografada += 'enter'
                break;
            case "i":
                mensagemCriptografada += 'imes'
                break;
            case "o":
                mensagemCriptografada += 'ober'
                break;
            case "u":
                mensagemCriptografada += 'ufat'
                break;
            default:
                mensagemCriptografada += textoDoUsuario[i]
        }
    }
    if(mensagemCriptografada.length > 1){
    imagem.setAttribute("hidden", true)
    h1.setAttribute("hidden", true)
    p.setAttribute("hidden", true)
    return resposta.innerHTML = mensagemCriptografada
    } else{
        alert('campo vazio!')
    }
}

function descriptografar(){
    
    textoDoUsuario = document.getElementById('caixa-de-texto').value
    textoDoUsuario = textoDoUsuario
    .replace(/ai/g, 'a')
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u')

    if(textoDoUsuario.length > 1){
    imagem.setAttribute("hidden", true)
    h1.setAttribute("hidden", true)
    p.setAttribute("hidden", true)
    return resposta.innerHTML = textoDoUsuario
    } else{
        alert('campo vazio!')
    }
}

function copiar() {
    // Selecionar o elemento de resposta
    const elementoResposta = document.getElementById('resposta');

    // Criar uma área de transferência
    const areaTransferencia = document.createElement('textarea');
    
    // Definir o valor da área de transferência como o texto da resposta
    areaTransferencia.value = elementoResposta.innerText;

    // Adicionar a área de transferência ao corpo do documento
    document.body.appendChild(areaTransferencia);

    // Selecionar o texto na área de transferência
    areaTransferencia.select();
    
    // Copiar o texto
    document.execCommand('copy');

    // Remover a área de transferência após a cópia
    document.body.removeChild(areaTransferencia);

    // Exibir uma mensagem de sucesso
    alert('Texto copiado com sucesso!');
}
