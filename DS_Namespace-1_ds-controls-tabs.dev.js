ds.controls.tabs = {
	locpos: {
		top: 0,
		left: 0,
		height: 0,
		width: 0
	},
	arrGenTabs: [],
	genTabHTML: function(iIndex, faIcon, tabDisplayText, aboveTabContent, tabContentHeader, tabContentScroll, belowTabContent, buttonTooltip, buttonDisplayText){
		var htmlTab = [];
		htmlTab.push('<li class="ds-psudo-tab"><a href="#tabs-');
		htmlTab.push(iIndex);
		htmlTab.push('"><table align="center" cellpadding="0" cellspacing="0" border="0"><tbody><tr><td class="ds-listIcon"><i class="fa ');
		htmlTab.push(faIcon);
		htmlTab.push(' fa-1"></i></td><td>&nbsp;</td><td class="ds-listContentType">');
		htmlTab.push(tabDisplayText);
		htmlTab.push('</td></tr></tbody></table></a></li>');
		//append to DIV#tabs > UL
		var htmlContent = [];
		htmlContent.push('<div id="tabs-');
		htmlContent.push(iIndex);
		htmlContent.push('" class="ds-tabContentDiv"><div class="ds-tabs-aboveTabContent">');
		htmlContent.push(aboveTabContent);
		htmlContent.push('</div><div class="ds-tabContentHeader">');
		htmlContent.push(tabContentHeader);
		htmlContent.push('</div><div class="ds-tabContentScroll">');
		htmlContent.push(tabContentScroll);
		htmlContent.push('</div><div class="ds-tabs-belowTabContent">');
		htmlContent.push(belowTabContent);
		htmlContent.push('</div></div>');
		//append to DIV#tabs
		var htmlRelatedButton = [];
		htmlRelatedButton.push('<td align="center" class="ds-buttonWrapper"><button type="button" class="ds-psudo-button" title="');
		htmlRelatedButton.push(buttonTooltip);
		htmlRelatedButton.push('"><table align="center" cellpadding="0" cellspacing="0" border="0"><tbody><tr><td class="ds-listIcon"><i class="fa ');
		htmlRelatedButton.push(faIcon);
		htmlRelatedButton.push(' fa-1"></i></td><td><i class="fa fa-plus fa-1"></i></td><td>&nbsp;&nbsp;</td><td class="ds-listContentType">');
		htmlRelatedButton.push(buttonDisplayText);
		htmlRelatedButton.push('</td></tr></tbody></table></button></td>');
		//append to .ds-relatedRecordsButtonsMainRow or one of its siblings
		ds.controls.tabs.arrGenTabs.push({"tab":htmlTab.join(""),"content":htmlContent.join(""),"button":htmlRelatedButton.join("")});
	},
	genTabsFromArray: function(){
		var html = '<div class="ds-relatedRecordsUI"><table align="center" cellpadding="0" cellspacing="0" border="0"><tbody><tr><td><div class="ds-addRelatedRecordsButtons"><table id="addRelatedRecordsButtons" border="0" cellspacing="3" cellpadding="0" align="center" width="100%" style="font-family: Verdana, sans-serif; font-size: x-small; border-top: 4px double #808080;"><tr class="ds-relatedRecordsButtonsMainRow"></tr></tr></table></div></td></tr><tr><td><div id="tabs"><ul></ul></div><div class="ds-tabs-belowTabContent"></div></div></div></div></td></tr></tbody></table><span class="ds-tabs-enterSetupButton" title="Enter tabs setup GUI" style="cursor: pointer; text-align: center;"><i class="fa fa-ellipsis-v" style="font-size: 1.5em; width: 15px;"></i></span></div>';
		ds.util.appendToMain(html);
		for ( var iT = 0; iT < ds.controls.tabs.arrGenTabs.length; iT++ ) {
			var oTab = ds.controls.tabs.arrGenTabs[iT];
			ds.$("DIV#tabs > UL").append(oTab.tab);
			ds.$("DIV#tabs").append(oTab.content);
			ds.$(".ds-relatedRecordsButtonsMainRow").append(oTab.button);
		}
	},
	init: function(){
		//if ( ds.$(".ds-relatedRecordsUI").length < 1 ) {
		if ( ds.controls.tabs.arrGenTabs.length < 1 ) {
			if ( ds.$(".ds-relatedRecordsUI").length < 1 ) {
				ds.$.ajax({
					url: ds.p.root +"Style%20Library/ds_tabs.html", 
					method: "GET",
					dataType: "html"
				}).done(function(responseText){
					return ds.$.when(ds.$("#DeltaPlaceHolderMain").append(responseText)).done(function(){
						if ( ds.$(".ds-psudo-tab-active").length < 1 ) {
							ds.$(".ds-psudo-tab").eq(0).addClass("ds-psudo-tab-active");
							ds.controls.tabs.showOnlyActiveTabContent();
						}
						ds.util.simulateBrowseTabClick();
						ds.controls.tabs.generateTabsFromSettings();
					});
				});
			}
			else {
				ds.util.log("related records UI already exists!", true);
			}
		}
		else {
			ds.controls.tabs.genTabsFromArray();
		}
	},
	showOnlyActiveTabContent: function(){
		ds.$.when(ds.$(".ds-tabContentDiv").fadeOut(750)).done(function(){
			ds.util.log("All tab content sections hidden", true);
			var href = ds.$(".ds-psudo-tab-active").find("a").prop("href");
			var showId = href.substr(href.indexOf("#"));
			ds.$.when(ds.$(showId).fadeIn(750)).done(function(){
				ds.util.log("Active tab content shown", true);
				var offset = ds.$("#tabs").offset();
				ds.controls.tabs.locpos.top = offset.top;
				ds.controls.tabs.locpos.left = offset.left;
				ds.controls.tabs.locpos.height = ds.$("#tabs").height();
				ds.controls.tabs.locpos.width = ds.$("#tabs").width();
				ds.$(showId).css("opacity","1");
			});
		});
	},
	setupEventsFx: function(){
		ds.$(".ds-psudo-tab").click(function(e){
			ds.evts.clickTab = e;
			e.preventDefault();
			ds.$(".ds-psudo-tab-active").removeClass("ds-psudo-tab-active");
			ds.$(e.currentTarget).addClass("ds-psudo-tab-active");
			ds.controls.tabs.showOnlyActiveTabContent();
		});
		ds.$(".ds-tabs-enterSetupButton").click(function(){
			ds.controls.tabs.configure.load();
		});
		setTimeout(function(){ds.controls.tabs.forceTabLinksToOpenInPsudoPopup();}, 3000);
		//ds.controls.tabs.forceTabLinksToOpenInPsudoPopup();
	},
	generateTabsFromSettings: function() {
		ds.util.getSettingsForCurrentPage(function(formSettings){
			var oRO = {
				"sROName": "genTabsFromSettings", 
				"sROForFx":"ds.controls.tabs.generateTabsFromSettings", 
				"sRODesc":"looping thru current form settings to create related records UI", 
				"iLoopsToDo":formSettings.relatedRecords.length, 
				"loopingFx":function(iLoop){
					var currFS = formSettings.relatedRecords[iLoop]; 
					if ( !currFS === false ) {
						ds.util.log("generating tab for related records in list |"+ currFS.listName +"|", true);
						ds.controls.tabs.genTab(currFS.listFaClass, currFS.tabText, currFS.listName);
						if ( currFS.listName !== "HTML" ) {
							ds.controls.tabs.genTabContent(currFS.tabText, currFS.tabTableFields, currFS.tabFooterHTML, currFS.listName, currFS.tabHeaderHTML);
							ds.controls.tabs.genAddRecordButton(currFS.listFaClass, currFS.tabText, currFS.listName);
							ds.controls.tabs.getAndShowRelatedRecords(currFS.listName, currFS.tabText, currFS.tabTableFields, currFS.tabFooterHTML);
						}
						else {
							ds.controls.tabs.genHTMLTabContent(currFS.tabText, currFS.tabHeaderHTML, currFS.tabFooterHTML);
						}
					}
				}, 
				"successFx":function(){
					var masterSettings = formSettings.masterSettings;
					ds.controls.tabs.setupEventsFx();
					if ( masterSettings.hideAddRelatedRecordButtons === true ) {
						ds.$(".ds-relatedRecordsButtonsMainRow").hide();
					}
					if ( masterSettings.hideFilterTab === true ) {
						ds.$(".ds-psudo-tab-last").remove();
						ds.$("DIV[id='tabs-filter']").remove();
					}
					ds.$(".ds-psudo-tab:first-child").removeClass(".ds-psudo-tab-active").hide();
					ds.$(ds.$(".ds-psudo-tab:first-child").children("a").attr("href")).hide();
					ds.$(".ds-psudo-tab:not(.ds-psudo-tab-last):not(:first-child)").eq(0).click();
					ds.$(".ds-buttonWrapper:first-child").hide();
					ds.$(".ms-formtable td.ms-formlabel:contains('Related Items')").parent().hide();
					ds.util.ifCurrentTaskAssignedToMe(function(){ds.$("#btnSelfAssignTask").prop("disabled",true);});
				},
				"id":null
			};
			oRO.id = ds.repOp.newObjRO(oRO.sROName, oRO.sROForFx, oRO.sRODesc, oRO.iLoopsToDo, oRO.loopingFx, oRO.successFx);
			ds.repOp[oRO.id].initFx();
		});
		return true;
	},
	genTab: function(faIconClass, tabDispName, listName){
		var $cloned = ds.$(".ds-psudo-tab:first-child").clone();
		$cloned.removeClass("ds-psudo-tab-active").find(".ds-listIcon i").addClass(faIconClass);
		$cloned.find(".ds-listContentType").text(tabDispName.toLowerCase());
		$cloned.children("a").prop("href","#tabs"+tabDispName).attr("href","#tabs"+tabDispName);
		$cloned.attr("listName",listName);
		$cloned.appendTo("#tabs UL");
		return true;
	},
	genHTMLTabContent: function(tabDispName, tabInitialContent, afterFx){
		var $cloned2 = ds.$(".ds-tabContentDiv:first-of-type").clone();
		$cloned2.prop("id","tabs"+tabDispName).attr("id","tabs"+tabDispName);
		$cloned2.find(".ds-tabContentHeader > table, .ds-tabContentScroll > table").removeAttr("id");
		$cloned2.html(tabInitialContent);
		$cloned2.appendTo("DIV#tabs");
		if ( afterFx.indexOf("function") >= 0 ) {
			try{
				eval("afterFx = "+afterFx+";");
			}catch(err){
				ds.util.log("HTML tab |"+tabDispName+"|'s afterFx property could not be evaluated into a javascript function.\n"+afterFx,true); 
				ds.util.log(err,true);
			}
			if ( typeof(afterFx) === "function" ) {
				afterFx();
			}
			else {
				ds.util.log("HTML tab |"+tabDispName+"|'s afterFx property does not appear to be a valid javascript function that begins with the keyword 'function'",true);
			}
		}
		return true;
	},
	genTabContent: function(tabDispName, arrDispFields, tabFooterHTML, listName, tabHeaderHTML){ 
		var $cloned2 = ds.$(".ds-tabContentDiv:first-of-type").clone();
		$cloned2.prop("id","tabs"+tabDispName).attr("id","tabs"+tabDispName);
		$cloned2.find(".ds-tabContentHeader > table, .ds-tabContentScroll > table").removeAttr("id");
		if ( !tabHeaderHTML === true ) {
			$cloned2.find(".ds-tabs-aboveTabContent").remove();
		}
		else {
			$cloned2.find(".ds-tabs-aboveTabContent").html(tabHeaderHTML);
		}
		$cloned2.find(".ds-tabContentHeader .ds-headerRow td").remove();
		$cloned2.find(".ds-tabContentScroll .ds-dataRow td").remove();
		ds.util.log("adding fields for |"+ arrDispFields.length +" fields for list tab |"+ tabDispName +"|");
		ds.$(arrDispFields).each(function(i, elm){
			var fieldName = arrDispFields[i].label;
			var fieldWidth = arrDispFields[i].widthPx;
			if ( !fieldWidth === true ) { fieldWidth = 200; }
			ds.util.log("adding table col for field |"+ fieldName +"| with width |"+ fieldWidth +"px|");
			$cloned2.find(".ds-tabContentHeader .ds-headerRow").append("<td class='ds-relatedInfoHeaders' width='"+ fieldWidth +"px'><div class='ds-tcBlock'>"+fieldName+"</div></td>");
			switch (fieldName) {
				case "Edit":
					var urlEdit = ds.p.root +"Lists/"+ listName +"/EditForm.aspx?ID=";
					$cloned2.find(".ds-tabContentScroll .ds-dataRow").append("<td class='ds-relatedInfoData' width='"+ fieldWidth +"px'><div class='ds-tcBlock'><a target='about:blank' href='"+ urlEdit +"'><img src='_layouts/images/edit.gif' alt='Edit' border='0'/></a></div></td>");
					break;
				case "Title":
					var urlDisplay = ds.p.root +"Lists/"+ listName +"/EditForm.aspx?ID=";
					$cloned2.find(".ds-tabContentScroll .ds-dataRow").append("<td class='ds-relatedInfoData' width='"+ fieldWidth +"px'><div class='ds-tcBlock'><a target='about:blank' href='"+ urlDisplay +"'></a></div></td>");
					break;
				case "HTMLSnippit":
					$cloned2.find(".ds-tabContentScroll .ds-dataRow").append("<td class='ds-relatedInfoData' width='"+ fieldWidth +"px'></td>");
					break;
				default: 
					$cloned2.find(".ds-tabContentScroll .ds-dataRow").append("<td class='ds-relatedInfoData' width='"+ fieldWidth +"px'><div class='ds-tcBlock'></div></td>");
			}
		});
		if ( !tabFooterHTML === true ) {
			$cloned2.find(".ds-tabs-belowTabContent .ds-psudo-button").remove();
		}
		else {
			$cloned2.find(".ds-tabs-belowTabContent").html(tabFooterHTML);
		}
		$cloned2.appendTo("DIV#tabs");
		return true;
	},
	genAddRecordButton: function(faIconClass, tabDispName, listName){
		var $clonedAddRecordButton = ds.$(".ds-buttonWrapper:first-child").clone();
		$clonedAddRecordButton.find(".ds-listIcon i").addClass(faIconClass);
		$clonedAddRecordButton.find(".ds-listIcon i").eq(1);
		$clonedAddRecordButton.find(".ds-psudo-button").css("font-size","1.1em");
		$clonedAddRecordButton.find(".ds-listContentType").text(tabDispName.toLowerCase());
		$clonedAddRecordButton.find(".ds-psudo-button").attr("listName",listName).click(function(){
			ds.util.log("Loading form for list |"+ $(this).attr("listName") +"|");
			ds.stor.session.relatedListName = $(this).attr("listName");
			ds.controls.psudoPopup.init($(this).attr("listName"), false);
		});
		$clonedAddRecordButton.appendTo(".ds-relatedRecordsButtonsMainRow");
		return true;
	},
	getAndShowRelatedRecords: function(listName, tabDispName, arrDispFields, tabFooterHTML){
		var relatedID = GetUrlKeyValue("ID");
		if ( !relatedID === false ) {
			var lookup = ds.util.findField(listName, ["LookupList","LookupField"], [_spPageContextInfo.pageListId,"Title"]);
			ds.rest.list.getData.fromList(listName, [lookup.Title], ["eq"], [relatedID], [], function(){ 
				var roID = ds.repOp.newObjRO("relRecs_"+ listName, listName, "record count "+ $(ds.lists[listName.toLowerCase()].items.results).length, $(ds.lists[listName.toLowerCase()].items.results).length,function(loopIndex){
					//ds.util.appendToMain("ro loopIndex = "+ loopIndex, true);
					$(ds.lists[listName.toLowerCase()].items.results).eq(loopIndex).each(function(iResult,elmResult){
						ds.util.log("data from all related lists for this task have been retrieved. Able to outpu related record at index |"+ iResult +"| from |"+ listName +"| for task |"+ relatedID +"| for tabDispName = |"+ tabDispName +"|");
						var $relatedItemRow = ds.$("#tabs"+tabDispName+" > DIV.ds-tabContentScroll tr.ds-dataRow:eq(0)").clone();
						ds.util.log("looping thru this list's display fields |"+ arrDispFields.length +"| fields for list tab |"+ listName +"|");
						ds.$(arrDispFields).each(function(i, elm){
							var fieldName = arrDispFields[i].label;
							var fieldWidth = arrDispFields[i].widthPx;
							var formatAs = arrDispFields[i].formatAs;
							var formatString = arrDispFields[i].formatString;
							var textAlign = arrDispFields[i].textAlign;
							var verticalAlign = arrDispFields[i].verticalAlign;
							ds.util.log("output data for |"+ arrDispFields[i].fin +"|");
							ds.util.log("adding table col for field |"+ fieldName +"| with width |"+ fieldWidth +"px|");
							var sOutput = elmResult[arrDispFields[i].fin];
							switch (formatAs) {
								case "Date":
									var sOutput = elmResult[arrDispFields[i].fin];
									var momTest = moment(sOutput, moment.ISO_8601);;
									if ( momTest["_d"].toString() !== "Invalid Date" ) {
										sOutput = momTest.format(formatString);
									}
									break;
								case "Percent": 
									var sOutput = elmResult[arrDispFields[i].fin];
									var nOutput = parseFloat(sOutput);
									nOutput = nOutput * 100;
									sOutput = nOutput + "%";
									break;
								case "PersonLookup":
									var sOutput = elmResult[arrDispFields[i].fin];
									var lookupVal = elmResult[arrDispFields[i].fin];
									ds.util.lookupUserBySPID(lookupVal, [], function(data, textStatus, jqXHR) { 
										var sValue = ds.$(data).find(".ms-formlabel:contains('Name')").parent().find(".ms-formbody").text().trim();
										ds.$(".ds-userSPID1").html(sValue); 
									});
									break;
								case "MultiPersonLookup":
									var sOutput = "";
									if ( !elmResult[arrDispFields[i].fin] == false ) {
										for ( person in elmResult[arrDispFields[i].fin].results ) {
											var lookupVal = elmResult[arrDispFields[i].fin].results[person];
											ds.util.lookupUserBySPID(lookupVal, [], function(data, textStatus, jqXHR) { 
												var sValue = ds.$(data).find(".ms-formlabel:contains('Name')").parent().find(".ms-formbody").text().trim();
												ds.$(".ds-userSPID"+elmResult[arrDispFields[i].fin].results[person]).html(sValue); 
											});
										}
									}
									break;
								case "TitleAsDisplayLink":
									var sOutput = "<a listName='"+ listName +"' itemId='"+ elmResult["Id"] +"' href='"+ ds.p.root +"Lists/"+ listName +"/DispForm.aspx?ID="+ elmResult.Id +"'>"+ elmResult[arrDispFields[i].fin] +"</a>";
									break;
								case "EventDowloadButton":
									var urlDownload = elmResult[arrDispFields[i].fin];
									var sOutput = "<a href='"+ urlDownload +"' listName='"+ listName +"' itemId='"+ elmResult["Id"] +"'><img border='0' alt='Download to Outlook' src='_layouts/images/calendar.gif'/>&nbsp;Download</a>";
									break;
								case "EditButton":
									var urlEdit = ds.p.root +"Lists/"+ listName +"/EditForm.aspx?ID="+ elmResult[arrDispFields[i].fin];
									var sOutput = "<a href='"+ urlEdit +"' listName='"+ listName +"' itemId='"+ elmResult[arrDispFields[i].fin] +"'><img border='0' class='ds-recordIDs ds-relatedInfoDataTxtField' style='cursor: pointer;' src='/_layouts/images/edititem.gif' title='Click to EDIT this record in a new window.' /></a>";
									break;
								case "DisplayButton":
									var urlDisplay = ds.p.root +"Lists/"+ listName +"/DispForm.aspx?ID="+ elmResult[arrDispFields[i].fin];
									var sOutput = "<a href='"+ urlDisplay +"' listName='"+ listName +"' itemId='"+ elmResult[arrDispFields[i].fin] +"'><img border='0' class='ds-recordIDs ds-relatedInfoDataTxtField' style='cursor: pointer;' src='/_layouts/images/magnify.gif' title='Click to DISPLAY this record in a new window.' /></a>";
									break;
								case "DeleteButton":
									var urlDelete = ds.p.root +"Lists/"+ listName +"/DispForm.aspx?ID="+ elmResult[arrDispFields[i].fin];
									var sOutput = "<a href='"+ urlDelete +"' listName='"+ listName +"' itemId='"+ elmResult[arrDispFields[i].fin] +"'><img border='0' class='ds-recordIDs ds-relatedInfoDataTxtField' style='cursor: pointer;' src='/_layouts/images/delitem.gif' title='Click to DELETE this record' /></a>";
									break;
								case "SaveButton":
									var urlSave = ds.p.root +"Lists/"+ listName +"/DispForm.aspx?ID="+ elmResult[arrDispFields[i].fin];
									var sOutput = "<a href='"+ urlSave +"' listName='"+ listName +"' itemId='"+ elmResult[arrDispFields[i].fin] +"'><img border='0' class='ds-recordIDs ds-relatedInfoDataTxtField' style='cursor: pointer;' src='/_layouts/images/saveitem.gif' title='Click to SAVE this record' /></a>";
									break;
								case "CancelButton":
									var urlCancel = ds.p.root +"Lists/"+ listName +"/DispForm.aspx?ID="+ elmResult[arrDispFields[i].fin];
									var sOutput = "<a href='"+ urlCancel +"' listName='"+ listName +"' itemId='"+ elmResult[arrDispFields[i].fin] +"'><img border='0' class='ds-recordIDs ds-relatedInfoDataTxtField' style='cursor: pointer;' src='/_layouts/images/wpclose.gif' title='Click to CANCEL this record' /></a>";
									break;
								case "CheckBox":
									if ( elmResult[arrDispFields[i].fin].toString() === "true" ) {
										var sOutput = "<span><i class='fa fa-check-square-o'></i></span>";
									}
									else {
										var sOutput = "<span><i class='fa fa-square-o'></i></span>";
									}
									break;
								case "MailTo":
									var urlMail = elmResult[arrDispFields[i].fin];
									var sOutput = "<a class='ds-related-mailto' href='mailto:"+ urlMail +"'><img border='0' src='/_layouts/images/gmailnew.gif' title='Click to mail this contact.' /><span style='position: relative; bottom: 3px;'>"+urlMail+"</span></a>";
									break;
								default: 
									if ( arrDispFields[i].fin === "HTMLSnippit" ) {
										var sOutput = arrDispFields[i].formatAs;
										for ( var iDF = 0; iDF < arrDispFields.length; iDF++ ) {
											if ( sOutput.indexOf("{{"+iDF+"::Value}}") >= 0 || sOutput.indexOf("{{"+iDF+"::Display}}") >= 0 || sOutput.indexOf("{{"+iDF+"::RawValue}}") >= 0 ) {
												do {
													sOutput = sOutput.replace("{{"+iDF+"::RawValue}}",elmResult[arrDispFields[iDF].fin]);
													sOutput = sOutput.replace("{{"+iDF+"::Value}}",$relatedItemRow.find("TD").eq(iDF).text());
													sOutput = sOutput.replace("{{"+iDF+"::Display}}",$relatedItemRow.find("TD").eq(iDF).html());
												} while(sOutput.indexOf("{{"+iDF+"}}") >= 0 || sOutput.indexOf("{{"+iDF+"::Display}}") >= 0 || sOutput.indexOf("{{"+iDF+"::RawValue}}") >= 0);
											}
										}
									}
									else {
										var sOutput = elmResult[arrDispFields[i].fin];
									}
							}
							switch (fieldName) {
								case "Edit":
									$relatedItemRow.find("TD").eq(i).html(sOutput);
									break;
								case "Title":
									$relatedItemRow.find("TD").eq(i).html(sOutput);
									break;
								case "Open in Outlook":
									$relatedItemRow.find("TD").eq(i).html(sOutput);
									break;
								case "Email":
									$relatedItemRow.find("TD").eq(i).html(sOutput);
									break;
								default: 
									if ( formatAs === "PersonLookup" || formatAs === "MultiPersonLookup" ) {
										$relatedItemRow.find("TD").eq(i).find(".ds-tcBlock").append("<DIV class='ds-userSPID"+elmResult[arrDispFields[i].fin]+"'></DIV>");
										try{
											for ( person in elmResult[arrDispFields[i].fin].results ) {
												$relatedItemRow.find("TD").eq(i).find(".ds-tcBlock").append("<DIV class='ds-userSPID"+elmResult[arrDispFields[i].fin].results[person]+"'></DIV>");
											}
										}
										catch(err){
										}
									}
									else {
										if ( arrDispFields[i].fin === "HTMLSnippit" ) {
											if ( textAlign.toLowerCase() === "center" ) {
												$relatedItemRow.find("TD").eq(i).html("<center>"+ sOutput +"</center>");
											}
											else {
												$relatedItemRow.find("TD").eq(i).html(sOutput);
											}
										}
										else {
											$relatedItemRow.find("TD").eq(i).find(".ds-tcBlock").html(sOutput);
										}
									}
							}
						});
						$relatedItemRow.appendTo("#tabs"+tabDispName+" > DIV.ds-tabContentScroll > TABLE > TBODY");
					});
				},function(){
					//alert("done");
					ds.$("#tabs"+tabDispName+" > DIV.ds-tabContentScroll tr.ds-dataRow:eq(0)").hide();
					ds.$("#tabs"+tabDispName+" > DIV.ds-tabContentScroll tr.ds-dataRow:not(:first-child)").each(function(iTR, elmTR){
						ds.$(this).children("TD").each(function(iTD, elmTD){
							var textAlign = arrDispFields[iTD].textAlign;
							var verticalAlign = arrDispFields[iTD].verticalAlign;
							ds.$(this).css({"vertical-align":verticalAlign,"text-align":textAlign});
						});
					});
					
					if ( !tabFooterHTML === true ) {
						ds.$("#tabs"+tabDispName).find(".ds-tabs-belowTabContent .ds-psudo-button").remove();
					}
					else {
						ds.$("#tabs"+tabDispName).find(".ds-tabs-belowTabContent").html(tabFooterHTML);
					}
				});
				
				ds.repOp[roID].initFx();

			});
		}
		return true;
	},
	forceTabLinksToOpenInPsudoPopup: function() {
		ds.$(".ds-tabContentScroll a").each(function(){
			var formURL = ds.$(this).prop("href");
			if ( ds.$(this).prop("href").indexOf("mailto") < 0 && ds.$(this).find("img[src*='CALENDAR'],img[src*='calendar']").length < 1 ) {
				ds.$(this).click(function(e){
					try{ds.stor.session.relatedListName = ds.$(this).attr("listName");}catch(err){}
					try{ds.stor.session.relatedItemId = ds.$(this).attr("itemId");}catch(err){}
					e.preventDefault();
					ds.util.log("loading form as psudoPopup |"+ ds.$(this).prop("href") +"|", true);
					ds.controls.psudoPopup.init(ds.$(this).prop("href"), true, function(){ds.util.log("psudoPopup loaded for url |"+ ds.$(this).prop("href") +"|", true);});
				});
			}
		});
		/*
		var oRO = {
			"sROName": "openRelatedRecordLinksInPopups", 
			"sROForFx":"ds.controls.tabs.forceTabLinksToOpenInPsudoPopup", 
			"sRODesc":"looping thru current form settings to create related records UI", 
			"iLoopsToDo":ds.$(".ds-tabContentScroll a").length, 
			"loopingFx":function(iLoop){
				ds.$(".ds-tabContentScroll a").eq(iLoop).each(function(){
					var formURL = ds.$(this).prop("href");
					if ( ds.$(this).prop("href").indexOf("mailto") < 0 && ds.$(this).find("img[src*='CALENDAR'],img[src*='calendar']").length < 1 ) {
						ds.$(this).click(function(e){
							try{ds.stor.session.relatedListName = ds.$(this).attr("listName");}catch(err){}
							try{ds.stor.session.relatedItemId = ds.$(this).attr("itemId");}catch(err){}
							e.preventDefault();
							ds.util.log("loading form as psudoPopup |"+ ds.$(this).prop("href") +"|", true);
							ds.controls.psudoPopup.init(ds.$(this).prop("href"), true, function(){ds.util.log("psudoPopup loaded for url |"+ ds.$(this).prop("href") +"|", true);});
						});
					}
				});
			}, 
			"successFx":function(){
				ds.util.log("finished forcing related record links to open in psudoPopup widgets", true);
			},
			"id":null
		};
		oRO.id = ds.repOp.newObjRO(oRO.sROName, oRO.sROForFx, oRO.sRODesc, oRO.iLoopsToDo, oRO.loopingFx, oRO.successFx);
		ds.repOp[oRO.id].initFx();
		*/
	},
	configure: {
		evts: { 
		},
		load: function(){
			var intvl = ds.intvls.newIntvl("tabsConfigInit");
			ds.intvls[intvl].successFx = function(){
				setTimeout(ds.controls.tabs.configure.init,15);
			}
			ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx,ds.intvls[intvl].pauseMS);
			ds.controls.codeEditor.addScripts(function(){
				//ds.$.get(ds.p.root +"Style%20Library/ds_html_config_related_records_gui.html", function(responseText){
				ds.$.ajax({
					url: ds.p.root +"Style%20Library/ds_html_config_related_records_gui.html",
					method: "GET"
				}).done(function(responseText){
					ds.util.log("appending raw HTML for tabs config", true);
					ds.util.appendToMain(responseText);
					ds.intvls[intvl].bDone = true;
				});
			});
		}
	}
};