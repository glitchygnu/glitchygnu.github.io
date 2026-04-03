// ============================================
// SERVE MANAGEMENT SYSTEM
// ============================================

class ServeManager {
    constructor() {
        this.startingServe = 'left'; // 'left' or 'right'
        this.currentServe = 'left';
        this.serveElement = document.getElementById('servePlayer');
        this.nextServeElement = document.getElementById('nextServe');
        this.serveHistory = [];
        this.serveChangeInterval = 2; // Changes every 2 total points
    }
    
    init() {
        this.loadFromLocalStorage();
        this.updateServeDisplay();
        this.updateNextServe();
    }
    
    setStartingServe(side) {
        if (side !== 'left' && side !== 'right') return;
        
        this.startingServe = side;
        this.currentServe = side;
        this.updateServeDisplay();
        this.updateNextServe();
        this.saveToLocalStorage();
        
        Utils.showToast(`${side === 'left' ? 'Left' : 'Right'} will serve first!`, 2000);
    }
    
    updateServe(leftScore, rightScore) {
        const totalPoints = leftScore + rightScore;
        
        // Calculate who should serve based on total points
        // Serve changes every 2 total points
        const serveCycles = Math.floor(totalPoints / this.serveChangeInterval);
        
        let newServe;
        if (serveCycles % 2 === 0) {
            newServe = this.startingServe;
        } else {
            newServe = this.startingServe === 'left' ? 'right' : 'left';
        }
        
        // Check if serve changed
        const serveChanged = (newServe !== this.currentServe);
        
        this.currentServe = newServe;
        this.updateServeDisplay();
        this.updateNextServe();
        
        // Add to history
        this.serveHistory.push({
            totalPoints: totalPoints,
            serve: this.currentServe,
            timestamp: Date.now()
        });
        
        // Keep history limited
        if (this.serveHistory.length > 50) {
            this.serveHistory.shift();
        }
        
        // Animate serve change
        if (serveChanged && totalPoints > 0) {
            this.animateServeChange();
            Utils.showToast(`Serve switches to ${this.currentServe === 'left' ? 'LEFT' : 'RIGHT'}!`, 1500);
        }
    }
    
    updateServeDisplay() {
        if (this.serveElement) {
            this.serveElement.textContent = this.currentServe === 'left' ? 'LEFT' : 'RIGHT';
            
            // Update color based on side
            if (this.currentServe === 'left') {
                this.serveElement.style.color = '#ff4757';
                this.serveElement.style.textShadow = '0 0 10px rgba(255, 71, 87, 0.5)';
            } else {
                this.serveElement.style.color = '#1e90ff';
                this.serveElement.style.textShadow = '0 0 10px rgba(30, 144, 255, 0.5)';
            }
        }
    }
    
    updateNextServe() {
        if (!this.nextServeElement) return;
        
        // Calculate next serve
        const currentTotal = window.scoreBoard ? 
            window.scoreBoard.leftScore + window.scoreBoard.rightScore : 0;
        const nextServeCycle = Math.floor((currentTotal + this.serveChangeInterval) / this.serveChangeInterval);
        
        let nextServe;
        if (nextServeCycle % 2 === 0) {
            nextServe = this.startingServe;
        } else {
            nextServe = this.startingServe === 'left' ? 'right' : 'left';
        }
        
        this.nextServeElement.textContent = nextServe === 'left' ? 'LEFT' : 'RIGHT';
        this.nextServeElement.style.color = nextServe === 'left' ? '#ff4757' : '#1e90ff';
    }
    
    animateServeChange() {
        const indicator = document.querySelector('.serve-indicator');
        if (indicator) {
            indicator.classList.add('glow-pulse');
            setTimeout(() => {
                indicator.classList.remove('glow-pulse');
            }, 500);
        }
        
        // Animate the serve arrow
        const arrow = document.querySelector('.serve-arrow');
        if (arrow) {
            arrow.classList.add('rotate');
            setTimeout(() => {
                arrow.classList.remove('rotate');
            }, 300);
        }
    }
    
    resetServe() {
        this.currentServe = this.startingServe;
        this.updateServeDisplay();
        this.updateNextServe();
        Utils.showToast('Serve reset to starting player', 1000);
    }
    
    getCurrentServe() {
        return this.currentServe;
    }
    
    getStartingServe() {
        return this.startingServe;
    }
    
    saveToLocalStorage() {
        Utils.saveToLocalStorage('startingServe', this.startingServe);
        Utils.saveToLocalStorage('serveHistory', this.serveHistory.slice(-20));
    }
    
    loadFromLocalStorage() {
        const saved = Utils.loadFromLocalStorage('startingServe');
        if (saved && (saved === 'left' || saved === 'right')) {
            this.startingServe = saved;
            this.currentServe = saved;
        }
        
        const savedHistory = Utils.loadFromLocalStorage('serveHistory');
        if (savedHistory && Array.isArray(savedHistory)) {
            this.serveHistory = savedHistory;
        }
    }
    
    getServePattern() {
        // Return serve pattern for display
        const pattern = [];
        for (let i = 0; i < 10; i++) {
            const serveAtPoints = i * this.serveChangeInterval;
            const server = (Math.floor(serveAtPoints / this.serveChangeInterval) % 2 === 0) ? 
                this.startingServe : (this.startingServe === 'left' ? 'right' : 'left');
            pattern.push({
                points: serveAtPoints,
                server: server
            });
        }
        return pattern;
    }
}

// Initialize serve manager
window.serveManager = new ServeManager();