<template>
  <section class="project-items">
    <div class="container mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <div class="border rounded p-5 flex flex-col" v-for="(project, index) in projects">
        <div class="border rounded bg-gray-200 flex-grow-0 p-3">
          <img :src="project.img_url" :alt="project.title" />
        </div>
        <h2 class="mt-5 text-2xl font-noto-sans">{{project.title}}</h2>
        <hr class="border mt-2 w-24" />
        <p class="mx-auto mt-2 flex-grow text-lg">{{project.description}}</p>
        <ul class="p-0 mt-5 flex flex-grow flex-col xl:flex-row items-center" v-if="project.link_1_url">
          <li class="mr-0 xl:mr-2 w-full xl:w-1/2">
            <a 
              :aria-label="'View the ' + project.title + ' Project'"
              :href="project.link_1_url" 
              class="p-2 flex items-center justify-center border-2 border-solid rounded hover:border-black focus:outline-none focus:border-black font-open-sans font-medium text-lg transition-all duration-300"
              target="_blank"
            >
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </li>
          <li v-if="project.link_2_url" class="mt-3 xl:mt-0 w-full xl:w-1/2">
            <a 
              :aria-label="'Go to the ' + project.title + ' GitHub Repo'"
              :href="project.link_2_url" 
              class="p-2 flex items-center justify-center border-2 border-solid rounded hover:border-black focus:outline-none focus:border-black font-open-sans font-medium text-lg transition-all duration-300"
              target="_blank"
            >
              GitHub Repo
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        projects: [
          {
            title: 'Job Posts App',
            description: 'A single page application prototype for Job Posts built with Create React App, Material-UI and Fuse.js. I contributed UI/UX Design and front-end development.',
            img_url: './img/job-posts-app.jpg',
            link_1_url: 'https://www.wgibbs.com/job-posts-app/',
            link_2_url: 'https://github.com/wgibbs/job-posts-app',
          },
          {
            title: 'Photo Gallery App',
            description: 'A single page application photo gallery created with Nuxt.js + Tailwind CSS and built to showcase some of my nature/outdoor photography. I contributed UI/UX Design and front-end development.',
            img_url: './img/photo-gallery-app.jpg',
            link_1_url: 'https://wgibbs.com/photo-gallery-app/',
            link_2_url: 'https://github.com/wgibbs/photo-gallery-app',
          },
          {
            title: 'MJML Email Builder',
            description: 'A system incorporating MJML + Gulp to create fully responsive emails. The project example is a prototype email newsletter template I designed and developed to go along with my Photo Gallery.',
            img_url: './img/mjml-email-builder.jpg',
            link_1_url: 'https://www.wgibbs.com/mjml-email-builder-template-1/',
            link_2_url: 'https://github.com/wgibbs/mjml-email-builder'
          }
        ]
      }
    }
  }
</script>