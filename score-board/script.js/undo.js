// Undo functionality management

class UndoManager {
    constructor() {
        this.undoLeftBtn = document.querySelector('.left-undo');
        this.undoRightBtn = document.querySelector('.right-undo');
    }
    
    init() {
        this.attachEventListeners();
    }
    
    attachEventListeners() {
        if (this.undoLeftBtn) {
            this.undoLeftBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent triggering field click
                this.handleUndo('left');
            });
        }
        
        if (this.undoRightBtn) {
            this.undoRightBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent triggering field click
                this.handleUndo('right');
            });
        }
    }
    
    handleUndo(side) {
        if (!window.scoreBoard) return;
        
        // Save current serve state before undo
        const oldScores = window.scoreBoard.getScores();
        
        // Perform undo
        const success = window.scoreBoard.undo();
        
        if (success) {
            // Update serve based on new scores
            const newScores = window.scoreBoard.getScores();
            if (window.serveManager) {
                window.serveManager.updateServe(newScores.left, newScores.right);
            }
            
            // Visual feedback
            this.showUndoFeedback(side);
            
            // Optional: Play sound
            // Utils.playSound('undo');
        }
    }
    
    showUndoFeedback(side) {
        const btn = side === 'left' ? this.undoLeftBtn : this.undoRightBtn;
        if (btn) {
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 150);
        }
    }
}

// Initialize undo manager
window.undoManager = new UndoManager();
