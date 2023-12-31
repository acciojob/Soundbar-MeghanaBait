//your JS code here. If required.
let currentSound = null;

function playSound(soundFile) {
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }

    currentSound = new Audio(`sounds/${soundFile}`);
    currentSound.play();
}

function stopSound() {
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }
}
