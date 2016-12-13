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

    // Define faces
    // Bottom square
    RCOH.faces.push(new THREE.Face3(0, 1, 2));
    RCOH.faces.push(new THREE.Face3(0, 2, 3));

    // Bottom bevel triangles
    RCOH.faces.push(new THREE.Face3(0, 4, 5));
    RCOH.faces.push(new THREE.Face3(1, 6, 7));
    RCOH.faces.push(new THREE.Face3(2, 8, 9));
    RCOH.faces.push(new THREE.Face3(3, 10, 11));

    // Bottom bevel squares
    RCOH.faces.push(new THREE.Face3(0, 5, 6));
    RCOH.faces.push(new THREE.Face3(0, 6, 1));

    RCOH.faces.push(new THREE.Face3(1, 7, 8));
    RCOH.faces.push(new THREE.Face3(1, 8, 2));

    RCOH.faces.push(new THREE.Face3(2, 9, 10));
    RCOH.faces.push(new THREE.Face3(2, 10, 3));

    RCOH.faces.push(new THREE.Face3(3, 11, 4));
    RCOH.faces.push(new THREE.Face3(3, 4, 0));

    // Middle squares
    RCOH.faces.push(new THREE.Face3(4, 12, 13));
    RCOH.faces.push(new THREE.Face3(4, 13, 5));

    RCOH.faces.push(new THREE.Face3(5, 13, 14));
    RCOH.faces.push(new THREE.Face3(5, 14, 6));

    RCOH.faces.push(new THREE.Face3(6, 14, 15));
    RCOH.faces.push(new THREE.Face3(6, 15, 7));

    RCOH.faces.push(new THREE.Face3(7, 15, 16));
    RCOH.faces.push(new THREE.Face3(7, 16, 8));

    RCOH.faces.push(new THREE.Face3(8, 16, 17));
    RCOH.faces.push(new THREE.Face3(8, 17, 9));

    RCOH.faces.push(new THREE.Face3(9, 17, 18));
    RCOH.faces.push(new THREE.Face3(9, 18, 10));

    RCOH.faces.push(new THREE.Face3(10, 18, 19));
    RCOH.faces.push(new THREE.Face3(10, 19, 11));

    RCOH.faces.push(new THREE.Face3(11, 19, 12));
    RCOH.faces.push(new THREE.Face3(11, 12, 4));

    // Top bevel triangles
    RCOH.faces.push(new THREE.Face3(12, 20, 13));
    RCOH.faces.push(new THREE.Face3(14, 21, 15));
    RCOH.faces.push(new THREE.Face3(16, 22, 17));
    RCOH.faces.push(new THREE.Face3(18, 23, 19));

    // Top bevel squares
    RCOH.faces.push(new THREE.Face3(13, 20, 21));
    RCOH.faces.push(new THREE.Face3(13, 21, 14));

    RCOH.faces.push(new THREE.Face3(15, 21, 22));
    RCOH.faces.push(new THREE.Face3(15, 22, 16));

    RCOH.faces.push(new THREE.Face3(17, 22, 23));
    RCOH.faces.push(new THREE.Face3(17, 23, 18));

    RCOH.faces.push(new THREE.Face3(19, 23, 20));
    RCOH.faces.push(new THREE.Face3(19, 20, 12));

    // Top square
    RCOH.faces.push(new THREE.Face3(20, 22, 21));
    RCOH.faces.push(new THREE.Face3(20, 23, 22));

    RCOH.computeFaceNormals();

    return RCOH;
}

var orgho = [];
var i, j, k;
for (i = -1; i < 2; i += 2) {
    for (j = -1; j < 2; j += 2) {
        for (k = -(1 + Math.sqrt(2)); k < 3; k += (2 * (1 + Math.sqrt(2)))) {
            orgho.push([i,j,k]);
            }
        }
    }

console.log(orgho.length);
console.log(JSON.stringify(orgho));
