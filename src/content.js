// List of Emojis supported and their HTML representation for WhatsApp
var emojis = {
    ':)': '<img alt="😊" class="emoji emojiordered1369" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
    ":')": '<img alt="😅" class="emoji emojiordered1364"src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
    ':P': '<img alt="😜" class="emoji emojiordered1387" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
    ':D': '<img alt="😀" class="emoji emojiordered1359" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
    ';)': '<img alt="😉" class="emoji emojiordered1368" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
    ':(': '<img alt="😒" class="emoji emojiordered1377" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
    ":'(": '<img alt="😥" class="emoji emojiordered1396" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
    ':/': '<img alt="😕" class="emoji emojiordered1380" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
    ':o': '<img alt="😮" class="emoji emojiordered1405" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
    '-_-': '<img alt="😑" class="emoji emojiordered1376" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
    ':|': '<img alt="😐" class="emoji emojiordered1375" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
    '(y)': '<img alt="👍" class="emoji emojiordered0884" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">'
};

var lastInput = null;

var checkInterval = setInterval(function() {
    var inputTmp = document.querySelector('div[contenteditable]');
    if (inputTmp && inputTmp != lastInput) {
        setup(inputTmp);
        lastInput = inputTmp;
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
            convert(false);
        }
    });
    input.addEventListener('keyup', function(e) {
        convert(true);
    });
}

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

function replaceEmoji(text, isOnline, dryRun) {
    var origText = text;

    var reg, ascii_reg;
    for (var ascii in emojis) {
        ascii_reg = escapeRegExp(ascii);

        reg = new RegExp('(^|\\s)'+ascii_reg+'(\\s)', 'g');
        text = text.replace(reg, '$1'+emojis[ascii]+'$2');

        if (!isOnline) {
            // Run these only when the message is sent, not while writing

            reg = new RegExp('(^|\\s)'+ascii_reg+'$', 'g');
            text = text.replace(reg, '$1'+emojis[ascii]);
        }
    }

    if (dryRun) {
        return text !== origText;
    }

    return text;
}

function convert(isOnline) {
    var input = document.querySelector('div[contenteditable]');

    // Save cursor position, by adding \uffff
    var handleCursor = false;

    var selections = window.getSelection();
    var range = selections.getRangeAt(0);

    if (!range.collapsed) {
        // Something is selected, do nothing
        return;
    }

    if (!replaceEmoji(input.innerHTML, isOnline, true)) {
        return;
    }

    var cursorNode = range.startContainer;
    if (isOnline && input.contains(cursorNode)) {
        document.execCommand('insertText', false, '\uffff');
        handleCursor = true;
    }

    // Replace ASCII Emojis with images
    var val = replaceEmoji(input.innerHTML, isOnline);

    input.innerHTML = val;

    if (handleCursor) {
        // Position cursor at the original place
        selections.removeAllRanges();

        var walk = document.createTreeWalker(
            input,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        var node, offset;
        while ((node = walk.nextNode()) !== null) {
            if ((offset = node.textContent.indexOf('\uffff')) > -1) {
                range = document.createRange();
                range.setStart(node, offset);
                range.setEnd(node, offset + 1);
                selections.addRange(range);
                document.execCommand('delete');
            }
        }
    } else if (!isOnline) {
        // To trick WhatsApp to consider converted values
        input.innerHTML += ' ';

        range = document.createRange();
        range.selectNodeContents(input);
        range.collapse(false);

        selections.removeAllRanges();
        selections.addRange(range);
        document.execCommand('delete');
    }
}

console.log("WhatsApp Web Emoji Converter Loaded!");
