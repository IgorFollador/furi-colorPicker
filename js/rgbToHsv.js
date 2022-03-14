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

$('.rth .div-input .inpt-text').blur(() => {
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

$('.rth .div-input .inpt-text').keydown(function () {
    setTimeout(function () {
        $('#rth-red-in').val($('#rth-red-in').val().replace(/[^0-9]/g,''));
        $('#rth-green-in').val($('#rth-green-in').val().replace(/[^0-9]/g,''));
        $('#rth-blue-in').val($('#rth-blue-in').val().replace(/[^0-9]/g,''));
    }, .01)
});