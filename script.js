var currentPaneID;

$(document).ready(function() {
	"use strict";
	var aboutheight = $(".about").css("height");
	$(".videoPlayer").css("height", aboutheight);
});

$(window).resize(function() {
	"use strict";
	var aboutheight = $(".about").css("height");
	$(".videoPlayer").css("height", aboutheight);
});

var panes = [["pane1", "https://www.youtube.com/embed/wKR4r5IbBAg"], 
			 ["pane2", "https://www.youtube.com/embed/4Rp250GoYZQ"], 
			 ["pane3", "https://www.youtube.com/embed/36qE-45fMBw"], 
			 ["pane4", "https://www.youtube.com/embed/iMcQ3CxR66Q"],
		     ["pane5", "https://www.youtube.com/embed/rUCQpkNdFnY"], 
			 ["pane6", ""], 
			 ["pane7", ""], 
			 ["pane8", ""]];

var paneGithubs = ["", "https://github.com/Oshi-Github/Irrlicht-Scene", "https://github.com/Oshi-Github/RakNet-Blackjack-NoGUI", "", "", "", "", ""];

$('.pane').click(function() {
	"use strict";
	currentPaneID = $(this).attr("id");
	
	for (var i = 0; i < panes.length; i++)
		{
			if (panes[i][0] === currentPaneID)
				{
					$('.videoPlayer').css("display", "block");	document.getElementById('videocontain').src = panes[i][1];
					
					if (paneGithubs[i] !== "") 
						{		
							$('#githubcontrols').css("display", "block"); document.getElementById("githubanchor").href = paneGithubs[i];
						}
				}
		}
});

$('#videocontrols').click(function() {
	"use strict";
	$('.videoPlayer').css("display", "none");
	document.getElementById('videocontain').src = "blank";
	$('#githubcontrols').css("display", "none");
	document.getElementById("githubanchor").href = "#";
});