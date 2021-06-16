<template>
  <header class="header">
    <div class="container p-5 mx-auto flex flex-col md:flex-row items-center">
      <div class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 class="font-noto-sans font-bold text-4xl md:text-5xl">wes gibbs</h1>
        <h2 class="font-open-sans text-2xl md:text-3xl mt-1 md:mt-2">front-end developer</h2>
      </div>
      <ul class="w-full md:w-1/2 mt-2 md:mt-0 flex flex-col md:flex-row items-center justify-center md:justify-end font-open-sans font-medium text-lg">
        <li class="w-full md:w-auto mx-2">
          <a 
            href="https://github.com/wgibbs" 
            class="p-2 flex items-center justify-center border-2 border-solid rounded hover:border-black focus:outline-none focus:border-black transition-all duration-300"
            target="_blank"
          >
            GitHub
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </li>
        <li class="w-full md:w-auto mx-2 mt-2 md:mt-0">
          <a 
            href="https://www.linkedin.com/in/wes-gibbs-a311198/" 
            class="p-2 flex items-center justify-center border-2 border-solid w-full md:w-auto rounded hover:border-black focus:outline-none focus:border-black transition-all duration-300"
            target="_blank"
          >
            LinkedIn
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </li>
        <li class="w-full md:w-auto mx-2 mt-2 md:mt-0">
          <a 
            href="/pdf/resume.pdf" 
            class="p-2 flex items-center justify-center border-2 border-solid w-full md:w-auto rounded hover:border-black focus:outline-none focus:border-black transition-all duration-300"
            target="_blank"
          >
            Resume
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
    <div class="container mx-auto">
      <hr class="border border-black" />
    </div>
  </header>
</template>