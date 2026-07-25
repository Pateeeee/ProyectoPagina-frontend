class ModalAuth extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
        <div id="modal-login" class="modal oculto">
          <div class="modal-contenido">
            <h2>Iniciar Sesión</h2>
            <form id="form-login">
              <label for="email">Email:</label>
              <input type="email" id="email-login" name="email-login" placeholder="correo@email.com" required>

              <label for="pass">Contraseña:</label>
              <input type="password" id="pass-login" name="pass-login" placeholder="••••••••" required>

              <a href="#" id="link-olvide" class="redireccion-links">¿Olvidaste tu contraseña?</a>

              <button type="submit" class="btn-submit">Iniciar Sesión</button>

              <p class="texto-registro">
                ¿Todavía no tienes una cuenta?
                <a href="#" id="link-registro" class="redireccion-links">Registrarme</a>
              </p>
            </form>
          </div>
      </div>

      <div id="modal-register" class="modal oculto">
        <div class="modal-contenido">
          <h2>Registrarme</h2>
          <form id="form-register">
              <label for="user">Nombre de usuario:</label>
              <input type="text" id="user-register" name="user-register" placeholder="usuario" required>

              <label for="email">Email:</label>
              <input type="email" id="email-register" name="email-register" placeholder="correo@email.com" required>

              <label for="pass">Ingrese su contraseña:</label>
              <input type="password" id="pass-register" name="pass-register" placeholder="••••••••" required>

              <label for="repetir-pass">Repita su contraseña:</label>
              <input type="password" id="pass-comprobar" name="pass-comprobar" placeholder="••••••••" required>

              <button type="submit" class="btn-submit">Registrarme</button>

              <p class="texto-registro">
                ¿Ya tienes una cuenta?
                <a href="#" id="link-login" class="redireccion-links">Iniciar Sesión</a>
              </p>
            </form>
        </div>
        </div>
      `;
  }
}

customElements.define('modal-auth', ModalAuth);
