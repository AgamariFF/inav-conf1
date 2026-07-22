'use strict';

const path = require('path');
const { GUI, TABS } = require('./../js/gui');
// const i18n = require('./../js/localization');

const sv = {};
sv.initialize = function (callback) {

    if (GUI.active_tab != 'sv') {
        GUI.active_tab = 'sv';
    }
    GUI.load(path.join(__dirname, "sv.html"), function () {
        GUI.content_ready(callback);
    });

};

sv.cleanup = function (callback) {
    if (callback) callback();
};

TABS.sv = sv;