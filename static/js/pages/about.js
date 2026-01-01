console.log('About JS loaded');

const sections = document.querySelectorAll('#al_ab > ul > li');

function closeAllSections() {
  sections.forEach(sec => {
    sec.dataset.open = 'false';
    sec.querySelector('p')?.style.display = 'none';
    sec.querySelector('ul')?.style.display = 'none';
    sec.querySelector('h2 button').textContent = 'Show More';
  });
}

function openSection(section) {
  section.dataset.open = 'true';
  section.querySelector('p')?.style.display = 'block';
  section.querySelector('ul')?.style.display = 'block';
  section.querySelector('h2 button').textContent = 'Show Less';
}

sections.forEach(section => {
  const heading = section.querySelector('h2');
  const btn = heading.querySelector('button');

  section.dataset.open = 'false';

  function toggleSection() {
    const isOpen = section.dataset.open === 'true';
    closeAllSections();
    if (!isOpen) openSection(section);
  }

  heading.addEventListener('click', (e) => {
    // prevent double toggle if button clicked
    if (e.target === btn) return;
    toggleSection();
  });

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSection();
  });
});
