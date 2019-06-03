// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(attribute) {
        this.length = attribute.length;
        this.width = attribute.width;
        this.height = attribute.height;
    }
    volume () {
        return length * width * height;
    }
    surfaeArea () {
        return 2 * (length * width * length * height + width * height);
    }
}
class NewCubo extends CuboidMaker {
    constructor(attribute) {
        super(attribute);
    }
    
}


// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.