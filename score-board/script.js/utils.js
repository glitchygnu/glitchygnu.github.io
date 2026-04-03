// ============================================
// UTILITY FUNCTIONS & HELPERS
// ============================================

class Utils {
    // LocalStorage Management
    static saveToLocalStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Failed to save to localStorage:', e);
            return false;
        }
    }
    
    static loadFromLocalStorage(key, defaultValue = null) {
        try {
            const saved = localStorage.getItem(key);
            if (saved) {
                return JSON.parse(saved);
            }
            return defaultValue;
        } catch (e) {
            console.error('Failed to load from localStorage:', e);
            return defaultValue;
        }
    }
    
    // Debounce function for performance optimization
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Throttle function for rate limiting
    static throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Show toast notification
    static showToast(message, duration = 2000) {
        const toast = document.getElementById('toast');
        if (!toast) return;
        
        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, duration);
    }
    
    // Create particle effect
    static createParticles(x, y, color) {
        const particleCount = 12;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.backgroundColor = color || '#fff';
            particle.style.position = 'absolute';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            
            const angle = (Math.PI * 2 * i) / particleCount;
            const velocity = 5 + Math.random() * 5;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            document.body.appendChild(particle);
            
            let posX = x;
            let posY = y;
            let opacity = 1;
            
            const animate = () => {
                posX += vx;
                posY += vy;
                opacity -= 0.02;
                
                particle.style.transform = `translate(${posX - x}px, ${posY - y}px)`;
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
    
    // Create confetti effect for winner
    static createConfetti() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        const confettiCount = 100;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 8 + 4 + 'px';
            confetti.style.height = Math.random() * 8 + 4 + 'px';
            confetti.style.position = 'fixed';
            confetti.style.top = '-10px';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
    }
    
    // Get total points
    static getTotalPoints(leftScore, rightScore) {
        return leftScore + rightScore;
    }
    
    // Check if game is finished
    static isGameFinished(leftScore, rightScore, maxScore = 24) {
        return leftScore === maxScore || rightScore === maxScore;
    }
    
    // Get winner
    static getWinner(leftScore, rightScore) {
        if (leftScore === 24) return 'left';
        if (rightScore === 24) return 'right';
        return null;
    }
    
    // Format time (if needed for future features)
    static formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    
    // Generate random ID
    static generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    
    // Deep clone object
    static deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    
    // Check if mobile device
    static isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    // Vibrate if supported
    static vibrate(duration = 50) {
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(duration);
        }
    }
}

// Export for use in other files
window.Utils = Utils;