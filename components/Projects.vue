<template>
  <section class="project-items">
    <div class="container mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-white shadow p-6 flex flex-col" v-for="(project, index) in projects" :key="index">
        <div class="flex flex-col lg:flex-row flex-grow">
          <figure class="lg:max-w-sm mx-auto lg:w-2/5">
            <img class="border border-gray-300" :src="project.img_url" :alt="project.title" />
          </figure>
          <div class="lg:pl-5 lg:w-3/5 mt-3 lg:mt-0">
            <h2 class="text-2xl font-noto-sans">{{project.title}}</h2>
            <hr class="border mt-2 w-24" />
            <p class="mx-auto mt-2 flex-grow">{{project.description}}</p>
          </div>
        </div>
        <ul class="p-0 mt-5 flex flex-col lg:flex-row items-start" v-if="project.link_1_url">
          <li class="mr-0 xl:mr-2 w-full lg:mr-1 lg:w-1/2">
            <a 
              :aria-label="'View the ' + project.title + ' Project'"
              :href="project.link_1_url" 
              class="p-2 flex items-center justify-center border-2 border-gray-300 hover:border-black focus:outline-none focus:border-black font-open-sans font-medium text-lg transition-all duration-300"
              target="_blank"
            >
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </li>
          <li v-if="project.link_2_url" class="w-full mt-3 lg:ml-1 lg:mt-0 lg:w-1/2">
            <a 
              :aria-label="'Go to the ' + project.title + ' GitHub Repo'"
              :href="project.link_2_url" 
              class="p-2 flex items-center justify-center border-2 border-gray-300 hover:border-black focus:outline-none focus:border-black font-open-sans font-medium text-lg transition-all duration-300"
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
            title: 'Photo Gallery Web App',
            description: 'A single-page application photo gallery created with Vue/Nuxt.js + Tailwind CSS and built to showcase some of my nature/outdoor photography. I contributed UI/UX Design and front-end development.',
            img_url: './img/photo-gallery-app.jpg',
            link_1_url: 'https://wgibbs.github.io/photo-gallery-app/',
            link_2_url: 'https://github.com/wgibbs/photo-gallery-app',
          },
          {
            title: 'Crossover2x Website',
            description: 'A business education start up platform created with a few friends/colleagues and built with the MDB React Framework. I contributed UI/UX Design and front-end development.',
            img_url: './img/crossover2x.jpg',
            link_1_url: 'https://www.crossover2x.net/',
            link_2_url: 'https://github.com/ericYagerPractice/crossover_2x',
          },
          {
            title: 'Job Posts Web App',
            description: 'A single-page application prototype for Job Posts built with Create React App, Material-UI and Fuse.js. I contributed UI/UX Design and front-end development.',
            img_url: './img/job-posts-app.jpg',
            link_1_url: 'https://wgibbs.github.io/job-posts-app/',
            link_2_url: 'https://github.com/wgibbs/job-posts-app',
          },
          {
            title: 'MJML Email Builder',
            description: 'A system incorporating MJML + Gulp to create responsive emails. The project example is a prototype email newsletter template I designed and developed to go along with my Photo Gallery.',
            img_url: './img/mjml-email-builder.jpg',
            link_1_url: 'https://wgibbs.github.io/mjml-email-builder/',
            link_2_url: 'https://github.com/wgibbs/mjml-email-builder'
          }
        ]
      }
    }
  }
</script>