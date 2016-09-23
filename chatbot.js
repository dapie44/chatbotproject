var questions = {
  "hello" : "howdy",
  "how old are you?" : "I used to be 17",
  "what is  your name?" : "I am Harambe"
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
