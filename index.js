$(document).ready(function() {
$(".sendButton").click(function(){
  var userData=$('.t').val();

text.response(val, function(t) {});
$.ajax({
    url: '/response',
    type:"POST",
    contentType:"application/json; charset=utf-8",
      complete: function(data) {
      console.log(data.responseText);
      alert(data.responseText);
    }
  });

  })

    });
