const images = document.querySelectorAll('.achievements-container img');
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');

        images.forEach(image => {
            image.addEventListener('click', () => {
                lightboxImage.src = image.src;
                lightboxImage.alt = image.alt;
                lightbox.style.display = 'flex';
            });
        });

        lightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        function toggleSection(sectionId) {
            var section = document.getElementById(sectionId);
            var sections = document.querySelectorAll('.section');
            for (var i = 0; i < sections.length; i++) {
                sections[i].style.display = 'none';
                sections[i].classList.remove('centered-content'); // Remove centered-content class from all sections
            }
            section.style.display = 'block';
            section.classList.add('centered-content'); // Add centered-content class to the clicked section
        }