<template>
  <ul class="w-full md:w-1/2 mt-2 md:mt-0 flex flex-col md:flex-row items-center justify-center md:justify-end font-open-sans font-medium text-lg">
    <li
      v-for="(link, index) in links" 
      :key="index"
      v-bind:class="['w-full md:w-1/2 mx-2', (index != 0 ? 'mt-2 md:mt-0' : '')]"
    >
      <a 
        :href="link.url" 
        class="p-2 flex items-center justify-center bg-white border-2 border-gray-300 hover:border-black focus:outline-none focus:border-black transition-all duration-300"
        target="_blank"
      >
        {{ link.text }}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          {
            text: 'GitHub',
            url: 'https://github.com/wgibbs',
          },
          {
            text: 'LinkedIn',
            url: 'https://www.linkedin.com/in/wes-gibbs-a311198/',
          },
        ]
      }
    }
  }
</script>