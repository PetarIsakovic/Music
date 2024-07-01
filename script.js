let songs = ["the weeknd - moth to a flame x after hours.mp4", "Sia - Titanium - (Speed up + Reverb).mp4", "if it means winning.mp4", "_Hog Hunt_ _ Dream SMP Animation.mp4", "A Man Without Love LYRICS Video Engelbert Humperdinck 1968 🌙 Moon Knight Episode 1.mp4", "Bruno Mars - Locked Out of Heaven ( slowed + reverb ).mp4", "Charlie Puth - Attention (slowed + reverb).mp4", "David Kushner- Daylight (Speed up).mp4", "Elastic Heart - Speed Up TikTok Version.mp4", "Emile Mosseri - Jacob and the Stone [𝙨𝙡𝙤𝙬𝙚𝙙 + 𝙧𝙚𝙫𝙚𝙧𝙗 + 𝙚𝙭𝙩𝙚𝙣𝙙𝙚𝙙].mp4", "Faouzia & John Legend - Minefields (Official Music Video).mp4", "Kung Fu Panda _ Who Are You.mp4", "Liszt Liebestraum No  3.mp4", "Mia & Sebastian's Theme (Extended).mp4", "Modern Talking - Cheri Cheri Lady (slowed_TikTok Version).mp4", "Passacaglia - Handel_ Halvorsen (Relaxing Piano Music).mp4", "Po Finds The Truth.mp4", "viva.mp4", "pink martini.mp4", "gojo.mp4", "Will & Elizabeth Love Theme _ Pirates of the Caribbean.mp4"];

let currentSongIndex = 0;

document.getElementById("videoFile").src = "Songs/" + songs[currentSongIndex];

const song = document.getElementById("song");
const playTheSongButton = document.getElementById('playTheSongButton');

const panel = document.getElementById("panel");
const controls = document.getElementById("controls");

let playingSong = false;

shuffle();
song.pause();
playingSong = false;
playTheSongButton.innerHTML = "Play";
song.load();

function animationPlay(){
    panel.style.backgroundColor = "transparent";
    panel.style.marginLeft = "65%";
}
function animationPause(){
    panel.style.backgroundColor = "rgb(224, 212, 212)";
    panel.style.marginLeft = "0%";
}

document.getElementById('playTheSongButton').addEventListener('click', function() {
    if(!playingSong){
        song.play();
        playingSong = true;
        playTheSongButton.innerHTML = "Pause";
        animationPlay();
    }
    else{
        song.pause();
        playingSong = false;
        playTheSongButton.innerHTML = "Play";
        animationPause();
    }
});

document.getElementById('nextSongButton').addEventListener('click', function() {
    animationPlay();
    playingSong = true;
    playTheSongButton.innerHTML = "Pause";
    if(currentSongIndex < songs.length-1){
        currentSongIndex++;
    }
    else{
        currentSongIndex = 0;
    }
    document.getElementById("videoFile").src = "Songs/" +  songs[currentSongIndex];
    console.log(songs[currentSongIndex])
    song.load();
    song.play();
});


document.getElementById('song').addEventListener('ended', function() {
    if(currentSongIndex < songs.length-1){
        currentSongIndex++;
    }
    else{
        currentSongIndex = 0;
    }
    document.getElementById("videoFile").src = "Songs/" +  songs[currentSongIndex];
    console.log(songs[currentSongIndex])
    song.load();
    song.play();
});


document.getElementById('mix').addEventListener('click', function() {
    animationPlay();
    shuffle();
});

function shuffle(){

    for(let i = 0; i < 100; i++){
        let index1 = Math.floor(Math.random()*songs.length);
        let index2 = Math.floor(Math.random()*songs.length);
        let holder = songs[index1];
        songs[index1] = songs[index2];
        songs[index2] = holder;
    }
    currentSongIndex = 0;

    document.getElementById("videoFile").src = "Songs/" + songs[currentSongIndex];
    song.load();
    song.play();
    playingSong = true;
    playTheSongButton.innerHTML = "Pause";
}
