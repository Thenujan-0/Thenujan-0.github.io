
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
    $("h1.dev-title").addClass("type-web")
    console.log("added web")
        let changeDevTitle=()=>{
            let elem = $("h1.dev-title")
            if (elem.html()=="web"){
                elem.html("software")
                elem.removeClass("type-web")
                elem.addClass("type-software")
            }else{
                elem.html("web")
                elem.addClass("type-web")
                elem.removeClass("type-software")
            }
        }
        setInterval(changeDevTitle,3000)
    
    //Scroll down icon on section 1
    let downIcon= $("i.down-icon")
    let section2Top = $(".section2").offset().top
    
    downIcon.click(()=>{
        console.log(downIcon.offset())
        $([document.documentElement,document.body]).animate({scrollTop:section2Top},2000)
    })

    


    


})


