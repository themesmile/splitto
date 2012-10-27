
    $("#treeview-sprites").kendoTreeView({
    	dataSource: [{
    		text: "My Documents", expanded: true, spriteCssClass: "rootfolder", items: [
    		{
    			text: "Kendo UI Project", expanded: true, spriteCssClass: "folder", items: [
    			{ text: "about", spriteCssClass: "html" },
    			{ text: "index", spriteCssClass: "html" },
    			{ text: "logo", spriteCssClass: "image" }
    			]
    		},
    		{
    			text: "New Web Site", expanded: true, spriteCssClass: "folder", items: [
    			{ text: "mockup", spriteCssClass: "image" },
    			{ text: "Research", spriteCssClass: "pdf" },
    			]
    		},
    		{
    			text: "Reports", expanded: true, spriteCssClass: "folder", items: [
    			{ text: "February", spriteCssClass: "pdf" },
    			{ text: "March", spriteCssClass: "pdf" },
    			{ text: "April.pdf", spriteCssClass: "pdf" }
    			]
    		},
			{
    			text: "Reports", expanded: true, spriteCssClass: "folder", items: [
    			{ text: "February", spriteCssClass: "pdf" },
    			{ text: "March", spriteCssClass: "pdf" },
    			{ text: "April", spriteCssClass: "pdf" }
    			]
    		}
    		],
			
    	}]

    });
