$(document).ready(function() {
    $(".pac").click(function() {
        $(".wilder").hide();
        $(".wilder").slideDown()
        $(".uon").click(function(){
        $(".deontay").hide();
        $(".deontay").fadeIn()
        $(".product").click(function(){
        $(".fury").hide();
        $(".fury").toggle()
        });
      });    
    });
});
function submitContactForm(){
    var name = document.querySelector("#name").value;
const data = { 
    user: 'example',
    
 };
    alert("Thank you " + name + " for contacting us. We have recieved your message");
}