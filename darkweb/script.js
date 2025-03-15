document.getElementById('accessButton').addEventListener('click', () => {
    document.getElementById('warningOverlay').remove();
    document.getElementById('mainContent').classList.remove('hidden');
    startGlitchEffect();
    updateBtcPrice();
});

function startGlitchEffect() {
    setInterval(() => {
        document.querySelectorAll('.glitch').forEach(element => {
            element.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
        });
    }, 50);
}

function updateBtcPrice() {
    setInterval(() => {
        const fakePrice = (Math.random() * 1000 + 30000).toFixed(2);
        document.getElementById('btcPrice').textContent = `₿1 = $${fakePrice}`;
    }, 3000);
}

function redirectToMarketplace() {
    // Show loading screen
    const loading = document.createElement('div');
    loading.innerHTML = `
        <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:black;color:#0f0;display:flex;justify-content:center;align-items:center;font-size:24px;">
            Rerouting through TOR network...
            <div class="spinner"></div>
        </div>
    `;
    document.body.appendChild(loading);

    // Redirect after delay
    setTimeout(() => {
        window.location.href = 'marketplace.html';
    }, 3000);
}

// Create scan lines effect
const scanLines = document.createElement('div');
scanLines.style.position = 'fixed';
scanLines.style.top = '0';
scanLines.style.left = '0';
scanLines.style.width = '100%';
scanLines.style.height = '100%';
scanLines.style.background = `repeating-linear-gradient(
    0deg,
    rgba(0, 255, 0, 0.05) 0px,
    rgba(0, 255, 0, 0.05) 1px,
    transparent 1px,
    transparent 2px
)`;
scanLines.style.pointerEvents = 'none';
document.body.appendChild(scanLines);