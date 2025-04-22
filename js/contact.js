function saveName() {
  const name = document.getElementById("name").value;
  localStorage.setItem("name", name);
  // no longer necessary   document.getElementById("greeting").textContent = "Welcome, " + name;
  displayName();
}

function displayName() {
  const name = localStorage.getItem("name");
  const greeting = document.getElementById("greeting");
  const todoList = document.getElementById("todoList"); // this isn't get item becauase we want to display text to retrieve values

  if (name) {
    greeting.textContent = `Welcome, ${name}!`;
    todoList.textContent = `${name}, This is your To-Do List`;
  } else {
    greeting.textContent = "Welcome, Guest";
    todoList.textContent = "Guest, This is your To-Do List";
  }
}

$(document).ready(function () {
  displayName();

  const formHTML = `
          <form id="contactForm">
        <label for="nameInput">Name:</label>
        <input type="text" id="nameInput"><br><br>

        <label for="emailInput">Email:</label>
        <input type="text" id="emailInput"><br><br>

        <label for="messageInput">Message:</label>
        <textarea id="messageInput"></textarea><br><br>

        <button type="submit">Submit</button>
      </form>
      <p id="errorMessage" style="color: red;"></p>
        `; // this is like the solution we did in the files *see file Web-client-15 1, Web-client-16 1, Web-client-17

  $("#contactFormContainer").html(formHTML); // this is different because this is meing manipulated by jQuery instead of html

  // form validation with jQuery

  $("#contactForm").submit(function (event) {
    event.preventDefault();

    const name = $("#nameInput").val();
    const email = $("#emailInput").val();
    const message = $("#messageInput").val();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // taken from online user

    if (!name || !email || !message) {
      $("#errorMessage").css("color", "red").text("Please fill in all fields.");
      return;
    }

    if (!emailPattern.test(email)) {
      $("#errorMessage")
        .css("color", "red")
        .text("Please enter a valid email address.");
      return;
    }

    $("#errorMessage")
      .css("color", "green")
      .text("Form submitted successfully!");
    $("#contactForm")[0].reset();
  });
});
