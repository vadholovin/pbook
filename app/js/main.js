'use strict';

document.addEventListener('DOMContentLoaded', function () {

  /**
   * lightGallery.js init
   */
  (function () {
    let galleries = document.querySelectorAll('.js-img-gallery');
    galleries = Array.prototype.slice.call(galleries, 0);
    
    galleries.forEach(function(gallery) {
      lightGallery(gallery);
    });
  })();

});


$(document).ready(function () {
  
  /**
   * Aside menu
   */
  $('.js-aside-menu-link').click(function (e) { 
    e.preventDefault();
    let toggler = $(this);

    if (toggler.next().css('visibility') === 'hidden') {
      $('.js-dropdown-menu').removeClass('is-open');
      $('.js-aside-menu-link').removeClass('is-active');
      toggler.addClass('is-active');
      toggler.next().addClass('is-open');
    } else {
      $('.js-dropdown-menu').removeClass('is-open');
      $('.js-aside-menu-link').removeClass('is-active');
    }
  });


  /**
   * Switchers
   */

  $('.js-correspondence, .js-freeze').click(function (e) { 
    e.preventDefault();
    let switcher = $(this);
    switcher.find('.fa-toggle-off').toggleClass('d-none');
    switcher.find('.fa-toggle-on').toggleClass('d-none');
  });
});