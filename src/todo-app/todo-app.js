import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@granite-elements/granite-bootstrap/granite-bootstrap.js';
import './todo-header.js';
import './todo-body.js';
import './todo-taskdetail.js';
/**
 * @customElement
 * @polymer
 */
class TodoApp extends PolymerElement {
  static get template() {
    return html`      
      <style  include="granite-bootstrap">
      </style>
      <div>
      <todo-header></todo-header>
      <todo-body tareas=[[tareas]]></todo-body>
      <todo-taskdetail oculto={{estaCerrado}} titulo="{{titulo}}" 
        descripcion="{{descripcion}}" editable={{esEditable}}>
      </todo-taskdetail>
      </div>
    `;
  }
  static get properties() {
    return {
      estaCerrado: {
        type: Boolean,
        value: true
      },
      esEditable: {
        type: Boolean,
        value: true
      },
      tareas: {
        type: Array,
        value() {
          return []
        }
      },
      titulo: {
        type: String
      },
      descripcion: {
        type: String
      }
    };
  }

  ready() {
    super.ready();
    this.addEventListener('agregarItem', this.agregarItem);
    this.addEventListener('abrirVentana', this.abrirVentana);
    this.addEventListener('cerrarVentana', this.cerrarVentana);
    this.addEventListener('verDetalle', this.verDetalle);
  }

  abrirVentana(event){
    this.titulo = "";
    this.descripcion = "";
    this.estaCerrado = false;
    this.esEditable = true;
  }

  cerrarVentana(event){
    this.titulo = "";
    this.descripcion = "";
    this.estaCerrado = true;
    this.esEditable = false;
  }

  agregarItem(event){
    var iditem = this.tareas.length + 1;
    var itemsel = {
        titulo: event.detail.titulo, 
        descripcion: event.detail.descripcion,
        estado: 'pendiente',
        iditem: iditem
      };

    this.push('tareas', itemsel);
    this.estaCerrado = true;
  }

  verDetalle(event){
    console.log(event.detail.item);
    this.titulo = event.detail.item.titulo;
    this.descripcion = event.detail.item.descripcion;
    this.estaCerrado = false;
    this.esEditable = false;
  }
}

window.customElements.define('todo-app', TodoApp);
