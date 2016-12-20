
/**
 * makeSpiralSphere - Generates line geometry for a spiral
 *
 * @param  {numebr} r=20              Radius of sphere
 * @param  {number} spiralNumber = 16 number of coils in spiral
 * @param  {number} smoothness = 100  How smooth the spiral is
 * @return {THREE.Geometry}           The Spiral Geometry that is returned
 */
function makeSpiralSphere(r=20, spiralNumber = 16, smoothness = 100) {

  var geometry = new THREE.Geometry();

      var cz = smoothness * spiralNumber;
      var hxy = Math.PI / smoothness;
      var hz = Math.PI / cz;

      for (var i = -cz; i < cz; i++) {
          var lxy = i * hxy;
          var lz = i * hz;
          var rxy = r /  Math.cosh(lz);
          var x = rxy * Math.cos(lxy);
          var y = rxy * Math.sin(lxy);
          var z = r * Math.tanh(lz);
          geometry.vertices.push(new THREE.Vector3(x, y, z));
  }

  return geometry;

}
