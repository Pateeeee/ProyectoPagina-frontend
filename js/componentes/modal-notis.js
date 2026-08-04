class ModalNotis extends HTMLElement {
    connectedCallback() {
        this.notificaciones = [];

        this.render();
    }

    render() {
        const hayNotificaciones = this.notificaciones.length > 0;

        const contenidoLista = hayNotificaciones
            ? this.notificaciones.map(n => `<div class="notificacion-item">${n}</div>`).join('')
            : `<p class="sin-notificaciones">No tienes notificaciones</p>`;

        this.innerHTML = `
            <div id="modal-notis" class="modal oculto">
              <div id="modal-notis-contenido" class="modal-contenido">
                <h3>Notificaciones</h3>
                <div id="lista-notificaciones">
                  ${contenidoLista}
                </div>
              </div>
            </div>
            `
  }
}

customElements.define('modal-notis', ModalNotis);
