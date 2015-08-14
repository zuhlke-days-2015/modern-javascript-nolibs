import router from './router';

class RouterView extends HTMLElement {
  createdCallback() {
    router.registerView(this);
    this.render();
  }
  
  render(Component) {
    this.empty();
    
    if(Component) {
      let component = new Component();
      this.appendChild(component);
    }
  }
  
  empty() {
    while (this.firstChild) {
      this.removeChild(this.firstChild);
    }
  }
}

export default document.registerElement('router-view', {
  prototype: RouterView.prototype
});