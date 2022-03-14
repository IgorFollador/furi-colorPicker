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

$('.ctr .div-input .inpt-text').blur(() => {
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

$('.ctr .div-input .inpt-text').keydown(function () {
    setTimeout(function () {
        $('#ctr-cyan-in').val($('#ctr-cyan-in').val().replace(/[^0-9]/g,''));
        $('#ctr-magenta-in').val($('#ctr-magenta-in').val().replace(/[^0-9]/g,''));
        $('#ctr-yellow-in').val($('#ctr-yellow-in').val().replace(/[^0-9]/g,''));
        $('#ctr-black-in').val($('#ctr-black-in').val().replace(/[^0-9]/g,''));
    }, .01)
});