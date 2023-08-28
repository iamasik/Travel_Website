/*---------Striky------*/

$(document).ready(function(){
    $('.About').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('striky');
        }else{
            $('nav').removeClass('striky');
        }
    },{
        offset:'600px;'
    })
// ----------------------------------------------------------------------------------
// ==================================================================================
    /*----------Animation1------*/
    $('.Animation1').waypoint(function(direction){
        $('.Animation1').addClass('animate__animated animate__fadeInUp');
    },{
        offset:'500px;'
    })
    /*----------Animation2------*/
    $('.Animation2').waypoint(function(direction){
        $('.Animation2').addClass('animate__animated animate__fadeInLeft');
    },{
        offset:'500px;'
    })
    /*----------Animation3------*/
    $('.Animation3').waypoint(function(direction){
        $('.Animation3').addClass('animate__animated animate__fadeInRight');
    },{
        offset:'500px;'
    })
    /*----------Animation4------*/
    $('.Animation4').waypoint(function(direction){
        $('.Animation4').addClass('animate__animated animate__fadeIn');
    },{
        offset:'500px;'
    })
    /*----------Animation5------*/
    $('.Animation5').waypoint(function(direction){
        $('.Animation5').addClass('animate__animated animate__fadeInDown');
    },{
        offset:'500px;'
    })
    /*----------Animation5------*/
    $('.Animation6').waypoint(function(direction){
        $('.Animation6').addClass('animate__animated animate__fadeInUp');
    },{
        offset:'500px;'
    })
})
