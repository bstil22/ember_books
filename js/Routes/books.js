App.BooksRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('book');
  }
})