var ds = ds || {
	p: {
		root: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl,
		page: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + _spPageContextInfo.serverRequestPath,
		pageListName: _spPageContextInfo.serverRequestPath.replace("/Lists/","/").split("/")[1],
		pageFormName: _spPageContextInfo.serverRequestPath.replace("/Lists/","/").split("/")[2].split(".")[0],
		userID: _spPageContextInfo.userId,
		rest: {
			lists2013: '_api/web/lists',
			lists2010: '_vti_bin/ListData.svc/'
		},
		cdn: {
			js: {
				moment: '//momentjs.com/downloads/moment.js',
				momentTz: '//momentjs.com/downloads/moment-timezone.js',
				jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js',
				jqueryUi: '//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js',
				fontAwesome: '//use.fontawesome.com/fa7f1cdf10.js',
				feedEk: '//cdnjs.cloudflare.com/ajax/libs/FeedEk/3.0.0/js/FeedEk.min.js',
				jqueryColor: '//code.jquery.com/color/jquery.color-2.1.2.min.js',
				jqueryEasing: '//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js',
				jqueryCorner: '//malsup.github.io/jquery.corner.js'
			},
			css: {
				jqueryUi: '//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.css',
				jqueryUiSmoothness: '//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css',
				fontAwesome: '//maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css',
				feedEk: '//cdnjs.cloudflare.com/ajax/libs/FeedEk/3.0.0/css/FeedEk.min.css'
			}
		}
	},
	repOp: {
		newObjRO: function(sROName, sROForFx, sRODesc, iLoopsToDo, loopingFx, successFx){
			var rightNow = new Date();
			var ROName = sROName + rightNow.valueOf();
			if ( typeof(ds.repOp[ROName]) === "undefined" ) {
				// we found a unique interval name
				ds.repOp[ROName] = {
					name: ROName,
					forFx: sROForFx,
					desc: sRODesc,
					ro: null,
					loopIndex: 0,
					loopsDone: 0,
					loopsToDo: iLoopsToDo,
					bDone: false, 
					initFx: function() {
						ds.repOp[ROName].ro = new ds.repOp.newRO(function(){
							var loopIndex = ds.repOp[ROName].loopIndex;
							ds.repOp[ROName].loopingFx(loopIndex);
							// do stuff
							ds.util.log("Repeat Operation |"+ ROName +"| running... at index |"+ ds.repOp[ROName].loopIndex +"|");
							ds.repOp[ROName].loopIndex = ds.repOp[ROName].loopIndex + 1;
							ds.repOp[ROName].loopsDone = ds.repOp[ROName].loopsDone + 1;
							if ( ds.repOp[ROName].loopsDone < ds.repOp[ROName].loopsToDo ) {
								ds.repOp[ROName].ro();
							}
							else {
								ds.repOp[ROName].bDone = true;
								ds.util.log("Repeat Operation |"+ ROName +"| complete");
								ds.repOp[ROName].successFx();
							}
						}, ds.repOp.yieldAfter);
						ds.repOp[ROName].ro();
					},
					successFx: successFx,
					loopingFx: loopingFx
				};
			} 
			else {
				ds.util.log("A Repeat Operation with that name ("+ ROName +") already exists!", true);
				alert("A Repeat Operation with that name ("+ ROName +") already exists!");
			}
			return ROName;
		},
		newRO: function (anonymousOperation, whenToYield) {
			/* This innocuous bit of code is the key bit that will allow for long processes without triggering the 'Stop Running This Script?' message*/
			var count = 0;
			return function () {
				if ( ++count >= whenToYield ) {
					count = 0;
					ds.util.log("Repeat operation is paused for |"+ ds.repOp.pauseBetweenMS +"|ms");
					setTimeout(function () { 
						anonymousOperation(); 
					}, ds.repOp.pauseBetweenMS);
				}
				else {
					anonymousOperation();
				}
			}
		},
		yieldAfter: 2,
		pauseBetweenMS: 173
	},
	stor: {
		SPTZs: {},
		spCSOM: {
			clientContext: null,
			web: null,
			culture: null,
			tz: null,
			siteTzId: null,
			siteTzDescription: null,
			siteTzInformation: null
		},
		session: {
			bDebug: false,
			bOnlyGetListsWhenTold: false,
			idleTime: 0,
			windowScreenX: window.screenX,
			windowScreenY: window.screenY,
			pageXScroll: window.pageXOffset,
			pageYScroll: window.pageYOffset,
			windowWidth: window.outerWidth,
			windowHeight: window.outerHeight,
			mouseX: 0,
			mouseY: 0,
			lastControl: null,
			windowFocus: true,
			onSetupPage: false,
			onConfigPage: false,
			onTaskDisplayForm: false,
			onTaskEditForm: false
		}, 
		formSettings: null,
		existingFormSettings: false,
		commonContent: {},
		listNames: ["Intake","Tasks","TaskComments","TaskContacts","TaskStatusHistory","TaskMeetings","TaskTimeEntry"],
		fieldType: {},
		listTemplates: {},
		rss: {},
		createLists: {},
		newRelated: {},
		updateRelated: {
			/*
			"Intake": function(nID){
				var taskID = $("SELECT[title^='TaskID']").val();
				if ( taskID.toString() === "0" ) { taskID = null; }
				var oAssignedToId = {"__metadata":{"type":"Collection(Edm.Int32)"},"results":[]};
				ds.rest.getDataFromURI(ds.lists.userinformationlist.Items.__deferred.uri, function(data,textStatus,jqXHR){
					$("span.sp-peoplepicker-userSpan").each(function(i,e){
						var userName = $(this).attr("sid");
						$(data.d.results).each(function(iR,eR){
							if ( eR.Name === userName ) { 
								//console.log(eR);
								oAssignedToId.results.push(eR.Id);
							}
							return false;
						});
							
					});
					//console.log(oAssignedToId);
					ds.rest.list.item.update({
						Title:$("INPUT[title^='Task Name']").val(),
						Body:$("DIV.ms-rtestate-write[id^='Body']").text(),
						TaskID:taskID,
						StartDate:moment($("INPUT[title^='Start Date']").val())._d.toJSON(),
						DueDate:moment($("INPUT[title^='Due Date']").val())._d.toJSON(),
						AssignedToId:oAssignedToId,
						PercentComplete:parseFloat($("INPUT[title^='% Complete']").val()) / 100,
						Priority:$("SELECT[title^='Priority']").val(),
						Status:$("SELECT[title^='Task Status']").val()
					}, ds.lists.intake.Id, nID, function(){
						ds.util.log("updated item in |"+ ds.lists.intake.Title +"|", true);
						ds.$(".ds-psPopTBCloseButton").click();
						window.location.reload();
					});
				});
			}
			*/
		}
	},
	lists: {},
	factCheck: {
		loopThroughKnownFeeds: function(){
			ds.controls.accordion.arrContent = [];
			ds.util.log("querying SP list 'factcheckers' to get our known rss fact-checker feeds");
			ds.rest.list.getData.fromList("factcheckers", [], [], [], [], function(){
				ds.util.log("looping through the known rss feeds");
				ds.$(ds.lists.factcheckers.items.results).each(function(i, elm){
					var resp = {};
					resp.Title = elm.Title;
					resp.rssurl = elm.rssurl;
					ds.factCheck.getFeedData(elm.Title, elm.rssurl, resp);
				});
				ds.util.log("finished looping through known rss feeds to request data");
				ds.controls.accordion.init(function(){
					$("div[id^='divRss']").each(function(){
						$("."+$(this).attr("id")).replaceWith($(this));
					});
				});
			}, "");
		},
		getFeedData(title, rssurl, resp) {
			ds.util.log("function ds.factCeck.getFeedData called...");
			var originalTitle = title;
			while ( title.indexOf(" ") >= 0 ) { title = title.replace(" ",""); }
			while ( title.indexOf(".") >= 0 ) { title = title.replace(".",""); }
			while ( title.indexOf("-") >= 0 ) { title = title.replace("-",""); }
			var dvId = 'divRss'+title;
			ds.util.appendToMain('<div style="display: inline-block; max-height: 300px; overflow-y: scroll;" id="'+dvId+'"></div>');
			$("#"+dvId).ready(function(){
				ds.util.log("about to request rss |"+ title +"|");
				ds.stor.rss[dvId] = {};
				$('#'+dvId).FeedEk({
					FeedUrl:rssurl,
					ShowDesc : true,
					ShowPubDate:true,
					TitleLinkTarget:'_blank',
					DateFormat: 'MM/DD/YYYY',
					DateFormatLang:'en',
					MaxCount: 50
				});
				ds.util.log("finished getting rss |"+ title +"|");
				$("#"+dvId).ready(function(){
					ds.util.log("capturing accordion section for rss |"+ title +"|");
					var bDone;
					if ( ds.controls.accordion.arrContent.length < 1 ) {
						var accSection = {heading:'<i class="fa fa-chevron-down fa-1x"></i>&nbsp;'+originalTitle, content:"<div class='"+dvId+"'></div>"};
					}
					else {
						var accSection = {heading:'<i class="fa fa-chevron-right fa-1x"></i>&nbsp;'+originalTitle, content:"<div class='"+dvId+"'></div>"};
					}
					var currContent = ds.controls.accordion.arrContent;
					currContent.push(accSection);
					ds.controls.accordion.arrContent = currContent;
				});
			});
		}
	},
	rest: {
		lastCall: {},
		lastSubCall: {},
		getDataFromURI: function(restURL, fxCallback, bAsync, bIgnoreNextPage, intvl, listName, fxAfterLastPage) {
			if ( typeof(bAsync) === "undefined" ) { var bAsync = true; }
			if ( typeof(bIgnoreNextPage) === "undefined" ) { var bIgnoreNextPage = false; }
			if ( typeof(intvl) === "undefined" ) { bIgnoreNextPage = true; }
			ds.util.log("ds.rest.getDataFromURI function called with arguments... |"+ encodeURI(restURL) +"|");
			ds.$.ajax({
				url: restURL,
				async: bAsync
			}).fail(function( jqXHR, textStatus, errorThrown ) {
				ds.rest.lastCall.jqXHR = jqXHR;
				ds.rest.lastCall.textStatus = textStatus;
				ds.rest.lastCall.errorThrown = errorThrown;
				ds.util.log("ds.rest.getDataFromURI function ajax call failed with error ... |"+ errorThrown +"|");
			}).done(function(data,textStatus,jqXHR){
				ds.rest.lastCall.textStatus = textStatus;
				ds.rest.lastCall.jqXHR = jqXHR;
				ds.rest.lastCall.data = data;
				ds.util.log("ds.rest.getDataFromURI function ajax call done with status ... |"+ textStatus +"|");
				if ( typeof(fxCallback) === "function" ) { 
					fxCallback(data, textStatus, jqXHR); 
				}
				if ( !data.d.__next === false ) {
					if ( bIgnoreNextPage === false ) {
						ds.rest.getNextPage(data.d.__next, intvl, listName, fxCallback, fxAfterLastPage);
					}
					else {
						if ( typeof(ds.intvls[intvl]) !== "undefined" ) {
							ds.intvls[intvl].bDone = true;
						}
					}
				}
				else if ( typeof(ds.intvls[intvl]) !== "undefined" ) {
					ds.intvls[intvl].bDone = true;
					if ( typeof(fxAfterLastPage) === "function" ) { 
						fxAfterLastPage(intvl, listName); 
					}
				}
			});
		},
		getNextPage: function(restURL, intvl, listName, fxCallback, fxAfterLastPage) {
			ds.util.log("ds.rest.getNextPage function called with arguments... |"+ restURL +"|");
			ds.$.ajax({
				url: restURL
			}).fail(function( jqXHR, textStatus, errorThrown ) {
				ds.rest.lastSubCall.jqXHR = jqXHR;
				ds.rest.lastSubCall.textStatus = textStatus;
				ds.rest.lastSubCall.errorThrown = errorThrown;
				ds.util.log("ds.rest.getNextPage function ajax call failed with error ... |"+ errorThrown +"|");
				ds.intvls[intvl].bDone = true;
			}).done(function(data,textStatus,jqXHR){
				ds.rest.lastSubCall.textStatus = textStatus;
				ds.rest.lastSubCall.jqXHR = jqXHR;
				ds.rest.lastSubCall.data = data;
				ds.util.log("ds.rest.getNextPage function ajax call done with status ... |"+ textStatus +"|");
				if ( typeof(fxCallback) === "function" ) { fxCallback(data, textStatus, jqXHR); }
				if ( !data.d.__next === false ) {
					if ( !listName === false ) {ds.lists[listName].items.uri = data.d.__next;}
					ds.rest.getNextPage(data.d.__next, intvl, listName, fxCallback, fxAfterLastPage);
				}
				else {
					if ( !listName === false ) {ds.lists[listName].items.uri = restURL;}
					if ( typeof(ds.intvls[intvl]) !== "undefined" ) {
						ds.intvls[intvl].bDone = true;
						if ( typeof(fxAfterLastPage) === "function" ) { fxAfterLastPage(intvl, listName); }
					}
					
				}
			});
		},
		captureDataFromURI: function(restURL, fxCallback, bAsync, bIgnoreNextPage, intvl, listName, strCaptureResultsIn, fxAfterLastPage) {
			if ( typeof(bAsync) === "undefined" ) { var bAsync = true; }
			if ( typeof(bIgnoreNextPage) === "undefined" ) { var bIgnoreNextPage = false; }
			if ( typeof(strCaptureResultsIn) === "undefined" ) {
				var strCaptureResultsIn = "ds.lists["+listName+"].items.results";
			}
			else if ( typeof(eval(strCaptureResultsIn)) === "undefined" ) {
				eval(strCaptureResultsIn+" = [];");
			}
			if ( typeof(fxAfterLastPage) === "undefined" ) { 
				var fxAfterLastPage = function(intvl, listName, strCaptureResultsIn){ 
					ds.util.log("Finished capturing last page of REST results for interval"+ intvl,true);
					ds.intvls[intvl].bDone = true;
				};
			}
			ds.util.log("ds.rest.captureDataFromURI function called with arguments... |"+ restURL +"|", true);
			ds.$.ajax({
				url: restURL,
				async: bAsync
			}).fail(function( jqXHR, textStatus, errorThrown ) {
				ds.rest.lastCall.jqXHR = jqXHR;
				ds.rest.lastCall.textStatus = textStatus;
				ds.rest.lastCall.errorThrown = errorThrown;
			}).done(function(data,textStatus,jqXHR){
				ds.rest.lastCall.textStatus = textStatus;
				ds.rest.lastCall.jqXHR = jqXHR;
				ds.rest.lastCall.data = data;
				if ( typeof(eval(strCaptureResultsIn)) === "object" ) {
					ds.$(data.d.results).each(function(i,elm){
						eval(strCaptureResultsIn+".push("+elm+");");
					});
				}
				if ( typeof(fxCallback) === "function" ) { 
					fxCallback(data, textStatus, jqXHR); 
				}
				if ( !data.d.__next === false ) {
					if ( bIgnoreNextPage === false ) {
						ds.rest.captureNextPage(data.d.__next, intvl, listName, fxCallback, fxAfterLastPage);
					}
					else {
						if ( typeof(intvl) !== "undefined" ) {
							ds.intvls[intvl].bDone = true;
						}
					}
				}
				else if ( typeof(fxAfterLastPage) !== "function" ) { 
					if ( typeof(intvl) !== "undefined" ) {
						ds.intvls[intvl].bDone = true;
					}
				}
				if ( typeof(fxAfterLastPage) === "function" ) { 
					fxAfterLastPage(intvl, listName, strCaptureResultsIn); 
				}
			});
		},
		captureNextPage: function(restURL, intvl, listName, strCaptureResultsIn, fxAfterLastPage) {
			ds.util.log("ds.rest.getNextPage function called with arguments... |"+ restURL +"|", true);
			if ( typeof(strCaptureResultsIn) === "undefined" ) {
				if ( !listName === false ) {
					var strCaptureResultsIn = "ds.lists["+listName+"].items.results";
				}
			}
			if ( typeof(fxAfterLastPage) === "undefined" ) { 
				var fxAfterLastPage = function(intvl, listName, strCaptureResultsIn){ 
					ds.util.log("Finished getting last page of REST results for interval"+ intvl,true);
					ds.intvls[intvl].bDone = true;
				};
			}
			ds.$.ajax({
				url: restURL
			}).fail(function( jqXHR, textStatus, errorThrown ) {
				ds.rest.lastSubCall.jqXHR = jqXHR;
				ds.rest.lastSubCall.textStatus = textStatus;
				ds.rest.lastSubCall.errorThrown = errorThrown;
				ds.intvls[intvl].bDone = true;
			}).done(function(data,textStatus,jqXHR){
				ds.rest.lastSubCall.textStatus = textStatus;
				ds.rest.lastSubCall.jqXHR = jqXHR;
				ds.rest.lastSubCall.data = data;
				if ( typeof(eval(strCaptureResultsIn)) === "object" ) {
					//eval(strCaptureResultsIn = strCaptureResultsIn+".concat(data.d.results);");
					ds.$(data.d.results).each(function(i,elm){
						eval(strCaptureResultsIn+".push("+elm+");");
					});
				}
				if ( typeof(fxCallback) === "function" ) { 
					fxCallback(data, textStatus, jqXHR); 
				}
				if ( !data.d.__next === false ) {
					if ( bIgnoreNextPage === false ) {
						ds.rest.captureNextPage(data.d.__next, intvl, listName, fxCallback, fxAfterLastPage);
					}
					else {
						if ( typeof(intvl) !== "undefined" ) {
							ds.intvls[intvl].bDone = true;
						}
					}
				}
				else if ( typeof(fxAfterLastPage) !== "function" ) { 
					if ( typeof(intvl) !== "undefined" ) {
						ds.intvls[intvl].bDone = true;
					}
				}
				if ( typeof(fxAfterLastPage) === "function" ) { 
					fxAfterLastPage(intvl, listName, strCaptureResultsIn); 
				}
			});
		},
		buildRestURL: function(baseURL, arrFilterFields, arrOperators, arrValues, arrLogicalJoins, sRestArgs) {
			var url = baseURL;
			if ( typeof(arrFilterFields) === "object" ) {
				if ( typeof(arrOperators) === "object" ) {
					if ( typeof(arrValues) === "object" ) {
						if ( typeof(arrLogicalJoins) === "object" && arrLogicalJoins.length+1 === arrValues.length ) {
							url += "/?$filter=";
							for ( var fil = 0; fil < arrFilterFields.length; fil++ ) {
								url += arrFilterFields[fil] +" "+ arrOperators[fil] +" "+ arrValues[fil];
								if ( arrLogicalJoins.length > 1 && fil < arrLogicalJoins.length ) {
									url += " "+ arrLogicalJoins[fil] +" ";
								}
							}
						}
						else {
							if ( typeof(arrLogicalJoins) === "undefined" ) {
								url += "/?$filter=";
								for ( var fil = 0; fil < arrFilterFields.length; fil++ ) {
									url += arrFilterFields[fil] +" "+ arrOperators[fil] +" "+ arrValues[fil];
								}
							}
						}
					}
				}
			}
			if ( !sRestArgs === false ) {
				if ( url.indexOf("?") < 0 ) {
					url += "?"+sRestArgs;
				}
				else {
					url += "&"+sRestArgs;
				}
			}
			return url;
		},
		aggregateByDistinctValuesAsync: function(sRestListName, arrGroupByFields, arrGroupByFieldPreFormats, arrOperations, arrAggegateFields, resturl, afterFx) {
			var oReturn = {};
			if ( typeof(resturl) === "undefined" ) {
				var resturl = ds.lists[sRestListName].Items.__deferred.uri;
			}
			var intvl = ds.intvls.newIntvl("wfXHR_getDataFromURI_" + sRestListName);
			ds.intvls[intvl].pauseMS = 100;
			ds.intvls[intvl].forFx = 'ds.rest.getDataFromURI("' + resturl + '")';
			ds.intvls[intvl].desc = arrGroupByFields;
			ds.intvls[intvl].doWorkFx = function() {
				return ds.intvls[intvl].bDone;
			};
			ds.intvls[intvl].successFx = function() {
				ds.util.log("all done with aggregateByDistinctValues");
				ds.util.log(oReturn);
				if ( typeof(afterFx) === "function" ) {
					afterFx(oReturn);
				}
			};
			ds.lists[sRestListName].items = {};
			ds.lists[sRestListName].items.results = [];
			ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx, ds.intvls[intvl].pauseMS);
			var fxForEachPageOfResults = function(d,s,x) {
				// this function runs on each page of returned results
				for ( var iS = 0; iS < d.d.results.length; iS++ ) {
					ds.lists[sRestListName].items.results.push(d.d.results[iS]);
				}
			};
			var fxAfterLastPageOfResults = function(d,s,x) {
				// this function runs after the final page of returned results has been processed
				ds.util.log("Handling all pages of returned results ("+ ds.lists[sRestListName].items.results.length +")",true);
				for ( var i = 0; i < ds.lists[sRestListName].items.results.length; i++ ) {
					ds.util.log(ds.lists[sRestListName].items.results[i].Id);
					var sKey = "";
					/*ds.util.log(arrGroupByFieldPreFormats,true);*/
					if ( typeof(arrGroupByFields) === "object" ) {
						for ( var iK = 0; iK < arrGroupByFields.length; iK++ ) {
							if ( iK === 0 ) {
								if ( !arrGroupByFieldPreFormats[iK] === false && typeof(arrGroupByFieldPreFormats[iK]) === "function" ) {
									sKey += arrGroupByFieldPreFormats[iK](ds.lists[sRestListName].items.results[i][arrGroupByFields[iK]]);
								}
								else {
									sKey += ds.lists[sRestListName].items.results[i][arrGroupByFields[iK]];
								}
							}
							else {
								if ( !arrGroupByFieldPreFormats[iK] === false && typeof(arrGroupByFieldPreFormats[iK]) === "function" ) {
									sKey += "|"+ arrGroupByFieldPreFormats[iK](ds.lists[sRestListName].items.results[i][arrGroupByFields[iK]]);
								}
								else {
									sKey += "|"+ ds.lists[sRestListName].items.results[i][arrGroupByFields[iK]];
								}
							}
						}
					}
					else {
						if ( !arrGroupByFieldPreFormats[0] === false && typeof(arrGroupByFieldPreFormats[0]) === "function" ) {
							sKey = arrGroupByFieldPreFormats[0](ds.lists[sRestListName].items.results[i][arrGroupByFields]);
						}
						else {
							sKey = ds.lists[sRestListName].items.results[i][arrGroupByFields];
						}
					}
					if ( typeof(oReturn[sKey]) === "undefined" ) {
						if ( typeof(arrOperations) === "object" ) {
							oReturn[sKey] = {};
							for ( var iO = 0; iO < arrOperations.length; iO++ ) {
								if ( typeof(oReturn[sKey][arrOperations[iO]]) === "undefined" ) { oReturn[sKey][arrOperations[iO]] = 0; }
								switch (arrOperations[iO]) {
									case "count":
										oReturn[sKey][arrOperations[iO]] = 1;
										break;
									case "sum":
										oReturn[sKey][arrOperations[iO]] = parseInt(ds.lists[sRestListName].items.results[i][arrAggegateFields[iO]],10);
										break;
									case "average":
										oReturn[sKey][arrOperations[iO]] = [parseInt(ds.lists[sRestListName].items.results[i][arrAggegateFields[iO]],10), 1];
										break;
									default: 
										ds.util.log("Unknown operator type |"+ arrOperations +"|");
								}
							}
						}
						else {
							switch (arrOperations) {
								case "count":
									oReturn[sKey] = 1;
									break;
								case "sum":
									oReturn[sKey] = parseInt(ds.lists[sRestListName].items.results[i][arrAggegateFields],10);
									break;
								case "average":
									oReturn[sKey] = [parseInt(ds.lists[sRestListName].items.results[i][arrAggegateFields],10), 1];
									break;
								default: 
									ds.util.log("Unknown operator type |"+ arrOperations +"|");
							}
						}
						
					}
					else {
						if ( typeof(arrOperations) === "object" ) {
							for ( var iO = 0; iO < arrOperations.length; iO++ ) {
								if ( typeof(oReturn[sKey][arrOperations[iO]]) === "undefined" ) { oReturn[sKey][arrOperations[iO]] = 0; }
								switch (arrOperations[iO]) {
									case "count":
										oReturn[sKey][arrOperations[iO]]++;
										break;
									case "sum":
										oReturn[sKey][arrOperations[iO]] += parseInt(ds.lists[sRestListName].items.results[i][arrAggegateFields[iO]],10);
										break;
									case "average":
										oReturn[sKey][arrOperations[iO]][0] += parseInt(ds.lists[sRestListName].items.results[i][arrAggegateFields[iO]],10);
										oReturn[sKey][arrOperations[iO]][1]++;
										break;
									default: 
										ds.util.log("Unknown operator type |"+ arrOperations +"|");
								}
							}
						}
						else {
							switch (arrOperations) {
								case "count":
									oReturn[sKey]++;
									break;
								case "sum":
									oReturn[sKey] += parseInt(ds.lists[sRestListName].items.results[i][arrAggegateFields],10);
									break;
								case "average":
									oReturn[sKey][0] += parseInt(ds.lists[sRestListName].items.results[i][arrAggegateFields],10);
									oReturn[sKey][1]++;
									break;
								default: 
									ds.util.log("Unknown operator type |"+ arrOperations +"|");
							}
						}
					}
				}
				ds.intvls[intvl].bDone = true;
			};
			ds.rest.getDataFromURI(resturl, fxForEachPageOfResults, true, false, intvl, sRestListName, fxAfterLastPageOfResults);
		},
		list: {
			field: {
				getDef: function(sListGUID, sFieldGUID, afterFx) {
					//"http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')"
				},
				add: function(sListGUID, sFieldTitle, sFieldType, bRequired, jsonFieldData, afterFx) {
					var field = {parameters:{}};
					var parameters = { 
						__metadata: { type: 'SP.FieldCreationInformation' }, 
						Title: sFieldTitle, 
						FieldTypeKind: ds.stor.fieldType[sFieldType], 
						Required: bRequired
					};
					if ( !jsonFieldData === false ) {
						for ( fd in jsonFieldData ) {
							parameters[fd] = jsonFieldData[fd];
						}
					}
					field.parameters = parameters;
					intvl = ds.intvls.newIntvl("wfXHR");
					ds.intvls[intvl].pauseMS = 100;
					ds.intvls[intvl].forFx = 'ds.rest.list.field.add("'+JSON.stringify(field)+', '+sListGUID+'")';
					ds.intvls[intvl].desc = 'Do we have an afterFx? '+ typeof(afterFx);
					ds.intvls[intvl].doWorkFx = function(){
						return ds.intvls[intvl].bDone;
					};
					if ( typeof(afterFx) === "function" ) { ds.intvls[intvl].successFx = afterFx; }
					ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx, ds.intvls[intvl].pauseMS);
					ds.rest.lastCall = {jqXHR: null, data: null, status: null, url: ds.p.root + ds.p.rest.lists2013 +"(guid'"+sListGUID+"')/fields/addfield"}; 
					return ds.$.ajax({
						url: ds.p.root + ds.p.rest.lists2013 +"(guid'"+sListGUID+"')/fields/addfield",
						method: "POST",
						data: JSON.stringify(field)
					}).fail(function( jqXHR, textStatus, errorThrown ) {
						ds.rest.lastCall.status = textStatus;
						ds.rest.lastCall.jqXHR = jqXHR;
						ds.intvls[intvl].bDone = true;
					}).done(function(data,textStatus,jqXHR){
						ds.rest.lastCall.data = data; 
						ds.rest.lastCall.status = textStatus;
						ds.rest.lastCall.jqXHR = jqXHR;
						ds.intvls[intvl].bDone = true;
					});
				},
				change: function(sListGUID, sFieldGUID, sFieldTitle, jsonFieldData, afterFx) {
					var field = {
						__metadata: { type: 'SP.Field' }, 
						Title: sFieldTitle
					};
					if ( !jsonFieldData === false ) {
						for ( fd in jsonFieldData ) {
							field[fd] = jsonFieldData[fd];
						}
					}
					intvl = ds.intvls.newIntvl("wfXHR");
					ds.intvls[intvl].pauseMS = 100;
					ds.intvls[intvl].forFx = 'ds.rest.list.field.change("'+JSON.stringify(field)+', '+sListGUID+'")';
					ds.intvls[intvl].desc = 'Do we have an afterFx? '+ typeof(afterFx);
					ds.intvls[intvl].doWorkFx = function(){
						return ds.intvls[intvl].bDone;
					};
					if ( typeof(afterFx) === "function" ) { ds.intvls[intvl].successFx = afterFx; }
					ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx, ds.intvls[intvl].pauseMS);
					ds.rest.lastCall = {jqXHR: null, data: null, status: null, url: ds.p.root + ds.p.rest.lists2013 +"(guid'"+sListGUID+"')/fields('"+sFieldGUID+"')"}; 
					return ds.$.ajax({
						url: ds.p.root + ds.p.rest.lists2013 +"(guid'"+sListGUID+"')/fields('"+sFieldGUID+"')",
						method: "POST",
						data: JSON.stringify(field)
					}).fail(function( jqXHR, textStatus, errorThrown ) {
						ds.rest.lastCall.status = textStatus;
						ds.rest.lastCall.jqXHR = jqXHR;
						ds.intvls[intvl].bDone = true;
					}).done(function(data,textStatus,jqXHR){
						ds.rest.lastCall.data = data; 
						ds.rest.lastCall.status = textStatus;
						ds.rest.lastCall.jqXHR = jqXHR;
						ds.intvls[intvl].bDone = true;
					});
				}
			},
			item: {
				add: function(jsonItemData, sList, afterFx){
					var metadataType = "";
					var bWaitToReturnResponse = false;
					var intvl = null;
					var listName = "";
					var urlRest = ds.p.root + ds.p.rest.lists2013;
					var bFoundListDef = false;
					var oListDef;
					var createdListItem = null;
					// Check if we were passed a GUID to see if we can build our rest URL directly with that
					if ( SP.Guid.isValid(sList) === true ) {
						urlRest += "(guid'"+ sList +"')";
						oListDef = ds.util.findList("Id",sList);
						if ( typeof(oListDef) === "object" ) { 
							bFoundListDef = true;
							metadataType = oListDef.ListItemEntityTypeFullName;
						}
					}
					else {
						urlRest += "/GetByTitle('"+ sList +"')";
						if ( typeof(ds.lists[sList]) === "object" ) {
							// we were passed a list name and we already have its definition
							bFoundListDef = true;
							oListDef = ds.lists[sList];
							metadataType = oListDef.ListItemEntityTypeFullName;
						}
					}
					urlRest += "/items";
					bWaitToReturnResponse = true;
					intvl = ds.intvls.newIntvl("wfXHR_ds.rest.list.item.add");
					// Prepping our update
					var item = ds.$.extend({
						__metadata: { "type": metadataType}
					}, jsonItemData);
					ds.rest.lastCall = {jqXHR: null, data: null, status: null, url: urlRest};
					ds.rest.lastCall.payload = JSON.stringify(item);
					ds.intvls[intvl].pauseMS = 100;
					ds.intvls[intvl].forFx = 'ds.rest.list.item.update("'+JSON.stringify(item)+', '+sList+'")';
					ds.intvls[intvl].desc = 'Do we have an afterFx? '+ typeof(afterFx);
					ds.intvls[intvl].doWorkFx = function(){
						return ds.intvls[intvl].bDone;
					};
					ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx, ds.intvls[intvl].pauseMS);
					ds.$.ajax({
						url: urlRest,
						data: JSON.stringify(item),
						contentType: "application/json;odata=verbose",
						headers: {
							"IF-MATCH": "*"
						},
						dataType: "json",
						method: "POST"
					}).fail(function( jqXHR, textStatus, errorThrown ) {
						ds.rest.lastCall.textStatus = textStatus;
						ds.rest.lastCall.jqXHR = jqXHR;
						ds.intvls[intvl].bDone = true;
						ds.util.log("ds.rest.item.add call failed with error |"+ errorThrown +"|", true);
					}).done(function(data,textStatus,jqXHR){
						try{ds.rest.lastCall.data = data;}catch(err){ds.util.log("ds.rest.list.item.add method could not capture data in ds.rest.lastCall",true);}
						ds.rest.lastCall.textStatus = textStatus;
						ds.rest.lastCall.jqXHR = jqXHR;
						try{createdListItem = data.d;}catch(err){ds.util.log("ds.rest.list.item.add method could not capture data in local variable createdListItem",true);}
						if ( typeof(afterFx) === "function" ) {
							try{afterFx(data, textStatus, jqXHR);}catch(err){ds.util.log("ds.rest.list.item.add method could not call afterFx and pass data, textStatus, jqXHR parameters",true); afterFx();}
						}
						ds.intvls[intvl].bDone = true;
					});
				},
				delete: function(nID, sList, afterFx){
					var listName = "";
					var urlRest = ds.p.root + ds.p.rest.lists2013;
					var intvl = null;
					var metadataType = "";
					var bFoundListDef = false;
					var oListDef;
					if ( SP.Guid.isValid(sList) === true ) {
						// We were passes a GUID, so run the query directly against that
						urlRest += "(guid'"+ sList +"')/items("+ nID +")";
						oListDef = ds.util.findList("Id",sList);
						if ( typeof(oListDef) === "object" ) { 
							bFoundListDef = true;
							metadataType = oListDef.ListItemEntityTypeFullName;
						}
					}
					else {
						// We were not passed a GUID, so assume it was a list name and try to run the query directly against that
						urlRest += "/GetByTitle('"+ sList +"')/items("+ nID +")";
						if ( typeof(ds.lists[sList]) === "object" ) {
							// we were passed a list name and we already have its definition
							bFoundListDef = true;
							oListDef = ds.lists[sList];
							metadataType = oListDef.ListItemEntityTypeFullName;
						}
					}
					intvl = ds.intvls.newIntvl("wfXHR_ds.rest.list.item.delete");
					ds.rest.lastCall = {jqXHR: null, data: null, status: null, url: urlRest};
					ds.intvls[intvl].pauseMS = 73;
					ds.intvls[intvl].forFx = 'ds.rest.list.item.delete("'+nID+'", "'+sList+'", "afterFx")';
					ds.intvls[intvl].desc = 'Do we have an afterFx? '+ typeof(afterFx);
					ds.intvls[intvl].doWorkFx = function(){
						return ds.intvls[intvl].bDone;
					};
					ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx, ds.intvls[intvl].pauseMS);
					ds.$.ajax({
						url: urlRest,
						type: "DELETE",
						headers: {
							"IF-MATCH": "*"
						}
					}).fail(function( jqXHR, textStatus, errorThrown ) {
						ds.rest.lastCall.textStatus = textStatus;
						ds.rest.lastCall.jqXHR = jqXHR;
						ds.intvls[intvl].bDone = true;
						ds.util.log("ds.rest.item.delete call failed with error |"+ errorThrown +"|", true);
					}).done(function(data,textStatus,jqXHR){
						try{ds.rest.lastCall.data = data;}catch(err){ds.util.log("ds.rest.list.item.delete method could not capture data in ds.rest.lastCall",true);}
						ds.rest.lastCall.textStatus = textStatus;
						ds.rest.lastCall.jqXHR = jqXHR;
						if ( typeof(afterFx) === "function" ) {
							try{afterFx(data, textStatus, jqXHR);}catch(err){ds.util.log("ds.rest.list.item.delete method could not call afterFx and pass data, textStatus, jqXHR parameters",true); afterFx();}
						}
						ds.intvls[intvl].bDone = true;
					});
				},
				update: function(jsonItemData, sList, nID, afterFx){
					var updatedListItem = null;
					var metadataType = "";
					var bWaitToReturnResponse = false;
					var intvl = null;
					var listName = "";
					var urlRest = ds.p.root + ds.p.rest.lists2013;
					var bFoundListDef = false;
					var oListDef;
					// Check if we were passed a GUID to see if we can build our rest URL directly with that
					if ( SP.Guid.isValid(sList) === true ) {
						urlRest += "(guid'"+ sList +"')";
						oListDef = ds.util.findList("Id",sList);
						if ( typeof(oListDef) === "object" ) { 
							bFoundListDef = true;
							metadataType = oListDef.ListItemEntityTypeFullName;
						}
					}
					else {
						urlRest += "/GetByTitle('"+ sList +"')";
						if ( typeof(ds.lists[sList]) === "object" ) {
							// we were passed a list name and we already have its definition
							bFoundListDef = true;
							oListDef = ds.lists[sList];
							metadataType = oListDef.ListItemEntityTypeFullName;
						}
					}
					urlRest += "/items("+ nID +")";
					bWaitToReturnResponse = true;
					intvl = ds.intvls.newIntvl("wfXHR_ds.rest.list.item.update");
					// Prepping our update
					var item = ds.$.extend({
						__metadata: { "type": metadataType}
					}, jsonItemData);
					ds.rest.lastCall = {jqXHR: null, data: null, status: null, url: urlRest};
					ds.rest.lastCall.payload = JSON.stringify(item);
					ds.intvls[intvl].pauseMS = 100;
					ds.intvls[intvl].forFx = 'ds.rest.list.item.update("'+JSON.stringify(item)+', '+sList+'")';
					ds.intvls[intvl].desc = 'Do we have an afterFx? '+ typeof(afterFx);
					ds.intvls[intvl].doWorkFx = function(){
						return ds.intvls[intvl].bDone;
					};
					ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx, ds.intvls[intvl].pauseMS);
					ds.$.ajax({
						url: urlRest,
						data: JSON.stringify(item),
						headers: {
							"IF-MATCH": "*",
							"X-HTTP-Method": "MERGE"
						},
						dataType: "json",
						method: "POST"
					}).fail(function( jqXHR, textStatus, errorThrown ) {
						ds.rest.lastCall.textStatus = textStatus;
						ds.rest.lastCall.jqXHR = jqXHR;
						ds.intvls[intvl].bDone = true;
						ds.util.log("ds.rest.item.update call failed with error |"+ errorThrown +"|", true);
					}).done(function(data,textStatus,jqXHR){
						try{ds.rest.lastCall.data = data;}catch(err){ds.util.log("ds.rest.list.item.update method could not capture data in ds.rest.lastCall",true);}
						ds.rest.lastCall.textStatus = textStatus;
						ds.rest.lastCall.jqXHR = jqXHR;
						try{updatedListItem = data.d;}catch(err){ds.util.log("ds.rest.list.item.update method could not capture data in local variable updatedListItem",true);}
						if ( typeof(afterFx) === "function" ) {
							try{afterFx(data, textStatus, jqXHR);}catch(err){ds.util.log("ds.rest.list.item.update method could not call afterFx and pass data, textStatus, jqXHR parameters",true); afterFx();}
						}
						ds.intvls[intvl].bDone = true;
					});
				}
			},
			getItemType: function(name) {
				return"SP.Data." + name[0].toUpperCase() + name.substring(1) + "ListItem";
			},
			getDef: function(sList, afterFx, bGetFields) {
				if ( typeof(bGetFields) === "undefined" ) { var bGetFields = false; }
				var bWaitToReturnResponse = false;
				var intvl = null;
				var listName = "";
				var urlRest = ds.p.root + ds.p.rest.lists2013;
				var bFoundListDef = false;
				var oListDef;
				// Check if we were passed a GUID to see if we can build our rest URL directly with that
				if ( SP.Guid.isValid(sList) === true ) {
					urlRest += "('"+ sList +"')";
					for (var i=0; i<ds.stor.listNames.length;i++) {
						var listname = ds.stor.listNames[i];
						if ( ds.lists[listname].def.Id === sList ) {
							// we were passed a list guid and we already have its definition
							bFoundListDef = true;
							oListDef = ds.lists[listname].def;
							break;
						}
					}
				}
				else {
					urlRest += "/GetByTitle('"+ sList +"')";
					if ( typeof(ds.lists[sList]) === "object" ) {
						// we were passed a list name and we already have its definition
						bFoundListDef === true;
						oListDef = ds.lists[sList];
					}
				}
				if ( bFoundListDef === true ) {
					return oListDef;
				}
				else {
					bWaitToReturnResponse = true;
					intvl = ds.intvls.newIntvl("wfXHR_ds.rest.list.getDef");
						ds.intvls[intvl].pauseMS = 100;
						ds.intvls[intvl].forFx = 'ds.rest.list.getDef("'+sList+'")';
						ds.intvls[intvl].desc = 'Do we have an afterFx? '+ typeof(afterFx);
						ds.intvls[intvl].doWorkFx = function(){
							return ds.intvls[intvl].bDone;
						};
						ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx, ds.intvls[intvl].pauseMS);
						ds.rest.lastCall.url = urlRest;
						ds.rest.lastCall.data = null;
						ds.rest.lastCall.textStatus = null;
						ds.rest.lastCall.jqXHR = null;
					ds.rest.getDataFromURI(urlRest, function(data, textStatus, jqXHR){
						listName = data.d.Title.toLowerCase().replace(" ","").replace(" ","");
						ds.lists[listName] = data.d;
						if ( bGetFields === true ) {
							ds.rest.coll.getListFields(listName, data.d.Fields.__deferred.uri);
						}
						if ( typeof(afterFx) === "function" ) {afterFx(listName);}
						ds.intvls[intvl].bDone = true;
					}, true, true);
					return true;
				}
			},
			getData: {
				fromList: function(sList, arrFilterFields, arrOperators, arrValues, arrLogicalJoins, afterFx, sRestArgs) {
					var url = ds.p.root + ds.p.rest.lists2013 +"/GetByTitle('"+ sList +"')/items";
					var listName = sList.toLowerCase().replace(" ","").replace(" ","").replace(" ","");
					var intvl = null;
					url = ds.rest.buildRestURL(url, arrFilterFields, arrOperators, arrValues, arrLogicalJoins, sRestArgs);
					ds.util.log(url);
					intvl = ds.intvls.newIntvl("wfXHR_getDataFromList_"+sList);
					ds.intvls[intvl].pauseMS = 100;
					ds.intvls[intvl].forFx = 'ds.rest.list.getData.fromList("'+sList+'")...URL = |'+url+'|';
					ds.intvls[intvl].desc = 'Do we have an afterFx? '+ typeof(afterFx);
					ds.intvls[intvl].doWorkFx = function(){
						return ds.intvls[intvl].bDone;
					};
					ds.lists[listName].items = {};
					ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx, ds.intvls[intvl].pauseMS);
					ds.$.ajax({
						url: url,
						dataType: "json",
						method: "GET"
					}).fail(function( jqXHR, textStatus, errorThrown ) {
						ds.rest.lastCall.textStatus = textStatus;
						ds.rest.lastCall.jqXHR = jqXHR;
						ds.intvls[intvl].bDone = true;
					}).done(function(data,textStatus,jqXHR){
						ds.rest.lastCall.textStatus = textStatus;
						ds.rest.lastCall.jqXHR = jqXHR;
						ds.rest.lastCall.data = data;
						ds.lists[listName].items.results = data.d.results;
						if ( !data.d.__next === false ) {
							ds.lists[listName].items.uri = data.d.__next;
							ds.rest.getNextPage(data.d.__next, intvl, listName);
						}
						else {
							ds.lists[listName].items.uri = url;
							ds.intvls[intvl].bDone = true;
						}
						if ( typeof(afterFx) === "function" ) { 
							afterFx(data,textStatus,jqXHR);
						}
					});
				}
			},
			create: function(nListTemplateID, sListName, sListDescription, afterFx) {
				var body = {
					__metadata: { type: 'SP.List' }, 
					AllowContentTypes: true, 
					BaseTemplate: nListTemplateID, 
					ContentTypesEnabled: true, 
					Description: sListDescription, 
					Title: sListName 
				};
				ds.rest.lastCall = {jqXHR: null, data: null, status: null, url: ds.p.root + ds.p.rest.lists2013};
				return ds.$.ajax({
					url: ds.p.root + ds.p.rest.lists2013,
					method: "POST",
					data: JSON.stringify(body)
				}).done(function(data,textStatus,jqXHR){
					ds.rest.lastCall.status = textStatus;
					ds.rest.lastCall.data = data;
					ds.rest.lastCall.jqXHR = jqXHR;
					ds.lists[sListName] = ds.lists[sListName] || {};
					ds.lists[sListName].Title = jqXHR.responseJSON.d.Title;
					ds.lists[sListName].Id = jqXHR.responseJSON.d.Id;
					ds.lists[sListName].BaseTemplate = jqXHR.responseJSON.d.BaseTemplate;
					ds.lists[sListName].BaseType = jqXHR.responseJSON.d.BaseType;
					ds.lists[sListName].EnableAttachments = jqXHR.responseJSON.d.EnableAttachments;
					ds.lists[sListName].EnableVersioning = jqXHR.responseJSON.d.EnableVersioning;
					ds.lists[sListName].Description = jqXHR.responseJSON.d.Description;
					ds.lists[sListName].DefaultView = jqXHR.responseJSON.d.DefaultView.__deferred.uri;
					ds.lists[sListName].ItemCount = jqXHR.responseJSON.d.ItemCount;
					ds.lists[sListName].Items = jqXHR.responseJSON.d.Items.__deferred.uri;
					ds.lists[sListName].Forms = jqXHR.responseJSON.d.Forms.__deferred.uri;
					ds.lists[sListName].Fields = jqXHR.responseJSON.d.Fields.__deferred.uri;
					ds.util.log("List created via REST", true);
					if ( typeof(afterFx) === "function" ) { afterFx(data,textStatus,jqXHR); }
				});
			},
			update: function(sListName, oSettings, afterFx) {
				var body = {
					__metadata: { type: 'SP.List' }
				};
				for ( setting in oSettings ) {
					body[setting] = oSettings[setting];
				}
				var sRESTURL = ds.p.root + ds.p.rest.lists2013 + "/GetByTitle('"+ sListName +"')";
				ds.rest.lastCall = {jqXHR: null, data: null, status: null, url: sRESTURL};
				return ds.$.ajax({
					url: sRESTURL,
					type: "POST",
					data: JSON.stringify(body),
					headers: {
						"X-HTTP-Method":"MERGE",
						"IF-MATCH": "*"
					}
				}).fail(function( jqXHR, textStatus, errorThrown ) {
					ds.rest.lastCall.textStatus = textStatus;
					ds.rest.lastCall.jqXHR = jqXHR;
				}).done(function(data,textStatus,jqXHR){
					ds.rest.lastCall.status = textStatus;
					ds.rest.lastCall.data = data;
					ds.rest.lastCall.jqXHR = jqXHR;
					try{ds.lists[sListName].EnableVersioning = jqXHR.responseJSON.d.EnableVersioning;}catch(err){}
					ds.util.log("List updated via REST", true);
					if ( typeof(afterFx) === "function" ) { afterFx(data,textStatus,jqXHR); }
				});
			},
			addField: function(listGUID, title, fieldTypeKind, bRequired, bEnforceUniqueValues, staticName, lookupListGUID, afterFx) {
				ds.util.log("ds.rest.list.addField called for listGUID |"+ listGUID +"|");
				var body = {
					__metadata: { type: 'SP.Field' }, 
					Title: title, 
					FieldTypeKind: fieldTypeKind, 
					Required: bRequired, 
					EnforceUniqueValues: bEnforceUniqueValues, 
					StaticName: staticName
				};
				var restURL = ds.p.root + ds.p.rest.lists2013 +"(guid'"+ listGUID +"')/Fields";
				if ( fieldTypeKind === 7 ) {
					var body = { parameters: {
						__metadata: { type: 'SP.FieldCreationInformation' }, 
						Title: title, 
						FieldTypeKind: fieldTypeKind, 
						LookupListId: lookupListGUID,
						LookupFieldName: 'Title'
					}};
					restURL += "/addField"
				}
				ds.rest.lastCall = {jqXHR: null, data: null, status: null, url: ds.p.root + ds.p.rest.lists2013};
				return ds.$.ajax({
					url: restURL,
					method: "POST",
					data: JSON.stringify(body)
				}).done(function(data,textStatus,jqXHR){
					ds.rest.lastCall.status = textStatus;
					ds.rest.lastCall.data = data;
					ds.rest.lastCall.jqXHR = jqXHR;
					ds.util.log("List field added via REST", true);
					if ( typeof(afterFx) === "function" ) { afterFx(data,textStatus,jqXHR); }
				});
			}
		},
		coll: {
			getLists: function(bGetFieldDefs, afterFx){
				ds.util.log("Requesting definitions for all lists and libraries in this site");
				return ds.$.ajax({
					url: ds.p.root + ds.p.rest.lists2013,
					/*contentType: "application/json;odata=verbose",
					headers: {accept: "application/json;odata=verbose"},*/
					dataType: "json",
					method: "GET"
				}).fail(function( jqXHR, textStatus, errorThrown ) {
					ds.rest.lastCall.jqXHR = jqXHR;
					ds.rest.lastCall.textStatus = textStatus;
					ds.rest.lastCall.errorThrown = errorThrown;
					ds.util.log("Failed to get definitions for all lists and libraries in this site");
				}).done(function(data,textStatus,jqXHR){
					ds.rest.lastCall.data = data;
					ds.rest.lastCall.textStatus = textStatus;
					ds.rest.lastCall.jqXHR = jqXHR;
					for ( var i = 0; i < data.d.results.length; i++ ) {
						try{
							var listGUID = data.d.results[i].Id;
							var listTitle = data.d.results[i].Title.replace(" ","").replace(" ","").toLowerCase();
							ds.lists[listTitle] = data.d.results[i];
							ds.lists[listTitle].gotDef = true;
							ds.util.log("Got list definition for list |"+ listTitle +"|");
							ds.lists[listTitle].gotFields = false;
							if ( bGetFieldDefs === true && data.d.results[i].Hidden === false ) {
								ds.util.log("Requesting field definitions for list |"+ listTitle +"|");
								//ds.rest.coll.getListFields(listTitle, data.d.results[i].Fields.__deferred.uri);
								ds.rest.coll.expandListDef(listTitle, ds.p.root + ds.p.rest.lists2013 +"('"+ listGUID +"')");
							}
							else {
								ds.lists[listTitle].gotFields = true;
							}
						}catch(err){}
					}
					if ( typeof(afterFx) === "function" ) { afterFx(data,textStatus,jqXHR); }
				});
			},
			expandListDef: function(restListName, restBaseURL, afterFx) {
				if ( restListName !== "userinformationlist" ) {
					var restURL = restBaseURL +"?$select=EffectiveBasePermissions,Fields,Views,items,items/EffectiveBasePermissions&$expand=items,Fields,Views,Views/ViewFields";
				}
				else {
					var restURL = restBaseURL +"?$select=Fields,Views,items&$expand=items,Fields,Views,Views/ViewFields";
				}
				ds.util.log("ds.rest.coll.expandListDef function about to call REST URL... "+ restURL);
				ds.rest.getDataFromURI(restURL, function(data, textStatus, jqXHR){
					ds.util.log("ds.rest.getDataFromURI function got server response with status |"+ textStatus +"|");
					ds.util.log("Expanded list def: "+ restListName);
					ds.lists[restListName].fields_def = data.d.Fields;
					try{ds.lists[restListName].EffectiveBasePermissions = data.d.EffectiveBasePermissions;}catch(err){}
					ds.lists[restListName].items = data.d.Items;
					ds.lists[restListName].Views = data.d.Views;
					if ( typeof(afterFx) === "function" ) {
						afterFx(data, textStatus, jqXHR);
					}
					ds.lists[restListName].gotFields = true;
				}, true, true, "", restListName, "", function(){});
			},
			getListFields: function(sListStorName, sRestURL, afterFx) {
				ds.rest.getDataFromURI(sRestURL, function(data, textStatus, jqXHR){
					ds.rest.lastSubCall = {};
					ds.rest.lastSubCall.textStatus = textStatus;
					ds.rest.lastSubCall.jqXHR = jqXHR;
					ds.lists[sListStorName].fields_def = data.d;
					ds.lists[sListStorName].gotFields = true;
					ds.util.log("Got field definitions for list |"+ sListStorName +"|");
					if ( typeof(afterFx) === "function" ) { afterFx(data,textStatus,jqXHR); }
				}, true, true);
			},
		}
	},
	util: {
		log: function(message, bIgnoreDebugReq) {
			if ( typeof(bIgnoreDebugReq) === "undefined" ) { var bIgnoreDebugReq = false; }
			if ( ds.stor.session.bDebug === true || bIgnoreDebugReq === true ) {
				try{console.log(message);}catch(err){}
			}
		},
		getFunctionCode: function(fx){
			if ( typeof(fx) === "function" ) {
				return fx.toString();
			}
			else {
				return fx;
			}
		},
		findField: function(sRestListName, checkPropertyName, findValue){
			var oReturn;
			ds.$(ds.lists[sRestListName].fields_def.results).each(function(iF, elmF){
				if ( typeof(checkPropertyName) === "string" ) {
					if ( elmF[checkPropertyName] === findValue ) {
						oReturn = elmF;
						return false;
					}
				}
				else if ( typeof(checkPropertyName) === "object" ) {
					var arrDetector = [];
					ds.$(checkPropertyName).each(function(){
						arrDetector.push(false);
					});
					for ( var iCPN = 0; iCPN < checkPropertyName.length; iCPN++ ) {
						if ( elmF[checkPropertyName[iCPN]] === findValue[iCPN] ) {
							arrDetector[iCPN] = true;
						}
						var bDetector = true;
						ds.$(arrDetector).each(function(i,elm){
							if ( elm !== true ) {
								bDetector = false;
								return false;
							}
						});
						if ( bDetector === true ) {
							break;
						}
					}
					var bDetector = true;
					ds.$(arrDetector).each(function(i,elm){
						if ( elm !== true ) {
							bDetector = false;
							return false;
						}
					});
					if ( bDetector === true ) {
						oReturn = elmF;
						return false;
					}
				}
			});
			return oReturn;
		},
		findList: function(checkPropertyName, findValue) {
			var oReturn;
			for ( listName in ds.lists ) {
				if ( typeof(checkPropertyName) === "string" ) {
					if ( ds.lists[listName][checkPropertyName] === findValue ) {
						oReturn = ds.lists[listName];
						break;
					}
				}
				else if ( typeof(checkPropertyName) === "object" ) {
					var arrDetector = [];
					ds.$(checkPropertyName).each(function(){
						arrDetector.push(false);
					});
					for ( var iCPN = 0; iCPN < checkPropertyName.length; iCPN++ ) {
						if ( ds.lists[listName][checkPropertyName[iCPN]] === findValue[iCPN] ) {
							arrDetector[iCPN] = true;
						}
						var bDetector = true;
						ds.$(arrDetector).each(function(i,elm){
							if ( elm !== true ) {
								bDetector = false;
								return false;
							}
						});
						if ( bDetector === true ) {
							break;
						}
					}
					var bDetector = true;
					ds.$(arrDetector).each(function(i,elm){
						if ( elm !== true ) {
							bDetector = false;
							return false;
						}
					});
					if ( bDetector === true ) {
						oReturn = ds.lists[listName];
						break;
					}
				}
			}
			return oReturn
		},
		minifyJS: function(strJS) {
			while (strJS.indexOf("    ") >= 0) {
				strJS = strJS.replace("    ","");
			}
			while (strJS.indexOf("\n") >= 0) {
				strJS = strJS.replace("\n","");
			}
			return strJS;
		},
		escapeJS: function(strJS) {
			var max = 20000;
			var curr = 0;
			var regEx = /([~\\]\")/g
			while ( strJS.indexOf(regEx) >= 1 ) {
				strJS.replace(regEx,"\"");
				curr++;
				if ( curr >= max ) {
					break;
				}
			}
			return strJS;
		},
		appendToMain: function(html) {
			if ( typeof(html) === "string" ) {
				return ds.$("#contentBox").append(html);
			}
			else if ( typeof(html) === "array" || typeof(html) === "object" ) {
				return ds.$("#contentBox").append(html.join(""));
			}
		},
		getAllListsRelatedToTasks: function() {
			var relatedRecordsLists = [];
			var lisOrLibraryName = ds.util.findList("Id",_spPageContextInfo.pageListId.replace("{","").replace("}","")).Id;
			masterListGUID = lisOrLibraryName;
			for ( list in ds.lists ) {
				if ( !ds.lists[list] === false ) {
					if ( !ds.lists[list].fields_def === false ) {
						for ( field in ds.lists[list].fields_def.results ) {
							if ( !ds.lists[list].fields_def.results[field].LookupList === false ) {
								var sLookFor = "{"+ masterListGUID +"}";
								if ( ds.lists[list].fields_def.results[field].LookupList.toString().toUpperCase() === sLookFor.toUpperCase() ) {
									if ( relatedRecordsLists.indexOf(list) < 0 ) {
										relatedRecordsLists.push(list);
									}
								}
							}
						}
					}
				}
			}
			ds.stor.relatedRecordsLists = relatedRecordsLists;
			return relatedRecordsLists;
		},
		getPageRelativeURL: function(){
			var relativeURL = _spPageContextInfo.serverRequestPath;
			return relativeURL;
		},
		getSiteRegionalTimeZone: function(){
			ds.stor.spCSOM.clientContext = new SP.ClientContext();
			ds.stor.spCSOM.web = ds.stor.spCSOM.clientContext.get_web();
			ds.stor.spCSOM.culture = ds.stor.spCSOM.web.get_regionalSettings();
			ds.stor.spCSOM.clientContext.load(ds.stor.spCSOM.culture);
			ds.stor.spCSOM.tz = ds.stor.spCSOM.culture.get_timeZone();
			ds.stor.spCSOM.clientContext.load(ds.stor.spCSOM.tz);
			// Use SP CSOM to get the site's current regional settings for the time zone
			// capture the async response via a callback function
			ds.stor.spCSOM.clientContext.executeQueryAsync(function(){
				ds.stor.spCSOM.siteTzId = ds.stor.spCSOM.tz.$5_0.$H_0.Id;
				ds.stor.spCSOM.siteTzDesc = ds.stor.spCSOM.tz.$5_0.$H_0.Description;
				ds.stor.spCSOM.siteTzInformation = ds.stor.spCSOM.tz.$5_0.$H_0.Information;
			});
			ds.stor.spCSOM.clientContext.dispose();
			return ds.stor.spCSOM.siteTzDescription;
		},
		generateICSDownloadForTaskMeetings: function() {
			ds.rest.getDataFromURI(ds.lists.taskmeetings.Items.__deferred.uri, function(data, textStaus, jqXHR){
				ds.lists.taskmeetings.items = ds.lists.taskmeetings.items || {};
				ds.lists.taskmeetings.items.results = data.d.results;
				for ( item in ds.lists.taskmeetings.items.results ) {
					var urlICS = ds.p.root +"_vti_bin/owssvr.dll?CS=109&Cmd=Display&List=";
						urlICS+= ds.lists.taskmeetings.Id.toUpperCase();
						urlICS+= "&CacheControl=1&ID=";
						urlICS+= ds.lists.taskmeetings.items.results[item].Id;
						urlICS+= "&Using=event.ics";
					ds.util.log("ICS = "+ urlICS);
					var sTitle = ds.$(".ms-formlabel:contains('Title')").parent().children(".ms-formbody").text().trim();
					var sTaskTitle = ds.$(".ms-formlabel:contains('TaskID')").parent().find(".ms-formbody a").text();
					var nTaskID = ds.$(".ms-formlabel:contains('TaskID')").parent().find(".ms-formbody a").prop("href");
					nTaskID = GetUrlKeyValue("ID",true,nTaskID)
					var body = {
						DownloadICS: urlICS
					};
					ds.rest.list.item.update(body, "TaskMeetings", ds.lists.taskmeetings.items.results[item].Id, function(){ds.util.log("Updated item");});
				}
			});
		},
		lookupUserBySPID: function(nID, returnTo, afterFx) {
			$.ajax({
				url: ds.p.root +"_layouts/15/userdisp.aspx?ID="+nID,
				type: "GET",
				dataType: "html",
				async: true,
				success: function(data, textStatus, jqXHR) {
					var sName = $(data).find(".ms-formlabel:contains('Name')").parent().find(".ms-formbody").text().trim();
					ds.stor.users = ds.stor.users || {};
					ds.stor.users[nID] = {};
					ds.stor.users[nID].Name = $(data).find(".ms-formlabel:contains('Name')").parent().find(".ms-formbody").text().trim();
					returnTo.push(sName);
					if ( typeof(afterFx) === "function" ) {
						afterFx(data, textStatus, jqXHR);
					}
				}
			});
		},
		checkIfBaseListsExist: function(){
			ds.$(ds.stor.listNames).each(function(i, e){
				var list = e.toString().toLowerCase();
				var bDetector = false;
				if ( typeof(ds.lists[list]) === "undefined" ) {
					ds.util.log("List name |"+ list +"| not found");
					ds.util.appendToMain("<div>List name |"+ list +"| not found... will attempt to create it</div>");
					// creates the list and adds the lookup field
					ds.rest.list.create(ds.stor.listTemplates.GenericList, e.toString(), "Testing rest list create", function(data, textStatus, jqXHR){
						ds.util.appendToMain("<div>List name |"+ sListName +"| successfully created</div>");
						ds.rest.list.addField(jqXHR.responseJSON.d.Id, "TaskID", ds.stor.fieldType.Lookup, false, false, "TaskID", ds.lists.tasks.Id, function(data2, textStatus2, jqXHR2) {
							ds.util.appendToMain("<div>Added field |"+ title +"| to list with GUID |"+ listGUID +"|</div>");
							ds.util.log("Done adding field to list");
						});
					});
				}
				else {
					bDetector = true;
					ds.util.log("List name |"+ list +"| WAS found");
					ds.util.appendToMain("<div>List name |"+ list +"| WAS found</div>");
				}
			});
		},
		checkIfAllListDefsRetrieved: function(bRequireFields, afterFx){
			var bReturn = true;
			for ( e in ds.lists ) {
				if ( typeof(ds.lists[e]) !== "undefined" ) {
					if ( ds.lists[e].gotDef === true ) {
						if ( bRequireFields === true ) {
							if ( ds.lists[e].gotFields === true ) {
								ds.util.log("List |"+ ds.lists[e].Title +"| and its fields have been retrieved");
							}
							else {
								switch (e) {
									case "apppackages":
										ds.util.log("List |"+ ds.lists[e].Title +"| has been retrieved, but we don't care about its fields");
										break;
									case "userinformationlist":
										ds.util.log("List |"+ ds.lists[e].Title +"| has been retrieved, but we don't care about its fields");
										break;
									default:
										ds.util.log("List |"+ ds.lists[e].Title +"| is retrieved, but we don't have the fields we're looking for", true);
										bReturn = false;
								}
								if ( bReturn === false ) {
									break;
								}
							}
						}
						else {
							ds.util.log("List |"+ ds.lists[e].Title +"| has been retrieved, but we don't care about its fields");
						}
					}
					else {
						ds.util.log("List |"+ ds.lists[e].Title +"| has not yet been retrieved", true);
						bReturn = false;
						break;
						//return false;
					}
				}
				else {
					ds.util.log("List |"+ ds.lists[e].Title +"| is somehow undefined?", true);
					bReturn = false;
					break;
					//return false;
				}
			}
			if ( bReturn === true ) {
				ds.util.log("ds.util.checkIfAllListDefsRetrieved function returning true", true);
				if ( typeof(afterFx) === "function" ) { afterFx(); }
			}
			return bReturn;
		},
		getSettingsForCurrentPage: function(afterFx, bExecuteMasterInit){
			if ( typeof(bExecuteMasterInit) === "undefined" ) { var bExecuteMasterInit = false; }
			var restURL;
			if ( typeof(ds.lists.dsformsettings) !== "undefined" ) {
				restURL = ds.lists.dsformsettings.Items.__deferred.uri;
			}
			else {
				// first need to get the definition for dsFormSettings
				restURL = ds.p.root + ds.p.rest.lists2013 + "/GetByTitle('dsformsettings')";
				ds.rest.getDataFromURI(restURL, function(data, textStaus, jqXHR){
					var listGUID = data.d.Id;
					var listTitle = data.d.Title.replace(" ","").replace(" ","").toLowerCase();
					ds.lists[listTitle] = data.d;
					ds.lists[listTitle].gotDef = true;
					ds.util.log("Got list definition for list |"+ listTitle +"|");
					ds.lists[listTitle].gotFields = false;
					ds.util.log("Expanding list definition for list |"+ listTitle +"|");
					ds.rest.coll.expandListDef(listTitle, ds.p.root + ds.p.rest.lists2013 +"('"+ listGUID +"')", function(){
						ds.lists[listTitle].gotFields = true;
					});
				}, false, true);
			}
			restURL = ds.lists.dsformsettings.Items.__deferred.uri +"?$filter=Title eq '"+ds.p.pageListName+"' and FormNameURL eq '"+ds.p.pageFormName+"'&$select=Id,Title,FormNameURL,blbRelRecs";
			ds.rest.getDataFromURI(restURL, function(data, textStaus, jqXHR){
				if ( data.d.results.length > 0 ) {
					ds.stor.formSettings = data.d.results;
					ds.lists.dsformsettings.items = ds.lists.dsformsettings.items || {};
					ds.lists.dsformsettings.items.results = data.d.results;
					if ( ds.stor.formSettings.length === 1 ) {
						ds.util.log("found settings for current form", true);
						ds.stor.newRelated = ds.stor.newRelated || {};
						ds.stor.updateRelated = ds.stor.updateRelated || {};
						ds.stor.formSettings = JSON.parse(ds.stor.formSettings[0].blbRelRecs);
						ds.stor.existingFormSettings = true;
						if ( typeof(ds.stor.formSettings.relatedRecords) !== "undefined" ) {
							for ( var iFS = 0; iFS < ds.stor.formSettings.relatedRecords.length; iFS++ ) {
								var fx = function(i){
									try{eval("ds.stor.newRelated[ds.stor.formSettings.relatedRecords[i].listName] = "+ ds.stor.formSettings.relatedRecords[i].psudoPopupSaveNewFx +";");}catch(err){}
									try{eval("ds.stor.updateRelated[ds.stor.formSettings.relatedRecords[i].listName] = "+ ds.stor.formSettings.relatedRecords[i].psudoPopupSaveUpdateFx +";");}catch(err){}
									try{eval("ds.stor.formSettings.relatedRecords[i].psudoPopupSaveNewFx = "+ ds.stor.formSettings.relatedRecords[i].psudoPopupSaveNewFx +";");}catch(err){}
									try{eval("ds.stor.formSettings.relatedRecords[i].psudoPopupSaveUpdateFx = "+ ds.stor.formSettings.relatedRecords[i].psudoPopupSaveUpdateFx +";");}catch(err){}
								};
								fx(iFS);
							}
						}
						if ( typeof(ds.stor.formSettings.masterSettings) !== "undefined" ) {
							try{eval("ds.stor.formSettings.masterSettings.initFx = "+ ds.stor.formSettings.masterSettings.initFx +";");}catch(err){}
							try{eval("ds.stor.formSettings.masterSettings.afterFx = "+ ds.stor.formSettings.masterSettings.afterFx +";");}catch(err){}
							if ( bExecuteMasterInit === true ) {
								ds.util.log("Attempting to run ds.stor.formSettings.masterSettings.initFx",true);
								if ( typeof(ds.stor.formSettings.masterSettings.initFx) === "function" ) { ds.stor.formSettings.masterSettings.initFx(); }
								if ( typeof(ds.stor.formSettings.masterSettings.afterFx) === "function" ) { ds.stor.formSettings.masterSettings.afterFx(); }
							}
						}
					}
				}
				else {
					ds.util.log("no settings exist for the current page... returning a empty settings object", true);
					ds.stor.existingFormSettings = false;
					ds.stor.formSettings = {"masterSettings":{"hideAddRelatedRecordButtons":true,"hideFilterTab":true,"initFx":"function() {}","afterFx":"function() {}"},"relatedRecords":[]};
				}
				if ( typeof(afterFx) === "function" ) {
					afterFx(ds.stor.formSettings);
				}
			});
		},
		getCurrentTaskDetails: function(afterFx, bAsync){
			ds.rest.lastCall = {};
			ds.rest.getDataFromURI(ds.lists.tasks.Items.__deferred.uri+"("+GetUrlKeyValue("ID")+")",function(data, textStatus, jqXHR){
				ds.rest.lastCall.data = data;
				ds.rest.lastCall.textStatus = textStatus;
				ds.rest.lastCall.jqXHR = jqXHR;
				if ( typeof(afterFx) === "function" ) {
					afterFx(data, textStatus, jqXHR);
				}
			}, bAsync);
		},
		ifCurrentTaskAssignedToMe: function(afterFx){
			var bReturn = false;
			ds.util.getCurrentTaskDetails(function(d,s,x){
				if ( !d.d.AssignedToId === false ) {
					bReturn = d.d.AssignedToId.results.indexOf(ds.p.userID) >= 0;
					if ( typeof(afterFx) === "function" && bReturn === true ) {
						afterFx(d, s, x);
					}
				}
				else {
					bReturn = false;
				}
			}, true);
			return bReturn;
		},
		getListPermissions: function(restlistname, afterFx){
			if ( typeof(ds.lists[restlistname]) === "undefined" ) {
				ds.rest.list.getDef(restlistname,function(d,s,x){
					ds.rest.coll.expandListDef(restlistname,ds.lists[restlistname].__metadata.uri, function(d,s,x){
						if ( typeof(afterFx) === "function" ) { afterFx(ds.lists[restlistname].EffectiveBasePermissions); }
					});
				});
			}
			else if ( typeof(ds.lists[restlistname].EffectiveBasePermissions) === "undefined" ) {
					ds.rest.coll.expandListDef(restlistname,ds.lists[restlistname].__metadata.uri, function(d,s,x){
						if ( typeof(afterFx) === "function" ) { afterFx(ds.lists[restlistname].EffectiveBasePermissions); }
					});
			}
			else {
				if ( typeof(afterFx) === "function" ) { 
					afterFx(ds.lists[restlistname].EffectiveBasePermissions); 
				}
			}
		},
		checkForItemEditAddDelete: function(restlistname, afterFx){
			var up = new SP.BasePermissions();
			up.set(SP.PermissionKind.viewListItems);
			up.set(SP.PermissionKind.editListItems);
			up.set(SP.PermissionKind.addListItems);
			up.set(SP.PermissionKind.deleteListItems);
			// High must be < up.$5_1 to correctly detect no access for anonymous users
			// but must be > up.$5_1 to correctly detect appropriate access for daniel logged in
			if ( typeof(_spPageContextInfo.userId) === "undefined" ){
				if ( ds.lists[restlistname].EffectiveBasePermissions.High < up.$5_1 ) {
					if ( typeof(afterFx) === "function" ) { afterFx(true); }
					return true;
				}
				else {
					if ( typeof(afterFx) === "function" ) { afterFx(false); }
					return false;
				}
			}
			else {
				if ( ds.lists[restlistname].EffectiveBasePermissions.High > up.$5_1 ) {
					if ( typeof(afterFx) === "function" ) { afterFx(true); }
					return true;
				}
				else {
					if ( typeof(afterFx) === "function" ) { afterFx(false); }
					return false;
				}
			}
		},
		conditionallyShowDsMagicConfigurationButton: function(){
			// show dsMagic config button in lower-right corner if user has permissions to edit that list
			var intvl = ds.intvls.newIntvl("wf_list_dsformsettings");
			ds.intvls[intvl].pauseMS = 100;
			ds.intvls[intvl].forFx = 'ds.util.conditionallyShowDsMagicConfigurationButton()';
			ds.intvls[intvl].timeoutMS = 10000;
			ds.intvls[intvl].doWorkFx = function(){
				if ( typeof(ds.lists.dsformsettings) !== "undefined" ) {
					if ( typeof(ds.lists.dsformsettings.EffectiveBasePermissions.High) !== "undefined" ) {
						ds.intvls[intvl].bDone = true;
					}
				}
				return ds.intvls[intvl].bDone;
			};
			ds.intvls[intvl].successFx = function (){
				ds.util.log('ds.intvls.'+intvl+'.intvl... SUCCESSFULLY FINISHED WAITING',true);
				ds.stor.session.userEditDsFormSettingsAccess = ds.util.checkForItemEditAddDelete("dsformsettings", function(hasPermissions){
					if ( hasPermissions === true ) {
						ds.util.appendToMain("<table class='ds-magic-enterSetupButton-wrapper' border='0' cellspacing='0' cellpadding='0'><tbody><tr><td class='ds-magic-enterSetupButton' title='Enter ds magic setup'><i class='fa fa-ellipsis-v'></i></td></tr></tbody></table>");
						ds.$(".ds-magic-enterSetupButton").click(function(){ds.configure.load();});
					}
				});
			};
			ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx, ds.intvls[intvl].pauseMS);
		},
		getListFormFieldByDisplayName: function(sName){
			var $listFormTableRow = ds.$(".ms-formlabel:contains('"+sName+"')").parents("tr").eq(0);
			var $formField = $listFormTableRow.children(".ms-formbody").find("TEXTAREA[title^='"+sName+"'],INPUT[title^='"+sName+"'],SELECT[title^='"+sName+"']");
			return $formField;
		},
		getListFormFieldValueByDisplayName: function(sName){
			var $listFormTableRow = ds.$(".ms-formlabel:contains('"+sName+"')").parents("tr").eq(0);
			var $formField = $listFormTableRow.children(".ms-formbody").find("TEXTAREA[title^='"+sName+"'],INPUT[title^='"+sName+"'],SELECT[title^='"+sName+"']");
			if ( $formField[0].tagName.toUpperCase() === "SELECT" ) {
				if ( $formField.prop("multiple") === true ) {
					var $options = $formField.find("OPTION[selected]");
					var arrReturn = [];
					$options.each(function(){
						arrReturn.push([ds.$(this).val(),ds.$(this).text()]);
					});
					return arrReturn;
				}
				else {
					var $options = $formField.find("OPTION[selected]");
					return [$options.val(),$options.text()];
				}
			}
			else {
				return $formField.val();
			}
		},
		simulateBrowseTabClick: function(){
			document.getElementById("Ribbon.Read-title").firstElementChild.click();
		},
		isPageInEditMode: function(){
			var bReturn = false;
			try{bReturn = document.forms["aspnetForm"].MSOLayout_InDesignMode.value == "1";}catch(err){}
			try{bReturn = document.forms["aspnetForm"]._wikiPageMode.value == "Edit";}catch(err){}
			return bReturn;
		},
		getWPZByRowAndColumn: function(row, col){
			var jqSel = ["TABLE.ms-webpartPage-root > TBODY"];
			if ( typeof(row) === "object" && typeof(col) === "object" ) {
				for ( var i = 0; i < row.length; i++ ) {
					if ( i > 0 ) {
						jqSel.push(" TABLE > TBODY");
					}
					jqSel.push(" > TR:eq("+ row[i] +") > TD:eq("+ col[i] +")");
				}
			}
			else {
				jqSel.push(" > TR:eq("+ row +") > TD:eq("+ col +")");
			}
			jqSel.push(" > .ms-webpart-zone");
			return ds.$(jqSel.join(""));
		}
	},
	evts: {},
	intvls: {
		newIntvl: function(sIntvlName){
			var rightNow = new Date();
			var intvlName = sIntvlName + rightNow.valueOf();
			if ( typeof(ds.intvls[intvlName]) === "undefined" ) {
				// we found a unique interval name
				ds.intvls[intvlName] = {
					name: intvlName,
					forFx: '',
					desc: '',
					intvl: null,
					pauseMS: 123,
					counter: 0,
					timeoutMS: 10000,
					bDone: false, 
					loopingFx: function(){
						ds.intvls[intvlName].counter = ds.intvls[intvlName].counter + 1;
						
						ds.intvls[intvlName].doWorkFx();
						
						if ( ds.intvls[intvlName].bDone === true ) {
							ds.intvls[intvlName].successFx();
							clearInterval(ds.intvls[intvlName].intvl);
						}
						if ( (ds.intvls[intvlName].counter*ds.intvls[intvlName].pauseMS) >= ds.intvls[intvlName].timeoutMS ) {
							ds.intvls[intvlName].timeoutFx();
							clearInterval(ds.intvls[intvlName].intvl);
						}
					},
					doWorkFx: function(){
						
						// evaluate if we're done waiting, then set ds.intvls[this.name].bDone = true if so
					},
					successFx: function(){
						ds.util.log("ds.intvls."+intvlName+".intvl... SUCCESSFULLY FINISHED WAITING", true);
					},
					timeoutFx: function(){
						ds.util.log("ds.intvls."+intvlName+".intvl... ERROR! TIMED OUT WAITING", true);
					}
				};
			} 
			else {
				ds.util.log("An interval with that name ("+ intvlName +") already exists!", true);
				alert("An interval with that name ("+ intvlName +") already exists!");
			}
			return intvlName;
		},
		wfIdleToLoadResources: {
			intvl: null,
			pauseMS: 73,
			timeoutMS: 1100,
			counter: 0,
			loopingFx: function(){
				var bSuccess = false;
				// check to see if we're done waiting
				try{
					ExecuteOrDelayUntilScriptLoaded(function(){
						if ( window.document.readyState === "complete" ) {
							if ( ds.stor.session.idleTime >= (ds.intvls.wfIdleToLoadResources.timeoutMS/2) ) {
								bSuccess = true;
							}
						}
					}, "sp.js");
				}
				catch(err){}
				if ( bSuccess === true ) {
					ds.intvls.wfIdleToLoadResources.onSuccessFx();
					clearInterval(ds.intvls.wfIdleToLoadResources.intvl);
				}
				else {
					if ( ds.intvls.wfIdleToLoadResources.pauseMS * ds.intvls.wfIdleToLoadResources.counter >= ds.intvls.wfIdleToLoadResources.timeoutMS ) {
						ds.intvls.wfIdleToLoadResources.onTimeoutFx();
						clearInterval(ds.intvls.wfIdleToLoadResources.intvl);
					}
					else {
						ds.intvls.wfIdleToLoadResources.counter = ds.intvls.wfIdleToLoadResources.counter + 1;
					}
				}
				ds.stor.session.idleTime += ds.intvls.wfIdleToLoadResources.pauseMS;
			},
			onTimeoutFx: function(){
				ds.util.log("wfIdleToLoadResources... Detected user idle time... will load additional content in anticipation of the next user request to speed things up", true);
				ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-stor-SPTZs.js");
				ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-stor-listTemplates.js", function(){
					ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-stor-fieldType.js", function(){
						ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-stor-createLists.js");
					});
				});
				ds.$.getCachedScript(ds.p.cdn.js.moment, function(){ds.$.getCachedScript(ds.p.cdn.js.momentTz);});
				ds.$.getCachedScript(ds.p.cdn.js.fontAwesome);
				ds.$.getCachedScript(ds.p.cdn.js.feedEk);
				ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-controls-tabs.js");
				ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-controls-psudoPopup.js");
				ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-controls-accordion.js");
				ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-controls-codeEditor.js");
				ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-controls-contextMenu.js");
				if ( ds.stor.session.bOnlyGetListsWhenTold === false ) {
					ds.rest.coll.getLists(true, function(){
						ds.intvls.wfAllListsAndFields.intvl = setInterval(ds.intvls.wfAllListsAndFields.loopingFx, ds.intvls.wfAllListsAndFields.pauseMS);
					});
				}
				else {
					ds.util.getSettingsForCurrentPage(function(formSettings){
						try{
							eval("formSettings.masterSettings.initFx = "+ formSettings.masterSettings.initFx +";");
							formSettings.masterSettings.initFx();
						}catch(err){}
					});
				}
				ds.pages.all();
				if ( typeof(ds.intvls.wfIdleToLoadResources.afterFx) === "function" ) { ds.intvls.wfIdleToLoadResources.afterFx(); }
				window.clearInterval(ds.intvls.wfIdleToLoadResources.intvl);
			},
			onSuccessFx: function(){
				ds.util.log("wfIdleToLoadResources... Detected that sp.ribbon.js is loaded and document.readyState is complete... will load additional content in anticipation of the next user request to speed things up");
				ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-stor-SPTZs.js");
				ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-stor-listTemplates.js", function(){
					ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-stor-fieldType.js", function(){
						ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-stor-createLists.js");
					});
				});
				ds.$.getCachedScript(ds.p.cdn.js.moment, function(){ds.$.getCachedScript(ds.p.cdn.js.momentTz);});
				ds.$.getCachedScript(ds.p.cdn.js.fontAwesome);
				ds.$.getCachedScript(ds.p.cdn.js.feedEk);
				ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-controls-tabs.js");
				ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-controls-psudoPopup.js");
				ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-controls-accordion.js");
				ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-controls-codeEditor.js");
				ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-controls-contextMenu.js");
				ds.util.log("wfIdleToLoadResources... Finished load of additional content in anticipation of the next user request to speed things up... conditionally kicking off lists and fields retrieval");
				if ( ds.stor.session.bOnlyGetListsWhenTold === false ) {
					ds.rest.coll.getLists(true, function(){
						ds.intvls.wfAllListsAndFields.intvl = setInterval(ds.intvls.wfAllListsAndFields.loopingFx, ds.intvls.wfAllListsAndFields.pauseMS);
					});
				}
				else {
					ds.util.getSettingsForCurrentPage(function(formSettings){},true);
				}
				ds.pages.all();
				if ( typeof(ds.intvls.wfIdleToLoadResources.afterFx) === "function" ) { ds.intvls.wfIdleToLoadResources.afterFx(); }
				window.clearInterval(ds.intvls.wfIdleToLoadResources.intvl);
			},
			afterFx: function(){}
		},
		wfAllListsAndFields: {
			intvl: null,
			pauseMS: 500,
			timeoutMS: 8000,
			counter: 0,
			loopingFx: function(){
				var bSuccess = false;
				// check to see if we're done waiting
				try{
					bSuccess = ds.util.checkIfAllListDefsRetrieved(true);
				}
				catch(err){}
				if ( bSuccess === true ) {
					ds.intvls.wfAllListsAndFields.onSuccessFx();
					clearInterval(ds.intvls.wfAllListsAndFields.intvl);
				}
				else {
					if ( ds.intvls.wfAllListsAndFields.pauseMS * ds.intvls.wfAllListsAndFields.counter >= ds.intvls.wfAllListsAndFields.timeoutMS ) {
						ds.intvls.wfAllListsAndFields.onTimeoutFx();
						clearInterval(ds.intvls.wfAllListsAndFields.intvl);
					}
					else {
						ds.intvls.wfAllListsAndFields.counter = ds.intvls.wfAllListsAndFields.counter + 1;
					}
				}
			},
			onTimeoutFx: function(){
				ds.util.log("wfAllListsAndFields... timeout waiting for all lists and fields to be retrieved");
				window.clearInterval(ds.intvls.wfAllListsAndFields.intvl);
			},
			onSuccessFx: function(){
				ds.util.log("wfAllListsAndFields... Detected that all lists and fields have been retrieved... Checking if we need to load tabbed interface", true);
				ds.util.getSettingsForCurrentPage(function(formSettings){
					try{
						eval("formSettings.masterSettings.initFx = "+ formSettings.masterSettings.initFx +";");
						formSettings.masterSettings.initFx();
					}catch(err){}
				});
				setTimeout(ds.util.conditionallyShowDsMagicConfigurationButton,1300);
				window.clearInterval(ds.intvls.wfAllListsAndFields.intvl);
			}
		}
	},
	controls: {
		accordion: {},
		psudoButton: {
			gen: function(strButtonID, strButtonText, faIconClassName, faIconClassSize) {
				var arrHTML = new Array();
				arrHTML.push("<DIV class='ds-psudoButton' id='"+strButtonID+"'>");
				arrHTML.push("<table align='center' width='auto' border='0' cellspacing='0' cellpadding='0'>");
				arrHTML.push("<tbody>");
				arrHTML.push("<tr>");
				if ( typeof(faIconClassName) === "string" ) {
					arrHTML.push("<td><i class='fa "+faIconClassName+" "+ faIconClassSize +"'></i></td>");
				}
				else if ( typeof(faIconClassName) === "object" ) {
					for ( var iFa = 0; iFa < faIconClassName.length; iFa++ ) {
						arrHTML.push("<td><i class='fa "+faIconClassName[iFa]+" "+ faIconClassSize[iFa] +"'></i></td>");
					}
				}
				arrHTML.push("<td>"+strButtonText+"</td>");
				arrHTML.push("</tr>");
				arrHTML.push("</tbody>");
				arrHTML.push("</table>");
				arrHTML.push("</DIV>");
				return arrHTML.join("");
			}
		},
		codeEditor: {},
		psudoPopup: {},
		tabs: {},
		contextMenu: {},
		chart: {
			init: function(sjqSelector){
				ds.$.ajax({
					url: ds.p.root +"Style%20Library/ds_html_chart.html", 
					method: "GET",
					dataType: "html"
				}).done(function(data, status, jqXHR){
					if ( typeof(sjqSelector) === "undefined" ) {
						ds.util.appendToMain(jqXHR.responseText);
					}
					else {
						ds.$(sjqSelector).append(jqXHR.responseText);
					}
				});
			}
		}
	},
	pages: {
		all: function(){
			ds.util.log("Setting up event handlers used on all pages", true);
			ds.$("BODY").on("keypress",function(e){ 
				ds.stor.session.idleTime = 0; 
				ds.evts.keyPressBody = e;
			});
			ds.$("BODY").on("mousedown",function(e){ 
				ds.stor.session.idleTime = 0; 
				ds.evts.mouseDownBody = e;
			});
			ds.$("BODY").on("mouseup",function(e){ 
				ds.stor.session.idleTime = 0; 
				ds.evts.mouseUpBody = e;
			});
			ds.$("BODY").on("mousemove",function(e){ 
				ds.stor.session.idleTime = 0; 
				ds.evts.mouseMoveBody = e;
				ds.stor.session.mouseX = e.clientX;
				ds.stor.session.mouseY = e.clientY;
			});
			ds.$(window).on("blur",function(e){
				ds.stor.session.windowFocus = false;
				ds.stor.session.idleTime = ds.intvls.wfIdleToLoadResources.timeoutMS+1;
				ds.evts.blurWindow = e;
			});
			ds.$(window).on("focus",function(e){
				ds.stor.session.windowFocus = true;
				ds.evts.focusWindow = e;
			});
			$("#DeltaSiteLogo").empty().append("<div class='ds-magic-logo-wrapper' unselectable='on'><span class='ds-magic-logo-content-letter' unselectable='on'>d</span><span class='ds-magic-logo-content-letter' unselectable='on'>s</span><span class='ds-magic-logo-content-fa' unselectable='on'><i class='fa fa-magic'></i></span></div>");
		}
	},
	configure: {
		load: function(){
			ds.stor.configGui = {};
			var intvl = ds.intvls.newIntvl("dsMagicConfigInit");
			ds.intvls[intvl].successFx = function(){
				ds.configure.init();
			}
			ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx,ds.intvls[intvl].pauseMS);
			ds.controls.codeEditor.addScripts(function(){
				ds.$.ajax({
					url: ds.p.root +"Style%20Library/ds_html_config_dsmagic_gui.html", 
					method: "GET",
					dataType: "html"
				}).done(function(responseText){
					ds.util.log("appending initial code for dsmagic configuration", true);
					ds.util.appendToMain(responseText);
					ds.$(".ds-config-gui").css({"position":"fixed","width":"80%","height":"70%","bottom":"5%","right":"10%"});
					ds.$(".ds-config-gui").wrap("<div class='ds-psudoPopupWrapper'></div>");
					ds.intvls[intvl].bDone = true;
				});
			});
		},
		init: function(){
			ds.stor.configGui.sectionHeader = ds.$(".ds-config-section-header").eq(0).clone(true);
			ds.$(".ds-config-section-header").eq(0).remove();
			ds.stor.configGui.sectionContent = ds.$(".ds-config-section-wrapper").eq(0).clone(true);
			ds.$(".ds-config-section-wrapper").eq(0).remove();
			var iSettingIndex = 1;
			ds.util.getSettingsForCurrentPage(function(formSettings){
				try{console.dir(formSettings);}catch(err){}
				var masterSettings = formSettings.masterSettings;
				if ( typeof(formSettings.relatedRecords) !== "undefined" ) {
					var $header = ds.$(ds.stor.configGui.sectionHeader).clone(true);
					$header.find(".ds-config-section-header-name").text("Related Records Tabs UI");
					$header.find(".ds-config-section-index").text(iSettingIndex);
					ds.$(".ds-config-gui").append($header);
					
					var $content = ds.$(ds.stor.configGui.sectionContent).clone(true);
					$content.html("<div id='placeholderRelatedRecordsTabsUI'></div>");
					ds.$(".ds-config-gui").append($content);
					
					var intvl = ds.intvls.newIntvl("tabsConfigInit");
					ds.intvls[intvl].successFx = function(){
						setTimeout(ds.controls.tabs.configure.init,15);
					}
					ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx,ds.intvls[intvl].pauseMS);
					ds.controls.codeEditor.addScripts(function(){
						ds.$.get(ds.p.root +"Style%20Library/ds_html_config_related_records_gui.html").done(function(responseText){
							ds.util.log("appending raw HTML for tabs config", true);
							ds.$("#placeholderRelatedRecordsTabsUI").replaceWith(responseText);
							ds.$(".ds-config-gui-tabs").css({"border":"0px hidden transparent","background-color":"transparent","width":"99%"});
							ds.$(".ds-tabs-config-btn-save").parents("TD").eq(0).remove();
							ds.$(".ds-tabs-config-btn-cancel").parents("TD").eq(0).remove();
							ds.$(".ds-tabs-config-btn-collapseListForm").parents("TD").eq(0).remove();
							ds.$(".ds-config-gui-tabs .ds-config-tab-header.masterSettings, .ds-config-gui-tabs .ds-config-tab-wrapper.masterSettings").remove();
							ds.$(".ds-tabs-config-gui-top-menu .ds-tabs-config-btn").css("font-size","0.9em");
							ds.$(".ds-tabs-config-gui-top-menu > TABLE:first-child").attr("align","right");
							ds.intvls[intvl].bDone = true;
						});
					});
				}
				iSettingIndex++;
				ds.$(".ds-config-section-wrapper").slideUp();
				ds.$(".ds-config-section-header-name").click(function(){
					if ( ds.$(this).parents(".ds-config-section-header").next().css("display") !== "none" ) {
						ds.$(this).parents(".ds-config-section-header").next().slideUp();
					}
					else {
						ds.$(this).parents(".ds-config-section-header").next().slideDown();
					}
				});
			});
		},
		events: {}
	},
	$:$,
	onLoad: setTimeout(function(){
		ds.util.log("DS Namespace loaded", true);
		ds.$.support.cors = true;
		ds.$.getCachedScript = function(url, fxCallback, options) {
			options = ds.$.extend( options || {}, {
				dataType: "script",
				async: true,
				cache: true,
				url: url
			});
			if ( typeof(fxCallback) === "function" ) {			
				return ds.$.ajax(options).done(function(){fxCallback();});
			}
			else {
				return ds.$.ajax(options);
			}
		};
		ds.$.getPageWithActiveContent = function(url, options, bCache) {
			if ( typeof(bCache) === "undefined" ) { var bCache = false; }
			options = ds.$.extend( options || {}, {
				dataType: "html",
				async: true,
				cache: bCache,
				url: url
			});
			return ds.$.ajax(options);
		};
		ds.$.ajaxSetup({
			contentType: "application/json;odata=verbose",
			headers: {
				"accept": "application/json;odata=verbose",
				"content-type": "application/json;odata=verbose",
				"X-RequestDigest": $("#__REQUESTDIGEST").val()
			}/*,
			dataType: "json",
			method: "GET"*/
		});
		ds.util.log("DS Namespace jQuery extended with additional functions");
		ds.$(document).ready(function(){
			ds.util.log("Document.ready event fired",true);
			if ( ds.util.isPageInEditMode() === false ) {
				ds.intvls.wfIdleToLoadResources.intvl = setInterval(ds.intvls.wfIdleToLoadResources.loopingFx, ds.intvls.wfIdleToLoadResources.pauseMS);
			}
			ds.$(document).off("ready");
		});
	}, 100)
};