class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }
    area(){
        let area = this.width * this.height
        console.log(`El area es igual a ${area}m^2`)
    }

    perimetro(){
        let perimetro = 2 * this.width + 2 * this.height
        console.log(`El perimetro es igual a ${perimetro}m`)
    }
}

const rectangulo1 = new Rectangle(30, 40)

rectangulo1.area()
rectangulo1.perimetro()