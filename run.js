(function xayooindustries() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = chrome.extension.getURL('xayooindustries.js?v='+chrome.runtime.getManifest().version);
    var style = document.createElement("link")
    style.setAttribute("rel", "stylesheet")
    style.setAttribute("type", "text/css")
    style.setAttribute("href", chrome.extension.getURL('xayooindustries.css?v='+chrome.runtime.getManifest().version))
    var head = document.getElementsByTagName('head')[0];
    if (!head) return;
    head.appendChild(script);
    head.appendChild(style);
    console.log(`%c4uss %cChat Extension v${chrome.runtime.getManifest().version}`, 'color:#ff5447; font-weight:bold', '')
})()