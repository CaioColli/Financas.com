import { apenasNumero } from './Validações Formulários/validaValor.js'

const cardAddDinheiroCardAddDespesas = [...document.querySelectorAll('#card_addEntrada'), ...document.querySelectorAll('#card_addDespesa')] as HTMLDivElement[]

export function msgErroPreForm() {
    cardAddDinheiroCardAddDespesas.forEach((evento) => {
        const btnProximoFormulario = evento.querySelectorAll('#btn_prox_formulario') as NodeListOf<HTMLButtonElement>
        const mensagensErro = evento.querySelectorAll('span') as NodeListOf<HTMLSpanElement>

        btnProximoFormulario.forEach((next) => {
            next.addEventListener('click', () => {
                mensagensErro.forEach((msg) => {
                    if (next.classList.contains('btn_prox_form_desabilitado')) {
                        msg.style.display = 'block'

                        setTimeout(() => {
                            msg.style.display = 'none'
                        }, 2000)/////
                    } else {
                        msg.style.display = 'none'
                    }
                })
            })
        })
    })
}

export function msgErroFormulario() {
    cardAddDinheiroCardAddDespesas.forEach((evento) => {
        const formulario = evento.querySelector('#formulario') as HTMLDivElement
        const inputsFormulario = formulario.querySelectorAll('input') as NodeListOf<HTMLInputElement>
        const mensagensErro = formulario.querySelectorAll('span') as NodeListOf<HTMLSpanElement>

        inputsFormulario.forEach((input, index) => {
            input.addEventListener('input', () => {
                if (!input.value) {
                    mensagensErro[index].style.display = 'block'

                    setTimeout(() => {
                        mensagensErro[index].style.display = 'none'
                    }, 2000)
                }
            })

            input.addEventListener('blur', () => {
                if (!input.value) {
                    mensagensErro[index].style.display = 'block'

                    setTimeout(() => {
                        mensagensErro[index].style.display = 'none'
                    }, 2000)
                }
            })
        })
    })
}

export function msgErroValor(input: HTMLInputElement) {
    cardAddDinheiroCardAddDespesas.forEach((evento) => {
        const formulario = evento.querySelector('#formulario') as HTMLDivElement
        const inputsFormulario = formulario.querySelectorAll('#input_valor') as NodeListOf<HTMLInputElement>
        const mensagensErro = formulario.querySelectorAll('#msg_erro_valor') as NodeListOf<HTMLSpanElement>

        if (input) {
            input.addEventListener('input', () => {
                apenasNumero(input)

                const valorInserido = input.value

                if (isNaN(parseFloat(valorInserido))) {
                    const index = Array.from(inputsFormulario).indexOf(input);
                    mensagensErro[index].style.display = 'block'

                    setTimeout(() => {
                        mensagensErro[index].style.display = 'none'
                        input.value = 'Valor da entrada'
                    }, 2000)
                }
            })
        }
    })
}
