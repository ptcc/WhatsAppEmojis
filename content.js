// List of Emojis supported and their HTML representation for WhatsApp
var emojis = {
    ':)': '<img alt="" class="emoji emojiordered1163" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
    ':P': '<img alt="" class="emoji emojiordered1181" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
    ':D': '<img alt="😀" class="emoji emojiordered1153" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
    ';)': '<img alt="" class="emoji emojiordered1162" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
    ':(': '<img alt="" class="emoji emojiordered1171" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
    ":'(": '<img alt="" class="emoji emojiordered1190" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
    ':/': '<img alt="😕" class="emoji emojiordered1174" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
    ':o': '<img alt="😮" class="emoji emojiordered1199" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
    '-_-': '<img alt="😑" class="emoji emojiordered1170" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
    '(y)': '<img alt="" class="emoji emojiordered0733" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">'
}

var lastReactid = '';

var checkInterval = setInterval(function() {
    var inputTmp = document.querySelector('div[contenteditable]'), reactid;
    if (inputTmp && (reactid = inputTmp.dataset.reactid) != lastReactid) {
        setup(inputTmp, reactid);
        lastReactid = reactid;
    }

    // The send button besides input
    var send = document.querySelector('.icon-send');
    if (send) {
        send.addEventListener('click', convert);
    }
}, 500);

function setup(input) {
    input.addEventListener('keydown', function(e) {
        if (e.which == 13 && !e.shiftKey) {
            // Convert when pressed enter without shift
            convert();
        }
    })
}

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

function convert() {
    var input = document.querySelector('div[contenteditable]');
    var val = input.innerHTML;
    var reg, replace;
    for (ascii in emojis) {
        replace = true;
        ascii_reg = escapeRegExp(ascii);
        while (replace) {
            replace = false;

            reg = new RegExp('(\\s)'+ascii_reg+'(\\s)');
            if (val.match(reg)) replace = true;
            val = val.replace(reg, '$1'+emojis[ascii]+'$2');

            reg = new RegExp('^'+ascii_reg+'(\\s)');
            if (val.match(reg)) replace = true;
            val = val.replace(reg, emojis[ascii]+'$1');

            reg = new RegExp('(\\s)'+ascii_reg+'$');
            if (val.match(reg)) replace = true;
            val = val.replace(reg, '$1'+emojis[ascii]);

            reg = new RegExp('^'+ascii_reg+'$');
            if (val.match(reg)) replace = true;
            val = val.replace(reg, emojis[ascii]);
        }
    }

    input.innerHTML = val;

    // To trick WhatsApp to consider converted values
    input.innerHTML += ' ';
    var range = document.createRange();
    range.selectNodeContents(input);
    range.collapse(false);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand('delete');
}
