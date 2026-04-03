// ============================================
// SETTINGS MANAGEMENT
// ============================================

class SettingsManager {
    constructor() {
        this.modal = document.getElementById('settingsModal');
        this.settingsBtn = document.getElementById('settingsBtn');
        this.closeBtn = document.querySelector('.close-settings');
        this.leftColorSelect = document.getElementById('leftColorSelect');
        this.rightColorSelect = document.getElementById('rightColorSelect');
        this.leftColorPreview = document.getElementById('leftColorPreview');
        this.rightColorPreview = document.getElementById('rightColorPreview');
        this.startServeLeftBtn = document.getElementById('startServeLeft');
        this.startServeRightBtn = document.getElementById('startServeRight');
        this.currentStartServeSpan = document.getElementById('currentStartServe');
        this.modeCards = document.querySelectorAll('.mode-card');
        
        this.colorMap = {
            '#ff4757': 'Crimson Red',
            '#ff6b81': 'Soft Red',
            '#ff7f50': 'Coral',
            '#ff6348': 'Tomato',
            '#1e90ff': 'Dodger Blue',
            '#00cec9': 'Teal',
            '#0984e3': 'Bright Blue',
            '#74b9ff': 'Light Blue'
        };
    }
    
    init() {
        this.attachEventListeners();
        this.loadColorsFromLocalStorage();
        this.updateStartServeDisplay();
        this.setupKeyboardShortcuts();
        this.loadModeFromManager();
    }
    
    attachEventListeners() {
        // Open settings
        if (this.settingsBtn) {
            this.settingsBtn.addEventListener('click', () => this.openSettings());
        }
        
        // Close settings
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.closeSettings());
        }
        
        // Close on overlay click
        const overlay = document.querySelector('.settings-overlay');
        if (overlay) {
            overlay.addEventListener('click', () => this.closeSettings());
        }
        
        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal && this.modal.classList.contains('show')) {
                this.closeSettings();
            }
        });
        
        // Color change handlers
        if (this.leftColorSelect) {
            this.leftColorSelect.addEventListener('change', (e) => {
                this.changeFieldColor('left', e.target.value);
                if (this.leftColorPreview) {
                    this.leftColorPreview.style.backgroundColor = e.target.value;
                }
            });
        }
        
        if (this.rightColorSelect) {
            this.rightColorSelect.addEventListener('change', (e) => {
                this.changeFieldColor('right', e.target.value);
                if (this.rightColorPreview) {
                    this.rightColorPreview.style.backgroundColor = e.target.value;
                }
            });
        }
        
        // Serve start handlers
        if (this.startServeLeftBtn) {
            this.startServeLeftBtn.addEventListener('click', () => {
                this.setStartingServe('left');
            });
        }
        
        if (this.startServeRightBtn) {
            this.startServeRightBtn.addEventListener('click', () => {
                this.setStartingServe('right');
            });
        }
        
        // Mode selection
        if (this.modeCards) {
            this.modeCards.forEach(card => {
                card.addEventListener('click', () => {
                    const mode = card.dataset.mode;
                    if (mode && window.modeManager) {
                        window.modeManager.applyMode(mode);
                        this.closeSettings();
                    }
                });
            });
        }
    }
    
    openSettings() {
        if (this.modal) {
            this.modal.classList.add('show');
            this.updateColorPreviews();
            this.updateModeSelection();
            
            // Add animation to settings button
            if (this.settingsBtn) {
                const icon = this.settingsBtn.querySelector('.btn-icon');
                if (icon) {
                    icon.classList.add('spin');
                    setTimeout(() => {
                        icon.classList.remove('spin');
                    }, 500);
                }
            }
        }
    }
    
    closeSettings() {
        if (this.modal) {
            this.modal.classList.remove('show');
        }
    }
    
    changeFieldColor(side, color) {
        const field = document.getElementById(`${side}Field`);
        if (field) {
            field.style.backgroundColor = color;
            this.saveColorToLocalStorage(side, color);
            
            // Add transition effect
            field.style.transition = 'background-color 0.3s ease';
            setTimeout(() => {
                field.style.transition = '';
            }, 300);
        }
    }
    
    saveColorToLocalStorage(side, color) {
        const colors = Utils.loadFromLocalStorage('fieldColors', {});
        colors[side] = color;
        Utils.saveToLocalStorage('fieldColors', colors);
    }
    
    loadColorsFromLocalStorage() {
        const colors = Utils.loadFromLocalStorage('fieldColors', {});
        
        // Set left field color
        const leftColor = colors.left || '#ff4757';
        const leftField = document.getElementById('leftField');
        if (leftField) {
            leftField.style.backgroundColor = leftColor;
        }
        if (this.leftColorSelect) {
            this.leftColorSelect.value = leftColor;
        }
        if (this.leftColorPreview) {
            this.leftColorPreview.style.backgroundColor = leftColor;
        }
        
        // Set right field color
        const rightColor = colors.right || '#1e90ff';
        const rightField = document.getElementById('rightField');
        if (rightField) {
            rightField.style.backgroundColor = rightColor;
        }
        if (this.rightColorSelect) {
            this.rightColorSelect.value = rightColor;
        }
        if (this.rightColorPreview) {
            this.rightColorPreview.style.backgroundColor = rightColor;
        }
    }
    
    updateColorPreviews() {
        if (this.leftColorPreview && this.leftColorSelect) {
            this.leftColorPreview.style.backgroundColor = this.leftColorSelect.value;
        }
        if (this.rightColorPreview && this.rightColorSelect) {
            this.rightColorPreview.style.backgroundColor = this.rightColorSelect.value;
        }
    }
    
    setStartingServe(side) {
        if (window.serveManager) {
            window.serveManager.setStartingServe(side);
            this.updateStartServeDisplay();
            
            // Reset the game to apply new serve order
            if (window.scoreBoard) {
                window.scoreBoard.reset();
            }
            
            Utils.showToast(`${side === 'left' ? 'Left' : 'Right'} will now serve first!`, 2000);
            this.closeSettings();
        }
    }
    
    updateStartServeDisplay() {
        if (window.serveManager && this.currentStartServeSpan) {
            const startingServe = window.serveManager.getStartingServe();
            this.currentStartServeSpan.textContent = startingServe === 'left' ? 'Left' : 'Right';
            this.currentStartServeSpan.style.color = startingServe === 'left' ? '#ff4757' : '#1e90ff';
        }
    }
    
    updateModeSelection() {
        if (!window.modeManager || !this.modeCards) return;
        
        const currentMode = window.modeManager.getCurrentMode();
        this.modeCards.forEach(card => {
            if (card.dataset.mode === currentMode) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }
    
    loadModeFromManager() {
        if (window.modeManager) {
            this.updateModeSelection();
        }
    }
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl + S to open settings
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                this.openSettings();
            }
        });
    }
    
    resetToDefaults() {
        // Reset colors
        this.changeFieldColor('left', '#ff4757');
        this.changeFieldColor('right', '#1e90ff');
        
        // Reset mode
        if (window.modeManager) {
            window.modeManager.applyMode('normal');
        }
        
        // Reset serve
        this.setStartingServe('left');
        
        Utils.showToast('Settings reset to defaults!', 2000);
    }
}

// Initialize settings manager
window.settingsManager = new SettingsManager();