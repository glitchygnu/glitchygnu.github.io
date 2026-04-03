// Settings management

class SettingsManager {
    constructor() {
        this.modal = document.getElementById('settingsModal');
        this.settingsBtn = document.getElementById('settingsBtn');
        this.closeBtn = document.querySelector('.close-settings');
        this.leftColorSelect = document.getElementById('leftColorSelect');
        this.rightColorSelect = document.getElementById('rightColorSelect');
        this.startServeLeftBtn = document.getElementById('startServeLeft');
        this.startServeRightBtn = document.getElementById('startServeRight');
        this.currentStartServeSpan = document.getElementById('currentStartServe');
    }
    
    init() {
        this.attachEventListeners();
        this.loadColorsFromLocalStorage();
        this.updateStartServeDisplay();
    }
    
    attachEventListeners() {
        // Open settings
        this.settingsBtn.addEventListener('click', () => this.openSettings());
        
        // Close settings
        this.closeBtn.addEventListener('click', () => this.closeSettings());
        
        // Close on background click
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeSettings();
            }
        });
        
        // Color change handlers
        this.leftColorSelect.addEventListener('change', (e) => {
            this.changeFieldColor('left', e.target.value);
        });
        
        this.rightColorSelect.addEventListener('change', (e) => {
            this.changeFieldColor('right', e.target.value);
        });
        
        // Starting serve handlers
        this.startServeLeftBtn.addEventListener('click', () => {
            this.setStartingServe('left');
        });
        
        this.startServeRightBtn.addEventListener('click', () => {
            this.setStartingServe('right');
        });
        
        // Mode buttons
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const mode = btn.dataset.mode;
                if (window.modeManager) {
                    window.modeManager.applyMode(mode);
                }
            });
        });
    }
    
    openSettings() {
        this.modal.classList.add('show');
    }
    
    closeSettings() {
        this.modal.classList.remove('show');
    }
    
    changeFieldColor(side, color) {
        const field = document.getElementById(`${side}Field`);
        if (field) {
            field.style.backgroundColor = color;
            this.saveColorToLocalStorage(side, color);
        }
    }
    
    saveColorToLocalStorage(side, color) {
        const colors = Utils.loadFromLocalStorage('fieldColors', {});
        colors[side] = color;
        Utils.saveToLocalStorage('fieldColors', colors);
    }
    
    loadColorsFromLocalStorage() {
        const colors = Utils.loadFromLocalStorage('fieldColors', {});
        
        if (colors.left) {
            document.getElementById('leftField').style.backgroundColor = colors.left;
            this.leftColorSelect.value = colors.left;
        } else {
            // Default colors
            document.getElementById('leftField').style.backgroundColor = '#ff6b6b';
            this.leftColorSelect.value = '#ff6b6b';
        }
        
        if (colors.right) {
            document.getElementById('rightField').style.backgroundColor = colors.right;
            this.rightColorSelect.value = colors.right;
        } else {
            document.getElementById('rightField').style.backgroundColor = '#4ecdc4';
            this.rightColorSelect.value = '#4ecdc4';
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
            this.closeSettings();
        }
    }
    
    updateStartServeDisplay() {
        if (window.serveManager && this.currentStartServeSpan) {
            const startingServe = window.serveManager.startingServe;
            this.currentStartServeSpan.textContent = startingServe === 'left' ? 'Left' : 'Right';
        }
    }
}

// Initialize settings manager
window.settingsManager = new SettingsManager();
