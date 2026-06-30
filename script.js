const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = {
        fullName: form.FullName.value,
        email: form.Email.value,
        subject: form.Subject.value,
        message: form.Message.value
    };

    localStorage.setItem("contactData", JSON.stringify(formData));

    alert("Data Saved in Local Storage!");

    form.reset();
});


