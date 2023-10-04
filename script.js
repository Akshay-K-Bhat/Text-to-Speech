let speakBtn = document.getElementById('speak-btn'); 
let voiceSelect = document.querySelector("select");
let speech = new SpeechSynthesisUtterance();

let voices = []

window.speechSynthesis.onvoiceschanged = () => {
    voices = speechSynthesis.getVoices();
    speech.voice = speechSynthesis.getVoices()[0];
    voices.forEach( (voice , i) => {
        voiceSelect.options[i] = new Option(voice.name , i);
    } )
}

voiceSelect.addEventListener('change' , ()=> {
    speech.voice = voices[voiceSelect.value];
})

speakBtn.addEventListener('click' , ()=> {
    let text = document.querySelector('textarea');
    speech.text = text.value;
    speechSynthesis.speak(speech);
})




