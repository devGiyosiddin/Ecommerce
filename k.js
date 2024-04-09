const modifiers = {
    siteHadercartModalOpen: 'site-header__cart-modal--open',
    imgThumbnailActive: 'img-showcase__thumbnail--active',
    lightboxOpen: 'lightbox--open',
    sitenavMenuClose: 'sitenav-menu-close',
    sitenavListActive: 'sitenav__list--active',
    bodyHidden: 'body-hidden',
}

// FUNCTIONS

function addClassToParent(el, className) {
    if (el) {
        el.parentElement.classList.add(className);
    };
};
function addClass(el, classname) {
    el.classList.add(classname);
}
function removeClass(el, classname) {
    el.classList.remove(classname);
}
function toggleClass(el, className) {
    if (el) {
        el.classList.toggle(className);
    };
};

function deactivateImgShowcaseThumbnails () {
    // Deactivate all active items
    elsImgShowcaseThumbnailButton.forEach(function (elImgShowcaseThumbnailButton) {
        elImgShowcaseThumbnailButton.parentElement.classList.remove(modifiers.imgThumbnailActive)
    })
}

function deactivateLightboxActiveThumbnail() {
    // Deactivate all active items
    elslLightboxThumbnailButton.forEach(function (elLightboxThumbnailButton) {
        elLightboxThumbnailButton.parentElement.classList.remove(modifiers.imgThumbnailActive)
    })
}

function escRemove() {
    if (elLightbox) {
        elLightbox.classList.remove(modifiers.lightboxOpen);
    }
}; 

function showNextImage() {
    // Если у вас уже есть кнопка для переключения вперед, то вызываем ее событие click
    if (elLightboxControlNext) {
        elLightboxControlNext.click();
    };
};

function showPrevImage() {
    // Если у вас уже есть кнопка для переключения назад, то вызываем ее событие click
    if (elLightboxControlPrev) {
        elLightboxControlPrev.click();
    };
};

function openShoppingCart() {
    elSiteHeaderCartLink.addEventListener('click', function(evt) {
        evt.preventDefault();
        toggleClass(elSiteHeaderCartModal, modifiers.siteHadercartModalOpen)
    });
};


// Open shopping cart
const elSiteHeaderCartLink = document.querySelector('.js-site-header__card-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');
if (elSiteHeaderCartLink) {
    openShoppingCart();
};



/* Sitenav Menu modal */
const elSitenavBtn = document.querySelector('.sitenav-button');
const elSitenav = document.querySelector('.sitenav__list');
if (elSitenavBtn) {
    elSitenavBtn.addEventListener('click', function () {
        toggleClass(elSitenavBtn, modifiers.sitenavMenuClose);
        toggleClass(elSitenav, modifiers.sitenavListActive);
        toggleClass(document.body, modifiers.bodyHidden);
    });
};

// Img Showcase Change the main img and add active item
const elProductPageGaleery = document.querySelector('.product-page');
const elImgShowcaseActiveImg = elProductPageGaleery.querySelector('.js-img-showcase__acitve-img');
const elsImgShowcaseThumbnail = elProductPageGaleery.querySelectorAll('.js-img-showcase__thumbnail');
const elsImgShowcaseThumbnailButton = elProductPageGaleery.querySelectorAll('.js-img-showcase__thumbnail-button');
// Lightbox Img Showcase
const elLightboxActiveImg = document.querySelector('.js-lightbox-img-showcase__acitve-img');
const elslLightboxThumbnail = document.querySelectorAll('.js-lightbox-img-showcase__thumbnail');
const elslLightboxThumbnailButton = document.querySelectorAll('.js-lightbox-img-showcase__thumbnail-button');



// Switch clicked image to main image on Img Showcase
elsImgShowcaseThumbnailButton.forEach(function (elbtn) {
    elbtn.addEventListener('click', function (evt) {
        
        // Get the datasets value of clicked button
        elImgShowcaseActiveImg.src = evt.target.dataset.src;
        elImgShowcaseActiveImg.srcset = evt.target.dataset.srcset;
        
        deactivateImgShowcaseThumbnails();

        // Add active class to clicked item
        addClassToParent(elbtn, modifiers.imgThumbnailActive)
    });
});

// Switch clicked image to main image on Lightbox
elslLightboxThumbnailButton.forEach(function (elBtn) {
    elBtn.addEventListener('click', function (evt) {
        
        // Get the datasets value of clicked button
        elLightboxActiveImg.src = evt.target.dataset.src;
        elLightboxActiveImg.srcset = evt.target.dataset.srcset;
        
        deactivateLightboxActiveThumbnail();

        // Add active class to clicked item
        addClassToParent(elBtn, modifiers.imgThumbnailActive)
    });
});


// Lightbox Modal open and close
const elLightbox = document.querySelector('.js-lightbox');
const elCloseLightbox = document.querySelector('.js-close__lightbox');
const elLightboxOpener = document.querySelector('.js-lightbox__toggler');

if (elLightboxOpener) {
    elLightboxOpener.addEventListener('click', function () {
        addClass(elLightbox, modifiers.lightboxOpen)
    });
};

if (elCloseLightbox) {
    elCloseLightbox.addEventListener('click', function () {
        removeClass(elLightbox, modifiers.lightboxOpen)
    })
}


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


// Lightbox Controls - 2ND
// Next
const elLightboxControlNext2 = document.querySelector('.js-img-showcase__control--next2');
const elImgShowcaseThumbails = document.querySelector('.js-img-showcase__thumbnails');

if (elLightboxControlNext2) {
    elLightboxControlNext2.addEventListener('click', function () {
        
        // Find active li Element
        const elActiveitem = elImgShowcaseThumbails.querySelector('.img-showcase__thumbnail--active');
        
        // Remove active class from prev element
        elActiveitem.classList.remove(modifiers.imgThumbnailActive);
        
        let elNextActiveItem;
        
        // Check there are any element after active element
        if (elActiveitem.nextElementSibling == null) {
            elNextActiveItem = elsImgShowcaseThumbnail[0];
        }
        else {
            elNextActiveItem = elActiveitem.nextElementSibling;
        };
        
        // Add active class to next element
        elNextActiveItem.classList.add(modifiers.imgThumbnailActive);
        
        // Get the datasets value of clicked button
        elImgShowcaseActiveImg.src = elNextActiveItem.querySelector('.js-img-showcase__thumbnail-button').dataset.src;
        elImgShowcaseActiveImg.srcset = elNextActiveItem.querySelector('.js-img-showcase__thumbnail-button').dataset.srcset;
    });
};

// Prev
const elLightboxControlPrev2 = document.querySelector('.js-img-showcase__control--prev2');
if (elLightboxControlPrev2) {
    elLightboxControlPrev2.addEventListener('click', function () {
        
        // Find active li Element
        const elActiveitem = elImgShowcaseThumbails.querySelector('.img-showcase__thumbnail--active');
        
        // Remove active class from prev element
        elActiveitem.classList.remove(modifiers.imgThumbnailActive);
        
        let elPrevActiveItem;
        
        // Check there are any element after active element
        if (elActiveitem.previousElementSibling == null ) {
            elPrevActiveItem = elsImgShowcaseThumbnail[elsImgShowcaseThumbnail.length -1];
        }
        else {
            elPrevActiveItem = elActiveitem.previousElementSibling;
        };
        
        // Add active class to next element
        elPrevActiveItem.classList.add(modifiers.imgThumbnailActive);
        
        // Get the datasets value of clicked button
        elImgShowcaseActiveImg.src = elPrevActiveItem.querySelector('.js-img-showcase__thumbnail-button').dataset.src;
        elImgShowcaseActiveImg.srcset = elPrevActiveItem.querySelector('.js-img-showcase__thumbnail-button').dataset.srcset;
    });
};

// Remove open class on press key ESC
document.addEventListener('keydown', function (event) {
    // Check if the pressed key is 'Escape'
    if (event.key === 'Escape') {
        escRemove()
    }
});



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




// ADD ITEM
const elAddtoCartBtn = document.querySelector('.js-button--wide');
const elShoppingCartInner = document.querySelector('.js-shopping-cart__inner');
const elShoppingCartCount = document.querySelector('.js-shopping-cart__inner').childElementCount;
const elShoppingCartModal = document.querySelector('.shopping-cart-modal');
if (elAddtoCartBtn) {
    elAddtoCartBtn.addEventListener('click', function () {
        
        if (elProductQt.textContent > 0) {
            
            const elProductQuantity = parseInt(document.querySelector('.js-product__quantity').textContent, 10);
            const elProductPriceNumber = document.querySelector('.js-product__price-number').textContent;
            
            elShoppingCartModal.classList.remove('shopping-cart--empty');
            const lastPrice = elProductPriceNumber * elProductQuantity;
            
            elShoppingCartInner.innerHTML = `
            <!-- has-items -->
            <div class="shopping-cart__content">
            <ul class="shopping-cart__products">
            <li class="shopping-cart__product-item">
            <div class="item-shopping-cart-product">
            <img class="item-shopping-cart-product__img" src="img/shopping-cart-item-img.jpg" alt="Fall limited edition sneakers photo" width="50" height="50" >
            <div class="item-shopping-cart-product__info">
            <div class="item-shopping-cart-product__name">Fall Limited Edition Sneakers</div>
            <div class="item-shopping-cart-product__cost">$125.00 x ${elProductQuantity} <b class="item-shopping-cart-product__subtotal">$${lastPrice}</b></div>
            </div>
            <button class="item-shopping-cart-product__remove-button js-shopping-cart__remove-button" type="button" aria-label="remove item">
            <svg class="item-shopping-cart-product__remove-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="none">
            <path fill="currentColor" fill-rule="evenodd"
            d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4 6c.275 0 .5.225.5.5v7c0 .275-.225.5-.5.5a.501.501 0 0 1-.5-.5v-7c0-.275.225-.5.5-.5Zm3.5.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7ZM10 6c.275 0 .5.225.5.5v7c0 .275-.225.5-.5.5a.501.501 0 0 1-.5-.5v-7c0-.275.225-.5.5-.5Z"
            clip-rule="evenodd" />
            <mask id="a" width="14" height="16" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance">
            <path fill="#fff" fill-rule="evenodd"
            d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4 6c.275 0 .5.225.5.5v7c0 .275-.225.5-.5.5a.501.501 0 0 1-.5-.5v-7c0-.275.225-.5.5-.5Zm3.5.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7ZM10 6c.275 0 .5.225.5.5v7c0 .275-.225.5-.5.5a.501.501 0 0 1-.5-.5v-7c0-.275.225-.5.5-.5Z"
            clip-rule="evenodd" />
            </mask>
            </svg>
            </button>
            </div>
            </li>
            </ul>
            <a href="#" class="button button--block">
            <span class="button__inner">
            <span class="button__text">Checkout</span>
            </span>
            </a>
            </div>
            `;
            
            // Update cart link
            const count = document.createElement('span');
            count.classList.add('site-header__cart-product-count');
            elSiteHeaderCartLink.appendChild(count);
            
            // Update product count
            const elProductCount = document.querySelector('.site-header__cart-product-count');
            elProductCount.textContent = elShoppingCartCount;
            
            // Added item on shopping cart
            const elAddedItem = document.querySelector('.shopping-cart__product-item');
            if (elAddedItem) {
                
                const elsShoppingCartRemoveBtn = document.querySelectorAll('.js-shopping-cart__remove-button');
                elsShoppingCartRemoveBtn.forEach(function (removeBtn) {

                    // Remove item
                    removeBtn.addEventListener('click', function (evt) {
                        let elParentItem = evt.target.parentNode.parentNode.parentNode.parentNode.parentElement.parentNode;
                        // Remove item from DOM
                        elParentItem.remove();

                        // Update shopping cart count
                        const elShoppingCartCount = document.querySelector('.js-shopping-cart__inner').childElementCount;
                        if(elShoppingCartCount === 0) {
                            elSiteHeaderCartLink.children[1].remove();
                        };

                        // Add empty text when no items
                        if (elShoppingCartInner.childNodes) {
                            elShoppingCartInner.innerHTML = '<div class="shopping-cart__empty js-shopping-cart__empty">Your cart is empty.</div>';
                            elShoppingCartModal.classList.add('shopping-cart--empty');
                        }
                    });
                });
            };    
        };
    });
};