function changechat(){
    
    if(localStorage.getItem(`e-chat-type`) === 'twitch'){
        document.querySelector("ytd-live-chat-frame").innerHTML = `
        <div class="chat-addon">
        <div class="chat-options">
            <select class="form-control" id="e-chat-type">
                <option value="twitch">Twitch</option>
                <option value="poorchat">Poorchat</option>
            </select>
            <input type="text" placeholder="Nazwa czatu" id="chat-input" name="chat-name" value="${localStorage.getItem(`e-chat-name`)}"></input>
            <button id="chat-save" onclick="zmienchat();">Załaduj</button> 
        </div>
        </div>
        <iframe frameborder="0" scrolling="no" id="chatframe" class="style-scope ytd-live-chat-frame" src="https://www.twitch.tv/embed/${localStorage.getItem(`e-chat-name`)}/chat?darkpopout&parent=${window.location.hostname}"></iframe>
        `;
        logging('changechat', 'Załadowano chat "Twitch"');
    }else{
        document.querySelector("ytd-live-chat-frame").innerHTML = `
        <div class="chat-addon">
        <div class="chat-options">
            <select class="form-control" id="e-chat-type">
                <option value="twitch">Twitch</option>
                <option value="poorchat">Poorchat</option>
            </select>
            <input type="text" placeholder="Nazwa czatu" id="chat-input" name="chat-name" value="${localStorage.getItem(`e-chat-name`)}"></input>
            <button id="chat-save" onclick="zmienchat();">Załaduj</button> 
        </div>
        </div>
        <iframe frameborder="0" scrolling="no" id="chatframe" class="style-scope ytd-live-chat-frame" src="https://client.poorchat.net/${localStorage.getItem(`e-chat-name`)}"></iframe>
        `;
        logging('changechat', 'Załadowano chat "Poorchat"');
    }
}
function zmienchat(){
    if(document.getElementById("e-chat-type").value === 'twitch'){
        localStorage.setItem('e-chat-type', document.getElementById("e-chat-type").value);
        localStorage.setItem('e-chat-name', document.getElementById("chat-input").value);
        document.getElementById("chatframe").src = `https://www.twitch.tv/embed/${localStorage.getItem(`e-chat-name`)}/chat?darkpopout&parent=${window.location.hostname}`;
        logging('chatname', `Zmieniono nazwe kanału/chat "${document.getElementById("chat-input").value}", "${document.getElementById("e-chat-type").value}"`);

    }else if(document.getElementById("e-chat-type").value === 'poorchat'){
        localStorage.setItem('e-chat-type', document.getElementById("e-chat-type").value);
        localStorage.setItem('e-chat-name', document.getElementById("chat-input").value);
        document.getElementById("chatframe").src = `https://client.poorchat.net/${document.getElementById("chat-input").value}`;
        logging('chatname', `Zmieniono nazwe kanał/chat "${document.getElementById("chat-input").value}", "${document.getElementById("e-chat-type").value}"`);

    }else{
        var btn = document.createElement("p");
        btn.innerHTML = `<b style="color:#fb6c6c;">Nie znany argument "${document.getElementById("e-chat-type").value}" w rodzajach chatu.</b>`;
        document.querySelector(".chat-options").appendChild(btn);
        logging('chatname', `Nie znany argument "${document.getElementById("e-chat-type").value}"`);
    }
}
function logging(w, m){
    console.log(`%c4uss [%c${w}%c]:%c ${m}`, 'color:#ff5447; font-weight:bold', '', 'color:#ff5447; font-weight:bold', '')
}
