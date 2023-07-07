<script lang='ts'>
    import * as Threlte from '@threlte/core';
    import * as Three from 'three';
    import * as Extra from '@threlte/extras';

    let camera = {
        position: { x: 10, y: 10, z: 10 },
        zoom: 55
    }

    let pointLight = {
        position: { x: 0, y: 2, z: 2 },
        color: 'hsl(60, 100%, 50%)'
    }

</script>


<div id="bg-splash">
    <Threlte.Canvas rendererParameters={{ antialias: true }}>
        <Threlte.OrthographicCamera {...camera} >
            <Threlte.OrbitControls 
                autoRotate
                autoRotateSpeed={0.65}
                enableZoom={false}   
                enablePan={false} 
                enableRotate={false}  
            />
        </Threlte.OrthographicCamera>

        <Threlte.AmbientLight color="white" intensity={0.90} />
        <Threlte.PointLight intensity={0.5} {...pointLight} />

        <Extra.GLTF url="models/garden.glb" receiveShadow/>

    </Threlte.Canvas>
</div>

<div id="wrapper">
    <div id="login">
        <h1>DS3 Internal</h1>
        <form action="?/login" method="POST">
            <h3>UCSD Email</h3>
            <input type="email" name="email" />
            <h3>Password</h3>
            <input type="password" name="password" />
            <button type="submit">Login</button>
        </form>
    </div>
</div>

<style global>
    /* Background rotation */
    #bg-splash {
        height: 100vh;
        width: 100vw;
        position: absolute;
        z-index: -1;
    }

    /* Login form */
    #wrapper {
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    #login {
        display: flex;
        flex-direction: column;
        margin: auto;
        background-color: var(--base-mod);
        opacity: 0.9;
        padding: 3%;
        color: white;
        border-radius: 10px;
        width: 25vw;
    }
    #login h1 {
        font-size: 2.75rem;
        margin: 0.5rem;
        text-align: center;
        font-weight: bold;
    }
    #login form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-top: 2rem;
    }
    
    form h3 {
        font-size: 1.5rem;
        margin: 0;
        margin-top: 1rem;
    }
    form input {
        font-size: 1rem;
        margin: 2% 0;
        padding: 2.5% 4%;
        border-radius: 5px;
    }
    form input:focus {
        outline: none;
    }
    form button {
        width: 100%;
        margin: 2% 0;
        padding: 2%;
        font-weight: bold;
        background-color: var(--ds3-orange);
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 1.25rem;
        transition: 0.2s;
    }
    form button:hover {
        cursor: pointer;
        background-color: var(--ds3-orange-lighten);
    }
</style>