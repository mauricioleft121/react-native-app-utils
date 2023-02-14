import { RemoteAction } from './types';
declare function startActivity(): any;
declare function moveActivityToBack(): any;
export declare const Activity: {
    start: typeof startActivity;
    moveToBack: typeof moveActivityToBack;
};
declare function acquireWakeLock(): any;
declare function releaseWakeLock(): any;
export declare const WakeLock: {
    acquire: typeof acquireWakeLock;
    release: typeof releaseWakeLock;
};
declare function acquirePartialWakeLock(): any;
declare function releasePartialWakeLock(): any;
export declare const PartialWakeLock: {
    acquire: typeof acquirePartialWakeLock;
    release: typeof releasePartialWakeLock;
};
declare function acquireWifiLock(): any;
declare function releaseWifiLock(): any;
export declare const WifiLock: {
    acquire: typeof acquireWifiLock;
    release: typeof releaseWifiLock;
};
declare function acquireScreenLock(): any;
declare function releaseScreenLock(): any;
export declare const ScreenLock: {
    acquire: typeof acquireScreenLock;
    release: typeof releaseScreenLock;
};
declare function setPictureInPictureAspectRatio(width: number, height: number): any;
declare function togglePictureInPictureAutoEnter(): any;
declare function setPictureInPictureActions(actions: RemoteAction[]): any;
declare function enterPictureInPictureMode(): any;
declare function exitPictureInPictureMode(): any;
export declare const PictureInPicture: {
    setAspectRatio: typeof setPictureInPictureAspectRatio;
    toggleAutoEnter: typeof togglePictureInPictureAutoEnter;
    setActions: typeof setPictureInPictureActions;
    enter: typeof enterPictureInPictureMode;
    exit: typeof exitPictureInPictureMode;
};
export {};
