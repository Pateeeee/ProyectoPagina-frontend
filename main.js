const btnLogin = document.getElementById("btn-login");
const modal = document.getElementById("modal-login");

btnLogin.addEventListener('click', () => {
    modal.classList.toggle("oculto")
});

modal.addEventListener('click', (evento) => {
  if (evento.target === modal) {
    modal.classList.add("oculto");
  }
});
