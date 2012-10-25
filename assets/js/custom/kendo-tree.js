
    $("#treeview-sprites").kendoTreeView({
    	dataSource: [{
    		text: "My Documents", expanded: true, spriteCssClass: "rootfolder", items: [
    		{
    			text: "Kendo UI Project", expanded: true, spriteCssClass: "folder", items: [
    			{ text: "about.html", spriteCssClass: "html" },
    			{ text: "index.html", spriteCssClass: "html" },
    			{ text: "logo.png", spriteCssClass: "image" }
    			]
    		},
    		{
    			text: "New Web Site", expanded: true, spriteCssClass: "folder", items: [
    			{ text: "mockup.jpg", spriteCssClass: "image" },
    			{ text: "Research.pdf", spriteCssClass: "pdf" },
    			]
    		},
    		{
    			text: "Reports", expanded: true, spriteCssClass: "folder", items: [
    			{ text: "February.pdf", spriteCssClass: "pdf" },
    			{ text: "March.pdf", spriteCssClass: "pdf" },
    			{ text: "April.pdf", spriteCssClass: "pdf" }
    			]
    		}
    		]
    	}]
    });
