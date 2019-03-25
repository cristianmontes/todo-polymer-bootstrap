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
        .modal{
          display: block;
        }
      </style>
      
      <nav class="navbar navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Tablero Kanban</a>
        <form class="form-inline">        
          <button class="btn btn-outline-light my-2 my-sm-0" type="button"
          on-click="agregarItem">+</button>

          <button type="button" class="btn btn-primary" data-toggle="modal" 
              data-target="#exampleModalCenter">
              Launch demo modal
          </button>
        </form>
      </nav>


      <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  agregarItem(event) {
    var element = document.getElementById("exampleModalCenter");
    element.classList.add("modal2");
    //$('exampleModalCenter').modal('show');
    /*
    console.log(this.shadowRoot.querySelector("#exampleModalCenter"));
    this.shadowRoot.querySelector("#exampleModalCenter").modal('show');
    document.getElementById('exampleModalCenter').modal('show');*/
    this.dispatchEvent(new CustomEvent('agregarItem', {bubbles: true, composed: true}));
  }
}

window.customElements.define('todo-header', TodoHeader);
