// ============================================
// VISUAL MODES MANAGEMENT
// ============================================

class ModeManager {
    constructor() {
        this.modes = {
            normal: {
                name: 'Normal',
                icon: '✨',
                description: 'Clean & Professional',
                cssFile: 'css/modes/normal.css'
            },
            vibrant: {
                name: 'Vibrant',
                icon: '🌈',
                description: 'Bright & Energetic',
                cssFile: 'css/modes/vibrant.css'
            },
            hacker: {
                name: 'Hacker',
                icon: '💻',
                description: 'Matrix Style',
                cssFile: 'css/modes/hacker.css'
            },
            'liquid-glass': {
                name: 'Liquid Glass',
                icon: '💎',
                description: 'Frosted Effect',
                cssFile: 'css/modes/liquid-glass.css'
            }
        };
        
        this.currentMode = 'normal';
        this.loadedStyles = {};
        this.transitioning = false;
    }
    
    init() {
        this.loadModeStyles();
        this.loadFromLocalStorage();
        this.applyMode(this.currentMode);
        this.setupKeyboardShortcuts();
    }
    
    loadModeStyles() {
        // Dynamically load all mode CSS files
        Object.keys(this.modes).forEach(modeKey => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = this.modes[modeKey].cssFile;
            link.disabled = true;
            link.setAttribute('data-mode', modeKey);
            document.head.appendChild(link);
            this.loadedStyles[modeKey] = link;
        });
    }
    
    applyMode(modeKey, animate = true) {
        if (!this.modes[modeKey]) {
            console.error(`Mode ${modeKey} not found`);
            return;
        }
        
        if (this.transitioning) return;
        
        if (animate) {
            this.transitioning = true;
            this.animateModeTransition();
        }
        
        // Disable all mode styles
        Object.keys(this.loadedStyles).forEach(key => {
            if (this.loadedStyles[key]) {
                this.loadedStyles[key].disabled = true;
            }
        });
        
        // Enable selected mode style
        if (this.loadedStyles[modeKey]) {
            this.loadedStyles[modeKey].disabled = false;
        }
        
        // Remove existing mode classes
        Object.keys(this.modes).forEach(m => {
            document.body.classList.remove(`${m}-mode`);
            document.documentElement.classList.remove(`${m}-mode`);
        });
        
        // Add new mode class
        document.body.classList.add(`${modeKey}-mode`);
        document.documentElement.classList.add(`${modeKey}-mode`);
        
        // Update background based on mode
        this.updateBackgroundForMode(modeKey);
        
        this.currentMode = modeKey;
        this.saveToLocalStorage();
        
        // Update active button in settings
        this.updateActiveButton(modeKey);
        
        // Apply mode-specific animations
        this.applyModeSpecificEffects(modeKey);
        
        setTimeout(() => {
            this.transitioning = false;
        }, 500);
        
        Utils.showToast(`${this.modes[modeKey].icon} ${this.modes[modeKey].name} Mode Activated!`, 1500);
    }
    
    animateModeTransition() {
        const container = document.querySelector('.app-container');
        if (container) {
            container.style.opacity = '0.8';
            setTimeout(() => {
                container.style.opacity = '1';
            }, 300);
        }
    }
    
    updateBackgroundForMode(modeKey) {
        const bgElement = document.querySelector('.animated-bg');
        if (!bgElement) return;
        
        const backgrounds = {
            normal: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            vibrant: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            hacker: '#000000',
            'liquid-glass': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        };
        
        bgElement.style.background = backgrounds[modeKey] || backgrounds.normal;
    }
    
    applyModeSpecificEffects(modeKey) {
        switch(modeKey) {
            case 'hacker':
                this.applyHackerEffects();
                break;
            case 'vibrant':
                this.applyVibrantEffects();
                break;
            case 'liquid-glass':
                this.applyLiquidGlassEffects();
                break;
            default:
                this.applyNormalEffects();
        }
    }
    
    applyHackerEffects() {
        // Add matrix rain effect
        const canvas = document.createElement('canvas');
        canvas.id = 'matrixCanvas';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.1';
        canvas.style.pointerEvents = 'none';
        
        const existingCanvas = document.getElementById('matrixCanvas');
        if (existingCanvas) existingCanvas.remove();
        
        document.body.appendChild(canvas);
        
        // Simple matrix effect
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = [];
        
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }
        
        const drawMatrix = () => {
            if (this.currentMode !== 'hacker') {
                if (window.matrixInterval) clearInterval(window.matrixInterval);
                return;
            }
            
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#0f0';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };
        
        if (window.matrixInterval) clearInterval(window.matrixInterval);
        window.matrixInterval = setInterval(drawMatrix, 33);
    }
    
    applyVibrantEffects() {
        // Add vibrant pulsing effect
        const style = document.createElement('style');
        style.id = 'vibrantEffects';
        style.textContent = `
            @keyframes vibrantPulse {
                0%, 100% { filter: hue-rotate(0deg); }
                50% { filter: hue-rotate(10deg); }
            }
            .vibrant-mode .score-field {
                animation: vibrantPulse 3s ease-in-out infinite;
            }
        `;
        
        const existingStyle = document.getElementById('vibrantEffects');
        if (existingStyle) existingStyle.remove();
        document.head.appendChild(style);
    }
    
    applyLiquidGlassEffects() {
        // Add liquid glass effects
        const style = document.createElement('style');
        style.id = 'liquidGlassEffects';
        style.textContent = `
            .liquid-glass-mode .score-field {
                animation: float 6s ease-in-out infinite;
            }
            .liquid-glass-mode .field-glow {
                background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
                    rgba(255,255,255,0.3) 0%, 
                    rgba(255,255,255,0) 100%);
            }
        `;
        
        const existingStyle = document.getElementById('liquidGlassEffects');
        if (existingStyle) existingStyle.remove();
        document.head.appendChild(style);
        
        // Track mouse for liquid glass effect
        document.addEventListener('mousemove', (e) => {
            if (this.currentMode === 'liquid-glass') {
                document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
                document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
            }
        });
    }
    
    applyNormalEffects() {
        // Remove any extra effects
        const matrixCanvas = document.getElementById('matrixCanvas');
        if (matrixCanvas) matrixCanvas.remove();
        if (window.matrixInterval) clearInterval(window.matrixInterval);
        
        const vibrantStyle = document.getElementById('vibrantEffects');
        if (vibrantStyle) vibrantStyle.remove();
        
        const liquidStyle = document.getElementById('liquidGlassEffects');
        if (liquidStyle) liquidStyle.remove();
    }
    
    updateActiveButton(modeKey) {
        const buttons = document.querySelectorAll('.mode-card');
        buttons.forEach(btn => {
            if (btn.dataset.mode === modeKey) {
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
        if (saved && this.modes[saved]) {
            this.currentMode = saved;
        }
    }
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl + 1-4 to switch modes
            if (e.ctrlKey && !e.shiftKey) {
                const modeMap = {
                    '1': 'normal',
                    '2': 'vibrant',
                    '3': 'hacker',
                    '4': 'liquid-glass'
                };
                if (modeMap[e.key]) {
                    e.preventDefault();
                    this.applyMode(modeMap[e.key]);
                    Utils.showToast(`Switched to ${this.modes[modeMap[e.key]].name} mode`, 1000);
                }
            }
        });
    }
    
    getCurrentMode() {
        return this.currentMode;
    }
    
    getModeInfo() {
        return {
            current: this.currentMode,
            details: this.modes[this.currentMode],
            available: this.modes
        };
    }
}

// Initialize mode manager
window.modeManager = new ModeManager();