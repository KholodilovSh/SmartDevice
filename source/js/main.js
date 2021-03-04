'use strict';

(function () {

  const order = document.querySelector('.order');
  const under = document.querySelector('.under');
  const mainHeaderOrder = document.querySelector('.main-header__order');
  const footerFirstParts = document.querySelector('.footer-multilines__parts');
  const footerFirstContacts = document.querySelector('.footer-multilines__contacts');
  let onClickMainHeaderOrder;

  const maskOptions = {
    mask: '+{7}(000)-000-00-00'
  };

  if (order && mainHeaderOrder) {

    const orderForm = order.querySelector('.order__form');
    const orderName = order.querySelector('.order__name input');
    const orderPhone = order.querySelector('.order__telephone input');
    const orderText = order.querySelector('.order__text textarea');
    const feedbackTelephone = document.querySelector('.feedback__telephone input');

    const onEscapeModalMenu = (evt) => {
      if (evt.key === 'Escape') {
        closeForm();
      }
    };

    const onClickOverlay = function () {
      closeForm();
    };

    const onClickMenuClose = function () {
      closeForm();
    };

    const onSubmitForm = function (evt) {

      if (!orderName.value || !orderPhone.value || !orderText.value) {
        evt.preventDefault();
      } else {
        if (isStorageSupport) {
          localStorage.setItem('FIO', orderName.value);
          localStorage.setItem('phone', orderPhone.value);
        }
      }
    };

    const closeForm = function () {
      order.classList.remove('order--show');
      document.body.classList.remove('body--overflow-hidden');
      orderClose.removeEventListener('click', onClickMenuClose);
      order.removeEventListener('click', onClickOverlay);
      orderForm.removeEventListener('submit', onSubmitForm);
      if (under) {
        under.classList.remove('under--show');
        under.removeEventListener('click', onClickOverlay);
      }

      mainHeaderOrder.addEventListener('click', onClickMainHeaderOrder);
    };


    if (feedbackTelephone) {
      new window.IMask(feedbackTelephone, maskOptions);
    }

    if (orderPhone) {
      new window.IMask(orderPhone, maskOptions);
    }

    let isStorageSupport = true;
    let storageFIO = '';
    let storagePhone = '';

    try {
      storageFIO = localStorage.getItem('FIO');
      storagePhone = localStorage.getItem('phone');
    } catch (err) {
      isStorageSupport = false;
    }

    const orderClose = order.querySelector('.order__close');

    onClickMainHeaderOrder = function (evtClick) {

      if (evtClick) {
        evtClick.preventDefault();
      }

      mainHeaderOrder.removeEventListener('click', onClickMainHeaderOrder);

      order.classList.add('order--show');
      document.body.classList.add('body--overflow-hidden');

      orderForm.addEventListener('submit', onSubmitForm);
      orderClose.addEventListener('click', onClickMenuClose);
      document.addEventListener('keydown', onEscapeModalMenu);

      if (under) {
        under.classList.add('under--show');
        under.addEventListener('click', onClickOverlay);
      }

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

  const onLoadSite = function () {

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

  window.addEventListener('load', onLoadSite);

})();
