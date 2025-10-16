const playPause =document.getElementById("playPause");
const audio = document.getElementById("audio"); 
const imagemPlay = document.getElementById('imagemPlay')
const imagemPausar = document.getElementById('imagemPausar')
  let taTocando = false

function pausar (){
  if (
    taTocando === true
  ) {
    audio.pause()
    imagemPlay.style.display = "block";
    imagemPausar.style.display = "none";
  }
}


playPause.addEventListener("click", function () {
  if (taTocando === false) {
    console.log("clicou")
    audio.play();
   taTocando = true;
   imagemPlay.style.display = "none";
   imagemPausar.style.display = "block"; 
  
  }
    else {
    pausar()
    taTocando = false
    }
})