// Utility functions

const Utils = {
    // Save to localStorage
    saveToLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    
    // Load from localStorage
    loadFromLocalStorage(key, defaultValue = null) {
        const saved = localStorage.getItem(key);
        if (saved) {
            return JSON.parse(saved);
        }
        return defaultValue;
    },
    
    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Play sound effect (optional - if sound files exist)
    playSound(soundName) {
        const audio = new Audio(`assets/sounds/${soundName}.mp3`);
        audio.volume = 0.5;
        audio.play().catch(e => console.log('Sound not available'));
    },
    
    // Get total points scored
    getTotalPoints(leftScore, rightScore) {
        return leftScore + rightScore;
    },
    
    // Check if game is finished
    isGameFinished(leftScore, rightScore) {
        return leftScore === 24 || rightScore === 24;
    }
};
