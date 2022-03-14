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

$('.rtg .div-input .inpt-text').blur(() => {
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

$('.rtg .div-input .inpt-text').keydown(function () {
    setTimeout(function () {
        $('#rtg-red-in-in').val($('#rtg-red-in').val().replace(/[^0-9]/g,''));
        $('#rtg-green-in').val($('#rtg-green-in').val().replace(/[^0-9]/g,''));
        $('#rtg-blue-in').val($('#rtg-blue-in').val().replace(/[^0-9]/g,''));
    }, .01)
});