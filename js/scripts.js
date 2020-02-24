$(document).ready(function() {
    $(".pac").click(function() {
        $(".wilder").show();
        $(".uon").click(function(){
        $(".deontay").show();
        $(".product").click(function(){
        $(".fury").show();
        });
      });    
    });
});
function submitContactForm(){
    var name = document.querySelector("#name").value;
const data = { 
    user: 'example',
    from_email: '',
    subject: '',

 };
    alert("Thank you " + name + " for contacting us. We have recieved your message");
}