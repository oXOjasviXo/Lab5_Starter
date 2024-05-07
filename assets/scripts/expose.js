// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // Select the necessary elements
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.getElementById('volume-icon');
  const playButton = document.getElementById('play-button');
  const audioElement = document.getElementById('horn-sound');
  const confetti = new JSConfetti(); // Assumes you've already included the JSConfetti library

  // Function to update the volume icon based on the volume level
  function updateVolumeIcon(volume) {
      if (volume === 0) {
          volumeIcon.src = 'icons/volume-level-0.svg';
      } else if (volume < 33) {
          volumeIcon.src = 'icons/volume-level-1.svg';
      } else if (volume < 67) {
          volumeIcon.src = 'icons/volume-level-2.svg';
      } else {
          volumeIcon.src = 'icons/volume-level-3.svg';
      }
  }

  // Event listener for the volume slider
  volumeSlider.addEventListener('input', () => {
      const volume = volumeSlider.value;
      audioElement.volume = volume / 100;
      updateVolumeIcon(volume);
  });

  // Event listener for the play button
  playButton.addEventListener('click', () => {
      const selectedHorn = hornSelect.value;
      audioElement.src = `sounds/${selectedHorn}.mp3`;
      audioElement.play();

      // Show confetti if the selected horn is 'party-horn'
      if (selectedHorn === 'party-horn') {
          confetti.addConfetti();
      }
  });
}