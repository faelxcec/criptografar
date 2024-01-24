let textoinput = document.querySelector("textarea");

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function criptografar(){
    let textoCriptografado = "";
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const newAlphabet = ['ai', 'b', 'c', 'd', 'enter', 'f', 'g', 'h', 'imes', 'j', 'k', 'l', 'm', 'n', 'ober', 'p', 'q', 'r', 's', 't', 'ufat', 'v', 'w', 'x', 'y', 'z'
]
    mensagem = textoinput.value;

    for(const char of mensagem){
        let newChar = char
        const charIndexAtAlphabet = alphabet.indexOf(char)
        if (charIndexAtAlphabet >= 0) {
            newChar = newAlphabet.at(charIndexAtAlphabet)
            textoCriptografado += newChar
        }
        
    }
    exibirTextoNaTela("p",`${textoCriptografado}`)
    document.getElementById("container__retangulo").style.display = "flex";
    document.getElementById("meninadiamante").style.display = "none";
}
function descriptografar() {
    let textoDescriptografado = "";
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const newAlphabet = ['ai', 'b', 'c', 'd', 'enter', 'f', 'g', 'h', 'imes', 'j', 'k', 'l', 'm', 'n', 'ober', 'p', 'q', 'r', 's', 't', 'ufat', 'v', 'w', 'x', 'y', 'z'];

    const mensagemCriptografada = textoinput.value;

    let i = 0;
    while (i < mensagemCriptografada.length) {
        let found = false;
        for (const substr of newAlphabet) {
            if (mensagemCriptografada.startsWith(substr, i)) {
                textoDescriptografado += alphabet[newAlphabet.indexOf(substr)];
                i += substr.length;
                found = true;
                break;
            }
        }
        if (!found) {
            textoDescriptografado += mensagemCriptografada[i];
            i++;
        }
    }

    exibirTextoNaTela("p", `${textoDescriptografado}`);
    document.getElementById("container__retangulo").style.display = "flex";
    document.getElementById("meninadiamante").style.display = "none";
}
function copiarTexto() {
    const textoDescriptografadoElemento = document.querySelector("p");
    const range = document.createRange();
    range.selectNodeContents(textoDescriptografadoElemento);
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range);

    try {
        document.execCommand('copy');
        alert('Texto copiado para a área de transferência!');
    } catch (err) {
        console.error('Erro ao copiar o texto: ', err);
    }

    window.getSelection().removeAllRanges();
}






