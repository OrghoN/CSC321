var vector2D = function vector2D(x, y) {

    // private instance variables
    var name = 'vector2D';

    var elements = {};
    elements.x = x;
    elements.y = y;

    // public methods
    var that = {};

    that.getName = function() {
        return name;
    };

    that.get = function(index) {
        switch (index) {
            case 0:
                return elements.x;
            case 1:
                return elements.y;
        } // switch
    };

    that.getX = function() {
        return elements.x;
    };

    that.getY = function() {
        return elements.y;
    };

    that.add = function(v) {
        var x0 = this.getX();
        var x1 = v.getX();
        var y0 = this.getY();
        var y1 = v.getY();
        return vector2D(x0 + x1, y0 + y1);
    };

    that.subtract = function(v) {
        var x0 = this.getX();
        var x1 = v.getX();
        var y0 = this.getY();
        var y1 = v.getY();
        return vector2D(x0 - x1, y0 - y1);
    };

    that.scale = function(factor) {
        var x = this.getX();
        var y = this.getY();
        return vector2D(factor * x, factor * y);
    };

    that.dot = function(v) {
        var x0 = this.getX();
        var x1 = v.getX();
        var y0 = this.getY();
        var y1 = v.getY();
        return x0 * x1 + y0 * y1;
    };

    that.magnitude = function() {
        return Math.sqrt(this.dot(this));
    };

    that.normalize = function() {
        return this.scale(1.0 / this.magnitude());
    };

    that.toString = function() {
        var x = elements.x.toFixed(2);
        var y = elements.y.toFixed(2);
        return "(" + x + "," + y + ")";
    };

    return that;
}; // vector2D

var vector3D = function vector3D(x, y, z) {

    // private instance variables
    var name = 'vector3D';

    var elements = {};
    elements.x = x;
    elements.y = y;
    elements.z = z;

    // public methods
    var that = {};

    that.getName = function() {
        return name;
    };

    that.get = function(index) {
        switch (index) {
            case 0:
                return elements.x;
            case 1:
                return elements.y;
            case 2:
                return elements.z;
        } // switch
    };

    that.getX = function() {
        return elements.x;
    };

    that.getY = function() {
        return elements.y;
    };

    that.getZ = function() {
        return elements.z;
    };

    that.add = function(v) {
        return vector3D(this.getX() + v.getX(), this.getY() + v.getY(), this.getZ() + v.getZ());
    };

    that.subtract = function(v) {
        return vector3D(this.getX() - v.getX(), this.getY() - v.getY(), this.getZ() - v.getZ());
    };

    that.scale = function(factor) {
        return vector3D(factor * this.getX(), factor * this.getY(), factor * this.getZ());
    };

    that.dot = function(v) {
        return this.getX() * v.getX() + this.getY() * v.getY() + this.getZ() * v.getZ();
    };

    that.magnitude = function() {
        return Math.sqrt(this.dot(this));
    };

    that.normalize = function() {
        return this.scale(1.0 / this.magnitude());
    };

    that.cross = function(v) {
        return vector3D(this.getY() * v.getZ() - this.getZ() * v.getY(), this.getZ() * v.getX() - this.getX() * v.getZ(), this.getX() * v.getY() - this.getY() * v.getX());
    };

    that.toString = function() {
        var x = elements.x.toFixed(2);
        var y = elements.y.toFixed(2);
        var z = elements.y.toFixed(2);
        return "(" + x + "," + y + "," + z + ")";
    };

    return that;
}; // vector3D


var vector4D = function vector4D(x, y, z) {
    // private instance variables
    var name = 'vector4D';

    var elements = {};
    elements.x = x;
    elements.y = y;
    elements.z = z;
    elements.w = 1.0;

    // public methods
    var that = {};

    that.getName = function() {
        return name;
    };

    that.get = function(index) {
        switch (index) {
            case 0:
                return elements.x;
            case 1:
                return elements.y;
            case 2:
                return elements.z;
            case 3:
                return elements.w;
        } // switch
    };

    that.getX = function() {
        return elements.x;
    };

    that.getY = function() {
        return elements.y;
    };

    that.getZ = function() {
        return elements.z;
    };

    that.getW = function() {
        return elements.w;
    };

    that.add = function(v) {
        var a = vector3D(this.getX(), this.getY(), this.getZ());
        var b = vector3D(v.getX(), v.getY(), v.getZ());
        var sum = a.add(b);
        return vector4D(sum.getX(), sum.getY(), sum.getZ());
    };

    that.subtract = function(v) {
        var a = vector3D(this.getX(), this.getY(), this.getZ());
        var b = vector3D(v.getX(), v.getY(), v.getZ());
        var sum = a.subtract(b);
        return vector4D(sum.getX(), sum.getY(), sum.getZ());
    };

    that.scale = function(factor) {
        var x = this.getX();
        var y = this.getY();
        var z = this.getZ();
        return vector4D(factor * x, factor * y, factor * z);
    };

    that.dot = function(v) {
        var a = vector3D(this.getX(), this.getY(), this.getZ());
        var b = vector3D(v.getX(), v.getY(), v.getZ());
        return a.dot(b);
    };

    that.magnitude = function() {
        return Math.sqrt(this.dot(this));
    };

    that.normalize = function() {
        return this.scale(1.0 / this.magnitude());
    };

    that.cross = function(v) {
        var a = vector3D(this.getX(), this.getY(), this.getZ());
        var b = vector3D(v.getX(), v.getY(), v.getZ());
        var crossProduct = a.cross(b);
        return vector4D(crossProduct.getX(), crossProduct.getY(), crossProduct.getZ());
    };

    that.toString = function() {
        var x = elements.x.toFixed(2);
        var y = elements.y.toFixed(2);
        var z = elements.y.toFixed(2);
        var w = elements.w.toFixed(2);
        return "(" + x + "," + y + "," + z + "," + w + ")";
    };

    return that;
}; // vector4D

var matrix2x2 = function matrix2x2() {
    // private instance variables
    var name = 'matrix2x2';
    var m = [
        [1, 0],
        [0, 1]
    ];

    // public methods
    var that = {};

    that.getName = function() {
        return name;
    };

    that.get = function(row, col) {
        return m[row][col];
    };

    that.set = function(listOfLists) {
        m[0][0] = listOfLists[0][0];
        m[0][1] = listOfLists[0][1];
        m[1][0] = listOfLists[1][0];
        m[1][1] = listOfLists[1][1];
    };

    that.identity = function() {
        m[0][0] = 1;
        m[0][1] = 0;
        m[1][0] = 0;
        m[1][1] = 1;
    };

    that.rotation = function(angle) {
        m[0][0] = Math.cos(angle);
        m[0][1] = -Math.sin(angle);
        m[1][0] = Math.sin(angle);
        m[1][1] = Math.cos(angle);
    };

    that.scale = function(xFactor, yFactor) {
        m[0][0] = xFactor;
        m[0][1] = 0;
        m[1][0] = 0;
        m[1][1] = yFactor;
    };

    that.determinant = function() {
        return this.get(0, 0) * this.get(1, 1) - this.get(0, 1) * this.get(1, 0);
    };

    that.inverse = function() {
        var a = this.get(0, 0);
        var b = this.get(0, 1);
        var c = this.get(1, 0);
        var d = this.get(1, 1);
        var determ = this.determinant();
        this.set([
            [d / determ, -b / determ],
            [-c / determ, a / determ]
        ]);
    };

    that.multiply = function(operand) {
        if (operand.getName() === 'vector2D') {
            var result = [];
            for (i = 0; i < 2; i++) {
                var sum = 0;
                for (j = 0; j < 2; j++) {
                    sum += m[i][j] * operand.get(j);
                } // for
                result[i] = sum;
            } // for
            return vector2D(result[0], result[1]);
        } // if
        else if (operand.getName() === 'matrix2x2') {
            var product = matrix2x2();
            var listOfLists = [
                [],
                []
            ];
            for (i = 0; i < 2; i++) {
                for (j = 0; j < 2; j++) {
                    var sum = 0;
                    for (k = 0; k < 2; k++) {
                        sum += m[i][k] * operand.get(k, j);
                    } // for
                    listOfLists[i][j] = sum;
                } // for
            } // for
            product.set(listOfLists);
            return product;
        } // else if
    };

    that.toString = function() {
        var a00 = m[0][0].toFixed(2);
        var a01 = m[0][1].toFixed(2);
        var a10 = m[1][0].toFixed(2);
        var a11 = m[1][1].toFixed(2);
        return "[[" + a00 + "," + a01 + "],[" + a10 + "," + a11 + "]]";
    };

    return that;
}; // matrix2x2

var matrix3x3 = function matrix3x3() {
    // private instance variables
    var name = 'matrix3x3';
    var m = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ];

    // public methods
    var that = {};

    that.getName = function() {
        return name;
    };

    that.get = function(row, col) {
        return m[row][col];
    };

    that.set = function(listOfLists) {
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                m[i][j] = listOfLists[i][j];
            } // for
        } // for
    };

    that.identity = function() {
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                m[i][j] = 0;
            } // for
        } // for

        for (i = 0; i < 3; i++) {
            m[i][i] = 1;
        } // for
    };

    that.rotationX = function(angle) {
        this.identity();
        m[1][1] = Math.cos(angle);
        m[1][2] = -Math.sin(angle);
        m[2][1] = Math.sin(angle);
        m[2][2] = Math.cos(angle);
    };

    that.rotationY = function(angle) {
        this.identity();
        m[0][0] = Math.cos(angle);
        m[0][2] = Math.sin(angle);
        m[2][0] = -Math.sin(angle);
        m[2][2] = Math.cos(angle);
    };

    that.rotationZ = function(angle) {
        this.identity();
        m[0][0] = Math.cos(angle);
        m[0][1] = -Math.sin(angle);
        m[1][0] = Math.sin(angle);
        m[1][1] = Math.cos(angle);
    };

    that.scale2D = function(xFactor, yFactor) {
        this.identity();
        m[0][0] = xFactor;
        m[1][1] = yFactor;
    };

    that.scale3D = function(xFactor, yFactor, zFactor) {
        this.identity();
        m[0][0] = xFactor;
        m[1][1] = yFactor;
        m[2][2] = zFactor;
    };

    that.translate = function(xOffset, yOffset) {
        this.identity();
        m[0][2] = xOffset;
        m[1][2] = yOffset;
    };

    that.multiply = function(operand) {
        if (operand.getName() === 'vector3D') {
            var result = [];
            for (i = 0; i < 3; i++) {
                var sum = 0;
                for (j = 0; j < 3; j++) {
                    sum += m[i][j] * operand.get(j);
                } // for
                result[i] = sum;
            } // for
            return vector3D(result[0], result[1], result[2]);
        } // if
        else if (operand.getName() === 'matrix3x3') {
            var product = matrix3x3();
            var listOfLists = [
                [],
                [],
                []
            ];
            for (i = 0; i < 3; i++) {
                for (j = 0; j < 3; j++) {
                    var sum = 0;
                    for (k = 0; k < 3; k++) {
                        sum += m[i][k] * operand.get(k, j);
                    } // for
                    listOfLists[i][j] = sum;
                } // for
            } // for
            product.set(listOfLists);
            return product;
        } // else if
    };

    that.toString = function() {
        var a00 = m[0][0].toFixed(2);
        var a01 = m[0][1].toFixed(2);
        var a02 = m[0][2].toFixed(2);

        var a10 = m[1][0].toFixed(2);
        var a11 = m[1][1].toFixed(2);
        var a12 = m[1][2].toFixed(2);

        var a20 = m[2][0].toFixed(2);
        var a21 = m[2][1].toFixed(2);
        var a22 = m[2][2].toFixed(2);

        var row0 = "[" + a00 + "," + a01 + "," + a02 + "]";
        var row1 = "[" + a10 + "," + a11 + "," + a12 + "]";
        var row2 = "[" + a20 + "," + a21 + "," + a22 + "]";

        return "[" + row0 + "," + row1 + "," + row2 + "]";
    };

    return that;
}; // matrix3x3

var matrix4x4 = function matrix4x4() {
    // private instance variables
    var name = 'matrix4x4';
    var m = [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ];

    // public methods
    var that = {};

    that.getName = function() {
        return name;
    };

    that.get = function(row, col) {
        return m[row][col];
    };

    that.set = function(listOfLists) {
        for (i = 0; i < 4; i++) {
            for (j = 0; j < 4; j++) {
                m[i][j] = listOfLists[i][j];
            } // for
        } // for
    };

    that.identity = function() {
        for (i = 0; i < 4; i++) {
            for (j = 0; j < 4; j++) {
                m[i][j] = 0;
            } // for
        } // for

        for (i = 0; i < 4; i++) {
            m[i][i] = 1;
        } // for
    };

    that.rotationX = function(angle) {
        this.identity();
        m[1][1] = Math.cos(angle);
        m[1][2] = -Math.sin(angle);
        m[2][1] = Math.sin(angle);
        m[2][2] = Math.cos(angle);
    };

    that.rotationY = function(angle) {
        this.identity();
        m[0][0] = Math.cos(angle);
        m[0][2] = Math.sin(angle);
        m[2][0] = -Math.sin(angle);
        m[2][2] = Math.cos(angle);
    };

    that.rotationZ = function(angle) {
        this.identity();
        m[0][0] = Math.cos(angle);
        m[0][1] = -Math.sin(angle);
        m[1][0] = Math.sin(angle);
        m[1][1] = Math.cos(angle);
    };

    that.scale = function(xFactor, yFactor, zFactor) {
        this.identity();
        m[0][0] = xFactor;
        m[1][1] = yFactor;
        m[2][2] = zFactor;
    };

    that.translate = function(xOffset, yOffset, zOffset) {
        this.identity();
        m[0][3] = xOffset;
        m[1][3] = yOffset;
        m[2][3] = zOffset;
    };

    that.multiply = function(operand) {
        if (operand.getName() === 'vector4D') {
            var result = [];
            for (i = 0; i < 4; i++) {
                var sum = 0;
                for (j = 0; j < 4; j++) {
                    sum += m[i][j] * operand.get(j);
                } // for
                result[i] = sum;
            } // for
            return vector4D(result[0], result[1], result[2], result[3]);
        } // if
        else if (operand.getName() === 'matrix4x4') {
            var product = matrix4x4();
            var listOfLists = [
                [],
                [],
                [],
                []
            ];
            for (i = 0; i < 4; i++) {
                for (j = 0; j < 4; j++) {
                    var sum = 0;
                    for (k = 0; k < 4; k++) {
                        sum += m[i][k] * operand.get(k, j);
                    } // for
                    listOfLists[i][j] = sum;
                } // for
            } // for
            product.set(listOfLists);
            return product;
        } // else if
    };

    that.toString = function() {
        var a00 = m[0][0].toFixed(2);
        var a01 = m[0][1].toFixed(2);
        var a02 = m[0][2].toFixed(2);
        var a03 = m[0][3].toFixed(2);

        var a10 = m[1][0].toFixed(2);
        var a11 = m[1][1].toFixed(2);
        var a12 = m[1][2].toFixed(2);
        var a13 = m[1][3].toFixed(2);

        var a20 = m[2][0].toFixed(2);
        var a21 = m[2][1].toFixed(2);
        var a22 = m[2][2].toFixed(2);
        var a23 = m[2][3].toFixed(2);

        var a30 = m[2][0].toFixed(2);
        var a31 = m[2][1].toFixed(2);
        var a32 = m[2][2].toFixed(2);
        var a33 = m[3][3].toFixed(2);

        var row0 = "[" + a00 + "," + a01 + "," + a02 + "," + a03 + "]";
        var row1 = "[" + a10 + "," + a11 + "," + a12 + "," + a13 + "]";
        var row2 = "[" + a20 + "," + a21 + "," + a22 + "," + a23 + "]";
        var row3 = "[" + a30 + "," + a31 + "," + a32 + "," + a33 + "]";

        return "[" + row0 + "," + row1 + "," + row2 + "," + row3 + "]";
    };

    return that;
}; // matrix4x4
