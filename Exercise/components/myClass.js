export default{
    workClass(){
        class lapiz{
            #marca
            constructor({
                color = "#e1ff00",
                dimension = 19,
                marca = "Mongol",
                borrador =  "false",
                material = "Madera"
            }){
                this.color = color;
                this.dimension = dimension;
                this.#marca = marca;
                this.borrador = borrador;
                this.material = material;
            }
            getMarca(){
                return this.#marca
            }
        }
        let obj = undefined;
        let color = document.querySelector(`[name="color"]`);
        let dimension = document.querySelector(`[name="dimension"]`);
        let range = document.querySelector("#valorRange")
        let marca = document.querySelectorAll(`[name="marca"]`);
        let borrador = document.querySelectorAll(`[name="borrador"]`);
        let material = document.querySelectorAll(`[name="material"]`)
        
        
        
        
        addEventListener("DOMContentLoaded", (e)=>{
            obj = new lapiz({});
            color.value = obj.color;
        
            dimension.value = obj.dimension;
            range.innerHTML = obj.dimension;
            dimension.oninput = function(){
                range.innerHTML = this.value
            }
            
            marca.forEach((val,id)=>{
                if(obj.getMarca() == val.value){
                    marca[id].checked = true
                }
            })
        
            borrador.forEach((val,id)=>{
                if(val.value == obj.borrador){
                    borrador[id].checked = true
                }
            })
        
            material.forEach((val,id)=>{
                if(val.value == obj.material){
                    val.checked = true
                }
            })
        })
    },
    showTable(){
        let distinto = 0
        addEventListener("submit", (e)=>{
            e.preventDefault()
            let data = Object.fromEntries(new FormData(e.target));
            console.log(data);
            document.querySelector(".tbody").insertAdjacentHTML("beforeend",`
                <tr>
                    <td id="color${distinto}"></td>
                    <td>${data.dimension}</td>
                    <td>${data.marca}</td>
                    <td>${data.borrador}</td>
                    <td>${data.material}</td>
                </tr>
            `);
            let colorDiv = document.querySelector(`#color${distinto}`);
            
            let myStyle = {backgroundColor: data.color,
                            width: "80px",
                            height: "10px"}

            Object.assign(colorDiv.style, myStyle)

            distinto+=1;
        })
    }
}