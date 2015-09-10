var XKCD_dict = {
    "ЗНАКОМЫЕ ЧУВАКИ": "знакомые чуваки",
    "ВРОДЕ КАК": "вроде как",
    "ПОСТ НА TUMBLR'Е": "пост на tumblr'е",
    "ОТОМСТИТЬ ЗА": "отомстить за",
    "КОООСМОС": "кооосмос",
    "VIRTUAL BOY": "virtual boy",
    "ТАМАГОЧИ": "тамагочи",
    "АТОМНЫЙ": "атомный",
    "ЭЛЬФИЙСКИЙ ЛОРД": "эльфийский лорд",
    "КОТ": "кот",
    "ЕДА НА СКОРОСТЬ": "еда на скорость",
    "ДУХИ РЕКИ": "духи реки",
    "КВН": "квн",
    "ВИНОВЕН, И ВСЕ ПРЕКРАСНО ЗНАЮТ": "виновен, и все прекрасно знают"
}

$(document).ready(function() {
    var replaced = document.body.innerHTML;
    $.each(XKCD_dict, function( key, value) {
        var regEx = "(" + key + ")(?!([^<]+)?>)"
        replaced = replaced.replace(new RegExp(regEx, "ig"), value.toUpperCase());  
    })
    document.body.innerHTML = replaced
});
