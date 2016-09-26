var questions = {
  "Hello" : "howdy",
  "How old are you?" : "I used to be 17",
  "What is  your name?" : "I am Harambe",
  "What time is it?" : "Time is meaningless in this nightmare that we call life, I didn't relize that until it was too late."
}
function Speak(){
 var ChatInput = $("#input").val();
 var converting;
 var storage = "";
 converting = ChatInput.split('');
for( i =0; i < converting.length; i++){
   storage += letterConversion[converting[i]];
 }
 console.log( storage );
 ChatInput = storage;
