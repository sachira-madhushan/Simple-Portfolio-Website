ScrollReveal().reveal('.navbar', { delay: 200 });
    ScrollReveal().reveal('#home', { delay: 200 });
    ScrollReveal().reveal('#about', { delay: 200 });
    ScrollReveal().reveal('#education', { delay: 200 });
    ScrollReveal().reveal('#experience', { delay: 200 });
    ScrollReveal().reveal('#projects', { delay: 200 });
    ScrollReveal().reveal('#skills', { delay: 200 });
    ScrollReveal().reveal('#contact', { delay: 200 });

    const typeString = (element, text, delay = 100) => {
      const textArray = text.split('');
      let i = 0;

      function type() {
        if (i < textArray.length) {
          element.innerHTML += textArray[i];
          i++;
          setTimeout(type, delay);
        }
      }

      type();
    };

    const typewriter = document.querySelector('.typewriter');
    typeString(typewriter, 'Explore my work and experience');