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

  // Select all the newly rendered cards
  const workCards = document.querySelectorAll('.work__card');

  // Loop through each card and add the 'fade-in' class with a delay
  workCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('fade-in');
    }, index * 200); // 200ms delay for each card
  });
}

async function initPage() {
  const btnSvgPlaceholders = document.querySelectorAll('.btn__svg');

  try {
    const response = await fetch('./partials/svg-arrow.hbs');

    if (!response.ok) {
      throw new Error('Failed to fetch SVG partial.');
    }

    const partialTemplate = await response.text();

    Handlebars.registerPartial('svg-arrow', partialTemplate);

    btnSvgPlaceholders.forEach(element => {
      element.innerHTML = partialTemplate;
    });

    initWorkCards();

  } catch (error) {
    console.error('An error occurred during page initialization:', error);
  }
}

document.addEventListener('DOMContentLoaded', initPage);