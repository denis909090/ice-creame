(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    }
})

const cmdTop = document.querySelector('.scroll-to-top');

if (cmdTop) {
  cmdTop.addEventListener ('click', click, false);
  cmdTop.addEventListener ('touchstart', click, false);
}

function click(event) {
  event.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) { 
      targetElement.scrollIntoView({ behavior: "smooth", });
    }
}


document.addEventListener('scroll', function(){
  if (!cmdTop) {

    return
  }

  if (window.scrollY>200) {
      cmdTop.classList.add('show');
    }
    else (
      cmdTop.classList.remove('show')
    )
})