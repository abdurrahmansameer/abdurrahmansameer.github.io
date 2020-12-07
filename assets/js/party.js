$('.like__btn').on('click', function(){
  // Check if it's already been clicked
  if (!$(this).hasClass('like__btn--disabled')) {
    // Update the number
    updated_likes = parseInt($('.like__btn span').html()) + 1;
    $('.like__btn span').html(updated_likes);
   }
  // Make btn disabled
  $(this).attr('disabled', true).addClass('tada');
});