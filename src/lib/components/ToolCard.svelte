<script lang="ts">
    export let title: string;
    export let description: string;
    export let href: string = "#";
  </script>
  
  <a {href} on:click={() => alert('We are working!')} class="tool-card">
    <h5 class="tool-title">{title}</h5>
    <p class="tool-description">{description}</p>
  </a> 
  
  <style lang="postcss">
    .tool-card {
      @apply block w-[300px] h-[200px] p-6 m-1;
      @apply bg-white/80 backdrop-blur-sm;
      @apply border border-gray-100 rounded-xl;
      @apply shadow-sm transition-all duration-300 ease-in-out;
      @apply hover:shadow-xl hover:-translate-y-2;
      @apply hover:shadow-[0_0_5px_rgba(59,130,246,0.5)];
      @apply hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50;
      @apply hover:border-blue-200;
      @apply dark:bg-gray-800/90 dark:border-gray-700;
      @apply dark:hover:bg-gradient-to-br dark:hover:from-gray-800 dark:hover:to-blue-900;
      @apply dark:hover:border-blue-700;
      @apply dark:hover:shadow-[0_0_15px_rgba(147,197,253,0.3)];
      transform-style: preserve-3d;
      perspective: 1000px;
    }

    .tool-title {
      @apply mb-3 text-2xl font-semibold;
      @apply text-gray-800 dark:text-gray-100;
      @apply border-b border-gray-200 dark:border-gray-700 pb-2;
      @apply transition-all duration-300;
      @apply hover:text-blue-700 dark:hover:text-blue-300;
    }

    .tool-description {
      @apply font-normal text-sm leading-relaxed;
      @apply text-gray-600 dark:text-gray-300;
      @apply transition-all duration-300;
      @apply hover:text-gray-800 dark:hover:text-gray-100;
    }
  </style>