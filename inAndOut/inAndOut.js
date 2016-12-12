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

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    // specify the color of the background for this image
    renderer.setClearColor(new THREE.Color(0xDDFFCC));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;

    // position and point the camera to the center of the scene
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 60;
    camera.lookAt(scene.position);

    var origin = new THREE.Object3D();
    origin.position = new THREE.Vector3(0, 0, 0);

    result.camera = camera;
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
 * @param {THREE.PerspectiveCamera} camera
 *     (could also be a different kind of camera)
 * @param {THREE.WebGLRenderer} renderer
 *     (could also be a different kind of renderer)
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

var randomPoints = function(radiusOfRegion, numberOfPoints, v1, v2, v3) {
    var result = {};

    // Create and return to the caller a function
    // that computes the distance of a point from
    // the line segment determined by v0 and v1,
    // where the distance is scaled so that the
    // distance to v2 is 1.0.
    var distance = function(v0, v1, v2) {
        // Here is a stub function.
        // Complete the definition of this function.
        var f = function(vector) {
            alpha = ((v1.y - v0.y) * vector.x + (v0.x - v1.x) * vector.y + (v0.y * v1.x - v0.x * v1.y)) / ((v1.y - v0.y) * v2.x + (v0.x - v1.x) * v2.y + (v0.y * v1.x - v0.x * v1.y));
            beta = ((v2.y - v1.y) * vector.x + (v1.x - v2.x) * vector.y + (v1.y * v2.x - v1.x * v2.y)) / ((v2.y - v1.y) * v0.x + (v1.x - v2.x) * v0.y + (v1.y * v2.x - v1.x * v2.y));
            gamma = ((v0.y - v2.y) * vector.x + (v2.x - v0.x) * vector.y + (v2.y * v0.x - v2.x * v0.y)) / ((v0.y - v2.y) * v1.x + (v2.x - v0.x) * v1.y + (v2.y * v0.x - v2.x * v0.y));

            return new THREE.Vector3(alpha, beta, gamma);
        }; // f()

        return f;
    }; // distance()

    // determine if a point is inside the triangle
    // return true if inside, false if outside
    var isInside = function(vector, v0, v1, v2) {
        var dist = distance(v0, v1, v2);
        var check = dist(vector);

        return !(check.x > 0 && check.x < 1 && check.y > 0 && check.y < 1 && check.z > 0 && check.z < 1);
    }; // isInside()

    var randomVector = function() {
        // initialize x and y so that point
        // (x, y) is just outside of a circle
        // that is centered at the origin and
        // has the specified radius
        var x = radiusOfRegion + 1;
        var y = radiusOfRegion + 1;

        // generate random coordinates until
        // one that lies inside of the circle
        // is generated
        while (x * x + y * y > radiusOfRegion * radiusOfRegion) {
            x = radiusOfRegion * (2 * Math.random() - 1);
            y = radiusOfRegion * (2 * Math.random() - 1);
        } // while

        return new THREE.Vector3(x, y, 0);
    }; // randomVector()

    var insideMaterial = new THREE.PointCloudMaterial({
        color: 0xFF0000,
        size: 2.0
    });
    var outsideMaterial = new THREE.PointCloudMaterial({
        color: 0x00FF00,
        size: 2.0
    });

    var insideGeometry = new THREE.Geometry();
    var outsideGeometry = new THREE.Geometry();

    for (var i = 0; i < numberOfPoints; i++) {
        var v = randomVector();
        if (isInside(v, v1, v2, v3)) {
            insideGeometry.vertices.push(v);
        } // if
        else {
            outsideGeometry.vertices.push(v);
        } // else
    } // for

    result.insidePoints = new THREE.PointCloud(insideGeometry, insideMaterial);
    result.outsidePoints = new THREE.PointCloud(outsideGeometry, outsideMaterial);

    return result;
}; // randomPoints()

// make a triangle
// return edges (THREE.Line object) and vertices (THREE.PointCloud)
// in an object
var triangle = function(radius) {
    var result = {};

    // draw triangle's edges and vertices
    var edgeMaterial = new THREE.LineBasicMaterial({
        color: 0x2266EE,
        linewidth: 8.0
    });
    var vertexMaterial = new THREE.PointCloudMaterial({
        color: 0x000000,
        size: 4.0
    });

    var edgeGeometry = new THREE.Geometry();
    var vertexGeometry = new THREE.Geometry();

    var angle = Math.PI / 2;
    for (var i = 0; i < 3; i++) {
        var x = radius * Math.cos(angle);
        var y = radius * Math.sin(angle);
        var vector = new THREE.Vector3(x, y, 0);
        edgeGeometry.vertices.push(vector);
        vertexGeometry.vertices.push(vector);
        angle += 2 * Math.PI / 3;
    } // for
    edgeGeometry.vertices.push(edgeGeometry.vertices[0].clone());

    result.edges = new THREE.Line(edgeGeometry, edgeMaterial);

    result.vertices = new THREE.PointCloud(vertexGeometry, vertexMaterial);

    return result;
}; // triangle()


var init = function() {
    var basics = setUp();
    var camera = basics.camera;
    var clock = basics.clock;
    var orbitControls = basics.orbitControls;
    var origin = basics.origin;
    var renderer = basics.renderer;
    var scene = basics.scene;

    makeResizable(camera, renderer);

    // Create an equilateral triangle that
    // is centered at the origin and fits
    // within a circle whose radius is 20
    var t = triangle(20);
    scene.add(t.edges);
    scene.add(t.vertices);

    // Create 100 random points within
    // a circle of radius 20 that is
    // centered at the origin
    var p = randomPoints(20, 1000, t.vertices.geometry.vertices[0], t.vertices.geometry.vertices[1], t.vertices.geometry.vertices[2]);
    scene.add(p.insidePoints);
    scene.add(p.outsidePoints);

    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(renderer.domElement);

    var render = function() {
        // render using requestAnimationFrame
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }; // render()

    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(renderer.domElement);

    render();
}; // init()
