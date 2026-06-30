<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessible Photo Gallery</title>
    <link rel="stylesheet" href="style.css">
</head>

<body onload="addTabIndex()">

<h1>Accessible Photo Gallery</h1>

<div class="gallery">

    <img src="images/image1.jpg"
         alt="Beautiful mountain landscape"
         tabindex="0"
         onmouseover="upDate(this)"
         onmouseleave="unDo()"
         onfocus="upDate(this)"
         onblur="unDo()">

    <img src="images/image2.jpg"
         alt="Calm beach during sunset"
         tabindex="0"
         onmouseover="upDate(this)"
         onmouseleave="unDo()"
         onfocus="upDate(this)"
         onblur="unDo()">

    <img src="images/image3.jpg"
         alt="Forest trail covered with trees"
         tabindex="0"
         onmouseover="upDate(this)"
         onmouseleave="unDo()"
         onfocus="upDate(this)"
         onblur="unDo()">

    <img src="images/image4.jpg"
         alt="City skyline at night"
         tabindex="0"
         onmouseover="upDate(this)"
         onmouseleave="unDo()"
         onfocus="upDate(this)"
         onblur="unDo()">

    <img src="images/image5.jpg"
         alt="Colorful flowers in a garden"
         tabindex="0"
         onmouseover="upDate(this)"
         onmouseleave="unDo()"
         onfocus="upDate(this)"
         onblur="unDo()">

    <img src="images/image6.jpg"
         alt="Snow-covered mountain peak"
         tabindex="0"
         onmouseover="upDate(this)"
         onmouseleave="unDo()"
         onfocus="upDate(this)"
         onblur="unDo()">

</div>

<div id="image">
    Hover over or focus on an image to display it here.
</div>

<script src="script.js"></script>

</body>
</html>
body{
    font-family: Arial, sans-serif;
    text-align:center;
    background:#f4f4f4;
}

.gallery{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:15px;
    margin:20px;
}

.gallery img{
    width:180px;
    height:120px;
    object-fit:cover;
    border:4px solid #444;
    cursor:pointer;
}

.gallery img:focus{
    outline:4px solid blue;
}

#image{
    margin:30px auto;
    width:600px;
    height:350px;
    border:3px solid #333;
    background-size:cover;
    background-position:center;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:24px;
    color:white;
    text-shadow:2px 2px 5px black;
}
function upDate(previewPic){

    console.log("Mouse over or focus event");

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage =
        "url('" + previewPic.src + "')";

    imageDiv.innerHTML = previewPic.alt;
}

function unDo(){

    console.log("Mouse leave or blur event");

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";

    imageDiv.innerHTML =
    "Hover over or focus on an image to display it here.";
}

function addTabIndex(){

    console.log("Page loaded");

    let images = document.querySelectorAll(".gallery img");

    for(let i=0;i<images.length;i++){

        images[i].setAttribute("tabindex","0");

        console.log("Added tabindex to image " + (i+1));
    }

}