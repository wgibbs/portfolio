// A variable to keep track of the slideshow state.
let slideshowActive = false;
let slideshowListeners = {};

function initWorkCards() {
  const templateSource = document.getElementById('work-card-template').innerHTML;
  const template = Handlebars.compile(templateSource);
  const container = document.querySelector('.work__card-container');
  const workCardData = {
    cards: [{
        img_url: './img/photo-gallery-app.jpg',
        title: 'Photo Gallery Web App',
        description: 'A single-page application photo gallery created with Vue/Nuxt.js + Tailwind CSS and built to showcase some of my nature/outdoor photography. I contributed UI/UX Design and front-end development.',
        link_url: '[https://wgibbs.github.io/photo-gallery-app/](https://wgibbs.github.io/photo-gallery-app/)',
      },
      {
        img_url: './img/charityvest.jpg',
        title: 'Charityvest Email',
        description: 'An email developed for the company Charityvest. I contributed responsive email development and QA testing with Litmus.',
        link_url: '[https://wgibbs.github.io/charityvest-email-1/](https://wgibbs.github.io/charityvest-email-1/)',
      },
      {
        img_url: './img/mjml-email-builder.jpg',
        title: 'MJML Email Builder',
        description: 'A system incorporating MJML + Gulp to create responsive emails. The project example is a prototype email newsletter template I designed and developed to go along with my Photo Gallery.',
        link_url: '[https://wgibbs.github.io/mjml-email-builder/](https://wgibbs.github.io/mjml-email-builder/)',
      },
      {
        img_url: './img/job-posts-app.jpg',
        title: 'Job Posts Web App',
        description: 'A single-page application prototype for Job Posts built with Create React App, Material-UI and Fuse.js. I contributed UI/UX Design and front-end development.',
        link_url: '[https://wgibbs.github.io/job-posts-app/](https://wgibbs.github.io/job-posts-app/)',
      },
    ]
  };

  const renderedHTML = template(workCardData);
  container.innerHTML = renderedHTML;

  const workCards = document.querySelectorAll('.work__card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('fade-in');
        }, index * 250);

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  workCards.forEach(card => observer.observe(card));
}

function initSlideshow() {
  if (slideshowActive) return;

  const container = document.querySelector('.work__card-container');
  const prevBtn = document.getElementById('prev-slide');
  const nextBtn = document.getElementById('next-slide');

  const updateButtons = () => {
    prevBtn.disabled = container.scrollLeft <= 1;
    nextBtn.disabled = container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;
  };
  
  const prevClickListener = () => {
    container.scrollBy({
      left: -container.clientWidth,
      behavior: 'smooth'
    });
  };

  const nextClickListener = () => {
    container.scrollBy({
      left: container.clientWidth,
      behavior: 'smooth'
    });
  };

  // Add event listeners
  prevBtn.addEventListener('click', prevClickListener);
  nextBtn.addEventListener('click', nextClickListener);
  container.addEventListener('scroll', updateButtons);
  
  // Store references to the listeners and buttons to be able to clean them up
  slideshowListeners = {
    prevBtn,
    nextBtn,
    container,
    prevClickListener,
    nextClickListener,
    updateButtons
  };

  // Update buttons on load and scroll
  updateButtons();
  
  slideshowActive = true;
}

function destroySlideshow() {
  if (!slideshowActive) return;
  
  const { prevBtn, nextBtn, container, prevClickListener, nextClickListener, updateButtons } = slideshowListeners;

  // Remove event listeners
  prevBtn.removeEventListener('click', prevClickListener);
  nextBtn.removeEventListener('click', nextClickListener);
  container.removeEventListener('scroll', updateButtons);
  
  // Reset the slideshow state
  slideshowActive = false;
  slideshowListeners = {};
}

function handleResize() {
  const isMobile = window.innerWidth <= 768;

  if (isMobile && !slideshowActive) {
    initSlideshow();
  } else if (!isMobile && slideshowActive) {
    destroySlideshow();
  }
}

async function initPage() {

  try {
    initWorkCards();

    // Initial check for screen size on page load
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

  } catch (error) {
    console.error('An error occurred during page initialization:', error);
  }
}

document.addEventListener('DOMContentLoaded', initPage);