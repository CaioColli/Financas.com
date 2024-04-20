export function validaOpcaoPreFormulario() {
    const escolhas = document.querySelectorAll('#opcao') as NodeListOf<HTMLInputElement>

    let estaSelecionado = false
    let escolhaFeita: any
    
    escolhas.forEach((input) => {
        if ((input as HTMLInputElement).checked) {
            estaSelecionado = true
            escolhaFeita = input
        } 
    })

    if (estaSelecionado) {
        return escolhaFeita
    } else {
        return null
    }
}