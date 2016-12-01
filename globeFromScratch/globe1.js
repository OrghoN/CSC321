loader = new THREE.TextureLoader;
loader.crossOrigin = '';

earthTex = loader.load('images/2_no_clouds_4k.jpg');
bumpTex = loader.load('images/elev_bump_4k.jpg');
waterTex = loader.load('images/water_4k_me.png');

cloudsTex = loader.load('images/fair_clouds_4k.png');
starsTex = loader.load('images/galaxy_starfield.png');

textureFlare0 = loader.load("images/lensflare0.png");
textureFlare3 = loader.load("images/lensflare3.png");

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

    radius = 0.3;
    segments = 32;
    rotation = 6;
    var axis = new THREE.Vector3(-Math.cos(23.5), -Math.sin(23.5), 0);

    var earths = [];
    var sphere = new THREE.SphereGeometry(radius*5, segments, segments);

    // var points = THREE.GeometryUtils.randomPointsInGeometry(sphere, 4);

    for (var i = 0; i < 4; i++) {
      if (i==0){
        earths.push(createEarth(radius, segments));
      }
      else{
        earths.push(earths[0].clone());
      }
        // earths[i].position.set(Math.random()*2, Math.random()*3, Math.random());
        scene.add(earths[i]);
    }

    var stars = createStars(90, 64);
    scene.add(stars);

    var lensFlare = createLensFlare();
    lensFlare.position.copy(light.position);
    scene.add(lensFlare);

    var rotate = new function() {
        this.rotationSpeed = 0.0005;
    };

    var gui = new dat.GUI();
    gui.add(rotate, 'rotationSpeed', -.5, 0.5);

    var controls = new THREE.TrackballControls(camera);

    document.getElementById("WebGL-output").appendChild(renderer.domElement);

    function render() {
        controls.update();
        earths.forEach(function(earth) {
          earth.rotateOnAxis(axis, rotate.rotationSpeed);
          earth.children[0].rotateOnAxis(axis, rotate.rotationSpeed + 0.05 * rotate.rotationSpeed);
        });

        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    render();


}
window.onload = init

function createEarth(radius, segments) {
    var sphere = createSphere(radius, segments);
    sphere.rotation.y = rotation;
    var clouds = createClouds(radius, segments);
    sphere.rotation.y = rotation;
    sphere.add(clouds);

    return sphere;
}

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

function createLensFlare() {
    var flareColor = new THREE.Color(0xffaacc);
    var lensFlare = new THREE.LensFlare(textureFlare0, 350, 0.0, THREE.AdditiveBlending, flareColor);

    lensFlare.add(textureFlare3, 60, 0.6, THREE.AdditiveBlending);
    lensFlare.add(textureFlare3, 70, 0.7, THREE.AdditiveBlending);
    lensFlare.add(textureFlare3, 120, 0.9, THREE.AdditiveBlending);
    lensFlare.add(textureFlare3, 70, 1.0, THREE.AdditiveBlending);

    return lensFlare;
}
