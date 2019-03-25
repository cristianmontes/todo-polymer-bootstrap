import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@granite-elements/granite-bootstrap/granite-bootstrap.js';
import './todo-card.js';
/**
 * @customElement
 * @polymer
 */
class TodoBody extends PolymerElement {
  static get template() {
    return html`      
      <style include="granite-bootstrap">                
      </style>
      <div class="container-fluid">
        <div class="row"><br/></div>
        <div class="row">
          <div class="col-md-4">
            <todo-card titulo="Pendiente" 
              tareas={{tareas}} filtro="pendiente"></todo-card>
          </div>
          <div class="col-md-4">
          <todo-card titulo="En progreso" tareas={{tareas}}
              filtro="progreso"></todo-card>
          </div>
          <div class="col-md-4">
          <todo-card titulo="Terminado" tareas={{tareas}}
            filtro="terminado"></todo-card>
          </div>
        </div>
      </div>
    `;
  }

  ready() {
    super.ready();    
    this.addEventListener('actualizarItem', this.actualizarItem);
  }
  
  actualizarItem(event){
    this.itemsel = event.detail.item;
    var isok = false;
    if(this.itemsel.estado == 'pendiente'){
      this.itemsel.estado = 'progreso';
      isok = true;
    }else if(this.itemsel.estado == 'progreso'){
      this.itemsel.estado = 'terminado'
      isok = true;
    }
    if(isok){
      for(var i=0; i<this.tareas.length; i++){
        if(this.itemsel.iditem == this.tareas[i].iditem){
          this.splice('tareas', i, 1);
          this.push('tareas', this.itemsel);
          break;
        }
      }
    }
  }

  

  static get properties() {
    return {
      itemsel:{
        type: Object
      },
      tareas: {
        type: Array,
        value() {
          return [/*
            {titulo: 'Revisar Calendario', 
              descripcion: 'Tenemos que revisar el calendario todos los dias',
              accion: 'En progreso',
              estado: 'pendiente',
              iditem: '1'},
            {titulo: 'Agendar Citas', 
              descripcion: 'Las citas se agendan entre las 9:00 am y 5:00 pm',
              accion: 'En progreso',
              estado: 'pendiente',
              iditem: '2'}*/
          ];
        }
      }
    };
  }
}

window.customElements.define('todo-body', TodoBody);
