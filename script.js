document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button").addEventListener("click", () => {
        document.querySelector(".backgroundLayer").classList.toggle("open");
        document.querySelector(".prediction").classList.toggle("open");
        document.querySelector(".modal-window").classList.toggle("open");

    });

    document.getElementById("button").addEventListener("click", event => {
        event.cliked = true;
    });

    document.getElementById("backgroundLayer").addEventListener("click", () => console.log("body"));

    // document.getElementById("backgroundLayer").addEventListener("click", event => {
    //     if (event.cliked) return;

    //     document.querySelector(".backgroundLayer").classList.remove("open");
    //     document.querySelector(".prediction").classList.remove("open");
    // });
});
