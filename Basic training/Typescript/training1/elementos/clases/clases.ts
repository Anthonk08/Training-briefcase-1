// Clases en TypeScript

class Rectangulo {
    //Se pueden declarar las variables de forma privada como: private o #
    // para evitar agregar valores a las variables fuera de la clase se creo readonly
    private readonly ancho: number
    private readonly alto: number
    private _nombre = ""

    constructor(ancho: number, alto: number) {
        console.log("Constructor");
        this.alto = alto;
        this.ancho = ancho;
    }

    // Atributos virtuales
    get nombre()  {
        console.log(`Obtengo el nombre `);
        return this._nombre;
    }

    set nombre(value: string) {
        console.log(`Obtengo el nombre `);
        this._nombre = value;
    }

    // Atributos derivados
    area() {
        console.log(`Getter an Area()`);
        return this.ancho * this.alto;
    }

    perimetro() {
        console.log(`Perimetro()`);
        return this.ancho * 2 + this.alto * 2;
    }
}

let r1 = new Rectangulo(10, 15);
r1.nombre = "Anthony";
console.log(`El rectangulo r1 se llama ${r1.nombre}`);