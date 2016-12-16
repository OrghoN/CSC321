/**
 * Create scene, camera, renderer.
 */
var setUp = function() {
    var result = {};

    // create a scene, that will hold all our elements such
    // as objects, cameras and lights.
    var scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    // a frustrum is a pyramid with a square base the apex cut off
    // 45 is vertical field of view of the frustrum
    // window.innerWidth/window.innerHeight is aspect ratio of the frustrum
    // 0.1 is the distance to the near plane of the frustrum
    // 1000 is the distance to the far plane of the frustrum
    var camera = new THREE.PerspectiveCamera(45,
        window.innerWidth / window.innerHeight, 0.1, 1000);

    var orbitControls = new THREE.OrbitControls(camera);
    orbitControls.autoRotate = false;
    var clock = new THREE.Clock();

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    // specify the color of the background for this image
    renderer.setClearColor(new THREE.Color(0xDDFFCC));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;

    // specify the lengths of the 3 axes
    var axes = new THREE.AxisHelper(24);
    scene.add(axes);

    // position and point the camera to the center of the scene
    camera.position.x = 20;
    camera.position.y = 40;
    camera.position.z = 60;
    camera.lookAt(scene.position);

    var origin = new THREE.Object3D();
    origin.position = new THREE.Vector3(0, 0, 0);

    result.camera = camera;
    result.clock = clock;
    result.orbitControls = orbitControls;
    result.origin = origin;
    result.renderer = renderer;
    result.scene = scene;

    return result;
}; // setUp()


/**
 * Give the program the means to resize the image
 * when a user resizes the window that contains
 * the image.
 *
 * @param {THREE.PerspectiveCamera} camera (could also be a different kind of camera)
 * @param {THREE.WebGLRenderer} renderer (could also be a different kind of renderer)
 */
var makeResizable = function(camera, renderer) {
    /**
     * Resize image when user resizes the window.
     */
    var onResize = function() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }; // onResize()

    window.addEventListener('resize', onResize, false);

}; // makeResizable()

/**
 * Add lights to the scene.
 *
 * @param {THREE.Scene} scene is a graph that contains nodes
 * that represent lights, cameras, and geometric objects.
 *
 */
var addLights = function(scene, origin) {
    // add spotlights for the shadows
    var directionalLight0 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight0.castShadow = true;
    directionalLight0.target = origin;
    directionalLight0.position.set(20, 40, 80);

    directionalLight0.shadeCameraNear = 100;
    directionalLight0.shadeCameraFar = -100;
    directionalLight0.shadeCameraLeft = -100;
    directionalLight0.shadeCameraRight = 100;
    directionalLight0.shadeCameraTop = 100;
    directionalLight0.shadeCameraBottom = -100;

    scene.add(directionalLight0);

    var directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight1.castShadow = true;
    directionalLight1.target = origin;
    directionalLight1.position.set(20, 80, 40);

    directionalLight1.shadeCameraNear = 100;
    directionalLight1.shadeCameraFar = -100;
    directionalLight1.shadeCameraLeft = -100;
    directionalLight1.shadeCameraRight = 100;
    directionalLight1.shadeCameraTop = 100;
    directionalLight1.shadeCameraBottom = -100;

    scene.add(directionalLight1);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    var directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight2.castShadow = true;
    directionalLight2.target = origin;
    directionalLight2.position.set( -80, 40, -60 );

    directionalLight2.shadeCameraNear = 100;
    directionalLight2.shadeCameraFar = -100;
    directionalLight2.shadeCameraLeft = -100;
    directionalLight2.shadeCameraRight = 100;
    directionalLight2.shadeCameraTop = 100;
    directionalLight2.shadeCameraBottom = -100;

    scene.add(directionalLight2);
}; // addLights()


/**
 * Draw a picture of a spacecraft.
 */
var init = function() {
        var basics = setUp();
        var camera = basics.camera;
        var clock = basics.clock;
        var orbitControls = basics.orbitControls;
        orbitControls.autoRotate = true;
        var origin = basics.origin;
        var renderer = basics.renderer;
        var scene = basics.scene;

        makeResizable(camera, renderer);

        addLights(scene, origin);

        // add the output of the renderer to the html element
        document.getElementById("WebGL-output").appendChild(renderer.domElement);

        var visible = new function() {
            this.cantellatedCube = true;
            this.cube = false;
            this.isocahedron = false;
            this.truncatedCube = false;
            this.truncatedOctahedron = false;
            this.truncatedTetrahedron = false;
            this.cuboctahedron = false;
        };

        var gui = new dat.GUI();
        var guiControls = [];

        for (var prop in visible) {
            guiControls.push(gui.add(visible, prop).listen());
        }

        var Material = new THREE.MeshPhongMaterial({
            color: 0x66CCEE,
            specular: 0x88888,
            shininess: 90,
            opacity: .8,
            // transparent: true
        });
        Material.side = THREE.DoubleSide;

        var cantellatedCubeGeometry = makeCantellatedCube(3);
        var cantellatedCube = new THREE.Mesh(cantellatedCubeGeometry, Material);
        scene.add(cantellatedCube);

        var cubeGeometry = makeCube(10);
        var cube = new THREE.Mesh(cubeGeometry, Material);
        scene.add(cube);

        var isocahedronGeometry = makeIsocahedron(10);
        var isocahedron = new THREE.Mesh(isocahedronGeometry, Material);
        scene.add(isocahedron);

        var truncatedCubeGeometry = makeTruncatedCube(6);
        var truncatedCube = new THREE.Mesh(truncatedCubeGeometry, Material);
        scene.add(truncatedCube);

        var truncatedOctahedronGeometry = makeTruncatedOctahedron(3);
        var truncatedOctahedron = new THREE.Mesh(truncatedOctahedronGeometry, Material);
        scene.add(truncatedOctahedron);

        var truncatedTetrahedronGeometry = makeTruncatedTetrahedron(3);
        var truncatedTetrahedron = new THREE.Mesh(truncatedTetrahedronGeometry, Material);
        scene.add(truncatedTetrahedron);

        var cuboctahedronGeometry = makeCuboctahedron(7);
        var cuboctahedron = new THREE.Mesh(cuboctahedronGeometry, Material);
        scene.add(cuboctahedron);

        var render = function() {
            var delta = clock.getDelta();
            orbitControls.update(delta);

            cantellatedCube.visible = visible.cantellatedCube;
            cube.visible = visible.cube;
            isocahedron.visible = visible.isocahedron;
            truncatedCube.visible = visible.truncatedCube;
            truncatedOctahedron.visible = visible.truncatedOctahedron;
            truncatedTetrahedron.visible = visible.truncatedTetrahedron;
            cuboctahedron.visible = visible.cuboctahedron;

            // render using requestAnimationFrame
            requestAnimationFrame(render);
            renderer.render(scene, camera);
        }; // render()

        // add the output of the renderer to the html element
        document.getElementById("WebGL-output").appendChild(renderer.domElement);

        render();
    } // init()
