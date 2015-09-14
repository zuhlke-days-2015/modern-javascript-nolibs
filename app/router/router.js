class RouterConfig {
    map(config) {
        this._config = config;
    }
    
    getRoute(route) {
        let result = this._config.filter(config => config.route === route);
        if (result.length === 0) {
            throw 'no route found';
        }
        return result[0];
    }
}
    
class Router {
  constructor() {
    window.addEventListener("hashchange", e => {
        let route = location.hash.split('/')[1];
        
        if (route) {
          this.navigate(route);
        }
    });
      
    this.routerConfig = new RouterConfig();
  }
  
  navigate(route, params) {
    let next = this.routerConfig.getRoute(route);
    
    let paramString = params ? "?" + Object.keys(params)
        .map(key => key + '=' + params[key]).join('&') : "";
      
    history.pushState(null, null, `#/${next.route}/${paramString}`);
    this.view.render(next.component);
  }
  
  configure(configCallback) {
    configCallback(this.routerConfig);
  }
  
  registerView(view) {
    this.view = view;
  }
}


export default new Router();