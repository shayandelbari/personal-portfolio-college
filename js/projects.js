const projects = [
  {
    title: "Project 1",
    description: "Description for project 1.",
    details: "Detailed information about project 1.",
  },
  {
    title: "Project 2",
    description: "Description for project 2.",
    details: "Detailed information about project 2.",
  },
  {
    title: "Project 3",
    description: "Description for project 3.",
    details: "Detailed information about project 3.",
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
