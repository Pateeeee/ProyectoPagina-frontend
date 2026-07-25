const btnLogin = document.getElementById("btn-login");
const modalLogin = document.getElementById("modal-login");
const modalRegister = document.getElementById("modal-register");
const linkRegistro = document.getElementById("link-registro");
const linkLogin = document.getElementById("link-login");

if (btnLogin && modalLogin) {
    btnLogin.addEventListener('click', () => {
        modalLogin.classList.toggle("oculto");
    });
    modalLogin.addEventListener('click', (evento) => {
      if (evento.target === modalLogin) {
          modalLogin.classList.add("oculto");
      }
    });
}

if (modalRegister) {
  modalRegister.addEventListener('click', (evento) => {
    if (evento.target === modalRegister) {
      modalRegister.classList.add("oculto");
    }
  });
}

if (linkRegistro && modalLogin && modalRegister) {
  linkRegistro.addEventListener('click', (evento) => {
    evento.preventDefault();
    modalLogin.classList.add("oculto");
    modalRegister.classList.remove("oculto");
  });
}

if (linkLogin && modalLogin && modalRegister) {
  linkLogin.addEventListener('click', (evento) => {
    evento.preventDefault();
    modalLogin.classList.remove("oculto");
    modalRegister.classList.add("oculto");
  });
}
