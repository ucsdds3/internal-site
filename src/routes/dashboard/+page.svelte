<script lang='ts'>
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h1>This is dashboard</h1>
<h2>Welcome {data.user.name}</h2>
<form method="POST" action="/logout"><button type="submit">Logout</button></form>