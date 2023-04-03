


/*function sendMail(){

    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        Message : document.getElementById("Message").value,
    };
       
    const serviceID = "service_allywbq";
    const templateID = "template_jaxuosj";

    emailjs.send(serviceID,templateID,params)
    .then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("Message").value = "";
        console.log(res);
        alert("your message sent successfully");
    })
    .catch((err) => console.log(err));
}*/

function sendMail(){

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("Message").value;

    if (message === "") {
        alert("Please enter a message before sending.");
        return;
    }

    var params = {
        name: name,
        email: email,
        Message: message,
    };
       
    const serviceID = "service_allywbq";
    const templateID = "template_jaxuosj";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("Message").value = "";
            console.log(res);
            alert("Your message was sent successfully.");
        })
        .catch(err => console.log(err));
}























/*
const contactForm = document.querySelector("#contact");
const submitBtn = document.querySelector(".submit");
const emailInput = document.querySelector("#email_id");
const nameInput = document.querySelector("#fullname");
const MessageInput = document.querySelector("#Message");

const publicKey = "cOvHy5SSMWaoADU1R";
const serviceID = "service_allywbq";
const templateID = "template_jaxuosj"; 

emailjs.init(publicKey);

contactForm.addEventListener("submit", e =>{
    e.preventDefault();
    submitBtn.innerText = "just a moment...";

    const inputFields = {
        from_name: nameInput.value,
        email_id: emailInput.value,
        Message: MessageInput.value
    }

    emailjs.send(serviceID, templateID, inputFields)
    .then(() =>{
    submitBtn.innerText = "Message sent successfully";
        nameInput.value ="";
        emailInput.value = "";
        MessageInput.value = "";
    
     }, (error) => {
        console.log(error);
        submitBtn.innerText = "Something went wrong";

     });
     
});
*/