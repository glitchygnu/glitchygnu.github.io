// Visual mode management

class ModeManager {
    constructor() {
        this.modes = ['normal', 'vibrant', 'hacker', 'liquid-glass'];
        this.currentMode = 'normal';
        this.modeStyles = {};
    }
    
    init() {
        this.loadModeStyles();
        this.loadFromLocalStorage();
        this.applyMode(this.currentMode);
    }
    
    loadModeStyles() {
        // Dynamically load CSS files for each mode
        this.modes.forEach(mode => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `css/modes/${mode}.css`;
            link.disabled = true;
            document.head.appendChild(link);
            this.modeStyles[mode] = link;
        });
    }
    
    applyMode(mode) {
        if (!this.modes.includes(mode)) return;
        
        // Disable all mode styles
        Object.values(this.modeStyles).forEach(style => {
            style.disabled = true;
        });
        
        // Remove mode class from body
        this.modes.forEach(m => {
            document.body.classList.remove(`${m}-mode`);
        });
        
        // Enable selected mode style
        this.modeStyles[mode].disabled = false;
        
        // Add class to body for additional styling
        document.body.classList.add(`${mode}-mode`);
        
        this.currentMode = mode;
        this.saveToLocalStorage();
        
        // Update active button in settings
        this.updateActiveButton(mode);
    }
    
    updateActiveButton(mode) {
        const buttons = document.querySelectorAll('.mode-btn');
        buttons.forEach(btn => {
            if (btn.dataset.mode === mode) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    saveToLocalStorage() {
        Utils.saveToLocalStorage('visualMode', this.currentMode);
    }
    
    loadFromLocalStorage() {
        const saved = Utils.loadFromLocalStorage('visualMode');
        if (saved && this.modes.includes(saved)) {
            this.currentMode = saved;
        }
    }
    
    getCurrentMode() {
        return this.currentMode;
    }
}

// Initialize mode manager
window.modeManager = new ModeManager();
