function hexdump(buffer, blockSize) {
    blockSize = blockSize || 16;
    var lines = [];
    var hex = "0123456789ABCDEF";
    for (var b = 0; b < buffer.length; b += blockSize) {
        var block = buffer.slice(b, Math.min(b + blockSize, buffer.length));
        var addr = ("0000" + b.toString(16)).slice(-4);
        var codes = block.split('').map(function (ch) {
            var code = ch.charCodeAt(0);
            return " " + hex[(0xF0 & code) >> 4] + hex[0x0F & code];
        }).join("");
        codes += "   ".repeat(blockSize - block.length);
        var chars = block.replace(/[\x00-\x1F\x20]/g, '.');
        chars +=  " ".repeat(blockSize - block.length);
        lines.push(addr + " " + codes + "  " + chars);
    }
    return lines.join("\n");
}


Dropzone.options.myAwesomeDropzone = {
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 2, // MB
    accept: function (file, done) {
        console.log("Uploaded file name: " + file.name)

    }
};