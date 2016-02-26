(function() {
  var $overlay;

  function open() {
    $('.hamburger-menu').addClass('show');
    $overlay.addClass('show');
  }

  function close() {
    $('.hamburger-menu').removeClass('show');
    $overlay.removeClass('show');
  }

  function appendOverlay() {
    // Overlay is hidden by default
    var overlay = $('<div class="hamburger-menu-overlay" data-hamburger-action="close"></div>')
    overlay.appendTo("body");
    return overlay;
  }

  function init() {
    $overlay = appendOverlay();

    // Add event listeners
    $('body').on('click', '[data-hamburger-action="open"]', open);
    $('body').on('click', '[data-hamburger-action="close"]', close);
  }

  $(init);
})();
