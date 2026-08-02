const btnLogin = document.getElementById("btn-login");
const modalLogin = document.getElementById("modal-login");
const modalRegister = document.getElementById("modal-register");
const linkRegistro = document.getElementById("link-registro");
const linkLogin = document.getElementById("link-login");
const btnNotis = document.getElementById("btn-notis")
const modalNotis = document.getElementById("modal-notis")

function verificar(btn, modal) {
  if (btn && modal) {
      btn.addEventListener('click', () => {
          modal.classList.toggle("oculto");
      });
      modal.addEventListener('click', (evento) => {
        if (evento.target === modal) {
            modal.classList.add("oculto");
        }
      });
  }
}

function verificarLink(link, modal1, modal2) {
    if (link, modal1, modal2) {
        link.addEventListener('click', (evento) => {
            evento.preventDefault();
            modal1.classList.toggle("oculto");
            modal2.classList.toggle("oculto");
        });
    }
}

verificar(btnLogin,modalLogin)

if (modalRegister) {
  modalRegister.addEventListener('click', (evento) => {
    if (evento.target === modalRegister) {
      modalRegister.classList.add("oculto");
    }
  });
}

verificarLink(linkRegistro, modalLogin, modalRegister)
verificarLink(linkLogin, modalLogin, modalRegister)

verificar(btnNotis, modalNotis)
