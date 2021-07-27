import $ from 'jquery';
$(document).ready(function () {
    $('.filter__header').on('click', function () {
        $(this).toggleClass('_active');
        $(this).parent('.filter').toggleClass('_opened');
    });

    $('.record-count').on('click', function (e) {
        e.stopPropagation();
        let windowHeight = $(window).height();
        let item = $(this).children('.record-count__options');

        let containerHeight = $(this).outerHeight();
        let containerWidth = $(this).outerWidth();

        let Y = $(item).offset().top;
        let X = $(item).offset().left;

        let itemHeight = item.height() + parseFloat(item.css('padding-top')) + parseFloat(item.css('padding-bottom'));
        let top = $(this).offset().top + containerHeight + 12 + 'px';
        let left = X + $(this).offset().left + containerWidth - $(item).outerWidth() + 20;

        if (($(this).offset().top + itemHeight + Y) > windowHeight) {
            top = windowHeight - itemHeight - containerHeight - 40 + 'px';
        }

        item.css({
            top,
            left
        });
        $(this).toggleClass('_opened');
    });

    $('.record-option').on('click', function (e) {
        e.stopPropagation();
        $(this).toggleClass('_selected');
    });

    $('.header__notifications').on('click', function (e) {
        e.stopPropagation();
        $(this).toggleClass('_opened');
    });

    $('.setting-trigger .statistics__table--settings-link').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('_opened');
    });

    $('input.input').focus(function (e) {
        let val = e.target.value;
        $(e.target).addClass('_focus');
    });

    $('input.input').keyup(function (e) {
        let val = e.target.value;
        if (val.length) {
            $(e.target).addClass('_valid');
        } else {
            $(e.target).removeClass('_valid');
        }
    });

    $('input.input').focusout(function (e) {
        let val = e.target.value;
        if (val.length > 0) {
            $(e.target).addClass('_valid');
        } else {
            $(e.target).removeClass('_valid');
        }
        $(e.target).removeClass('_focus');
    });

    $('.faq__item--toggler').on('click', function () {
        $(this).parents('.faq__item').toggleClass('_opened');
        $(this).parents('.faq__item').find('.faq__item--body').slideToggle(400);
        $(this).toggleClass('_active');
    });

    $('.header__profile--link').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.header__profile').toggleClass('_opened');
        $(this).toggleClass('_active');
    });
});
