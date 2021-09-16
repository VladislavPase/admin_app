import jquery from 'jquery';
export default (window.$ = window.jQuery = jquery);
require('@fancyapps/fancybox');

(function ($, window) {
    $("._js-popup-trigger[data-fancybox]").fancybox({
        beforeLoad: function(instance, slide) {
            let type = slide.opts.$orig.data('item-type');
            let title = slide.opts.$orig.data('item-title');
            let input = [...$('input[name="page_type"]')];
            input.forEach(el => {
                if (el.value === type) {
                    let text = $(el).parent().text()
                    $(el).prop('checked', true);
                    $(el).parent().addClass('_checked');
                    $(el).parents('.filter').find('.filter__header--title').text(text);
                    $(el).parents('.filter').addClass('_selected js-disabled');
                    $('.available-news').removeClass('js-hidden');
                    $('.available-news').find('.filter__item').val(title);
                    $('.available-news').find('.filter').addClass('_selected js-disabled');
                }
            });
        }
    });
})(jquery, window);


