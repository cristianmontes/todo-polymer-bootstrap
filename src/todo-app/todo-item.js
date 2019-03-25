import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@granite-elements/granite-bootstrap/granite-bootstrap.js';
/**
 * @customElement
 * @polymer
 */
class TodoItem extends PolymerElement {
  static get template() {
    return html`
      
      <style include="granite-bootstrap">
                
      </style>
      <div class="card-body list-group-item">
        <h5 class="card-title">[[item.titulo]]</h5>
        <p class="card-text">[[item.descripcion]]</p>
        <a href="#" class="btn btn-outline-primary" 
          on-click="removerItem"
          hidden$="{{hidden}}"
          item=[[item]]>[[btnAccion]]</a>
        <a href="#" class="btn btn-outline-primary" 
          on-click="removerItem"
          item=[[item]]>Ver Detalle</a>
      </div>
    `;
  }
  static get properties() {
    return {
      item: {
        type: Object,
      },
      btnAccion: {
        type: String,
        computed: 'asignaAccion()'
      },
      hidden: {
        type: Boolean,
        value: false,
        computed: 'revisaEstado()'
      }
    };
  }

  removerItem(event) {
    this.dispatchEvent(new CustomEvent('actualizarItem', {bubbles: true, composed: true,
      detail: {item: event.target.item}}));
  }

  asignaAccion(){
    if(this.item.estado == 'pendiente'){
      return "En Progreso";
    }else if(this.item.estado == 'progreso'){
      return "Terminado";
    }else{
      return "";
    }
  }

  revisaEstado(){
    if(this.item.estado == 'terminado'){
      return true;
    }else{
      return false;
    }
  }

}

window.customElements.define('todo-item', TodoItem);
