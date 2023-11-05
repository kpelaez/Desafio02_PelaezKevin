
class ProductManager{
    constructor( ){
        this.products = [];
        this.incrementId = 1;
    }



    addProduct( product ){
        /*Compruebo que todas las propiedades sean obligatorias al momento de ingresar el producto */
        if( product.title && product.description &&product.price &&product.thumbnail &&product.code &&product.stock){
            /*Valido si el code del product no exista*/
            if (this.products.some((p) => p.code === product.code)) {
                console.log("El codigo del producto ya existe.");
                return;
            } else{

                //Si el codigo no existe agrego el producto al array
                product.id = this.incrementId++;
                this.products.push(product);
                console.log("Se ingreso ok")
            }
        }else{
            console.log("no ingreso (triste)")
        }
    }

    /*Metodo para devolver todos los productos en un array*/
    getProducts() {
        return this.products;
    }

    /*Metodo para devolver un solo producto segun Id*/
    getProductById(id) {
        const product = this.products.find((p) => p.id === id);
        
        if (product) {
          return product;
        } else {
          console.log("Product Not Found");
        }
    }

}

function Product(title, description, price, thumbnail, code, stock){
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
}

console.log("Testing entregable");

// Instacia de la clase
const prueba = new ProductManager();

// Se llama al metodo getProducts
console.log(prueba.getProducts());



// Se ingresa un producto
const producto1 = new Product("producto prueba", "este es un producto prueba", 200,"Sin imagen", "abc123", 25);

prueba.addProduct(producto1);

//Se visualiza producto  ingresado
console.log(prueba.getProducts());

//Se vuelve a ingresar producto para mensaje error
prueba.addProduct({
    title: "producto prueba",
    description: "este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
});

//Se comprueba que no se ingreso de igual manera
console.log("Segunda prueba de getProducts\n", prueba.getProducts());

//Se busca tanto mensaje error como producto existente
const prod1 = prueba.getProductById(4);

const prod2 = prueba.getProductById(1);

console.log("Primera prueba de getProductById\n",prod2);
