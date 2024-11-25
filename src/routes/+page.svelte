<script lang="ts">
    import { getCategories } from '$lib/get-categories';
    
    const categories = getCategories();
</script>

<div class="container">
    <main aria-label="Categorías de herramientas" class="tools-grid">
        {#each categories as category}
            <a href={`/category/${category.slug}`} class="category-card">
                <h2 class="category-title">{category.title}</h2>
                <div class="description-container">
                    <p class="category-description">
                        {category.description}
                    </p>
                </div>
            </a>
        {/each}
    </main>
</div>

<style lang="postcss">
    .container {
        @apply max-w-7xl mx-auto px-4 min-h-[calc(100vh-4rem)] flex items-center;
        @apply pt-16;
    }

    .tools-grid {
        @apply grid grid-cols-4 gap-4 py-8 w-full;
    }

    .category-card {
        @apply block p-6;
        @apply bg-white/5 backdrop-blur-sm;
        @apply border border-gray-700 rounded-xl;
        @apply shadow-lg transition-all duration-300;
        @apply hover:border-blue-700;
        @apply hover:shadow-[0_0_15px_rgba(147,197,253,0.1)];
        @apply flex flex-col;
        @apply h-40;
    }

    .category-title {
        @apply text-xl font-semibold text-gray-100;
        @apply border-b border-gray-700 pb-2;
    }

    .description-container {
        @apply flex-grow flex items-center;
    }

    .category-description {
        @apply text-gray-400 text-sm;
    }
</style>
