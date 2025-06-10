function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const card = document.getElementById('card');
    const heart = document.querySelector('.heart');
    const heartSound = document.getElementById('heartSound');
    
    // Hiệu ứng mở phong bì
    envelope.style.transform = 'translateY(-100px)';
    document.querySelector('.envelope-flap').style.transform = 'rotateX(180deg)';
    heart.style.opacity = '0';
    
    // Hiệu ứng hiện thiệp
    setTimeout(() => {
        card.classList.add('show');
        heartSound.play();
    }, 500);
    
    // Tạo hiệu ứng trái tim bay
    createHearts();
}

function createHearts() {
    const container = document.querySelector('.hearts-container');
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart-particle');
            
            // Random vị trí
            const startPosX = Math.random() * window.innerWidth;
            const startPosY = window.innerHeight + 50;
            
            // Random kích thước
            const size = Math.random() * 15 + 5;
            heart.style.width = `${size}px`;
            heart.style.height = `${size}px`;
            
            // Random màu
            const hue = Math.random() * 30 + 330; // Màu hồng/đỏ
            heart.style.background = `hsl(${hue}, 100%, 70%)`;
            
            // Đặt vị trí ban đầu
            heart.style.left = `${startPosX}px`;
            heart.style.top = `${startPosY}px`;
            
            // Thêm vào container
            container.appendChild(heart);
            
            // Hiệu ứng bay
            setTimeout(() => {
                heart.style.animation = `float ${Math.random() * 3 + 3}s linear forwards`;
            }, 10);
            
            // Xóa sau khi bay xong
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, i * 200);
    }
}

function sendInvitation() {
    alert('Lời mời đã được gửi! ❤️ Hy vọng cô ấy sẽ đồng ý đi chơi với bạn!');
    
    // Hiệu ứng pháo hoa
    createHearts();
    
    // Thêm hiệu ứng lắc lư cho thiệp
    const card = document.getElementById('card');
    card.style.animation = 'shake 0.5s';
    setTimeout(() => {
        card.style.animation = '';
    }, 500);
}

// Thêm animation shake
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(5deg); }
        50% { transform: rotate(-5deg); }
        75% { transform: rotate(5deg); }
        100% { transform: rotate(0deg); }
    }
`;
document.head.appendChild(style);

// Cho phép chỉnh sửa nội dung
document.querySelectorAll('[contenteditable="true"]').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.backgroundColor = '#fff5f5';
    });
    
    element.addEventListener('blur', function() {
        this.style.backgroundColor = 'transparent';
    });
});