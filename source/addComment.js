$(document).ready(function(){
  $('#new-comment').hide();
  $('#new_comment_button').on('click', function(){
    $('#new_comment_button').hide();
    $('#new-comment').show();
  })
  $('#new-comment').on('submit', function(event){
    var comment = $( ".new-comment-text" ).val();
    var author = $( ".new-comment-author" ).val();
    $(`<li>
        ${comment}
        <span class="author">${author}</span>
       </li>`).appendTo('#comment_list')
    event.preventDefault();
    $('#new-comment').hide();
    $('#new_comment_button').show();
  })
})
