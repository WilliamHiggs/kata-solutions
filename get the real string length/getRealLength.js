const getRealLength = str => str.replace(/[\u{0020}-\u{E007F}]/gu, 1).length;
