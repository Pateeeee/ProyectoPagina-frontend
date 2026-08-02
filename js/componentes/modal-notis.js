class ModalNotis extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="modal-notis" class="modal oculto">
              <div id="modal-notis-contenido"class="modal-contenido">
                <h3>Notificaciones</h3>
              </div>
            </div>
            `
  }
}

customElements.define('modal-notis', ModalNotis);
