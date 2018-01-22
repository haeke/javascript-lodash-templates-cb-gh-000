
//post comment from the form
function postComment() {
  var commenter = document.getElementById('commenterName').value;
  var comment = document.getElementById('commentText').value;
  
  // var commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  
  var templateFn = _.template(commentTemplate);
  
  var commentDiv = document.getElementById("comments");
  
  var templateHTML = templateFn({
    'comment': comment,
    'commenter': commenter,
  });
  
  commentsDiv.innerHTML += templateHTML;
}