ds.rest = {
	lastCall: {},
	lastSubCall: {},
	getDataFromURI: function(restURL, fxCallback, bAsync, bIgnoreNextPage, intvl, listName, fxAfterLastPage, fxOnFailed) {
		if ( typeof(bAsync) === "undefined" ) { var bAsync = true; }
		if ( typeof(bIgnoreNextPage) === "undefined" ) { var bIgnoreNextPage = false; }
		if ( typeof(intvl) === "undefined" ) { 
			bIgnoreNextPage = true; 
			/*
			intvl = ds.intvls.newIntvl("getDataFromURI");
			ds.intvls[intvl].pauseMS = 100;
			ds.intvls[intvl].forFx = 'ds.rest.getDataFromURI...restURL = |'+restURL+'|';
			ds.intvls[intvl].doWorkFx = function(){
				return ds.intvls[intvl].bDone;
			};
			ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx, ds.intvls[intvl].pauseMS);
			*/
		}
		/*
		if ( typeof(fxAfterLastPage) === "undefined" ) { 
			var fxAfterLastPage = function(intvl, listName, strCaptureResultsIn){ 
				ds.util.log("Finished getting last page of REST results for interval"+ intvl,true);
				ds.intvls[intvl].bDone = true;
			};
		}
		*/
		ds.rest.lastCall.url = restURL;
		ds.util.log("ds.rest.getDataFromURI function called with arguments... |"+ encodeURI(restURL) +"|");
		ds.$.ajax({
			url: restURL,
			async: bAsync
		}).fail(function( jqXHR, textStatus, errorThrown ) {
			ds.rest.lastCall.jqXHR = jqXHR;
			ds.rest.lastCall.textStatus = textStatus;
			ds.rest.lastCall.errorThrown = errorThrown;
			ds.util.log("ds.rest.getDataFromURI function ajax call failed with error ... |"+ errorThrown +"|... dumping jqXHR next",true);
			ds.util.log(jqXHR,true);
			if ( typeof(fxOnFailed) === "function" ) {
				fxOnFailed(jqXHR, textStatus, errorThrown);
			}
			if ( typeof(ds.intvls[intvl]) !== "undefined" ) {
				ds.intvls[intvl].bDone = true;
			}
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
					if ( typeof(fxAfterLastPage) === "function" ) { 
						fxAfterLastPage(intvl, listName); 
					}
					if ( typeof(ds.intvls[intvl]) !== "undefined" ) {
						ds.intvls[intvl].bDone = true;
					}
				}
			}
			else if ( typeof(ds.intvls[intvl]) !== "undefined" ) {
				if ( typeof(fxAfterLastPage) === "function" ) { 
					fxAfterLastPage(intvl, listName); 
				}
				ds.intvls[intvl].bDone = true;
			}
			/*
			else if ( typeof(fxAfterLastPage) === "function" && !intvl === true ) {
				fxAfterLastPage(intvl, listName, data,textStatus,jqXHR);
			}
			*/
		});
	},
	getNextPage: function(restURL, intvl, listName, fxCallback, fxAfterLastPage) {
		ds.util.log("ds.rest.getNextPage function called with arguments... |"+ restURL +"|");
		/*
		if ( typeof(fxAfterLastPage) === "undefined" ) { 
			var fxAfterLastPage = function(intvl, listName){ 
				ds.util.log("Finished getting last page of REST results for interval"+ intvl,true);
			};
		}
		*/
		ds.rest.lastCall.url = restURL;
		ds.$.ajax({
			url: restURL
		}).fail(function( jqXHR, textStatus, errorThrown ) {
			ds.rest.lastSubCall.jqXHR = jqXHR;
			ds.rest.lastSubCall.textStatus = textStatus;
			ds.rest.lastSubCall.errorThrown = errorThrown;
			ds.util.log("ds.rest.getNextPage function ajax call failed with error ... |"+ errorThrown +"|... dumping jqXHR next",true);
			ds.util.log(jqXHR,true);
			if ( typeof(ds.intvls[intvl]) !== "undefined" ) {
				ds.intvls[intvl].bDone = true;
			}
		}).done(function(data,textStatus,jqXHR){
			ds.rest.lastSubCall.textStatus = textStatus;
			ds.rest.lastSubCall.jqXHR = jqXHR;
			ds.rest.lastSubCall.data = data;
			ds.util.log("ds.rest.getNextPage function ajax call done with status ... |"+ textStatus +"|");
			try{
				ds.rest.lastCall.data.d.results = ds.rest.lastCall.data.d.results.concat(data.d.results);
				ds.util.log("ds.rest.getNextPage function successfully appended results to ds.rest.lastCall.data.d.results",true);
			}
			catch(err){
				ds.util.log("ds.rest.getNextPage function failed to append results to ds.rest.lastCall.data.d.results",true);
				ds.util.log(err,true);
			}
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
		ds.rest.lastCall.url = restURL;
		ds.util.log("ds.rest.captureDataFromURI function called with arguments... |"+ restURL +"|", true);
		ds.$.ajax({
			url: restURL,
			async: bAsync
		}).fail(function( jqXHR, textStatus, errorThrown ) {
			ds.rest.lastCall.jqXHR = jqXHR;
			ds.rest.lastCall.textStatus = textStatus;
			ds.rest.lastCall.errorThrown = errorThrown;
			ds.util.log("ds.rest.captureDataFromURI function ajax call failed with error ... |"+ errorThrown +"|... dumping jqXHR next",true);
			ds.util.log(jqXHR,true);
			if ( typeof(ds.intvls[intvl]) !== "undefined" ) {
				ds.intvls[intvl].bDone = true;
			}
		}).done(function(data,textStatus,jqXHR){
			ds.rest.lastCall.textStatus = textStatus;
			ds.rest.lastCall.jqXHR = jqXHR;
			ds.rest.lastCall.data = data;

			if ( typeof(eval(strCaptureResultsIn)) === "object" ) {
				//eval(strCaptureResultsIn = strCaptureResultsIn+" || [];");
				//eval(strCaptureResultsIn = strCaptureResultsIn+".concat(data.d.results);");
				if ( typeof(eval(data.d.results)) === "object" ) {
					ds.$(data.d.results).each(function(i,elm){
						eval(strCaptureResultsIn+".push("+JSON.stringify(elm)+");");
					});
				}
				else {
					for ( prop in data.d ){
						try{
							eval(strCaptureResultsIn+"="+JSON.stringify(data.d[prop])+";");
						}catch(err){
							ds.util.log("ds.rest.captureDataFromURI function failed to capture property |"+ prop +"| with error |"+ err +"|",true);
						}
					}
				}
			}
			if ( typeof(fxCallback) === "function" ) { 
				fxCallback(data, textStatus, jqXHR); 
			}
			if ( !data.d.__next === false ) {
				if ( bIgnoreNextPage === false ) {
					ds.rest.captureNextPage(data.d.__next, intvl, listName, strCaptureResultsIn, fxCallback, fxAfterLastPage);
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
				if ( typeof(intvl) !== "undefined" ) {
					ds.intvls[intvl].bDone = true;
				}
			}
		});
	},
	captureNextPage: function(restURL, intvl, listName, strCaptureResultsIn, fxCallback, fxAfterLastPage) {
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
		ds.rest.lastCall.url = restURL;
		ds.$.ajax({
			url: restURL
		}).fail(function( jqXHR, textStatus, errorThrown ) {
			ds.rest.lastSubCall.jqXHR = jqXHR;
			ds.rest.lastSubCall.textStatus = textStatus;
			ds.rest.lastSubCall.errorThrown = errorThrown;
			ds.util.log("ds.rest.captureNextPage function ajax call failed with error ... |"+ errorThrown +"|... dumping jqXHR next",true);
			ds.util.log(jqXHR,true);
			if ( typeof(ds.intvls[intvl]) !== "undefined" ) {
				ds.intvls[intvl].bDone = true;
			}
		}).done(function(data,textStatus,jqXHR){
			ds.rest.lastSubCall.textStatus = textStatus;
			ds.rest.lastSubCall.jqXHR = jqXHR;
			ds.rest.lastSubCall.data = data;
			if ( typeof(eval(strCaptureResultsIn)) === "object" ) {
				//eval(strCaptureResultsIn = strCaptureResultsIn+".concat(data.d.results);");
				ds.$(data.d.results).each(function(i,elm){
					eval(strCaptureResultsIn+".push("+JSON.stringify(elm)+");");
				});
			}
			if ( typeof(fxCallback) === "function" ) { 
				fxCallback(data, textStatus, jqXHR); 
			}
			if ( !data.d.__next === false ) {
				/*if ( bIgnoreNextPage === false ) {*/
					ds.rest.captureNextPage(data.d.__next, intvl, listName, fxCallback, fxAfterLastPage);
				/*
				}
				else {
					if ( typeof(intvl) !== "undefined" ) {
						ds.intvls[intvl].bDone = true;
					}
				}
				*/
			}
			else if ( typeof(fxAfterLastPage) !== "function" ) { 
				if ( typeof(intvl) !== "undefined" ) {
					ds.intvls[intvl].bDone = true;
				}
			}
			if ( typeof(fxAfterLastPage) === "function" ) { 
				fxAfterLastPage(intvl, listName, strCaptureResultsIn); 
				if ( typeof(intvl) !== "undefined" ) {
					ds.intvls[intvl].bDone = true;
				}
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
							url += "("+ arrFilterFields[fil] +" "+ arrOperators[fil] +" '"+ arrValues[fil] +"')";
							if ( arrLogicalJoins.length > 0 && fil < arrLogicalJoins.length ) {
								url += " "+ arrLogicalJoins[fil] +" ";
							}
						}
					}
					else {
						if ( typeof(arrLogicalJoins) === "undefined" ) {
							url += "/?$filter=";
							for ( var fil = 0; fil < arrFilterFields.length; fil++ ) {
								url += arrFilterFields[fil] +" "+ arrOperators[fil] +" '"+ arrValues[fil] +"'";
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
	aggregateByDistinctValuesAsync: function(sRestListName, arrGroupByFields, arrGroupByFieldPreFormats, arrOperations, arrAggregateFields, resturl, afterFx) {
		/*ds.rest.aggregateByDistinctValuesAsync("meetingattendance", "MeetingName", [null], ["count","sum"], ["Id","Id"], undefined, function(aggData){console.dir(aggData);});*/
		/*ds.util.log(arrGroupByFieldPreFormats, true);*/
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
									oReturn[sKey][arrOperations[iO]] = parseInt(ds.lists[sRestListName].items.results[i][arrAggregateFields[iO]],10);
									break;
								case "average":
									oReturn[sKey][arrOperations[iO]] = [parseInt(ds.lists[sRestListName].items.results[i][arrAggregateFields[iO]],10), 1];
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
								oReturn[sKey] = parseInt(ds.lists[sRestListName].items.results[i][arrAggregateFields],10);
								break;
							case "average":
								oReturn[sKey] = [parseInt(ds.lists[sRestListName].items.results[i][arrAggregateFields],10), 1];
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
									oReturn[sKey][arrOperations[iO]] += parseInt(ds.lists[sRestListName].items.results[i][arrAggregateFields[iO]],10);
									break;
								case "average":
									oReturn[sKey][arrOperations[iO]][0] += parseInt(ds.lists[sRestListName].items.results[i][arrAggregateFields[iO]],10);
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
								oReturn[sKey] += parseInt(ds.lists[sRestListName].items.results[i][arrAggregateFields],10);
								break;
							case "average":
								oReturn[sKey][0] += parseInt(ds.lists[sRestListName].items.results[i][arrAggregateFields],10);
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
			add: function(sListGUID, sFieldTitle, sFieldType, bRequired, jsonFieldData, lookupListGUID, afterFx) {
				//ds.rest.list.field.add(ds.lists.tasks.def.Id, "NewField", "Number", false, null, function(){alert("Done!");});
				//ds.rest.list.field.add(ds.lists.tasks.def.Id, "NewField", "Choice", false, {Choices: { __metadata: { type: 'Collection(Edm.String)' }, 'results': ['High','Medium','Low']}}, function(){alert("Done!");});
				var restURL = ds.p.root + ds.p.rest.lists2013 +"(guid'"+sListGUID+"')/Fields";
				var field = {parameters:{}};
				if ( ds.stor.fieldType[sFieldType] === 7 ) {
					var parameters = {
						__metadata: { type: 'SP.FieldCreationInformation' }, 
						Title: sFieldTitle, 
						FieldTypeKind: ds.stor.fieldType[sFieldType], 
						LookupListId: lookupListGUID,
						LookupFieldName: 'Title',
						Required: bRequired
					};
					restURL += "/addField"
				}
				else {
					var parameters = { 
						__metadata: { type: 'SP.Field'+sFieldType }, 
						Title: sFieldTitle, 
						FieldTypeKind: ds.stor.fieldType[sFieldType], 
						Required: bRequired
					};
				}
				if ( !jsonFieldData === false ) {
					for ( fd in jsonFieldData ) {
						parameters[fd] = jsonFieldData[fd];
					}
				}
				//field.parameters = parameters
				field = parameters;
				intvl = ds.intvls.newIntvl("wfXHR");
				ds.intvls[intvl].pauseMS = 100;
				ds.intvls[intvl].forFx = 'ds.rest.list.field.add("'+JSON.stringify(field)+', '+sListGUID+'")';
				ds.intvls[intvl].desc = 'Do we have an afterFx? '+ typeof(afterFx);
				ds.intvls[intvl].doWorkFx = function(){
					return ds.intvls[intvl].bDone;
				};
				if ( typeof(afterFx) === "function" ) { ds.intvls[intvl].successFx = afterFx; }
				ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx, ds.intvls[intvl].pauseMS);
				ds.rest.lastCall = {jqXHR: null, data: null, status: null, url: restURL}; 
				return ds.$.ajax({
					url: restURL,
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
			},
			getVersions: function(listId, itemId, afterFx){
				var url = ds.p.root;
				var versionsUrl = url + '_layouts/versions.aspx?list=' + listId + '&ID=' + itemId;  
				var intvl = null;
				intvl = ds.intvls.newIntvl("wfXHR_getItemVersions_"+listId+"|"+itemId);
				ds.intvls[intvl].pauseMS = 100;
				ds.intvls[intvl].forFx = 'ds.rest.list.item.getVersions...URL = |'+versionsUrl+'|';
				ds.intvls[intvl].desc = 'Do we have an afterFx? '+ typeof(afterFx);
				ds.intvls[intvl].doWorkFx = function(){
					return ds.intvls[intvl].bDone;
				};
				/*ds.lists[listName].items = [];*/
				ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx, ds.intvls[intvl].pauseMS);
				ds.$.ajax({
					url: versionsUrl,
					dataType: "html",
					method: "GET"
				}).fail(function( jqXHR, textStatus, errorThrown ) {
					ds.rest.lastCall.textStatus = textStatus;
					ds.rest.lastCall.jqXHR = jqXHR;
					ds.intvls[intvl].bDone = true;
				}).done(function(data,textStatus,jqXHR){
					ds.rest.lastCall.textStatus = textStatus;
					ds.rest.lastCall.jqXHR = jqXHR;
					ds.rest.lastCall.data = data;
					var versionEntries = ds.rest.list.item.parseVersions(data);
					ds.intvls[intvl].bDone = true;
					if ( typeof(afterFx) === "function" ){
						afterFx(versionEntries);
					}
				});
			},
			parseVersions: function(versionsData){
				var entries = {};
				var versionList = ds.$(versionsData).find('table.ms-settingsframe');
				versionList.find('tbody > tr').each(function(i,elm){
					if(i > 0 && (i-1) % 2 == 0) {
						var verRow = ds.$(this); /*get version row*/
						var propsRow = verRow.next(); /*get properties row*/
						var versionLabel = verRow.find('td:first').html().trim();
						if ( !versionLabel === false ) {
							entries[versionLabel] = {};
							entries[versionLabel].id = verRow.find("td.ms-vb-title > table").attr("id");
							entries[versionLabel].verid = verRow.find("td.ms-vb-title > table").attr("verid");
							entries[versionLabel].verurl = verRow.find("td.ms-vb-title > table").attr("verurl");
							entries[versionLabel].iscur = verRow.find("td.ms-vb-title > table").attr("iscur");
							entries[versionLabel].canviewproperty = verRow.find("td.ms-vb-title > table").attr("canviewproperty");
							entries[versionLabel].level = verRow.find("td.ms-vb-title > table").attr("level");
							entries[versionLabel].otype = verRow.find("td.ms-vb-title > table").attr("otype");
							entries[versionLabel].ismostcur = verRow.find("td.ms-vb-title > table").attr("ismostcur");
							entries[versionLabel].perm = verRow.find("td.ms-vb-title > table").attr("perm");
							entries[versionLabel].ctxname = verRow.find("td.ms-vb-title > table").attr("ctxname");
							/*extract item properties from propsRow goes here*/
							ds.$(propsRow).children("td").eq(1).children("table").children("tbody").children("tr").each(function(iProp,elmProp){
								entries[versionLabel][ds.$(elmProp).children("td.ms-propertysheet").text().trim()] = ds.$(elmProp).children("td.ms-vb").text().trim();
							});
						}
					}
				});
				return entries;
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
				urlRest += "(guid'"+ sList +"')";
				oListDef = ds.util.findList("Id",sList.replace("{","").replace("}",""));
				if ( typeof(oListDef) === "object" ) {
					bFoundListDef = true;
				}
			}
			else {
				urlRest += "/GetByTitle('"+ sList +"')";
				oListDef = ds.util.findList("Title",sList);
				if ( typeof(oListDef) === "object" ) {
					bFoundListDef = true;
				}
			}
			if ( bFoundListDef === true ) {
				if ( typeof(afterFx) === "function" ) {afterFx(oListDef);}
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
					ds.lists[listName].gotDef = true;
					ds.lists[listName].gotFields = false;
					oListDef = ds.lists[listName];
					if ( bGetFields === true && ds.lists[listName].Hidden === false ) {
						ds.rest.coll.getListFields(listName, ds.lists[listName].Fields.__deferred.uri);
					}
					if ( typeof(afterFx) === "function" ) {afterFx(listName);}
					ds.intvls[intvl].bDone = true;
				}, true, true);
				return true;
			}
		},
		getData: {
			fromList: function(sList, arrFilterFields, arrOperators, arrValues, arrLogicalJoins, afterFx, sRestArgs, bIgnoreNextPage) {
				if ( typeof(bIgnoreNextPage) === "undefined" ) { var bIgnoreNextPage = false; }
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
				ds.lists[listName].items = [];
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
						if ( bIgnoreNextPage === false ) {
							ds.lists[listName].items.uri = data.d.__next;
							ds.rest.getNextPage(data.d.__next, intvl, listName, function(d,s,x){
								for ( listName in ds.lists ) {
									if ( ds.lists[listName].Id === d.d.results[0].__metadata.id.split("'")[1] ) {
										ds.lists[listName].items.results = ds.lists[listName].items.results.concat(d.d.results);
										break;
									}
								}
							}, function(){
								ds.intvls[intvl].bDone = true;
							});
						}
						else {
							ds.lists[listName].items.uri = url;
							ds.intvls[intvl].bDone = true;
						}
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
			}).fail(function(jqXHR, textStatus, errorThrown){
				ds.rest.lastCall.status = textStatus;
				ds.rest.lastCall.errorThrown = errorThrown;
				ds.rest.lastCall.jqXHR = jqXHR;
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
		addField: function(listGUID, title, fieldTypeKind, bRequired, bEnforceUniqueValues, staticName, lookupListGUID, jsonFieldData, afterFx) {
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
				if ( !jsonFieldData === false ) {
					for ( fd in jsonFieldData ) {
						body.parameters[fd] = jsonFieldData[fd];
					}
				}
				restURL += "/addField"
			}
			else {
				if ( !jsonFieldData === false ) {
					for ( fd in jsonFieldData ) {
						body[fd] = jsonFieldData[fd];
					}
				}
			}
			ds.rest.lastCall = {jqXHR: null, data: null, status: null, url: restURL};
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
				//url: ds.p.root + ds.p.rest.lists2013 +"?$expand=Items",
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
						ds.lists[listTitle].gotItemPermissions = false;
						ds.lists[listTitle].items = [];
						ds.util.log("Got list definition for list |"+ listTitle +"|");
						ds.lists[listTitle].gotFields = false;
						//ds.lists[listTitle].gotFields = true;
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
				//var restURL = restBaseURL +"?$select=EffectiveBasePermissions,items/EffectiveBasePermissions&$expand=items";
				//var restURL = restBaseURL +"?$select=EffectiveBasePermissions,Fields,Views,Items&$expand=Items,Fields,Views,Views/ViewFields";
			}
			else {
				var restURL = restBaseURL +"?$select=Fields,Views,items&$expand=items,Fields,Views,Views/ViewFields";
			}
			// Get list Items, Fields, Views, ViewFields, and list-level base permissions
			var restURL = restBaseURL +"?$select=EffectiveBasePermissions,Fields,Views,Items&$expand=Items,Fields,Views,Views/ViewFields";
			ds.util.log("ds.rest.coll.expandListDef function about to call REST URL... "+ restURL);
			ds.rest.getDataFromURI(restURL, function(data, textStatus, jqXHR){
				ds.util.log("Expanded list def part 1: "+ restListName);
				ds.lists[restListName].items = data.d.Items.results;
				ds.lists[restListName].fields_def = data.d.Fields.results;
				ds.lists[restListName].gotFields = true;
				ds.lists[restListName].views = data.d.Views.results;
				try{ds.lists[restListName].EffectiveBasePermissions = data.d.EffectiveBasePermissions;}catch(err){}
				ds.util.log("ds.rest.getDataFromURI function got server response with status |"+ textStatus +"|");
				if ( restListName !== "userinformationlist" ) {
					// Get the item level permissions
					var restURL = restBaseURL +"?$select=EffectiveBasePermissions,items,items/EffectiveBasePermissions&$expand=items";
					ds.util.log("ds.rest.coll.expandListDef function about to call REST URL... "+ restURL);
					ds.rest.getDataFromURI(restURL, function(data, textStatus, jqXHR){
						ds.util.log("ds.rest.getDataFromURI function got server response with status |"+ textStatus +"|");
						ds.util.log("Expanded list def part 2: "+ restListName);
						//ds.lists[restListName].fields_def = data.d.Fields.results;
						//try{ds.lists[restListName].EffectiveBasePermissions = data.d.EffectiveBasePermissions;}catch(err){}
						for ( var k = 0; k < data.d.Items.results.length; k++ ) {
							var bFoundItem = false;
							for ( var i = 0; i < ds.lists[restListName].items.length; i++ ) {
								if ( ds.lists[restListName].items[i].__metadata.id === data.d.Items.results[k].__metadata.id ) {
									ds.lists[restListName].items[i].EffectiveBasePermissions = data.d.Items.results[k].EffectiveBasePermissions;
									bFoundItem = true;
									break;
								}
							}
							if ( bFoundItem === false ) { 
								ds.lists[restListName].items.push(data.d.Items.results[k]);
							}
						}
						ds.lists[restListName].gotItemPermissions = true;
						//ds.lists[restListName].views = data.d.Views.results;
						if ( typeof(afterFx) === "function" ) {
							afterFx(data, textStatus, jqXHR);
						}
					}, true, true, null, restListName, "", function(){});
				}
			}, true, true, null, restListName, "", function(){});
		},
		getListFields: function(sListStorName, sRestURL, afterGotFieldDefsFx) {
			ds.rest.getDataFromURI(sRestURL, function(d, s, x){
				ds.lists[sListStorName].fields_def = d.d;
				ds.lists[sListStorName].gotFields = true;
				ds.util.log("Got field definitions for list |"+ sListStorName +"|");
				if ( typeof(afterGotFieldDefsFx) === "function" ) { afterGotFieldDefsFx(d,s,x); }
			}, true, true, null, sListStorName, function(){}, function(x,s,e){
				ds.util.log("ds.rest.getDataFromURI call for sRestURL |"+ sRestURL +"| failed with error |"+ e +"|",true);
			});
		}
	},
	user: {
		getCurrent: function(afterFx){
			ds.rest.getDataFromURI(ds.p.root + ds.p.rest[2013].currentUser+"?$select=Email,Id,IsHiddenInUI,IsSiteAdmin,LoginName,PrincipalType,Title,Groups,UserId&$expand=Groups,UserId",function(d,s,x){
				ds.stor.currentUser = d.d;
				if ( typeof(afterFx) === "function" ){ afterFx(); }
			}, true, true);
		},
		getUser: function(afterFx){

		},
		getSiteUsers: function(afterFx){
			ds.rest.getDataFromURI(ds.p.root + ds.p.rest[2013].siteUsers+"?$select=Email,Id,IsHiddenInUI,IsSiteAdmin,LoginName,PrincipalType,Title,Groups,UserId&$expand=Groups,UserId",function(d,s,x){
				ds.stor.siteUsers = d.d;
				if ( typeof(afterFx) === "function" ){ afterFx(); }
			}, true, true);
		}
	}
};
ds.util = {
	createSettingsList: function(afterCreatingSettingsListFx){
		var sListDisplayName = "dsFormSettings";
		var listDef = null;
		if ( typeof(afterCreatingSettingsListFx) === "undefined" ) {
			var afterCreatingSettingsListFx = function(){
				ds.util.log("Created and configured the settings list",true);
			};
		}
		ds.rest.list.create(100, sListDisplayName, "stores the settings for the forms on your site", function(cD, cS, cX){
			listDef = cD.d; 
			var oSettings1 = {
				EnableVersioning: true,
				EnableModeration: true,
				EnableAttachments: false
			};
			ds.rest.list.update(sListDisplayName, oSettings1, function(){
				ds.util.log("Enabled Versioning and disabled Attachments for |"+sListDisplayName+"||");
				var oSettings2 = {
					MajorVersionLimit: 10,
					DraftVersionVisibility: 2,
					MajorWithMinorVersionsLimit: 25
				};
				ds.rest.list.update(sListDisplayName, oSettings2, function(){
					ds.util.log("Finished configuring Versioning for |"+sListDisplayName+"|");
					var to1 = setTimeout(function(){
						var oField = {
							Description:"The form name, as it appears in the URL",
							StaticName:"FormNameURL",
							EnforceUniqueValues: false
						};
						ds.rest.list.addField(ds.lists[sListDisplayName].Id, "FormNameURL", 2, false, false, "FormNameURL", null, oField, function(){
							ds.util.log("Added field |FormNameURL| to list");
						});
						var to2 = setTimeout(function(){
							var oField = {
								StaticName:"blbRelRecs"
							};
							ds.rest.list.addField(ds.lists[sListDisplayName].Id, "blbRelRecs", 3, false, false, "blbRelRecs", null, oField, function(d,s,x){
								ds.util.log("Added field |blbRelRecs| to list");
								var body = {
									__metadata: { type: 'SP.FieldMultiLineText' }, 
									NumberOfLines: 1,
									RichText: false,
									AppendOnly: false,
									RestrictedMode: true,
									WikiLinking: false
								};
								ds.$.ajax({
									url: d.d.__metadata.uri,
									method: "POST",
									data: JSON.stringify(body),
									headers: {
										"X-HTTP-Method":"MERGE",
										"IF-MATCH": "*"
									}
								}).done(function(data,textStatus,jqXHR){
									ds.rest.lastCall.status = textStatus;
									ds.rest.lastCall.data = data;
									ds.rest.lastCall.jqXHR = jqXHR;
									ds.util.log("List field |blbRelRecs| updated via REST");
									ds.util.log(listDef.Fields,true);
									ds.$.ajax({
										url: listDef.Fields.__deferred.uri+"?$filter=StaticName eq 'Title'",
										method: "GET",
										data: null
									}).done(function(data,textStatus,jqXHR){
										ds.util.log("Got definition of existing list Title field...");
										ds.util.log(data,true);
										var body2 = {
											__metadata: { type: data.d.results[0].__metadata.type }, 
											Title: "ListNameURL",
											StaticName: data.d.results[0].Title
										};
										ds.util.log("Attempting update to Title field's Display name...");
										ds.$.ajax({
											url: data.d.results[0].__metadata.uri,
											method: "POST",
											data: JSON.stringify(body2),
											headers: {
												"X-HTTP-Method":"MERGE",
												"IF-MATCH": "*"
											}
										}).done(function(data,textStatus,jqXHR){
											ds.rest.lastCall.status = textStatus;
											ds.rest.lastCall.data = data;
											ds.rest.lastCall.jqXHR = jqXHR;
											ds.util.log("List field |Title| updated to |ListNameURL| via REST");
											if ( typeof(afterCreatingSettingsListFx) === "function" ) {
												afterCreatingSettingsListFx();
											}
										}).fail(function(jqXHR, textStatus, errorThrown){
											ds.rest.lastCall.status = textStatus;
											ds.rest.lastCall.errorThrown = errorThrown;
											ds.rest.lastCall.jqXHR = jqXHR;
										});
									}).fail(function(jqXHR,textStatus,errorThrown){
										ds.rest.lastCall.status = textStatus;
										ds.rest.lastCall.errorThrown = errorThrown;
										ds.rest.lastCall.jqXHR = jqXHR;
									});
								}).fail(function(jqXHR, textStatus, errorThrown){
									ds.rest.lastCall.status = textStatus;
									ds.rest.lastCall.errorThrown = errorThrown;
									ds.rest.lastCall.jqXHR = jqXHR;
								});
							});
						},234);
					},123);
				});
			});
		});
	}
};