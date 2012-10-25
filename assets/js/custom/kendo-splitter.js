
    $(document).ready(function() {            		
    	$("#vertical").kendoSplitter({
    		orientation: "vertical",
    		panes: [
    		{ collapsible: false, size: "200px" },
    		{ collapsible: false },
    		{ collapsible: false, resizable: false, size: "90%" }
    		]
    	});

    	$("#horizontal").kendoSplitter({
    		panes: [
    		{ collapsible: true, min: "150px", max: "400px" },
    		{ collapsible: false, size: "70%" },
    		{ collapsible: true, resizable: true, min: "150px", max: "400px" }
    		],
    		orientation: "horizontal"
    	});
    });
