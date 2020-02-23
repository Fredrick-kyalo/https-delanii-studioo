function submitContactForm(){
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var message = document.querySelector("#message").value;


const data = { 
    user: 'example',
    from_email: '',
    subject: '',

 };

// fetch('https://us4.api.mailchimp.com/3.0/', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then((response) => response.json())
// .then((data) => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });

    alert("Thank you " + name + " for contacting us. We have recieved your message");
}