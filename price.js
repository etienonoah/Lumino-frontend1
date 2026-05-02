document.querySelectorAll('.FAQ-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        
        // Toggle active class
        item.classList.toggle('active');
        
        
        const icon = header.querySelector('i');
        if (item.classList.contains('active')) {
            icon.style.transform = 'rotate(180deg)';
        } else {
            icon.style.transform = 'rotate(0deg)';
        }

        
        document.querySelectorAll('.FAQ-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                otherItem.querySelector('i').style.transform = 'rotate(0deg)';
            }
        });
    });
});

// Smooth transition for the FAQ icon
document.querySelectorAll('.FAQ-header i').forEach(icon => {
    icon.style.transition = 'transform 0.3s ease';
});