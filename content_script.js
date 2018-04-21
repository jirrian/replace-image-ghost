/*
adapted from replace-image example
*/

var hoverImg = chrome.extension.getURL('ghost.jpg');

var allImages = document.getElementsByTagName('img');

var allSrcs = [];

// store all original image sources
for (var i = 0; i < allImages.length; i++){
    allSrcs.push(allImages[i].src);
}

// add event listeners for hovering and leaving hover
for(var i = 0; i < allImages.length; i++){

	allImages[i].addEventListener("mouseover", function(event){
		event.target.src = hoverImg;
	});

	allImages[i].addEventListener("mouseout", handleMouseOff(allSrcs[i]));
}

function handleMouseOff(origSrc){
	return function(event){
		event.target.src = origSrc;
	};
}
