

describe( "vectors and matrices", function() {

    describe( "check vector2D", function() {
	var u = vector2D( 3, 4 );
	var ux = 3;
	var uy = 4;
	var umag = 5;

	var v = vector2D( 5, 12 );
	var vx = 5;
	var vy = 12;
	var vmag = 13;

	it( "check accessors", function() {
	    expect(u.getX()).toEqual(ux);
	    expect(u.getY()).toEqual(uy);
	}); // check accessors

	it( "check addition", function() {
	    var sum = u.add(v);
	    expect(sum.getX()).toEqual(ux + vx);
	    expect(sum.getY()).toEqual(uy + vy);
	}); // check addtion

	it( "check subtraction", function() {
	    var difference = u.subtract(v);
	    expect(difference.getX()).toEqual(ux - vx);
	    expect(difference.getY()).toEqual(uy - vy);
	}); //  check subtraction

	it( "check scaling", function() {
	    var scaleFactor = 10;
	    var scaledVector = u.scale( scaleFactor, scaleFactor );
	    expect(scaledVector.getX()).toEqual( scaleFactor * ux );
	    expect(scaledVector.getY()).toEqual( scaleFactor * uy );
	}); // check scaling

	it( "check dot product", function() {
	    expect(u.dot(v)).toEqual( ux * vx + uy * vy );
	}); //  check dot product

	it( "check magnitude", function() {
	    expect(u.magnitude()).toBeCloseTo( umag, 8 );
	    expect(v.magnitude()).toBeCloseTo( vmag, 8 );
	}); // check magnitude

	it( "check normalize", function() {
	    var nu = u.normalize();
	    expect(nu.getX()).toBeCloseTo( 3.0/5.0 );
	    expect(nu.getY()).toBeCloseTo( 4.0/5.0 );
	    var nv = v.normalize();
	    expect(nv.getX()).toBeCloseTo( 5.0/13.0 );
	    expect(nv.getY()).toBeCloseTo( 12.0/13.0 );
	});
    }); // vector2D


    describe( "check vector3D", function() {
	var u = vector3D( 1, 2, 2 );
	var ux = 1;
	var uy = 2;
        var uz = 2;
	var umag = 3;

	var v = vector3D( 6, 6, 7 );
	var vx = 6;
	var vy = 6;
	var vz = 7;
	var vmag = 11;

	it( "check accessors", function() {
	    expect(u.getX()).toEqual(ux);
	    expect(u.getY()).toEqual(uy);
	    expect(u.getZ()).toEqual(uz);
	}); // check accessors


	it( "check addition", function() {
	    var sum = u.add(v);
	    expect(sum.getX()).toEqual(ux + vx);
	    expect(sum.getY()).toEqual(uy + vy);
	    expect(sum.getZ()).toEqual(uz + vz);
	}); // check addtion



	it( "check subtraction", function() {
	    var difference = u.subtract(v);
	    expect(difference.getX()).toEqual(ux - vx);
	    expect(difference.getY()).toEqual(uy - vy);
	    expect(difference.getZ()).toEqual(uz - vz);
	}); //  check subtraction



	it( "check scaling", function() {
	    var scaleFactor = 10;
	    var scaledVector = u.scale( scaleFactor, scaleFactor );
	    expect(scaledVector.getX()).toEqual( scaleFactor * ux );
	    expect(scaledVector.getY()).toEqual( scaleFactor * uy );
	    expect(scaledVector.getZ()).toEqual( scaleFactor * uz );
	}); // check scaling



	it( "check dot product", function() {
	    expect(u.dot(v)).toEqual( ux * vx + uy * vy + uz * vz );
	}); //  check dot product



	it( "check magnitude", function() {
	    expect(u.magnitude()).toBeCloseTo( umag, 3 );
	    expect(v.magnitude()).toBeCloseTo( vmag, 11 );
	}); // check magnitude



	it( "check normalize", function() {
	    var nu = u.normalize();
	    expect(nu.getX()).toBeCloseTo( 1.0/3.0 );
	    expect(nu.getY()).toBeCloseTo( 2.0/3.0 );
	    expect(nu.getZ()).toBeCloseTo( 2.0/3.0 );
	    var nv = v.normalize();
	    expect(nv.getX()).toBeCloseTo( 6.0/11.0 );
	    expect(nv.getY()).toBeCloseTo( 6.0/11.0 );
	    expect(nv.getZ()).toBeCloseTo( 7.0/11.0 );
	});



	it( "check cross product", function() {
	    var crossProduct = u.cross(v);
	    expect(crossProduct.getX()).toEqual( 2 );
	    expect(crossProduct.getY()).toEqual( 5 );
	    expect(crossProduct.getZ()).toEqual( -6 );
	});


    }); // vector3D



    describe( "check vector4D", function() {
	var u = vector4D( 1, 2, 2 );
	var ux = 1;
	var uy = 2;
	var uz = 2;
	var umag = 3;

	var v = vector4D( 6, 6, 7 );
	var vx = 6;
	var vy = 6;
	var vz = 7;
	var vmag = 11;

	it( "check accessors", function() {
	    expect(u.getX()).toEqual(ux);
	    expect(u.getY()).toEqual(uy);
	    expect(u.getZ()).toEqual(uz);
	}); // check accessors

	it( "check addition", function() {
	    var sum = u.add(v);
	    expect(sum.getX()).toEqual(ux + vx);
	    expect(sum.getY()).toEqual(uy + vy);
	    expect(sum.getZ()).toEqual(uz + vz);
	}); // check addition

	it( "check subtraction", function() {
	    var sum = u.subtract(v);
	    expect(sum.getX()).toEqual(ux - vx);
	    expect(sum.getY()).toEqual(uy - vy);
	    expect(sum.getZ()).toEqual(uz - vz);
	}); // check subtraction

	it( "check scaling", function() {
	    var scaleFactor = 10;
	    var scaledVector = u.scale( scaleFactor, scaleFactor );
	    expect(scaledVector.getX()).toEqual( scaleFactor * ux );
	    expect(scaledVector.getY()).toEqual( scaleFactor * uy );
	    expect(scaledVector.getZ()).toEqual( scaleFactor * uz );
	}); // check scaling

	it( "check dot product", function() {
	    expect(u.dot(v)).toEqual( ux * vx + uy * vy + uz * vz );
	}); //  check dot product

	it( "check magnitude", function() {
	    expect(u.magnitude()).toBeCloseTo( umag, 3 );
	    expect(v.magnitude()).toBeCloseTo( vmag, 11 );
	}); // check magnitude

	it( "check normalize", function() {
	    var nu = u.normalize();
	    expect(nu.getX()).toBeCloseTo( 1.0/3.0 );
	    expect(nu.getY()).toBeCloseTo( 2.0/3.0 );
	    expect(nu.getZ()).toBeCloseTo( 2.0/3.0 );
	    var nv = v.normalize();
	    expect(nv.getX()).toBeCloseTo( 6.0/11.0 );
	    expect(nv.getY()).toBeCloseTo( 6.0/11.0 );
	    expect(nv.getZ()).toBeCloseTo( 7.0/11.0 );
	});

	it( "check cross product", function() {
	    var crossProduct = u.cross(v);
	    expect(crossProduct.getX()).toEqual( 2 );
	    expect(crossProduct.getY()).toEqual( 5 );
	    expect(crossProduct.getZ()).toEqual( -6 );
	});

    }); // vector4D



    describe( "check matrix2x2", function() {
	var m = matrix2x2();

	it( "check accessors", function() {
	    m.set( [[4, 3],[1,2]] );
	    expect(m.get(0,0)).toEqual(4);
	    expect(m.get(0,1)).toEqual(3);
	    expect(m.get(1,0)).toEqual(1);
	    expect(m.get(1,1)).toEqual(2);
	});

	it( "check identity", function() {
	    m.identity();
	    expect(m.get(0,0)).toEqual(1);
	    expect(m.get(0,1)).toEqual(0);
	    expect(m.get(1,0)).toEqual(0);
	    expect(m.get(1,1)).toEqual(1);
	});

	it( "check rotation", function() {
	    m.rotation( Math.PI/4 );
	    var sqrt2 = Math.sqrt(2);
	    expect(m.get(0,0)).toBeCloseTo(sqrt2/2);
	    expect(m.get(0,1)).toBeCloseTo(-sqrt2/2);
	    expect(m.get(1,0)).toBeCloseTo(sqrt2/2);
	    expect(m.get(1,1)).toBeCloseTo(sqrt2/2);
	});

	it( "check scale", function() {
	    m.identity();
	    m.scale(2,2);
	    expect(m.get(0,0)).toEqual(2);
	    expect(m.get(0,1)).toEqual(0);
	    expect(m.get(1,0)).toEqual(0);
	    expect(m.get(1,1)).toEqual(2);
	});

	it( "check determinant", function() {
	    m.set( [[4, 3],[1,2]] );
	    var d = m.determinant();
	    expect(d).toEqual( 5 );
	});

	it( "check inverse", function() {
	    m.set( [[3,2],[6,8]] );
	    m.inverse();
	    expect(m.get(0,0)).toBeCloseTo(2/3);
	    expect(m.get(0,1)).toBeCloseTo(-1/6);
	    expect(m.get(1,0)).toBeCloseTo(-1/2);
	    expect(m.get(1,1)).toBeCloseTo(1/4);
	});

	it( "check multiply", function() {
	    var a = matrix2x2();
	    a.set( [[3,2],[6,8]] );
	    var b = matrix2x2();
	    b.set( [[2/3,-1/6],[-1/2,1/4]] );
	    c = a.multiply(b);
	    expect(c.get(0,0)).toBeCloseTo(1);
	    expect(c.get(0,1)).toBeCloseTo(0);
	    expect(c.get(1,0)).toBeCloseTo(0);
	    expect(c.get(1,1)).toBeCloseTo(1);
	});

    }); // matrix2x2


    describe( "check matrix3x3", function() {
	var m = matrix3x3();

	it( "check accessors", function() {
	    m.set( [[1,2,3],[4,5,6],[7,8,9]] );
	    expect(m.get(0,0)).toEqual(1);
	    expect(m.get(0,1)).toEqual(2);
	    expect(m.get(0,2)).toEqual(3);
	    expect(m.get(1,0)).toEqual(4);
	    expect(m.get(1,1)).toEqual(5);
	    expect(m.get(1,2)).toEqual(6);
	    expect(m.get(2,0)).toEqual(7);
	    expect(m.get(2,1)).toEqual(8);
	    expect(m.get(2,2)).toEqual(9);
	});

	it( "check identity", function() {
	    m.identity();
	    expect(m.get(0,0)).toEqual(1);
	    expect(m.get(0,1)).toEqual(0);
	    expect(m.get(0,2)).toEqual(0);
	    expect(m.get(1,0)).toEqual(0);
	    expect(m.get(1,1)).toEqual(1);
	    expect(m.get(1,2)).toEqual(0);
	    expect(m.get(2,0)).toEqual(0);
	    expect(m.get(2,1)).toEqual(0);
	    expect(m.get(2,2)).toEqual(1);
	});

	it( "check rotationX", function() {
	    m.rotationX( Math.PI/4 );
	    var sqrt2 = Math.sqrt(2);
	    expect(m.get(0,0)).toBeCloseTo(1);
	    expect(m.get(0,1)).toBeCloseTo(0);
	    expect(m.get(0,2)).toBeCloseTo(0);
	    expect(m.get(1,0)).toBeCloseTo(0);
	    expect(m.get(1,1)).toBeCloseTo(sqrt2/2);
	    expect(m.get(1,2)).toBeCloseTo(-sqrt2/2);
	    expect(m.get(2,0)).toBeCloseTo(0);
	    expect(m.get(2,1)).toBeCloseTo(sqrt2/2);
	    expect(m.get(2,2)).toBeCloseTo(sqrt2/2);
	});

	it( "check rotationY", function() {
	    m.rotationY( Math.PI/4 );
	    var sqrt2 = Math.sqrt(2);
	    expect(m.get(0,0)).toBeCloseTo(sqrt2/2);
	    expect(m.get(0,1)).toBeCloseTo(0);
	    expect(m.get(0,2)).toBeCloseTo(sqrt2/2);
	    expect(m.get(1,0)).toBeCloseTo(0);
	    expect(m.get(1,1)).toBeCloseTo(1);
	    expect(m.get(1,2)).toBeCloseTo(0);
	    expect(m.get(2,0)).toBeCloseTo(-sqrt2/2);
	    expect(m.get(2,1)).toBeCloseTo(0);
	    expect(m.get(2,2)).toBeCloseTo(sqrt2/2);
	});

	it( "check rotationZ", function() {
	    m.rotationZ( Math.PI/4 );
	    var sqrt2 = Math.sqrt(2);
	    expect(m.get(0,0)).toBeCloseTo(sqrt2/2);
	    expect(m.get(0,1)).toBeCloseTo(-sqrt2/2);
	    expect(m.get(0,2)).toBeCloseTo(0);
	    expect(m.get(1,0)).toBeCloseTo(sqrt2/2);
	    expect(m.get(1,1)).toBeCloseTo(sqrt2/2);
	    expect(m.get(1,2)).toBeCloseTo(0);
	    expect(m.get(2,0)).toBeCloseTo(0);
	    expect(m.get(2,1)).toBeCloseTo(0);
	    expect(m.get(2,2)).toBeCloseTo(1);
	});


        it( "check scale (2 parameters)", function() {
          m.identity();
          m.scale2D( 2, 2 );
	  expect(m.get(0,0)).toEqual(2);
	  expect(m.get(0,1)).toEqual(0);
	  expect(m.get(0,2)).toEqual(0);
	  expect(m.get(1,0)).toEqual(0);
	  expect(m.get(1,1)).toEqual(2);
	  expect(m.get(1,2)).toEqual(0);
	  expect(m.get(2,0)).toEqual(0);
	  expect(m.get(2,1)).toEqual(0);
	  expect(m.get(2,2)).toEqual(1);
        });

	it( "check scale (3 parameters)", function() {
	    m.identity();
	    m.scale3D( 2, 2, 2 );
	    expect(m.get(0,0)).toEqual(2);
	    expect(m.get(0,1)).toEqual(0);
	    expect(m.get(0,2)).toEqual(0);
	    expect(m.get(1,0)).toEqual(0);
	    expect(m.get(1,1)).toEqual(2);
	    expect(m.get(1,2)).toEqual(0);
	    expect(m.get(2,0)).toEqual(0);
	    expect(m.get(2,1)).toEqual(0);
	    expect(m.get(2,2)).toEqual(2);
	});

        it( "check translate", function() {
            m.identity();
            m.translate( 2, 2 );
	    expect(m.get(0,0)).toEqual(1);
	    expect(m.get(0,1)).toEqual(0);
	    expect(m.get(0,2)).toEqual(2);
	    expect(m.get(1,0)).toEqual(0);
	    expect(m.get(1,1)).toEqual(1);
	    expect(m.get(1,2)).toEqual(2);
	    expect(m.get(2,0)).toEqual(0);
	    expect(m.get(2,1)).toEqual(0);
	    expect(m.get(2,2)).toEqual(1);
        });

	it( "check multiply", function() {
	    var sqrt3 = Math.sqrt(3);
	    var a = matrix3x3();
	    a.set( [[0.5, -sqrt3/2, 0], [sqrt3/2, 0.5, 0], [0, 0, 1]] );
	    var b = matrix3x3();
	    b.set( [[0.5, sqrt3/2, 0], [-sqrt3/2, 0.5, 0], [0, 0, 1]] );
	    var c = a.multiply(b);
	    expect(c.get(0,0)).toBeCloseTo(1);
	    expect(c.get(0,1)).toBeCloseTo(0);
	    expect(c.get(0,2)).toBeCloseTo(0);
	    expect(c.get(1,0)).toBeCloseTo(0);
	    expect(c.get(1,1)).toBeCloseTo(1);
	    expect(c.get(1,2)).toBeCloseTo(0);
	    expect(c.get(2,0)).toBeCloseTo(0);
	    expect(c.get(2,1)).toBeCloseTo(0);
	    expect(c.get(2,2)).toBeCloseTo(1);
	});

    }); // matrix3x3


    describe( "check matrix4x4", function() {
	var m = matrix4x4();

	it( "check accessors", function() {
	    m.set( [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]] );

	    expect(m.get(0,0)).toEqual(1);
	    expect(m.get(0,1)).toEqual(2);
	    expect(m.get(0,2)).toEqual(3);
	    expect(m.get(0,3)).toEqual(4);

	    expect(m.get(1,0)).toEqual(5);
	    expect(m.get(1,1)).toEqual(6);
	    expect(m.get(1,2)).toEqual(7);
	    expect(m.get(1,3)).toEqual(8);

	    expect(m.get(2,0)).toEqual(9);
	    expect(m.get(2,1)).toEqual(10);
	    expect(m.get(2,2)).toEqual(11);
	    expect(m.get(2,3)).toEqual(12);

	    expect(m.get(3,0)).toEqual(13);
	    expect(m.get(3,1)).toEqual(14);
	    expect(m.get(3,2)).toEqual(15);
	    expect(m.get(3,3)).toEqual(16);
	});

	it( "check identity", function() {
	    m.identity();
	    expect(m.get(0,0)).toEqual(1);
	    expect(m.get(0,1)).toEqual(0);
	    expect(m.get(0,2)).toEqual(0);
	    expect(m.get(0,3)).toEqual(0);

	    expect(m.get(1,0)).toEqual(0);
	    expect(m.get(1,1)).toEqual(1);
	    expect(m.get(1,2)).toEqual(0);
	    expect(m.get(1,3)).toEqual(0);

	    expect(m.get(2,0)).toEqual(0);
	    expect(m.get(2,1)).toEqual(0);
	    expect(m.get(2,2)).toEqual(1);
	    expect(m.get(2,3)).toEqual(0);

	    expect(m.get(3,0)).toEqual(0);
	    expect(m.get(3,1)).toEqual(0);
	    expect(m.get(3,2)).toEqual(0);
	    expect(m.get(3,3)).toEqual(1);
	});

	it( "check rotationX", function() {
	    m.rotationX( Math.PI/4 );
	    var sqrt2 = Math.sqrt(2);
	    expect(m.get(0,0)).toBeCloseTo(1);
	    expect(m.get(0,1)).toBeCloseTo(0);
	    expect(m.get(0,2)).toBeCloseTo(0);
	    expect(m.get(0,3)).toBeCloseTo(0);

	    expect(m.get(1,0)).toBeCloseTo(0);
	    expect(m.get(1,1)).toBeCloseTo(sqrt2/2);
	    expect(m.get(1,2)).toBeCloseTo(-sqrt2/2);
	    expect(m.get(1,3)).toBeCloseTo(0);

	    expect(m.get(2,0)).toBeCloseTo(0);
	    expect(m.get(2,1)).toBeCloseTo(sqrt2/2);
	    expect(m.get(2,2)).toBeCloseTo(sqrt2/2);
	    expect(m.get(2,3)).toBeCloseTo(0);

	    expect(m.get(3,0)).toBeCloseTo(0);
	    expect(m.get(3,1)).toBeCloseTo(0);
	    expect(m.get(3,2)).toBeCloseTo(0);
	    expect(m.get(3,3)).toBeCloseTo(1);
	});

	it( "check rotationY", function() {
	    m.rotationY( Math.PI/4 );
	    var sqrt2 = Math.sqrt(2);
	    expect(m.get(0,0)).toBeCloseTo(sqrt2/2);
	    expect(m.get(0,1)).toBeCloseTo(0);
	    expect(m.get(0,2)).toBeCloseTo(sqrt2/2);
	    expect(m.get(0,3)).toBeCloseTo(0);

	    expect(m.get(1,0)).toBeCloseTo(0);
	    expect(m.get(1,1)).toBeCloseTo(1);
	    expect(m.get(1,2)).toBeCloseTo(0);
	    expect(m.get(1,3)).toBeCloseTo(0);

	    expect(m.get(2,0)).toBeCloseTo(-sqrt2/2);
	    expect(m.get(2,1)).toBeCloseTo(0);
	    expect(m.get(2,2)).toBeCloseTo(sqrt2/2);
	    expect(m.get(2,3)).toBeCloseTo(0);

	    expect(m.get(3,0)).toBeCloseTo(0);
	    expect(m.get(3,1)).toBeCloseTo(0);
	    expect(m.get(3,2)).toBeCloseTo(0);
	    expect(m.get(3,3)).toBeCloseTo(1);
	});

	it( "check rotationZ", function() {
	    m.rotationZ( Math.PI/4 );
	    var sqrt2 = Math.sqrt(2);
	    expect(m.get(0,0)).toBeCloseTo(sqrt2/2);
	    expect(m.get(0,1)).toBeCloseTo(-sqrt2/2);
	    expect(m.get(0,2)).toBeCloseTo(0);
	    expect(m.get(0,3)).toBeCloseTo(0);

	    expect(m.get(1,0)).toBeCloseTo(sqrt2/2);
	    expect(m.get(1,1)).toBeCloseTo(sqrt2/2);
	    expect(m.get(1,2)).toBeCloseTo(0);
	    expect(m.get(1,3)).toBeCloseTo(0);

	    expect(m.get(2,0)).toBeCloseTo(0);
	    expect(m.get(2,1)).toBeCloseTo(0);
	    expect(m.get(2,2)).toBeCloseTo(1);
	    expect(m.get(2,3)).toBeCloseTo(0);

	    expect(m.get(3,0)).toBeCloseTo(0);
	    expect(m.get(3,1)).toBeCloseTo(0);
	    expect(m.get(3,2)).toBeCloseTo(0);
	    expect(m.get(3,3)).toBeCloseTo(1);
	});

	it( "check scale (3 parameters)", function() {
	    m.identity();
	    m.scale( 2, 2, 2 );
	    expect(m.get(0,0)).toEqual(2);
	    expect(m.get(0,1)).toEqual(0);
	    expect(m.get(0,2)).toEqual(0);
	    expect(m.get(0,3)).toEqual(0);

	    expect(m.get(1,0)).toEqual(0);
	    expect(m.get(1,1)).toEqual(2);
	    expect(m.get(1,2)).toEqual(0);
	    expect(m.get(1,3)).toEqual(0);

	    expect(m.get(2,0)).toEqual(0);
	    expect(m.get(2,1)).toEqual(0);
	    expect(m.get(2,2)).toEqual(2);
	    expect(m.get(2,3)).toEqual(0);

	    expect(m.get(3,0)).toEqual(0);
	    expect(m.get(3,1)).toEqual(0);
	    expect(m.get(3,2)).toEqual(0);
	    expect(m.get(3,3)).toEqual(1);
	});

        it( "check translate", function() {
            m.identity();
            m.translate( 2, 2, 2 );
	    expect(m.get(0,0)).toEqual(1);
	    expect(m.get(0,1)).toEqual(0);
	    expect(m.get(0,2)).toEqual(0);
	    expect(m.get(0,3)).toEqual(2);

	    expect(m.get(1,0)).toEqual(0);
	    expect(m.get(1,1)).toEqual(1);
	    expect(m.get(1,2)).toEqual(0);
	    expect(m.get(1,3)).toEqual(2);

	    expect(m.get(2,0)).toEqual(0);
	    expect(m.get(2,1)).toEqual(0);
	    expect(m.get(2,2)).toEqual(1);
	    expect(m.get(2,3)).toEqual(2);

	    expect(m.get(3,0)).toEqual(0);
	    expect(m.get(3,1)).toEqual(0);
	    expect(m.get(3,2)).toEqual(0);
	    expect(m.get(3,3)).toEqual(1);
        });

	it( "check multiply", function() {
	    var sqrt3 = Math.sqrt(3);
	    var a = matrix4x4();
	    a.set( [[0.5, -sqrt3/2, 0, 0], [sqrt3/2, 0.5, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]] );
	    var b = matrix4x4();
	    b.set( [[0.5, sqrt3/2, 0, 0], [-sqrt3/2, 0.5, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]] );
	    var c = a.multiply(b);

            expect(c.getName()).toEqual('matrix4x4');

	    expect(c.get(0,0)).toBeCloseTo(1);
	    expect(c.get(0,1)).toBeCloseTo(0);
	    expect(c.get(0,2)).toBeCloseTo(0);
	    expect(c.get(0,3)).toBeCloseTo(0);

	    expect(c.get(1,0)).toBeCloseTo(0);
	    expect(c.get(1,1)).toBeCloseTo(1);
	    expect(c.get(1,2)).toBeCloseTo(0);
	    expect(c.get(1,3)).toBeCloseTo(0);

	    expect(c.get(2,0)).toBeCloseTo(0);
	    expect(c.get(2,1)).toBeCloseTo(0);
	    expect(c.get(2,2)).toBeCloseTo(1);
	    expect(c.get(2,3)).toBeCloseTo(0);

	    expect(c.get(3,0)).toBeCloseTo(0);
	    expect(c.get(3,1)).toBeCloseTo(0);
	    expect(c.get(3,2)).toBeCloseTo(0);
	    expect(c.get(3,3)).toBeCloseTo(1);
	});
    }); // matrix4x4


});
