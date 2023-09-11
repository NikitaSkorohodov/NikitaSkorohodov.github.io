$(document).ready(function () {
    $('.keys').keydown(function (event) {
        var key = $('.key[data-key=' + event.which + ']');
        var audio = $('audio[data-key=' + event.which + ']')[0];
        key.toggleClass('playing');
        if (!audio) return;
        audio.play();
        audio.currentTime = 0;
    });

    $('.keys').keyup(function (event) {
        var key = $('.key[data-key=' + event.which + ']');
        key.toggleClass('playing');
    });
});
