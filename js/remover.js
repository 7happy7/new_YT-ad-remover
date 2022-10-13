
(async() => {
    const date_format = new Intl.DateTimeFormat('en', {
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false, fractionalSecondDigits: 3
    });
    
    const logger = (msg, ...obj) => console.log(
        `%cAD_REMOVER:%c` + `%c${date_format.format(new Date)}%c` + `%c${msg}%c`, 
        'background: #44b0b0; border: solid #555; border-width: 1px 0 1px 1px; color: #fff; padding: .5em;', '',
        'background: #dfdfdf; border: solid #555; border-width: 1px 0 1px 0; color: #555; font-family: Courier, monospace; font-style: italic; padding: .5em;', '',
        'border: solid #555; border-width: 1px 1px 1px 0; padding: .5em;', '',
        ...obj
    );

    const getButtons = () => [...document.querySelectorAll('.ytp-ad-skip-button-slot button, .ytp-ad-overlay-close-button')];

    const getYTPremiumInvButtons = () => [...document.querySelectorAll('tp-yt-paper-button')].filter(btn => {
        const v = btn.innerText
            .replace(/[\u00A0\u1680\u180E\u2000-\u200B\u202F\u205F\u3000\uFEFF\u2060]/g, '')
            .toLowerCase();
        return ['skip', 'スキップ'].includes(v);
    });
    
    const target = {};

    const remover = e => {
        const isAd = target.wrap.classList.contains('ad-showing');
        if(isAd) {
            for(const p of target.player) {
                const dur = p.duration;
                if(!isNaN(dur)) {
                    p.currentTime = dur;
                    logger('ad skipped!');
                    break;
                }
            }
        }
        const buttons = [...getButtons(), ...getYTPremiumInvButtons()];
        if(buttons.length) {
            for(var btn of buttons) btn.click();
            logger("popup cleared!");
        }
    };

    const init = () => {
        logger('searching elements...');
        target.wrap = document.querySelector('#container > .html5-video-player');
        target.player = [...document.querySelectorAll('#container > .html5-video-player > .html5-video-container > video')];
        if(target.wrap && target.player.length) {
            target.player.map(p => p.removeEventListener('timeupdate', remover));
            target.player.map(p => p.addEventListener('timeupdate', remover));
            return logger('loaded!', target.player);
        }
        return setTimeout(init, 500);
    };

    const check = () => {
        const url = new URL(location.href);
        const current_id = url.searchParams.get('v');
        if(target.video_id != current_id) {
            logger(`video_id changed: "${target.video_id || ''}" -> "${current_id || ''}"`)
            target.video_id = current_id;
            init();
        }
    };

    const observer = new MutationObserver(check);
    observer.observe(document.body, {attributes: true, childList: true, subtree: true});
})();
