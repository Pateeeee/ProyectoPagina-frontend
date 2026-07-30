class BarraNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="barra-acciones-pagina" class="barra-acciones">
        <a href="./" id="btn-home" class="btn-icono">
          <img src="img/home.svg" alt="Página principal" width="40" height="40">
          <span class="tooltip">Página Principal</span>
        </a>

        <a href="catalogo.html" id="btn-catalogo" class="btn-icono">
          <img src="img/catalog.svg" alt="Página principal" width="40" height="40">
          <span class="tooltip">Catálogo</span>
        </a>
      </div>

      <div id="barra-acciones-usuario" class="barra-acciones">
        <button id="btn-notis" class="btn-icono">
          <img src="img/user-notificaciones.svg" alt="Notificaciones" width="40" height="40">
          <span class="tooltip">Notificaciones</span>
        </button>
        <a href="carrito.html" id="btn-carrito" class="btn-icono">
          <img src="img/user-carrito.svg" alt="Carrito de compras" width="40" height="40">
          <span class="tooltip">Carrito de compras</span>
        </a>
        <button id="btn-login" class="btn-icono">
          <img src="img/user-icon.svg" alt="Iniciar Sesión" width="40" height="40">
          <span class="tooltip">Iniciar Sesión</span>
        </button>
      </div>
    `;
  }
}

customElements.define('barra-nav', BarraNav);
