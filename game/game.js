// 🎮 ¡Este archivo lo escribirá Copilot Chat!
// 💬 Abre el chat de Copilot y di: "¡Vamos a crear mi juego!"

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

// ✨ Sistema de partículas para la pantalla de bienvenida
const particles = [];
for (let i = 0; i < 50; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `hsl(${Math.random() * 360}, 80%, 60%)`
    });
}

function animate() {
    // 🌌 Fondo oscuro
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // ✨ Dibujar partículas flotantes
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
    });

    // 🎮 Título
    ctx.fillStyle = '#00ff88';
    ctx.font = 'bold 42px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('🎮 ¡Tu Juego Va Aquí!', canvas.width / 2, canvas.height / 2 - 60);

    // 💬 Instrucciones
    ctx.fillStyle = '#ffffff';
    ctx.font = '22px Arial';
    ctx.fillText('Abre el chat de Copilot y di:', canvas.width / 2, canvas.height / 2 + 10);

    // 🚀 Llamada a la acción (con pulso)
    const pulse = Math.sin(Date.now() / 500) * 0.3 + 0.7;
    ctx.fillStyle = `rgba(255, 204, 0, ${pulse})`;
    ctx.font = 'bold 28px Arial';
    ctx.fillText('"¡Vamos a crear mi juego! 🚀"', canvas.width / 2, canvas.height / 2 + 60);

    // 🔄 Seguir animando
    requestAnimationFrame(animate);
}

animate();
