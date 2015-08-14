class Router {
  constructor() {
    window.addEventListener("hashchange", e => {
        let route = location.hash.split('/')[1];
        
        if (route) {
          this.navigate(route);
        }
    });
  }
  
  navigate(route, params) {
    let routeConfig = this._config.filter(config => config.route === route);
    
    if(routeConfig.length === 1) {
      let paramString = params ? "?" + Object.keys(params)
        .map(key => key + '=' + params[key]).join('&') : "";
      
      history.pushState(null, null, `#/${routeConfig[0].route}/${paramString}`);
      this.view.render(routeConfig[0].component);
    }
  }
  
  config(config) {
    this._config = config;
  }
  
  registerView(view) {
    this.view = view;
  }
}


export default new Router();