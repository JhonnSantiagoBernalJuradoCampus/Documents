/* addEventListener("submit", (e)=>{
    e.preventDefault()
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
}) */
class lapiz{
    #marca
    constructor({
        color = "#e1ff00",
        dimension = 19,
        marca = "Mongo",
        borrador = true,
        material = "Madera"
    }){
        this.color = color;
        this.dimension = dimension;
        this.#marca = marca;
        this.borrador = borrador;
        this.material = material;
    }
    setMarca({marca}){
        this.#marca = marca;
        return this.getMarca()
    }
    getMarca({marca}){
        return this.#marca;
    }
}
let obj = undefined;
let color = document.querySelector(`[name="color"]`);
let dimension = document.querySelector(`[name="dimension"]`);
let marca = document.querySelector(`[name="marca"]`)

addEventListener("DOMContentLoaded", (e)=>{
    obj = new lapiz({});
    color.value = obj.color;
    dimension.value = obj.dimension;
})