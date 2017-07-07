ds.controls.accordion = {
	arrContent: [{heading:'<i class="fa fa-chevron-right fa-1x"></i>&nbsp;My Section Heading 1', content:'<p>My HTML Content 1</p>'},{heading:'<i class="fa fa-chevron-right fa-1x"></i>&nbsp;My Section Heading 2', content:'<p>My HTML Content 2</p>'}],
	init: function(afterFx, setAccordionId){
		ds.$.ajax({
			url: ds.p.root +"Style%20Library/ds_accordion.html", 
			method: "GET",
			dataType: "html"
		}).done(function(responseText){
			if ( typeof(setAccordionId) !== "undefined" ) { 
				responseText.replace("class='ds-accordion'>","class='ds-accordion' id='"+setAccordionId+"'>");
				ds.$("#DeltaPlaceHolderMain").prepend(responseText);
				ds.$(".ds-accordion").attr("id",setAccordionId);
			}
			else {
				ds.util.appendToMain(responseText);
			}
			for ( var i = 0; i < ds.controls.accordion.arrContent.length; i++ ) {
				var $cHead = ds.$(".ds-accordionSectionHeader").eq(0).clone();
				var $cContent = ds.$(".ds-accordionContentSection").eq(0).clone();
				if ( i === 0 ) {
					$cHead.addClass("ds-accordionSectionHeaderActive").html(ds.controls.accordion.arrContent[i].heading);
					$cHead.find("i.fa").removeClass("fa-chevron-right").addClass("fa-chevron-down");
				}
				else {
					$cHead.addClass("ds-accordionSectionHeaderInactive").html(ds.controls.accordion.arrContent[i].heading);
				}
				$cContent.html(ds.controls.accordion.arrContent[i].content);
				ds.$(".ds-accordionWrapper").append($cHead);
				ds.$(".ds-accordionWrapper").append($cContent);
			}
			ds.$(".ds-accordionSectionHeader").eq(0).remove();
			ds.$(".ds-accordionContentSection").eq(0).remove();
			ds.$(".ds-accordionContentSection").hide();
			ds.$(".ds-accordionSectionHeaderActive").next().show();
			ds.controls.accordion.setupEvents();
			if ( typeof(afterFx) === "function" ) { afterFx(); }
		});
	},
	setupEvents: function(){
		ds.$(".ds-accordionSectionHeader").click(function(){
			if ( ds.$(this).hasClass("ds-accordionSectionHeaderInactive") === true ) {
				ds.$(this).removeClass("ds-accordionSectionHeaderInactive").addClass("ds-accordionSectionHeaderActive").next().slideDown(650);
				ds.$(this).find("i.fa").removeClass("fa-chevron-right").addClass("fa-chevron-down");
			}
			else if ( ds.$(this).hasClass("ds-accordionSectionHeaderActive") === true ) {
				ds.$(this).removeClass("ds-accordionSectionHeaderActive").addClass("ds-accordionSectionHeaderInactive").next().slideUp(650);
				ds.$(this).find("i.fa").removeClass("fa-chevron-down").addClass("fa-chevron-right");
			}
		});
	},
	genSection: function(faClass, headingContent, sectionContent) {
		var oSect = { heading: '<i class="fa fa-chevron-right fa-1x"></i>&nbsp;'+ headingContent, content: sectionContent };
		ds.controls.accordion.arrContent.push(oSect);
		return oSect;
	}
};