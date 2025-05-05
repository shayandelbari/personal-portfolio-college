const projects = [
  {
    title: "Factoid Project",
    description: "C# Factoid Project",
    details:
      "This is a C# Project that allows users to insert a text of their choice, and ask the program to answer a question with the information from the text.",
    category: "C#",
  },
  {
    title: "Database Project",
    description: "Interactive Database.",
    details:
      "This project creates a database, which is connected to a website that allows you to add, remove, and filter data based on different criteria.",
    category: "Database",
  },
  {
    title: "Vehicle Management System",
    description: "C# Vehicle Management System.",
    details:
      "C# application that allows you to create different types of vehicles that are then stored in an array. The user can then choose to add, remove, or filter the vehicles based on different criteria",
    category: "C#",
  },
  {
    title: "Weather App",
    description: "JavaScript Weather App.",
    details:
      "A front-end app built with JavaScript that fetches real-time weather data from an API based on the user's inputted city name and displays temperature, humidity, and forecast.",
    category: "JavaScript",
  },
  {
    title: "To-Do List",
    description: "Simple To-Do List App.",
    details:
      "This is a minimalistic to-do list app built using HTML, CSS, and JavaScript that allows users to add, check off, and delete tasks.",
    category: "Web",
  },
  {
    title: "Time Zone Checker",
    description: "City Time Lookup Tool.",
    details:
      "JavaScript-based tool that lets users enter a city and returns the current local time using a world time API.",
    category: "JavaScript",
  },
  {
    title: "Portfolio Website",
    description: "Responsive Web Portfolio.",
    details:
      "A responsive personal portfolio website built with HTML, CSS, Bootstrap, and JavaScript to showcase projects and skills.",
    category: "Web",
  },
];

const projectsContainer = document.getElementById("projects-container");
const categoryFilter = document.getElementById("category-filter");

// Get unique categories for filter dropdown
const categories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];

// Populate filter dropdown
categories.forEach((category) => {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categoryFilter.appendChild(option);
});

// Filter projects function
function filterProjects() {
  const selectedCategory = categoryFilter.value;
  projectsContainer.innerHTML = ""; // Clear existing cards

  projects.forEach((project, index) => {
    if (selectedCategory === "All" || project.category === selectedCategory) {
      const card = document.createElement("div");
      card.className = "col-md-4 mb-4";
      card.innerHTML = `
        <div class="card h-100 text-white bg-dark">
          <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.description}</p>
            <span class="badge badge-secondary mb-2">${project.category}</span>
            <button class="btn btn-primary" data-toggle="modal" data-target="#popupModal" onclick="showProjectDetails(${index})">
              View Details
            </button>
          </div>
        </div>
      `;
      projectsContainer.appendChild(card);
    }
  });
}

// Initial load of all projects
filterProjects();

// Add event listener for filter change
categoryFilter.addEventListener("change", filterProjects);

function showProjectDetails(index) {
  const project = projects[index];
  const projectDetails = document.getElementById("project-details");
  projectDetails.textContent = project.details;
  document.getElementById("popupModalLabel").textContent = project.title;
}
