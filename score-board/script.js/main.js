// Main initialization file

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    window.scoreBoard.init();
    window.serveManager.init();
    window.undoManager.init();
    window.modeManager.init();
    window.settingsManager.init();
    
    // Load saved preferences
    window.serveManager.loadFromLocalStorage();
    window.settingsManager.updateStartServeDisplay();
    
    // Set up reset button
    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('Reset the current set? All points will be lost.')) {
                window.scoreBoard.reset();
                window.serveManager.resetServe();
            }
        });
    }
    
    // Prevent double-tap zoom on score fields
    const scoreFields = document.querySelectorAll('.score-field');
    scoreFields.forEach(field => {
        field.addEventListener('touchstart', (e) => {
            // Prevent default only if not on undo button
            if (!e.target.classList.contains('undo-btn')) {
                e.preventDefault();
                // Trigger click after a tiny delay for better touch response
                setTimeout(() => {
                    field.click();
                }, 10);
            }
        }, { passive: false });
    });
    
    // Keyboard shortcuts for testing (optional)
    document.addEventListener('keydown', (e) => {
        // Press '1' for left point, '2' for right point (for testing on desktop)
        if (e.key === '1') {
            document.getElementById('leftField').click();
        } else if (e.key === '2') {
            document.getElementById('rightField').click();
        } else if (e.key === 'z' && (e.ctrlKey || e.metaKey)) {
            // Ctrl+Z for undo last point (undoes from the last scored side)
            const lastPoint = window.scoreBoard.history[window.scoreBoard.history.length - 1];
            if (lastPoint) {
                const leftChanged = lastPoint.left !== window.scoreBoard.leftScore;
                const rightChanged = lastPoint.right !== window.scoreBoard.rightScore;
                if (leftChanged) {
                    document.querySelector('.left-undo').click();
                } else if (rightChanged) {
                    document.querySelector('.right-undo').click();
                }
            }
        }
    });
    
    console.log('Score Board initialized!');
});
