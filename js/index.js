
$(window).on("load",()=>{
    console.log("ready")
    

    let start=()=>{
        $(".loading-screen").remove()

        $("#introduction").addClass("fade-in-animation")
        $("nav").addClass("drop-animation")
    }
    //give 330ms for firefox to get ready
    setTimeout(start,600)

    //Typing animation change text
    // $("h1.dev-title").addClass("type-web")
    // console.log("added web")
    //     let changeDevTitle=()=>{
    //         let elem = $("h1.dev-title")
    //         if (elem.html()=="web"){
    //             elem.html("software")
    //             elem.removeClass("type-web")
    //             elem.addClass("type-software")
    //         }else{
    //             elem.html("web")
    //             elem.addClass("type-web")
    //             elem.removeClass("type-software")
    //         }
    //     }
    //     setInterval(changeDevTitle,3000)



    //typing animation on dev title
    //second implementation stolen from doctorpc.lk
    let devTitleElem=$(".dev-title")


    let currentWord="web"
    let currentLetter=0;
    let interval = 150
    let waitTime= 2000
    let waitCounter=0
    let wait=false
    let typeDevTitle=()=>{
        console.log(wait)

        if (wait){
            waitCounter+=interval;
            if (! (waitCounter>waitTime)){
                console.log("waiting")
                return;
            }else{
                waitCounter=0
                wait=false;
            }
        }

        if (currentLetter==currentWord.length){
            currentLetter=0;
            currentWord = currentWord=="web"? "software":"web";
            if (!wait){
                wait =true;
                return;
            }

            
        }
        if(currentLetter==0){
            devTitleElem.html("")
        }

        let letters = [...currentWord]
        devTitleElem.html(devTitleElem.html()+letters[currentLetter])
        currentLetter+=1
        
    }
    setInterval(typeDevTitle,interval)
    
    //Scroll down icon on section 1
    let downIcon= $("i.down-icon")
    let section2Top = $(".section2").offset().top
    
    downIcon.click(()=>{
        console.log(downIcon.offset())
        $([document.documentElement,document.body]).animate({scrollTop:section2Top},1800)
    })

    


    


})


