
var XKCD_dict = {
    "свидетели": "знакомые чуваки",
    "предположительно": "вроде как",
    "новые исследования": "пост на tumblr'е",
    "восстановить": "отомстить за",
    "космос": "кооосмос",
    "google glass": "virtual boy",
    "смартфон": "тамагочи",
    "электрический": "атомный",
    "депутат": "эльфийский лорд",
    "автомобиль": "кот",
    "выборы": "еда на скорость",
    "лидеры партии": "духи реки",
    "анб": "квн",
    "отказался давать комментарий": "виновен, и все прекрасно знают"
}

$(document).ready(function() {
    var replaced = document.body.innerHTML;
    $.each(XKCD_dict, function( key, value) {
        var regEx = "(" + key + ")(?!([^<]+)?>)"
        replaced = replaced.replace(new RegExp(regEx, "ig"), value.toUpperCase());  
    })
    document.body.innerHTML = replaced
});