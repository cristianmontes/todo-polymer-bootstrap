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
      <todo-taskdetail oculto={{estaCerrado}}></todo-taskdetail>
      </div>
    `;
  }
  static get properties() {
    return {
      estaCerrado: {
        type: Boolean,
        value: true
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
    this.addEventListener('abreVentana', this.abreVentana);
  }

  abreVentana(event){
    console.log("abriendo la ventana");
    //this.estaCerrado = false;
    this.estaCerrado = !this.estaCerrado;
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
