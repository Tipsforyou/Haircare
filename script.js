// Exemple d’effet interactif : survol des titres
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.textShadow = '0 0 5px #00bfff';
  });
  link.addEventListener('mouseout', () => {
    link.style.textShadow = 'none';
  });
});
