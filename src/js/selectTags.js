import SelectPure from './libs/pureselect.min';

// https://www.cssscript.com/multi-select-autocomplete-selectpure/


let instance = new SelectPure('.available-news', {
    options: [
        {
            label: 'новость 1',
            value: 'news_1',
        },
        {
            label: 'новость 2',
            value: 'news_2',
        },
        {
            label: 'новость 3',
            value: 'news_3',
        },
        {
            label: 'новость 4',
            value: 'news_4',
        },
        {
            label: 'новость 5',
            value: 'news_5',
        },
    ],
    value: ['news_5'],
    icon: 'x',
    autocomplete: true,
    multiple: true
});
