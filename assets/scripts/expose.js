// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // Select the necessary elements
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');
  const hornImage = document.querySelector('img'); // Add this line to define hornImage correctly
  const confetti = new JSConfetti(); // Assumes you've included the JSConfetti library

  // Function to update the volume icon based on the volume level
  function updateVolumeIcon(volume) {
      if (volume === 0) {
          volumeIcon.src = 'assets/icons/volume-level-0.svg';
      } else if (volume < 33) {
          volumeIcon.src = 'assets/icons/volume-level-1.svg';
      } else if (volume < 67) {
          volumeIcon.src = 'assets/icons/volume-level-2.svg';
      } else {
          volumeIcon.src = 'assets/icons/volume-level-3.svg';
      }
  }

  // Event listener for the volume slider
  volumeSlider.addEventListener('input', () => {
      const volume = volumeSlider.value;
      audioElement.volume = volume / 100;
      updateVolumeIcon(volume);
  });

  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornSelect.value;
    console.log(`Selected Horn: ${selectedHorn}`); // Log selected horn

    if (selectedHorn !== 'select') {
        hornImage.src = `assets/images/${selectedHorn}.svg`; // Adjust this if the file extension is different
        console.log(`Horn Image Src: ${hornImage.src}`); // Log image path
        hornImage.alt = `${selectedHorn} image`;
    } else {
        hornImage.src = 'assets/images/no-image.png'; // Reset to default when no horn is selected
        hornImage.alt = 'No image selected';
    }
  });

  // Event listener for the play button
  playButton.addEventListener('click', () => {
      const selectedHorn = hornSelect.value;
      if (selectedHorn !== 'select') {
          audioElement.src = `assets/audio/${selectedHorn}.mp3`;
          audioElement.play();

          // Show confetti if the selected horn is 'party-horn'
          if (selectedHorn === 'party-horn') {
              confetti.addConfetti();
          }
      }
  });
}