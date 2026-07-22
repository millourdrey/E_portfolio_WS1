// Welcome Message
window.onload = function(){

    console.log("Portfolio loaded successfully.");

}

// Reusable Function
function changeTheme(){

    document.body.classList.toggle("dark-mode");

    console.log("Theme changed.");

}

// Reusable Function
function showInfo(){

    alert(
        "Name: Millourd Rey G. De Castro\n\n"+
        "Course: Bachelor of Science in Information Technology\n\n"+
        "School: Holy Child Central Colleges, Inc.\n\n"+
        "Email: millourdreygdecastro@gmail.com\n\n"+
        "Phone: 09691877176"
    );

    console.log("Personal information displayed.");

}
