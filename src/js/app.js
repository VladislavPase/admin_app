import jquery from 'jquery';
export default (window.$ = window.jQuery = jquery);
require('@fancyapps/fancybox');

(function ($, window) {
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

        $('.header__notifications')
            .mouseover(function() {
                $(this).addClass('_opened');
            })
            .mouseout(function() {
                $(this).removeClass('_opened');
            });

        $('.setting-trigger .statistics__table--settings-link').on('click', function (e) {
            e.preventDefault();
            $(this).parent().toggleClass('_opened');
        });

        let input = $('input.input');

        input.focus(function (e) {
            $(e.target).addClass('_focus');
        });

        input.keyup(function (e) {
            let val = e.target.value;
            if (val.length) {
                $(e.target).addClass('_valid');
            } else {
                $(e.target).removeClass('_valid');
            }
        });

        input.focusout(function (e) {
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

        function filter(trigger, wrappers) {
            $(document).on('click', trigger, function (e){
                e.preventDefault();

                $(wrappers).removeClass('_active');
                $(trigger).removeClass('_active');

                let href = $(e.target).data('href');
                $(e.target).addClass('_active');

                let containers = $(wrappers);

                for (let i = 0; i < containers.length; i++) {
                    let target = containers[i];
                    if ($(target).data('target') === href) {
                        $(target).addClass('_active');
                    }
                }
            });
        }

        filter('.streams__tab--link', '.streams__content--inner');
        filter('.parking__tab--link', '.parking__content--inner');

        let post_back_input = $('input[name="post_back"]');
        let post_back_text = $('.popup__postback--text');

        post_back_input.change(function () {
            if ($(this).is(':checked')) {
                post_back_text.show();
            } else {
                post_back_text.hide();
            }
        });

        $('[data-action="archive"]').on('click', function () {
            $.fancybox.open({
                src: '#archivePopup',
                touch: false
            });
        });
    });
})(jquery, window);
