const video=document.getElementById('heroVid');
const startBtn=document.getElementById('startBtn');

startBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    video.style.display="block";
    video.volume=1.0;
    video.play();
})