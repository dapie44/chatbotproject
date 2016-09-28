
function Speak(){
 var chatInput = document.getElementById("chatInput").value;
 var sayResponse = questions[chatInput]

document.getElementById("chat-area").innerHTML += chatInput + ": "+ sayResponse + " ";
 }
 var questions = {
   "Hello" : "howdy",
   "How old are you?" : "I don't have an age",
   "What is  your name?" : "I am Chuck E Cheese",
   "What time is it?" : "Why should I tell you"
 }
