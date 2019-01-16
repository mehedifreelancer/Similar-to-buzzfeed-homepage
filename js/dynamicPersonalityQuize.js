
var qId = 0;
function quizeForm(){
  qId++;




// DO substract with every number to decrease the every value ..............................


        $(".dynamic-quize-body").append(" <div id=\"identifier\" class=\"me\">\n" +
            "                                    <div class=\"body-head\">\n" +
            "                                        <h4>Quize "+qId+" <span class=\"no\"></span> <i role='button' class=\" fa fa-times close-quize\"></i> <i class=\"fa fa-edit pull-right\"></i></h4>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"body-quize\">\n" +
            "                                        <div class=\"question\">\n" +
            "                                            <h5>Question</h5>\n" +
            "                                            <br>\n" +
            "                                            <div class=\"\">\n" +
            "                                                <textarea rows=\"4\" placeholder=\"Question\" class=\"form-control text-question\"></textarea>\n" +
            "\n" +
            "\n" +
            "                                                <div class=\"image-place text-center image-question\">\n" +
            "                                                    <h1 >Image Place</h1>\n" +
            "                                                    <h1><i class=\"fa fa-image\"></i></h1>\n" +
            "                                                    <i role=\"button\" class=\"fa fa-times-circle-o close-image-question\"></i>\n" +
            "                                                </div>\n" +
            "\n" +
            "\n" +
            "                                                <div role=\"button\" class=\"question-image\">\n" +
            "                                                    <input type=\"file\">\n" +
            "                                                    <i role=\"button\" class=\"fa fa-image\"></i>\n" +
            "                                                </div>\n" +
            "                                            </div>\n" +
            "                                        </div>\n" +
            "                                        <div class=\"answer\">\n" +
            "                                            <h5>Answer</h5>\n" +
            "                                            <div class=\"ans-divs\">\n" +
            "                                                <div class=\"row\">\n" +
            "                                                    <div class=\"col-xs-6 ans1\">\n" +
            "                                                        <textarea class=\"form-control\" placeholder=\"Answer\" rows=\"4\"></textarea>\n" +
            "                                                        <i role=\"button\" class=\"fa fa-close ans-close\"></i>\n" +
            "                                                        <h5 class=\"ans-btn\"><input type=\"radio\" name=\"ans\"  > Correct</h5>\n" +
            "                                                    </div>\n" +
            "                                                    <div class=\"col-xs-6 ans2\">\n" +
            "                                                        <textarea class=\"form-control\" placeholder=\"Answer\" rows=\"4\"></textarea>\n" +
            "                                                        <i role=\"button\" class=\"fa fa-close ans-close\"></i>\n" +
            "                                                        <h5 class=\"ans-btn\"><input type=\"radio\" name=\"ans\"  > Correct</h5>\n" +
            "                                                    </div>\n" +
            "                                                </div>\n" +
            "                                                <br>\n" +
            "                                                <div class=\"row \">\n" +
            "                                                    <div class=\"col-xs-6 image1\">\n" +
            "                                                        <i role=\"button\" class=\"fa fa-close\"></i>\n" +
            "                                                        <div class=\"ans-image\">\n" +
            "                                                        </div>\n" +
            "                                                        <div class=\"ans-image-btn \">\n" +
            "                                                            <input type=\"file\">\n" +
            "                                                            <i class=\"fa fa-image\"></i>\n" +
            "                                                        </div>\n" +
            "                                                        <h5 class=\"ans-btn\"><input type=\"radio\" name=\"ans\"  > Correct</h5>\n" +
            "                                                    </div>\n" +
            "                                                    <div class=\"col-xs-6 image2\">\n" +
            "                                                        <i role=\"button\" class=\"fa fa-close\"></i>\n" +
            "                                                        <div class=\"ans-image\">\n" +
            "                                                        </div>\n" +
            "                                                        <div class=\"ans-image-btn \">\n" +
            "                                                            <input type=\"file\">\n" +
            "                                                            <i class=\"fa fa-image\"></i>\n" +
            "                                                        </div>\n" +
            "                                                        <h5 class=\"ans-btn\"><input type=\"radio\" name=\"ans\"  > Correct</h5>\n" +
            "                                                    </div>\n" +
            "                                                </div>\n" +
            "                                                <br>\n" +
            "                                            </div>\n" +
            "                                            <div class=\"row\">\n" +
            "                                                <div class=\"col-xs-6\">\n" +
            "                                                    <a class=\"btn btn-primary btn-block addAnsText\">Add answer text</a>\n" +
            "                                                </div>\n" +
            "                                                <div class=\"col-xs-6\">\n" +
            "                                                    <a class=\"btn btn-primary btn-block addAnsImage\">Add Answer image</a>\n" +
            "                                                </div>\n" +
            "                                            </div>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                            </div>")


  //  $(".close-quize").click(function () {

 //   })

    }



$(document).ready(function () {
    quizeForm();
})
$(".addQuiz").click(function () {

    quizeForm();

})







    //Adding dynamic answer options here.................

    $(".addAnsText").click(function () {

        $(".ans-divs").append("<div class=\"row\">\n" +
            "                                                <div class=\"col-xs-6 ans1\">\n" +
            "                                                    <textarea class=\"form-control\" placeholder=\"Answer\" rows=\"4\"></textarea>\n" +
            "                                                    <i role=\"button\" class=\"fa fa-close ans-close\"></i>\n" +
            "                                                    <h5 class=\"ans-btn\"><input type=\"radio\" name=\"ans\"  > Correct</h5>\n" +
            "                                                </div>\n" +
            "                                                <div class=\"col-xs-6 ans2\">\n" +
            "                                                    <textarea class=\"form-control\" placeholder=\"Answer\" rows=\"4\"></textarea>\n" +
            "                                                    <i role=\"button\" class=\"fa fa-close ans-close\"></i>\n" +
            "                                                    <h5 class=\"ans-btn\"><input type=\"radio\" name=\"ans\"  > Correct</h5>\n" +
            "                                                </div>\n" +
            "                                            </div>\n" +
            "                                            <br>");


        $(".ans-close").click(function () {
            $(this).parent().remove();
        })
    })


    $(".addAnsImage").click(function () {
        $(".ans-divs").append(" <div class=\"row \">\n" +
            "                                                <div class=\"col-xs-6 image1\">\n" +
            "                                                    <i role=\"button\" class=\"fa fa-close ans-close\"></i>\n" +
            "                                                    <div class=\"ans-image\">\n" +
            "                                                    </div>\n" +
            "                                                    <div class=\"ans-image-btn \">\n" +
            "                                                        <input type=\"file\">\n" +
            "                                                        <i class=\"fa fa-image\"></i>\n" +
            "                                                    </div>\n" +
            "                                                    <h5 class=\"ans-btn\"><input type=\"radio\" name=\"ans\"  > Correct</h5>\n" +
            "                                                </div>\n" +
            "                                                <div class=\"col-xs-6 image2\">\n" +
            "                                                    <i role=\"button\" class=\"fa fa-close ans-close \"></i>\n" +
            "                                                    <div class=\"ans-image\">\n" +
            "                                                    </div>\n" +
            "                                                    <div class=\"ans-image-btn \">\n" +
            "                                                        <input type=\"file\">\n" +
            "                                                        <i class=\"fa fa-image\"></i>\n" +
            "                                                    </div>\n" +
            "                                                    <h5 class=\"ans-btn\"><input type=\"radio\" name=\"ans\"  > Correct</h5>\n" +
            "                                                </div>\n" +
            "                                            </div>\n" +
            "                                            <br>");


        $(".ans-close").click(function () {
            $(this).parent().remove();
        })
    });







//........................................
//condition for question text type question or image type question..........................................
$(".question-image").click(function () {
    $(".text-question").css({
        "display":"none"
    })
    $(".image-question").css({
        "display":"block"
    })
})

$(".close-image-question").click(function () {
    $(".text-question").css({
        "display":"block"
    })
    $(".image-question").css({
        "display":"none"
    })
})
//condition for question text type question or image type question (Code finished here ) .....................


