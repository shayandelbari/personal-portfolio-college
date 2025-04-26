const projects = [
  {
    title: "Factoid Project",
    description: "C# Factoid Project",
    details: "This is a C# Project that allows users to insert a text of their choice, and ask the program to answer a question with the information from the text.",
  },
  {
    title: "Database Project",
    description: "Interactive Database.",
    details: "This project creates a database, which is connected to a website that allows you to add, remove, and filter data based on different criteria.",
  },
  {
    title: "Vehicle Management System",
    description: "C# Vehicle Management System.",
    details: "C# application that allows you to create different types of vehicles that are then stored in an array. The user can then choose to add, remove, or filter the vehicles based on different criteria",
  },
];

const projectsContainer = document.getElementById("projects-container");

projects.forEach((project, index) => {
  const card = document.createElement("div");
  card.className = "col-md-4 mb-4";
  card.innerHTML = `
    <div class="card h-100 text-white bg-dark">
      <div class="card-body">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.description}</p>
        <button class="btn btn-primary" data-toggle="modal" data-target="#popupModal" onclick="showProjectDetails(${index})">
          View Details
        </button>
      </div>
    </div>
  `;
  projectsContainer.appendChild(card);
});

function showProjectDetails(index) {
  const project = projects[index];
  const projectDetails = document.getElementById("project-details");
  projectDetails.textContent = project.details;
}
