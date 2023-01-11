function init() {
    create();
    addEvent();
}

var inputText;

function create() {
    inputText = $('input[type="text"]');
}

function addEvent() {
    $(inputText).on('input', valueExists);
}

function valueExists() {
    if ($(inputText).val() !== '') {
        $(inputText).css('border');
    }
}

$(function () {
    init();
});
