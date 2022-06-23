window.addEventListener('load', ()=>{
    const s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', chrome.runtime.getURL('/js/remover.js'));
    document.body.appendChild(s);
}, false);
