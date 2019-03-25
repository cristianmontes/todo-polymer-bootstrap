import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@granite-elements/granite-bootstrap/granite-bootstrap.js';
import './todo-header.js';
import './todo-body.js';
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
      <todo-taskdetail></todo-taskdetail>
      </div>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'todo-app'
      },
      tareas: {
        type: Array,
        value() {
          return []
        }
      }
    };
  }

  ready() {
    super.ready();
    this.addEventListener('agregarItem', this.agregarItem);    
  }

  agregarItem(event){
    var iditem = this.tareas.length + 1;
    var itemsel = {titulo: 'Revisar Calendario' + iditem, 
    descripcion: 'Tenemos que revisar el calendario todos los dias ' +iditem ,
    estado: 'pendiente',
    iditem: iditem};

    this.push('tareas', itemsel);
  }
}

window.customElements.define('todo-app', TodoApp);
