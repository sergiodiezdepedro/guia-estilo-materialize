$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('select').material_select();
  $(document).ready(function() {
    $('.carousel').carousel();
  });
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  $('.collapsible').collapsible();
  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: true, // Displays dropdown below the button
    alignment: 'left', // Displays dropdown with edge aligned to the left of button
    // stopPropagation: false // Stops event propagation
  });
  $('.materialboxed').materialbox();
  $('.slider').slider();
  $('#modal1').modal();
  $('#modal2').modal();
  $('#modal3').modal();
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();
  $('ul.tabs').tabs();
});
