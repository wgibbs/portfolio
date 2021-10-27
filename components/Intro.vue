<template>
  <section class="introduction">
    <div class="container py-7 px-5 mx-auto font-open-sans">
      <h3 class="font-semibold text-3xl text-center md:text-left">
        {{ introTitle }}
      </h3>
      <p class="mt-2 font-normal text-lg md:text-xl text-center md:text-left">
        {{ introTextP1 }}
      </p> 
      <p class="mt-3 font-open-sans font-normal flex text-lg md:text-xl text-center md:text-left">
        {{ introTextP2 }}
      </p>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        introTitle: 'Hello, and thanks for stopping by.',
        introTextP1: 'I am a front-end and email developer who gravitates towards the visual side of the technology world. I specialize in building responsive microsites, landing pages and emails - primarily working with HTML, CSS(SCSS\/SASS\/Tailwind CSS), MJML and JavaScript(jQuery\/React\/Vue).',
        introTextP2: 'Please see below for some of my recent projects.',
      }
    }
  }
</script>