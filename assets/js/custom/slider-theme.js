
    $(document).ready(function() {
    	
    	
    	$("#right-pane").niceScroll({touchbehavior:false,cursorcolor:"#000",boxzoom:true,cursoropacitymax:0.7,cursorwidth:7,cursorborderradius:"4px"}).cursor.css({"background-image":"url(img/mac6scroll.png)"});
				$("#left-pane").niceScroll({touchbehavior:false,cursorcolor:"#000",boxzoom:false,cursoropacitymax:0.7,cursorwidth:6,cursorborderradius:"4px"}).cursor.css({"background-image":"url(img/mac6scroll.png)"}); // MAC like scrollbar
				
				$("#center-pane").niceScroll({touchbehavior:false,cursorcolor:"#000",boxzoom:true,cursoropacitymax:0.7,cursorwidth:6,cursorborderradius:"4px"}).cursor.css({"background-image":"url(img/mac6scroll.png)"}); // MAC like scrollbar
				// Customizable cursor
				// $("#boxscroll").niceScroll({touchbehavior:false,cursorcolor:"#00F",cursoropacitymax:0.7,cursorwidth:11,cursorborder:"1px solid #2848BE",cursorborderradius:"8px"}).cursor.css({"background-image":"url(img/mac6scroll.png)"}); // MAC like scrollbar


				
			});
