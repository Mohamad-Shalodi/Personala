$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $("#home").css("background-position-y", scroll / 2);
    let skillsscroll = (scroll - $("#home").height() - $("#about").height()) / 2;
    if (skillsscroll < -250)
        skillsscroll = -250;
    let contactscroll = scroll;
    $("#skills").css("background-position-y", skillsscroll * 2 / 3);

    if (contactscroll < 0)
        contactscroll = 0;
    //$("#contact").css("background-position-y", -contactscroll);

    if (scroll >= 50)
        $("#navBar").addClass("navBarScrolled");
    else if (scroll <= 20)
        $("#navBar").removeClass("navBarScrolled");

    if (scroll < $("#home").height()) {
        $("#homelink")[0].className = 'active';
        $("#aboutlink")[0].className = '';
        $("#skillslink")[0].className = '';
        $("#serviceslink")[0].className = '';
        $("#contactlink")[0].className = '';
    } else if (scroll < $("#home").height() + $("#about").height()) {
        $("#homelink")[0].className = '';
        $("#aboutlink")[0].className = 'active';
        $("#skillslink")[0].className = '';
        $("#serviceslink")[0].className = '';
        $("#contactlink")[0].className = '';
    } else if (scroll < $("#home").height() + $("#about").height() + $("#skills").height()) {
        $("#homelink")[0].className = '';
        $("#aboutlink")[0].className = '';
        $("#skillslink")[0].className = 'active';
        $("#serviceslink")[0].className = '';
        $("#contactlink")[0].className = '';
    } else if (scroll < $("#home").height() + $("#about").height() + $("#skills").height() + $("#services").height()) {
        $("#homelink")[0].className = '';
        $("#aboutlink")[0].className = '';
        $("#skillslink")[0].className = '';
        $("#serviceslink")[0].className = 'active';
        $("#contactlink")[0].className = '';
    } else if (scroll < $("#home").height() + $("#about").height() + $("#skills").height() + $("#services").height() + $("#contact").height()) {
        $("#homelink")[0].className = '';
        $("#aboutlink")[0].className = '';
        $("#skillslink")[0].className = '';
        $("#serviceslink")[0].className = '';
        $("#contactlink")[0].className = 'active';
    }
});


var sentences = ["Web Developer", "Problem Solver", "Mohamad Shalodi"];
var isWriting = false;
var sentenceIndex = sentences.length - 1;
var indexInSentence = -1;
var isWaiting = false;
setInterval(() => {
    if (isWaiting)
        return;
    if (isWriting) {
        if (indexInSentence >= sentences[sentenceIndex].length) {
            isWriting = false;
            isWaiting = true;
            setTimeout(() => {
                isWaiting = false;
            }, 1000);
        } else {
            var text = $("#sentenceWriter").html();
            text += sentences[sentenceIndex][indexInSentence];
            indexInSentence++;
            $("#sentenceWriter").html(text);
        }
    } else {
        if (indexInSentence < 0) {
            indexInSentence = 0;
            sentenceIndex = (sentenceIndex + 1) % sentences.length;
            isWriting = true;
            isWaiting = true;
            setTimeout(() => {
                isWaiting = false;
            }, 500);
        } else {
            var text = $("#sentenceWriter").html();
            text = text.substring(0, text.length - 1);
            indexInSentence--;
            $("#sentenceWriter").html(text);
        }
    }
}, 60);

$("#menuOpen").click(function () {
    var currTrans = $('#navListContainer').css('transform').split(/[()]/)[1];
    var posx = currTrans.split(',')[4];

    if (posx <= 0) {
        $("#navListContainer").css("transform", "translateX(300px)");
        $("#menuOpen").css("transform", "rotateZ(0deg)");
    } else {
        $("#navListContainer").css("transform", "translateX(0px)");
        $("#menuOpen").css("transform", "rotateZ(180deg)");
    }
});