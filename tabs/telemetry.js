'use strict';

const path = require('path');
const Store = require('electron-store');
const store = new Store()

const MSPChainerClass = require('./../js/msp/MSPchainer');
const mspHelper = require('./../js/msp/MSPHelper');
const MSPCodes = require('./../js/msp/MSPCodes');
const MSP = require('./../js/msp');
const { GUI, TABS } = require('./../js/gui');
const tabs = require('./../js/tabs');
const FC = require('./../js/fc');
const Settings = require('./../js/settings');
const i18n = require('./../js/localization');
const { scaleRangeInt } = require('./../js/helpers');
const interval = require('./../js/intervals');

TABS.telemetry = {
    rateChartHeight: 117
};

TABS.telemetry.initialize = function (callback) {

    var loadChainer = new MSPChainerClass();

    var loadChain = [
        mspHelper.loadPidData,
        mspHelper.loadRateDynamics,
        mspHelper.loadRateProfileData,
        mspHelper.loadEzTune,
        mspHelper.loadMixerConfig,
    ];

    loadChainer.setChain(loadChain);
    loadChainer.setExitPoint(load_html);
    loadChainer.execute();

    if (GUI.active_tab != 'telemetry') {
        GUI.active_tab = 'telemetry';
    }

    function load_html() {
        GUI.load(path.join(__dirname, "telemetry.html"));
    }

};

TABS.telemetry.cleanup = function (callback) {
    if (callback) {
        callback();
    }
};
