// Serve management

class ServeManager {
    constructor() {
        this.startingServe = 'left'; // 'left' or 'right'
        this.currentServe = 'left';
        this.serveElement = document.getElementById('servePlayer');
    }
    
    init() {
        this.updateServeDisplay();
    }
    
    setStartingServe(side) {
        this.startingServe = side;
        this.currentServe = side;
        this.updateServeDisplay();
        this.saveToLocalStorage();
    }
    
    updateServe(leftScore, rightScore) {
        const totalPoints = leftScore + rightScore;
        // Serve changes every 2 total points
        const serveCycles = Math.floor(totalPoints / 2);
        
        if (serveCycles % 2 === 0) {
            this.currentServe = this.startingServe;
        } else {
            this.currentServe = this.startingServe === 'left' ? 'right' : 'left';
        }
        
        this.updateServeDisplay();
        this.addServeAnimation();
    }
    
    updateServeDisplay() {
        if (this.serveElement) {
            this.serveElement.textContent = this.currentServe === 'left' ? 'LEFT' : 'RIGHT';
            this.serveElement.style.color = this.currentServe === 'left' ? '#ff6b6b' : '#4ecdc4';
        }
    }
    
    addServeAnimation() {
        const indicator = document.querySelector('.serve-indicator');
        if (indicator) {
            indicator.classList.add('serve-active');
            setTimeout(() => {
                indicator.classList.remove('serve-active');
            }, 500);
        }
    }
    
    resetServe() {
        this.currentServe = this.startingServe;
        this.updateServeDisplay();
    }
    
    getCurrentServe() {
        return this.currentServe;
    }
    
    saveToLocalStorage() {
        Utils.saveToLocalStorage('startingServe', this.startingServe);
    }
    
    loadFromLocalStorage() {
        const saved = Utils.loadFromLocalStorage('startingServe');
        if (saved) {
            this.startingServe = saved;
            this.currentServe = saved;
            this.updateServeDisplay();
        }
    }
}

// Initialize serve manager
window.serveManager = new ServeManager();
