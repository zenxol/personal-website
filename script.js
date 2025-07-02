// --- Editable Data ---
const intro = {
  subtitle: 'CMU Student | Developer | Innovator',
  about: `Hi! I'm Aiden, a passionate developer and student at Carnegie Mellon University. I love building impactful projects that blend technology and creativity. Welcome to my personal website!`
};

const projects = [
  {
    title: 'Motion Mentor',
    link: 'https://github.com/zenxol/Motion-Mentor',
    desc: 'An exercise detection system using computer vision to analyze push-ups and squats in real-time, leveraging pose estimation for instant feedback.'
  },
  {
    title: "Emmy's Spa Website",
    link: 'https://github.com/zenxol/emmys-spa-website',
    desc: "A modern, elegant website for Emmy's Spa, designed to showcase services and facilitate online bookings with a beautiful user experience."
  },
  {
    title: 'Highway Havoc',
    link: 'https://github.com/zenxol/highway-havoc',
    desc: 'A fast-paced game where players navigate traffic and obstacles, testing reflexes and strategy in a dynamic environment.'
  },
  {
    title: 'Dog Similarity App',
    link: 'https://github.com/zenxol/dog-similarity-app',
    desc: 'An app that uses machine learning to compare and find similarities between different dog breeds based on images and characteristics.'
  }
];

// --- DOM Population ---
document.addEventListener('DOMContentLoaded', () => {
  // Intro
  document.getElementById('subtitle').textContent = intro.subtitle;
  document.getElementById('about').textContent = intro.about;

  // Projects
  const projectsList = document.getElementById('projects-list');
  projectsList.innerHTML = '';
  projects.forEach((proj, i) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.animationDelay = `${1.1 + i * 0.15}s`;
    card.innerHTML = `
      <a class="project-title" href="${proj.link}" target="_blank">${proj.title}</a>
      <div class="project-desc">${proj.desc}</div>
    `;
    projectsList.appendChild(card);
  });
}); 