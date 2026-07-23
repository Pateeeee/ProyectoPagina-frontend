const btnLogin = document.getElementById("btn-login");
const modalLogin = document.getElementById("modal-login");
const modalRegister = document.getElementById("modal-register");

btnLogin.addEventListener('click', () => {
    modalLogin.classList.toggle("oculto")
});

modalLogin.addEventListener('click', (evento) => {
  if (evento.target === modalLogin) {
      modalLogin.classList.add("oculto");
  }
});

modalRegister.addEventListener('click', (evento) => {
  if (evento.target === modalRegister) {
      modalRegister.classList.add("oculto");
  }
});

document.getElementById("link-registro").addEventListener('click', (evento) => {
    evento.preventDefault();
    modalLogin.classList.add("oculto");
    modalRegister.classList.remove("oculto");
});

document.getElementById("link-login").addEventListener('click', (evento) => {
    evento.preventDefault();
    modalLogin.classList.remove("oculto");
    modalRegister.classList.add("oculto");
});
