// $(document).ready(function() {
//     $(".pac").click(function() {
//         $(".wilder").hide();
//         $(".wilder").slideDown()
//         $(".wilder").toggle();
//     });
//         $(".uon").click(function(){
//         $(".deontay").hide();
//         $(".deontay").fadeIn()
//         $(".deontay").toggle();
//     });
//         $(".product").click(function(){
//         $(".fury").hide();
//         $(".fury").fadeIn() 
//         $(".fury").toggle();    
          
//     });
// });
function submitContactForm(){
    var name = document.querySelector("#name").value;
const data = { 
    user: 'example',
    
 };
    alert("Thank you " + name + " for contacting us. We have recieved your message");
}
$(document).ready(function(){
    $(".clickable").click(function(){
        $("#show").toggle();
        $("#hide").toggle();
    });
    $(".clickablee").click(function(){
        $("#show2").toggle();
        $("#hide2").toggle();
    });
    $(".clickableee").click(function(){
        $("#show3").toggle();
        $("#hide3").toggle();
});
});