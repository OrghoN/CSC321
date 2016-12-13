// Generates a cantellated cube (aka rhombicuboctahedron)
// that fits within a cube with side lengths 's'
function cantCube(s) {
    // x/y/z offset distance from 'neighbor' vertex on a cube
    // this explanation sucks, I know, but better to calculate
    // this value once rather than dozens of times

    //var n = s/3;
    var n = s / (2 + Math.sqrt(2));

    // Final geometry.  RhombiCuboOctaHedron, 'Rico'
    var RCOH = new THREE.Geometry();

    // Note clockwise, bottom-to-top organization
    // Generate vertices
    // Bottom 4
    RCOH.vertices.push(new THREE.Vector3(n, 0, n)); // v[0]
    RCOH.vertices.push(new THREE.Vector3(s - n, 0, n));
    RCOH.vertices.push(new THREE.Vector3(s - n, 0, s - n));
    RCOH.vertices.push(new THREE.Vector3(n, 0, s - n));

    // Bottom-middle 8-band
    RCOH.vertices.push(new THREE.Vector3(0, n, n)); // v[4]
    RCOH.vertices.push(new THREE.Vector3(n, n, 0));
    RCOH.vertices.push(new THREE.Vector3(s - n, n, 0));
    RCOH.vertices.push(new THREE.Vector3(s, n, n));

    RCOH.vertices.push(new THREE.Vector3(s, n, s - n)); // v[8]
    RCOH.vertices.push(new THREE.Vector3(s - n, n, s));
    RCOH.vertices.push(new THREE.Vector3(n, n, s));
    RCOH.vertices.push(new THREE.Vector3(0, n, s - n));

    // Top-middle 8-band
    RCOH.vertices.push(new THREE.Vector3(0, s - n, n)); // v[12]
    RCOH.vertices.push(new THREE.Vector3(n, s - n, 0));
    RCOH.vertices.push(new THREE.Vector3(s - n, s - n, 0));
    RCOH.vertices.push(new THREE.Vector3(s, s - n, n));

    RCOH.vertices.push(new THREE.Vector3(s, s - n, s - n)); // v[16]
    RCOH.vertices.push(new THREE.Vector3(s - n, s - n, s));
    RCOH.vertices.push(new THREE.Vector3(n, s - n, s));
    RCOH.vertices.push(new THREE.Vector3(0, s - n, s - n));

    // Top 4
    RCOH.vertices.push(new THREE.Vector3(n, s, n)); // v[20]
    RCOH.vertices.push(new THREE.Vector3(s - n, s, n));
    RCOH.vertices.push(new THREE.Vector3(s - n, s, s - n));
    RCOH.vertices.push(new THREE.Vector3(n, s, s - n));

    var points = [];

    RCOH.vertices.forEach(function(point, i) {
        points.push(i);
    });
    faces = Combinatorics.permutation(points, 3).toArray();
    faces.forEach(function(face) {
        RCOH.faces.push(new THREE.Face3(face[0], face[1], face[2]));
    });

    RCOH.computeFaceNormals();

    return RCOH;
}

function makeCube(s) {
    var constraints = [
        [0.5, 0.5, 0.5]
    ];
    return makeArchimedianSolid(s, constraints);
}

function makeIsocahedron(s) {
    var constraints = [
        [0, math.phi / 2, 0.5],
        [math.phi / 2, 0.5, 0],
        [0.5, 0, math.phi / 2]
    ];
    return makeArchimedianSolid(s, constraints);
}

function makeDodecahedron(s) {
    var constrains = [
        [math.phi / 2, math.phi / 2, math.phi / 2],
        [.5, (math.phi + 1) / 2, 0],
        [0.5, 0, 0.5],
        [0, 0.5, (math.phi + 1) / 2]
    ];
    return makeArchimedianSolid(s, constraints);
}

function makeArchimedianSolid(s, constraints) {
    var solid = new THREE.Geometry();

    var points = [];
    var vertices = [];

    var temp;

    constraints.forEach(function(constraint) {
        temp = Combinatorics.cartesianProduct([constraint[0], -constraint[0]], [constraint[1], -constraint[1]], [constraint[2], -constraint[2]]).toArray();
        vertices.push(temp);
    });

    vertices = vertices.reduce(function(a, b) {
        return a.concat(b);
    }, []);

    vertices.forEach(function(vertex, i) {
        solid.vertices.push(new THREE.Vector3(s * vertex[0], s * vertex[1], s * vertex[2]));
        points.push(i);
    });

    faces = Combinatorics.permutation(points, 3).toArray();
    faces.forEach(function(face) {
        solid.faces.push(new THREE.Face3(face[0], face[1], face[2]));
    });

    solid.computeFaceNormals();

    return solid;
}
