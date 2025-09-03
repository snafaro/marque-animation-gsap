console.log("marque animation");


window.addEventListener("wheel",(dets)=>{
    if(dets.deltaY > 0){
        gsap.to("#container",{
            transform: "translateX(-100%)",
            duration: 3,
            repeat: -1,
            ease: "none"
        })
    }
    else{
        gsap.to("#container",{
            transform: "translateX(0%)",
            duration: 3,
            repeat: -1,
            ease: "none"
        })
    }
})



