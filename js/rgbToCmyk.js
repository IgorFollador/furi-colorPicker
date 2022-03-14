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

$('.rtc .div-input .inpt-text').blur(() => {
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

$('.rtc .div-input .inpt-text').keydown(function () {
    setTimeout(function () {
        $('#rtc-red-in').val($('#rtc-red-in').val().replace(/[^0-9]/g,''));
        $('#rtc-green-in').val($('#rtc-green-in').val().replace(/[^0-9]/g,''));
        $('#rtc-blue-in').val($('#rtc-blue-in').val().replace(/[^0-9]/g,''));
    }, .01)
});