const works = {
    "task1": {
        "title": "Project 1",
        "url": "works/task1/index.html",
        "content": {
            "title": "Task 1",
            "backgroundColor": "#00ff00" // Green for Project 1 (Task 1)
        }
    },
    "task2": {
        "title": "Project 2",
        "url": "works/task2/index.html",
        "content": {
            "title": "Task 2",
            "backgroundColor": "#ff0000" // Red for Project 2 (Task 2)
        }
    },
    "task3": {
        "title": "Project 3",
        "url": "works/task3/index.html",
        "content": {
            "title": "Task 3",
            "backgroundColor": "#ffa500" // Orange for Project 3 (Task 3)
        }
    }
};

function loadProject(projectId) {
    // Clear previous active states for project links
    const projectLinks = document.querySelectorAll('.nav-links a');
    projectLinks.forEach(link => link.classList.remove('active'));

    // Set the active project link
    const activeLink = document.querySelector(`.nav-links a[data-project="${projectId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Update the content area
    const projectContent = document.getElementById('projectContent');

    if (projectId && works[projectId]) {
        const projectData = works[projectId].content;
        projectContent.innerHTML = `<h1>${projectData.title}</h1>`;
        projectContent.style.backgroundColor = projectData.backgroundColor;
    } else {
        projectContent.innerHTML = `<p>Select a link to display here.</p>`;
        projectContent.style.backgroundColor = '#f0f0ff';
    }
}

// Load the default state when the page loads
window.onload = function() {
    loadProject(); // Show the initial "Select a link to display here" message
};