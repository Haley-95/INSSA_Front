function init() {
    create();
    addEvent();
}

var outlined1IconS;
var outlined1IconM;
var outlined1IconL;

function create() {
    outlined1IconS = $('.btn_icon_s.outlined1:not(.disabled)');
    outlined1IconSImg = $('.btn_icon_s.outlined1:not(.disabled) span');
    outlined1IconM = $('.btn_icon_m.outlined1:not(.disabled)');
    outlined1IconMImg = $('.btn_icon_m.outlined1:not(.disabled) span');
    outlined1IconL = $('.btn_icon_l.outlined1:not(.disabled)');
    outlined1IconLImg = $('.btn_icon_l.outlined1:not(.disabled) span');
}

function addEvent() {
    outlined1IconDown();
    outlined1IconClick();
    outlined1IconHover();
}

function outlined1IconHover() {
    $(outlined1IconS).hover(
        function () {
            $(outlined1IconSImg).css('background', "url('/assets/images/common/icon24/caret-left.png') no-repeat");
        },
        function () {
            $(outlined1IconSImg).css('background', "url('/assets/images/common/icon24/orange-caret-left.png') no-repeat");
        }
    );

    $(outlined1IconM).hover(
        function () {
            $(outlined1IconMImg).css('background', "url('/assets/images/common/icon32/caret-left.png') no-repeat");
        },
        function () {
            $(outlined1IconMImg).css('background', "url('/assets/images/common/icon32/orange-caret-left.png') no-repeat");
        }
    );

    $(outlined1IconL).hover(
        function () {
            $(outlined1IconLImg).css('background', "url('/assets/images/common/icon32/caret-left.png') no-repeat");
        },
        function () {
            $(outlined1IconLImg).css('background', "url('/assets/images/common/icon32/orange-caret-left.png') no-repeat");
        }
    );
}

function outlined1IconDown() {
    $(outlined1IconS).mousedown(function () {
        $(outlined1IconSImg).css('background', "url('/assets/images/common/icon24/orange-caret-left.png') no-repeat");
    });
    $(outlined1IconM).mousedown(function () {
        $(outlined1IconMImg).css('background', "url('/assets/images/common/icon32/orange-caret-left.png') no-repeat");
    });
    $(outlined1IconL).mousedown(function () {
        $(outlined1IconLImg).css('background', "url('/assets/images/common/icon32/orange-caret-left.png') no-repeat");
    });
}

function outlined1IconClick() {
    $(outlined1IconS).click(function () {
        $(outlined1IconSImg).css('background', "url('/assets/images/common/icon24/caret-left.png') no-repeat");
    });
    $(outlined1IconM).click(function () {
        $(outlined1IconMImg).css('background', "url('/assets/images/common/icon32/caret-left.png') no-repeat");
    });
    $(outlined1IconL).click(function () {
        $(outlined1IconLImg).css('background', "url('/assets/images/common/icon32/caret-left.png') no-repeat");
    });
}

$(function () {
    init();
});
