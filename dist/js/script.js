$(document).ready(function(){
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST", 
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            // $('#consultation, #order').fadeOut();
            // $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

});


const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuLink = document.querySelectorAll('.menu__link'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLink.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

