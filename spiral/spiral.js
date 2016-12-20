function makeSpiralSphere(s) {

    var f = function(t) {
        t = 2 * t * Math.PI;

        return new THREE.Vector3(Math.cos(t) / Math.sqrt(1 + s * s * t * t), (s * t) / Math.sqrt(1 + s * s * t * t), Math.sin(t) / Math.sqrt(1 + s * s * t * t));
    };

    return f;

}
