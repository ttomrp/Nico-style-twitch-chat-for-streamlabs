'use strict';

/*
Random placement on screen between specified values (0 <= pos <= 100)
where the chat will display rather than always starting in the same spot.
*/
document.addEventListener('onLoad', function(e) {})
document.addEventListener('onEventReceived', function(e) {

    // height (in %) that message will display from top of chatbox
    let minHeight = 0;
    let maxHeight = 60;

    let pos = `${Math.floor(Math.random() * (maxHeight - minHeight + 1) + min)}%`;
    let message = document.getElementById(e['detail']['messageId']);

    message.style.top = pos;
})