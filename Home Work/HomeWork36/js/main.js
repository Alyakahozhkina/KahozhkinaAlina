




jQuery(document).ready(function(){
    jQuery(".header__btn-order").click(function(){
        jQuery(".modal").fadeIn();
    });

    jQuery(".modal__close").click(function() {
        jQuery(".modal").fadeOut();
    });

    jQuery(".modal").click(function(event){
        if(jQuery(event.target).closest(".modal__content").length === 0) {
        jQuery(this).fadeOut();
        }
    });

    jQuery(".details-label").click(function() {
        jQuery(".details").slideToggle(300);
    })



});