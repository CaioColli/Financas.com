export function validaOpcaoPreFormulario() {
    const escolhas = document.querySelectorAll('#opcao');
    let estaSelecionado = false;
    let escolhaFeita;
    escolhas.forEach((input) => {
        if (input.checked) {
            estaSelecionado = true;
            escolhaFeita = input;
        }
    });
    if (estaSelecionado) {
        return escolhaFeita;
    }
    else {
        return null;
    }
}
