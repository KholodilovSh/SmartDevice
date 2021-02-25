'use strict';

(function () {

  const modal = document.querySelector('.modal');

  if (modal) {

    const footerFirstParts = document.querySelector('.footer-first__parts');
    const footerFirstContacts = document.querySelector('.footer-first__contacts');

    // const modalClose = modal.querySelector('.modal__close');
    // const menuItems = modal.querySelectorAll('.modal__item');

    const onClickMainHeaderButton = function () {

      const onEscapeModalMenu = (evt) => {
        if (evt.key === 'Escape') {
          onMenuClose();
        }
      };

      const onClickMenuClose = function () {
        onMenuClose();
      };

      const onMenuClose = function () {
        modal.classList.remove('modal--show');
        document.body.classList.remove('body--overflow-hidden');
        modalClose.removeEventListener('click', onClickMenuClose);
        for (let i = 0; i < menuItems.length; i++) {
          menuItems[i].removeEventListener('click', onMenuClose);
        }

        mainHeaderButton.addEventListener('click', onClickMainHeaderButton);
      };

      mainHeaderButton.removeEventListener('click', onClickMainHeaderButton);

      modal.classList.add('modal--show');
      document.body.classList.add('body--overflow-hidden');


      modalClose.addEventListener('click', onClickMenuClose);
      document.addEventListener('keydown', onEscapeModalMenu);

      for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', onMenuClose);
      }
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
    };

    window.addEventListener('load', initSite);

    window.main = {
      initSite
    };
  }
})();
