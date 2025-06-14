var cursor = document.querySelector("#cursor")
var cursorb = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", (e)=>{
    cursor.style.transform = `translate(${e.clientX - cursor.offsetWidth/2 }px, ${e.clientY - 10}px)`
    cursorb.style.transform = `translate(${e.clientX - cursorb.offsetWidth/2}px, ${e.clientY - 200}px)`
    // cursor.style.top = e.clientY - 10 + "px"
    // cursorb .style.left = e.clientX - 200 + "px"
    // cursorb.style.top = e.clientY -200 + "px"
})

var bigcur = document.querySelectorAll(".bigcur")
bigcur.forEach((el)=>{
    el.addEventListener("mouseenter", ()=>{
        cursor.style.width = "60px"
        cursor.style.height = "60px"
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"


    })
})

bigcur.forEach((el)=>{
    el.addEventListener("mouseleave", ()=>{
        cursor.style.width = "20px"
        cursor.style.height = "20px"
        cursor.style.border = "none"
        cursor.style.backgroundColor = "#95C11E"

    })
})




gsap.to("#nav", {
    backgroundColor : "#000",
    height : "95px",
    duration:0.5,
    scrollTrigger: {
        trigger : "#nav",
        scroller : "body",
        // markers : true,
        start : "top -5%",
        scrub : 1
    }
})

gsap.to("#main", {
    backgroundColor : "#000",
    scrollTrigger : {
        trigger : "#main",
        scroller : "body",
        // markers : true,
        start : "top -25%",
        end : "top -70%",
        scrub : true
    }

})

gsap.from("#about-us img, #aboutText", {
   y:50, 
   opacity: 0,
   duration : 1,
   stagger: 0.4,
   scrollTrigger:{
    trigger : "#about-us",
    // markers : true,
    scroller: "body",
    start: "top 60%",
    end : "top 58%",
    scrub: 3
   }
})

gsap.from("#cards-container .card", {
   scale:0.8, 
   opacity: 0,
   duration : 1,
   stagger: 0.4,
   scrollTrigger:{
    trigger : ".card",
    // markers : true,
    scroller: "body",
    start: "top 70%",
    end : "top 65%",
    scrub: 3
   }
})


gsap.from("#coln-1", {
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger: "#coln-1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end : "top 45%",
        scrub: 4,
    }
})

gsap.from("#coln-2", {
    y:70,
    x:70,
    scrollTrigger:{
        trigger: "#coln-1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end : "top 45%",
        scrub: 4,
    }
})

gsap.from("#page4 h1", {
    y:40,
    scrollTrigger:{
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end : "top 70%",
        scrub: 3,
    }

})