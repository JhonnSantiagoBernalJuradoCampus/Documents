class lapiz{
    #marca
    constructor({color="Amarillo",
                dimencion=19,
                borrador=true,
                material="Madera",
                marca="mongol"}){
        this.color = color;
        this.dimencion = dimencion;
        this.borrador = borrador;
        this.material = material;
        this.#marca = marca;
    }
    setMarca({marca}){
        this.#marca = marca
        return this.getMarca();
    }
    getMarca(){
        return this.#marca;
    }
}
let obj = new lapiz({});
obj.setMarca({marca:"Norma"})
0
console.log(obj.getMarca());