function sendMessage() {
    (function () {
        emailjs.init("64DSsWc6XiC7IF-of"); // Account Public key
    })();

    var serviceID = "service_x71mw2v";
    var templateID = "template_1aexbgk";

    var nameField = document.querySelector('#name');
    var emailField = document.querySelector('#email');
    var subjectField = document.querySelector('#subject');
    var messageField = document.querySelector('#message');

    var params = {
        sendername: nameField.value,
        senderemail: emailField.value,
        subject: subjectField.value,
        message: messageField.value
    };

    if (!nameField.value || !emailField.value || !subjectField.value || !messageField.value) {
        alert('Please fill in all fields');
        return;
    }

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert('Thank You, ' + params['sendername'] + '! Your Message has been Sent.');

            // Clear form fields after successful submission
            nameField.value = '';
            emailField.value = '';
            subjectField.value = '';
            messageField.value = '';
        })
        .catch(error => {
            console.error('Error sending email:', error);
            alert('Sorry, something went wrong. Please try again later.');
        });
}
