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

$('.normalize .div-input .inpt-text').blur(() => {
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

$('.normalize .div-input .inpt-text').keydown(function () {
    setTimeout(function () {
        $('#norm-red-in').val($('#norm-red-in').val().replace(/[^0-9]/g,''));
        $('#norm-green-in').val($('#norm-green-in').val().replace(/[^0-9]/g,''));
        $('#norm-blue-in').val($('#norm-blue-in').val().replace(/[^0-9]/g,''));
    }, .01)
});