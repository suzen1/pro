gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline()

var page1Content = document.querySelector("#page1-content");
var cursur = document.querySelector("#corsor,a");

cursur.style.opacity = "0";
function loder() {
   tl.from("#loder h1", {
      x: 300,
      opacity: 1,
      duration: 1,
      stagger: 0.1
   })
   tl.to("#loder h1", {
      stagger: 0.1,
      opacity: 0,
   })

   tl.from(".main", {
      opacity: 0,
   })

   tl.to("#loder", {
      y: -1000,
      opacity: 0,
      duration: 0.5,
});
   
  tl.from("#page1 #main-bg-name span", {
   y:50,
   stagger:0.3,
   opacity:0,
   duration:0.5,
 })
};
loder();
function cursurAnimation() {
   page1Content.addEventListener("mousemove", function (dads) {



      gsap.to(cursur, {
         x: dads.x - 50,
         y: dads.y - 40,

      })
   })

   page1Content.addEventListener("mouseenter", function () {
      gsap.to(cursur, {
         scale: 1,
         opacity: 1,
      })
   })
   page1Content.addEventListener("mouseleave", function () {
      gsap.to(cursur, {
         scale: 0,
         opacity: 0,
      })
   });
};
cursurAnimation();
function loco() {
   gsap.registerPlugin(ScrollTrigger);

   // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

   const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
   });
   // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
   locoScroll.on("scroll", ScrollTrigger.update);

   // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
   ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
   });



   // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
   ScrollTrigger.refresh();
}
loco();
function page2Animation() {
   gsap.from("#page2 .first-text  h3", {
      y: 200,
      scrollTrigger: {
         scroller: ".main",
         trigger: "#page2 ",
         start: "top 30%",
         end: "top 20%",
         stagger: 0.1,
         opacity: 1,
         // markers: true,
         scrub: 2
      }
   })
   gsap.from("#page2 .second-text  h3", {
      y: 200,
      scrollTrigger: {
         scroller: ".main",
         trigger: "#page2 ",
         start: "top 30%",
         end: "top 20%",
         stagger: 0.1,
         opacity: 1,
         // markers: true,
         scrub: 2
      }
   })

   gsap.from(".page2-top-border", {
      x: -1150,
      scrollTrigger: {
         scroller: ".main",
         trigger: "#page2 #page2-top ",
         start: "top 30%",
         end: "top 20%",
         stagger: 0.1,
         opacity: 1,
         // markers: true,
         scrub: 2

      }
   })

   gsap.from("#page2 #page2-bottom #btm-text h2 #up span", {
      y: 200,
      invalidateOnRefresh: true,
      opacity: 0,
      scrollTrigger: {
         scroller: ".main",
         trigger: "#page2 #page2-bottom  ",
         start: "top 40%",
         end: "top 20%",
         stagger: 0.1,

         opacity: 1,
         // markers: true,
         scrub: 2


      }
   });



}
page2Animation();


function page2Animationphone() {
   const isMobile = window.innerWidth <= 768; // Check if it's a mobile screen

     gsap.from("#page2 .first-text h3", {
      y: isMobile ? 50 : 200, // Adjust vertical movement for mobile
      opacity: 0,
      duration: isMobile ? 1 : 1.5, // Shorter duration on mobile
      scrollTrigger: {
         scroller: ".main",
         trigger: "#page2",
         start: "top 80%", // Trigger earlier for mobile
         end: "top 50%",
         scrub: 1,
         // markers:true,
      },
   });

gsap.from("#page2 .second-text h3", {
   y: isMobile ? 50 : 200,
   opacity: 0,
   duration: isMobile ? 1 : 2,
   scrollTrigger: {
      scroller: ".main",
      trigger: "#page2",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
   },
});

gsap.from(".page2-top-border", {
   x: isMobile ? 0 : -1150, // No horizontal movement on mobile
   opacity: 0,
   duration: isMobile ? 1 : 2,
   scrollTrigger: {
      scroller: ".main",
      trigger: "#page2 #page2-top",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
   },
});


   gsap.from("#page2 p span", {
      y: isMobile ? 50 : 200, // Smaller movement for mobile
      opacity: 0,
      scrollTrigger: {
         scroller: ".main",
         trigger: "#page2 #page2-bottom",
         start: "top 40%",
         end: "top 20%",
         scrub: 2,
      },
   });
}
page2Animationphone();
function page3Animationphone() {
   const isMobile = window.innerWidth <= 768; // Check if the device is mobile

   // Animation for Box 1
   gsap.from("#page3 #box1", {
      x: isMobile ? 60 : -100, // Horizontal animation for desktop
      y: isMobile ? 0 : 0,   // Vertical animation for mobile
      opacity: 0,
      duration: isMobile ? 0.8 : 1.5, // Shorter duration on mobile
     
      scrollTrigger: {
         scroller: ".main",
         trigger: "#page3 #box1",
         start: isMobile ? "top 95%" : "top 80%", // Trigger earlier on mobile
         end: "top 50%",
         scrub: 1,
         opacity:1,
         // markers:true,
      },
   });

   // Animation for Box 2
   gsap.from("#page3 #box2", {
      x: isMobile ? 0 : 0,    // No horizontal animation for both views
      y: isMobile ? 50 : 100,   // Vertical movement for mobile
      opacity: 0,
      duration: isMobile ? 0.8 : 1.5,
      
      scrollTrigger: {
         scroller: ".main",
         trigger: "#page3 #box2",
         start: isMobile ? "top 90%" : "top 80%",
         end: "top 50%",
         opacity:1,
         scrub: 1,
      },
   });

   // Animation for Box 3
   gsap.from("#page3 #box3", {
      x: isMobile ? 0 : 100,  // Horizontal animation for desktop
      y: isMobile ? 50 : 0,   // Vertical animation for mobile
      opacity: 0,
      duration: isMobile ? 0.8 : 1.5,
    
      scrollTrigger: {
         scroller: ".main",
         trigger: "#page3 #box3",
         start: isMobile ? "top 90%" : "top 80%",
         end: "top 50%",
         opacity:1,
         scrub: 1,
      },
   });
}
page3Animationphone();
function page4Animation() {
   const isMobile = window.innerWidth <= 768; // Check if the device is mobile

   // Animation for First Text
   gsap.from("#page4 .first-text h3", {
      y: isMobile ? 50 : 200, // Smaller vertical movement on mobile
      opacity: 0,
      duration: isMobile ? 1 : 2,
      ease: "power1.out",
      scrollTrigger: {
         scroller: ".main",
         trigger: "#page4",
         start: isMobile ? "top 85%" : "top 70%", // Trigger earlier on mobile
         end: "top 50%",
         scrub: 1,
      },
   });

   // Animation for Second Text
   gsap.from("#page4 .second-text h3", {
      y: isMobile ? 50 : 200,
      opacity: 0,
      duration: isMobile ? 1 : 2,
      ease: "power1.out",
      scrollTrigger: {
         scroller: ".main",
         trigger: "#page4",
         start: isMobile ? "top 85%" : "top 70%",
         end: "top 50%",
         scrub: 1,
      },
   });

   // Animation for Top Border
   gsap.from("#page4-top-border", {
      x: isMobile ? 0 : -1150, // Disable horizontal movement on mobile
      opacity: 0,
      duration: isMobile ? 1 : 2,
      ease: "power1.out",
      scrollTrigger: {
         scroller: ".main",
         trigger: "#page4 #page4-top",
         start: isMobile ? "top 85%" : "top 70%",
         end: "top 50%",
         opacity:1,
         scrub: 1,
      },
   });

   // Animation for Bottom Text
   gsap.from("#page4 p span", {
      y: isMobile ? 300 : 200, // Smaller movement for mobile
      opacity: 0,
      duration: isMobile ? 1.5 : 2.5,
      ease: "power1.out",
      scrollTrigger: {
         scroller: ".main",
         trigger: "#page4 ",
         start: isMobile ? "top 85%" : "top 60%", // Adjust start point for visibility
         end: "top 40%",
         scrub: 1,
         // markers:true,
         opacity:1,
      },
   });
}

page4Animation();


function swiper() {
   var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
         rotate: 70,
         stretch: 1,
         depth: 50,
         modifier: 1,
         slideShadows: false,
      },
      autoplay: {
         delay: 1500,
         disableOnInteraction: true,
      },
   });
}
swiper();

// function footerName() {
//    gsap.from("footer #buttom-name span ", {
//       y: -100,
//       opacity: 0,
//       stagger: 0.5,
//       duration: 2,
//       delay: 0.9,
//       scrollTrigger: {
//          scroller: ".main",
//          trigger: "footer #footer-top",
//          start: "top 60%",
//          end: "top 40%",
//          opacity: 1,
//          // markers: true,
//          scrub: 3
//       }
//    })
// }
// footerName();


function footerNameAnimation() {
   const isMobile = window.innerWidth <= 768; // Check if the device is mobile

   // Animation for Footer Name (Buttom Name)
   gsap.from("footer #buttom-name span", {
      y: isMobile ? 30 : 100, // Smaller vertical movement on mobile
      opacity: 0,
      duration: isMobile ? 1.2 : 2.5, // Faster animation on mobile
      ease: "power3.out", // Smooth easing
      stagger: 0.3, // Staggered animation for each span
      scrollTrigger: {
         scroller: ".main",
         trigger: "footer #footer-top", // Trigger when footer top is visible
         start: isMobile ? "top 90%" : "top 60%", // Adjust trigger points for mobile
         end: "top 30%",
         scrub: 1, // Link animation to scrolling
      },
   });
}

// footerNameAnimation();

function footerName() {
   const isMobile = window.innerWidth <= 768; // Check if it's a mobile device

   // Animation for the footer name (the large name at the bottom)
   gsap.from("footer #buttom-name span", {
      y: isMobile ? 30 : 100, // Smaller vertical movement for mobile
      opacity: 0,
      duration: isMobile ? 1 : 2, // Faster animation for mobile
      ease: "power1.out",
      stagger: 0.3, // Stagger each span to create a cascading effect
      scrollTrigger: {
         scroller: ".main",
         trigger: "footer #footer-top",
         start: isMobile ? "top 90%" : "top 60%", // Trigger animation earlier on mobile
         end: isMobile ? "top 80%" : "top 40%",
         scrub: 1,
         // markers:true,
      },
   });
}
footerName();


var nav = document.querySelector("nav")
var menu = document.querySelector("nav i")
var full = document.querySelector("#full-scr")
var flag = 0
menu.addEventListener("click", function(){
if(flag == 0){
   full.style.top = 0;
   flag = 1;
   nav.style.position = "fixed";
}
else
{
   full.style.top = "-100%";
   flag = 0;
   nav.style.opacity = 1;
   nav.style.position = "relative";
}
} )
