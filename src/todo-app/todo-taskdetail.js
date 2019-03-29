import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@granite-elements/granite-bootstrap/granite-bootstrap.js';
/**
 * @customElement
 * @polymer
 */
class TodoTaskDetail extends PolymerElement {
  static get template() {
    return html`
      <style include="granite-bootstrap">
      </style>
      <a href="#" class="btn btn-outline-primary" 
          hidden$="{{oculto}}">asdfasdfadsf</a>
      <div class="modal fade" id="taskdetail" tabindex="-1" role="dialog" 
        aria-labelledby="exampleModalLabel" aria-modal="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Nueva Tarea</h5>
              <button type="button" class="close" aria-label="Close" on-click="cerrarVentana">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">Título:</label>
                  <input type="text" class="form-control" id="recipient-name">
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">Descripción:</label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" on-click="cerrarVentana">Cancelar</button>
              <button type="button" class="btn btn-primary">Aceptar</button>
            </div>
          </div>
        </div>
      </div>
      <div id="back" class=""></div>
    `;
  }
  static get properties() {
    return {
      oculto: {
        type: Boolean,
        value: true,
        observer: 'evaluarEstadoVentana'
      }
    };
  }

  evaluarEstadoVentana(oculto){
    console.log("cambio " + oculto);
    if(oculto){
      var back = this.shadowRoot.getElementById('back')
      back.classList.remove('modal-backdrop', 'fade', 'show');

      var back = this.shadowRoot.getElementById('taskdetail')
      back.classList.remove('show');
      back.style.display = 'none';

    }else{
      var back = this.shadowRoot.getElementById('back')
      back.classList.add('modal-backdrop', 'fade', 'show');

      var back = this.shadowRoot.getElementById('taskdetail')
      back.classList.add('show');
      back.style.display = 'block';      
    }
  }

  cerrarVentana(){
    this.oculto = true;
  }
}

window.customElements.define('todo-taskdetail', TodoTaskDetail);
