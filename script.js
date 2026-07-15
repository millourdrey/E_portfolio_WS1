// Welcome Message
window.onload = function(){

    window.alert("Welcome to Millourd Rey G. De Castro's Portfolio!");

    document.getElementById("title").innerText =
    "Welcome to My Portfolio";

    document.getElementById("title").style.color = "red";
    document.getElementById("title").style.fontSize = "45px";

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