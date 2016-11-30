loader = new THREE.TextureLoader;
loader.crossOrigin = '';

earthTex = loader.load('images/2_no_clouds_4k.jpg');
bumpTex = loader.load('images/elev_bump_4k.jpg');
waterTex = loader.load('images/water_4k.png');

cloudsTex = loader.load('images/fair_clouds_4k.png');
starsTex = loader.load('images/galaxy_starfield.png');

function init() {
    // Initialize scene, camera and renderer
    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.z = 1.5;

    var renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add lights
    scene.add(new THREE.AmbientLight(0x333333));

    var light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 3, 5);
    scene.add(light);

    radius = 0.5;
    segments = 32;
    rotation = 6;

    var sphere = createSphere(radius, segments);
    sphere.rotation.y = rotation;
    scene.add(sphere);

    var clouds = createClouds(radius, segments);
    clouds.rotation.y = rotation;
    scene.add(clouds);

    var stars = createStars(90, 64);
    scene.add(stars);

    var controls = new THREE.TrackballControls(camera);

    var textureFlare0 = loader.load("images/lensflare0.png");
    var textureFlare3 = loader.load("images/lensflare3.png");

    var flareColor = new THREE.Color(0xffaacc);
    var lensFlare = new THREE.LensFlare(textureFlare0, 350, 0.0, THREE.AdditiveBlending, flareColor);

    lensFlare.add(textureFlare3, 60, 0.6, THREE.AdditiveBlending);
    lensFlare.add(textureFlare3, 70, 0.7, THREE.AdditiveBlending);
    lensFlare.add(textureFlare3, 120, 0.9, THREE.AdditiveBlending);
    lensFlare.add(textureFlare3, 70, 1.0, THREE.AdditiveBlending);

    lensFlare.position.copy(light.position);
    scene.add(lensFlare);

    document.getElementById("WebGL-output").appendChild(renderer.domElement);

    function render() {
        controls.update();
        sphere.rotation.y += 0.0005;
        clouds.rotation.y += 0.0007;
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    render();


}
window.onload = init


function createSphere(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshPhongMaterial({
            map: earthTex,
            bumpMap: bumpTex,
            bumpScale: 0.005,
            specularMap: waterTex,
            specular: new THREE.Color('grey')
        })
    );
}

function createClouds(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius + 0.003, segments, segments),
        new THREE.MeshPhongMaterial({
            map: cloudsTex,
            transparent: true
        })
    );
}

function createStars(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map: starsTex,
            side: THREE.BackSide
        })
    );
}
