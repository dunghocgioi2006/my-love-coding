function upDate(previewPic) {
    // 1. Log to the console to verify the event is triggering and check properties
    console.log("Event triggered!");
    console.log("Alt text: " + previewPic.alt);
    console.log("Source URL: " + previewPic.src);
    
    // 2. Select the main image div
    let displayDiv = document.getElementById("image");
    
    // 3. Change the background image URL dynamically
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // 4. Change the text of the main div to the alt text of the preview image
    displayDiv.innerHTML = previewPic.alt;
}