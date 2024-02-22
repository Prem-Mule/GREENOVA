// cursor effect start
var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
let page1 = document.querySelector('#main');


function movebuttonAnimation() {
  page1.addEventListener('mousemove', (loc) => {
    gsap.to(blur, {
      left: loc.x - 250,
      top: loc.y - 250
    })
  })

}
movebuttonAnimation();
// cursor effect end


















function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco()





















let t1 = gsap.timeline()
t1.from(".overlay>.inner>img ", {
  y: 600,
  duration: 2,
  repeat: 0,
  scale: 0.3
})
t1.to(".overlay>.inner>img ", {
  y: 50,
  x: 10,
  duration: 1.7,
  yoyo: true,
  scrub: 2,
  repeat: -1,
  rotate: 2

})



var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function (dets) {
  clutter += `<span>${dets}</span>`

  document.querySelector("#page2>h1").innerHTML = clutter;
})


gsap.to("#page2>h1>span", {
  scrollTrigger: {
    trigger: `#page2>h1>span`,
    start: `top bottom`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: .5,
  },
  stagger: .2,
  color: `#fff`
})
















// var clutter = "";

// document.querySelector("#page4>h1").textContent.split("").forEach(function (dets) {
//   clutter += `<span>${dets}</span>`

//   document.querySelector("#page4>h1").innerHTML = clutter;
// })

// gsap.to("#page4>h1>span", {
//   scrollTrigger: {
//     trigger: `#page4>h1>span`,
//     start: `top bottom`,
//     end: `bottom top`,
//     scroller: `#main`,
//     scrub: .5,
//   },
//   stagger: .2,
//   color: `#fff`
// })







function canvas1() {
  const canvas = document.querySelector("#page5>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
    ./Image1.jpg
    ./Image2.jpg
    ./Image3.jpg
    ./Image4.jpg
    ./Image5.jpg
    ./Image6.jpg
    ./Image7.jpg
    ./Image8.jpg
    ./Image9.jpg
    ./Image10.jpg
    ./Image11.jpg
    ./Image12.jpg
    ./Image13.jpg
    ./Image14.jpg
    ./Image15.jpg
    ./Image16.jpg
    ./Image17.jpg
    ./Image18.jpg
    ./Image19.jpg
    ./Image20.jpg
    ./Image21.jpg
    ./Image22.jpg
    ./Image23.jpg
    ./Image24.jpg
    ./Image25.jpg
    ./Image26.jpg
    ./Image27.jpg
    ./Image28.jpg
    ./Image29.jpg
    ./Image30.jpg
    ./Image31.jpg
    ./Image32.jpg
    ./Image33.jpg
    ./Image34.jpg
    ./Image35.jpg
    ./Image36.jpg
    ./Image37.jpg
    ./Image38.jpg
    ./Image39.jpg
    ./Image40.jpg
    ./Image41.jpg
    ./Image42.jpg
    ./Image43.jpg
    ./Image44.jpg
    ./Image45.jpg
    ./Image46.jpg
    ./Image47.jpg
    ./Image48.jpg
    ./Image49.jpg
    ./Image50.jpg
    ./Image51.jpg
    ./Image52.jpg
    ./Image53.jpg
    ./Image54.jpg
    ./Image55.jpg
    ./Image56.jpg
    ./Image57.jpg
    ./Image58.jpg
    ./Image59.jpg
    ./Image60.jpg
    ./Image61.jpg
    ./Image62.jpg
    ./Image63.jpg
    ./Image64.jpg
    ./Image65.jpg
    ./Image66.jpg
    ./Image67.jpg
    ./Image68.jpg
    ./Image69.jpg
    ./Image70.jpg
    ./Image71.jpg
    ./Image72.jpg
    ./Image73.jpg
    ./Image74.jpg
    ./Image75.jpg
    ./Image76.jpg
    ./Image77.jpg
    ./Image78.jpg
    ./Image79.jpg
    ./Image80.jpg
    ./Image81.jpg
    ./Image82.jpg
    ./Image83.jpg
    ./Image84.jpg
    ./Image85.jpg
    ./Image86.jpg
    ./Image87.jpg
    ./Image88.jpg
    ./Image89.jpg
    ./Image90.jpg
    ./Image91.jpg
    ./Image92.jpg
    ./Image93.jpg
    ./Image94.jpg
    ./Image95.jpg
    ./Image96.jpg
    ./Image97.jpg
    ./Image98.jpg
    ./Image99.jpg
    ./Image100.jpg
    ./Image101.jpg
    ./Image102.jpg
    ./Image103.jpg
    ./Image104.jpg
    ./Image105.jpg
    ./Image106.jpg
    ./Image107.jpg
    ./Image108.jpg
    ./Image109.jpg
    ./Image110.jpg
    ./Image111.jpg
    ./Image112.jpg
    ./Image113.jpg
    ./Image114.jpg
    ./Image115.jpg
    ./Image116.jpg
    ./Image117.jpg
    ./Image118.jpg
    ./Image119.jpg
    ./Image120.jpg
    ./Image121.jpg
    ./Image122.jpg
    ./Image123.jpg
    ./Image124.jpg
    ./Image125.jpg
    ./Image126.jpg
    ./Image127.jpg
    ./Image128.jpg
    ./Image129.jpg
    ./Image130.jpg
    ./Image131.jpg
    ./Image132.jpg
    ./Image133.jpg
    ./Image134.jpg
    ./Image135.jpg
    ./Image136.jpg
    ./Image137.jpg
    ./Image138.jpg
    ./Image139.jpg
    ./Image140.jpg
    ./Image141.jpg
    ./Image142.jpg
    ./Image143.jpg
    ./Image144.jpg
    ./Image145.jpg
    ./Image146.jpg
    ./Image147.jpg
    ./Image148.jpg
    ./Image149.jpg
    ./Image150.jpg
`;
    return data.split("\n")[index];
  }

  const frameCount = 150;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: .5,
      trigger: `#page5`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({

    trigger: "#page5",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas1()




// var clutter = "";

// document.querySelector("#page6>h1").textContent.split("").forEach(function (dets) {
//   clutter += `<span>${dets}</span>`

//   document.querySelector("#page6>h1").innerHTML = clutter;
// })

// gsap.to("#page6>h1>span", {
//   scrollTrigger: {
//     trigger: `#page6>h1>span`,
//     start: `top bottom`,
//     end: `bottom top`,
//     scroller: `#main`,
//     scrub: .5,
//   },
//   stagger: .2,
//   color: `#fff`
// })





const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});







gsap.to(".page5button", {
  opacity: 100,
  repeat: -1,
  scrub: 2,
  scrollTrigger: {
    start: "top 90%",
    end: "bottom bottom",
    trigger: "#page4",
    scroller: "#main",
    // markers: true,

  }
})





const page = document.querySelector('#page2')
const coloredBoxes = document.querySelectorAll('.colored-box');

window.addEventListener('scroll', () => {
  coloredBoxes.forEach(box => {
    if (
      box.getBoundingClientRect().top <= document.body.scrollTop
    ) {
      page.style.backgroundColor = box.dataset.color;
    }
  });
});

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "mulearyan7@gmail.com",
    Password: "pwdu shxp rhht lcnq",
    To: 'mulearyan2@gmail.com',
    From: document.getElementById("email").value,
    Subject: document.getElementById(`subject`).value,
    Body: document.getElementById(`message`).value
  }).then(
    message => alert(message)
  );
}