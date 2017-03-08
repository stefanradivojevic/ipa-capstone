/* зависна од jquery-a и важи само за mobile view */
$(function() {
    if (window.innerWidth <= 768 ) {
    		var mobNavBar, evenementsPod, evenements, evenementsA;

    		mobNavBar = $('#mobNavBar');
    		evenementsPod = $('#evenementsPod');
    		evenements = $('#evenements');
    		evenementsA = $('#evenementsA');

    		$('#mobNavDugme').on('click', function(e) {
    			e.stopPropagation();
                if (mobNavBar.css('display') == 'none')
    				mobNavBar.slideDown(200);
    			else {
    				evenementsPod.slideUp(200);
    				mobNavBar.slideUp(200);
    				evenementsA.css('color', '#ffffff');
    				}
    		});
    		
            function gasiSve(){
                    mobNavBar.slideUp(200);
                    evenementsPod.slideUp(100);
                    evenementsA.css('color', '#ffffff');
            }

    		$('#mobNavBar').on('click', gasiSve);

    		evenements.on('click', function(e) {
                e.preventDefault();
    			if (evenementsPod.css('display') == 'none') {
    				evenementsPod.slideDown(200);
    				evenementsA.css('color', '#4c9ed9');
    			}
    			else {
    				evenementsPod.slideUp(100);
    				evenementsA.css('color', '#ffffff');
    			}
    			e.stopPropagation();
    		});

            evenementsPod.on('click', function(e){
                e.stopPropagation();
                gasiSve();
            });

            $('body').on('click', function() {
                if (mobNavBar.css('display') != 'none')
                    gasiSve();
            });
            
    }
    	});


$(function() {
            var backToTopButton, amountScrolled;

            backToTopButton = $('#backButton');
            amountScrolled = 300;
            console.log($(window).scrollTop());
            // back to top button
            $(window).scroll(function() {
                if ( $(window).scrollTop() > amountScrolled) {
                    backToTopButton.fadeIn('200');
                    backToTopButton.css("cursor", "pointer");
                } else {
                    backToTopButton.fadeOut('200');
                }
            });

            backToTopButton.on('click', function(){
                $('html, body').animate({
                        scrollTop: 0
                        }, 600);
                        return false;
            });
            // back to top button end
});