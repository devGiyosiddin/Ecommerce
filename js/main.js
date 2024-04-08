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


/* Sitenav Menu modal */
const elSitenavBtn = document.querySelector('.sitenav-button');
const elSitenav = document.querySelector('.sitenav__list');
if (elSitenavBtn) {
    elSitenavBtn.addEventListener('click', function () {
        elSitenavBtn.classList.toggle('sitenav-menu-close');
        elSitenav.classList.toggle('sitenav__list--active');
        document.body.classList.toggle("body-hidden");
    });
};

// Img Showcase Change the main img and add active item
const elProductPageGaleery = document.querySelector('.product-page');
const elImgShowcaseActiveImg = elProductPageGaleery.querySelector('.js-img-showcase__acitve-img');
const elsImgShowcaseThumbnail = elProductPageGaleery.querySelectorAll('.js-img-showcase__thumbnail');
const elsImgShowcaseThumbnailButton = elProductPageGaleery.querySelectorAll('.js-img-showcase__thumbnail-button');

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
const elCloseLightbox = document.querySelector('.js-close__lightbox');
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
// Next
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
        elLightboxActiveImg.src = elNextActiveItem.querySelector('.js-lightbox-img-showcase__thumbnail-button').dataset.src;
        elLightboxActiveImg.srcset = elNextActiveItem.querySelector('.js-lightbox-img-showcase__thumbnail-button').dataset.srcset;
    });
};

// Prev
const elLightboxControlPrev = document.querySelector('.js-img-showcase__control--prev');

if (elLightboxControlPrev) {
    elLightboxControlPrev.addEventListener('click', function () {

        // Find active li Element
        const elActiveitem = elLightbox.querySelector('.img-showcase__thumbnail--active');

        // Remove active class from prev element
        elActiveitem.classList.remove(modifiers.imgThumbnailActive);

        let elPrevActiveItem;

        // Check there are any element after active element
        if (elActiveitem.previousElementSibling == null ) {
            elPrevActiveItem = elslLightboxThumbnail[elslLightboxThumbnail.length -1];
        }
        else {
            elPrevActiveItem = elActiveitem.previousElementSibling;
        };

        // Add active class to next element
        elPrevActiveItem.classList.add(modifiers.imgThumbnailActive);

        // Get the datasets value of clicked button
        elLightboxActiveImg.src = elPrevActiveItem.querySelector('.js-lightbox-img-showcase__thumbnail-button').dataset.src;
        elLightboxActiveImg.srcset = elPrevActiveItem.querySelector('.js-lightbox-img-showcase__thumbnail-button').dataset.srcset;
    });
};


// Product Count
const elIncrementButton = document.querySelector('.js-quantity-increment-button');
const elDecrementButton = document.querySelector('.js-quantity-decrement-button');
const elProductQt = document.querySelector('.product-info__quantity');

// Increment
if (elIncrementButton) {
    elIncrementButton.addEventListener('click', function() {
        elProductQt.textContent = parseInt(elProductQt.textContent, 10) + 1;
    });
};

// Decrement
if (elDecrementButton) {
    elDecrementButton.addEventListener('click', function() {
        const qty = parseInt(elProductQt.textContent, 10);

        if (qty >0) {
            elProductQt.textContent = qty - 1;
        }
    });
};


// Right - Left arrow scroll
document.addEventListener('keydown', function (event) {
    // Проверяем, является ли событие клавишей влево
    if (event.key === 'ArrowLeft') {
        showPrevImage();
    }
    // Проверяем, является ли событие клавишей вправо
    else if (event.key === 'ArrowRight') {
        showNextImage();
    }
});

function showNextImage() {
    // Если у вас уже есть кнопка для переключения вперед, то вызываем ее событие click
    if (elLightboxControlNext) {
        elLightboxControlNext.click();
    }
}

function showPrevImage() {
    // Если у вас уже есть кнопка для переключения назад, то вызываем ее событие click
    if (elLightboxControlPrev) {
        elLightboxControlPrev.click();
    }
}


/* const elAddToCartLink = document.querySelector('.js-add-to-cart-link');
const elShoppingCartModal = document.querySelector('.site-header__cart-modal');
const elProductTitle = document.querySelector('.js-product__title');
const elProductPrice = document.querySelector('.js-product__price');
const elProductQuantity = document.querySelector('.js-product__quantity');

// Example: Assuming you have product information in your HTML
const productInfo = {
  title: elProductTitle.textContent,
  price: elProductPrice.textContent,
  // You may need to adjust this based on your actual structure for quantity input
  quantity: elProductQuantity.value || 1,
};

// Add to Cart link click event
if (elAddToCartLink) {
  elAddToCartLink.addEventListener('click', function (evt) {
    evt.preventDefault();

    // Call a function to add the selected item to the shopping cart
    addToCart(productInfo);

    // You may also want to update the UI to reflect the added item
    updateCartUI();
  });
}

// Function to add the selected item to the shopping cart
function addToCart(item) {
  // Perform the logic to add the item to the shopping cart
  // You might want to use local storage, an array, or another data structure to store cart items
  // For example, you could use an array:
  // shoppingCart.push(item);

  // For the purpose of this example, I'll just log the item to the console
  console.log('Item added to cart:', item);
}

// Function to update the shopping cart UI
function updateCartUI() {
  // Perform the logic to update the UI, e.g., show the added item in the cart modal
  // You might update the cart count, total price, etc.
  // For example, you could update the modal content:
  // elShoppingCartModal.innerHTML = 'Updated content';
}

// Remove open calss on press key ESC
function escRemove() {
    if (elLightbox) {
        elLightbox.classList.remove(modifiers.lightboxOpen)
    }
};
document.addEventListener('keydown', function (event) {
    // Check if the pressed key is 'Escape'
    if (event.key === 'Escape') {
        escRemove();
    }
}); */