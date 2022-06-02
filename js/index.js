
$(window).on("load",()=>{
    console.log("ready")
    

    let start=()=>{
        $(".loading-screen").remove()

        $("#introduction").addClass("fade-in-animation")
        $("nav").addClass("drop-animation")
    }

    //give 330ms for firefox to get ready
    setTimeout(start,600)

})


