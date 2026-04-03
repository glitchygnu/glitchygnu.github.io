// Scoreboard management

class ScoreBoard {
    constructor() {
        this.leftScore = 0;
        this.rightScore = 0;
        this.maxScore = 24;
        this.leftElement = document.getElementById('leftScore');
        this.rightElement = document.getElementById('rightScore');
        this.leftField = document.getElementById('leftField');
        this.rightField = document.getElementById('rightField');
        this.history = []; // For undo functionality
    }
    
    init() {
        this.updateDisplay();
        this.attachEventListeners();
    }
    
    attachEventListeners() {
        // Tap/click on fields to increment score
        this.leftField.addEventListener('click', (e) => {
            // Don't increment if clicking on undo button
            if (e.target.classList.contains('undo-btn')) return;
            this.incrementScore('left');
        });
        
        this.rightField.addEventListener('click', (e) => {
            if (e.target.classList.contains('undo-btn')) return;
            this.incrementScore('right');
        });
    }
    
    incrementScore(side) {
        // Check if game is finished
        if (this.leftScore === this.maxScore || this.rightScore === this.maxScore) {
            alert(`Game is finished! ${this.leftScore === this.maxScore ? 'Left' : 'Right'} player won! Press Reset to play again.`);
            return;
        }
        
        // Save current state for undo
        this.saveToHistory();
        
        // Increment score
        if (side === 'left' && this.leftScore < this.maxScore) {
            this.leftScore++;
        } else if (side === 'right' && this.rightScore < this.maxScore) {
            this.rightScore++;
        }
        
        this.updateDisplay();
        
        // Trigger serve update
        if (window.serveManager) {
            window.serveManager.updateServe(this.leftScore, this.rightScore);
        }
        
        // Visual feedback
        this.addScoreAnimation(side);
    }
    
    updateDisplay() {
        this.leftElement.textContent = this.leftScore;
        this.rightElement.textContent = this.rightScore;
    }
    
    saveToHistory() {
        this.history.push({
            left: this.leftScore,
            right: this.rightScore
        });
        // Keep history limited to last 20 actions
        if (this.history.length > 20) {
            this.history.shift();
        }
    }
    
    undo() {
        if (this.history.length === 0) return false;
        
        const previousState = this.history.pop();
        this.leftScore = previousState.left;
        this.rightScore = previousState.right;
        this.updateDisplay();
        return true;
    }
    
    addScoreAnimation(side) {
        const scoreElement = side === 'left' ? this.leftElement : this.rightElement;
        scoreElement.style.transform = 'scale(1.2)';
        setTimeout(() => {
            scoreElement.style.transform = 'scale(1)';
        }, 150);
    }
    
    reset() {
        this.leftScore = 0;
        this.rightScore = 0;
        this.history = [];
        this.updateDisplay();
        
        // Reset serve based on starting serve
        if (window.serveManager) {
            window.serveManager.resetServe();
        }
    }
    
    getScores() {
        return { left: this.leftScore, right: this.rightScore };
    }
}

// Initialize scoreboard
window.scoreBoard = new ScoreBoard();
