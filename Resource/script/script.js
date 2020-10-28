$(document).ready(function(){
    var i = 1
    $('#next').click(function(){
        var currimg = $('.show')
        var nextimg = currimg.next();
        if(i!=5){
            currimg.removeClass('show')
            nextimg.addClass('show')
            i++           
        }
    })
    $('#prev').click(function(){
        var currimg = $('.show')
        var previmg = currimg.prev();
        if(i!=1){
            currimg.removeClass('show')
            previmg.addClass('show')
            i--
        }
    })

})
