var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false; 
	console.log("Autoplay is set to" + video.autoplay)
	video.loop = false;
	console.log("Autoplay is set to" + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume*100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.90
	console.log("Playback rate is" + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= 0.90
	console.log("Playback rate is" + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 10
	if (video.currentTime >= video.duration)
		video.currentTime = 0
		console.log("Current time is" + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Video is on mute");
	video.muted = !video.muted;
	if (video.muted){
		document.getElementById("mute").textContent = "Unmute";
	}
	else {
		document.getElementById("mute").textContent = "Mute";
	}
});

function updateVolumeText(vol) {
	document.getElementById("volume").textContent = vol * 100 + "%";
}

document.querySelector("#slider").addEventListener("input", function() {
	console.log("Volume changed");
	let slider = document.getElementById("slider");
	video.volume = slider.value / 100;
	updateVolumeText(video.volume);
	console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("old school");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("remove old school");
	video.classList.remove("oldSchool");
});