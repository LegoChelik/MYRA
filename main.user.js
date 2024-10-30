// ==UserScript==
// @name         Make YouTube Red Again
// @version      1.0
// @description  Removes YouTube's pink accent almost everywhere
// @author       MAZUTA
// @match        https://www.youtube.com/*
// @icon         https://i.imgur.com/rYfrwQn.png
// ==/UserScript==

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
.yt-spec-icon-badge-shape--type-notification-refresh .yt-spec-icon-badge-shape__badge {
    background: #F00 !important;
}

.guide-entry-badge.ytd-guide-entry-renderer {
    color: #f00 !important;
}

.yt-spec-icon-badge-shape--style-overlay.yt-spec-icon-badge-shape--type-cart-refresh .yt-spec-icon-badge-shape__badge {
    color: #fff !important;
}
`;
document.head.appendChild(style);

let links = document.querySelectorAll("link[rel~='icon']");
for (let i = 0; i < links.length; i++){
    links[i].href = 'https://i.imgur.com/rYfrwQn.png';
}
