var sound_root = "https://yuki.kaze.moe/kcs/";
var sounds = [1,29];
var sound = document.createElement("audio");

function rand(min, max) {
	return Math.floor(Math.random()*(max-min+1)) + min;
}

function genUrl() {
	return sound_root+"181v"+rand(sounds[0],sounds[1])+".mp3";
}

function createPlayer() {
	if(sound.canPlayType("audio/mpeg") != "") {
		// We can play mp3, yay!
		sound.src = genUrl();
		sound.play();
	}
}
