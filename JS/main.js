const modifiers = {
    siteHadercartModalOpen: 'site-header__cart-modal--open',
    imgThumbnailActive: 'img-showcase__thumbnail--active',
    imgShowcaseThumbnailActive:'img-showcase__thumbnail--active',
    lightboxOpen: 'lightbox--open',
}


const elSiteHeaderCartLink = document.querySelector('.js-site-header__card-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');

// Open shopping cart
if (elSiteHeaderCartLink) {
    elSiteHeaderCartLink.addEventListener('click', function(evt) {
        evt.preventDefault();
        elSiteHeaderCartModal.classList.toggle(modifiers.siteHadercartModalOpen)
    });
};


// Img Showcase Change the main img and add active item
const elImgShowcaseActiveImg = document.querySelector('.js-img-showcase__acitve-img');
const elsImgShowcaseThumbnail = document.querySelectorAll('.js-img-showcase__thumbnail');
const elsImgShowcaseThumbnailButton = document.querySelectorAll('.js-img-showcase__thumbnail-button');

// Functions
function deactivateImgShowcaseThumbnails () {
    // Deactivate all active items
    elsImgShowcaseThumbnailButton.forEach(function (elImgShowcaseThumbnailButton) {
        elImgShowcaseThumbnailButton.parentElement.classList.remove(modifiers.imgShowcaseThumbnailActive)
    })
}


// Switch clicked image to main image
elsImgShowcaseThumbnailButton.forEach(function (elButton) {
    elButton.addEventListener('click', function (evt) {

        // Get the datasets value of clicked button
        elImgShowcaseActiveImg.src = evt.target.dataset.src;
        elImgShowcaseActiveImg.srcset = evt.target.dataset.srcset;

        deactivateImgShowcaseThumbnails();
        
        // Add active class to clicked item
        elButton.parentElement.classList.add(modifiers.imgShowcaseThumbnailActive);
    });
});


// Lightbox Modal open and close
const elModal = document.querySelector('.js-lightbox');
const elCloseLightbox = document.querySelector('.js-close___lightbox');
const elModalOpener = document.querySelector('.js-lightbox__toggler');

if (elModalOpener) {
    elModalOpener.addEventListener('click', function () {
        elModal.classList.add(modifiers.lightboxOpen);
    });
};

if (elCloseLightbox) {
    elCloseLightbox.addEventListener('click', function() {
        elModal.classList.remove(modifiers.lightboxOpen);
    })
}


// Lightbox Img Showcase
const elLightboxActiveImg = document.querySelector('.js-lightbox-img-showcase__acitve-img');
const eslLightboxThumbnail = document.querySelectorAll('.js-lightbox-img-showcase__thumbnail');
const eslLightboxThumbnailButton = document.querySelectorAll('.js-lightbox-img-showcase__thumbnail-button');

// Functions
function deactivateLightboxActiveThumbnail() {
    // Deactivate all active items
    eslLightboxThumbnailButton.forEach(function (elLightboxThumbnailButton) {
        elLightboxThumbnailButton.parentElement.classList.remove(modifiers.imgShowcaseThumbnailActive)
    })
}

// Switch clicked image to main image
eslLightboxThumbnailButton.forEach(function (elLightboxThumbnailButton) {
    elLightboxThumbnailButton.addEventListener('click', function (evt) {

        // Get the datasets value of clicked button
        elLightboxActiveImg.src = evt.target.dataset.src;
        elLightboxActiveImg.srcset = evt.target.dataset.srcset;

        deactivateLightboxActiveThumbnail();

        // Add active class to clicked item
        elLightboxThumbnailButton.parentElement.classList.add(modifiers.imgShowcaseThumbnailActive);
    });
});