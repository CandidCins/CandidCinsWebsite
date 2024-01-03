function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');

  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

document.querySelectorAll('.menu-links a').forEach(link => {
  link.addEventListener('click', toggleMenu);
});

document.querySelector('.hamburger-icon').addEventListener('click', toggleMenu);

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.btn.btn-color-2').addEventListener('click', () => {
      window.open('./assets/My_RESUME.pdf');
  });

  document.querySelector('.btn.btn-color-1').addEventListener('click', () => {
      location.href = './#contact';
  });

  const socialIcons = document.querySelectorAll('#profile .icon');
  const socialLinks = ['https://linkedin.com/in/dj-addison-69826b1b6', 'https://github.com/CandidCins'];
  socialIcons.forEach((icon, index) => {
      icon.addEventListener('click', () => {
          location.href = socialLinks[index];
      });
  });

  document.querySelector('.project-btn').addEventListener('click', () => {
      location.href = 'https://github.com/CandidCins';
  });
});
