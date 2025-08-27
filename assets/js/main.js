document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("light").addEventListener("click", () => {
        var bg = document.getElementById("section");
        bg.classList.toggle("active");
    });

    document.getElementById("dark").addEventListener("click", () => {
        var bg = document.getElementById("section");
        bg.classList.toggle("active");
    });

    const tl = gsap.timeline({
        default: {
            ease: "power2.out",
        },
    });

    tl.fromTo(
        ".h1-animate",
        {
            y: "100%",
            opacity: 0,
        },
        {
            duration: 2,
            y: "0%",
            opacity: 1,
            ease: "power1.out",
        }
    );

    tl.to(
        ".animation",
        {
            duration: 2.5,
            opacity: 1,
            display: "block",
            ease: "power1.out",
        },
        "+=1"
    );

    tl.fromTo(
        ".p",
        {
            y: "100%",
            opacity: 0,
        },
        {
            duration: 1.5,
            y: "0%",
            opacity: 1,
        },
        "-=1"
    );

    tl.fromTo(
        ".hero-img",
        {
            y: "100%",
            opacity: 0,
        },
        {
            duration: 1,
            y: "0%",
            opacity: 1,
            ease: "power1.in",
        },
        "-=3"
    );

    tl.fromTo(
        ".logo",
        {
            y: "100%",
            opacity: 0,
        },
        {
            duration: 1,
            y: "0%",
            opacity: 1,
        },
        "-=0.5"
    );

    tl.fromTo(
        ".theme",
        {
            y: "100%",
            visibility: "hidden",
        },
        {
            duration: 2,
            y: "0%",
            visibility: "visible",
        },
        "-=1.5"
    );

    tl.fromTo(
        ".social, .ul, .year",
        {
            y: "100%",
            opacity: 0,
        },
        {
            duration: 2,
            y: "0%",
            opacity: 1,
            delay: 0.25,
            stagger: 0.25,
        },
        "-=1.5"
    );
});
