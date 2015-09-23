import GoogleApi from '../core/google-api';
import router from '../router/router';

class SearchView extends HTMLElement {
    createdCallback() {
        this.addEventListener('submit', this.search);

        this.render();
    }

    search(e) {
        e.preventDefault();

        let from = this.querySelector('input[name="from"]').value;
        let to = this.querySelector('input[name="to"]').value;

        GoogleApi.search(from, to)
        .then(result => {
            var duration = result.routes[0].legs[0].duration.value;
            router.navigate('movies', { duration: duration });
        }).catch(error => {
            console.log("error");
        });
    }

    render() {
        this.innerHTML = `
         <div class="container">
              <div class="row">
                  <form id="searchform" name="searchform">
                      <div class="col-md-1">
                          <div class="form-group big-text text-center search-bar">
                              From
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="form-group">
                              <input class="form-control input-lg z-depth-1 big-text" type="text" name="from" value="" placeholder="London" required>
                          </div>
                      </div>
                      <div class="col-md-1">
                          <div class="form-group big-text text-center search-bar">
                              To
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="form-group">
                              <input class="form-control input-lg z-depth-1 big-text" type="text" name="to" value="" placeholder="Paris" required>
                          </div>
                      </div>
                      <div class="col-md-1">
                          <div class="form-group big-text text-center search-bar">
                              <button type="submit" class="btn btn-default btn-lg"><i class="fa fa-search"></i> Search</button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
        `;
    }
}

export default document.registerElement('search-view', {
    prototype: SearchView.prototype
});