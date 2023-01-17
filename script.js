let userInput;
var photos= [];

$(".add").click(function() {
    userInput = $(".picture-url").val();
    photos.push(userInput);
    $(".gallery").append("<img src=" + userInput + ">");
    
});