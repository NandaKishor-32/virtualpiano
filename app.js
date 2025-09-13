const  keys=document.querySelectorAll('.key');
const keycontainer=document.querySelector(".keys")
let body=document.querySelector('body')
let toggle=document.querySelector('.toggle-button')
let names=document.querySelectorAll(".keys .key span")
let range=document.querySelector('.range')

names.forEach(name=>{
  toggle.addEventListener("click",()=>{
  if(name.style.color!='transparent'){
    name.style.color='transparent'
  }
  else {
    name.style.color=''
  }
  
})
})

 let audio=new Audio('tunes/a.wav')

const playTune = (keyChar) => {
    const keyElement = document.querySelector(`.key[data-key="${keyChar}"]`);
    if (!keyElement) return;

    audio.src = `tunes/${keyChar}.wav`;
    audio.currentTime = 0;
    audio.play();

    showMusicNote(keyElement);
};

const showMusicNote = (keyElement) => {
    const note = document.createElement("span");
    note.classList.add("material-symbols-outlined", "musicnote");
    note.innerText = "music_note";

    const keyRect = keyElement.getBoundingClientRect();

    note.style.position = "absolute";
    note.style.left = keyRect.left + keyRect.width / 2 + "px";
    note.style.top = keyRect.top - 10 + "px";
    note.style.fontSize = Math.random() * 40 + 30 + "px";

    document.body.appendChild(note);

    setTimeout(() => {
        note.remove();
    }, 4000);
};


keys.forEach(key =>{
    key.addEventListener("click",()=>playTune(key.dataset.key)) 
    
})

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  if (document.querySelector(`.key[data-key="${key}"]`)) {
    playTune(key);
    
  }
  
});

audio.volume=1 

range.addEventListener('input',()=>{
  audio.volume=range.value/100
})


