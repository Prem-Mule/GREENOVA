const parallax_el = document.querySelectorAll(".parallax");
const main = document.querySelector("main");

let xValue = 0, yValue = 0;
let rotateDegree = 0;
let mouseXDirection = 1; // 1 for right, -1 for left
let mouseYDirection = 1; // 1 for down, -1 for up

// Add this line to get a reference to the audio element
const parallaxSound = document.getElementById("parallaxSound");

function update(cursorPosition) {
    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation;

        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = ((cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1);

        el.style.transform = `perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
    });
}

update(0);

window.addEventListener("mousemove", (e) => {
    if (timeline.isActive()) return;

    // Calculate mouse direction
    let newMouseXDirection = e.clientX - xValue > 0 ? 1 : -1;
    let newMouseYDirection = e.clientY - yValue > 0 ? 1 : -1;

    if (newMouseXDirection !== mouseXDirection) {
        // Mouse direction changed horizontally
        mouseXDirection = newMouseXDirection;
        // Adjust sound intensity based on mouse direction
        parallaxSound.volume = mouseXDirection === 1 ? 1 : 0.5; // Increase volume from 50% to 100% when moving right, decrease from right to left
    }

    if (newMouseYDirection !== mouseYDirection) {
        // Mouse direction changed vertically
        mouseYDirection = newMouseYDirection;
        // Adjust sound intensity based on mouse direction
        parallaxSound.volume = mouseYDirection === 1 ? 1 : 0.5; // Increase volume from 50% to 100% when moving down, decrease from down to up
    }

    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
    update(e.clientX);

    // Play the sound when the mouse moves
    parallaxSound.play();
});

if (window.innerWidth >= 725) {
    main.style.maxHeight = `${window.innerWidth * 0.6}px`;
} else {
    main.style.maxHeight = `${window.innerWidth * 1.6}px`;
}

// gsap animation
let timeline = gsap.timeline({
    onComplete: () => {
        // Fade in the sound when GSAP animations are complete
        gsap.to(parallaxSound, { volume: 1, duration: 2 });
    },
});

setTimeout(() => {
    parallax_el.forEach((el) => {
        el.style.transition = "0.45s cubic-bezier(0.2, 0.49, 0.32, 0.99)";
    });
}, timeline.endTime() * 1000);

Array.from(parallax_el)
    .filter((el) => !el.classList.contains("text"))
    .forEach((el) => {
        timeline.from(
            el,
            {
                top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
                duration: 3.5,
                ease: "power3.out",
            },
            "1"
        );
    });

timeline.from(".text h1", {
    y: window.innerHeight - document.querySelector(".text h1").getBoundingClientRect().top + 200,
    duration: 2,
},
    "2.5"
).from(".text h2", {
    y: -150,
    opacity: 0,
    duration: 1.5,

},
    "3"
).from(".hide", {
    opacity: 0,
    duration: 1.5,
},
    "3"
);


// NAVBAR javascript code Start
window.addEventListener("scroll", function () {
    const header = document.getElementById("main-header");
    const placeholder = document.getElementById("header-placeholder");
    const scrollY = window.scrollY;

    if (scrollY > placeholder.offsetTop) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
// NAVBAR javascript code End







