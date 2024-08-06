function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
    const viewMoreBtn = document.getElementById('view-more-btn');
    const allProjects = Array.from(document.querySelectorAll('.color-container'));
    const visibleProjectsCount = 3; // Number of initially visible projects
    let currentIndex = visibleProjectsCount;

    // Initially hide all projects beyond the first 3
    allProjects.forEach((project, index) => {
        if (index >= visibleProjectsCount) {
            project.classList.add('hidden');
        }
    });

    // Function to show the next project
    function showNextProject() {
        if (currentIndex < allProjects.length) {
            allProjects[currentIndex].classList.remove('hidden');
            currentIndex++;
        }
        if (currentIndex === allProjects.length) {
            viewMoreBtn.textContent = 'View Less';
        }
    }

    viewMoreBtn.addEventListener('click', function() {
        if (currentIndex <= allProjects.length) {
            showNextProject();
        } else {
            // Reset view to show only the first 3 projects
            allProjects.forEach((project, index) => {
                if (index >= visibleProjectsCount) {
                    project.classList.add('hidden');
                }
            });
            currentIndex = visibleProjectsCount;
            viewMoreBtn.textContent = 'View More';
        }
    });
});

