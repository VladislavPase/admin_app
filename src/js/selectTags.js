var SelectPure=function(){"use strict";const t={value:"data-value",disabled:"data-disabled",class:"class",type:"type"};class e{constructor(t,e={},s={}){return this._node=t instanceof HTMLElement?t:document.createElement(t),this._config={i18n:s},this._setAttributes(e),e.textContent&&this._setTextContent(e.textContent),this}get(){return this._node}append(t){return this._node.appendChild(t),this}addClass(t){return this._node.classList.add(t),this}removeClass(t){return this._node.classList.remove(t),this}toggleClass(t){return this._node.classList.toggle(t),this}addEventListener(t,e){return this._node.addEventListener(t,e),this}removeEventListener(t,e){return this._node.removeEventListener(t,e),this}setText(t){return this._setTextContent(t),this}getHeight(){return window.getComputedStyle(this._node).height}setTop(t){return this._node.style.top=`${t}px`,this}focus(){return this._node.focus(),this}_setTextContent(t){this._node.textContent=t}_setAttributes(e){for(const s in e)t[s]&&e[s]&&this._setAttribute(t[s],e[s])}_setAttribute(t,e){this._node.setAttribute(t,e)}}var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t};return class{constructor(t,i){this._config=s({},i),this._state={opened:!1},this._icons=[],this._boundHandleClick=this._handleClick.bind(this),this._boundUnselectOption=this._unselectOption.bind(this),this._boundSortOptions=this._sortOptions.bind(this),this._body=new e(document.body),this._create(t),this._setValue()}_create(t){const s="string"==typeof t?document.querySelector(t):t;this._parent=new e(s),this._select=new e("div",{class:"select-pure__select"}),this._label=new e("span",{class:"select-pure__label"}),this._optionsWrapper=new e("div",{class:"select-pure__options"}),this._config.multiple&&this._select.addClass("select-pure__select--multiple"),this._options=this._generateOptions(),this._select.addEventListener("click",this._boundHandleClick),this._select.append(this._label.get()),this._select.append(this._optionsWrapper.get()),this._parent.append(this._select.get())}_generateOptions(){return this._config.autocomplete&&(this._autocomplete=new e("input",{class:"select-pure__autocomplete",type:"text"}),this._autocomplete.addEventListener("input",this._boundSortOptions),this._optionsWrapper.append(this._autocomplete.get())),this._config.options.map(t=>{const s=new e("div",{class:"select-pure__option",value:t.value,textContent:t.label,disabled:t.disabled});return this._optionsWrapper.append(s.get()),s})}_handleClick(t){if(t.stopPropagation(),"select-pure__autocomplete"!==t.target.className){if(this._state.opened){const e=this._options.find(e=>e.get()===t.target);return e&&this._setValue(e.get().getAttribute("data-value"),!0),this._select.removeClass("select-pure__select--opened"),this._body.removeEventListener("click",this._boundHandleClick),this._select.addEventListener("click",this._boundHandleClick),void(this._state.opened=!1)}t.target.className!==this._config.icon&&(this._select.addClass("select-pure__select--opened"),this._body.addEventListener("click",this._boundHandleClick),this._select.removeEventListener("click",this._boundHandleClick),this._state.opened=!0,this._autocomplete&&this._autocomplete.focus())}}_setValue(t,e,s){if(t&&!s&&(this._config.value=this._config.multiple?this._config.value.concat(t):t),t&&s&&(this._config.value=t),this._options.forEach(t=>{t.removeClass("select-pure__option--selected")}),this._config.multiple){const t=this._config.value.map(t=>{const e=this._config.options.find(e=>e.value===t);return this._options.find(t=>t.get().getAttribute("data-value")===e.value).addClass("select-pure__option--selected"),e});return void this._selectOptions(t,e)}const i=this._config.value?this._config.options.find(t=>t.value===this._config.value):this._config.options[0];this._options.find(t=>t.get().getAttribute("data-value")===i.value).addClass("select-pure__option--selected"),this._selectOption(i,e)}_selectOption(t,e){this._selectedOption=t,this._label.setText(t.label),this._config.onChange&&e&&this._config.onChange(t.value)}_selectOptions(t,s){this._label.setText(""),this._icons=t.map(t=>{const s=new e("span",{class:"select-pure__selected-label",textContent:t.label}),i=new e("i",{class:this._config.icon,value:t.value});return i.addEventListener("click",this._boundUnselectOption),s.append(i.get()),this._label.append(s.get()),i.get()}),s&&this._optionsWrapper.setTop(Number(this._select.getHeight().split("px")[0])+5)}_unselectOption(t){const e=[...this._config.value],s=e.indexOf(t.target.getAttribute("data-value"));-1!==s&&e.splice(s,1),this._setValue(e,!0,!0)}_sortOptions(t){this._options.forEach(e=>{e.get().textContent.toLowerCase().startsWith(t.target.value.toLowerCase())?e.removeClass("select-pure__option--hidden"):e.addClass("select-pure__option--hidden")})}}}();


// https://www.cssscript.com/multi-select-autocomplete-selectpure/

let header = document.querySelector('.available-news .filter__header--inner');
let options_items = [...document.querySelectorAll('.js-news-option')];
let close = document.querySelector('.news-label .close');

const select_options = (e) => {
    let value = e.target.dataset.value;
    let text = e.target.textContent;

    let tag = `<span class="news-label" data-value="${value}">${text}<i class="close"></i></span>`;

    header.innerHTML = tag;
};

const deleteSelected = (e) => {
    e.target.parentElement.remove();

    options_items.forEach(el => {
        el.classList.remove('_checked');
    });

    header.textContent = '?????????????????? ??????????????';
    document.querySelector('.available-news .filter').classList.remove('_selected');
};

document.addEventListener('click', function (e) {
    e.stopPropagation();

    if (e.target.classList.contains('close')) {
        deleteSelected(e);
    }
});

if (options_items) {
    options_items.forEach(option => {
        option.addEventListener('click', select_options);
    });
}

let input = document.querySelector('.available-news .news-label');

if (input) {
    input.addEventListener('keyup',  e => {
        let value = e.target.value;

        console.log(value)

        options_items.forEach(el => {
            if (el.textContent === value) {

            }
        });
    });
}

// new SelectPure('.available-news', {
//     options,
//     placeholder: '?????????????????? ??????????????',
//     icon: 'close',
//     value: ['news_5'],
//     autocomplete: true,
//     multiple: true
// });
