'use strict';

const inflection = require( 'inflection' );
const fs = require('fs');
const path = require('path');
const semver = require('semver');
const mapSeries = require('promise-map-series');
const { dialog } = require("@electron/remote");
const Store = require('electron-store');
const store = new Store();
const tabs = require('./../js/tabs')

const FC = require('./../js/fc');
const { GUI, TABS } = require('./../js/gui');
const MSP = require('./../js/msp');
const MSPCodes = require('./../js/msp/MSPCodes');
const mspHelper = require('./../js/msp/MSPHelper');
const Settings = require('./../js/settings');
const { globalSettings } = require('./../js/globalSettings');
const { PortHandler } = require('./../js/port_handler');
const i18n = require('./../js/localization');
const jBox = require('./../js/libraries/jBox/jBox.min');
const { Console } = require('console');

TABS.telemetry = {};

TABS.telemetry.initialize = function(callback) {
    const self = this;
    GUI.load("tabs/telemtry.html", function () {
        function loadSubTab(name) {
            switch (name) {
                case "osd":
                    GUI.load("tabs/osd.html", function () {
                        TABS.osd.initialize(callback);
                    });
                    break;
                case "receiver":
                    GUI.load("tabs/receiver.html", function () {
                        TABS.osd.initialize(callback);
                    });
                    break;
                case "sensors":
                    GUI.load("tabs/sensors.html", function () {
                        TABS.osd.initialize(callback);
                    });
                    break;
            }
        }
    })
    return TABS.osd.initialize(callback);
};

TABS.telemetry.cleanup = function(callback) {
    return TABS.osd.cleanup(callback);
};