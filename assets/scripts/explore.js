// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    let synth = window.speechSynthesis;
    let faceImg = document.querySelector('img[src="assets/images/smiling.png"]');
    let normalFaceSrc = faceImg.src;
    let openMouthFaceSrc = 'assets/images/smiling-open.png'; // Ensure this path is correct
    let voiceSelect = document.getElementById('voice-select');
    let textToSpeak = document.getElementById('text-to-speak');
    let speakButton = document.querySelector('button');

    function populateVoiceList() {
        voiceSelect.innerHTML = '<option value="select" disabled>Select Voice:</option>';
        let voices = synth.getVoices();
        voices.forEach(voice => {
            let option = document.createElement('option');
            option.textContent = `${voice.name} (${voice.lang})`;
            option.setAttribute('data-name', voice.name);
            voiceSelect.appendChild(option);
            });
        // Enable the first active option if no option is selected by default
        if (!voiceSelect.selectedOptions[0]) {
            voiceSelect.selectedIndex = 1;
        }
    }

    populateVoiceList();
    if (typeof speechSynthesis.onvoiceschanged !== 'undefined') {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    speakButton.addEventListener('click', () => {
        let utterance = new SpeechSynthesisUtterance(textToSpeak.value);
        let selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
        utterance.voice = synth.getVoices().find(voice => voice.name === selectedOption);

        utterance.onstart = () => {
            faceImg.src = openMouthFaceSrc;
        };

        utterance.onend = () => {
            faceImg.src = normalFaceSrc;
        };

        synth.speak(utterance);
        });
}