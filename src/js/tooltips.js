import $ from 'jquery';

$(document).ready(function () {

    let elem = $('.action-elem');

    elem.on('mousemove', function () {

        let actionName = $(this).data('action-name');
        let tooltip = $('.tooltip');

        if (tooltip.length) {
            return
        } else {
            if (actionName) {
                let y = $(this).offset().top + $(this).outerHeight() + 10;
                let x = $(this).offset().left + $(this).outerWidth();

                let HTML = `<div class="tooltip" style="top: ${y}px; left: ${x}px; transform: translateX(-100%)">${ actionName }</div>`;

                $('body').append(HTML);
            }
        }

    });

    elem.on('mouseleave', function () {
        let tooltip = $('.tooltip');

        tooltip.hide();
        setTimeout(() => tooltip.remove(), 100);
    });
});
