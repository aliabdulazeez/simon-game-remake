
const playBtn = document.getElementById('play').addEventListener('click', () =>{
    window.location.href = "http://127.0.0.1:5500/game_page.html";

    console.log('worked');

 })


const uzbek = {
    play: "O’YINNI BOSHLASH",
    info: "O’YIN HAQIDA",
    insideInfo: "Bu o'yin..."
}

const russian = {
    play: "НАЧИНАТЬ",
    info: "ИНФО",
    insideInfo: "Igra SIMON - eto..."
}

const english = {
    play: "PLAY",
    info: "INFO",
    insideInfo: "This game is a memory game..."
}


let lang = localStorage.getItem('lang')

if(lang == null){
	changeLang(english.play)
}else{
	changeLang(lang)
}






let langBtn = document.getElementsByClassName('lang');



for (var i = 0; langBtn.length > i; i++){
    langBtn[i].addEventListener('click', function(e){
        let mode = this.dataset.mode;
        console.log('Language is :', mode);
        changeLang(mode)
      
    })
}

function changeLang(mode){
    if(mode === "english"){
        document.getElementById('play').innerHTML = english.play;
        document.getElementById('info').innerHTML = english.info;
    }
    if(mode === "uzbek"){
        document.getElementById('play').innerHTML = uzbek.play;
        document.getElementById('info').innerHTML = uzbek.info;
    }
    if(mode === "russian"){
        document.getElementById('play').innerHTML = russian.play;
        document.getElementById('info').innerHTML = russian.info;
    }

    localStorage.setItem('lang', mode)
}


 