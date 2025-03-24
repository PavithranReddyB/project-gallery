document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.getElementById('project-list');
    const projectTitle = document.getElementById('project-title');
    const projectDetails = document.getElementById('project-details');
    const navbar = document.querySelector('.navbar');
    const content = document.querySelector('.content');

    // Dynamically adjust content padding
    function adjustContentPadding() {
        const navbarHeight = navbar.offsetHeight;
        content.style.paddingTop = `${navbarHeight + 20}px`;
    }

    adjustContentPadding();
    window.addEventListener('resize', adjustContentPadding);

    // Display the default landing page
    function displayLandingPage() {
        projectTitle.textContent = "Welcome to My Project Gallery";
        projectDetails.innerHTML = `
            <div class="landing-page">
                <h3>Explore My Work</h3>
                <p>This gallery showcases a collection of my projects, ranging from basic HTML to advanced JavaScript applications. Select a project from the menu above to view it.</p>
                <a href="#" class="cta-button">Select a Project</a>
            </div>
        `;
    }

    // Display a project when selected
    function displayProject(project) {
        projectTitle.textContent = project.title;
        projectDetails.innerHTML = `
            <iframe src="${project.path}" frameborder="0"></iframe>
        `;
    }

    // Fetch projects
    fetch('projects.json')
        .then(response => response.json())
        .then(projects => {
            projects.forEach(project => {
                const link = document.createElement('a');
                link.textContent = project.title;
                link.href = '#';
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    displayProject(project);
                    document.querySelectorAll('.navbar-menu a').forEach(a => a.classList.remove('active'));
                    link.classList.add('active');
                });
                projectList.appendChild(link);
            });

            // Display the landing page by default
            displayLandingPage();
        })
        .catch(error => console.error('Error loading projects:', error));
});