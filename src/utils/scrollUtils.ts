export const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop;
    const headerHeight = 80; // Approximate header height
    
    window.scrollTo({
      top: offsetTop - headerHeight,
      behavior: 'smooth'
    });
  }
};

export const getActiveSection = (): string => {
  const sections = [
    'hero',
    'about',
    'skills',
    'projects',
    'experience',
    'contact'
  ];
  
  const scrollPosition = window.scrollY + 100; // Add offset to account for header
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section && section.offsetTop <= scrollPosition) {
      return sections[i];
    }
  }
  
  return 'hero'; // Default to hero section
};