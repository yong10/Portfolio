window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_393uy7a', 'template_es36wf9', this)
            .then(function() {
                console.log('SUCCESS!');
                alert('Thank you! I will contact you soon.')
                document.getElementById('contact-form').reset();
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}