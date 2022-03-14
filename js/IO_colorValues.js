//Controller all inputs and outputs for normalize RGB
$('#norm-picker-in').blur(() => {
    var val = hexToRgb($('#norm-picker-in').val());
    $('#norm-red-in').val(val[0]);
    $('#norm-green-in').val(val[1]);
    $('#norm-blue-in').val(val[2]);
    var normalized = normalizeRGB (val[0], val[1], val[2]);
    $('#norm-red-response').val(normalized[0]);
    $('#norm-green-response').val(normalized[1]);
    $('#norm-blue-response').val(normalized[2]);
});

$('.normalize .div-input .input-text').blur(() => {
    var r = $('#norm-red-in').val();
    var g = $('#norm-green-in').val();
    var b = $('#norm-blue-in').val();
    
    if (r !== '' && g !== '' && b !=='') {
        if (r > 255) $('#norm-red-in').val(r = 255);
        if (g > 255) $('#norm-green-in').val(g = 255);
        if (b > 255) $('#norm-blue-in').val(b = 255);
        $('#norm-picker-in').val(rgbToHex(r, g, b));
        var normalized = normalizeRGB(r, g, b);
        $('#norm-red-out').val(normalized[0]);
        $('#norm-green-out').val(normalized[1]);
        $('#norm-blue-out').val(normalized[2]);
    }
})

$('.normalize .div-input .input-text').keydown(function () {
    $('#norm-red-in').val($('#norm-red-in').val().replace(/[^0-9]/g,''));
    $('#norm-green-in').val($('#norm-green-in').val().replace(/[^0-9]/g,''));
    $('#norm-blue-in').val($('#norm-blue-in').val().replace(/[^0-9]/g,''));
});

//Controller all inputs and outputs for RGB to HSV
$('#rth-picker-in').blur(() => {
    var val = hexToRgb($('#rth-picker-in').val());
    $('#rth-red-in').val(val[0]);
    $('#rth-green-in').val(val[1]);
    $('#rth-blue-in').val(val[2]);
    var hsv = rgbToHsv(val[0], val[1], val[2]);
    $('#rth-hue-response').val(hsv[0]);
    $('#rth-saturation-response').val(hsv[1]);
    $('#rth-value-response').val(hsv[2]);
});

$('.rth .div-input .input-text').blur(() => {
    var r = $('#rth-red-in').val();
    var g = $('#rth-green-in').val();
    var b = $('#rth-blue-in').val();
    
    if (r !== '' && g !== '' && b !=='') {
        if (r > 255) $('#rth-red-in').val(r = 255);
        if (g > 255) $('#rth-green-in').val(g = 255);
        if (b > 255) $('#rth-blue-in').val(b = 255);
        $('#rth-picker').val(rgbToHex(r, g, b));
        var hsv = rgbToHsv(r, g, b);
        $('#rth-hue-out').val(hsv[0]);
        $('#rth-saturation-out').val(hsv[1]);
        $('#rth-value-out').val(hsv[2]);
    }
})

$('.rth .div-input .input-text').keydown(function () {
    $('#rth-red-in').val($('#rth-red-in').val().replace(/[^0-9]/g,''));
    $('#rth-green-in').val($('#rth-green-in').val().replace(/[^0-9]/g,''));
    $('#rth-blue-in').val($('#rth-blue-in').val().replace(/[^0-9]/g,''));
});

//Controller all inputs and outputs for HSV to RGB
$('#htr-picker-in').blur(() => {
    var val = hexToHsv($('#htr-picker-in').val());
    $('#htr-hue-in').val(val[0]);
    $('#htr-saturation-in').val(val[1]);
    $('#htr-value-in').val(val[2]);
    var rgb = hsvToRgb(val[0], val[1], val[2]);
    $('#htr-red-out').val(rgb[0]);
    $('#htr-green-out').val(rgb[1]);
    $('#htr-blue-out').val(rgb[2]);
});

$('.htr .div-input .input-text').blur(() => {
    var h = $('#htr-hue-in').val();
    var s = $('#htr-saturation-in').val();
    var v = $('#htr-value-in').val();
    
    if (h !== '' && s !== '' && v !=='') {
        if (h > 359) $('#htr-hue-in').val(h = 359);
        if (s > 100) $('#htr-saturation-in').val(s = 100);
        if (v > 100) $('#htr-value-in').val(v = 100);
        var rgb = hsvToRgb(h, s, v);
        $('#htr-picker-in').val(rgbToHex(rgb[0], rgb[1], rgb[2]));
        $('#htr-red-out').val(rgb[0]);
        $('#htr-green-out').val(rgb[1]);
        $('#htr-blue-out').val(rgb[2]);
    }
})

$('.htr .div-input .input-text').keydown(function () {
    setTimeout(function () {
        $('#htr-hue-in').val($('#htr-hue-in').val().replace(/[^0-9]/g,''));
        $('#htr-saturation-in').val($('#htr-saturation-in').val().replace(/[^0-9]/g,''));
        $('#htr-value-in').val($('#htr-value-in').val().replace(/[^0-9]/g,''));
    }, .01)
});

//Controller all inputs and outputs for RGB to CMYK
$('#rtc-picker-in').blur(() => {
    var val = hexToRgb($('#rtc-picker-in').val());
    $('#rtc-red-in').val(val[0]);
    $('#rtc-green-in').val(val[1]);
    $('#rtc-blue-in').val(val[2]);
    var cmyk = rgbToCmyk(val[0], val[1], val[2]);
    $('#rtc-cyan-out').val(cmyk[0]);
    $('#rtc-magenta-out').val(cmyk[1]);
    $('#rtc-yellow-out').val(cmyk[2]);
    $('#rtc-black-out').val(cmyk[3]);
});

$('.rtc .div-input .input-text').blur(() => {
    var r = $('#rtc-red-in').val();
    var g = $('#rtc-green-in').val();
    var b = $('#rtc-blue-in').val();
    
    if (r !== '' && g !== '' && b !=='') {
        if (r > 255) $('#rtc-red-in').val(r = 255);
        if (g > 255) $('#rtc-green-in').val(g = 255);
        if (b > 255) $('#rtc-blue-in').val(b = 255);
        $('#rtc-picker-in').val(rgbToHex(r, g, b));
        var cmyk = rgbToCmyk(r, g, b);
        $('#rtc-cyan-out').val(cmyk[0]);
        $('#rtc-magenta-out').val(cmyk[1]);
        $('#rtc-yellow-out').val(cmyk[2]);
        $('#rtc-black-out').val(cmyk[3]);
    }
})

$('.rtc .div-input .input-text').keydown(function () {
    setTimeout(function () {
        $('#rtc-red-in').val($('#rtc-red-in').val().replace(/[^0-9]/g,''));
        $('#rtc-green-in').val($('#rtc-green-in').val().replace(/[^0-9]/g,''));
        $('#rtc-blue-in').val($('#rtc-blue-in').val().replace(/[^0-9]/g,''));
    }, .01)
});

//Controller all inputs and outputs for CMYK to RGB 
$('#ctr-picker-in').blur(() => {
    var val = hexToCmyk($('#ctr-picker-in').val());
    $('#ctr-cyan-in').val(val[0]);
    $('#ctr-magenta-in').val(val[1]);
    $('#ctr-yellow-in').val(val[2]);
    $('#ctr-black-in').val(val[3]);
    var cmyk = rgbToCmyk(val[0], val[1], val[2]);
    $('#ctr-red-out').val(cmyk[0]);
    $('#ctr-green-out').val(cmyk[1]);
    $('#ctr-blue-out').val(cmyk[2]);
});

$('.ctr .div-input .input-text').blur(() => {
    var c = $('#ctr-cyan-in').val();
    var m = $('#ctr-magenta-in').val();
    var y = $('#ctr-yellow-in').val();
    var k = $('#ctr-black-in').val();
    
    if (c !== '' && m !== '' && y !=='' && k !== '') {
        if (c > 100) $('#ctr-cyan-in').val(c = 359);
        if (m > 100) $('#ctr-magenta-in').val(m = 100);
        if (y > 100) $('#ctr-yellow-in').val(y = 100);
        if (k > 100) $('#ctr-black-in').val(k = 100);
        var rgb = cmykToRgb(c, m, y, k);
        $('#ctr-picker-in').val(rgbToHex(rgb[0], rgb[1], rgb[2]));
        $('#ctr-red-out').val(rgb[0]);
        $('#ctr-green-out').val(rgb[1]);
        $('#ctr-blue-out').val(rgb[2]);
    }
})

$('.ctr .div-input .input-text').keydown(function () {
    setTimeout(function () {
        $('#ctr-cyan-in').val($('#ctr-cyan-in').val().replace(/[^0-9]/g,''));
        $('#ctr-magenta-in').val($('#ctr-magenta-in').val().replace(/[^0-9]/g,''));
        $('#ctr-yellow-in').val($('#ctr-yellow-in').val().replace(/[^0-9]/g,''));
        $('#ctr-black-in').val($('#ctr-black-in').val().replace(/[^0-9]/g,''));
    }, .01)
});

//Controller all inputs and outputs for RGB to Gray Scale
$('#rtg-picker-in').blur(() => {
    var val = hexToRgb($('#rtg-picker-in').val());
    console.log(val)
    $('#rtg-red-in').val(val[0]);
    $('#rtg-green-in').val(val[1]);
    $('#rtg-blue-in').val(val[2]);
    var gray = rgbToGray(val[0], val[1], val[2]);
    console.log(gray)
    $('#rtg-grayScale-out').val(gray);
});

$('.rtg .div-input .input-text').blur(() => {
    var r = $('#rtg-red-in').val();
    var g = $('#rtg-green-in').val();
    var b = $('#rtg-blue-in').val();
    
    if (r !== '' && g !== '' && b !=='') {
        if (r > 255) $('#rtg-red-in').val(r = 255);
        if (g > 255) $('#rtg-green-in').val(g = 255);
        if (b > 255) $('#rtg-blue-in').val(b = 255);

        r = parseInt(r);
        g = parseInt(g);
        b = parseInt(b);

        $('#rtg-picker-in').val(rgbToHex(r, g, b));
        var gray = rgbToGray(r, g, b);
        $('#rtg-grayScale-out').val(gray);
    }
})

$('.rtg .div-input .input-text').keydown(function () {
    setTimeout(function () {
        $('#rtg-red-in-in').val($('#rtg-red-in').val().replace(/[^0-9]/g,''));
        $('#rtg-green-in').val($('#rtg-green-in').val().replace(/[^0-9]/g,''));
        $('#rtg-blue-in').val($('#rtg-blue-in').val().replace(/[^0-9]/g,''));
    }, .01)
});