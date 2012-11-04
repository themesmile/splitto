	$(document).ready(function(){ 	
		$("#horizontal").kendoSplitter({
			panes: [
				{ collapsible: true, size: "200px", min: "150px", max: "400px" },
				{ collapsible: false, min: "700px" },
				{ collapsible: true, collapsed: false, resizable: true, size: "300px"}
			]
		});

	});
