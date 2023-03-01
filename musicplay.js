let playBtn=document.getElementById("pause");
let prevBtn=document.getElementById("prev");
let nextBtn=document.getElementById("next");
let Music=document.getElementById("music1");
let Poster=document.getElementById("poster");
var rotation;
var progress = document.getElementById('progress');
var progressbar=document.getElementById('progress_bar');
var muteBtn=document.getElementById('mute');
var loopBtn=document.getElementById('repeat');
isplay=false;

const playMusic = ()=>{
    Music.play();
    isplay=true;
    playBtn.classList.replace("fa-play","fa-pause");
   
}

const pauseMusic = ()=>{
    Music.pause();
    isplay=false;
    playBtn.classList.replace("fa-pause","fa-play");   
}

playBtn.addEventListener('click',()=>{
    if(isplay){
        pauseMusic();
    }
    else{
        playMusic();
        
    }
    
})

let titletrack = document.getElementById("title");
let artist = document.getElementById("artists");

const songs =[{
    name:"Lost In Sound",
    title:"Lost In Sound",
    artists:"ROY KNOX",
},
{
    name:"Turn It Up",
    title:"Turn It Up",
    artists:"Tobu",
},
{
name:"Space",
    title:"Space",
    artists:"Music Unlimited2",
    
},
{
    name :"krishna",
    title :"Krishna Trance",
    artists :"Kala Bhairava",
    
}]

const playSong = (songs)=>{
titletrack.textContent= songs.title;
artist.textContent=songs.artists;
Music.src= songs.name + ".mp3";
Poster.src= songs.name +".jpg";

}
songsIndex=0;
Music.addEventListener
nextBtn.addEventListener("click",()=>{
    songsIndex= (songsIndex + 1)%songs.length;
    playSong(songs[songsIndex]);
    playMusic();
    
    
})


const NextSong = ()=>{
    songsIndex= (songsIndex + 1)%songs.length;
    playSong(songs[songsIndex]);
    playMusic();
}

Music.addEventListener("ended",NextSong);


prevBtn.addEventListener("click",()=>{
    songsIndex= (songsIndex -1 +songs.length)%songs.length;
    playSong(songs[songsIndex]);
    playMusic();
    
})

Music.ontimeupdate = function(e){
    progress.style.width= Math.floor(Music.currentTime*100/Music.duration)+"%";
}

progressbar.addEventListener('click',(e)=>{
    console.log("start");
    Music.currentTime=((e.offsetX/progress_bar.offsetWidth)*Music.duration);
})



muteBtn.addEventListener('click',()=>{
    if(Music.muted){
        Music.muted=false;
        muteBtn.classList.remove("Muted");
        muteBtn.classList.replace("fa-volume-high","fa-volume-xmark");
    }
    else{
        Music.muted=true;
        muteBtn.classList.add("Muted");
        muteBtn.classList.replace("fa-volume-xmark","fa-volume-high");
    }
})    

loopBtn.addEventListener('click',(e)=>{
    if(Music.loop){
        loopBtn.classList.remove("Repeated");
        Music.loop=false;
    }
    else{
        Music.loop=true;
        loopBtn.classList.add("Repeated"); 
    }
})
