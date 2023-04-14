export default{
    h1: "Cafeteria virtual",

    showCards(){
        document.querySelector(".main").insertAdjacentHTML("beforeend", `
        <section>
            <div class="FAQ">
                <h1>${this.h1}</h1>
                
            </div>
            <div class="FAQ">
                <p>Seccion compra</p>
            </div>
        </section>
        <section>
            <div class="FAQ accordion">
                <h2>Catalogo</h2>
            </div>
        </section>
        <div class="products">
            <div class="card">
                <img src="../images/papasmargarita.jpg" alt="">
                <h3>Papas</h3>
                <p>2000$</p>
                <button>AÑADIR AL CARRITO</button>
            </div>
        </div>
        `)
    }
}