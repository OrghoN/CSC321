loader = new THREE.TextureLoader;
starsTex = loader.load('images/galaxy_starfield.png');

// Setup a new scene
var scene = new THREE.Scene();

// Setup the camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = -5;
camera.position.z = 8;
// camera.position.x = 5;


// Setup the renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Add the lights
var ambientLight = new THREE.AmbientLight(0x111111);
scene.add(ambientLight);

var light = new THREE.PointLight(0xFFFFDD);
light.position.set(-15, 10, 15);
scene.add(light);

var stars = createStars(90, 64);
scene.add(stars);

// Load the JSON files and provide callback functions (modelToScene
var loader = new THREE.JSONLoader();
loader.load("1.json", addModelToScene);
loader.load("2.json", addModelToScene);
loader.load("4.json", addModelToScene);


// After loading JSON from our file, we add it to the scene
function addModelToScene(geometry, materials) {
    var material = new THREE.MeshFaceMaterial(materials);
    model = new THREE.Mesh(geometry, material);
    //  model.scale.set(5,5,5);
    scene.add(model);
    // camera.lookAt(model.position);
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

// Render loop to rotate our sphere by a little bit each frame
var render = function() {
    requestAnimationFrame(render);

    renderer.render(scene, camera);
};

render();
