export default{
    img: {
        src: "/images/logoWhite.png"
    },
    links: [
        {
            a: {
                href: "../index.html",
                p: "Inicio"
            }
        },
        {
            a: {
                href: "../servicios/index.html",
                p: "Servicios"
            }
        },
        {
            a: {
                href: "#",
                p: "Soporte"
            }
        },
        {
            a: {
                href: "#",
                p: ``
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
        
        document.querySelector("#navC").insertAdjacentHTML("beforeend", `
        <section class="container1">
            <img id="logo" src="${this.img.src}" width="150px" alt="">
            ${plantilla}
        </section>
        `)
    }
}