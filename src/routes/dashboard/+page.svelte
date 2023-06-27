<script lang='ts'>
    import type { PageData } from "./$types";

    // Greeting message
    let msg: String;
    let currentTime = new Date().getHours()
    if (currentTime < 11) {
        msg = "Good morning,"
    } else if (currentTime < 16) {
        msg = "Good afternoon,"
    } else {
        msg = "Good evening,"
    }



    export let data: PageData;
</script>

<section>
    <h1 id="greeting">{msg} {data.user.name}.</h1>
    <h3 id="sub-greeting">Here are some things that may require your attention.</h3>

    <section class="item">
        <h2>Next Event</h2>
        <p>next event here</p>
    </section>
    <section class="item">
        <h2>Event Analytics</h2>
        <p>graoh here</p>
    </section>
</section>

<style>
    #greeting {
        font-size: 3rem;
        margin-bottom: 0;
    }
    #sub-greeting {
        font-size: 0.95rem;
        font-weight: 500;
        margin-bottom: 3rem;
    }

    .item {
        margin-top: 5vh;
    }
    .item > h2 {
        font-size: 2rem;
    }

</style>