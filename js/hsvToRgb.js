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

$('.htr .div-input .inpt-text').blur(() => {
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

$('.htr .div-input .inpt-text').keydown(function () {
    setTimeout(function () {
        $('#htr-hue-in').val($('#htr-hue-in').val().replace(/[^0-9]/g,''));
        $('#htr-saturation-in').val($('#htr-saturation-in').val().replace(/[^0-9]/g,''));
        $('#htr-value-in').val($('#htr-value-in').val().replace(/[^0-9]/g,''));
    }, .01)
});