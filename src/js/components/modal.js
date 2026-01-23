import GraphModal from 'graph-modal';
const modalSubscribe = new GraphModal();
const modalCallback = new GraphModal();
const modalCV = new GraphModal();

const closeModalElems = document.querySelectorAll('.graph-modal__close');

closeModalElems.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', () => {
            btn.parentElement.parentElement.parentElement.click(); 
        });
    }
});