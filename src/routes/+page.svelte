

<h1>This is Login</h1>
<form action="?/login" method="POST">
    <label>
        UCSD Email:
        <input type="email" name="email" />
    </label>
    <label>
        Password:
        <input type="password" name="password" />
    </label>
    <button type="submit">Login</button>
</form>

<style global>
    :global(body) {
        /* General Styling */
        box-sizing: border-box;
        margin: 0;

        /* Colors */
        --base-bg: #2C2C2C;
        --base-mod: #191919;
    }
</style>