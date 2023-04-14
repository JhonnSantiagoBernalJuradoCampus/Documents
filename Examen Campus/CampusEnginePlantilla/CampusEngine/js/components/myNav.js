export default{
    img: {
        src: "/images/logoWhite.png"
    },
    links: [
        {
            a: {
                href: "#",
                p: "Inicio"
            }
        },
        {
            a: {
                href: "servicios/index.html",
                p: "Servicios"
            }
        },
        {
            a: {
                href: "soporte/index.html",
                p: "Soporte"
            }
        }
    ],
    showNav(){
        let plantilla = ""
        this.links.forEach((val,id)=>{
            plantilla+= `
            <a class="alink"href="${val.a.href}">${val.a.p}</a>
            `
        })
        
        document.querySelector("#nav").insertAdjacentHTML("beforeend", `
        <section class="container1">
            <img id="logo" src="${this.img.src}" width="150px" alt="">
            ${plantilla}
        </section>
        `)
    }
}