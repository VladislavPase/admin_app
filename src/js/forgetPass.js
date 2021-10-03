import $ from 'jquery';

$(window).on('load', function () {
    let forgetPassLink = $('.forget-pass');

    const setIconPosition = () => {

        if (forgetPassLink.length) {
            let showIcon = forgetPassLink.parent().find('.show-pass');

            let padding = parseInt(forgetPassLink.parent().find('input').css('padding-left')) + 5;

            showIcon.css({
                right: forgetPassLink.outerWidth() + padding + 'px'
            });
        }
    };

    setIconPosition();

    $(window).on('resize', setIconPosition);
});
