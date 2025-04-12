document.getElementById('btn-alternar').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    // Cambiar el texto del botón según el tema
    const themeButton = document.getElementById('btn-alternar');
    if (document.body.classList.contains('dark-theme')) {
        themeButton.textContent = 'Cambiar a Tema Claro';
    } else {
        themeButton.textContent = 'Cambiar a Tema Oscuro';
    }
});