// Fetch data from data.json
fetch('data.json')
.then(response => response.json())
.then(data => {
  
  // populateFeaturesSection(data.features);
  populateTestimonialsSection(data.testimonials);
  populatePricingSection(data.pricing);

  // Add interactivity
  addHoverEffects();
  addSmoothScrolling();
  addLightboxEffect();
})
.catch(error => console.error('Error fetching data:', error));



function populateFeaturesSection(featuresData) {
  const featuresGrid = document.querySelector('#features .grid');

  featuresGrid.innerHTML = '';

  featuresData.forEach(feature => {
    const featureDiv = document.createElement('div');
    featureDiv.classList.add('feature');

    const icon = document.createElement('i');
    icon.classList.add('fas', feature.icon.split('/').pop().split('.')[0]);
    featureDiv.appendChild(icon);

    const title = document.createElement('h3');
    title.textContent = feature.title;
    featureDiv.appendChild(title);

    const description = document.createElement('p');
    description.textContent = feature.description;
    featureDiv.appendChild(description);

    featuresGrid.appendChild(featureDiv);
  });
}

function addHoverEffects() {
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#f2f2f2';
  });
  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '';
  });
});
}

function addSmoothScrolling() {
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});
}

function addLightboxEffect() {
const galleryItems = document.querySelectorAll('#gallery .gallery-item');
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const imageUrl = item.querySelector('img').src;
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');

    const lightboxImage = document.createElement('img');
    lightboxImage.src = imageUrl;
    lightbox.appendChild(lightboxImage);

    const closeButton = document.createElement('span');
    closeButton.textContent = '×';
    closeButton.classList.add('close-button');
    closeButton.addEventListener('click', () => {
      document.body.removeChild(lightbox);
    });
    lightbox.appendChild(closeButton);

    document.body.appendChild(lightbox);
  });
});
}