function submitContactForm() {
    var name = document.querySelector("#name").value;
    const data = {
        user: 'example',

    };
    alert("Thank you " + name + " for contacting us. We have recieved your message");
}
$(document).ready(function() {
    $(".clickable").click(function() {
        $("#show").toggle();
        $("#hide").toggle();
    });
    $(".clickablee").click(function() {
        $("#show2").toggle();
        $("#hide2").toggle();
        
    });
    $(".clickableee").click(function() {
        $("#show3").toggle();
        $("#hide3").toggle();
    });
    $(".image1").hover(function() {
        $(".Eone").toggle()
        $("#imageone").toggle()
    });
$(".work4-image").hover(function(){
    $("#work4-overlay").toggle()
    $("#work4-img").toggle()
});

$(".work3-image").hover(function(){
    $("#work3-overlay").toggle()
    $("#work3-img").toggle()
});

$(".work2-image").hover(function(){
    $("#work2-overlay").toggle()
    $("#work2-img").toggle()
});

$(".work1-image").hover(function(){
    $("#work1-overlay").toggle()
    $("#work1-img").toggle()
});

$(".work5-image").hover(function(){
    $("#work5-overlay").toggle()
    $("#work5-img").toggle()
});

$(".work6-image").hover(function(){
    $("#work6-overlay").toggle()
    $("#work6-img").toggle()
});

$(".work7-image").hover(function(){
    $("#work7-overlay").toggle()
    $("#work7-img").toggle()
});

$(".work8-image").hover(function(){
    $("#work8-overlay").toggle()
    $("#work8-img").toggle()
});










});