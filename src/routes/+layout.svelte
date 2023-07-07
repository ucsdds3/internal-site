<script lang="ts">
    import Analytics from '$lib/server/analytics.svelte'
</script>

<Analytics />
<!-- 
    This layout exists with the sole purpose of carying global styles
    to the rest of the pages. Define colors and global variables here.
 -->
<slot></slot>

<style global>
    @import url('https://fonts.googleapis.com/css?family=Inter&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    :global(body) {
        /* General Styling */
        box-sizing: border-box;
        margin: 0;
        background-color: var(--base-bg);
        color: var(--base-font-color);
        font-family: 'Inter';
        overflow-x: hidden;

        /* Colors */
        --base-bg: #2C2C2C;
        --base-mod: #191919;
        --base-font-color: white;
        
        --ds3-orange: #f58134;
        --ds3-blue: #11b3c9;
        --ds3-gray: #2e2e2e;
        --ds3-orange-lighten: #f29c62;
        --ds3-blue-lighten: #75c8d3;
        --ds3-gray-lighten: #575757;
    }
    :global(body)::-webkit-scrollbar {
        width: 10px;
    }
    :global(body)::-webkit-scrollbar-thumb {
        width: 10px;
        background-color: var(--base-mod);
        border-radius: 10px;
    }
    :global(body)::-webkit-scrollbar-thumb:hover {
        cursor: pointer;
    }
    :global(body)::-webkit-scrollbar-track {
        width: 10px;
    }
</style>