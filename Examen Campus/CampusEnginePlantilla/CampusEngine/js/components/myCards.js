export default{
    h1: "Servicios",
    a: "Cafeteria virtual",
    href: "../soporte/index.html",
    cards: [
        {
            p: "Hunters",
            src: "../images/hunters.png",
            button: "Ver datos"
        },
        {
            p: "Cafeteria hunters",
            src: "../images/Interior-cafeteria-pasteleria-Ofelia-Bakery_1731437050_168755568_1200x675.jpg",
            button: "Ver datos"
        },
        {
            p: "8vo piso",
            src: "../images/cafeteria 8vo.jpg",
            button: "Ver datos"
        },
        {
            p: "Baños",
            src: "../images/aseo.png",
            button: "Ver datos"
        },
    ],
    showCards(){
        let plantilla = ""
        this.cards.forEach((val,id)=>{
            plantilla+=`
            <div class="tarjetas">
                <p>${val.p}</p>
                <img src="${val.src}" alt="">
                <button>${val.button}</button>
            </div>
            `
        })
        document.querySelector("#main").insertAdjacentHTML("beforeend", `
        <section class="homepage">
            <div class="first-message">
                <h1>${this.h1}</h1>
                <a href="${this.href}">${this.a}</a>
            </div>
            <div id="contenedor-tarjetas">
                ${plantilla}
            </div>
        </section>
        `)
    }
}