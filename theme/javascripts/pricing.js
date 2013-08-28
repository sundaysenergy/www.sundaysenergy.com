$('document').ready(function() {
  $('#get_drupal_hosting').on('click', function(e) {
    console.log("got here!");
    e.preventDefault();
    $('#drupal_hosting').modal();
  });
  $('.icon-github').on('click', function(e) {
    e.preventDefault();
    OAuth.popup('github', function(err, result) {
      $('#drupal_hosting .modal-body').css('font-size', '1.3em');
      
      $.ajax({
        url: 'https://api.github.com/user',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
          $('#drupal_hosting .modal-body').html(JSON.stringify(data));
        },
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Authorization', 'token ' + result.access_token);
        }
      });
    });
  });
});