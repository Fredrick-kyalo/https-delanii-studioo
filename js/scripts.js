$(document).ready(function() {
    $("h2").click(function() {
        $(".wilder").show();
        $("h4").click(function(){
        $(".deontay").show();
        $("h5").click(function(){
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