<script lang='ts'>
	import type { PageData } from './$types';
    import { clickOutside } from '$lib/client/clickOutside';
	import { page } from '$app/stores';

    // If your editor red-underlines the modules with an
    // error "Cannot find module...", ignore. This is due
    // to the dynamic icon imports. See vite.config.ts
    // for more information.
    import MenuIcon from 'virtual:icons/material-symbols/menu';
    import CloseIcon from 'virtual:icons/material-symbols/close';
    import HomeIcon from 'virtual:icons/material-symbols/home';
    import CalendarIcon from 'virtual:icons/mdi/calendar';
    import ChartIcon from 'virtual:icons/mdi/chart-line';
    import PlusIcon from 'virtual:icons/ic/baseline-plus';
    import EyeIcon from 'virtual:icons/mdi/eye';
    import CheckListIcon from 'virtual:icons/solar/checklist-bold'
    import TrafficIcon from 'virtual:icons/material-symbols/traffic';
    import ApiIcon from 'virtual:icons/mdi/api';
    import LoadIcon from 'virtual:icons/carbon/load-balancer-vpc'

    let urlPath: String;
    $: urlPath = $page.url.pathname;

    let SIDENAV_SHOW = true;
    function toggleSideNav() { SIDENAV_SHOW = !SIDENAV_SHOW; }

    let PROFILE_SHOW = false;
    let PROFILE_FOCUSED = false;
    function toggleProfileOn() {
        PROFILE_FOCUSED = true;
        PROFILE_SHOW = true;
    }
    function toggleProfileOff() {
        PROFILE_FOCUSED = false;
        PROFILE_SHOW = false;
    }
    function toggleFocusOn() { PROFILE_FOCUSED = true }
    function toggleFocusOff() {
        if (!PROFILE_SHOW) {
            PROFILE_FOCUSED = false
        }
    }

    export let data: PageData;
</script>

<section>

    <div id="s-nav" style="width: {SIDENAV_SHOW ? "auto" : "0"}; padding:{SIDENAV_SHOW ? "1%" : "0"}">
        <div id="wrapper">
            <div id="main-content">
                <div id="nav-close">
                    <h1>DS3 Internal</h1>
                    <!-- svelte-ignore a11y-interactive-supports-focus -->
                    <div class="icon-wrapper icon-invert"
                        role="button"
                        id="s-close"
                        on:click={toggleSideNav}
                        on:keyup={toggleSideNav}
                    >
                        <CloseIcon />
                    </div>
                </div>
                <div id="s-nav-sec">
                    <div class="nav-section">
                        <a class:selected={urlPath === "/dashboard"} href='/dashboard' id="home-tw" class="nav-tw"><HomeIcon /><div id="home" class="nav-title">Home</div></a>
                    </div>
                    <div class="nav-section">
                        <div class="nav-tw"><CalendarIcon /><h2 class="nav-title">Events</h2></div>
                        <div class="nav-contents">
                            <a class:selected={urlPath === "/dashboard/events/add"} href="/dashboard/events/add"><PlusIcon /><div>Add an Event</div></a>
                            <a class:selected={urlPath === "/dashboard/events/view"} href="/dashboard/events/view"><EyeIcon /><div>View Events</div></a>
                        </div>
                    </div>
                    <div class="nav-section">
                        <div class="nav-tw"><ChartIcon /><h2 class="nav-title">Analytics</h2></div>
                        <div class="nav-contents">
                            <a class:selected={urlPath === "/dashboard/analytics/evet"} href="/dashboard/analytics/evet"><CheckListIcon /><div>Event Analytics</div></a>
                            <a class:selected={urlPath === "/dashboard/analytics/website"} href="/dashboard/analytics/website"><TrafficIcon /><div>Web Traffic</div></a>
                            <a class:selected={urlPath === "/dashboard/analytics/api"} href="/dashboard/analytics/api"><ApiIcon /><div>API Traffic</div></a>
                            <a class:selected={urlPath === "/dashboard/analytics/resource"} href="/dashboard/analytics/resource"><LoadIcon /><div>Resource Load</div></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                <hr>
                <h5>DS3 Internal Use Only</h5>
                <h5>Alpha Build v0.1.0</h5>
            </div>
        </div>
    </div>

    <div id="center">
        <div id="t-nav">
            <div class="wrapper">
                <div id="logo" style="display:{SIDENAV_SHOW ? "none" : "flex"}">
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div class="icon-wrapper"
                        id="s-open"
                        on:click={toggleSideNav}
                        on:keyup={toggleSideNav}
                    >
                        <MenuIcon style="font-size: 1rem;" />
                    </div>
                    <h1>DS3 Internal</h1>
                </div>
                <div style="display:{SIDENAV_SHOW ? "block" : "none"}"></div>
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div id="profile"
                    on:click={toggleProfileOn}
                    on:keyup={toggleProfileOn}
                    on:mouseenter={toggleFocusOn}
                    on:mouseleave={toggleFocusOff}
                    style="background-color:{PROFILE_FOCUSED ? "var(--base-mod)" : "initial"}"
                >
                    <div class="img-wrapper"></div>
                    <div id="user-info">
                        <h3>{data.user.name}</h3>
                        <h5>{data.user.userEmail}</h5>
                    </div>
                </div>

                <div id="profile-popup"
                    style="display:{PROFILE_SHOW ? "block" : "none"}"
                    use:clickOutside 
                    on:click_outside={toggleProfileOff}
                >
                    <div id="profile-user-info">
                        <div class="pfp-img-wrapper"
                            style="background-image:url(https://i.etsystatic.com/34732889/r/il/b08942/3768265623/il_570xN.3768265623_sji1.jpg)"
                        ></div>
                        <h3>{data.user.name}</h3>
                        <h4>{data.user.userEmail}</h4>
                        {#if data.user.subcom}
                            <h5>{data.user.subcom}</h5>
                        {/if}
                    </div>
                    <hr>
                    <div id="profile-settings">
                        <a on:click={toggleProfileOff} href="/dashboard/profile">My Profile</a>
                        <a on:click={toggleProfileOff} href="/dashboard/profile/settings">Settings</a>
                    </div>
                    <hr>
                    <div id="logout">
                        <form method="POST" action="/logout"><button type="submit">Logout</button></form>
                    </div>
                </div>
            </div>
            <div id="tnav-lower"></div>
        </div>
        <div id="page-content">
            <slot></slot>
        </div>
    </div>

</section>

<style>
    /* General */
    section {
        display: flex;
    }

    /* Side Nav */
    #s-nav {
        z-index: 2; /* on top of top-nav */
        padding-bottom: 0 !important;
        padding-top: 0 !important;
        background-color: var(--base-mod);
        flex-direction: column;
        display: inline-block;
        overflow: hidden;
        position: sticky;
        top: 0;
        left: 0;
        height: 100vh;
    }
    #s-nav > #wrapper {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    #main-content {
        display: flex;
        flex-direction: column;
    }
    #footer {
        color: rgb(90, 90, 90);
        margin-bottom: 7.5%;
    }
    #footer > hr {
        background-color: rgb(134, 134, 134);
        border: none;
        height: 1px;
        margin: 10% 5%;
    }
    #footer > h5 {
        font-size: 0.75rem;
        margin: 2.5%;
    }

    #nav-close {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-top: calc(1.2rem);
        width: 15vw;
    }
    #nav-close > h1 {
        margin: 0;
        font-size: 1.5rem;
    }
    #s-nav-sec {
        margin-top: 15%;
    }
    .nav-section {
        width: 100%;
    }
    .nav-section .nav-title {
        display: inline-block;
        margin: 2.5% 0 2.5% 3%;
        font-size: 1.25rem;
    }
    .nav-section .nav-contents {
        display: flex;
        flex-direction: column;
        padding: 2.5%;
    }
    .nav-section .nav-contents *:visited { text-decoration: none; }
    .nav-section .nav-contents * {
        margin: 1%;
        padding: 2%;
        text-decoration: none;
        color: white;
        font-size: 0.9rem;
        font-weight: 600;
        border-radius: 5px;
        display: flex;
        align-items: center;
    }
    .nav-section .nav-contents *:hover {
        background-color: black;
        cursor: pointer;
    }
    .nav-tw {
        padding: 2%;
    }
    #home-tw { 
        border-radius: 10px;
        text-decoration: none;
        color: white;
        font-weight: 600;
        transition: 0.2s;
        display: block;
    }
    #home-tw:hover {
        background-color: black;
        cursor: pointer;
    }
    .selected {
        background-color: var(--ds3-orange) !important;
    }
    .selected * {
        background-color: var(--ds3-orange) !important;
    }

    /* Main Content */
    #center {
        width: 65%;
        margin: 0 auto;
    }

    /* T-nav */
    #t-nav {
        z-index: 1; /* On top of page content */
        width: 100%;
        position: sticky;
        top: 0;
        background-color: var(--base-bg);
    }
    #tnav-lower {
        border-bottom: 1px solid var(--ds3-orange);
        width: 150vw;
        transform: translate(-25%);
    }
    #t-nav > .wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .wrapper > #logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: auto;
        flex-grow: 1;
    }
    #logo > h1 {
        margin: 0;
        margin-left: 1rem;
        display: inline-block;
        width: auto;
        font-size: 1.5rem;
        flex-grow: 1;
    }
    .wrapper > #profile {
        margin: 0.5%;
        padding: 1%;
        border-radius: 10px;
        display: flex;
        align-items: center;
        flex-direction: row;
        transition: 0.2s;
    }
    .wrapper > #profile:hover {
        cursor: pointer;
        background-color: var(--base-mod);
    }
    #profile .img-wrapper {
        overflow: hidden;
        border-radius: 10000px;
        height: 2rem;
        width: 2rem;
        background-position: center;
        background-size: cover;
        background-image: url(https://i.etsystatic.com/34732889/r/il/b08942/3768265623/il_570xN.3768265623_sji1.jpg);
    }
    #profile #user-info {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    #profile #user-info * {
        margin: 0;
        margin-left: 1rem;
        padding: 0;
    }
    #profile #user-info h3 {
        font-size: 1rem;
    }
    #profile #user-info h5 {
        font-size: 0.75rem;
        color: rgb(197, 197, 197);
    }
    
    /* Profile popup */
    #profile-popup {
        right: 0;
        top: calc(4rem + 2% + 5px);
        position: absolute;
        background-color: var(--base-mod);
        padding: 2%;
        border-radius: 10px;
        width: 15vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 50;
    }
    #profile-user-info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #profile-user-info > .pfp-img-wrapper {
        height: 7vh;
        width: 7vh;
        border-radius: 100px;
        background-position: center;
        background-size: cover;
    }
    #profile-user-info > h3 {
        font-size: 1.5rem;
        margin: 0.75rem 0 0.25rem;
    }
    #profile-user-info > h4 {
        font-size: 1rem;
        margin: 0.25rem 0;
        color: rgb(197, 197, 197);
    }
    #profile-settings {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #profile-settings * {
        width: 100%;
        text-align: center;
        margin: 1%;
        padding: 5% 2%;
        font-size: 0.9rem;
        color: white;
        text-decoration: none;
        border-radius: 7.5px;
        transition: 0.2s;
        font-weight: bold;
    }
    #profile-settings *:hover {
        cursor: pointer;
        background-color: black;
    }
    #logout form {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    #logout button {
        background-color: var(--ds3-orange);
        border: none;
        border-radius: 7.5px;
        padding: 2.5% 10%;
        color: white;
        font-weight: bold;
        text-align: center;
        font-size: 1rem;
        margin: 4% 0 1%;
        transition: 0.3s;
    }
    #logout button:hover {
        cursor: pointer;
        background-color: var(--ds3-orange-lighten);
    }


    /* Icons */
    .icon-wrapper {
        padding: 0.5rem;
        border-radius: 100px;
        display: flex;
        align-items: center;
        transition: 0.2s;
    }
    .icon-wrapper:hover {
        cursor: pointer;
        background-color: var(--base-mod);
    }
    .icon-invert:hover {
        background-color: var(--base-bg) !important; 
    }

</style>
