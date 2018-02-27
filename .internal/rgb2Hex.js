const rgbToHex = (rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};

const fullColorHex = (rgb) {
    var matchColors = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
    var match = matchColors.exec(color);
    if (match !== null) {
        var red = rgbToHex(match[1]);
        var green = rgbToHex(match[2]);
        var blue = rgbToHex(match[3]);
    }

    return red+green+blue;
};

export default fullColorHex;