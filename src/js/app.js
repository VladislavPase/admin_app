import jquery from 'jquery';
export default (window.$ = window.jQuery = jquery);
require('@fancyapps/fancybox');
require('./libs/daterangepicker');
import moment from 'moment';
import 'moment/locale/ru';

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

(function ($, window) {
    $(document).ready(function () {

        let info_nums = document.querySelectorAll('.account-info__item--value .value');
        let header_nums = document.querySelectorAll('.header__account--value .value');

        info_nums.forEach(el => {
            el.innerText = numberWithSpaces(el.innerText);
        });

        header_nums.forEach(el => {
            el.innerText = numberWithSpaces(el.innerText);
        });

        let start = moment().subtract(29, 'days');
        let end = moment();

        function cb(start, end) {
            $('.calendar-trigger .value').html(start.format('DD.MM.YYYY') + ' - ' + end.format('DD.MM.YYYY'));
        }

        let date_input = $('input[name="date"]');

        date_input.daterangepicker({
            startDate: start,
            endDate: end,
            ranges: {
                'Сегодня': [moment(), moment()],
                'Вчера': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Последние 3 дня': [moment().subtract(3, 'days'), moment()],
                'Последние 7 дней': [moment().subtract(7, 'days'), moment()],
                'Текущий месяц': [moment().startOf('month'), moment().endOf('month')],
                'Прошедший месяц': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
        }, cb);

        cb(start, end);

        date_input.on('click', function () {
            $(this).parents('.calendar-trigger').addClass('_active');
        });

        $('.filter__header').on('click', function () {
            $('.filter').removeClass('_opened');
            $(this).toggleClass('_active');
            $(this).parent('.filter').toggleClass('_opened');
        });

        let calculateRecordPosition = (e) => {

            let target = $(e.target);

            let windowHeight = $(window).height();
            let $this = target.parent('.record-count');
            let item = $this.children('.record-count__options');
            let triangle = item.children('.triangle-with-shadow');
            let itemOffsetTop = $this.offset().top;

            let containerHeight = $this.outerHeight();
            let containerWidth = $this.outerWidth();


            let Y = $(item).offset().top;
            let X = $(item).offset().left;

            let itemHeight = item.outerHeight();
            let top = itemOffsetTop + containerHeight + 12 + 'px';
            let left = X + $this.offset().left + containerWidth - $(item).outerWidth();

            if (!$this.hasClass('_opened')) {
                if ((itemOffsetTop + itemHeight + Y) > windowHeight) {
                    top = itemOffsetTop - itemHeight - containerHeight - $(window).scrollTop() + 'px';


                    triangle.css({
                        top: 'auto',
                        bottom: -triangle.outerHeight() + 'px',
                        transform: 'rotate(180deg)'
                    });
                }

                item.css({
                    top,
                    left
                });

                $this.addClass('_opened');

            } else {
                $this.removeClass('_opened');
            }
        };

        $('.record-count__value')
            .click((e) => calculateRecordPosition(e));

        $('.record-count__options')
            .mouseleave(function (e) {
                e.stopPropagation();

                let $this = $(this).parent('.record-count');
                let item = $(this);
                let children = $('.record-count__option');

                if ($(e.target).closest($this) && $(e.target).closest(children)) {
                    item.removeAttr('style');
                    $this.removeClass('_opened');
                }
            });


        $('.record-count__option').on('click', function (e) {
            e.stopPropagation();
            $('.record-count__option').removeClass('_selected');
            $(this).toggleClass('_selected');
            $('.record-count__options').removeAttr('style');
            $('.record-count').removeClass('_opened');
            $('.record-count__value .value').text($(this).attr('rel'));
        });

        $('.header__notifications')
            .mouseover(function() {
                $(this).addClass('_opened');
            })
            .mouseout(function() {
                $(this).removeClass('_opened');
            });

        $('.header__profile')
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

        let dropDownButtonAccept = [...document.querySelectorAll('button.dropdown-accept')];
        let dropDownButtonCancel = [...document.querySelectorAll('button.dropdown-cancel')];
        let filterHeaderTitle = document.querySelectorAll('.js-control-filter .filter__header--title');

        if (filterHeaderTitle) {
            filterHeaderTitle.forEach(title => {
                title.style.width = title.clientWidth + 'px';
            });
        }

        if (dropDownButtonAccept) {
            dropDownButtonAccept.forEach(btn => {
                btn.addEventListener('click', function () {
                    let inputs = $(this).parents('.dropdown-body').find('input');
                    let checked_inputs = [];

                    inputs.each(function () {
                        if ($(this).is(':checked')) {
                            checked_inputs.push($(this).attr('value'));
                        }
                    });

                    let title = $(this).parents('.filter').find('.filter__header--title');
                    title.addClass('js-selected');
                    title.text(checked_inputs.length === 0 ? this.dataset.type : checked_inputs.join(', '));

                    $(this).parents('.filter').removeClass('_opened');
                });
            });
        }

        if (dropDownButtonCancel) {
            dropDownButtonCancel.forEach(btn => {
                btn.addEventListener('click', function () {
                    let inputs = $(this).parents('.dropdown-body').find('input');
                    let filterName = $(this).parents('.filter').data('type');

                    inputs.each(function () {
                        if ($(this).is(':checked')) {
                            inputs.prop('checked', false);
                        }
                    });

                    let title = $(this).parents('.filter').find('.filter__header--title');
                    title.removeClass('js-selected');
                    title.text(filterName);
                });
            });
        }

        $('.form__filter--body .filter__item').on('click', function () {
            let selected_text = $(this).text();
            let header_select = $(this).parents('.filter._opened').find('.filter__header--title');

            header_select.text(selected_text);
            $(this).parents('.filter').addClass('_selected');
            $(this).parents('.filter._opened').removeClass('_opened');
        });

        // $('.filter').mouseleave(function () {
        //     $(this).removeClass('_opened');
        // });

        let input = $('input.input');

        input.focus(function (e) {
            $(e.target).addClass('_focus');
            $(e.target).removeClass('_focusout');
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
            $(e.target).addClass('_focusout');
        });

        for(let i = 0; i < input.length; i++) {
            if ($(input[i]).val().length > 0) {
                $(input[i]).addClass('_focus');
            }
        }

        $('.faq__item--toggler').on('click', function () {
            $(this).parents('.faq__item').toggleClass('_opened');
            $(this).parents('.faq__item').find('.faq__item--body').slideToggle(400);
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
        filter('.profile__tab--link', '.profile__content--inner');
        filter('.auth__tab--link', '.auth__form-wrapper');

        function checkInputs(input, selector_text) {
            $(input).change(function () {
                if ($(this).is(':checked')) {
                    $(selector_text).show();
                } else {
                    $(selector_text).hide();
                }
            });
        }

        checkInputs('input[name="post_back"]', '.popup__postback--text');
        checkInputs('input[name="back_btn"]', '.domonetization__info--item[data-text="back_btn"]');
        checkInputs('input[name="redirect"]', '.domonetization__info--item[data-text="redirect"]');
        checkInputs('input[name="push_base"]', '.domonetization__info--item[data-text="push_base"]');

        $('[data-action="archive"]').on('click', function () {
            $.fancybox.open({
                src: '#archivePopup',
                touch: false
            });
        });

        $('[data-action="edit"]').on('click', function () {
            $.fancybox.open({
                src: '#editStream',
                touch: false
            });
        });

        $('.profile__form .filter__body .filter__item').on('click', function () {
            let selected_text = $(this).find('label').text();
            let header_select = $(this).parents('.filter._opened').find('.filter__header');

            header_select.text(selected_text);
            $(this).parents('.filter').addClass('_selected');
            $(this).parents('.filter._opened').removeClass('_opened');
        });

        if ($('.profile__form .filter__header').text()) {
            $('.profile__form .filter__header').parents('.filter').addClass('_selected');
        }

        const handlersFormExist = (e, selector, triggerClass) => {
            if (!$(e.target).closest(selector).length ) {
                $(selector).removeClass(triggerClass);
            }
        };

        $(document).on('click', (e) => handlersFormExist(e, '.filter', '_opened'));
        $(document).on('click', (e) => handlersFormExist(e, '.settings-item', '_opened'));
        $(document).on('click', (e) => handlersFormExist(e, '.record-count', '_opened'));
        $(document).on('click', (e) => handlersFormExist(e, '.calendar-trigger', '_active'));

        $('.show-pass').on('click', function () {
            let input = $(this).parent('.fieldset').find('input');

            if (input.attr('type') === 'password') {
                input.attr('type', 'text');
                $(this).addClass('_showed');
            } else {
                input.attr('type', 'password');
                $(this).removeClass('_showed');
            }
        });

        $('.helper')
            .mouseover(function () {
                let text = $(this).data('text');
                let top = $(this).offset().top + 10 + 'px';
                let left = $(this).offset().left + 10 + 'px';


                $(this).append(
                    `<div class="helper-text">
                        ${text}
                    </div>`
                );

                $('.helper-text').css({
                    top,
                    left,
                });
            })
            .mouseout(function () {
                $('.helper-text').remove();
            });

        $(document).on('click', '[data-action="copy"]',function (e) {
            let value = $(this).data('value');

            if (!navigator.clipboard) {
                return;
            }

            navigator.clipboard.writeText(value).then(function() {
                console.log('Async: Copying to clipboard was successful! ' + value);
            }, function(err) {
                console.error('Async: Could not copy text: ', err);
                return;
            });

            $(this).addClass('success__copy');

            let crd = this.getBoundingClientRect();
            let x = crd.x;
            let y = crd.y;

            $('body').append(`<div class="success-copy-tooltip" style="top: ${y + 26}px; left: ${x - 50}px">Скопировано!</div>`);
            setTimeout(() => {
                $(document).find('.success-copy-tooltip').remove();
            }, 2000);
        });

        $(document).on('click' ,function () {
            let datepicker = document.querySelector('.daterangepicker');
            let html = document.querySelector('html');

            if (datepicker.style.display === 'block') {
                html.style.overflow = 'hidden';
            } else {
                html.style.overflow = '';
            }
        });

        $('input[name="pay_sum"]').keyup(function (e) {
            let value =  parseFloat($(e.target).val());
            let convert_input = $(e.target).parents('.popup__form').find('input[name="dollar_convert"]');

            if (!value) {
                value = 0;
            }

            convert_input.val('$' + value * 70);
        });

        $('.finances-form').on('submit', function (e) {
            e.preventDefault();

            $.fancybox.close();
            $('.success_cash').addClass('_showed');

            setTimeout(() => {
                $('.success_cash').removeClass('_showed');
            }, 3000);
        });

        $(window).resize(function () {
            $('.record-count__options').removeAttr('style');
            $('.record-count').removeClass('_opened');
            $('.helper-text').remove();
        });

        $('.burger').on('click', function () {
           $('.sidebar').toggleClass('_active');
           $(this).toggleClass('_active');
        });
    });

})(jquery, window);
