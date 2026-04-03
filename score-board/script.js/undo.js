// ============================================
// UNDO FUNCTIONALITY MANAGEMENT
// ============================================

class UndoManager {
    constructor() {
        this.undoLeftBtn = document.querySelector('.left-undo');
        this.undoRightBtn = document.querySelector('.right-undo');
        this.undoStack = [];
        this.maxUndoStack = 20;
    }
    
    init() {
        this.attachEventListeners();
        this.loadFromLocalStorage();
    }
    
    attachEventListeners() {
        if (this.undoLeftBtn) {
            this.undoLeftBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.handleUndo('left');
            });
        }
        
        if (this.undoRightBtn) {
            this.undoRightBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.handleUndo('right');
            });
        }
    }
    
    handleUndo(side) {
        if (!window.scoreBoard) return;
        
        // Get scores before undo
        const oldScores = window.scoreBoard.getScores();
        
        // Perform undo
        const success = window.scoreBoard.undo();
        
        if (success) {
            // Get new scores after undo
            const newScores = window.scoreBoard.getScores();
            
            // Update serve based on new scores
            if (window.serveManager) {
                window.serveManager.updateServe(newScores.left, newScores.right);
            }
            
            // Visual feedback
            this.showUndoFeedback(side);
            this.addToUndoStack({
                side: side,
                oldScores: oldScores,
                newScores: newScores,
                timestamp: Date.now()
            });
            
            // Animate the undone point
            this.animateUndo(side);
        } else {
            Utils.showToast('No more points to undo!', 1500);
        }
    }
    
    showUndoFeedback(side) {
        const btn = side === 'left' ? this.undoLeftBtn : this.undoRightBtn;
        if (btn) {
            btn.classList.add('shake');
            setTimeout(() => {
                btn.classList.remove('shake');
            }, 300);
            
            // Scale animation
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 150);
        }
        
        // Flash the field that was undone
        const field = document.getElementById(`${side}Field`);
        if (field) {
            field.style.filter = 'brightness(0.9)';
            setTimeout(() => {
                field.style.filter = 'brightness(1)';
            }, 150);
        }
    }
    
    animateUndo(side) {
        const scoreElement = side === 'left' ? 
            document.getElementById('leftScore') : document.getElementById('rightScore');
        
        if (scoreElement) {
            scoreElement.classList.add('flip-number');
            setTimeout(() => {
                scoreElement.classList.remove('flip-number');
            }, 300);
        }
    }
    
    addToUndoStack(item) {
        this.undoStack.push(item);
        if (this.undoStack.length > this.maxUndoStack) {
            this.undoStack.shift();
        }
        this.saveToLocalStorage();
    }
    
    clearUndoStack() {
        this.undoStack = [];
        this.saveToLocalStorage();
    }
    
    saveToLocalStorage() {
        Utils.saveToLocalStorage('undoStack', this.undoStack.slice(-10));
    }
    
    loadFromLocalStorage() {
        const saved = Utils.loadFromLocalStorage('undoStack');
        if (saved && Array.isArray(saved)) {
            this.undoStack = saved;
        }
    }
    
    getUndoStats() {
        return {
            totalUndos: this.undoStack.length,
            lastUndo: this.undoStack[this.undoStack.length - 1] || null
        };
    }
}

// Initialize undo manager
window.undoManager = new UndoManager();