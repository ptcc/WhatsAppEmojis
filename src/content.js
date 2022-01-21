// List of Emojis supported and their HTML representation for WhatsApp
var emojis = {
    ":)": "😊",
    ":')": "😅",
    ":P": "😜",
    ":D": "😀",
    ";)": "😉",
    ":(": "😒",
    ":'(": "😥",
    ":/": "😕",
    ":o": "😮",
    "-_-": "😑",
    ":|": "😐",
    "(y)": "👍",
  };
  
  // font maps
  const fonts = {
    normal:
      "\"\\ !#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~",
    sans: "\"\\ !#$%&'()*+,-./𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫:;<=>?@𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹[]^_`𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓{|}~",
    sansBold:
      "\"\\ !#$%&'()*+,-./𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵:;<=>?@𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭[]^_`𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇{|}~",
    sansItalic:
      "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡[]^_`𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻{|}~",
    sansBoldItalic:
      "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕[]^_`𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯{|}~",
    monospace:
      "\"\\ !#$%&'()*+,-./𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿:;<=>?@𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉[]^_`𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣{|}~",
    fullwidth:
      '"＼　！＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；<＝>？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～',
    fraktur:
      "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ[]^_`𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷{|}~",
    boldFraktur:
      "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅[]^_`𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟{|}~",
    serifBold:
      "\"\\ !#$%&'()*+,-./𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗:;<=>?@𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙[]^_`𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳{|}~",
    serifItalic:
      "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍[]^_`𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧{|}~",
    serifBoldItalic:
      "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁[]^_`𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛{|}~",
    doubleStruck:
      "\"\\ !#$%&'()*+,-./𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡:;<=>?@𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ[]^_`𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫{|}~",
    script:
      "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵[]^_`𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏{|}~",
    boldScript:
      "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩[]^_`𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃{|}~",
    circled:
      "\"⦸ !#$%&'()⊛⊕,⊖⨀⊘⓪①②③④⑤⑥⑦⑧⑨:;⧀⊜⧁?@ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ[]^_`ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ{⦶}~",
    circledNegative:
      "\"\\ !#$%&'()*+,-./⓿❶❷❸❹❺❻❼❽❾:;<=>?@🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩[]^_`🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩{|}~",
    squared:
      "\"\\ !#$%&'()*+,-./0123456789:;<=>?@🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉[]^_`🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉{|}~",
    squaredNegative:
      "\"⧅ !#$%&'()⧆⊞,⊟⊡⧄0123456789:;<=>?@🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉[]^_`🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉{|}~",
    parenthesized:
      "\"\\ !#$%&'()*+,-./0⑴⑵⑶⑷⑸⑹⑺⑻⑼:;<=>?@⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵[]^_`⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵{|}~",
    smallCaps:
      "\"\\ !#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴩꞯʀꜱᴛᴜᴠᴡxʏᴢ{|}~",
    subscript:
      "\"\\ !#$%&'₍₎*₊,₋./₀₁₂₃₄₅₆₇₈₉:;<₌>?@ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘ🇶ʀꜱᴛᴜᴠᴡxʏᴢ[]^_`ₐᵦ𝒸𝒹ₑ𝒻𝓰ₕᵢⱼₖₗₘₙₒₚᵩᵣₛₜᵤᵥ𝓌ₓᵧ𝓏{|}~",
    superscript:
      "\"\\ !#$%&'⁽⁾*⁺,⁻./⁰¹²³⁴⁵⁶⁷⁸⁹:;<⁼>?@ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᵠᴿˢᵀᵁⱽᵂˣʸᶻ[]^_`ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ{|}~",
    inverted:
      "„\\ ¡#$%⅋,)(*+‘-˙/0ƖՇƐᔭϛ9Ɫ86:;<=>¿@∀ꓭↃꓷƎℲ⅁HIſꓘ⅂WNOԀῸꓤS⊥∩ꓥMX⅄Z][^‾`ɐqɔpǝɟƃɥıɾʞןɯuodbɹsʇnʌʍxʎz}|{~",
    mirrored:
      "\"/ !#$%&')(*+,-.\\0߁ςƐ߂टმ٢8୧:;<=>⸮@AꓭↃꓷƎꟻӘHIႱꓘ⅃MИOꟼϘЯꙄTUVWXYZ][^_`ɒdↄbɘʇϱʜiįʞlmᴎoqpᴙꙅɈυvwxγz}|{~",
  };
  
  // list of font characters for checking if character is formatted
  const allCharacters = new Set(Object.values(fonts).join(""));
  
  // mapping functions
  const bold = (text) => formatText(text, "sansBold");
  const italic = (text) => formatText(text, "sansItalic");
  const monospace = (text) => formatText(text, "monospace");
  const strikethrough = (text) =>
    formatText(text, "", {
      append: "̶",
    });
  const underline = (text) =>
    text &&
    formatText(text + " ", "", {
      append: "͟",
    });
  const superscript = (text) => formatText(text, "superscript");
  const subscript = (text) => formatText(text, "subscript");
  
  // check if text is already formatted with a certain font
  const alreadyFormatted = function (text, font) {
    const fontCharacters = new Set(fonts[font]);
    // flag as already formatted if all characters are in font or not in any other font
    return Array.from(text).every(
      (char) => fontCharacters.has(char) || !allCharacters.has(char)
    );
  };
  
  // check if text is already formatted with a certain font
  const alreadyAppended = function (text, append) {
    // check if at least half the characters are the append character
    return (
      Array.from(text).filter((char) => char == append).length >= text.length / 2
    );
  };
  
  // format text into selected font
  const formatText = function (text, font, options) {
    // set font to normal if already formatted with selected font
    if (fonts[font] && alreadyFormatted(text, font)) {
      font = "normal";
    }
    // remove and don't append if character is already appended
    if (options?.append) {
      options.remove = options.append;
      options.append = !alreadyAppended(text, options.append)
        ? options.append
        : "";
    }
    // Array.from() splits the string by symbol and not by code points
    let newText = Array.from(text);
    // exchange font symbols
    if (fonts[font]) {
      const targetFont = Array.from(fonts[font]);
      const charLists = Object.values(fonts);
      // map characters to new font
      newText = newText.map((char) => {
        let index;
        // find the index of the character in some font
        const found = charLists.some((charList) => {
          index = Array.from(charList).indexOf(char);
          return index > -1;
        });
        // if found, replace with the corresponding character in the target font
        // if not found, keep the character the same
        return found ? targetFont[index] : char;
      });
    }
    // reverse text if reverse option is set
    newText = options?.reverse ? newText.reverse() : newText;
    // remove appended symbol of specific type from the end
    newText = options?.remove
      ? newText.map((char) =>
          char.replace(new RegExp(options.remove + "$", "u"), "")
        )
      : newText;
    // append symbol (underline, strikethrough, etc.) to end of each character if append is set
    newText = options?.append
      ? newText.map((char) =>
          options.append === "͟" ? options.append + char : char + options.append
        )
      : newText;
    // remove appended symbols (underline, strikethrough, etc.) if using eraser
    // \u035f = Underline, \u0333 = Double Underline, \u0335 = Short Strikethrough \u0336 = Strikethrough
    newText = options?.clear
      ? newText.map((char) => char.replace(/\u035f|\u0333|\u0335|\u0336/gu, ""))
      : newText;
    // set textarea content and select text around the replacement
    return newText.join("");
  };
  
  var lastInput = null;
  
  var checkInterval = setInterval(function () {
    const inputTmp = document.querySelector("footer div[contenteditable]");
    if (inputTmp && inputTmp != lastInput) {
      setup(inputTmp);
      lastInput = inputTmp;
    }
  
    // The send button besides input
    var send = document.querySelector(".icon-send");
    if (send) {
      send.addEventListener("click", convert);
    }
  }, 500);
  
  function setup(input) {
    input.addEventListener("keydown", function (e) {
      if (e.which == 13 && !e.shiftKey) {
        // Convert when pressed enter without shift
        convert(false);
      }
    });
    input.addEventListener("keyup", function (e) {
      convert(true);
    });
  
    const container = input.parentElement.parentElement;
  
    const toolbar = document.createElement("div");
    toolbar.className = "waFormatToolbar";
  
    const addBtn = (label, handler) => {
      const btn = document.createElement("button");
      btn.innerHTML = label;
      btn.addEventListener("click", handler);
      toolbar.appendChild(btn);
    };
  
    const addMenu = (buttonLabel, items) => {
      const menu = document.createElement("ul");
      items.forEach(([label, handler]) => {
        const li = document.createElement("li");
        li.innerHTML = label;
        li.addEventListener("click", handler);
        menu.appendChild(li);
      });
      menu.classList.add("hidden");
      menu.classList.add("menu");
      toolbar.appendChild(menu);
      addBtn(buttonLabel, () => menu.classList.toggle("hidden"));
    };
  
    const enclose =
      (open, close = open) =>
      () => {
        document.execCommand(
          "insertText",
          false,
          `${open}${window.getSelection()}${close}`
        );
      };
  
    const applyFormat = (formatFn) => () =>
      document.execCommand(
        "insertText",
        false,
        `${formatFn(window.getSelection().toString())}`
      );
  
    const fancyFont = (font) =>
      applyFormat((text) => {
        console.log(text, font, formatText(text, font));
        return formatText(text, font);
      });
  
    addBtn("•", () => document.execCommand("insertText", false, "•"));
    addBtn("<strong>B</strong>", enclose("*"));
    addBtn("<i>I</i>", enclose("_"));
    addBtn("<strike>S</strike>", enclose("~"));
    addBtn("()", enclose("(", ")"));
    addBtn("<u>U</u>", applyFormat(underline));
    addBtn("<sup>1</sup>", applyFormat(superscript));
    addBtn("<sub>1</sub>", applyFormat(subscript));
    addMenu(
      "Font",
      [
        "monospace",
        "fullwidth",
        "fraktur",
        "boldFraktur",
        "serifBold",
        "serifItalic",
        "serifBoldItalic",
        "doubleStruck",
        "script",
        "boldScript",
        "circledNegative",
        "squared",
        "smallCaps",
        "inverted",
        "mirrored",
      ].map((font) => [formatText(font, font), fancyFont(font)])
    );
    addBtn(
      "&lt;-&gt;",
      applyFormat((text) => [...text].reverse().join(""))
    );
  
    container.insertBefore(toolbar, container.firstChild);
  
    const stylesheet = document.createElement("style");
    stylesheet.innerHTML = `
  .waFormatToolbar{
    position:relative;
    background: #555;
    border-top-left-radius: 15px;
    margin: -10px -14px 10px;
    padding-left: 10px;
    border-top-right-radius: 15px;
  }
  .waFormatToolbar button{
    background:white;
    height: 20px;
    padding-left: 3px;
    padding-right: 3px;
    border-radius:4px;
    margin: 5px 2px;
  }
  .waFormatToolbar i{
    font-style: italic;
  }
  .menu{
      position: absolute;
      bottom: 32px;
      background: #fffc;
      padding: 20px;
      border-radius: 16px;
  }
  .hidden{
      display: none;
  }
  .waFormatToolbar sub{
      font-size:.8em;
      vertical-align: sub;
  }
  .waFormatToolbar sup{
      font-size:.8em;
      vertical-align: sup;
  }
  `;
  
    document.head.appendChild(stylesheet);
  }
  
  function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }
  
  function replaceEmoji(text, isOnline, dryRun) {
    var origText = text;
  
    var reg, ascii_reg;
    for (var ascii in emojis) {
      ascii_reg = escapeRegExp(ascii);
  
      reg = new RegExp("(^|\\s)" + ascii_reg + "(\\s)", "g");
      text = text.replace(reg, "$1" + emojis[ascii] + "$2");
  
      if (!isOnline) {
        // Run these only when the message is sent, not while writing
  
        reg = new RegExp("(^|\\s)" + ascii_reg + "$", "g");
        text = text.replace(reg, "$1" + emojis[ascii]);
      }
    }
  
    if (dryRun) {
      return text !== origText;
    }
  
    return text;
  }
  
  function convert(isOnline) {
    var input = document.querySelector("footer div[contenteditable]");
  
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
      document.execCommand("insertText", false, "\uffff");
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
        if ((offset = node.textContent.indexOf("\uffff")) > -1) {
          range = document.createRange();
          range.setStart(node, offset);
          range.setEnd(node, offset + 1);
          selections.addRange(range);
          document.execCommand("delete");
        }
      }
    } else if (!isOnline) {
      // To trick WhatsApp to consider converted values
      input.innerHTML += " ";
  
      range = document.createRange();
      range.selectNodeContents(input);
      range.collapse(false);
  
      selections.removeAllRanges();
      selections.addRange(range);
      document.execCommand("delete");
    }
  }
  
  console.log("WhatsApp Web Emoji Converter Loaded!");
  