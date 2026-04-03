// ============================================
// MAIN APPLICATION ENTRY POINT
// ============================================

class ScoreBoardApp {
    constructor() {
        this.initialized = false;
        this.startTime = Date.now();
        this.eventListeners = [];
    }
    
    async init() {
        console.log('Initializing Score Board Application...');
        
        // Initialize all managers in correct order
        this.initializeManagers();
        
        // Setup global event listeners
        this.setupGlobalEventListeners();
        
        // Load saved preferences
        this.loadAllPreferences();
        
        // Setup reset button
        this.setupResetButton();
        
        // Setup window resize handler
        this.setupResizeHandler();
        
        // Setup before unload save
        this.setupBeforeUnload();
        
        // Mark as initialized
        this.initialized = true;
        
        // Show welcome message
        this.showWelcomeMessage();
        
        // Update UI with current state
        this.updateUI();
        
        console.log('Score Board Application initialized successfully!');
    }
    
    initializeManagers() {
        // Initialize in sequence
        if (window.scoreBoard) {
            window.scoreBoard.init();
            console.log('✓ ScoreBoard initialized');
        }
        
        if (window.serveManager) {
            window.serveManager.init();
            console.log('✓ ServeManager initialized');
        }
        
        if (window.undoManager) {
            window.undoManager.init();
            console.log('✓ UndoManager initialized');
        }
        
        if (window.modeManager) {
            window.modeManager.init();
            console.log('✓ ModeManager initialized');
        }
        
        if (window.settingsManager) {
            window.settingsManager.init();
            console.log('✓ SettingsManager initialized');
        }
        
        if (window.animationManager) {
            window.animationManager.init();
            console.log('✓ AnimationManager initialized');
        }
    }
    
    setupGlobalEventListeners() {
        // Prevent zoom on double tap (mobile)
        document.addEventListener('touchstart', (e) => {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        }, { passive: false });
        
        // Handle visibility change (save state when tab becomes hidden)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.saveCurrentState();
            }
        });
        
        // Setup keyboard shortcuts
        this.setupKeyboardShortcuts();
    }
    
    setupKeyboardShortcuts() {
        const handler = (e) => {
            // Keyboard shortcuts for testing/gaming
            switch(e.key) {
                case 'ArrowLeft':
                    if (!e.ctrlKey && !e.shiftKey) {
                        e.preventDefault();
                        document.getElementById('leftField')?.click();
                    }
                    break;
                case 'ArrowRight':
                    if (!e.ctrlKey && !e.shiftKey) {
                        e.preventDefault();
                        document.getElementById('rightField')?.click();
                    }
                    break;
                case 'z':
                case 'Z':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        // Undo last point by checking which side last scored
                        if (window.scoreBoard && window.scoreBoard.history.length > 0) {
                            const lastState = window.scoreBoard.history[window.scoreBoard.history.length - 1];
                            const currentScores = window.scoreBoard.getScores();
                            if (lastState.left !== currentScores.left) {
                                document.querySelector('.left-undo')?.click();
                            } else if (lastState.right !== currentScores.right) {
                                document.querySelector('.right-undo')?.click();
                            }
                        }
                    }
                    break;
                case 'r':
                case 'R':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        if (confirm('Reset the game?')) {
                            window.scoreBoard?.reset();
                        }
                    }
                    break;
                case 's':
                case 'S':
                    if (e.ctrlKey && e.shiftKey) {
                        e.preventDefault();
                        window.settingsManager?.openSettings();
                    }
                    break;
            }
        };
        
        document.addEventListener('keydown', handler);
        this.eventListeners.push({ type: 'keydown', handler });
    }
    
    setupResetButton() {
        const resetBtn = document.getElementById('resetBtn');
        if (resetBtn) {
            const handler = () => {
                if (confirm('Reset the current set? All points will be lost.')) {
                    window.scoreBoard?.reset();
                    Utils.showToast('Game has been reset!', 1500);
                    Utils.vibrate(50);
                }
            };
            resetBtn.addEventListener('click', handler);
            this.eventListeners.push({ type: 'click', handler, element: resetBtn });
        }
    }
    
    setupResizeHandler() {
        const handler = Utils.debounce(() => {
            // Adjust UI for new screen size
            const isMobile = window.innerWidth <= 768;
            document.body.classList.toggle('mobile-view', isMobile);
            
            // Re-adjust score font sizes if needed
            const scoreNumbers = document.querySelectorAll('.score-number');
            scoreNumbers.forEach(score => {
                score.style.fontSize = isMobile ? '25vw' : '18vw';
            });
        }, 250);
        
        window.addEventListener('resize', handler);
        this.eventListeners.push({ type: 'resize', handler });
        
        // Initial call
        handler();
    }
    
    setupBeforeUnload() {
        window.addEventListener('beforeunload', () => {
            this.saveCurrentState();
        });
    }
    
    loadAllPreferences() {
        // Load from localStorage
        const savedState = Utils.loadFromLocalStorage('gameState');
        if (savedState && savedState.timestamp && (Date.now() - savedState.timestamp) < 3600000) {
            // Restore state if less than 1 hour old
            if (window.scoreBoard && savedState.scores) {
                window.scoreBoard.leftScore = savedState.scores.left;
                window.scoreBoard.rightScore = savedState.scores.right;
                window.scoreBoard.updateDisplay();
                window.scoreBoard.updateTotalPoints();
                
                if (window.serveManager && savedState.serve) {
                    window.serveManager.startingServe = savedState.serve.starting;
                    window.serveManager.currentServe = savedState.serve.current;
                    window.serveManager.updateServeDisplay();
                }
            }
        }
    }
    
    saveCurrentState() {
        if (!window.scoreBoard) return;
        
        const state = {
            scores: window.scoreBoard.getScores(),
            serve: window.serveManager ? {
                starting: window.serveManager.getStartingServe(),
                current: window.serveManager.getCurrentServe()
            } : null,
            timestamp: Date.now(),
            version: '1.0'
        };
        
        Utils.saveToLocalStorage('gameState', state);
    }
    
    showWelcomeMessage() {
        setTimeout(() => {
            Utils.showToast('🎯 Tap fields to score! First to 24 wins!', 3000);
        }, 500);
    }
    
    updateUI() {
        // Update any dynamic UI elements
        const currentYear = new Date().getFullYear();
        const footer = document.querySelector('.game-footer');
        if (footer) {
            footer.innerHTML = `&copy; ${currentYear} Score Board | Volleyball Edition`;
        }
    }
    
    destroy() {
        // Clean up event listeners
        this.eventListeners.forEach(listener => {
            if (listener.element) {
                listener.element.removeEventListener(listener.type, listener.handler);
            } else {
                window.removeEventListener(listener.type, listener.handler);
            }
        });
        
        this.initialized = false;
        console.log('Application destroyed');
    }
}

// Create and initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new ScoreBoardApp();
    window.app.init();
});

// Handle PWA installation (if needed)
if ('serviceWorker' in navigator) {
    // Uncomment to register service worker for PWA
    // navigator.serviceWorker.register('/sw.js').catch(err => console.log('Service worker registration failed:', err));
}