App = Ember.Application.create()

App.Router.map(function() {
  LOG_TRANSITIONS: true
  this.route('aboutme')
  this.route('projects')
  this.route ('project', {path: "/projects/:project_id"})
});

App.ProjectsRoute = Ember.Route.extend({
    model: function() {
      return [
      {id: 1, name: 'GovData', link: 'https://github.com/bstil22/gov_data_project target="_blank"'},
      {id: 2, name: 'gReddit', link: 'https://github.com/bstil22/gReddit target="_blank"'},
      {id: 3, name: 'StockChart', link: 'https://github.com/bstil22/js_stockchart target="_blank"'}
       ]
      }
    });
