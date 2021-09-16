import $ from 'jquery';

let pageTypeInputs = $('input[name="page_type"]');
let availableNewsFilter = $('.available-news');
let headerInput = $('.filter').find('input.filter__item');

headerInput.on('keyup', function () {
   $(this).parents('.filter').find('.dropdown-item').removeClass('_checked');
   $(this).parents('.filter').removeClass('_selected');
   $(this).parents('.filter').find('.dropdown-item').find('input:checked').prop('checked', false);
});

$('.form__filter--body .filter__item').on('click', function () {
    let selected_text = $(this).text();
    let header_select = $(this).parents('.filter._opened').find('.filter__header--title');
    let toggle = $(this).parents('.add-popup-form').find('input[name="domonetization"]');
    let headerInputChanged = $(this).parents('.filter').find('input.filter__item');

    $('.form__filter--body .filter__item').removeClass('_checked');
    $(this).addClass('_checked');

    header_select.text(selected_text);
    $(this).parents('.filter').addClass('_selected');
    $(this).parents('.filter._opened').removeClass('_opened');
    headerInputChanged.val(selected_text);

    if ($(this).find(pageTypeInputs).val() === 'long_news' || $(this).find(pageTypeInputs).val() === 'short_news') {

        availableNewsFilter.removeClass('js-hidden');
        toggle.removeAttr('disabled');

    }else if ($(this).find(pageTypeInputs).val() === 'domonetization') {
        availableNewsFilter.addClass('js-hidden');
        toggle.prop('checked', false);
        toggle.attr('disabled', 'true');
    }
});
