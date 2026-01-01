// Select all sections
const sections = document.querySelectorAll('div > ul > li');

// Function to close all sections
function closeAllSections() {
  sections.forEach(sec => {
    const paragraph = sec.querySelector('p');
    const list = sec.querySelector('ul');
    const btn = sec.querySelector('h2 button');
    if (paragraph) paragraph.style.display = 'none';
    if (list) list.style.display = 'none';
    if (btn) btn.textContent = "Show More";
  });
}

sections.forEach(section => {
  const heading = section.querySelector('h2');

  // Create toggle button if not exists
  let btn = heading.querySelector('button');
  if (!btn) {
    btn = document.createElement('button');
    btn.textContent = "Show More";
    heading.appendChild(btn);
  }

  // Toggle function
  function toggleSection() {
    const paragraph = section.querySelector('p');
    const list = section.querySelector('ul');
    const isOpen = paragraph.style.display === 'block';

    // Close all other sections first
    closeAllSections();

    if (!isOpen) {
      // Open current section
      if (paragraph) paragraph.style.display = 'block';
      if (list) list.style.display = 'block';
      btn.textContent = "Show Less";
    }
  }

  // Add event to heading click
  heading.addEventListener('click', toggleSection);

  // Add event to li click (if clicking outside heading)
  section.addEventListener('click', (e) => {
    // Prevent double toggle if heading is clicked
    if (e.target !== heading && e.target !== btn) {
      toggleSection();
    }
  });

  // Add event to button click
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent li click from firing
    const paragraph = section.querySelector('p');
    const list = section.querySelector('ul');
    const isOpen = paragraph.style.display === 'block';

    if (isOpen) {
      // Close current section
      if (paragraph) paragraph.style.display = 'none';
      if (list) list.style.display = 'none';
      btn.textContent = "Show More";
    } else {
      toggleSection();
    }
  });
});