document.addEventListener('DOMContentLoaded', function() {
    const crackSound = document.getElementById('crackSound');
    const skeleton = document.querySelector('.skeleton');
    
    // Define bone positions (you'll need to adjust these)
    const bones = [
        { id: 'skull', name: 'Skull' },
        { id: 'humerus-left', name: 'Left Humerus' },
        { id: 'humerus-right', name: 'Right Humerus' },
        { id: 'ribs', name: 'Ribs' },
        { id: 'pelvis', name: 'Pelvis' },
        { id: 'femur-left', name: 'Left Femur' },
        { id: 'femur-right', name: 'Right Femur' }
        // Add more bones as needed
    ];
    
    // Create crack elements and add click handlers
    bones.forEach(bone => {
        const boneElement = document.getElementById(bone.id);
        if (boneElement) {
            boneElement.addEventListener('click', function() {
                crackBone(boneElement);
            });
        }
    });
    
    function crackBone(bone) {
        // Play crack sound
        crackSound.currentTime = 0;
        crackSound.play();
        
        // Add shaking animation
        bone.style.animation = 'shake 0.5s';
        
        // Create crack visual
        const crack = document.createElement('div');
        crack.className = 'crack';
        
        // Position crack randomly on the bone
        const boneRect = bone.getBoundingClientRect();
        const skeletonRect = skeleton.getBoundingClientRect();
        
        const x = Math.random() * boneRect.width;
        const y = Math.random() * boneRect.height;
        
        crack.style.left = `${boneRect.left - skeletonRect.left + x}px`;
        crack.style.top = `${boneRect.top - skeletonRect.top + y}px`;
        
        skeleton.appendChild(crack);
        
        // Animate crack
        setTimeout(() => {
            crack.style.opacity = '1';
            crack.style.transform = 'scale(1.5)';
            crack.style.transition = 'all 0.5s';
        }, 10);
        
        // Remove animation and crack after some time
        setTimeout(() => {
            bone.style.animation = '';
            crack.remove();
        }, 1000);
    }
    
    // Add CSS animation dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
            20%, 40%, 60%, 80% { transform: translateX(3px); }
        }
    `;
    document.head.appendChild(style);
});
