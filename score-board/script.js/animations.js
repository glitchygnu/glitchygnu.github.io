// ============================================
// ANIMATIONS & VISUAL EFFECTS
// ============================================

class AnimationManager {
    constructor() {
        this.animationsEnabled = true;
        this.currentAnimations = [];
    }
    
    init() {
        this.loadSettings();
        this.setupScrollAnimations();
    }
    
    loadSettings() {
        const saved = Utils.loadFromLocalStorage('animationSettings');
        if (saved) {
            this.animationsEnabled = saved.animationsEnabled !== false;
        }
    }
    
    playScoreAnimation(element, score) {
        if (!this.animationsEnabled) return;
        
        // Number pop animation
        element.classList.add('score-pop');
        
        // Create number particles
        this.createNumberParticles(element);
        
        setTimeout(() => {
            element.classList.remove('score-pop');
        }, 200);
    }
    
    createNumberParticles(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'score-particle';
            particle.style.position = 'fixed';
            particle.style.left = centerX + 'px';
            particle.style.top = centerY + 'px';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = '#ffd700';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            
            const angle = (Math.PI * 2 * i) / 8;
            const velocity = 3;
            let vx = Math.cos(angle) * velocity;
            let vy = Math.sin(angle) * velocity;
            let opacity = 1;
            
            document.body.appendChild(particle);
            
            const animate = () => {
                particle.style.left = (parseFloat(particle.style.left) + vx) + 'px';
                particle.style.top = (parseFloat(particle.style.top) + vy) + 'px';
                opacity -= 0.02;
                particle.style.opacity = opacity;
                
                if (opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    particle.remove();
                }
            };
            
            animate();
        }
    }
    
    playServeAnimation() {
        if (!this.animationsEnabled) return;
        
        const serveIndicator = document.querySelector('.serve-indicator');
        if (serveIndicator) {
            serveIndicator.style.animation = 'none';
            serveIndicator.offsetHeight; // Trigger reflow
            serveIndicator.style.animation = 'pulse 0.5s ease';
            
            setTimeout(() => {
                if (serveIndicator) {
                    serveIndicator.style.animation = '';
                }
            }, 500);
        }
    }
    
    playWinAnimation(field) {
        if (!this.animationsEnabled) return;
        
        // Add win celebration class
        field.classList.add('winner-celebration');
        
        // Create fireworks effect
        this.createFireworks(field);
        
        setTimeout(() => {
            field.classList.remove('winner-celebration');
        }, 1000);
    }
    
    createFireworks(field) {
        const rect = field.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        
        for (let i = 0; i < 30; i++) {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.position = 'fixed';
            firework.style.left = centerX + 'px';
            firework.style.top = centerY + 'px';
            firework.style.width = '6px';
            firework.style.height = '6px';
            firework.style.borderRadius = '50%';
            firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            firework.style.pointerEvents = 'none';
            firework.style.zIndex = '9999';
            
            const angle = Math.random() * Math.PI * 2;
            const velocity = 5 + Math.random() * 8;
            let vx = Math.cos(angle) * velocity;
            let vy = Math.sin(angle) * velocity;
            let opacity = 1;
            let gravity = 0.2;
            
            document.body.appendChild(firework);
            
            const animate = () => {
                firework.style.left = (parseFloat(firework.style.left) + vx) + 'px';
                firework.style.top = (parseFloat(firework.style.top) + vy) + 'px';
                vy += gravity;
                opacity -= 0.02;
                firework.style.opacity = opacity;
                
                if (opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    firework.remove();
                }
            };
            
            animate();
        }
    }
    
    playUndoAnimation(button) {
        if (!this.animationsEnabled) return;
        
        button.classList.add('shake');
        setTimeout(() => {
            button.classList.remove('shake');
        }, 300);
    }
    
    setupScrollAnimations() {
        // Not needed for this app, but kept for future features
    }
    
    enableAnimations() {
        this.animationsEnabled = true;
        Utils.saveToLocalStorage('animationSettings', { animationsEnabled: true });
    }
    
    disableAnimations() {
        this.animationsEnabled = false;
        Utils.saveToLocalStorage('animationSettings', { animationsEnabled: false });
    }
    
    toggleAnimations() {
        this.animationsEnabled = !this.animationsEnabled;
        Utils.saveToLocalStorage('animationSettings', { animationsEnabled: this.animationsEnabled });
        return this.animationsEnabled;
    }
}

// Initialize animation manager
window.animationManager = new AnimationManager();
