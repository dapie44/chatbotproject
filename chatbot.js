function Talk(){

  var ChatInput = $("#input").val();
  var converting;
  var storage = "";
  converting = ChatInput.split('');
for( i =0; i < converting.length; i++){
    storage += [converting[i]];
  }
  ChatInput = storage;

  $("#chat-area").append($("#input").val() + "<br>");
  var Errors = 0;

if (ChatInput == "What is your name?"){
    $("#chat-area").append("Chuck E Cheese." + "<br>");
}
else if(ChatInput == "What time is it?"){
  var time = new Date();
    $("#chat-area").append("It is " + time +"<br>");
}
else if( ChatInput == "How old are you?"){
    $("#chat-area").append("I was established in May of 1977, so you do the math."+"<br>");
}
else if( ChatInput == "What is your favorite type of cheese?"){
    $("#chat-area").append("I like cheddar cheese the best."+"<br>");
}
else if( ChatInput == "What is your favorite food?"){
  $("#chat-area").append("I love pizza."+"<br>");
}
else if( ChatInput == "What color are your eyes?"){
  $("#chat-area").append("As the years have gone by they have changed, but my eyes are currentley green."+"<br>");
}
else if( ChatInput == "What color is your hair?"){
  $("#chat-area").append("My hair is grey."+"<br>");
}
else if( ChatInput =="What should I spend my money on?"){
  $("#chat-area").append("You should waste, I mean spend your money wisely at my restraunt Chuck E Cheese."+"<br>");
}
else if(ChatInput == "Hi"){
  $("#chat-area").append("Hello." + "<br>");
}
else if(ChatInput == "What is the meaning of life?"){
  $("#chat-area").append("Chuck E Cheese and all of the amazing food and games that every location provides, be sure to visit and say Chuck E sent you. :)" + "<br>");
}
else{
  if(Errors == 0){
      $("#chat-area").append("Excuse me?" + "<br>");
      Errors++;
    }

}

}

$("#input").keyup(function(Talk) {
   if(Talk.which == 13) {
   $("#talkButton").click();
   }
});
