App.Router.map(function(){
  this.resource('authors', function(){
    this.route('show', {path: '/:author_id'});
  });
  this.resource('books', function(){
    this.route('show', {path: '/:book_id'});
  });
});