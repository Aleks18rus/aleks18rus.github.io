//1
$(document).ready(function () {
    $('.icon1').mouseenter(function () {
        $(this).find('.hover').show();
        $(this).find('.castle').hide();
        $(this).find('.hover_img').addClass('hover_');
    });
    $('.icon1').mouseleave(function () {
        $(this).find('.hover').hide();
        $(this).find('.castle').show();
        $(this).find('.hover_img').removeClass('hover_');
    });


    $('.question-btn > span').click(function () {
        $(this).css({
            'background-color': '#cfa55b',
            'box-shadow': '0 0 38px #9d6709'
        });
    });
})
//2
$(document).ready(function () {
    $('.prev').on('click', function () {
        var current = $('.tab-content .show-content.active');
        if (current.prev('.tab-content .show-content')[0]) {
            current.removeClass('active');
            current.prev('.tab-content .show-content').addClass('active');
        } else {
            current.removeClass('active');
            $(".tab-content .show-content:first").addClass('active');
        }
        if (current.index() > 1) {
            $('.paginator .paginator-btn').removeClass('active');
            $('.paginator .paginator-btn').eq(current.index() - 2).addClass('active');
        }
    });


    $('.next').on('click', function () {
        var current = $('.tab-content .show-content.active');
        if (current.next('.tab-content .show-content')[0]) {
            current.removeClass('active');
            current.next('.tab-content .show-content').addClass('active');
            if ($('.tab-content .show-content').length - current.index() == 1) {
                $('.question-next').hide();
                $('.results').css("display", "block");
            }
        }
        $('.paginator .paginator-btn').removeClass('active');
        if (current.index() <= $('.tab-content .show-content').length + 1) {
            $('.paginator .paginator-btn').eq(current.index()).addClass('active');
        }
    });
});

//3
     $(document).ready(function() {

                            $(".box").click(function() {
                                var discount = Math.floor((Math.random() * 5) + 5);
                                var discount_msg = "<p>Your Discount is " + discount + "%</p>";
                                $(this).append(discount_msg);
                                $('.box').each(function() {
                                    $(this).unbind('click');

                                });
                            });
                        }); //end doc ready
//4
  function collision($div1, $div2) {
            var x1 = $div1.offset().left;
            var w1 = 40;
            var r1 = x1 + w1;
            var x2 = $div2.offset().left;
            var w2 = 40;
            var r2 = x2 + w2;

            if (r1 < x2 || x1 > r2) return false;
            return true;

        }

        // // slider call


        $('#slider, #slider-1').slider({
            range: true,
            min: 47,
            max: 472,
            values: [106, 402],
            slide: function(event, ui) {

                $('.ui-slider-handle:eq(0) .price-range-min').html(ui.values[0] + 'м2');
                $('.ui-slider-handle:eq(1) .price-range-max').html(ui.values[1] + 'м2');
                $('.price-range-both').html('<i>$' + ui.values[0] + ' - </i>$' + ui.values[1]);

                //

                if (ui.values[0] == ui.values[1]) {
                    $('.price-range-both i').css('display', 'none');
                } else {
                    $('.price-range-both i').css('display', 'inline');
                }

                //

                if (collision($('.price-range-min'), $('.price-range-max')) == true) {
                    $('.price-range-min, .price-range-max').css('opacity', '0');
                    $('.price-range-both').css('display', 'block');
                } else {
                    $('.price-range-min, .price-range-max').css('opacity', '1');
                    $('.price-range-both').css('display', 'none');
                }

            }
        });

        $('.ui-slider-range').append('<span class="price-range-both value"><i>' + $('#slider, #slider-1').slider('values', 0) + ' - </i>' + $('#slider-1').slider('values', 1) + '</span>');

        $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">' + $('#slider, #slider-1').slider('values', 0) + '</span>');

        $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">' + $('#slider, #slider-1').slider('values', 1) + '</span>');


//5

        $(document).ready(function() {
            $('.gowindow').click(function() { //клик по кнопке
                $('#myoverlay').fadeIn(400, //показываем перекрывающий слой
                    function() {
                        $('#modal_window')
                            .css('display', 'block') //делаем окно видимым
                            .animate({
                                opacity: 1,
                                top: '50%'
                            }, 200); //увеличиваем прозрачность, окно плавно съезжает
                    });
            });
            /* убираем окно */
            $('#window_close, #myoverlay').click(function() { //нажатие по перекрывающему слою или кресту
                $('#modal_window')
                    .animate({
                            opacity: 0,
                            top: '45%'
                        }, 200, //вкл прозрачность, окно идёт вверх
                        function() {
                            $(this).css('display', 'none'); //делаем окно невидимым
                            $('#myoverlay').fadeOut(400); //убираем слой перекрытие
                        }
                    );
            });
        });


