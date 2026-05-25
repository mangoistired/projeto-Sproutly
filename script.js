const editor = document.getElementById('editor');
const bRodar = document.getElementById('b-rodar');
const pSaida = document.getElementById('retorno');

let pyodide;

async function inicializar() {
    pSaida.innerText="Carregando...";

    pyodide = await loadPyodide({
        stdout: (texto) => {
            pSaida.innerText += texto + "\n";
        } 
    });

    pSaida.innerText= "Pronto!";

}

inicializar();

async function executar() {
    const codigo = editor.value;
    if (codigo.trim() == "") {
        pSaida.innerText = "Digite algo antes de rodar o código!";
        return;
    }

    // pSaida.innerText = "Você rodou:\n" + codigo;
    pSaida.innerText = ""

    try {
        await pyodide.runPythonAsync(codigo);
    } catch(erro) {
        pSaida.innerText="Erro de Sintaxe: \n" + erro;
    }
}

bRodar = addEventListener('click', executar);