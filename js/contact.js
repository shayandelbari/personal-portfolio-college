$(document).ready(function () {
  const formHTML = `
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card bg-dark text-white shadow">
            <div class="card-header bg-secondary text-white">
              <h4 class="mb-0">Send Us a Message</h4>
            </div>
            <div class="card-body bg-dark">
              <form id="contactForm">
                <div class="form-group">
                  <label for="nameInput">Name</label>
                  <input type="text" class="form-control bg-secondary text-white" id="nameInput" name="name" placeholder="Your name">
                </div>
                
                <div class="form-group">
                  <label for="emailInput">Email</label>
                  <input type="email" class="form-control bg-secondary text-white" id="emailInput" name="email" placeholder="your.email@example.com">
                </div>
                
                <div class="form-group">
                  <label for="messageInput">Message</label>
                  <textarea class="form-control bg-secondary text-white" id="messageInput" name="message" rows="5" placeholder="Your message here..."></textarea>
                </div>
                
                <button type="submit" class="btn btn-primary btn-block">Submit</button>
              </form>
              <div id="errorMessage" class="mt-3 text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `; // this is like the solution we did in the files *see file Web-client-15 1, Web-client-16 1, Web-client-17

  $("#contactFormContainer").html(formHTML);

  // form validation with jQuery

  $("#contactForm").submit(function (event) {
    event.preventDefault();

    const name = $("#nameInput").val();
    const email = $("#emailInput").val();
    const message = $("#messageInput").val();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // taken from online user

    if (!name || !email || !message) {
      $("#errorMessage")
        .removeClass()
        .addClass("alert alert-danger")
        .text("Please fill in all fields.");
      return;
    }

    if (!emailPattern.test(email)) {
      $("#errorMessage")
        .removeClass()
        .addClass("alert alert-danger")
        .text("Please enter a valid email address.");
      return;
    }

    $.ajax({
      type: "POST",
      url: "https://getform.io/f/azywvreb",
      data: JSON.stringify({ name, email, message }),
      contentType: "application/json",
      success: function (response) {
        $("#errorMessage")
          .removeClass()
          .addClass("alert alert-success")
          .text("Your message has been sent successfully!");
        $("#contactForm")[0].reset(); // reset the form after submission
      },
      error: function (xhr, status, error) {
        console.error("Error:", error);
        $("#errorMessage")
          .removeClass()
          .addClass("alert alert-danger")
          .text(
            "There was a problem submitting your form. Please try again later.",
          );
      },
    });
  });
});
