const editor = document.getElementById('editor');
const bRodar = document.getElementById('b-rodar');
const pSaida = document.getElementById('retorno');

function executar() {
    const codigo = editor.value;
    if (codigo.trim() == "") {
        pSaida.innerText = "Digite algo antes de rodar o código!";
        return;
    }

    pSaida.innerText = "Você rodou:\n" + codigo;
}

bRodar = addEventListener('click', executar);