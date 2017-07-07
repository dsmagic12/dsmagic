ds.controls.psudoPopup = {
	locpos: {
		top: 0,
		left: 0,
		height: 0,
		width: 0
	},
	arrHideSels: ["#psPopContent #idAttachmentsRow"],
	arrReadOnlySels: [],
	init: function(sListNameOrFormURL, bDoNotLoadListForm, afterFx){
		if ( typeof(bDoNotLoadListForm) === "undefined" ) { var bDoNotLoadListForm = false; sListNameOrFormURL = "Tasks"; }
		ds.$.ajax({
			url: ds.p.root +"Style%20Library/ds_psudoPopup.html", 
			method: "GET",
			dataType: "html"
		}).done(function(data, textStatus, jqXHR){
			ds.util.appendToMain(data);
			ds.$(".ds-psPopContent").height((ds.$(".ds-psPopWrapper").height() - ds.$(".ds-psPopTB").height() - ds.$(".ds-psPopBottom").height() - 10));
			ds.controls.psudoPopup.setupEvents();
			if ( bDoNotLoadListForm === false ) {
				ds.controls.psudoPopup.loadListForm(sListNameOrFormURL);
				if ( typeof(afterFx) === "function" ) { afterFx(); }
			}
			else if ( bDoNotLoadListForm === true ) {
				if ( typeof(sListNameOrFormURL) === "undefined" && !sListNameOrFormURL === false ) {
					ds.controls.psudoPopup.hideElements();
					ds.controls.psudoPopup.readonlyElements();
					ds.$(".ds-psPopWrapper").wrap("<div class='ds-psudoPopupWrapper'></div>");
					if ( typeof(afterFx) === "function" ) { afterFx(); }
				}
				else { 
					ds.util.log("loading url |"+ sListNameOrFormURL +"|", true);
					ds.$.get(sListNameOrFormURL).done(function(data, textStatus, jqXHR){
						ds.$(".ds-psPopContent").html(data);
						ds.util.log("ds.$.get reported done... performing cleanup", true);
						ds.$(".ds-psPopContent").html(ds.$(".ds-psPopContent #part1").html());
						ds.util.log("removing toolbars and buttons, expanding the form", true);
						ds.$(".ds-psPopContent .ms-formtoolbar").remove();
						ds.$(".ms-commandLink").click();
						ds.util.log("Sizing to fit", true);
						setTimeout(ds.controls.psudoPopup.sizeToFitY, 750);
						var sTitle = sListNameOrFormURL.substr(sListNameOrFormURL.indexOf("/Lists/"),30);
						sTitle = sTitle.substr(7);
						sTitle = sTitle.substr(0,sTitle.indexOf("/"));
						var sID = GetUrlKeyValue("ID",false,sListNameOrFormURL);
						ds.$(".ds-psPopTB span").text(sTitle);
						ds.$("#btnSubmit").attr("listName",ds.$(".ds-psPopTB > span:first-child").text());
						ds.$("#btnSubmit").attr("itemId",sID);
						ds.$("#btnSubmit").on("click",function(){
							try{
								ds.stor.updateRelated[ds.$(this).attr("listname")](ds.$(this).attr("itemid"));
							}catch(err){
								ds.$(this).parents(".ds-psudoPopupWrapper").fadeOut(750, function(){
									ds.$(this).remove();
								});
							}
						});
						ds.controls.psudoPopup.hideElements();
						ds.controls.psudoPopup.readonlyElements();
						ds.$(".ds-psPopWrapper").wrap("<div class='ds-psudoPopupWrapper'></div>");
						setTimeout(ds.controls.psudoPopup.sizeToFitX, 3000);
						if ( typeof(afterFx) === "function" ) { afterFx(data, textStatus, jqXHR); }
					});
				}
			}
		});
	},
	appendToContent: function(html) {
		ds.$(".ds-psPopContent").append(html);
	},
	sizeToFitY: function(){
		ds.controls.psudoPopup.locpos.height = ds.$(".ds-psPopWrapper")[0].offsetHeight;
		ds.controls.psudoPopup.locpos.width = ds.$(".ds-psPopWrapper")[0].offsetWidth;
		ds.controls.psudoPopup.locpos.top = ds.$(".ds-psPopWrapper")[0].offsetTop;
		ds.controls.psudoPopup.locpos.left = ds.$(".ds-psPopWrapper")[0].offsetLeft;
		ds.controls.psudoPopup.locpos.newheight = ds.controls.psudoPopup.locpos.height;
		ds.controls.psudoPopup.locpos.newwidth = ds.controls.psudoPopup.locpos.width;
		ds.controls.psudoPopup.locpos.newtop = ds.controls.psudoPopup.locpos.top;
		ds.controls.psudoPopup.locpos.newleft = ds.controls.psudoPopup.locpos.left;
		ds.intvls.wfNoScrollY = ds.intvls.wfNoScrollY || {};
		ds.intvls.wfNoScrollY.growBy = 5;
		ds.intvls.wfNoScrollY.tolerance = 8;
		ds.intvls.wfNoScrollY.loopingFx = function(){
			ds.controls.psudoPopup.locpos.newheight = ds.controls.psudoPopup.locpos.newheight+ds.intvls.wfNoScrollY.growBy;
			if ( ds.controls.psudoPopup.locpos.newheight >= 800 ) { ds.controls.psudoPopup.locpos.newheight = 800; clearInterval(ds.intvls.wfNoScrollY.intvl); }
			ds.controls.psudoPopup.locpos.newwidth = ds.controls.psudoPopup.locpos.newwidth+ds.intvls.wfNoScrollY.growBy;
			if ( ds.controls.psudoPopup.locpos.newwidth >= 900 ) { ds.controls.psudoPopup.locpos.newwidth = 700; }
			ds.controls.psudoPopup.locpos.newtop = ds.controls.psudoPopup.locpos.newtop+ds.intvls.wfNoScrollY.growBy;
			ds.controls.psudoPopup.locpos.newleft = ds.controls.psudoPopup.locpos.newleft+ds.intvls.wfNoScrollY.growBy;
			ds.intvls.wfNoScrollY.counter = ds.intvls.wfNoScrollY.counter + 1;
			ds.intvls.wfNoScrollY.growBy = ds.intvls.wfNoScrollY.growBy + 5;
			ds.intvls.wfNoScrollY.pauseMs = ds.intvls.wfNoScrollY.pauseMs + 10;
			if ( ds.intvls.wfNoScrollY.growBy >= 50 ) { ds.intvls.wfNoScrollY.growBy = 50; }
			if ( ds.intvls.wfNoScrollY.pauseMs >= 400 ) { ds.intvls.wfNoScrollY.pauseMs = 400; }
			ds.util.log("setting height for .ds-psPopWrapper to "+ ds.controls.psudoPopup.locpos.newheight, true);
			ds.$(".ds-psPopWrapper").height(ds.controls.psudoPopup.locpos.newheight)
			ds.util.log("setting width for .ds-psPopWrapper to "+ ds.controls.psudoPopup.locpos.newwidth, true);
			ds.$(".ds-psPopWrapper").width(ds.controls.psudoPopup.locpos.newwidth);
			ds.util.log("setting height for .ds-psPopContent to "+ (ds.$(".ds-psPopWrapper").height() - ds.$(".ds-psPopTB").height() - ds.$(".ds-psPopBottom").height()), true);
			ds.$(".ds-psPopContent").height((ds.$(".ds-psPopWrapper").height() - ds.$(".ds-psPopTB").height() - ds.$(".ds-psPopBottom").height() - 10));
			ds.util.log("#psPopContent scrollHeight is "+ ds.$("#psPopContent")[0].scrollHeight, true);
			if ( ds.$("#psPopContent")[0].scrollHeight <= ds.$("#psPopContent")[0].clientHeight /* && ds.$("#psPopContent")[0].scrollWidth <= ds.$("#psPopContent")[0].clientWidth-ds.intvls.wfNoScrollY.tolerance */ ) {
				//setTimeout(ds.controls.sizeToFitX.psudoPopup.sizeToFitX,3000);
				clearInterval(ds.intvls.wfNoScrollY.intvl);
			}
			if ( ds.intvls.wfNoScrollY.counter * ds.intvls.wfNoScrollY.pauseMs >= ds.intvls.wfNoScrollY.timeoutMS ) {
				//setTimeout(ds.controls.sizeToFitX.psudoPopup.sizeToFitX,3000);
				clearInterval(ds.intvls.wfNoScrollY.intvl);
			}
		};
		ds.intvls.wfNoScrollY.pauseMs = 10;
		ds.intvls.wfNoScrollY.counter = 0;
		ds.intvls.wfNoScrollY.timeoutMS = 300000;
		// ping the mouse cursor's position every 15ms and resize the popup along with it until the user releases the mouse button
		ds.intvls.wfNoScrollY.intvl = setInterval(ds.intvls.wfNoScrollY.loopingFx, ds.intvls.wfNoScrollY.pauseMS);
	},
	sizeToFitX: function(){
		ds.controls.psudoPopup.locpos.width = ds.$(".ds-psPopWrapper")[0].offsetWidth;
		ds.controls.psudoPopup.locpos.top = ds.$(".ds-psPopWrapper")[0].offsetTop;
		ds.controls.psudoPopup.locpos.left = ds.$(".ds-psPopWrapper")[0].offsetLeft;
		ds.controls.psudoPopup.locpos.newwidth = ds.controls.psudoPopup.locpos.width;
		ds.controls.psudoPopup.locpos.newtop = ds.controls.psudoPopup.locpos.top;
		ds.controls.psudoPopup.locpos.newleft = ds.controls.psudoPopup.locpos.left;
		ds.intvls.wfNoScrollX = ds.intvls.wfNoScrollX || {};
		ds.intvls.wfNoScrollX.growBy = 5;
		ds.intvls.wfNoScrollX.tolerance = 8;
		ds.util.log("setting width for .ds-psPopContent to 100%",true);
		ds.$(".ds-psPopContent").css("width","100%");
		ds.intvls.wfNoScrollX.loopingFx = function(){
			ds.controls.psudoPopup.locpos.newwidth = ds.controls.psudoPopup.locpos.newwidth + ds.intvls.wfNoScrollX.growBy;
			if ( ds.controls.psudoPopup.locpos.newwidth >= 700 ) { ds.controls.psudoPopup.locpos.newwidth = 700; }
			ds.controls.psudoPopup.locpos.newleft = ds.controls.psudoPopup.locpos.newleft+ds.intvls.wfNoScrollX.growBy;
			ds.intvls.wfNoScrollX.counter++;
			ds.intvls.wfNoScrollX.growBy = ds.intvls.wfNoScrollX.growBy + 5;
			ds.intvls.wfNoScrollX.pauseMs = ds.intvls.wfNoScrollX.pauseMs + 10;
			if ( ds.intvls.wfNoScrollX.growBy >= 50 ) { ds.intvls.wfNoScrollX.growBy = 50; }
			if ( ds.intvls.wfNoScrollX.pauseMs >= 400 ) { ds.intvls.wfNoScrollX.pauseMs = 400; }
			ds.util.log("setting width for .ds-psPopWrapper to "+ ds.controls.psudoPopup.locpos.newwidth, true);
			ds.$(".ds-psPopWrapper").width(ds.controls.psudoPopup.locpos.newwidth);
			ds.util.log("#psPopContent scrollWidth is "+ ds.$("#psPopContent")[0].scrollWidth, true);
			if ( ds.$("#psPopContent")[0].scrollWidth <= ds.$("#psPopContent")[0].clientWidth ) {
				clearInterval(ds.intvls.wfNoScrollX.intvl);
			}
			if ( ds.intvls.wfNoScrollX.counter * ds.intvls.wfNoScrollX.pauseMs >= ds.intvls.wfNoScrollX.timeoutMS ) {
				clearInterval(ds.intvls.wfNoScrollX.intvl);
			}
		};
		ds.intvls.wfNoScrollX.pauseMs = 10;
		ds.intvls.wfNoScrollX.counter = 0;
		ds.intvls.wfNoScrollX.timeoutMS = 300000;
		// ping the mouse cursor's position every 15ms and resize the popup along with it until the user releases the mouse button
		ds.intvls.wfNoScrollX.intvl = setInterval(ds.intvls.wfNoScrollX.loopingFx, ds.intvls.wfNoScrollX.pauseMS);
	},
	changeTitle: function(htmlNewTitle) {
		ds.$(".ds-psPopTB > span:first-child").html(htmlNewTitle);
	},
	changeSubmitFaIcon: function(sNewFaIconClass){
		ds.$(".ds-psPopBottom #btnSubmit i.fa").removeClass("fa-gears").addClass(sNewFaIconClass);
	},
	loadListForm: function(sListURLName) {
		ds.util.log("loading list form |"+ ds.p.root +"Lists/"+sListURLName+"/NewForm.aspx" +"|", true);
		ds.$.ajax({
			url: ds.p.root +"Lists/"+sListURLName+"/NewForm.aspx", 
			method: "GET",
			dataType: "html"
		}).done(function(data, textStatus, jqXHR){
			ds.$(".ds-psPopContent").html(data);
			ds.util.log("ds.$.get reported done... performing cleanup", true);
			ds.$(".ds-psPopContent").html(ds.$(".ds-psPopContent #part1").html());
			ds.util.log("removing toolbars and buttons, expanding the form", true);
			ds.$(".ds-psPopContent .ms-formtoolbar").remove();
			ds.$(".ms-commandLink").click();
			ds.util.log("Sizing to fit", true);
			ds.$(".ds-psPopTB span").text(sListURLName);
			ds.$("#btnSubmit").attr("listName",ds.$(".ds-psPopTB > span:first-child").text());
			ds.$("#btnSubmit").on("click",function(){
				try{
					ds.stor.newRelated[ds.$(this).attr("listName")]();
				}catch(err){
					ds.$(this).parents(".ds-psudoPopupWrapper").fadeOut(750, function(){
						ds.$(this).remove();
					});
				}
			});
			ds.$(".ds-psPopContent").find(".ms-formlabel:contains('TaskID')").parent().find(".ms-formbody").find("select option[value='"+GetUrlKeyValue("ID")+"']").prop("selected",true);
			ds.$(".ms-cui-tabContainer").hide();
			ds.controls.psudoPopup.hideElements();
			ds.controls.psudoPopup.readonlyElements();
			ds.$(".ds-psPopWrapper").wrap("<div class='ds-psudoPopupWrapper'></div>");
			setTimeout(ds.controls.psudoPopup.sizeToFitY, 750);
			setTimeout(ds.controls.psudoPopup.sizeToFitX, 3000);
		});
	},
	setupEvents: function(){
		ds.$(".ds-psPopContent").css("height",(ds.$(".ds-psPopWrapper")[0].clientHeight - ds.$(".ds-psPopTB")[0].clientHeight - ds.$(".ds-psPopBottom")[0].clientHeight)+"px");
		ds.util.log("Resized popup content section");
		
		//ds.$(".ds-psudoPopupWrapper").wrap("<div class='ds-psudoPopupWrapper'></div>");
		
		ds.$(".ds-psPopTBCloseButton,#btnClose").on("click",function(){
			ds.$(this).parents(".ds-psudoPopupWrapper").fadeOut(750, function(){
				ds.$(this).remove();
			});
		});

		ds.$(".ds-psPopResize").on("mousedown",function(e){
			ds.evts.mouseDown = e;
			e.preventDefault();
			ds.controls.psudoPopup.locpos.height = ds.$(".ds-psPopWrapper")[0].offsetHeight;
			ds.controls.psudoPopup.locpos.width = ds.$(".ds-psPopWrapper")[0].offsetWidth;
			ds.controls.psudoPopup.locpos.top = ds.$(".ds-psPopWrapper")[0].offsetTop;
			ds.controls.psudoPopup.locpos.left = ds.$(".ds-psPopWrapper")[0].offsetLeft;
			ds.intvls.wfMouseRelease = ds.intvls.wfMouseRelease || {};
			ds.intvls.wfMouseRelease.loopingFx = function(){
				ds.intvls.wfMouseRelease.counter = ds.intvls.wfMouseRelease.counter + 1;
				ds.$(document).off("mousemove");
				ds.$(document).on("mousemove",function(e){
					ds.evts.mouseMove = e;
					e.preventDefault;
					e.stopPropagation();
					ds.$(".ds-psPopWrapper").css("height",(ds.controls.psudoPopup.locpos.height + (ds.evts.mouseMove.screenY - ds.evts.mouseDown.screenY))+"px").css("width",(ds.controls.psudoPopup.locpos.width + (ds.evts.mouseMove.screenX - ds.evts.mouseDown.screenX))+"px").find(".ds-psPopContent").css("height",(ds.$(".ds-psPopWrapper")[0].clientHeight - ds.$(".ds-psPopTB")[0].clientHeight - ds.$(".ds-psPopBottom")[0].clientHeight)+"px").clearQueue();
					ds.$(document).off("mousemove");
				});
				if ( ds.intvls.wfMouseRelease.counter * ds.intvls.wfMouseRelease.pauseMs >= ds.intvls.wfMouseRelease.timeoutMS ) {
					clearInterval(ds.intvls.wfMouseRelease.intvl);
				}
			};
			ds.intvls.wfMouseRelease.pauseMs = 15;
			ds.intvls.wfMouseRelease.counter = 0;
			ds.intvls.wfMouseRelease.timeoutMS = 300000;
			// ping the mouse cursor's position every 15ms and resize the popup along with it until the user releases the mouse button
			ds.intvls.wfMouseRelease.intvl = setInterval(ds.intvls.wfMouseRelease.loopingFx, ds.intvls.wfMouseRelease.pauseMS);
			ds.$(document).on("mouseup",function(e){
				ds.$(document).off("mousemove");
				ds.$(document).off("mouseup");
				ds.evts.mouseUp = e;
				ds.$(".ds-psPopWrapper").css("height",(ds.controls.psudoPopup.locpos.height + (ds.evts.mouseUp.clientY - ds.evts.mouseDown.clientY))+"px");
				ds.$(".ds-psPopWrapper").css("width",(ds.controls.psudoPopup.locpos.width + (ds.evts.mouseUp.clientX - ds.evts.mouseDown.clientX))+"px");
				ds.$(".ds-psPopContent").css("height",(ds.$(".ds-psPopWrapper")[0].clientHeight - ds.$(".ds-psPopTB")[0].clientHeight - ds.$(".ds-psPopBottom")[0].clientHeight)+"px");
				clearInterval(ds.intvls.wfMouseRelease.intvl);
			});
		});
		
		ds.$(".ds-psPopTB").on("mousedown",function(e){
			ds.evts.mouseDown = e;
			e.preventDefault();
			ds.controls.psudoPopup.locpos.height = ds.$(".ds-psPopWrapper")[0].offsetHeight;
			ds.controls.psudoPopup.locpos.width = ds.$(".ds-psPopWrapper")[0].offsetWidth;
			ds.controls.psudoPopup.locpos.top = ds.$(".ds-psPopWrapper")[0].offsetTop;
			ds.controls.psudoPopup.locpos.left = ds.$(".ds-psPopWrapper")[0].offsetLeft;
			ds.intvls.wfMouseRelease = ds.intvls.wfMouseRelease || {};
			ds.intvls.wfMouseRelease.loopingFx = function(){
				ds.intvls.wfMouseRelease.counter = ds.intvls.wfMouseRelease.counter + 1;
				ds.$(document).off("mousemove");
				ds.$(document).on("mousemove",function(e){
					ds.evts.mouseMove = e;
					e.preventDefault;
					e.stopPropagation();
					ds.$(".ds-psPopWrapper").css("top",(ds.controls.psudoPopup.locpos.top + (ds.evts.mouseMove.screenY - ds.evts.mouseDown.screenY))+"px").css("left",(ds.controls.psudoPopup.locpos.left + (ds.evts.mouseMove.screenX - ds.evts.mouseDown.screenX))+"px");
					ds.$(document).off("mousemove");
				});
				if ( ds.intvls.wfMouseRelease.counter * ds.intvls.wfMouseRelease.pauseMs >= ds.intvls.wfMouseRelease.timeoutMS ) {
					clearInterval(ds.intvls.wfMouseRelease.intvl);
				}
			};
			ds.intvls.wfMouseRelease.pauseMs = 15;
			ds.intvls.wfMouseRelease.counter = 0;
			ds.intvls.wfMouseRelease.timeoutMS = 300000;
			// ping the mouse cursor's position every 15ms and move the popup along with it until the user releases the mouse button
			ds.intvls.wfMouseRelease.intvl = setInterval(ds.intvls.wfMouseRelease.loopingFx, ds.intvls.wfMouseRelease.pauseMS);
			ds.$(document).on("mouseup",function(e){
				ds.$(document).off("mousemove");
				ds.$(document).off("mouseup");
				ds.evts.mouseUp = e;
				ds.$(".ds-psPopWrapper").css("top",(ds.controls.psudoPopup.locpos.top + (ds.evts.mouseUp.clientY - ds.evts.mouseDown.clientY))+"px");
				ds.$(".ds-psPopWrapper").css("left",(ds.controls.psudoPopup.locpos.left + (ds.evts.mouseUp.clientX - ds.evts.mouseDown.clientX))+"px");
				clearInterval(ds.intvls.wfMouseRelease.intvl);
			});
		});
	},
	fxShowRibbon: function(){
		document.getElementById("Ribbon.ListForm.Display-title").firstElementChild.click();
	},
	fxHideRibbon: function(){
		document.getElementById("Ribbon.Read-title").firstElementChild.click();
	},
	hideElements: function(){
		ds.$(ds.controls.psudoPopup.arrHideSels).each(function(i,elm){
			ds.$(ds.controls.psudoPopup.arrHideSels[i]).hide();
		});
	},
	readonlyElements: function(){
		ds.$(ds.controls.psudoPopup.arrReadOnlySels).each(function(i,elm){
			ds.$(ds.controls.psudoPopup.arrReadOnlySels[i]).prop("readonly",true).attr("readonly",true);
			ds.$(ds.controls.psudoPopup.arrReadOnlySels[i]).prop("disabled",true).attr("disabled",true);
		});			
	}
};