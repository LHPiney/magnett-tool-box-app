<script lang="ts">
    import ToolCard from './ToolCard.svelte';
    
    export let category;
    export let categorySlug;
</script>

<section class="category">
    <h2 class="category-title">{category.title}</h2>
    <div class="tools">
        {#each category.tools as tool}
            <ToolCard
                title={tool.name}
                description={tool.description}
                href={`/tools/${categorySlug}/${tool.id}`}
            />
        {/each}
    </div>
</section>

<style lang="postcss">
    .category {
        @apply my-4 p-6;
        @apply bg-white/5 backdrop-blur-sm;
        @apply border border-gray-700 rounded-xl;
        @apply shadow-lg;
        @apply transition-all duration-300;
        @apply hover:border-blue-700;
        @apply hover:shadow-[0_0_15px_rgba(147,197,253,0.1)];
    }

    .category-title {
        @apply text-2xl font-semibold text-gray-100 mb-4;
        @apply border-b border-gray-700 pb-2;
    }

    .tools {
        @apply flex flex-wrap gap-4;
    }
</style> 