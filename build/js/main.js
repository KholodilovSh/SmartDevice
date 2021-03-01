'use strict';

(function () {

  const order = document.querySelector('.order');
  const mainHeaderOrder = document.querySelector('.main-header__order');
  const footerFirstParts = document.querySelector('.footer-multilines__parts');
  const footerFirstContacts = document.querySelector('.footer-multilines__contacts');
  var onClickMainHeaderOrder;

  if (order && mainHeaderOrder) {

    const orderForm = order.querySelector('.order__form');
    const orderName = order.querySelector('.order__name').querySelector('input');
    const orderPhone = order.querySelector('.order__telephone').querySelector('input');
    const orderText = order.querySelector('.order__text').querySelector('input');

    var isStorageSupport = true;
    var storageFIO = '';
    var storagePhone = '';

    try {
      storageFIO = localStorage.getItem('FIO');
      storagePhone = localStorage.getItem('phone');
    } catch (err) {
      isStorageSupport = false;
    }

    const orderClose = order.querySelector('.order__close');

    // const
    onClickMainHeaderOrder = function (evtClick) {

      if (evtClick) {
        evtClick.preventDefault();
      }

      const onEscapeModalMenu = (evt) => {
        if (evt.key === 'Escape') {
          onMenuClose();
        }
      };

      const onClickOverlay = function () {
        onMenuClose();
      };

      const onClickMenuClose = function () {
        onMenuClose();
      };

      const onSubmit = function (evt) {

        if (!orderName.value || !orderPhone.value || !orderText.value) {
          evt.preventDefault();
        } else {
          if (isStorageSupport) {
            localStorage.setItem('FIO', orderName.value);
            localStorage.setItem('phone', orderPhone.value);
          }
        }
      };

      const onMenuClose = function () {
        order.classList.remove('order--show');
        document.body.classList.remove('body--overflow-hidden');
        orderClose.removeEventListener('click', onClickMenuClose);
        document.body.removeEventListener('click', onClickOverlay);
        orderForm.removeEventListener('submit', onSubmit);

        mainHeaderOrder.addEventListener('click', onClickMainHeaderOrder);
      };

      mainHeaderOrder.removeEventListener('click', onClickMainHeaderOrder);

      order.classList.add('order--show');
      document.body.classList.add('body--overflow-hidden');

      orderForm.addEventListener('submit', onSubmit);
      orderClose.addEventListener('click', onClickMenuClose);
      document.addEventListener('keydown', onEscapeModalMenu);

      if (storageFIO) {
        orderName.value = storageFIO;
      }

      if (storagePhone) {
        orderPhone.value = storagePhone;
      }
      orderName.focus();

    };
  }

  const onClickMainFooterFirstParts = function () {

    if (footerFirstParts.classList.contains('footer-multilines__parts--closed')) {
      footerFirstParts.classList.remove('footer-multilines__parts--closed');
      footerFirstParts.classList.add('footer-multilines__parts--open');
    } else {
      footerFirstParts.classList.remove('footer-multilines__parts--open');
      footerFirstParts.classList.add('footer-multilines__parts--closed');
    }
  };

  const onClickMainFooterFirstContacts = function () {

    if (footerFirstContacts.classList.contains('footer-multilines__contacts--closed')) {
      footerFirstContacts.classList.remove('footer-multilines__contacts--closed');
      footerFirstContacts.classList.add('footer-multilines__contacts--open');
    } else {
      footerFirstContacts.classList.remove('footer-multilines__contacts--open');
      footerFirstContacts.classList.add('footer-multilines__contacts--closed');
    }
  };

  const initSite = () => {

    if (footerFirstParts) {
      footerFirstParts.classList.add('footer-multilines__parts--closed');
      footerFirstParts.addEventListener('click', onClickMainFooterFirstParts);
    }
    if (footerFirstContacts) {
      footerFirstContacts.classList.add('footer-multilines__contacts--closed');
      footerFirstContacts.addEventListener('click', onClickMainFooterFirstContacts);
    }
    if (order && mainHeaderOrder) {
      mainHeaderOrder.addEventListener('click', onClickMainHeaderOrder);
    }
  };

  window.addEventListener('load', initSite);

  window.main = {
    initSite
  };
})();
