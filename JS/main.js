const modifiers = {
    siteHadercartModalOpen: 'site-header__cart-modal--open',
    imgThumbnailActive: 'img-showcase__thumbnail--active',
    imgShowcaseThumbnailActive:'img- showcase__thumbnail--active',
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


// Change the main img and add active item
const elsImgShowcaseThumbnail = document.querySelectorAll('.img-showcase__thumbnail');
const elsImgShowcaseThumbnailButton = document.querySelectorAll('.js-img-showcase__thumbnail-button');
const elsImgShowcaseThumbnailImg = document.querySelectorAll('.img-showcase__thumbnail-img');
const elImgShowcaseActiveImg = document.querySelector('.img-showcase__acitve-img');

// Functions
function deactivateImgShowcaseThumbnails () {
    // Deactivate all active items
    elsImgShowcaseThumbnailButton.forEach(function (elImgShowcaseThumbnailButton) {
        elImgShowcaseThumbnailButton.parentElement.classList.remove('img-showcase__thumbnail--active')
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
        elButton.parentElement.classList.add('img-showcase__thumbnail--active');
    });
});


// Lightbox
const elCloseLightbox = document.querySelector('.js-close___lightbox');
const elModal = document.querySelector('.lightbox');
const elModalOpener = document.querySelector('.js-lghtbox__toggler');

if (elModalOpener) {
    elModalOpener.addEventListener('click', function () {
        elModal.classList.add('lightbox--open');
    });
};

if (elCloseLightbox) {
    elCloseLightbox.addEventListener('click', function() {
        elModal.classList.remove(modifiers.lightboxOpen);
    })
}