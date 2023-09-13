import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
    let products = [
        { id: 1, name: "Runtz OG Auto x3", sabor: "Frutos rojos, pino, cítrico", THCLevel: "23%", price: 9000, category: "Auto", stock: 10, img: "/img/1.jpg"},
        { id: 2, name: "Black Citrus Auto x3", sabor: "Limón, incienso", THCLevel: "20%", price: 12500, category: "Auto", stock: 10, img: "/img/5.jpg"},
        { id: 3, name: "Mr. Northern OG Auto x3", sabor: "Pino, Arándanos", THCLevel: "20%", price: 9000, category: "Auto", stock: 10, img: "/img/6.jpg"},
        { id: 4, name: "Original Ganster 2.0 Auto x3", sabor: "Pino, cítrico, picante", THCLevel: "23%", price: 12500, category: "Auto", stock: 10, img: "/img/2.jpg"},
        { id: 5, name: "Power Plant Fem x3", sabor: "Mandarina, lima", THCLevel: "22%", price: 15000, category: "Fem", stock: 10, img: "/img/3.jpg"},
        { id: 6, name: "C99 x Blueberry Fem  x3", sabor: "Limón, terroso", THCLevel: "21%", price: 15000, category: "Fem", stock: 10, img: "/img/8.jpg"},
        { id: 7, name: "Kerosene Bomb Fem x3", sabor: "Cítrico, frutal", THCLevel: "19%", price: 15000, category: "Fem", stock: 10, img: "/img/10.jpg"},
        { id: 8, name: "Romulan Fem x3", sabor: "Picante, dulce", THCLevel: "10%", price: 12000, category: "Fem", stock: 10, img: "/img/5.jpg"},
        { id: 9, name: "Romulan Fem x3", sabor: "Almizcle, leñoso", THCLevel: "19%", price: 13000, category: "Fem", stock: 10, img: "/img/9.jpg"},
        { id: 10, name: "Afghan Fem x3", sabor: "Dulce intenso", THCLevel: "18%", price: 12000, category: "Fem", stock: 10, img: "/img/4.jpg"},
       
    ]

    /*promise para evaluar que haya productos y resolverlo con un setimeout para esperar*/ 
    const showProducts = new Promise((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        }else {
            reject("Disculpa! No hay productos para mostrar por el momento")
        }
    })

    showProducts
        .then((resultado) => {
            console.log(resultado)
        })
        .catch((error) => {
            console.log(error)
        })

    return (
        <>
            <ItemDetail products={products}/>
        </>
    )
}

export default ItemDetailContainer