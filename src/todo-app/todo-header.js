import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@granite-elements/granite-bootstrap/granite-bootstrap.js';
/**
 * @customElement
 * @polymer
 */
class TodoHeader extends PolymerElement {
  static get template() {
    return html`
      
      <style include="granite-bootstrap">
        :host {
          display: block;          
        }
      </style>

      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>

      
      <nav class="navbar navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Tablero Kanban</a>
        <form class="form-inline">        
          <button class="btn btn-outline-light my-2 my-sm-0" type="button"
          on-click="agregarItem">+</button>

          <button class="btn btn-outline-light my-2 my-sm-0" type="button"
            onclick="abre();">+</button>
        </form>
      </nav>
    `;
  }

  agregarItem(event) {
    /*
    var back = this.shadowRoot.getElementById('back')
    back.classList.add('modal-backdrop', 'fade', 'show');

    var back = this.shadowRoot.getElementById('exampleModal')
    back.classList.add('show');
    back.style.display = 'block';

    this.dispatchEvent(new CustomEvent('agregarItem', {bubbles: true, composed: true}));
    */
    this.dispatchEvent(new CustomEvent('abreVentana', {bubbles: true, composed: true}));
  }
}

window.customElements.define('todo-header', TodoHeader);
