const menuItems = document.querySelectorAll('.sidebar nav ul li');
const sections = document.querySelectorAll('.section');

// Inicializar primera sección activa y menú activo
window.addEventListener('DOMContentLoaded', () => {
  if(menuItems.length > 0) {
    menuItems.forEach(li => li.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));

    menuItems[0].classList.add('active');
    sections[0].classList.add('active');
  }
});

// Mostrar sección al hacer clic en menú
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const sectionId = item.getAttribute('data-section');

    // Remover active de todos
    menuItems.forEach(li => li.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));

    // Activar el seleccionado
    item.classList.add('active');
    const section = document.getElementById(sectionId);
    if(section) {
      section.classList.add('active');
    }
  });

  // Al pasar mouse, solo agregar el efecto agrandar (hovered)
  item.addEventListener('mouseenter', () => {
    const sectionId = item.getAttribute('data-section');
    const section = document.getElementById(sectionId);

    // Solo agregar hovered, no tocar active
    if(section) {
      section.classList.add('hovered');
    }
  });

  // Al salir, quitar efecto agrandar
  item.addEventListener('mouseleave', () => {
    const sectionId = item.getAttribute('data-section');
    const section = document.getElementById(sectionId);

    if(section) {
      section.classList.remove('hovered');
    }
  });
});
