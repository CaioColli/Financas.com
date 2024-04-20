export function checkClickLixeira() {
    const btnLixeira = document.querySelectorAll('.lixeira');
    btnLixeira.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });
}
