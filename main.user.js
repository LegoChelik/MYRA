// ==UserScript==
// @name         Make YouTube Red Again
// @version      1.2.10
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
    });
}
let style = document.createElement('style');
style.innerHTML = `
#related ytd-channel-renderer {
    display: none !important;
}

yt-icon g path[fill="#FF0033"], yt-icon g circle[fill="#FF0033"], yt-icon path[fill="#f03"], .ytp-cued-thumbnail-overlay:hover .ytp-large-play-button-bg {
    fill: #FF0000 !important;
}

#progress.yt-page-navigation-progress,
.ytp-play-progress,
.ytp-swatch-background-color,
#progress.ytd-thumbnail-overlay-resume-playback-renderer,
.badge-style-type-live-now-alternate.ytd-badge-supported-renderer,
.yt-spec-avatar-shape--cairo-refresh.yt-spec-avatar-shape--live-ring::after,
.yt-spec-avatar-shape--cairo-refresh .yt-spec-avatar-shape__live-badge,
.YtProgressBarLineProgressBarPlayedRefresh,
.YtProgressBarPlayheadProgressBarPlayheadDot,
.badge-shape-wiz--thumbnail-live,
.yt-spec-icon-badge-shape--type-notification .yt-spec-icon-badge-shape__badge,
.ytp-settings-menu .ytp-menuitem[aria-checked=true] .ytp-menuitem-toggle-checkbox,
.ytProgressBarLineProgressBarPlayed,
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

.ytp-settings-button.ytp-hd-quality-badge::after,
.ytp-settings-button.ytp-hdr-quality-badge::after,
.ytp-settings-button.ytp-4k-quality-badge::after,
.ytp-settings-button.ytp-5k-quality-badge::after,
.ytp-settings-button.ytp-8k-quality-badge::after,
.ytp-settings-button.ytp-3d-badge-grey::after,
.ytp-settings-button.ytp-3d-badge::after,
.ytp-chrome-controls .ytp-button[aria-pressed]::after {
    background-color: #F00 !important;
}
`;
document.head.appendChild(style);

let links = document.querySelectorAll("link[rel~='icon']");
for (let i = 0; i < links.length; i++){
    links[i].href = 'https://i.imgur.com/rYfrwQn.png';
}

