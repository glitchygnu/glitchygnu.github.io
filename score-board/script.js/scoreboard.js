// ============================================
// SCOREBOARD MANAGEMENT
// ============================================

class ScoreBoard {
    constructor() {
        this.leftScore = 0;
        this.rightScore = 0;
        this.maxScore = 24;
        this.leftElement = document.getElementById('leftScore');
        this.rightElement = document.getElementById('rightScore');
        this.leftField = document.getElementById('leftField');
        this.rightField = document.getElementById('rightField');
        this.totalPointsElement = document.getElementById('totalPoints');
        this.gameStatusElement = document.getElementById('gameStatus');
        this.history = [];
        this.isGameActive = true;
        this.pointSoundEnabled = true;
    }
    
    init() {
        this.updateDisplay();
        this.attachEventListeners();
        this.updateGameStatus();
        this.loadSettings();
    }
    
    attachEventListeners() {
        // Left field click handler
        this.leftField.addEventListener('click', (e) => {
            if (e.target.classList.contains('undo-btn')) return;
            if (!this.isGameActive) {
                Utils.showToast('Game is finished! Press Reset to play again.', 2000);
                return;
            }
            this.incrementScore('left');
        });
        
        // Right field click handler
        this.rightField.addEventListener('click', (e) => {
            if (e.target.classList.contains('undo-btn')) return;
            if (!this.isGameActive) {
                Utils.showToast('Game is finished! Press Reset to play again.', 2000);
                return;
            }
            this.incrementScore('right');
        });
        
        // Touch events for better mobile response
        if (Utils.isMobile()) {
            this.leftField.addEventListener('touchstart', this.handleTouch.bind(this), { passive: false });
            this.rightField.addEventListener('touchstart', this.handleTouch.bind(this), { passive: false });
        }
    }
    
    handleTouch(e) {
        if (e.target.classList.contains('undo-btn')) return;
        e.preventDefault();
        const field = e.currentTarget;
        const side = field.classList.contains('left-field') ? 'left' : 'right';
        if (!this.isGameActive) {
            Utils.showToast('Game is finished! Press Reset to play again.', 2000);
            return;
        }
        this.incrementScore(side);
    }
    
    incrementScore(side) {
        // Check if game is finished
        if (!this.isGameActive) return;
        
        // Save current state for undo
        this.saveToHistory();
        
        // Increment score
        if (side === 'left' && this.leftScore < this.maxScore) {
            this.leftScore++;
            this.animateScoreIncrease('left');
        } else if (side === 'right' && this.rightScore < this.maxScore) {
            this.rightScore++;
            this.animateScoreIncrease('right');
        } else {
            Utils.showToast(`Maximum score is ${this.maxScore}!`, 1500);
            return;
        }
        
        this.updateDisplay();
        
        // Visual and haptic feedback
        Utils.vibrate(30);
        this.createPointEffect(side);
        
        // Update serve based on new scores
        if (window.serveManager) {
            window.serveManager.updateServe(this.leftScore, this.rightScore);
        }
        
        // Update total points display
        this.updateTotalPoints();
        
        // Check for winner
        this.checkWinner();
        
        // Play sound (if enabled)
        if (this.pointSoundEnabled) {
            // Sound would be played here if audio files are added
        }
    }
    
    animateScoreIncrease(side) {
        const scoreElement = side === 'left' ? this.leftElement : this.rightElement;
        const field = side === 'left' ? this.leftField : this.rightField;
        
        // Add pop animation to score number
        scoreElement.classList.add('score-pop');
        setTimeout(() => {
            scoreElement.classList.remove('score-pop');
        }, 200);
        
        // Add flash animation to field
        field.classList.add('field-flash');
        setTimeout(() => {
            field.classList.remove('field-flash');
        }, 150);
        
        // Add flip animation
        scoreElement.classList.add('flip-number');
        setTimeout(() => {
            scoreElement.classList.remove('flip-number');
        }, 300);
    }
    
    createPointEffect(side) {
        const field = side === 'left' ? this.leftField : this.rightField;
        const rect = field.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const color = side === 'left' ? '#ff4757' : '#1e90ff';
        
        Utils.createParticles(x, y, color);
    }
    
    updateDisplay() {
        this.leftElement.textContent = this.leftScore;
        this.rightElement.textContent = this.rightScore;
        
        // Add visual indicator when close to winning
        if (this.leftScore >= 20 || this.rightScore >= 20) {
            if (this.leftScore >= 20) {
                this.leftElement.style.textShadow = '0 0 20px rgba(255, 215, 0, 0.8)';
            }
            if (this.rightScore >= 20) {
                this.rightElement.style.textShadow = '0 0 20px rgba(255, 215, 0, 0.8)';
            }
        } else {
            this.leftElement.style.textShadow = '4px 4px 20px rgba(0,0,0,0.3)';
            this.rightElement.style.textShadow = '4px 4px 20px rgba(0,0,0,0.3)';
        }
    }
    
    saveToHistory() {
        this.history.push({
            left: this.leftScore,
            right: this.rightScore,
            timestamp: Date.now()
        });
        
        // Keep history limited to last 30 actions
        if (this.history.length > 30) {
            this.history.shift();
        }
    }
    
    undo() {
        if (this.history.length === 0) {
            Utils.showToast('Nothing to undo!', 1500);
            return false;
        }
        
        const previousState = this.history.pop();
        this.leftScore = previousState.left;
        this.rightScore = previousState.right;
        this.updateDisplay();
        this.updateTotalPoints();
        
        // Reactivate game if it was finished
        if (!this.isGameActive) {
            this.isGameActive = true;
            this.updateGameStatus();
        }
        
        Utils.showToast('Point undone!', 1000);
        Utils.vibrate(20);
        
        return true;
    }
    
    updateTotalPoints() {
        const total = this.leftScore + this.rightScore;
        if (this.totalPointsElement) {
            this.totalPointsElement.textContent = total;
        }
    }
    
    updateGameStatus() {
        if (this.gameStatusElement) {
            if (!this.isGameActive) {
                const winner = this.leftScore === this.maxScore ? 'LEFT' : 'RIGHT';
                this.gameStatusElement.textContent = `${winner} WON!`;
                this.gameStatusElement.style.color = '#ffd700';
            } else {
                this.gameStatusElement.textContent = 'Active';
                this.gameStatusElement.style.color = '#4ecdc4';
            }
        }
    }
    
    checkWinner() {
        if (this.leftScore === this.maxScore) {
            this.isGameActive = false;
            this.updateGameStatus();
            this.celebrateWinner('left');
            Utils.createConfetti();
            Utils.showToast('🏆 LEFT PLAYER WINS! 🏆', 4000);
            Utils.vibrate(200);
        } else if (this.rightScore === this.maxScore) {
            this.isGameActive = false;
            this.updateGameStatus();
            this.celebrateWinner('right');
            Utils.createConfetti();
            Utils.showToast('🏆 RIGHT PLAYER WINS! 🏆', 4000);
            Utils.vibrate(200);
        }
    }
    
    celebrateWinner(side) {
        const field = side === 'left' ? this.leftField : this.rightField;
        field.classList.add('winner-celebration');
        
        // Add trophy icon animation
        const scoreElement = side === 'left' ? this.leftElement : this.rightElement;
        const originalText = scoreElement.textContent;
        scoreElement.textContent = '🏆';
        setTimeout(() => {
            scoreElement.textContent = originalText;
        }, 1000);
        
        setTimeout(() => {
            field.classList.remove('winner-celebration');
        }, 500);
    }
    
    reset() {
        this.leftScore = 0;
        this.rightScore = 0;
        this.history = [];
        this.isGameActive = true;
        this.updateDisplay();
        this.updateTotalPoints();
        this.updateGameStatus();
        
        // Reset serve based on starting serve
        if (window.serveManager) {
            window.serveManager.resetServe();
        }
        
        Utils.showToast('Game reset!', 1500);
        Utils.vibrate(50);
    }
    
    getScores() {
        return { left: this.leftScore, right: this.rightScore };
    }
    
    loadSettings() {
        const saved = Utils.loadFromLocalStorage('scoreboardSettings');
        if (saved) {
            this.pointSoundEnabled = saved.pointSoundEnabled !== false;
        }
    }
    
    saveSettings() {
        Utils.saveToLocalStorage('scoreboardSettings', {
            pointSoundEnabled: this.pointSoundEnabled
        });
    }
}

// Initialize scoreboard
window.scoreBoard = new ScoreBoard();