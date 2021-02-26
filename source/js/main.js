'use strict';

(function () {

  const order = document.querySelector('.order');
  const footerFirstParts = document.querySelector('.footer-first__parts');
  const footerFirstContacts = document.querySelector('.footer-first__contacts');

  if (order) {

    const mainHeaderOrder = document.querySelector('.main-header__order');
    const orderClose = order.querySelector('.order__close');
    // const menuItems = order.querySelectorAll('.order__item');

    const onClickMainHeaderOrder = function (evtClick) {

      if (evtClick) {
        evtClick.preventDefault();
      }

      const onEscapeModalMenu = (evt) => {
        if (evt.key === 'Escape') {
          onMenuClose();
        }
      };

      const onClickMenuClose = function () {
        onMenuClose();
      };

      const onMenuClose = function () {
        order.classList.remove('order--show');
        document.body.classList.remove('body--overflow-hidden');
        orderClose.removeEventListener('click', onClickMenuClose);
        // for (let i = 0; i < menuItems.length; i++) {
        //   menuItems[i].removeEventListener('click', onMenuClose);
        // }

        mainHeaderOrder.addEventListener('click', onClickMainHeaderOrder);
      };

      mainHeaderOrder.removeEventListener('click', onClickMainHeaderOrder);

      order.classList.add('order--show');
      document.body.classList.add('body--overflow-hidden');


      orderClose.addEventListener('click', onClickMenuClose);
      document.addEventListener('keydown', onEscapeModalMenu);

      // for (let i = 0; i < menuItems.length; i++) {
      //   menuItems[i].addEventListener('click', onMenuClose);
      // }
    };

    const onClickMainFooterFirstParts = function () {

      if (footerFirstParts.classList.contains('footer-first__parts--closed')) {
        footerFirstParts.classList.remove('footer-first__parts--closed');
        footerFirstParts.classList.add('footer-first__parts--open');
      } else {
        footerFirstParts.classList.remove('footer-first__parts--open');
        footerFirstParts.classList.add('footer-first__parts--closed');
      }
    }

    const onClickMainFooterFirstContacts = function () {

      if (footerFirstContacts.classList.contains('footer-first__contacts--closed')) {
        footerFirstContacts.classList.remove('footer-first__contacts--closed');
        footerFirstContacts.classList.add('footer-first__contacts--open');
      } else {
        footerFirstContacts.classList.remove('footer-first__contacts--open');
        footerFirstContacts.classList.add('footer-first__contacts--closed');
      }
    }

    const initSite = () => {

      if (footerFirstParts) {
        footerFirstParts.classList.add('footer-first__parts--closed');
        footerFirstParts.addEventListener('click', onClickMainFooterFirstParts);
      }
      if (footerFirstContacts) {
        footerFirstContacts.classList.add('footer-first__contacts--closed');
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
  }
})();
