ds.controls.contextMenu = {
	locpos: {clientX: 0, clientY: 0},
	evts: {mouseUp: null, mouseDown: null, contextMenu: null},
	listen: function(){
		ds.$("BODY").unbind();
		ds.$("BODY").on("mousedown",function(e){
			ds.controls.contextMenu.evts.mouseDown = e; 
			ds.evts.mouseDown = e;
			if ( e.which === 1 ) { 
				/*left-clicked*/ 
				/* don't remove the menu until after a possible menu option click event has fired */
				setTimeout(ds.controls.contextMenu.remove,123);
			}
		});
		ds.$("BODY").on("mouseup",function(e){
			ds.controls.contextMenu.evts.mouseUp = e;
			ds.evts.mouseUp = e;
		});
		ds.$("BODY").removeAttr("oncontextmenu","return false;").on("contextmenu", function(e){
			ds.controls.contextMenu.evts.contextMenu = e;
			ds.evts.contextMenuBody = e;
			var bDetector = false;
			ds.controls.contextMenu.remove();
			ds.$(ds.controls.contextMenu.arrHandleRightClicks).each(function(i,elm){
				ds.util.log("Running function at ds.controls.contextMenu.arrHandleRightClicks["+i+"] to see if it returns true for contextMenu widget jqSel detection",true);
				if ( ds.controls.contextMenu.arrHandleRightClicks[i](e) === true ) {
					bDetector = true;
					e.stopPropagation();
					e.preventDefault();
					ds.util.log("Successful contextMenu widget jqSel detection at ds.controls.contextMenu.arrHandleRightClicks["+i+"]",true);
					ds.controls.contextMenu.generate("",i.valueOf());
				}
				if ( bDetector === true ) {
					return false;
				}
			});
			if ( bDetector === false ) {
				ds.util.log("right clicked on an element that does not match the jqSel for one of the "+ ds.controls.contextMenu.arrHandleRightClicks.length +" contextMenu widget(s) on this page");
			}
		});
	},
	arrHandleRightClicks: [],
	arrAfterHandlingRightClicks: [],
	addHandlerForElements: function(jqSel, arrMenuOptions, arrMenuOptionEvents, afterDectectionFx, afterMenuGeneratedFx){
		/*adds a function to ds.controls.contextMenu.arrHandleRightClicks that will detect right-clicks on elements matched by jqSel,
		  and populate ds.controls.contextMenu.arrMenuOptions and ds.controls.contextMenu.arrMenuOptionEvents (which are both leveraged later when 
		  the ds.controls.contextMenu.generate function is called) with the code for this element's contextMenu. Upon a successful detection, 
		  the function is setup to return a value to our event listener on the BODY element's oncontextmenu event (which loops through the 
		  functions in arrHandleRightClicks), allowing the oncontextmenu event handler to execute the ds.controls.contextMenu.generate function 
		  which appends the menu's HTML to the page and configures event handlers for each menu option */
		ds.$(jqSel).addClass("ds-contextMenuTarget");
		ds.controls.contextMenu.arrHandleRightClicks.push(function(e){
			if ( ds.$(e.toElement).filter(jqSel).length > 0 ) {
				/* clicked on target element */
				ds.util.log("right clicked on target element by jqSel |"+ jqSel +"|", true);
				ds.controls.contextMenu.arrMenuOptions = arrMenuOptions;
				ds.util.log(ds.controls.contextMenu.arrMenuOptions, true);
				ds.controls.contextMenu.arrMenuOptionEvents = arrMenuOptionEvents;
				ds.util.log(ds.controls.contextMenu.arrMenuOptionEvents, true);
				ds.controls.contextMenu.locpos.clientX = e.clientX + 5;
				ds.controls.contextMenu.locpos.clientY = e.clientY + 5;
				if ( typeof(afterDectectionFx) === "function" ) { afterDectectionFx(e); }
				return true;
			}
			else {
				if ( ds.$(e.toElement).parents().filter(jqSel).length > 0 ) {
					/* clicked on target element */
					ds.util.log("right clicked on target element by jqSel |"+ jqSel +"| (parents)", true);
					ds.controls.contextMenu.arrMenuOptions = arrMenuOptions;
					ds.util.log(ds.controls.contextMenu.arrMenuOptions, true);
					ds.controls.contextMenu.arrMenuOptionEvents = arrMenuOptionEvents;
					ds.util.log(ds.controls.contextMenu.arrMenuOptionEvents, true);
					ds.controls.contextMenu.locpos.clientX = e.clientX + 5;
					ds.controls.contextMenu.locpos.clientY = e.clientY + 5;
					if ( typeof(afterDectectionFx) === "function" ) { afterDectectionFx(e); }
					return true;
				}
				else {
					ds.util.log("right clicked on target element not matched by jqSel |"+ jqSel +"|");
					return false;
				}
			}
		});
		if ( typeof(afterMenuGeneratedFx) === "function" ) { 
			ds.controls.contextMenu.arrAfterHandlingRightClicks.push(afterMenuGeneratedFx);
		}
		else {
			ds.controls.contextMenu.arrAfterHandlingRightClicks.push("");
		}
	},
	arrMenuOptions: [],
	arrMenuOptionEvents: [],
	getOffset: function(){
		var offset = ds.$(".ds-psudo-context-menu-wrapper").offset();
		offset.height = ds.$(".ds-psudo-context-menu-wrapper").height();
		offset.width = ds.$(".ds-psudo-context-menu-wrapper").width();
		offset.clientX = ds.controls.contextMenu.locpos.clientX;
		offset.clientY = ds.controls.contextMenu.locpos.clientY;
		ds.controls.contextMenu.locpos = offset;
		return offset;
	},
	remove: function(){
		ds.util.log("Removing all contextMenu widget(s) on this page");
		ds.$(".ds-psudo-context-menu-wrapper").remove();
	},
	generate: function(jqSel, iElement){
		ds.util.appendToMain("<div class='ds-psudo-context-menu-wrapper' style='top: 100px; left: 100px;'></div>");
		ds.$(ds.controls.contextMenu.arrMenuOptions).each(function(i,elm){
			ds.$(".ds-psudo-context-menu-wrapper").append(ds.controls.contextMenu.arrMenuOptions[i]);
		});
		ds.$(ds.controls.contextMenu.arrMenuOptionEvents).each(function(i,elm){
			ds.controls.contextMenu.arrMenuOptionEvents[i]();
		});
		ds.$(".ds-psudo-context-menu-wrapper").css("top",ds.controls.contextMenu.locpos.clientY+"px").css("left",ds.controls.contextMenu.locpos.clientX+"px");
		/* if we were passed an element Id (refering to the successful detection handler in ds.controls.contextMenu.arrHandleRightClicks), 
		   determine if we have a function in the corresponding element of ds.controls.contextMenu.arrAfterHandlingRightClicks, and if so, execute it */
		if ( typeof(iElement) !== "undefined" ) {
			if ( typeof(ds.controls.contextMenu.arrAfterHandlingRightClicks[iElement]) === "function" ) {
				function fx(i) {
					setTimeout(function(){ds.controls.contextMenu.arrAfterHandlingRightClicks[i]();},100);
				};
				fx(iElement);
			}
		}
	},
	genMenuOption: function(optionID, arrFaClass, optionText) {
		var arrHTML = ["<div class='ds-psudo-context-menu-option' id='",optionID,"'><table border='0' cellpadding='2' cellspacing='2' align='center' width='100%'><tbody><tr>"]
		if ( typeof(arrFaClass) === "object" ) {
			for ( var iFA = 0; iFA < arrFaClass.length; iFA++ ) {
				arrHTML.push("<td><i class='fa "+ arrFaClass[iFA] +" fa-1x'></i></td>");
			}
		}
		else {
			arrHTML.push("<td><i class='fa "+ arrFaClass +" fa-1x'></i></td>");
		}
		arrHTML.push("<td>");
		arrHTML.push(optionText);
		arrHTML.push("</td></tr></tbody></table></div>");
		return arrHTML.join("");
	}
};