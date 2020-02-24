$(document).ready(function() {
    $(".pac").click(function() {
        $(".wilder").hide();
        $(".wilder").slideDown()
        $(".wilder").toggle();
    });
        $(".uon").click(function(){
        $(".deontay").hide();
        $(".deontay").fadeIn()
        $(".deontay").toggle();
    });
        $(".product").click(function(){
        $(".fury").hide();
        $(".fury").fadeIn() 
        $(".fury").toggle();    
          
    });
});
function submitContactForm(){
    var name = document.querySelector("#name").value;
const data = { 
    user: 'example',
    
 };
    alert("Thank you " + name + " for contacting us. We have recieved your message");
}