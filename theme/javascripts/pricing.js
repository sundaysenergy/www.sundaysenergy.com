$('document').ready(function() {
  $('#login').on('click', function(e) {
    console.log("got here!");
    e.preventDefault();
    $('#sign-in').modal();
  });
  $('.icon-github').on('click', function(e) {
    e.preventDefault();
    OAuth.popup('github', function(err, result) {
      $('#sign-in .modal-body').css('font-size', '1.3em');
      
      $.post('http://v2.api.cape.io/user/oauth', result, function(data) {
        $('#sign-in .modal-body').html(JSON.stringify(data));
      });      
    });
  });
});
