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
      <nav class="navbar navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Tablero Kanban</a>
        <form class="form-inline">        
          <button class="btn btn-outline-light my-2 my-sm-0" type="button"
          on-click="abrirVentana">+</button>
        </form>
      </nav>
    `;
  }

  abrirVentana(event) {
    this.dispatchEvent(new CustomEvent('abrirVentana', {bubbles: true, composed: true}));
  }
}

window.customElements.define('todo-header', TodoHeader);
