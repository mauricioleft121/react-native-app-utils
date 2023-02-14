"use strict";
exports.__esModule = true;
exports.PictureInPicture = exports.ScreenLock = exports.WifiLock = exports.PartialWakeLock = exports.WakeLock = exports.Activity = void 0;
var react_native_1 = require("react-native");
var UtilsModule = react_native_1.NativeModules.UtilsModule;
var EventEmitter = new react_native_1.NativeEventEmitter(UtilsModule);
function startActivity() { return UtilsModule.startActivity(); }
;
function moveActivityToBack() { return UtilsModule.moveActivityToBack(); }
;
exports.Activity = {
    start: startActivity,
    moveToBack: moveActivityToBack
};
function acquireWakeLock() { return UtilsModule.acquireWakeLock(); }
;
function releaseWakeLock() { return UtilsModule.releaseWakeLock(); }
;
exports.WakeLock = {
    acquire: acquireWakeLock,
    release: releaseWakeLock
};
function acquirePartialWakeLock() { return UtilsModule.acquirePartialWakeLock(); }
;
function releasePartialWakeLock() { return UtilsModule.releasePartialWakeLock(); }
;
exports.PartialWakeLock = {
    acquire: acquirePartialWakeLock,
    release: releasePartialWakeLock
};
function acquireWifiLock() { return UtilsModule.acquireWifiLock(); }
;
function releaseWifiLock() { return UtilsModule.releaseWifiLock(); }
;
exports.WifiLock = {
    acquire: acquireWifiLock,
    release: releaseWifiLock
};
function acquireScreenLock() { return UtilsModule.acquireScreenLock(); }
;
function releaseScreenLock() { return UtilsModule.releaseScreenLock(); }
;
exports.ScreenLock = {
    acquire: acquireScreenLock,
    release: releaseScreenLock
};
function setPictureInPictureAspectRatio(width, height) { return UtilsModule.setPictureInPictureAspectRatio(width, height); }
;
function togglePictureInPictureAutoEnter() { return UtilsModule.togglePictureInPictureAutoEnter(); }
;
function setPictureInPictureActions(actions) {
    //	EventEmitter.removeAllListeners();
    for (var i = 0; i < actions.length; i++) {
        var action = actions[i];
        if (typeof (action.icon) !== 'string') {
            action.icon = action.icon.uri;
        }
        else {
            action.icon = action.icon;
        }
        EventEmitter.addListener('rn-apputils:pipevent_' + action.id, action.callback);
        action.callback = null;
    }
    ;
    return UtilsModule.setPictureInPictureActions(actions);
}
;
function enterPictureInPictureMode() { return UtilsModule.enterPictureInPictureMode(); }
;
function exitPictureInPictureMode() { return UtilsModule.startActivity(); }
;
exports.PictureInPicture = {
    setAspectRatio: setPictureInPictureAspectRatio,
    toggleAutoEnter: togglePictureInPictureAutoEnter,
    setActions: setPictureInPictureActions,
    enter: enterPictureInPictureMode,
    exit: exitPictureInPictureMode
};
