var textNum  = 0;
var imageNum  = 0;
var embedNum  = 0;
var linkNum  = 0;

//UI STARTED..............................................................

//please make id unique
$(".text-btn").click(function () {

    textNum= textNum+1;
    //Add serial number later



        $(".dynamic").append(" <div class=\"text\">\n" +
            "                        <div class=\"form-group\">\n" +
            "                            <input value=\"\" type=\"text\" class=\"form-control\" placeholder=\"Title\">\n" +
            "                            <textarea  class=\"form-control\" rows=\"5\" placeholder=\"Write something about text..\"></textarea>\n" +
            "                            <a  class=\"cross \"   id=\"text"+textNum+"\" role=\"button\" ><i class=\"fa fa-times-circle-o\"></i></a>\n" +
            "                            <div  class=\"num\"> </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    ");

        $("#text"+textNum).click(function () {
            $(this).parent().remove();
        })

});
$(".image-btn").click(function () {
    imageNum= imageNum+1;

    //Dynamic text field
    $(".dynamic").append("  <div  class=\"image \">\n" +
        "                        <div class=\"form-group\">\n" +
        "                            <input type=\"text\" class=\"form-control\"  placeholder=\"Insert title\">\n" +
        "                            <div  class=\"image-up text-center\">\n" +
        "                                <input type=\"file\">\n" +
        "                                <i class=\"fa fa-image\"></i>\n" +
        "                                <br>\n" +
        "                                <p>Click to upload</p>\n" +
        "                            </div>\n" +
        "                            </textarea>\n" +
        "                            <a  id=\"image"+imageNum+"\" role=\"button\" class=\"cross\"><i class=\"fa fa-times-circle-o\"></i></a>\n" +
        "                            <div  class=\"num\"> </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    ")

    $("#image"+imageNum).click(function () {
        $(this).parent().remove();
    })

});

$(".code-btn").click(function () {

    embedNum= embedNum+1;
        //Dynamic text field
        $(".dynamic").append("<div  class=\"embed\">\n" +
            "                        <div class=\"form-group\">\n" +
            "                            <input type=\"text\" class=\"form-control\" placeholder=\"Embed an URL\">\n" +
            "                            <a id=\"embed"+embedNum+"\" role=\"button\" class=\"cross\"><i class=\"fa fa-times-circle-o\"></i></a>\n" +
            "                             <div  class=\"num\"> </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    ");


    $("#embed"+embedNum).click(function () {
        $(this).parent().remove();
    })
});

$(".link-btn").click(function () {

    linkNum = linkNum+1;

    //Dynamic text field
    $(".dynamic").append(" <div class=\"link\">\n" +
        "                        <div class=\"form-group\">\n" +
        "                            <input type=\"text\" class=\"form-control\" placeholder=\"Insert Url Title\">\n" +
        "                            <textarea class=\"form-control\" placeholder=\"Write something about link\"></textarea>\n" +
        "                            <a id=\"link"+linkNum+"\" role=\"button\" class=\"cross\"><i class=\"fa fa-times-circle-o\"></i></a>\n" +
        "                            <div  class=\"num\"> </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    ");

    $("#link"+linkNum).click(function () {
        $(this).parent().remove();
    })
});




