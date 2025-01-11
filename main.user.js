// ==UserScript==
// @name         Make YouTube Red Again
// @version      1.2.2
// @description  Removes YouTube's pink accent almost everywhere
// @author       MAZUTA
// @downloadURL  https://github.com/LegoChelik/MYRA/raw/main/main.user.js
// @updateURL    https://github.com/LegoChelik/MYRA/raw/main/main.user.js
// @match        https://www.youtube.com/*
// @icon         https://i.imgur.com/rYfrwQn.png
// ==/UserScript==

if (window.trustedTypes && window.trustedTypes.createPolicy && !window.trustedTypes.defaultPolicy) {
    window.trustedTypes.createPolicy('default', {
        createHTML: string => string
        // Optional, only needed for script (url) tags
        //,createScriptURL: string => string
        //,createScript: string => string,
    });
}
let style = document.createElement('style');
style.innerHTML = `
yt-icon g path[fill="#FF0033"], yt-icon g circle[fill="#FF0033"], yt-icon path[fill="#f03"] {
    fill: #FF0000 !important;
}

yt-page-navigation-progress[enable-refresh-signature-moments-web] #progress.yt-page-navigation-progress,
.ytp-cairo-refresh-signature-moments .ytp-play-progress,
.ytp-cairo-refresh .ytp-swatch-background-color,
ytd-thumbnail-overlay-resume-playback-renderer[enable-refresh-signature-moments-web] #progress.ytd-thumbnail-overlay-resume-playback-renderer,
.badge-style-type-live-now-alternate.ytd-badge-supported-renderer,
.yt-spec-avatar-shape--cairo-refresh.yt-spec-avatar-shape--live-ring::after,
.yt-spec-avatar-shape--cairo-refresh .yt-spec-avatar-shape__live-badge,
.YtProgressBarLineProgressBarPlayedRefresh,
.YtProgressBarPlayheadProgressBarPlayheadDot,
.badge-shape-wiz--thumbnail-live,
.yt-spec-icon-badge-shape--type-notification-refresh .yt-spec-icon-badge-shape__badge,
.ytp-cairo-refresh .ytp-menuitem[aria-checked=true] .ytp-menuitem-toggle-checkbox,
.ytProgressBarLineProgressBarPlayedRefresh,
.ytProgressBarPlayheadProgressBarPlayheadDot,
.ytThumbnailOverlayProgressBarHostWatchedProgressBarSegmentModern  {
    background: #F00 !important;
}

.guide-entry-badge.ytd-guide-entry-renderer {
    color: #f00 !important;
}

.yt-spec-icon-badge-shape--style-overlay.yt-spec-icon-badge-shape--type-cart-refresh .yt-spec-icon-badge-shape__badge {
    color: #fff !important;
}

.ytp-cairo-refresh .ytp-settings-button.ytp-hd-quality-badge::after,
.ytp-cairo-refresh .ytp-settings-button.ytp-hdr-quality-badge::after,
.ytp-cairo-refresh .ytp-settings-button.ytp-4k-quality-badge::after,
.ytp-cairo-refresh .ytp-settings-button.ytp-5k-quality-badge::after,
.ytp-cairo-refresh .ytp-settings-button.ytp-8k-quality-badge::after,
.ytp-cairo-refresh .ytp-settings-button.ytp-3d-badge-grey::after,
.ytp-cairo-refresh .ytp-settings-button.ytp-3d-badge::after,
.ytp-cairo-refresh .ytp-chrome-controls .ytp-button[aria-pressed]::after {
    background-color: #F00 !important;
}
`;
document.head.appendChild(style);

let links = document.querySelectorAll("link[rel~='icon']");
for (let i = 0; i < links.length; i++){
    links[i].href = 'https://i.imgur.com/rYfrwQn.png';
}
