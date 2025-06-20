// Projects data for dynamic loading
    const projects = [
    {
    id: 1,
    title: "Real-Time Chat Application",
    description: "Built a real-time chat app using Spring Boot, WebSocket (STOMP over SockJS), and Thymeleaf for the frontend. Implemented room-based messaging with isolated channels, shareable links, and auto-reconnect. Designed a modern, responsive UI with theme toggle and persistent usernames for better UX.",
    image: "rcapp.jpg", // Replace with your actual image path
    livelink: "live-link-not-ready.html", // Replace with your live link
    repolink: "https://github.com/hemanth8236/RealTimeChatApplication"
  },
  {
    id: 2,
    title: "Student Management System",
    description: "Developed a Spring Boot app with RESTful APIs and Thymeleaf templates for managing student records. Implemented CRUD operations using Spring Data JPA and integrated MySQL for data persistence. Created a responsive, user-friendly web interface with styled forms and tables.",
    image: "sms.jpg", // Replace with your actual image path
    livelink: "live-link-not-ready.html", // Replace with your live link
    repolink: "https://github.com/hemanth8236/Student-management-system"
  },
  {
    id: 3,
    title: "CVMap.AI",
    description: "Built a Flask web app for skill extraction, resume scoring, and subjective question generation. Used NLTK and PyPDF2 for NLP and parsing; PDFKit for dynamic resume generation. Enabled structured evaluation with customizable templates and downloadable PDFs.",
    image: "cvmap.jpg", // Replace with your actual image path
    livelink: "live-link-not-ready.html", // Replace with your live link
    repolink: "https://github.com/hemanth8236/CVMap.AI"
  }
    ];

    function renderProjects() {
      const scroller = document.querySelector('.projects-scroller');
      if (!scroller) return;
    
      scroller.innerHTML = "";
    
      projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.tabIndex = 0;
    
        card.innerHTML = `
          <div class="project-card-inner">
            <img src="${project.image}" alt="${project.title} screenshot" class="project-image" />
            <div class="project-content">
              <h3 class="project-title">${project.title}</h3>
              <p class="project-desc">${project.description}</p>
              <div class="project-links">
                <a href="${project.livelink}" class="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="${project.repolink}" class="project-link" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
            </div>
          </div>
        `;
    
        // Make the whole card clickable (except when clicking a link inside)
        card.addEventListener('click', function(e) {
          // Prevent double navigation if a link inside is clicked
          if (
            e.target.tagName !== 'A'
          ) {
            window.open(project.repolink, '_blank');
          }
        });
    
        // Optional: Make Enter key open repo when card is focused
        card.addEventListener('keydown', function(e) {
          if (e.key === 'Enter') {
            window.open(project.repolink, '_blank');
          }
        });
    
        scroller.appendChild(card);
      });
    }
    
    renderProjects();

    // Dark mode toggle with icons
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;
    const sunSVG = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
    const moonSVG = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>';

    function setTheme(theme) {
      htmlEl.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      themeToggleBtn.innerHTML = theme === 'dark' ? sunSVG : moonSVG;
      themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }

    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }

    themeToggleBtn.addEventListener('click', () => {
      const current = htmlEl.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
