// smooth scrolling
$('#main-header a').on('click', function (e) {
    // check for # value
    if (this.has !== '') {
        e.preventDefault();

        // store # on variable
        const hash = this.hash;

        // animate smooth scroll
        $('html, body').animate({
            scrollTop: $(hash).offset().top

        }, 900, function () {
            // add hash t url after the scroll
            window.location.hash = hash;

        });
    }
});