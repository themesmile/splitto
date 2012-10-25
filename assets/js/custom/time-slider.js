
		$(function(){
			//demo 1
			var abc = $('select#speed').selectToUISlider().next();
					
			//demo 2
			$('select#valueA, select#valueB').selectToUISlider();
		
			//demo 3
			$('select#valueAA, select#valueBB').selectToUISlider({
				labels: 12
			});
			
			//fix color 
			fixToolTipColor();
		});
		//purely for theme-switching demo... ignore this unless you're using a theme switcher
		//quick function for tooltip color match
		function fixToolTipColor(){
			//grab the bg color from the tooltip content - set top border of pointer to same
			$('.ui-tooltip-pointer-down-inner').each(function(){
				var bWidth = $('.ui-tooltip-pointer-down-inner').css('borderTopWidth');
				var bColor = $(this).parents('.ui-slider-tooltip').css('backgroundColor')
				$(this).css('border-top', bWidth+' solid '+bColor);
			});	
		}

	