class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }
    get circumference() {
        return Math.PI * this.radius * 2;
    }
    get area() {
        return Math.PI * this.radius * this.radius
    }

    set diameter(radius) {
        this.radius = radius / 2;

    }
    set circumference(radius) {
        this.radius = radius / Math.PI / 2;

    }
    set area(radius) {
        this.radius = Math.sqrt((radius / Math.PI));

    }

}









// set radius(radius){
//     this._radius = radius;
//     this.area = 3.14 * Math.pow(radius, 2);
//     this.circumference = 2*(3.14)*radius;
// }
