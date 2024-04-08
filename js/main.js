
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
