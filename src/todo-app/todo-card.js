import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@granite-elements/granite-bootstrap/granite-bootstrap.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';
import './todo-item.js';

/**
 * @customElement
 * @polymer
 */
class TodoCard extends PolymerElement {
  static get template() {
    return html`      
      <style include="granite-bootstrap">
      </style>
      <div class="card bg-light">
        <div class="card-header">
          [[titulo]]
        </div>        
        <template is="dom-repeat" items="[[tareas]]" filter="filtroPorEstado" observe="estado">
          <todo-item item=[[item]]></todo-item>
        </template>        
      </div>
    `;
  }

  static get properties() {
    return {
      titulo: {
        type: String,
        value: 'Lista 1'
      },
      tareas: {
        value() {
          return [
          ];
        }
      },
      filtro:{
        type: String
      }
    };
  }

  filtroPorEstado(item) {    
    return item.estado == this.filtro;
  }
}

window.customElements.define('todo-card', TodoCard);
