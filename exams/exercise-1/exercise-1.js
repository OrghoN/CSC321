function cylinder(u, v) {
    var radius = 1; //radius
    var height = 1; //max height
    var angle = v * 2 * Math.PI; //scaling v to angle
    var x = radius * Math.cos(angle);
    var y = radius * Math.sin(angle);
    var z = u * height; //scaling u to height
    return new THREE.Vector3(x, y, z);
}

function cone(u, v) {
    var radius = 1; //max radius
    var height = 1;
    var angle = v * 2 * Math.PI; //scaling v to angle
    var x = radius * u * height * Math.cos(angle); //scaling u to height
    var y = radius * u * height * Math.sin(angle); //scaling u to height
    var z = height * u; //scaling u to height
    return new THREE.Vector3(x, y, z);
}

function sphere(u, v) {
    var radius = 1;
    var angle2 = u * 2 * Math.PI; //scaling u to angle
    var angle1 = v * 2 * Math.PI; //scaling v to angle
    var x = radius * Math.cos(angle2) * Math.sin(angle1);
    var y = radius * Math.sin(angle2) * Math.sin(angle1);
    var z = radius * Math.cos(angle2);
    return new THREE.Vector3(x, y, z);
}
