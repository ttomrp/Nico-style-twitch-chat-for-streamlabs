/*
Random placement on screen between specified values (0 <= pos <= 100)
where the chat will display rather than always starting in the same spot.
*/
document.addEventListener('onLoad', function(obj) {});
document.addEventListener('onEventReceived', function(obj) {

    // height (in %) that message will display from top of chatbox
    let min = 0;
    let max = 90;

    let pos = `${Math.floor(Math.random() * (max - min + 1) + min)}%`;
    let message = document.getElementById(obj['detail']['messageId']);

    message.style.top = pos;
});