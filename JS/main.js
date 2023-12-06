const modifiers = {
    siteHadercartModalOpen: 'site-header__cart-modal--open',
    imgThumbnailActive: 'img-showcase__thumbnail--active',
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
        elImgShowcaseThumbnailButton.parentElement.classList.remove(modifiers.imgThumbnailActive)
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
        elButton.parentElement.classList.add(modifiers.imgThumbnailActive);
    });
});


// Lightbox Modal open and close
const elLightbox = document.querySelector('.js-lightbox');
const elCloseLightbox = document.querySelector('.js-close___lightbox');
const elLightboxOpener = document.querySelector('.js-lightbox__toggler');

if (elLightboxOpener) {
    elLightboxOpener.addEventListener('click', function () {
        elLightbox.classList.add(modifiers.lightboxOpen);
    });
};

if (elCloseLightbox) {
    elCloseLightbox.addEventListener('click', function() {
        elLightbox.classList.remove(modifiers.lightboxOpen);
    })
}


// Lightbox Img Showcase
const elLightboxActiveImg = document.querySelector('.js-lightbox-img-showcase__acitve-img');
const elslLightboxThumbnail = document.querySelectorAll('.js-lightbox-img-showcase__thumbnail');
const elslLightboxThumbnailButton = document.querySelectorAll('.js-lightbox-img-showcase__thumbnail-button');

// Functions
function deactivateLightboxActiveThumbnail() {
    // Deactivate all active items
    elslLightboxThumbnailButton.forEach(function (elLightboxThumbnailButton) {
        elLightboxThumbnailButton.parentElement.classList.remove(modifiers.imgThumbnailActive)
    })
}

// Switch clicked image to main image
elslLightboxThumbnailButton.forEach(function (elLightboxThumbnailButton) {
    elLightboxThumbnailButton.addEventListener('click', function (evt) {

        // Get the datasets value of clicked button
        elLightboxActiveImg.src = evt.target.dataset.src;
        elLightboxActiveImg.srcset = evt.target.dataset.srcset;

        deactivateLightboxActiveThumbnail();

        // Add active class to clicked item
        elLightboxThumbnailButton.parentElement.classList.add(modifiers.imgThumbnailActive);
    });
});


// Lightbox Controls
const elLightboxControlPrev = document.querySelector('.js-img-showcase__control--prev');
const elLightboxControlNext = document.querySelector('.js-img-showcase__control--next');

if (elLightboxControlNext) {
    elLightboxControlNext.addEventListener('click', function () {

        // Find active li Element
        const elActiveitem = elLightbox.querySelector('.img-showcase__thumbnail--active');

        // Remove active class from prev element
        elActiveitem.classList.remove(modifiers.imgThumbnailActive);

        let elNextActiveItem;

        // Check there are any element after active element
        if (elActiveitem.nextElementSibling == null) {
            elNextActiveItem = elslLightboxThumbnail[0];
        }
        else {
            elNextActiveItem = elActiveitem.nextElementSibling;
        };

        // Add active class to next element
        elNextActiveItem.classList.add(modifiers.imgThumbnailActive);

        // Get the datasets value of clicked button
        // console.log(elNextActiveItem.children[0]);
        elLightboxActiveImg.src = elNextActiveItem.children[0].target.dataset.src;
        elLightboxActiveImg.srcset = elNextActiveItem.children[0].target.dataset.srcset;
    });
}