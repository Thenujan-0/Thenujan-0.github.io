
$(window).on("load",()=>{
    console.log("ready")
    $(".loading-screen").remove()


    $(".btnView").click(()=>{
        window.location.href="https://grub-editor.herokuapp.com/"
    })
})


