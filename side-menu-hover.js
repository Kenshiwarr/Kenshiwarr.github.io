
var atmt;
var mcheck;

const url_query_params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  var isMenuOpen = url_query_params.ismenuopen; // "some_value"

  console.log(isMenuOpen)

function notForMobile(check) {
    if (check) {
        if ($('#temp_not-for-mobile').length !== 0) {
            $('#temp_not-for-mobile').addClass('nf-mobile')
            $('#temp_not-for-mobile').html('This page is not adapted for mobile devices')
        }
    } else {
        if ($('#temp_not-for-mobile').length !== 0) {
            $('#temp_not-for-mobile').removeClass('nf-mobile')
            $('#temp_not-for-mobile').html($('#temp_not-for-mobile').attr('prev-val'))
        }
    }
    

    
}

var mfcs=window.location.href;


if (mobileCheck() || window.innerWidth <= 991) {
    mcheck = true;
    $('#homege').hide();
    notForMobile(true)
} else {
    mcheck = false;
    notForMobile(false)
}

if (window.name == 'false' || window.name == '') {
    $('#sideMenu-main').hide();
    $('#body-dark_bg_top').hide();
    $('#homege').removeClass('actg');
    $('#navbar-toggle_menu').removeClass('active');
} else if (window.name == 'true') {
    $('#sideMenu-main').show();
    $('#body-dark_bg_top').show();
    $('#navbar-toggle_menu').addClass('active');
    $('#homege').addClass('actg');
}
 if (isMenuOpen !== null) {
    $.each($('#lgmenu-main a'), function() {
        let lgmenu_href = $(this).attr('href').split('?ismenuopen=')
        $(this).attr('href',lgmenu_href[0] + '?ismenuopen='+isMenuOpen)
      });
 } else {
    /* $('#navbar-toggle_menu').addClass('active');
    $('#homege').addClass('actg'); */
 }

    

//if (mobileCheck() || $(window).width() <= 990) 
    
    $(window).on('resize',function() {
        if ((mobileCheck() || window.innerWidth <= 991)) {
            if (mcheck === false) {
                mcheck = true;
                console.log('wide screen check true');
                $('#homege').hide();
                $('#navbar-toggle_menu').removeClass('active');
                
    $('#sideMenu-main').hide();
    $('#body-dark_bg_top').hide();
    notForMobile(true)
            }
           
        } else if ((!mobileCheck() || window.innerWidth > 991)) {
            if (mcheck === true) {
                mcheck = false;
            console.log('wide screen check false');
            $('#homege').show();
            $('#homege').removeClass('actg');
    $('#sideMenu-main').hide();
    $('#body-dark_bg_top').hide();
    $.each($('#lgmenu-main a'), function() {
        let lgmenu_href = $(this).attr('href').split('?ismenuopen=')
        $(this).attr('href',lgmenu_href[0] + '?ismenuopen=true');
        isMenuOpen = 'true';
        window.name = isMenuOpen;
      });
    notForMobile(false)
            }
            
        }
    });
    
    /* $('#sideMenu-main').hide(); */
    /* $('#body-dark_bg_top').hide(); */
$('#navbar-toggle_menu').on('touchstart',function() {
    if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $('#sideMenu-main').stop()
        $('#sideMenu-main').animate({
            width: "toggle"},200,function() {
                
                $('#sideMenu-main').show()
                
            });
            $('#body-dark_bg_top').show();
            $('#body-dark_bg_top').stop();
                $('#body-dark_bg_top').animate({
              opacity: "0.5"},200,function() {
                $.each($('#lgmenu-main a'), function() {
                    let lgmenu_href = $(this).attr('href').split('?ismenuopen=')
                    $(this).attr('href',lgmenu_href[0] + '?ismenuopen=true')
                    isMenuOpen = 'true';
                    window.name = isMenuOpen;
                  });
              });
            
       
    } else {
        $(this).removeClass('active');
        $('#sideMenu-main').stop()
        $('#sideMenu-main').animate({
        width: "toggle"},200,function() {
            $('#sideMenu-main').hide();
            
        });
        $('#body-dark_bg_top').stop();
       
                $('#body-dark_bg_top').animate({
              opacity: "0"},200,function() {
                $('#body-dark_bg_top').hide();
                $.each($('#lgmenu-main a'), function() {
                    let lgmenu_href = $(this).attr('href').split('?ismenuopen=')
                    $(this).attr('href',lgmenu_href[0] + '?ismenuopen=false')
                    isMenuOpen = 'false';
                    window.name = isMenuOpen;
                  });
              });
    }

    $('#body-dark_bg_top').on('click',function() {
       if ($('#navbar-toggle_menu').hasClass('active')) {
        $('#navbar-toggle_menu').removeClass('active');
        $('#sideMenu-main').stop()
        $('#sideMenu-main').animate({
            width: "toggle"},200,function() {
                $('#sideMenu-main').hide()
            });
            $('#body-dark_bg_top').stop();
                $('#body-dark_bg_top').animate({
              opacity: "0"},200,function() {
                $('#body-dark_bg_top').hide();
                $.each($('#lgmenu-main a'), function() {
                    let lgmenu_href = $(this).attr('href').split('?ismenuopen=')
                    $(this).attr('href',lgmenu_href[0] + '?ismenuopen=false')
                    isMenuOpen = 'false';
                    window.name = isMenuOpen;
                  });
              });
       }
        
    });
    
});
    /* $('#body-dark_bg_top').hide(); */
    /* $('#sideMenu-main').hide() */
    $('#homege').on({
        'mouseenter':function() {
            clearTimeout(atmt);
            if ((!$('#homege').hasClass('actg'))) {
                $('#homege').addClass('actg');
          const spanCoord = $(this).offset();
          //$(this).css('width','20rem');
          $('#sideMenu-main').stop();
          $('#sideMenu-main').animate({
              width: "toggle"},200,function() {
                  $('#sideMenu-main').show();
                  $.each($('#lgmenu-main a'), function() {
                    let lgmenu_href = $(this).attr('href').split('?ismenuopen=')
                    $(this).attr('href',lgmenu_href[0] + '?ismenuopen=true')
                    isMenuOpen = 'true';
                    window.name = isMenuOpen;
                  });
                  
              });
              $('#body-dark_bg_top').stop();
              $('#body-dark_bg_top').show();
          $('#body-dark_bg_top').animate({
              opacity: "0.5"},200,function() {
              });
              
            };
            

    
            
           // $(this).css({top: spanCoord.top-tTooltip.outerHeight(), left: spanCoord.left+(obj.outerWidth()/2)-(tTooltip.outerWidth()/2)});
            
          
        }});

        /* $('.hmenu').on({
            'mouseenter':function() {
                clearTimeout(atmt);
            },
            
            'mouseleave':function() {
            
                
            
        }   
        }); */
        $('#body-dark_bg_top').on('mouseenter',function() {
            clearTimeout(atmt);
            if ($('#homege').hasClass('actg')) {
                atmt = setTimeout(() => {
                    $('#sideMenu-main').stop()
                    $('#sideMenu-main').animate({
                    width: "toggle"},200,function() {
                        $('#sideMenu-main').hide();
                        
                    });
                    $('#body-dark_bg_top').stop();
                $('#body-dark_bg_top').animate({
              opacity: "0"},200,function() {
                $('#body-dark_bg_top').hide();
                $('#homege').removeClass('actg');
                $.each($('#lgmenu-main a'), function() {
                    let lgmenu_href = $(this).attr('href').split('?ismenuopen=')
                    $(this).attr('href',lgmenu_href[0] + '?ismenuopen=false')
                    isMenuOpen = 'false';
                    window.name = isMenuOpen;
                  });
              });
                }, 400);
            }
            
        })

console.log("%c!\n\n! DO NOT USE / COPY THE API WITHOUT PERMISSION !!!\n\n!", "font-size: 26px; color: red;");
                   