import data from "./productos.json"

const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
        //simulamos un retraso de red
        setTimeout(()=>{
            resolve(data);
        }, 500)
    })
}

export default obtenerProductos
//Esta promesa es para traer la informacion del JSON
