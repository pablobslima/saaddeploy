$(document).ready(function () {
    $('input').keypress(function(event){
        event.preventDefault();
    });
    $('input').change(function () {
                var atual = $(this)
                $(this).parent().siblings().each(function (){
                    $(this).find('input').each(function (){
                        if( $(this).val() == atual.val() && atual.val() > 0 ) {
                            atual.css("border", "5px solid red");
                            atual.addClass('borderclass');
                            $(this).css("border", "5px solid red");
                            $(this).addClass('borderclass');
                        }
                    });
                });
                $('.borderclass').each(function (){
                    var self = $(this)
                    count = 0;
                    $(this).parent().siblings().each(function (){
                        $(this).find('input').each(function (){
                            if( self.val() == $(this).val() ){
                                count++;
                            }
                        });
                    });
                    if (count == 0){
                        self.removeClass('borderclass');
                        self.css("border", "1px solid #ccc");
                    }
                });

    });




});




//        $(this).closest('.row').find('input').each(function (){
//                $(this).css("border", "5px solid red");
//        });