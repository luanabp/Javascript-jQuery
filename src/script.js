//     const handleClick = () => {
//     const body = document.querySelector("body");
//     body.innerHTML = `
//     <h1>Helloooow JavaScript!</h1>
//     <h2>Helloooozinho JavaScript!</h2>
//     `;
    
//     body.style.backgroundColor = "#000";
//     body.style.color = "#fff";
//     }

//     document.addEventListener('DOMContentLoaded', ()=>{
//     const el = document.getElementById("btn-start");
//     el.addEventListener("mouseover", () => {
//         el.style.position = 'absolute';
//         el.style.top = `${Math.floor(Math.random() *(window.innerHeight - 15))}px`;
//         el.style.left = `${Math.floor(Math.random() *(window.innerWidht - 28))}px`;   
//         console.log(el.style.top, el.style.left)
//     });
        
//     el.addEventListener("click", () => handleClick());
// })

const handleClick = () => {
    const body = $("body");
    body.html( `
        <h1>Helloooow JavaScript!</h1>
        <h2>Helloooozinho JavaScript!</h2>
    `);    
    body.css("background-color", "#000");
    body.css("color", "#fff");
    };

const startButtonInit = () => {
    const el = $("#btn-start");
    el.on("mouseover", () => {
        el.css("position", "absolute");
        el.css("top", `${Math.floor(Math.random() *(window.innerHeight - 15))}px`);
        el.css("left", `${Math.floor(Math.random() *(window.innerWidht - 28))}px`);
    });     
    el.on("click", () => handleClick());
}

const infoButtonInit = () => {
    const el = $("#btn-info");
    const elInitialText = el.html();
    el.on("click", () => {
        if (el.html() == elInitialText) {
            el.html("Ocultar Informações");
        } else {
          el.html(elInitialText);
        }
        $(".info").fadeToggle();
    });
};


    $(document).ready(()=>{
    startButtonInit();
    infoButtonInit();
});