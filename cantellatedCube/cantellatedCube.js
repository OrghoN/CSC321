/**
 * makeCantellatedCube - Generates a cantellated cube 
 *
 * @param  {Number} s Size of the shape
 * @return {THREE.Geometry}   Returns a Cantellated Cube Geometry
 */
function makeCantellatedCube(s) {
    var num = 1 + Math.SQRT2;
    var constraints = [
        [1, 1, num],
        [1, num, 1],
        [num, 1, 1]
    ];

    return makeArchimedianSolid(s, constraints, true, false);
}

/**
 * makeCube - Generates a cube
 *
 * @param  {Number} s Size of the shape
 * @return {THREE.Geometry}   Returns a Cube Geometry
 */
function makeCube(s) {
    var constraints = [
        [0.5, 0.5, 0.5]
    ];
    return makeArchimedianSolid(s, constraints);
}


/**
 * makeIsocahedron - Generate an isocahedron Geometry
 *
 * @param  {Number} s Size of the shape
 * @return {THREE.Geometry}   Returns an isocahedron Geometry
 */
function makeIsocahedron(s) {
    var constraints = [
        [0, math.phi / 2, 0.5],
        [math.phi / 2, 0.5, 0],
        [0.5, 0, math.phi / 2]
    ];
    return makeArchimedianSolid(s, constraints, false);
}

/**
 * makeTruncatedCube - Generates a truncatedCube
 *
 * @param  {Number} s Size of the shape
 * @return {THREE.Geometry}   Returns a Truncated Cube Geometry
 */
function makeTruncatedCube(s) {
    var sigma = Math.SQRT2 - 1;
    var constraints = [
        [sigma, 1, 1],
        [1, sigma, 1],
        [1, 1, sigma]

    ];

    return makeArchimedianSolid(s, constraints);
}


/**
 * makeTruncatedOctahedron - Generates a truncatedOctahedron
 *
 * @param  {Number} s Size of the shape
 * @return {THREE.Geometry}   Returns a Truncated Octahedron Geometry
 */
function makeTruncatedOctahedron(s) {
    var constraints = [-1, 1, -2, 2, 0];

    return makeArchimedianSolid(s, constraints);
}

/**
 * makeTruncatedTetrahedron - Generates a Truncated Tetrahedron
 *
 * @param  {Number} s Size of the shape
 * @return {THREE.Geometry}   Returns a Truncated Tetrahedron Geometry
 */
function makeTruncatedTetrahedron(s) {

    var constraints = [
        [1, 1, 3],
        [1, 3, 1],
        [3, 1, 1]
    ];

    return makeArchimedianSolid(s, constraints, true, true);
}


/**
 * makeCuboctahedron - Generates a Cuboctahedron
 *
 * @param  {Number} s Size of the shape
 * @return {THREE.Geometry}   Returns a Cuboctahedron Geometry
 */
function makeCuboctahedron(s) {
    var constraints = [
        [1, 1, 0],
        [1, 0, 1],
        [0, 1, 1]
    ];

    return makeArchimedianSolid(s, constraints);
}

/**
 * makeArchimedianSolid - Generates a Solid based on a series of constrains
 *
 * @param  {Number} s               Size of shape
 * @param  {Number[]} constraints     constraints that the vertices are generated from
 * @param  {boolean} convex = true   Fallback to all permutation if convex shape doesn't work
 * @param  {boolean} even = false checks to see if there are even number of minus signs
 * @return {THREE.Geometry} Returns the shape
 */
function makeArchimedianSolid(s, constraints, convex = true, even = false) {
    var solid = new THREE.Geometry();

    var points = [];
    var vertices = [];

    var negative = 0;
    var push = true;

    var temp;
    if (!Array.isArray(constraints[0])) {
        vertices = Combinatorics.permutation(constraints, 3).toArray();
    } else {
        constraints.forEach(function(constraint) {
            temp = Combinatorics.cartesianProduct([constraint[0], -constraint[0]], [constraint[1], -constraint[1]], [constraint[2], -constraint[2]]).toArray();
            vertices.push(temp);
        });

        vertices = vertices.reduce(function(a, b) {
            return a.concat(b);
        }, []);
    }

    vertices.forEach(function(vertex, i) {
        if (even) {
            push = false;
            negative = 0;

            vertex.forEach(function(num) {
                if (num < 0) {
                    negative++;
                }
            });

            if (negative % 2 === 0) {
                push = true;
            }
        }
        if (convex && push) {
            points.push(new THREE.Vector3(s * vertex[0], s * vertex[1], s * vertex[2]));
        } else if (push) {
            solid.vertices.push(new THREE.Vector3(s * vertex[0], s * vertex[1], s * vertex[2]));
            points.push(i);
        }
    });

    if (convex) {
        var solid = new THREE.ConvexGeometry(points);
    } else {
        faces = Combinatorics.permutation(points, 3).toArray();
        faces.forEach(function(face) {
            solid.faces.push(new THREE.Face3(face[0], face[1], face[2]));
        });
    }

    console.log("vertices: " + solid.vertices.length);
    console.log("faces: " + solid.faces.length);

    solid.computeFaceNormals();

    return solid;
}
