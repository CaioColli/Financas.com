import { validaEntrada } from '../Validações Formulários/validaTitulo.js'

export function inputTitulo() {
    const tituloEntrada = document.querySelectorAll('#input_titulo')

    tituloEntrada.forEach((input: HTMLInputElement) => {
        input.addEventListener('input', () => {
            validaEntrada(input)
        })
    })
}