// NAVBAR
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// MAIL
function sendEmail() {
    Email.send(
        {
            Host : "smtp.gmail.com",
            Username : "shubhamyadre@gmail.com",
            Password : "Shubham@7973",
            To : 'yadreprathamesh@gmail.com',
            From : document.getElementById("email").value,
            Subject : "Contact form enquiry",
            Body : "Name: " + document.getElementById("name").value
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Phone no: " + document.getElementById("phone").value
                + "<br> Message: " + document.getElementById("message").value
        }
    ).then(
      message => alert("Message Sent Succesfully")
    );
}