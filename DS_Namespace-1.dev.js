var bMasterLoad = true;
if ( typeof(ds) !== "undefined" ) {
	ds.util.isPageInEditMode();
	ds.util.getPageType();
	ds.util.log("DS Namespace at ds.stor.session updated for new page",true);
	bMasterLoad = false;
	if ( ds.stor.session.bReloadNamespace === true ) {
		bMasterLoad = true;
	}
}
if ( bMasterLoad === true ) {
	var ds = {
		p: {
			root: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl,
			rootNs: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl.substr(0,_spPageContextInfo.webServerRelativeUrl.length-1),
			page: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + _spPageContextInfo.serverRequestPath,
			pageListName: _spPageContextInfo.serverRequestPath.indexOf("/Lists/") >= 0 ? _spPageContextInfo.serverRequestPath.replace("/Lists/","/").split("/")[1] : _spPageContextInfo.serverRequestPath.indexOf("/_catalogs/") >= 0 ? _spPageContextInfo.serverRequestPath.replace("/_catalogs/","/").split("/")[1] : _spPageContextInfo.serverRequestPath.split("/")[1],
			pageFormName: _spPageContextInfo.serverRequestPath.split("/")[_spPageContextInfo.serverRequestPath.split("/").length-1].split(".")[0],
			pageListId: _spPageContextInfo.pageListId.replace("{","").replace("}",""),
			pageItemId: _spPageContextInfo.pageItemId,
			userID: _spPageContextInfo.userId,
			rest: {
				lists2013: '_api/web/lists',
				lists2010: '_vti_bin/ListData.svc/',
				'2010': {
					lists: '_vti_bin/ListData.svc'
				},
				'2013': {
					web: '_api/web',
					firstUniqueAncestorSecurableObject: '_api/web/FirstUniqueAncestorSecurableObject',
					roleAssignments: '_api/web/RoleAssignments',
					allProperties: '_api/web/AllProperties',
					associatedMemberGroup: '_api/web/AssociatedMemberGroup',
					associatedOwnerGroup: '_api/web/AssociatedOwnerGroup',
					associatedVisitorGroup: '_api/web/AssociatedVisitorGroup',
					availableContentTypes: '_api/web/AvailableContentTypes',
					availableFields: '_api/web/AvailableFields',
					contentTypes: '_api/web/ContentTypes',
					currentUser: '_api/web/CurrentUser',
					eventReceivers: '_api/web/EventReceivers',
					features: '_api/web/Features',
					fields: '_api/web/Fields',
					folders: '_api/web/Folders',
					lists: '_api/web/Lists',
					listTemplates: '_api/web/ListTemplates',
					navigation: '_api/web/Navigation',
					parentWeb: '_api/web/ParentWeb',
					pushNotificationSubscribers: '_api/web/PushNotificationSubscribers',
					recycleBin: '_api/web/RecycleBin',
					regionalSettings: '_api/web/RegionalSettings',
					roleDefinitions: '_api/web/RoleDefinitions',
					rootFolder: '_api/web/RootFolder',
					siteGroups: '_api/web/SiteGroups',
					siteUserInfoList: '_api/web/SiteUserInfoList',
					siteUsers: '_api/web/SiteUsers',
					themeInfo: '_api/web/ThemeInfo',
					userCustomActions: '_api/web/UserCustomActions',
					webs: '_api/web/Webs',
					webInfos: '_api/web/WebInfos',
					workflowAssociations: '_api/web/WorkflowAssociations',
					workflowTemplates: '_api/web/WorkflowTemplates',
					userProfiles: {
						peoplemanager: {
							current: '_api/sp.userprofiles.peoplemanager/getmyproperties',
							byUserAccount: function(userKey){ return "_api/sp.userprofiles.peoplemanager/getpropertiesfor(@v)?@v='"+ encodeURIComponent(userKey) +"'" }
						},
						profile: {
							current: '_api/web/CurrentUser',
							bySPUserId: function(spUID){ return "_api/web/GetUserById("+ spUID +")" }
						}						
					},
					listFile: function(listGUID, itemID){ return "_api/web/lists(guid'"+listGUID+"')/items("+itemID+")/File"; },
					fileVersions: function(listGUID, itemID){ return "_api/web/lists(guid'"+listGUID+"')/items("+itemID+")/File/Versions"; }
				}
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
					jqueryCorner: '//malsup.github.io/jquery.corner.js',
					spServices: '//cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/2014.02/jquery.SPServices-2014.02.min.js',
					underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js',
					clipboard: '//cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.7.1/clipboard.min.js',
					googleCharts: '//www.gstatic.com/charts/loader.js',
					googleJSAPI: '//www.google.com/jsapi'
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
			SPTZs: { /*SPTZ IDs from https://msdn.microsoft.com/library/microsoft.sharepoint.spregionalsettings.timezones.aspx*/
				2:'(GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London',3:'(GMT+01:00) Brussels, Copenhagen, Madrid, Paris',4:'(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',5:'(GMT+02:00) Athens, Bucharest, Istanbul',6:'(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',7:'(GMT+02:00) Minsk',8:'(GMT-03:00) Brasilia',9:'(GMT-04:00) Atlantic Time (Canada)',10:'(GMT-05:00) Eastern Time (US and Canada)',11:'(GMT-06:00) Central Time (US and Canada)',12:'(GMT-07:00) Mountain Time (US and Canada)',13:'(GMT-08:00) Pacific Time (US and Canada)',14:'(GMT-09:00) Alaska',15:'(GMT-10:00) Hawaii',16:'(GMT-11:00) Midway Island, Samoa',17:'(GMT+12:00) Auckland, Wellington',18:'(GMT+10:00) Brisbane',19:'(GMT+09:30) Adelaide',20:'(GMT+09:00) Osaka, Sapporo, Tokyo',21:'(GMT+08:00) Kuala Lumpur, Singapore',22:'(GMT+07:00) Bangkok, Hanoi, Jakarta',23:'(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi',24:'(GMT+04:00) Abu Dhabi, Muscat',25:'(GMT+03:30) Tehran',26:'(GMT+03:00) Baghdad',27:'(GMT+02:00) Jerusalem',28:'(GMT-03:30) Newfoundland',29:'(GMT-01:00) Azores',30:'(GMT-02:00) Mid-Atlantic',31:'(GMT) Casablanca, Monrovia, Reykjavik',32:'(GMT-03:00) Buenos Aires, Georgetown',33:'(GMT-04:00) Caracas, La Paz',34:'(GMT-05:00) Indiana (East)',35:'(GMT-05:00) Bogota, Lima, Quito, Rio Branco',36:'(GMT-06:00) Saskatchewan',37:'(GMT-06:00) Guadalajara, Mexico City, Monterrey',38:'(GMT-07:00) Arizona',39:'(GMT-12:00) International Date Line West',40:'(GMT+12:00) Fiji Is., Kamchatka, Marshall Is.',41:'(GMT+11:00) Magadan, Solomon Is., New Caledonia',42:'(GMT+10:00) Hobart',43:'(GMT+10:00) Guam, Port Moresby',44:'(GMT+09:30) Darwin',45:'(GMT+08:00) Beijing, Chongqing, Hong Kong S.A.R., Urumqi',46:'(GMT+06:00) Almaty, Novosibirsk',47:'(GMT+05:00) Islamabad, Karachi, Tashkent',48:'(GMT+04:30) Kabul',49:'(GMT+02:00) Cairo',50:'(GMT+02:00) Harare, Pretoria',51:'(GMT+03:00) Moscow, St. Petersburg, Volgograd',53:'(GMT-01:00) Cape Verde Is.',54:'(GMT+04:00) Baku',55:'(GMT-06:00) Central America',56:'(GMT+03:00) Nairobi',57:'(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb',58:'(GMT+05:00) Ekaterinburg',59:'(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',60:'(GMT-03:00) Greenland',61:'(GMT+06:30) Yangon (Rangoon)',62:'(GMT+05:45) Kathmandu',63:'(GMT+08:00) Irkutsk, Ulaan Bataar',64:'(GMT+07:00) Krasnoyarsk',65:'(GMT-04:00) Santiago',66:'(GMT+05:30) Sri Jayawardenepura',67:'(GMT+13:00) Nuku\'alofa',68:'(GMT+10:00) Vladivostok',69:'(GMT+01:00) West Central Africa',70:'(GMT+09:00) Yakutsk',71:'(GMT+06:00) Astana, Dhaka',72:'(GMT+09:00) Seoul',73:'(GMT+08:00) Perth',74:'(GMT+03:00) Kuwait, Riyadh',75:'(GMT+08:00) Taipei',76:'(GMT+10:00) Canberra, Melbourne, Sydney',77:'(GMT-07:00) Chihuahua, La Paz, Mazatlan',78:'(GMT-08:00) Tijuana, Baja California',79:'(GMT+02:00) Amman',80:'(GMT+02:00) Beirut',81:'(GMT-04:00) Manaus',82:'(GMT+03:00) Tbilisi',83:'(GMT+02:00) Windhoek',84:'(GMT+04:00) Yerevan'
			},
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
				bDontCreateSettingsList: false,
				bReloadNamespace: false,
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
				onTaskEditForm: false,
				pageType: 'WebPartsPage',
				editMode: false,
				uiVersion: '2013',
				browserName: 'Internet Explorer',
				browserVersion: '10',
				browserSupportsActiveX: false,
				browserSupportsClassicDatasheet: false,
				browserSupportsCSSVariables: false
			}, 
			localization: {
				cultureName: {
					current: _spPageContextInfo.currentCultureName,
					currentUI: _spPageContextInfo.currentUICultureName
				},
				language: {
					current: _spPageContextInfo.currentLanguage,
					web: _spPageContextInfo.webLanguage
				},
				culture: {},
				timezone: {
					Id: null,
					Description: "",
					Information: {}
				},
				dateFormat: {},
				numberFormat: {}
			},
			permissions: {
				web: {
					High: _spPageContextInfo.webPermMasks.High,
					Low:  _spPageContextInfo.webPermMasks.Low
				}
			},
			formSettings: null,
			existingFormSettings: false,
			commonContent: {},
			listNames: ["Intake","Tasks","TaskComments","TaskContacts","TaskStatusHistory","TaskMeetings","TaskTimeEntry"],
			fieldType: {
				/*https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spfieldtype.aspx*/
				Invalid: 0, Integer: 1, Text: 2, Note: 3, DateTime: 4, Counter: 5, Choice: 6, Lookup: 7, Boolean: 8,
				Number: 9, Currency: 10, URL: 11, Computed: 12, Threading: 13, Guid: 14, MultiChoice: 15, GridChoice: 16,
				Calculated: 17, File: 18, Attachments: 19, User: 20, Recurrence: 21, CrossProjectLink: 22, ModStat: 23,
				Error: 24, ContentTypeId: 25, PageSeparator: 26, ThreadIndex: 27, WorkflowStatus: 28, AllDayEvent: 29,
				WorkflowEventType: 30, Geolocation: null, OutcomeChoice: null, MaxItems: 31
			},
			listTemplates: {
				/*https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.splisttemplatetype.aspx*/
				InvalidType: -1, NoListTemplate: 0, GenericList: 100, DocumentLibrary: 101, Survey: 102, Links: 103,
				Announcements: 104, Contacts: 105, Events: 106, Tasks: 107, DiscussionBoard: 108, PictureLibrary: 109,
				DataSources: 110, WebTemplateCatalog: 111, UserInformation: 112, WebPartCatalog: 113, ListTemplateCatalog: 114,
				XMLForm: 115, MaterPageCatalog: 116, NoCodeWorkflows: 117, WorkflowProcess: 118, WebPageLibrary: 119,
				CustomGrid: 120, SolutionCatalog: 121, NoCodePublic: 122, ThemeCatalog: 123, DesignCatalog: 124, 
				AppDataCatalog: 125, DataConnectionLibrary: 130, WorkflowHistory: 140, GanttTasks: 150, HelpLibrary: 151,
				AccessRequest: 160, TasksWithTimelineAndHierarchy: 171, MaintenanceLogs: 175, Meetings: 200, Agenda: 201,
				MeetingUser: 202, Decision: 204, MeetingObjective: 207, TextBox: 210, ThingsToBring: 211, HomePageLibrary: 212,
				Posts: 301, Comments: 302, Categories: 303, Facility: 402, Whereabouts: 403, CallTrack: 404, Circulation: 405,
				Timecard: 420, Holidays: 421, IMEDic: 499, ExternalList: 600, MySiteDocumentLibrary: 700, IssueTracking: 1100,
				AdminTasks: 1200, HealthRules: 1220, HealthReports: 1221, DeveloperSiteDraftApps: 1230
			},
			rss: {},
			createLists: {
				"Tasks": function(){
					ds.rest.list.create(ds.stor.listTemplates.Tasks, "Tasks", "This list is open to everyone", function(data, textStatus, jqXHR){
						ds.util.log("List Tasks created\n"+jqXHR.responseText, true);
						ds.rest.list.addField(jqXHR.responseJSON.d.Id, "TaskID", ds.stor.fieldType.Lookup, false, false, "TaskID", ds.lists.tasks.Id, function(data2, textStatus2, jqXHR2) {
							ds.util.log("Added field\n"+jqXHR2.responseText, true);
						});
					});
				},
				"TaskTimeEntry": function(){
					ds.rest.list.create(ds.stor.listTemplates.GenericList, "TaskTimeEntry", "Stores time worked on a task", function(data, textStatus, jqXHR){
						ds.util.log("List TaskTimeEntry created\n"+jqXHR.responseText, true);
						ds.rest.list.addField(jqXHR.responseJSON.d.Id, "TaskID", ds.stor.fieldType.Lookup, false, false, "TaskID", ds.lists.tasks.Id, function(data2, textStatus2, jqXHR2) {
							ds.util.log("Added field\n"+jqXHR2.responseText, true);
						});
						ds.rest.list.addField(jqXHR.responseJSON.d.Id, "Hours", ds.stor.fieldType.Number, false, false, "Hours", ds.lists.tasks.Id, function(data2, textStatus2, jqXHR2) {
							ds.util.log("Added field\n"+jqXHR2.responseText, true);
						});
						ds.rest.list.addField(jqXHR.responseJSON.d.Id, "Minutes", ds.stor.fieldType.Number, false, false, "Minutes", ds.lists.tasks.Id, function(data2, textStatus2, jqXHR2) {
							ds.util.log("Added field\n"+jqXHR2.responseText, true);
						});
					});
				},
				"TaskComments": function(){
					ds.rest.list.create(ds.stor.listTemplates.GenericList, "TaskComments", "Stores comments and notes related to the task", function(data, textStatus, jqXHR){
						ds.util.log("List TaskComments created\n"+jqXHR.responseText, true);
						ds.rest.list.addField(jqXHR.responseJSON.d.Id, "TaskID", ds.stor.fieldType.Lookup, false, false, "TaskID", ds.lists.tasks.Id, function(data2, textStatus2, jqXHR2) {
							ds.util.log("Added field\n"+jqXHR2.responseText, true);
						});
						ds.rest.list.addField(jqXHR.responseJSON.d.Id, "FullText", ds.stor.fieldType.Note, false, false, "FullText", ds.lists.tasks.Id, function(data2, textStatus2, jqXHR2) {
							ds.util.log("Added field\n"+jqXHR2.responseText, true);
						});
					});
				},
				"TaskContacts": function(){
					ds.rest.list.create(ds.stor.listTemplates.GenericList, "TaskContacts", "Stores contacts related to a task", function(data, textStatus, jqXHR){
						ds.util.log("List TaskContacts created\n"+jqXHR.responseText, true);
						ds.rest.list.addField(jqXHR.responseJSON.d.Id, "TaskID", ds.stor.fieldType.Lookup, false, false, "TaskID", ds.lists.tasks.Id, function(data2, textStatus2, jqXHR2) {
							ds.util.log("Added field\n"+jqXHR2.responseText, true);
						});
						ds.rest.list.addField(jqXHR.responseJSON.d.Id, "ContactName", ds.stor.fieldType.Text, false, false, "ContactName", ds.lists.tasks.Id, function(data2, textStatus2, jqXHR2) {
							ds.util.log("Added field\n"+jqXHR2.responseText, true);
						});
						ds.rest.list.addField(jqXHR.responseJSON.d.Id, "ContactEmail", ds.stor.fieldType.Text, false, false, "ContactEmail", ds.lists.tasks.Id, function(data2, textStatus2, jqXHR2) {
							ds.util.log("Added field\n"+jqXHR2.responseText, true);
						});
						ds.rest.list.addField(jqXHR.responseJSON.d.Id, "ContactRole", ds.stor.fieldType.Text, false, false, "ContactRole", ds.lists.tasks.Id, function(data2, textStatus2, jqXHR2) {
							ds.util.log("Added field\n"+jqXHR2.responseText, true);
						});
						ds.rest.list.addField(jqXHR.responseJSON.d.Id, "ThirdParty", ds.stor.fieldType.Boolean, false, false, "ThirdParty", ds.lists.tasks.Id, function(data2, textStatus2, jqXHR2) {
							ds.util.log("Added field\n"+jqXHR2.responseText, true);
						});
					});
				},
				"TaskMeetings": function(){
					ds.rest.list.create(ds.stor.listTemplates.Events, "TaskMeetings", "Meetings related to tasks", function(data, textStatus, jqXHR){
						ds.util.log("List TaskMeetings created\n"+jqXHR.responseText, true);
						ds.rest.list.addField(jqXHR.responseJSON.d.Id, "TaskID", ds.stor.fieldType.Lookup, false, false, "TaskID", ds.lists.tasks.Id, function(data2, textStatus2, jqXHR2) {
							ds.util.log("Added field\n"+jqXHR2.responseText, true);
						});
						ds.rest.list.addField(jqXHR.responseJSON.d.Id, "DownloadICS", ds.stor.fieldType.Text, false, false, "DownloadICS", ds.lists.tasks.Id, function(data2, textStatus2, jqXHR2) {
							ds.util.log("Added field\n"+jqXHR2.responseText, true);
						});
					});
				},
				"TaskStatusHistory": function(){
					ds.rest.list.create(ds.stor.listTemplates.GenericList, "TaskStatusHistory", "Stores a record of each status change to each task", function(data, textStatus, jqXHR){
						ds.util.log("List TaskStatusHistory created\n"+jqXHR.responseText, true);
						ds.rest.list.addField(jqXHR.responseJSON.d.Id, "TaskID", ds.stor.fieldType.Lookup, false, false, "TaskID", ds.lists.tasks.Id, function(data2, textStatus2, jqXHR2) {
							ds.util.log("Added field\n"+jqXHR2.responseText, true);
						});
						ds.rest.list.addField(jqXHR.responseJSON.d.Id, "OldStatus", ds.stor.fieldType.Text, false, false, "OldStatus", ds.lists.tasks.Id, function(data2, textStatus2, jqXHR2) {
							ds.util.log("Added field\n"+jqXHR2.responseText, true);
						});
						ds.rest.list.addField(jqXHR.responseJSON.d.Id, "NewStatus", ds.stor.fieldType.Choice, false, false, "NewStatus", ds.lists.tasks.Id, function(data2, textStatus2, jqXHR2) {
							ds.util.log("Added field\n"+jqXHR2.responseText, true);
						});
					});
				},
				"Intake": function(){
					ds.rest.list.create(ds.stor.listTemplates.Tasks, "Intake", "This list is open to everyone", function(data, textStatus, jqXHR){
						ds.util.log("List Intake created\n"+jqXHR.responseText, true);
						ds.rest.list.addField(jqXHR.responseJSON.d.Id, "TaskID", ds.stor.fieldType.Lookup, false, false, "TaskID", ds.lists.tasks.Id, function(data2, textStatus2, jqXHR2) {
							ds.util.log("Added field\n"+jqXHR2.responseText, true);
						});
						/*
						ds.rest.list.addField(jqXHR.responseJSON.d.Id, "ThirdParty", ds.stor.fieldType.Boolean, false, false, "ThirdParty", ds.lists.tasks.Id, function(data2, textStatus2, jqXHR2) {
							ds.util.log("Added field\n"+jqXHR2.responseText, true);
						});
						*/
					});
				},
				"dsFormSettings": function(){
					ds.rest.list.create(ds.stor.listTemplates.GenericList, "dsFormSettings", "Stores the settings for the tabbed related records display", function(data, textStatus, jqXHR){
						ds.util.log("List dsFormSettings created\n"+jqXHR.responseText, true);
						ds.rest.list.update("dsformsettings", {EnableVersioning: true}, function(data, textStatus, jqXHR){ 
							ds.util.log("dsFormSettings now has versioning enabled",true); 
						});
					});
				}
			},
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
						ds.$("div[id^='divRss']").each(function(){
							ds.$("."+ds.$(this).attr("id")).replaceWith(ds.$(this));
						});
					});
				}, "");
			},
			getFeedData: function(title, rssurl, resp) {
				ds.util.log("function ds.factCeck.getFeedData called...");
				var originalTitle = title;
				while ( title.indexOf(" ") >= 0 ) { title = title.replace(" ",""); }
				while ( title.indexOf(".") >= 0 ) { title = title.replace(".",""); }
				while ( title.indexOf("-") >= 0 ) { title = title.replace("-",""); }
				var dvId = 'divRss'+title;
				ds.util.appendToMain('<div style="display: inline-block; max-height: 300px; overflow-y: scroll;" id="'+dvId+'"></div>');
				ds.$("#"+dvId).ready(function(){
					ds.util.log("about to request rss |"+ title +"|");
					ds.stor.rss[dvId] = {};
					ds.$('#'+dvId).FeedEk({
						FeedUrl:rssurl,
						ShowDesc : true,
						ShowPubDate:true,
						TitleLinkTarget:'_blank',
						DateFormat: 'MM/DD/YYYY',
						DateFormatLang:'en',
						MaxCount: 50
					});
					ds.util.log("finished getting rss |"+ title +"|");
					ds.$("#"+dvId).ready(function(){
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
						ds.$(data.d.results).each(function(i,elm){
							eval(strCaptureResultsIn+".push("+JSON.stringify(elm)+");");
						});
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
				ds.$(ds.lists[sRestListName].fields_def).each(function(iF, elmF){
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
				/* Use SP CSOM to get the site's current regional settings for the time zone capture the async response via a callback function */
				ds.stor.spCSOM.clientContext.executeQueryAsync(function(){
					ds.stor.spCSOM.siteTzId = ds.stor.spCSOM.tz.$5_0.$H_0.Id;
					ds.stor.spCSOM.siteTzDesc = ds.stor.spCSOM.tz.$5_0.$H_0.Description;
					ds.stor.spCSOM.siteTzInformation = ds.stor.spCSOM.tz.$5_0.$H_0.Information;
					ds.stor.localization.culture = ds.stor.spCSOM.culture.$5_0.$H_0;
					ds.stor.localization.timezone.Id = ds.stor.spCSOM.siteTzId;
					ds.stor.localization.timezone.Description = ds.stor.spCSOM.siteTzDesc;
					ds.stor.localization.timezone.Information = ds.stor.spCSOM.siteTzInformation;
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
				ds.$.ajax({
					url: ds.p.root +"_layouts/15/userdisp.aspx?ID="+nID,
					type: "GET",
					dataType: "html",
					async: true,
					success: function(data, textStatus, jqXHR) {
						var sName = ds.$(data).find(".ms-formlabel:contains('Name')").parent().find(".ms-formbody").text().trim();
						ds.stor.users = ds.stor.users || {};
						ds.stor.users[nID] = {};
						ds.stor.users[nID].Name = ds.$(data).find(".ms-formlabel:contains('Name')").parent().find(".ms-formbody").text().trim();
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
					}, false, true, null, null, function(){}, function(){
						if ( ds.stor.session.bDontCreateSettingsList === false ) {
							if ( confirm("Settings list dsFormSettings not found!... do you wish to create it?") === true ) {
								ds.util.createSettingsList(function(){
									ds.util.log("Created and configured the settings list",true);
									if ( confirm("Settings list created... reload the page?") === true ) {
										window.location.reload();
									}
								});
							}
							else {
								ds.stor.session.bDontCreateSettingsList = true;
							}
						}
					});
				}
				//restURL = ds.lists.dsformsettings.Items.__deferred.uri +"?$filter=Title eq '"+ds.p.pageListName+"' and FormNameURL eq '"+ds.p.pageFormName+"'&$select=Id,Title,FormNameURL,blbRelRecs";
				restURL = ds.lists.dsformsettings.Items.__deferred.uri +"?$filter=Title eq '"+_spPageContextInfo.serverRequestPath+"' and FormNameURL eq '"+ds.p.pageFormName+"'&$select=Id,Title,FormNameURL,blbRelRecs";
				
				ds.rest.getDataFromURI(restURL, function(data, textStaus, jqXHR){
					if ( data.d.results.length > 0 ) {
						ds.stor.formSettings = data.d.results;
						ds.stor.formSettingsId = data.d.results[0].Id;
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
						//ds.stor.formSettings = {"masterSettings":{"hideAddRelatedRecordButtons":true,"hideFilterTab":true,"initFx":"function() {}","afterFx":"function() {}"},"relatedRecords":[]};
						ds.stor.formSettings = {"masterSettings":{"initFx":"function() {}","afterFx":"function() {}"},"relatedRecordsSettings":{"hideAddRelatedRecordButtons":true,"hideFilterTab":true},"relatedRecords":[]};
					}
					if ( typeof(afterFx) === "function" ) {
						afterFx(ds.stor.formSettings);
					}
					/*
					for ( item in ds.lists.dsformsettings.items.results ) {
						ds.util.log("found settings for current form", true);
						ds.stor.newRelated = ds.stor.newRelated || {};
						ds.stor.updateRelated = ds.stor.updateRelated || {};
						formSettings = JSON.parse(ds.lists.dsformsettings.items.results[item].blbRelRecs);
						if ( typeof(formSettings.relatedRecords) !== "undefined" ) {
							for ( var iFS = 0; iFS < formSettings.relatedRecords.length; iFS++ ) {
								var fx = function(i){
									try{eval("ds.stor.newRelated[formSettings.relatedRecords[i].listName] = "+ formSettings.relatedRecords[i].psudoPopupSaveNewFx +";");}catch(err){}
									try{eval("ds.stor.updateRelated[formSettings.relatedRecords[i].listName] = "+ formSettings.relatedRecords[i].psudoPopupSaveUpdateFx +";");}catch(err){}
									try{eval("formSettings.relatedRecords[i].psudoPopupSaveNewFx = "+ formSettings.relatedRecords[i].psudoPopupSaveNewFx +";");}catch(err){}
									try{eval("formSettings.relatedRecords[i].psudoPopupSaveUpdateFx = "+ formSettings.relatedRecords[i].psudoPopupSaveUpdateFx +";");}catch(err){}
								};
								fx(iFS);
							}
						}
						ds.stor.formSettings = data;
						if ( typeof(afterFx) === "function" ) {
							afterFx(formSettings);
						}
					}
					*/
				});
			},
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
			},
			getCurrentTaskDetails: function(afterFx, bAsync){
				ds.rest.lastCall = {};
				//ds.rest.getDataFromURI(ds.lists.tasks.Items.__deferred.uri+"("+GetUrlKeyValue("ID")+")",function(data, textStatus, jqXHR){
				ds.rest.getDataFromURI(ds.p.root + ds.p.rest[2013].lists +"(guid'"+ ds.p.pageListId +"')/Items("+ GetUrlKeyValue("ID") +")",function(data, textStatus, jqXHR){
					ds.rest.lastCall.data = data;
					ds.rest.lastCall.textStatus = textStatus;
					ds.rest.lastCall.jqXHR = jqXHR;
					if ( typeof(afterFx) === "function" ) {
						afterFx(data, textStatus, jqXHR);
					}
				}, bAsync);
			},
			getCurrentListFormItemDetails: function(afterFx, bAsync){
				ds.rest.lastCall = {};
				
				ds.rest.getDataFromURI(ds.p.root + ds.p.rest[2013].lists +"(guid'"+ ds.p.pageListId +"')/Items("+ GetUrlKeyValue("ID") +")",function(data, textStatus, jqXHR){
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
					// formerlly passed 'false' for final argument
				}, true);
				return bReturn;
			},
			ifCurrentItemAssignedToMe: function(afterFx){
				var bReturn = false;
				ds.util.getCurrentListFormItemDetails(function(d,s,x){
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
							//ds.util.log(d,true);
							//ds.util.log(s,true);
							//ds.util.log(x,true);
							if ( typeof(afterFx) === "function" ) { afterFx(ds.lists[restlistname].EffectiveBasePermissions); }
						});
					});
				}
				else if ( typeof(ds.lists[restlistname].EffectiveBasePermissions) === "undefined" ) {
						ds.rest.coll.expandListDef(restlistname,ds.lists[restlistname].__metadata.uri, function(d,s,x){
							//ds.util.log(d,true);
							//ds.util.log(s,true);
							//ds.util.log(x,true);
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
				// supposed to check like this:
				// http://1.dsmagicsp.cloudappsportal.com/_api/web/lists(guid'd11a71ff-4170-4725-a804-9d76153d0ebf')/getusereffectivepermissions(@user)?@user=%27i%3A0%23%2Ew%7Cshakir%5Cjohn%27
				// or for me
				// http://1.dsmagicsp.cloudappsportal.com/_api/web/lists(guid'd11a71ff-4170-4725-a804-9d76153d0ebf')/getusereffectivepermissions(@user)?@user=%27i%3A0%23%2Ew%7Cschauer%5Cdaniel%27
				// unencoded, the last parameter looks like this
				// http://1.dsmagicsp.cloudappsportal.com/_api/web/lists(guid'd11a71ff-4170-4725-a804-9d76153d0ebf')/getusereffectivepermissions(@user)?@user='i:0#.w|shakir\john'
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
							ds.$("#s4-workspace").append("<table class='ds-magic-enterSetupButton-wrapper' border='0' cellspacing='0' cellpadding='0'><tbody><tr><td class='ds-magic-enterSetupButton' title='Enter ds magic setup'><i class='fa fa-ellipsis-v'></i></td></tr></tbody></table>");
							/*ds.util.appendToMain("<table class='ds-magic-enterSetupButton-wrapper' border='0' cellspacing='0' cellpadding='0'><tbody><tr><td class='ds-magic-enterSetupButton' title='Enter ds magic setup'><i class='fa fa-ellipsis-v'></i></td></tr></tbody></table>");*/
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
			getListViewColumnIndex: function(fieldDisplayName){
				return ds.$("TABLE.ms-listviewtable > THEAD > TR.ms-viewheadertr > TH:contains('"+fieldDisplayName+"')").index();
			},
			simulateBrowseTabClick: function(){
				document.getElementById("Ribbon.Read-title").firstElementChild.click();
			},
			isPageInEditMode: function(){
				/*https://sharepoint.stackexchange.com/questions/149096/a-way-to-identify-when-page-is-in-edit-mode-for-javascript-purposes*/
				var result = (window.MSOWebPartPageFormName != undefined) && ((document.forms[window.MSOWebPartPageFormName] && document.forms[window.MSOWebPartPageFormName].MSOLayout_InDesignMode && ("1" == document.forms[window.MSOWebPartPageFormName].MSOLayout_InDesignMode.value)) || (document.forms[window.MSOWebPartPageFormName] && document.forms[window.MSOWebPartPageFormName]._wikiPageMode && ("Edit" == document.forms[window.MSOWebPartPageFormName]._wikiPageMode.value)));
				ds.stor.session.editMode = result || false;
				return result || false;
			},
			isPageInDialog: function(){
				if ( GetUrlKeyValue("IsDlg") === "1" ) {
					return true;
				}
				else {
					return false;
				}
			},
			getSPUIVersion: function(afterFx){
				var result = '2007';
				var clientContext, serverVersion;
				// Make sure the SharePoint script file 'sp.js' is loaded before your code runs.
				SP.SOD.executeFunc('sp.js', 'SP.ClientContext', sharePointReady);
				// Create an instance of the current context.
				function sharePointReady() {
					clientContext = SP.ClientContext.get_current();
					clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);
				}
				function onRequestSucceeded() {
					//here you get the version
					serverVersion = clientContext.get_serverVersion();
					result = serverVersion;
					ds.stor.session.uiVersion = result;
					if ( typeof(afterFx) === "function" ) {
						afterFx(result);
					}
				}
				function onRequestFailed(){
					result = 'unknown';
					if ( typeof(afterFx) === "function" ) {
						afterFx(result);
					}
				}
			},
			getWPZByRowAndColumn: function(row, col){
				var jqSelWPP = ["TABLE.ms-webpartPage-root > TBODY"];
				if ( typeof(row) === "object" && typeof(col) === "object" ) {
					for ( var i = 0; i < row.length; i++ ) {
						if ( i > 0 ) {
							jqSelWPP.push(" TABLE > TBODY");
						}
						if ( (i+1) === row.length ) {
							jqSelWPP.push(" > TR:eq("+ row[i] +") > TD[name='_invisibleIfEmpty']:eq("+ col[i] +")");
						}
						else {
							jqSelWPP.push(" > TR:eq("+ row[i] +") > TD:eq("+ col[i] +")");
						}
					}
				}
				else {
					jqSelWPP.push(" > TR:eq("+ row +") > TD[name='_invisibleIfEmpty']:eq("+ col +")");
				}
				jqSelWPP.push(" > .ms-webpart-zone > [id^='MSOZoneCell_WebPartWPQ']");
				ds.util.log("WPP web part zone selector length = "+ ds.$(jqSelWPP.join("")).length +" |"+ jqSelWPP.join("") +"|");
				if ( ds.$(jqSelWPP.join("")).length > 0 ) {
					return ds.$(jqSelWPP.join(""));
				}
				else {
					var jqSelWiki = ["TABLE#layoutsTable > TBODY"];
					if ( typeof(row) === "object" && typeof(col) === "object" ) {
						for ( var i = 0; i < row.length; i++ ) {
							if ( i > 0 ) {
								jqSelWiki.push(" TABLE > TBODY");
							}
							if ( (i+1) === row.length ) {
								jqSelWiki.push(" > TR:eq("+ row[i] +") > TD:eq("+ col[i] +")");
							}
							else {
								jqSelWiki.push(" > TR:eq("+ row[i] +") > TD:eq("+ col[i] +")");
							}
						}
					}
					else {
						jqSelWiki.push(" > TR:eq("+ row +") > TD:eq("+ col +")");
					}
					jqSelWiki.push(" > .ms-rte-layoutszone-outer > .ms-rte-layoutszone-inner > [id^='MSOZoneCell_WebPartWPQ']");
					ds.util.log("Wiki web part zone selector length = "+ ds.$(jqSelWiki.join("")).length +" |"+ jqSelWiki.join("") +"|");
					if ( ds.$(jqSelWiki.join("")).length > 0 ) {
						return ds.$(jqSelWiki.join(""));
					}
					else {
						return false;
					}
				}
			},
			getSiblingsOfWebPartWithTitle: function(sWebPartTitle){
				var oRet;
				ds.$("[id^='MSOZoneCell_WebPartWPQ'] .ms-webpart-chrome-title").each(function(iWP, elmWP){
					if ( ds.$(this).text().trim() === sWebPartTitle ) {
						oRet = ds.$(this).parents("TD[id='_invisibleIfEmpty'], .ms-rte-layoutszone-inner").find("[id^='MSOZoneCell_WebPartWPQ']");
						return false;
					}
				});
				return oRet;
			},
			checkFileAccess: function(relativeFilePath, fxSuccess, fxFail, fxAlways){
				ds.$.ajax({
					url:ds.p.root + ds.p.rest[2013].web+"/GetFileByServerRelativeUrl('"+relativeFilePath+"')",
					method:"GET"
				}).always(function(){
					ds.util.log("ds.util.checkFileAccess... Always!",true);
					if ( typeof(fxAlways) === "function" ) { fxAlways(); }
				}).done(function(d,s,x){
					ds.util.log("ds.util.checkFileAccess... Success!",true);
					ds.util.log(x);
					if ( typeof(fxSuccess) === "function" ) { fxSuccess(d,s,x); }
				}).fail(function(x,s,e){
					ds.util.log("ds.util.checkFileAccess... Fail!",true);
					ds.util.log(x);
					if ( typeof(fxFail) === "function" ) { fxFail(x,s,e); }
				});
			},
			checkUserGroupMembership: function(oUser, groupPropertyName, groupPropertyValue, fxOnMembershipFound, fxOnMembershipNotFound){
				/*ds.util.checkUserGroupMembership(ds.stor.currentUser, "Title", "DS Magic for SharePoint Owners", function(){alert("User is a member of the group");}, function(){alert("User is not a member of the group");});*/
				/*ds.util.checkUserGroupMembership(ds.stor.siteUsers.results[1], "Title", "DS Magic for SharePoint Owners", function(){alert("User is a member of the group");}, function(){alert("User is not a member of the group");});*/
				var bUserGroupMatchFound = false;
				for ( var iGroup = 0; iGroup < oUser.Groups.results.length; iGroup++ ){
					try{
						if ( oUser.Groups.results[iGroup][groupPropertyName] === groupPropertyValue ) {
							ds.util.log("Found matching group in the supplied user's Groups collection",true);
							bUserGroupMatchFound = true;
							break;
						}
					}
					catch(err){}
				}
				if ( bUserGroupMatchFound === true ) {
					if ( typeof(fxOnMembershipFound) === "function" ) { fxOnMembershipFound(); }
				}
				else if ( bUserGroupMatchFound === false ) {
					if ( typeof(fxOnMembershipNotFound) === "function" ) { fxOnMembershipNotFound(); }
				}
			},
			dynamicallyPopulateDSMagicHelpWikiCodeDefinition: function(){
				/* assumes Dev version of namespace is loaded */
				try{
					var articleCodePath = _spPageContextInfo.serverRequestPath.split("/")[_spPageContextInfo.serverRequestPath.split("/").length-1].replace(".aspx","");
					ds.util.log("Loading code for this article |"+ articleCodePath +"|",true);
					var articleCode = ds.util.getFunctionCode(eval(articleCodePath));
					if ( ds.$(".ds-magic-help-section-title:contains('Definition')").next(".ds-magic-help-section-content").length > 0 ) {
						ds.$(".ds-magic-help-section-title:contains('Definition')").next(".ds-magic-help-section-content").find(".ms-rteElement-codeSample,.ms-rteElement-codeSampleJS").text("");
						ds.$(".ds-magic-help-section-title:contains('Definition')").next(".ds-magic-help-section-content").find(".ms-rteElement-codeSample,.ms-rteElement-codeSampleJS").text(js_beautify(articleCode));
						hljs.highlightBlock(ds.$(".ds-magic-help-section-title:contains('Definition')").next(".ds-magic-help-section-content").find(".ms-rteElement-codeSample,.ms-rteElement-codeSampleJS")[0]);
					}
					else {
						ds.$(".ds-magic-help-section-title:contains('Definition')").next(".ms-rteElement-codeSample,.ms-rteElement-codeSampleJS").text("");
						ds.$(".ds-magic-help-section-title:contains('Definition')").next(".ms-rteElement-codeSample,.ms-rteElement-codeSampleJS").text(js_beautify(articleCode));
						hljs.highlightBlock(ds.$(".ds-magic-help-section-title:contains('Definition')").next(".ms-rteElement-codeSample,.ms-rteElement-codeSampleJS")[0]);
					}
				}catch(err){}
			},
			getBrowserNameAndVersion: function(afterFx){
				var regExp, collMatches, iMatch;
				if ( navigator.userAgent.indexOf("Edge") >= 0 ) {
					ds.stor.session.browserName = "Edge";
					ds.stor.session.browserSupportsActiveX = false;
					browserSupportsClassicDatasheet = false;
					regExp = /Edge\/([0-9.]+)/ig
					collMatches = regExp.exec(navigator.userAgent);
					for ( iMatch = 0; iMatch < collMatches.length; iMatch++ ) {
						ds.stor.session.browserVersion = parseFloat(collMatches[iMatch].split("/")[1],10);
						break;
					}
				}
				else if ( navigator.userAgent.indexOf("Chrome") >= 0 && navigator.userAgent.indexOf("Chromium") < 0 ) {
					ds.stor.session.browserName = "Chrome";
					ds.stor.session.browserSupportsActiveX = false;
					browserSupportsClassicDatasheet = false;
					regExp = /Chrome\/([0-9.]+)/ig
					collMatches = regExp.exec(navigator.userAgent);
					for ( iMatch = 0; iMatch < collMatches.length; iMatch++ ) {
						ds.stor.session.browserVersion = parseFloat(collMatches[iMatch].split("/")[1],10);
						break;
					}
				}
				else if ( navigator.userAgent.indexOf("Safari") >= 0 && navigator.userAgent.indexOf("Chrome") < 0 && navigator.userAgent.indexOf("Chromium") < 0 ) {
					ds.stor.session.browserName = "Safari";
					ds.stor.session.browserSupportsActiveX = false;
					browserSupportsClassicDatasheet = false;
					regExp = /Version\/([0-9.]+)/ig
					collMatches = regExp.exec(navigator.userAgent);
					for ( iMatch = 0; iMatch < collMatches.length; iMatch++ ) {
						ds.stor.session.browserVersion = parseFloat(collMatches[iMatch].split("/")[1],10);
						break;
					}
				}
				else if ( navigator.userAgent.indexOf("OPR") >= 0 ) {
					ds.stor.session.browserName = "Opera (Blink)";
					ds.stor.session.browserSupportsActiveX = false;
					browserSupportsClassicDatasheet = false;
					regExp = /Version\/([0-9.]+)/ig
					collMatches = regExp.exec(navigator.userAgent);
					for ( iMatch = 0; iMatch < collMatches.length; iMatch++ ) {
						ds.stor.session.browserVersion = parseFloat(collMatches[iMatch].split("/")[1],10);
						break;
					}
				}
				else if ( navigator.userAgent.indexOf("Opera") >= 0 ) {
					ds.stor.session.browserName = "Opera (Presto)";
					ds.stor.session.browserSupportsActiveX = false;
					browserSupportsClassicDatasheet = false;
					regExp = /Version\/([0-9.]+)/ig
					collMatches = regExp.exec(navigator.userAgent);
					for ( iMatch = 0; iMatch < collMatches.length; iMatch++ ) {
						ds.stor.session.browserVersion = parseFloat(collMatches[iMatch].split("/")[1],10);
						break;
					}
				}
				else if ( navigator.userAgent.indexOf("Firefox") >= 0 && navigator.userAgent.indexOf("Seamonkey") < 0 ) {
					ds.stor.session.browserName = "Firefox";
					ds.stor.session.browserSupportsActiveX = false;
					browserSupportsClassicDatasheet = false;
					regExp = /Firefox\/([0-9.]+)/ig
					collMatches = regExp.exec(navigator.userAgent);
					for ( iMatch = 0; iMatch < collMatches.length; iMatch++ ) {
						ds.stor.session.browserVersion = parseFloat(collMatches[iMatch].split("/")[1],10);
						break;
					}
				}
				else if ( navigator.userAgent.indexOf("; MSIE ") >= 0 && navigator.appName === "Microsoft Internet Explorer" ) {
					ds.stor.session.browserName = "Internet Explorer";
					ds.stor.session.browserSupportsActiveX = true;
					regExp = /MSIE ([0-9.]+)/ig
					collMatches = regExp.exec(navigator.userAgent);
					for ( iMatch = 0; iMatch < collMatches.length; iMatch++ ) {
						ds.stor.session.browserVersion = parseFloat(collMatches[iMatch].split(" ")[1],10);
						break;
					}
					if ( ds.stor.session.browserVersion < 7 || ds.stor.session.browserVersion > 10 ) {
						browserSupportsClassicDatasheet = false;
					}
					else {
						var bActiveX = false;
						/* check browser's compatibility with the ListNet control (https://www.microsoft.com/en-us/download/details.aspx?id=13255) */
						try{var ActiveXobj = new ActiveXObject('ListNet.ListNet'); bActiveX = true;}catch(err){}
						if ( bActiveX === true ) {
							browserSupportsClassicDatasheet = true;
						}
					}
				}
				if ( typeof(afterFx) === "function" ) {
					afterFx({"browserName":ds.stor.session.browserName, "browserVersion":ds.stor.session.browserVersion, "browserSupportsActiveX":ds.stor.session.browserSupportsActiveX, "browserSupportsClassicDatasheet":ds.stor.session.browserSupportsClassicDatasheet});
				}
				return ds.stor.session.browserName;
			},
			getPageType: function(afterFx){
				if ( ds.$("#_wikiPageMode").length > 0 ) {
					ds.stor.session.pageType = 'Wiki';
				}
				if ( GetUrlKeyValue("IsDlg") === "1" ) {
					ds.stor.session.pageType = 'Dialog';
					if ( ds.$("#_wikiPageMode").length > 0 ) {
						ds.stor.session.pageType += ' Wiki';
					}
				}
				if ( typeof(afterFx) === "function" ) {
					afterFx(ds.stor.session.pageType);
				}
				return ds.stor.session.pageType;
			},
			setupSyntaxHighlightingForCodeSamples: function(){
				var bFoundOne = false;
				bFoundOne = ds.$(".ms-rteElement-codeSample, .ms-rteElement-codeSampleJS, .ms-rteElement-codeSampleHTML").length > 0;
				if ( bFoundOne === true ){
					ds.controls.codeEditor.addScripts(function(){
						ds.$(".ms-rteElement-codeSampleJS").each(function(i,elm){
							ds.$(this).text(js_beautify(ds.$(this).text()));
							ds.$(this).wrap("<PRE class='hljs js javascript ms-rteElement-codeSampleJS'><CODE></CODE></PRE>");
						});
						ds.$(".ms-rteElement-codeSampleHTML").each(function(i,elm){
							ds.$(this).text(html_beautify(ds.$(this).text()));
							ds.$(this).wrap("<PRE class='hljs html ms-rteElement-codeSampleHTML'><CODE></CODE></PRE>");
						});
						ds.$(".ms-rteElement-codeSample").each(function(i,elm){
							ds.$(this).text(js_beautify(ds.$(this).text()));
							ds.$(this).wrap("<PRE class='hljs ms-rteElement-codeSample'><CODE></CODE></PRE>");
						});
						ds.$(".hljs").each(function(i,elm){
							hljs.highlightBlock(elm);
						});
						ds.util.dynamicallyPopulateDSMagicHelpWikiCodeDefinition();
					});
				}
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
					if ( typeof(ds.intvls.wfIdleToLoadResources.afterFx) === "function" ) { ds.intvls.wfIdleToLoadResources.afterFx(); }
					window.clearInterval(ds.intvls.wfIdleToLoadResources.intvl);
				},
				onSuccessFx: function(){
					ds.util.log("wfIdleToLoadResources... Detected that sp.ribbon.js is loaded and document.readyState is complete... will load additional content in anticipation of the next user request to speed things up");
					if ( typeof(ds.intvls.wfIdleToLoadResources.afterFx) === "function" ) { ds.intvls.wfIdleToLoadResources.afterFx(); }
					window.clearInterval(ds.intvls.wfIdleToLoadResources.intvl);
				},
				afterFx: function(){
					/*ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-stor-SPTZs.js");*/
					/*ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-stor-createLists.js");*/
					ds.$.getCachedScript(ds.p.cdn.js.moment, function(){ds.$.getCachedScript(ds.p.cdn.js.momentTz);});
					ds.$.getCachedScript(ds.p.cdn.js.fontAwesome);
					ds.$.getCachedScript(ds.p.cdn.js.feedEk);
					/*ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-controls-tabs.js");*/
					/*ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-controls-psudoPopup.js");*/
					/*ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-controls-accordion.js");*/
					/*ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-controls-codeEditor.js");*/
					/*ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-controls-contextMenu.js");*/
					/*ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_ds-controls-classicDatasheet.js");*/
					

					if ( ds.stor.session.bOnlyGetListsWhenTold === false ) {
						ds.rest.coll.getLists(true, function(){
							ds.intvls.wfAllListsAndFields.intvl = setInterval(ds.intvls.wfAllListsAndFields.loopingFx, ds.intvls.wfAllListsAndFields.pauseMS);
						});
					}
					else if ( ds.util.isPageInEditMode() === false && ds.util.isPageInDialog() === false ) {
						ds.util.getSettingsForCurrentPage(function(formSettings){
							try{
								eval("formSettings.masterSettings.initFx = "+ formSettings.masterSettings.initFx +";");
								formSettings.masterSettings.initFx();
								if ( typeof(formSettings.masterSettings.afterFx) === "function" ) {
									formSettings.masterSettings.afterFx();
								}
							}catch(err){}
						});
						setTimeout(ds.util.conditionallyShowDsMagicConfigurationButton,1300);
					}
					
					ds.pages.all();
				}
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
					if ( ds.stor.session.bOnlyGetListsWhenTold === true ) {
						ds.util.log("wfAllListsAndFields... Detected that all lists and fields have been retrieved", true);
						if ( ds.util.isPageInEditMode() === false && ds.util.isPageInDialog() === false ) {
							setTimeout(ds.util.conditionallyShowDsMagicConfigurationButton,1300);
						}
						window.clearInterval(ds.intvls.wfAllListsAndFields.intvl);
					}
					else if ( ds.util.isPageInEditMode() === false && ds.util.isPageInDialog() === false ) {
						ds.util.log("wfAllListsAndFields... Detected that all lists and fields have been retrieved... retrieving settings", true);
						ds.util.getSettingsForCurrentPage(function(formSettings){
							try{
								eval("formSettings.masterSettings.initFx = "+ formSettings.masterSettings.initFx +";");
								formSettings.masterSettings.initFx();
								if ( typeof(formSettings.masterSettings.afterFx) === "function" ) {
									formSettings.masterSettings.afterFx();
								}
							}catch(err){}
						});
						setTimeout(ds.util.conditionallyShowDsMagicConfigurationButton,1300);
						window.clearInterval(ds.intvls.wfAllListsAndFields.intvl);
					}
					else {
						ds.util.log("wfAllListsAndFields... Detected that page is in edit mode or is a dialog, so not retrieving settings or showing config button", true);
						window.clearInterval(ds.intvls.wfAllListsAndFields.intvl);
					}
				}
			}
		},
		controls: {
			accordion: {
				arrContent: [{heading:'<i class="fa fa-chevron-right fa-1x"></i>&nbsp;My Section Heading 1', content:'<p>My HTML Content 1</p>'},{heading:'<i class="fa fa-chevron-right fa-1x"></i>&nbsp;My Section Heading 2', content:'<p>My HTML Content 2</p>'}],
				htmlTemplate: "<DIV class='ds-accordion'><TABLE border='0' cellpadding='0' cellspacing='0' align='center' width='1000px'><tbody><tr><td><H2><span class='ds-accordionHeading'></span></H2><DIV class='ds-accordionWrapper'><H3 class='ds-accordionSectionHeader'></H3><DIV class='ds-accordionContentSection'></DIV></DIV></td></tr></tbody></table></DIV>",
				init: function(afterFx, setAccordionId){
					if ( typeof(setAccordionId) !== "undefined" ) { 
						var sH = ds.controls.accordion.htmlTemplate;
						sH.replace("class='ds-accordion'>","class='ds-accordion' id='"+setAccordionId+"'>");
						ds.$("#DeltaPlaceHolderMain").prepend(sH);
						ds.$(".ds-accordion").attr("id",setAccordionId);
					}
					else {
						ds.util.appendToMain(ds.controls.accordion.htmlTemplate);
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
			},
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
			codeEditor: {
				arrElements: [],
				init: function(afterFx){
					if ( typeof(hljs) === "undefined" ) {
						ds.controls.codeEditor.addScripts(function(){
							ds.$("pre code div.ms-rtestate-write").each(function(){
								if ( ds.$(this).hasClass("hljs") === false ) {
									ds.controls.codeEditor.arrElements.push(ds.$(this));
									ds.controls.codeEditor.setupEventsFx(ds.$(this));
								}
							});
							if ( typeof(afterFx) === "function" ) { afterFx(); }
						});
					}
					else {
						ds.$("pre code div.ms-rtestate-write").each(function(){
							if ( ds.$(this).hasClass("hljs") === false ) {
								ds.controls.codeEditor.arrElements.push(ds.$(this));
								ds.controls.codeEditor.setupEventsFx(ds.$(this));
							}
						});
						if ( typeof(afterFx) === "function" ) { afterFx(); }
					}
					return true;
				},
				addScripts: function(afterFx){
					var head = document.getElementsByTagName("head")[0];
					var elm = document.createElement("link");
					elm.rel = "stylesheet";
					elm.href = "//1.dsmagicsp.cloudappsportal.com/Style%20Library/styles/default.css";
					elm.type = "text/css";
					head.appendChild(elm);
					ds.$.getCachedScript("//1.dsmagicsp.cloudappsportal.com/Style%20Library/highlight.pack.js", function(){
						ds.$.getCachedScript("//1.dsmagicsp.cloudappsportal.com/Style%20Library/beautifyjs-1.6.12.min.js", function(){
							ds.$.getCachedScript("//1.dsmagicsp.cloudappsportal.com/Style%20Library/beautify-css-1.6.12.min.js", function(){
								ds.$.getCachedScript("//1.dsmagicsp.cloudappsportal.com/Style%20Library/beautify-html-1.6.12.min.js", afterFx);
							});
						});
					});
					return true;
				},
				generate: function(codeClass, editorClass, editorId, jqSelAppendTo) {
					var aH = ["<pre><code><div contenteditable='true' class='ms-rtestate-write ms-rteflags-0 ms-rtestate-field ",editorClass," ",codeClass,"'"];
					if ( !editorId === false ) { 
						aH.push(" id='",editorId,"'"); 
					}
					aH.push("></div></code></pre>");
					if ( typeof(jqSelAppendTo) !== "undefined" ) {
						var $elm = ds.$(aH.join("")).appendTo(jqSelAppendTo);
						ds.controls.codeEditor.arrElements.push($elm.find(".ms-rtestate-write"));
						ds.controls.codeEditor.setupEventsFx($elm);
						return true;
					}
					else {
						return aH.join("");
					}
				},
				populate: function(jqSel, rawCode){
					ds.$(jqSel).text(js_beautify(ds.util.getFunctionCode(rawCode)));
					ds.controls.codeEditor.forceHighlight(jqSel);
					return true;
				},
				retrieve: function(jqSel) {
					return ds.util.escapeJS(ds.util.minifyJS(ds.$(jqSel).text()));
				},
				setupEventsFx: function(jqSel){
					ds.$(jqSel).each(function(iS,elmS){
						ds.$(this).attr("Title","Code will have syntax highlighting applied when you double click it");
						hljs.highlightBlock(ds.$(this)[0]);
						ds.$(this).on("blur", function(){
							/* drop any existing style or css that affects the appearance of our code*/
							ds.$(this).text(ds.$(this).text());
							/* re-run the script to highlight our code*/
							hljs.highlightBlock(ds.$(this).parent()[0]);
						})
						ds.$(this).parent().dblclick(function(){
							/* drop any existing style or css that affects the appearance of our code*/
							ds.$(this).children().eq(0).text(ds.$(this).children().eq(0).text());
							/* re-run the script to highlight our code*/
							hljs.highlightBlock(ds.$(this)[0]);
						});
					});
				},
				forceHighlight: function(jqSel) {
					ds.$(jqSel).text(ds.$(jqSel).text());
					hljs.highlightBlock(ds.$(jqSel)[0]);
					return true;
				}
			},
			psudoPopup: {
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
					ds.util.appendToMain("<div class='ds-psPopWrapper' id='psPopWrapper'><div class='ds-psPopTB' id='psPopTB'><span>My Title</span></div><div class='ds-psPopTBCloseButton' id='psPopTBCloseButton'><i class='fa fa-close fa-4'></i></div><div class='ds-psPopContent' id='psPopContent'></div><div class='ds-psPopBottom' id='psPopBottom'><table class='ds-fxdtbl' border='0' cellpadding='0' cellspacing='0' align='center'><tbody><tr><td><div class='ds-psudo-button' id='btnSubmit'><table align='center' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><i class='fa fa-gears fa-3'></i></td><td>&nbsp;&nbsp;Submit</td></tr></tbody></table></div></td><td>&nbsp;</td><td><div class='ds-psudo-button' id='btnClose'><table align='center' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><i class='fa fa-close fa-3'></i></td><td>&nbsp;&nbsp;Close</td></tr></tbody></table></div></td></tr></tbody></table></div><div class='ds-psPopResize' id='psPopResize'><i class='fa fa-expand fa-2'></i></div></div>");
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
						if ( ds.$("#psPopContent")[0].scrollHeight <= ds.$("#psPopContent")[0].clientHeight ) {
							clearInterval(ds.intvls.wfNoScrollY.intvl);
						}
						if ( ds.intvls.wfNoScrollY.counter * ds.intvls.wfNoScrollY.pauseMs >= ds.intvls.wfNoScrollY.timeoutMS ) {
							clearInterval(ds.intvls.wfNoScrollY.intvl);
						}
					};
					ds.intvls.wfNoScrollY.pauseMs = 10;
					ds.intvls.wfNoScrollY.counter = 0;
					ds.intvls.wfNoScrollY.timeoutMS = 300000;
					/* ping the mouse cursor's position every 15ms and resize the popup along with it until the user releases the mouse button*/
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
							ds.$(".ms-formtable INPUT:visible, .ms-formtable SELECT:visible, .ms-formtable TEXTAREA:visible").css("min-width","Calc(100% - 50px)");
							clearInterval(ds.intvls.wfNoScrollX.intvl);
						}
						if ( ds.intvls.wfNoScrollX.counter * ds.intvls.wfNoScrollX.pauseMs >= ds.intvls.wfNoScrollX.timeoutMS ) {
							clearInterval(ds.intvls.wfNoScrollX.intvl);
						}
					};
					ds.intvls.wfNoScrollX.pauseMs = 10;
					ds.intvls.wfNoScrollX.counter = 0;
					ds.intvls.wfNoScrollX.timeoutMS = 300000;
					/* ping the mouse cursor's position every 15ms and resize the popup along with it until the user releases the mouse button */
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
						/* ping the mouse cursor's position every 15ms and resize the popup along with it until the user releases the mouse button*/
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
			},
			tabs: {
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
					var htmlRelatedButton = [];
					htmlRelatedButton.push('<td align="center" class="ds-buttonWrapper"><button type="button" class="ds-psudo-button" title="');
					htmlRelatedButton.push(buttonTooltip);
					htmlRelatedButton.push('"><table align="center" cellpadding="0" cellspacing="0" border="0"><tbody><tr><td class="ds-listIcon"><i class="fa ');
					htmlRelatedButton.push(faIcon);
					htmlRelatedButton.push(' fa-1"></i></td><td><i class="fa fa-plus fa-1"></i></td><td>&nbsp;&nbsp;</td><td class="ds-listContentType">');
					htmlRelatedButton.push(buttonDisplayText);
					htmlRelatedButton.push('</td></tr></tbody></table></button></td>');
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
					if ( ds.controls.tabs.arrGenTabs.length < 1 ) {
						if ( ds.$(".ds-relatedRecordsUI").length < 1 ) {
							ds.util.appendToMain("<div class=\'ds-relatedRecordsUI\'><table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tbody><tr><td><div class=\"ds-addRelatedRecordsButtons\"><table id=\"addRelatedRecordsButtons\" border=\"0\" cellspacing=\"3\" cellpadding=\"0\" align=\"center\" width=\"100%\" style=\"font-family: Verdana, sans-serif; font-size: x-small; border-top: 4px double #808080;\"><tr class=\"ds-relatedRecordsButtonsMainRow\"><td align=\"center\" class=\"ds-buttonWrapper\"><button type=\"button\" class=\"ds-psudo-button\" title=\"Open a new window that will allow you to add a new record related to the current task\"><table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tbody><tr><td class=\"ds-listIcon\"><i class=\"fa fa-1\"></i></td><td><i class=\"fa fa-plus fa-1\"></i></td><td>&nbsp;&nbsp;</td><td class=\"ds-listContentType\"></td></tr></tbody></table></button></td></tr></table></div></td></tr><tr><td><div id=\"tabs\"><ul><li class=\"ds-psudo-tab\"><a href=\"#tabs-0\"><table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tbody><tr><td class=\"ds-listIcon\"><i class=\"fa fa-1\"></i></td><td>&nbsp;</td><td class=\"ds-listContentType\"></td></tr></tbody></table></a></li><li class=\"ds-psudo-tab ds-psudo-tab-last\"><a href=\"#tabs-filter\"><table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tbody><tr><td class=\"ds-listIcon\"><i class=\"fa fa-filter fa-1x\"></i></td><td>&nbsp;</td><td class=\"ds-listContentType\">Filter</td></tr></tbody></table></a></li></ul><div id=\"tabs-0\" class=\"ds-tabContentDiv\"><div class=\"ds-tabs-aboveTabContent\"></div><div class=\"ds-tabContentHeader\"><table cellpadding=\"0\" cellspacing=\"0\" border=\"1\" align=\"center\" class=\"ds-TabContentWrapper\" id=\"tblContactsHeader\"><tr class=\"ds-headerRow\"><td class=\"ds-relatedInfoHeaders\" style=\"width: 60px\"><div id=\"contactHeaderEdit\" class=\"ds-tcBlock\" title=\"Click to the button next to a record to EDIT its details in a new window.\">Edit</div></td><td class=\"ds-relatedInfoHeaders\" style=\"width: 198px\"><div id=\"contactHeaderName\" class=\"ds-tcBlock\" title=\"The contact\'s name\">Contact Name</div></td><td class=\"ds-relatedInfoHeaders\" style=\"width: 80px\"><div id=\"contactHeaderThirdParty\" class=\"ds-tcBlock\" title=\"A checkbox that indicates in the contact is not employed by BAC\">3rd Party</div></td><td class=\"ds-relatedInfoHeaders\" style=\"width: 198px\"><div id=\"contactHeaderEmail\" class=\"ds-tcBlock\" title=\"The contact\'s e-mail address\">Contact Email</div></td><td class=\"ds-relatedInfoHeaders\" style=\"width: 198px\"><div id=\"contactHeaderRole\" class=\"ds-tcBlock\" title=\"The contact\'s role explains how they\'re related to the task\">Contact Role</div></td></tr></table></div><div class=\"ds-tabContentScroll\"><table cellpadding=\"0\" cellspacing=\"0\" border=\"1\" align=\"center\" class=\"ds-TabContentWrapper\" id=\"tblContacts\"><tr class=\"ds-dataRow\"><td class=\"ds-relatedInfoData\" style=\"width: 60px\"><img id=\"contactID1\" alt=\"1\" border=\"0\" class=\"ds-recordIDs ds-relatedInfoDataTxtField\" style=\"cursor: pointer;\" src=\"/_layouts/images/edititem.gif\" title=\"Contact ID #1. Click to EDIT this record in a new window.\" /></td><td class=\"ds-relatedInfoData\" style=\"width: 198px\"><div id=\"contactName1\" class=\"ds-tcBlock\" title=\"\"></div></td><td class=\"ds-relatedInfoData\" style=\"width: 80px\"><div id=\"contactThirdParty1\" class=\"ds-tcBlock\" title=\"\"><i class=\"fa fa-check-square-o fa-3\"></i></div></td><td class=\"ds-relatedInfoData\" style=\"width: 198px\"><div id=\"contactEmail1\" class=\"ds-tcBlock\" title=\"\"></div></td><td class=\"ds-relatedInfoData\" style=\"width: 198px\"><div id=\"contactRole1\" class=\"ds-tcBlock\" title=\"\"></div></td></tr></table><br /><div class=\"ds-tabs-belowTabContent\"></div></div></div><div id=\"tabs-filter\" class=\"ds-tabContentDiv\"><div class=\"ds-tabContentHeader\">Use the controls below to pull additional historical data</div><div class=\"ds-tabContentScroll\"><div id=\"dsChangeFilterForRelatedRecords\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" width=\"90%\"><tr><td><div class=\"ds-highlight\" style=\"margin-top: 20px; padding: 0 .7em; width: 100%;\"><div id=\"divLowerButtonsWrapperTableDayFilterable\" style=\"display: table; width: 100%; text-align: center;\"><div style=\"display: table-row;\"><div style=\"display: table-cell; vertical-align: middle; padding: 2px 2px 2px 2px; width: 140px;\"><label for=\"txtNumberOfDays\" id=\"lblTxtNumberOfDays\">Pull records for the last X days: </label><input type=\"text\" id=\"txtNumberOfDays\" size=\"4\" maxlength=\"4\" class=\"ds-relatedInfoDataTxtField\" style=\"background: white; border: 1px solid black;\" value=\"30\" /></div><div style=\"display: table-cell; vertical-align: middle; padding: 2px 2px 2px 2px;\"><button id=\"btnResetTaskComments\" type=\"button\" class=\"ds-psudoButton\" title=\"Reset the task comments data and re-pull the comments related to this task\"><table align=\"center\" cellpadding=\"2\" cellspacing=\"2\" border=\"0\" style=\"font-family: Verdana, sans-serif; font-size: x-small\"><tbody><tr><td><i class=\"fa fa-comment fa-1\"></i></td><td><i class=\"fa fa-refresh fa-1\"></i></td><td style=\"width:2px\" /><td>Comments</td></tr></tbody></table></button><button id=\"btnResetTaskTimeEntries\" type=\"button\" class=\"ds-psudoButton\" title=\"Reset the task TimeEntries data and re-pull the TimeEntries related to this task\"><table align=\"center\" cellpadding=\"2\" cellspacing=\"2\" border=\"0\" style=\"font-family: Verdana, sans-serif; font-size: x-small\"><tbody><tr><td><i class=\"fa fa-clock-o fa-1\"></i></td><td><i class=\"fa fa-refresh fa-1\"></i></td><td style=\"width:2px\" /><td>Times</td></tr></tbody></table></button><button id=\"btnResetTaskStatusChanges\" type=\"button\" class=\"ds-psudoButton\" title=\"Reset the task StatusChanges data and re-pull the StatusChanges related to this task\"><table align=\"center\" cellpadding=\"2\" cellspacing=\"2\" border=\"0\" style=\"font-family: Verdana, sans-serif; font-size: x-small\"><tbody><tr><td><i class=\"fa fa-bookmark fa-1\"></i></td><td><i class=\"fa fa-refresh fa-1\"></i></td><td style=\"width:2px\" /><td>Status</td></tr></tbody></table></button><button id=\"btnResetTaskAutomationLog\" type=\"button\" class=\"ds-psudoButton\" title=\"Reset the task AutomationLog data and re-pull the AutomationLog related to this task\"><table align=\"center\" cellpadding=\"2\" cellspacing=\"2\" border=\"0\" style=\"font-family: Verdana, sans-serif; font-size: x-small\"><tbody><tr><td><i class=\"fa fa-cog fa-1\"></i></td><td><i class=\"fa fa-refresh fa-1\"></i></td><td style=\"width:2px\" /><td>Automation</td></tr></tbody></table></button></div></div></div></div></td></tr><tr><td><div class=\"ds-highlight\" style=\"margin-top: 20px; padding: 0 .7em; width: 100%;\"><div id=\"divLowerButtonsWrapperTableAllData\" style=\"display: table; width: 100%; text-align: center;\"><div style=\"display: table-row;\"><div style=\"display: table-cell; vertical-align: middle; border:padding: 2px 2px 2px 2px;\">Refresh all data</div><div style=\"display: table-cell; vertical-align: middle; padding: 2px 2px 2px 2px;\"><button id=\"btnResetTaskContacts\" type=\"button\" class=\"ds-psudoButton\" title=\"Reset the task contacts data and re-pull the contacts related to this task\"><table align=\"center\" cellpadding=\"2\" cellspacing=\"2\" border=\"0\" style=\"font-family: Verdana, sans-serif; font-size: x-small\"><tbody><tr><td><i class=\"fa fa-user fa-1\"></i></td><td><i class=\"fa fa-refresh fa-1\"></i></td><td style=\"width:2px\" /><td>Contacts</td></tr></tbody></table></button><button id=\"btnResetTaskSupportTickets\" type=\"button\" class=\"ds-psudoButton\" title=\"Reset the task SupportTickets data and re-pull the SupportTickets related to this task\" style=\"margin-left: 6px;\"><table align=\"center\" cellpadding=\"2\" cellspacing=\"2\" border=\"0\" style=\"font-family: Verdana, sans-serif; font-size: x-small\"><tbody><tr><td><i class=\"fa fa-flag fa-1\"></i></td><td><i class=\"fa fa-refresh fa-1\"></i></td><td style=\"width:2px\" /><td>Tickets</td></tr></tbody></table></button><button id=\"btnResetTaskChildTasks\" type=\"button\" class=\"ds-psudoButton\" title=\"Reset the task ChildTasks data and re-pull the ChildTasks related to this task\"><table align=\"center\" cellpadding=\"2\" cellspacing=\"2\" border=\"0\" style=\"font-family: Verdana, sans-serif; font-size: x-small\"><tbody><tr><td><i class=\"fa fa-check-circle fa-1\"></i></td><td><i class=\"fa fa-refresh fa-1\"></i></td><td style=\"width:2px\" /><td>Sub-Tasks</td></tr></tbody></table></button><button id=\"btnResetTaskRelatedProcesses\" type=\"button\" class=\"ds-psudoButton\" title=\"Reset the task RelatedProcesses data and re-pull the RelatedProcesses related to this task\"><table align=\"center\" cellpadding=\"2\" cellspacing=\"2\" border=\"0\" style=\"font-family: Verdana, sans-serif; font-size: x-small\"><tbody><tr><td><i class=\"fa fa-chain fa-1\"></i></td><td><i class=\"fa fa-refresh fa-1\"></i></td><td style=\"width:2px\" /><td>Rel. Proc.</td></tr></tbody></table></button></div></div></div></div></td></tr></table></div><br /><div class=\"ds-tabs-belowTabContent\"><table class=\"ds-alignCenter\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"auto\"><tbody><tr><td></td></tr></tbody></table></div></div></div></div></td></tr></tbody></table><span class=\'ds-tabs-enterSetupButton\' title=\'Enter tabs setup GUI\' style=\'cursor: pointer; text-align: center;\'><i class=\'fa fa-ellipsis-v\' style=\'font-size: 1.5em; width: 15px;\'></i></span></div>");
							
							var iGreatestWidth = new Number(0);
							
							ds.$('.ds-psudoButton').each(function() {
								if (ds.$(this)[0].clientWidth > iGreatestWidth) {
									iGreatestWidth = ds.$(this)[0].clientWidth
								}
							});
							ds.$('.ds-psudoButton').each(function() {
								ds.$(this).css('width', iGreatestWidth + 'px');
							});
							
							if ( ds.$(".ds-psudo-tab-active").length < 1 ) {
								ds.$(".ds-psudo-tab").eq(0).addClass("ds-psudo-tab-active");
								ds.controls.tabs.showOnlyActiveTabContent();
							}
							ds.util.simulateBrowseTabClick();
							ds.controls.tabs.generateTabsFromSettings();
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
								ds.controls.tabs.setupEventsFx();
								if ( typeof(formSettings.relatedRecordsSettings) !== "undefined" ) {
									if ( formSettings.relatedRecordsSettings.hideAddRelatedRecordButtons === true ) {
										ds.$(".ds-relatedRecordsButtonsMainRow").hide();
									}
									if ( formSettings.relatedRecordsSettings.hideFilterTab === true ) {
										ds.$(".ds-psudo-tab-last").remove();
										ds.$("DIV[id='tabs-filter']").remove();
									}
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
							var roID = ds.repOp.newObjRO("relRecs_"+ listName, listName, "record count "+ ds.$(ds.lists[listName.toLowerCase()].items.results).length, ds.$(ds.lists[listName.toLowerCase()].items.results).length,function(loopIndex){
								ds.$(ds.lists[listName.toLowerCase()].items.results).eq(loopIndex).each(function(iResult,elmResult){
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
				},
				configure: {
					evts: { 
					},
					load: function(){
						ds.controls.codeEditor.addScripts(function(){
							ds.util.appendToMain("<div class=\'ds-config-gui-tabs ds-accordion\'><div class=\'ds-tabs-config-gui-top-menu\'><table align=\'left\' border=\'0\' cellpadding=\'0\' cellspacing=\'2\'><tbody><tr><td><button type=\'button\' class=\'ds-psudo-button ds-tabs-config-btn-save\'><span class=\'ds-tabs-config-btn\'><i class=\'fa fa-gears\'></i>&nbsp;Save</span></button></td><td><button type=\'button\' class=\'ds-psudo-button ds-tabs-config-btn-cancel\'><span class=\'ds-tabs-config-btn\'><i class=\'fa fa-close\'></i>&nbsp;Cancel</span></button></td><td><button type=\'button\' class=\'ds-psudo-button ds-tabs-config-btn-collapseListForm\'><span class=\'ds-tabs-config-btn\'><i class=\'fa fa-chevron-up\'></i>&nbsp;Collapse List Form</span></button></td><td><button type=\'button\' class=\'ds-psudo-button ds-tabs-config-btn-new\'><span class=\'ds-tabs-config-btn\'><i class=\'fa fa-plus-circle\'></i>&nbsp;New</span></button></td><td><button type=\'button\' class=\'ds-psudo-button ds-tabs-config-btn-new-htmlTab\'><span class=\'ds-tabs-config-btn\'><i class=\'fa fa-code\'></i>&nbsp;New HTML</span></button></td></tr></tbody></table></div><h3 class=\'ds-config-tab-header\' restListName=\'\' tabIndex=\'\'><table class=\'ds-config-tab-header-content-wrapper\' border=\'0\' cellpadding=\'2\' cellspacing=\'2\'><tbody><tr><td>{<span class=\'ds-config-tab-index\'></span>}</td><td class=\'ds-config-tab-header-tabName\'></td><td class=\'ds-config-tab-guiControl-move-up\'><span class=\'ds-config-tab-move-up\'><i class=\'fa fa-arrow-up\'></i>&nbsp;Up</span></td><td class=\'ds-config-tab-guiControl-move-down\'><span class=\'ds-config-tab-move-down\'><i class=\'fa fa-arrow-down\'></i>&nbsp;Down</span></td></tr></tbody></table></h3><div class=\'ds-config-tab-wrapper\' restListName=\'\' tabIndex=\'\'><table class=\'ds-config-tab-table-wrapper\' border=\'0\' cellpadding=\'2\' cellspacing=\'2\'><tbody><tr><td><h2>Tab source list name</h2><div class=\'ds-tab-list-name-wrapper\'><select class=\'ds-tab-list-name\'><option value=\'\'></option></select></div></td></tr><tr><td><h2 title=\'You should see a preview of the font awesome icon after updating the field below and moving to the next field\'>Tab list FA icon class</h2><div class=\'ds-tab-list-Fa-class-wrapper\'><input type=\'text\' size=\'75\' maxlength=\'255\' value=\'\' class=\'ds-tab-list-Fa-class\' /><i class=\'ds-tab-list-Fa-class-preview fa\'></i></div></td></tr><tr><td><h2>Tab list display text</h2><div class=\'ds-tab-display-text-wrapper\'><input type=\'text\' size=\'75\' maxlength=\'255\' value=\'\' class=\'ds-tab-display-text\' /></div></td></tr><tr><td><h2 title=\'set to nothing to omit the header, otherwise populate with the html content you wish to see above the related records table\'>Tab header html <img border=\'0\' src=\'_layouts/images/helpicon.gif\' title=\'Double click the code to update the syntax highlighting\'/></h2><div class=\'ds-tab-header-html-wrapper\'><pre><code class=\'hljs html\'><div contenteditable=\'true\' class=\'ms-rtestate-write ms-rteflags-0 ms-rtestate-field ds-tab-header-html hljs html\'></div></code></pre></div></td></tr><tr><td><h2>Configure fields for this tab\'s related records</h2><div class=\'ds-tab-table-fields-wrapper\'><div class=\'ds-tabs-table-fields-top-menu\'><button type=\'button\' class=\'ds-psudo-button ds-tab-table-fields-config-btn-new\'><span class=\'ds-tab-table-fields-config-btn\'><i class=\'fa fa-plus-circle\'></i>&nbsp;New</span></button></div><table border=\'0\' cellpadding=\'2\' cellspacing=\'2\' class=\'ds-tab-all-table-fields\'><thead><tr class=\'ds-tab-table-fields-header\'><th>fin</th><th>label <img border=\'0\' src=\'_layouts/images/helpicon.gif\' title=\'This will be the column lable in the related records display\'/></th><th>formatAs <img border=\'0\' src=\'_layouts/images/helpicon.gif\' title=\'Descriptions:String = Plain textDate = format date with moment.jsPercent = output the number as a percentagePersonLookup = output the SP user ID as the user nameMultiPersonLookup = output the array of SP user Ids as the namesTitleAsDisplayLink = output the item title property as a link to the item display formEventDowloadButton = output the field as a calendar download linkEditButton = output the ID field as a link to the item edit formDisplayButton = output the ID field as a link to the item display formDeleteButton = output the ID field as a button to delete the itemSaveButton = output the ID field as a button to save the itemCancelButton = output the ID field as a button to cancel the itemCheckBox = render a yes/no boolean field as a checked or unchecked boxMailTo = output the field as a mailto link\'/></th><th>formatString <img border=\'0\' src=\'_layouts/images/helpicon.gif\' title=\'For date and time formatting, use moment.js formatting strings\'/></th><th>widthPx</th><th>textAlign</th><th>verticalAlign</th><th>index</th><th class=\'ds-tab-table-field-guiControl-delete\'>delete</th><th class=\'ds-tab-table-field-guiControl-clone\'>clone</th><th class=\'ds-tab-table-field-guiControl-up\'>up</th><th class=\'ds-tab-table-field-guiControl-down\'>down</th></tr></thead><tbody class=\'ds-tab-table-fields-tbody\'><tr class=\'ds-tab-table-field\'><td><select class=\'ds-tab-table-field-fin\'><option value=\'\'></option><option value=\'HTMLSnippit\'>HTMLSnippit</option></select></td><td><input type=\'text\' value=\'\' class=\'ds-tab-table-field-label\'/></td><td><select class=\'ds-tab-table-field-formatAs\'><option value=\'\'></option><option value=\'String\'>String</option><option value=\'Date\'>Date</option><option value=\'Percent\'>Percent</option><option value=\'PersonLookup\'>PersonLookup</option><option value=\'MultiPersonLookup\'>MultiPersonLookup</option><option value=\'TitleAsDisplayLink\'>TitleAsDisplayLink</option><option value=\'EventDowloadButton\'>EventDowloadButton</option><option value=\'EditButton\'>EditButton</option><option value=\'DisplayButton\'>DisplayButton</option><option value=\'DeleteButton\'>DeleteButton</option><option value=\'SaveButton\'>SaveButton</option><option value=\'CancelButton\'>CancelButton</option><option value=\'CheckBox\'>CheckBox</option><option value=\'MailTo\'>MailTo</option></select></td><td><input type=\'text\' value=\'\' class=\'ds-tab-table-field-formatString\'/></td><td><input type=\'number\' value=\'\' min=\'1\' max=\'1600\' class=\'ds-tab-table-field-widthPx\'/></td><td><select class=\'ds-tab-table-field-textAlign\'><option value=\'\'></option><option value=\'Left\'>Left</option><option value=\'Center\'>Center</option><option value=\'Right\'>Right</option><option value=\'Justify\'>Justify</option></select></td><td><select class=\'ds-tab-table-field-verticalAlign\'><option value=\'\'></option><option value=\'Top\'>Top</option><option value=\'Middle\'>Middle</option><option value=\'Bottom\'>Bottom</option></select></td><td><span class=\'ds-tab-table-field-index\'>0</span></td><td class=\'ds-tab-table-field-guiControl-delete\'><span class=\'ds-tab-table-field-gui-delete\'><i class=\'fa fa-trash-o\'></i>&nbsp;Delete</span></td><td class=\'ds-tab-table-field-guiControl-clone\'><span class=\'ds-tab-table-field-gui-clone\'><i class=\'fa fa-clone\'></i>&nbsp;Clone</span></td><td class=\'ds-tab-table-field-guiControl-up\'><span class=\'ds-tab-table-field-gui-up\'><i class=\'fa fa-arrow-up\'></i>&nbsp;Up</span></td><td class=\'ds-tab-table-field-guiControl-down\'><span class=\'ds-tab-table-field-gui-down\'><i class=\'fa fa-arrow-down\'></i>&nbsp;Down</span></td></tr></tbody></table></div></td></tr><tr><td><h2 title=\'set to nothing to omit the footer, otherwise populate with the html content you wish to see below the related records table\'>Tab footer HTML <img border=\'0\' src=\'_layouts/images/helpicon.gif\' title=\'Double click the code to update the syntax highlighting\'/></h2><div class=\'ds-tab-table-footerButton-wrapper\'><pre><code><div contenteditable=\'true\' class=\'ms-rtestate-write ms-rteflags-0 ms-rtestate-field ds-tab-footerButton-html\'></div></code></pre></div></td></tr><tr><td><h2>Save new related record JS function <img border=\'0\' src=\'_layouts/images/helpicon.gif\' title=\'Double click the code to update the syntax highlighting\'/></h2><div class=\'ds-tab-table-saveNewFx-wrapper\'><pre><code><div contenteditable=\'true\' class=\'ms-rtestate-write ms-rteflags-0 ms-rtestate-field ds-tab-saveNewFx-js\'></div></code></pre></div></td></tr><tr><td><h2>Update existing related record JS function <img border=\'0\' src=\'_layouts/images/helpicon.gif\' title=\'Double click the code to update the syntax highlighting\'/></h2><div class=\'ds-tab-table-saveUpdateFx-wrapper\'><pre><code><div contenteditable=\'true\' class=\'ms-rtestate-write ms-rteflags-0 ms-rtestate-field ds-tab-saveUpdateFx-js\'></div></code></pre></div></td></tr><tr><td><span class=\'ds-tab-table-gui-delete-wrapper\'><span class=\'ds-config-tab-table-gui-delete\'><i class=\'fa fa-trash-o\'></i>&nbsp;Delete this tab</span></span>&nbsp;<span class=\'ds-tab-table-gui-clone-wrapper\'><span class=\'ds-config-tab-table-gui-clone\'><i class=\'fa fa-clone\'></i>&nbsp;Clone this tab</span></span></td></tr></tbody></table></div><h3 class=\'ds-config-tab-header masterSettings\'><table class=\'ds-config-tab-header-content-wrapper\' border=\'0\' cellpadding=\'2\' cellspacing=\'2\'><tbody><tr><td>{<span class=\'ds-config-tab-index\'>0</span>}</td><td class=\'ds-config-tab-header-tabName\'>tabs control master settings</td></tr></tbody></table></h3><div class=\'ds-config-tab-wrapper masterSettings\'><table class=\'ds-config-tab-table-wrapper\' border=\'0\' cellpadding=\'2\' cellspacing=\'2\'><tbody><tr><td><h2 title=\'Optional\'>initFx (javascript function) <img border=\'0\' src=\'_layouts/images/helpicon.gif\' title=\'Double click the code to update the syntax highlighting\'/></h2><div class=\'ds-tabs-masterSettings-initFx-wrapper\'><pre><code class=\'hljs javascript\'><div contenteditable=\'true\' class=\'ms-rtestate-write ms-rteflags-0 ms-rtestate-field ds-tabs-masterSettings-initFx-js hljs javascript\'></div></code></pre></div></td></tr><tr><td><h2 title=\'Optional\'>afterFx (javascript function) <img border=\'0\' src=\'_layouts/images/helpicon.gif\' title=\'Double click the code to update the syntax highlighting\'/></h2><div class=\'ds-tabs-masterSettings-afterFx-wrapper\'><pre><code class=\'hljs javascript\'><div contenteditable=\'true\' class=\'ms-rtestate-write ms-rteflags-0 ms-rtestate-field ds-tabs-masterSettings-afterFx-js hljs javascript\'></div></code></pre></div></td></tr></tbody></table></div><h3 class=\'ds-config-tab-header relatedRecordsSettings\'><table class=\'ds-config-tab-header-content-wrapper\' border=\'0\' cellpadding=\'2\' cellspacing=\'2\'><tbody><tr><td>{<span class=\'ds-config-tab-index\'>1</span>}</td><td class=\'ds-config-tab-header-tabName\'>related records settings</td></tr></tbody></table></h3><div class=\'ds-config-tab-wrapper relatedRecordsSettings\'><table class=\'ds-config-tab-table-wrapper\' border=\'0\' cellpadding=\'2\' cellspacing=\'2\'><tbody><tr><td class=\'ds-relatedRecordsSettings-toggleSection\'><span class=\'ds-relatedRecordsSettings-toggle\'><input type=\'checkbox\' checked=\'checked\' id=\'chkHideAddRelatedRecordsButtons\' value=\'\'/><label for=\'chkHideAddRelatedRecordsButtons\'>Hide add related records buttons</label></span><span class=\'ds-relatedRecordsSettings-toggle\'><input type=\'checkbox\' checked=\'checked\' id=\'chkHideFilterTab\' value=\'\'/><label for=\'chkHideFilterTab\'>Hide filter tab</label></span></td></tr></tbody></table></div><h3 class=\'ds-config-tab-header ds-htmlTab\' tabIndex=\'\'><table class=\'ds-config-tab-header-content-wrapper\' border=\'0\' cellpadding=\'2\' cellspacing=\'2\'><tbody><tr><td>{<span class=\'ds-config-tab-index\'></span>}</td><td class=\'ds-config-tab-header-tabName\'></td><td class=\'ds-config-tab-guiControl-move-up\'><span class=\'ds-config-tab-move-up\'><i class=\'fa fa-arrow-up\'></i>&nbsp;Up</span></td><td class=\'ds-config-tab-guiControl-move-down\'><span class=\'ds-config-tab-move-down\'><i class=\'fa fa-arrow-down\'></i>&nbsp;Down</span></td></tr></tbody></table></h3><div class=\'ds-config-tab-wrapper ds-htmlTab\' tabIndex=\'\'><table class=\'ds-config-tab-table-wrapper\' border=\'0\' cellpadding=\'2\' cellspacing=\'2\'><tbody><tr><td><h2 title=\'You should see a preview of the font awesome icon after updating the field below and moving to the next field\'>Tab list FA icon class</h2><div class=\'ds-tab-list-Fa-class-wrapper\'><input type=\'text\' size=\'75\' maxlength=\'255\' value=\'\' class=\'ds-tab-list-Fa-class\' /><i class=\'ds-tab-list-Fa-class-preview fa\'></i></div></td></tr><tr><td><h2>Tab display text</h2><div class=\'ds-tab-display-text-wrapper\'><input type=\'text\' size=\'75\' maxlength=\'255\' value=\'\' class=\'ds-tab-display-text\' /></div></td></tr><tr><td><h2 title=\'Optional\'>initial content (html) <img border=\'0\' src=\'_layouts/images/helpicon.gif\' title=\'Double click the code to update the syntax highlighting\'/></h2><div class=\'ds-htmlTab-initial-html-content-wrapper\'><pre><code class=\'hljs html\'><div contenteditable=\'true\' class=\'ms-rtestate-write ms-rteflags-0 ms-rtestate-field ds-htmlTab-html-content hljs html\'></div></code></pre></div></td></tr><tr><td><h2 title=\'Optional\'>afterFx (javascript function) <img border=\'0\' src=\'_layouts/images/helpicon.gif\' title=\'Double click the code to update the syntax highlighting\'/></h2><div class=\'ds-htmlTab-afterFx-wrapper\'><pre><code class=\'hljs javascript\'><div contenteditable=\'true\' class=\'ms-rtestate-write ms-rteflags-0 ms-rtestate-field ds-htmlTab-afterFx-js hljs javascript\'></div></code></pre></div></td></tr></tbody></table></div></div>");
							ds.controls.tabs.configure.init();
						});
					},
					init: function(){
						ds.util.log("ds.controls.tabs.configure.init... hiding .ds-relatedRecordsUI", true);
						ds.$(".ds-relatedRecordsUI").hide();
						ds.util.log("ds.controls.tabs.configure.init... calling ds.controls.tabs.configure.setupGlobalEventsForConfigGUI();", true);
						ds.controls.tabs.configure.setupGlobalEventsForConfigGUI();
						ds.util.log("ds.controls.tabs.configure.init... calling ds.util.getAllListsRelatedToTasks();", true);
						ds.stor.relatedLists = ds.util.getAllListsRelatedToTasks();
						ds.$(".ds-tab-list-name").each(function(){
							if ( ds.$(this).children().length <= 1 ) {
								for ( var i = 0; i < ds.stor.relatedLists.length; i++ ) {
									ds.$(this).append("<option value='"+ ds.stor.relatedLists[i] +"'>"+ ds.stor.relatedLists[i] +"</option>");
								}
							}							
						});
						
						/* capture the list's fields' rest names under ds.stor.listFields (will populate these in the FIN dropdown later)*/
						ds.util.log("ds.controls.tabs.configure.init... capturing each related list's restfieldnames", true);
						ds.stor.listFields = {};
						ds.$(".ds-tab-list-name").each(function(){
							for ( var i = 0; i < ds.stor.relatedLists.length; i++ ) {
								var lN = ds.stor.relatedLists[i];
								var fx = function(listName){
									ds.stor.listFields[listName] = {};
									ds.rest.getDataFromURI(ds.lists[listName].Items.__deferred.uri+"?$top=1", function(data, textStaus, jqXHR){
										var oResult = data.d.results[0];
										for ( fieldName in oResult ) {
											if ( typeof(data.d.results[0][fieldName]) !== "object" ) {
												ds.stor.listFields[listName][fieldName] = fieldName;
											}
										}
										
									}, true, true);
								}
								fx(lN);
							}
						});
						ds.util.log("ds.controls.tabs.configure.init... configuring hljs languages", true);
						hljs.configure({languages: ['html','css','javascript']});
						ds.util.log("ds.controls.tabs.configure.init... calling ds.controls.tabs.configure.getCurrentSettings();", true);
						setTimeout(ds.controls.tabs.configure.getCurrentSettings,15);
					},
					getCurrentSettings: function(){
						ds.util.getSettingsForCurrentPage(function(formSettings){
							var masterSettings = formSettings.masterSettings;
							if ( typeof(formSettings.relatedRecords) !== "undefined" ) {
								for ( var iFS = 0; iFS < formSettings.relatedRecords.length; iFS++ ) {
									var currRelatedListSettings = formSettings.relatedRecords[iFS]; 
									ds.controls.tabs.configure.populateCurrentSettings(currRelatedListSettings);
								}
							}
							ds.stor.tabsConfigNew = ds.$(".ds-config-tab-wrapper").eq(0);
							ds.stor.tabsConfigNewHeader = ds.$(".ds-config-tab-header").eq(0);
							ds.$(".ds-config-tab-wrapper").eq(0).remove();
							ds.$(".ds-config-tab-header").eq(0).remove();
							ds.stor.newHTMLTabHeader = ds.$("H3.ds-htmlTab").eq(0);
							ds.stor.newHTMLTabContent = ds.$("DIV.ds-htmlTab").eq(0);
							ds.$("H3.ds-htmlTab").eq(0).remove();
							ds.$("DIV.ds-htmlTab").eq(0).remove();
							if ( typeof(formSettings.relatedRecordsSettings) !== "undefined" ) {
								if ( typeof(formSettings.relatedRecordsSettings.hideAddRelatedRecordButtons) !== "undefined" ) {
									if ( formSettings.relatedRecordsSettings.hideAddRelatedRecordButtons === true ) {
										ds.$("#chkHideAddRelatedRecordsButtons").prop("checked",true);
									}
									else {
										ds.$("#chkHideAddRelatedRecordsButtons").prop("checked",false);
									}
								}
								else {
									ds.$("#chkHideAddRelatedRecordsButtons").prop("checked",false);
								}
								if ( typeof(formSettings.relatedRecordsSettings.hideFilterTab) !== "undefined" ) {
									if ( formSettings.relatedRecordsSettings.hideFilterTab === true ) {
										ds.$("#chkHideFilterTab").prop("checked",true);
									}
									else {
										ds.$("#chkHideFilterTab").prop("checked",false);
									}
								}
								else {
									ds.$("#chkHideFilterTab").prop("checked",false);
								}
							}
							try{
								eval("formSettings.masterSettings.initFx = "+ formSettings.masterSettings.initFx +";");
								ds.$(".ds-tabs-masterSettings-initFx-js,.ds-masterSettings-initFx-js").text(js_beautify(ds.util.getFunctionCode(formSettings.masterSettings.initFx)));
							}catch(err){}
							try{
								eval("formSettings.masterSettings.afterFx = "+ formSettings.masterSettings.afterFx +";");
								ds.$(".ds-tabs-masterSettings-afterFx-js,.ds-masterSettings-afterFx-js").text(js_beautify(ds.util.getFunctionCode(formSettings.masterSettings.afterFx)));
							}catch(err){}
							setTimeout(ds.controls.tabs.configure.setupTabEventsForConfigGUI,15);
						});
					},
					populateCurrentSettings: function(currFS){
						var tabIndex = ds.$(".ds-config-tab-header:not(.masterSettings)").length - 1;
						if ( currFS.listName !== "HTML" ) {
							var $clonedHeader = ds.$(".ds-config-tab-header").eq(0).clone(true);
							$clonedHeader.attr("restListName",currFS.listName.toLowerCase());
							$clonedHeader.find(".ds-config-tab-header-tabName").text(currFS.listName);
							$clonedHeader.find(".ds-config-tab-index").text(tabIndex);
							$clonedHeader.attr("tabIndex",tabIndex);
							$clonedHeader.appendTo(ds.$(".ds-config-gui-tabs").eq(0));
							var $cloned = ds.$(".ds-config-tab-wrapper").eq(0).clone(true);
							$cloned.attr("restListName",currFS.listName.toLowerCase());
							$cloned.attr("tabIndex",tabIndex);
							$cloned.find(".ds-tab-list-name").val(currFS.listName.toLowerCase());
							$cloned.find(".ds-tab-list-Fa-class").val(currFS.listFaClass);
							$cloned.find(".ds-tab-display-text").val(currFS.tabText);
							$cloned.find(".ds-tab-header-html").text(html_beautify(currFS.tabHeaderHTML));
							/* Add fields available via REST to this list's tab config fieldInternalName drop-down*/
							for ( restFieldName in ds.stor.listFields[currFS.listName.toLowerCase()] ) {
								if ( typeof(restFieldName) !== "object" ) {
									if ( $cloned.find(".ds-tab-table-field-fin OPTION:contains('"+ restFieldName +"')").length < 1 ) {
										$cloned.find(".ds-tab-table-field-fin").append("<option value='"+ restFieldName +"'>"+ restFieldName +"</option>");
									}
								}
							}
							/* Populate tab table fields section with currently defined configuration*/
							for ( var fld = 0; fld < currFS.tabTableFields.length; fld++ ) {
								var $cFld = $cloned.find(".ds-tab-table-field").eq(0).clone();
								/* select fin*/
								$cFld.find(".ds-tab-table-field-fin OPTION").each(function(){
									if ( ds.$(this).text().toLowerCase() === currFS.tabTableFields[fld].fin.toLowerCase() ) {
										ds.$(this).prop("selected",true);
										return false;
									}
								});
								$cFld.find(".ds-tab-table-field-fin").attr("oldValue",currFS.tabTableFields[fld].fin.toLowerCase());
								/* some fins for lookup fields have Id at the end of the field name, others don't*/
								if ( $cFld.find(".ds-tab-table-field-fin").val() === "" ) {
									$cFld.find(".ds-tab-table-field-fin OPTION").each(function(){
										if ( ds.$(this).text().toLowerCase() === currFS.tabTableFields[fld].fin.replace("Id","").toLowerCase() ) {
											ds.$(this).prop("selected",true);
											return false;
										}
									});
								}
								$cFld.find(".ds-tab-table-field-label").val(currFS.tabTableFields[fld].label);
								if ( $cFld.find(".ds-tab-table-field-fin").val() === "HTMLSnippit" ) {
									$cFld.find(".ds-tab-table-field-formatAs").parents("TD").eq(0).remove();
									$cFld.find(".ds-tab-table-field-formatString").parents("TD").eq(0).remove();
									$cFld.find(".ds-tab-table-field-widthPx").val(currFS.tabTableFields[fld].widthPx);
									$cFld.find(".ds-tab-table-field-textAlign").val(currFS.tabTableFields[fld].textAlign);
									$cFld.find(".ds-tab-table-field-verticalAlign").val(currFS.tabTableFields[fld].verticalAlign);
									$cFld.children("TD").eq(1).after("<td colspan='2'>"+ds.controls.codeEditor.generate("html","ds-tab-table-field-htmlsnippit")+"</td>");
									$cFld.find(".ds-tab-table-field-htmlsnippit").text(currFS.tabTableFields[fld].formatAs);
									$cFld.find(".ds-tab-table-field-fin").children().each(function(){
										if ( ds.$(this).val() !== 'HTMLSnippit' ) {
											ds.$(this).remove();
										}
									});
								}
								else { 
									$cFld.find(".ds-tab-table-field-formatAs").val(currFS.tabTableFields[fld].formatAs);
									$cFld.find(".ds-tab-table-field-formatString").val(currFS.tabTableFields[fld].formatString);
									$cFld.find(".ds-tab-table-field-widthPx").val(currFS.tabTableFields[fld].widthPx);
									$cFld.find(".ds-tab-table-field-textAlign").val(currFS.tabTableFields[fld].textAlign);
									$cFld.find(".ds-tab-table-field-verticalAlign").val(currFS.tabTableFields[fld].verticalAlign);
								}
								$cFld.find(".ds-tab-table-field-index").text(fld);
								$cFld.appendTo($cloned.find('.ds-tab-table-fields-tbody'));
							}
							$cloned.find(".ds-tab-table-field").eq(0).remove();
							$cloned.find(".ds-tab-footerButton-html").text(html_beautify(currFS.tabFooterHTML));
							$cloned.find(".ds-tab-saveNewFx-js").text(js_beautify(ds.util.getFunctionCode(currFS.psudoPopupSaveNewFx)));
							$cloned.find(".ds-tab-saveUpdateFx-js").text(js_beautify(ds.util.getFunctionCode(currFS.psudoPopupSaveUpdateFx)));
							$cloned.appendTo(ds.$(".ds-config-gui-tabs").eq(0));
						}
						else {
							var $clonedHeader = ds.$(".ds-config-tab-header.ds-htmlTab").eq(0).clone(true);
							$clonedHeader.attr("restListName",currFS.listName.toLowerCase());
							$clonedHeader.find(".ds-config-tab-header-tabName").text(currFS.listName+": "+currFS.tabText);
							$clonedHeader.find(".ds-config-tab-index").text(tabIndex);
							$clonedHeader.attr("tabIndex",tabIndex);
							$clonedHeader.appendTo(ds.$(".ds-config-gui-tabs").eq(0));
							var $cloned = ds.$(".ds-config-tab-wrapper.ds-htmlTab").eq(0).clone(true);
							$cloned.attr("restListName",currFS.listName.toLowerCase());
							$cloned.attr("tabIndex",tabIndex);
							$cloned.find(".ds-tab-list-name").val(currFS.listName.toLowerCase());
							$cloned.find(".ds-tab-list-Fa-class").val(currFS.listFaClass);
							$cloned.find(".ds-tab-display-text").val(currFS.tabText);
							$cloned.find(".ds-htmlTab-html-content").text(html_beautify(currFS.tabHeaderHTML));
							$cloned.find(".ds-htmlTab-afterFx-js").text(html_beautify(currFS.tabFooterHTML));
							$cloned.appendTo(ds.$(".ds-config-gui-tabs").eq(0));
						}
					},
					setupGlobalEventsForConfigGUI: function(){
						/* global cancel button (hide configure GUI)*/
						ds.$(".ds-tabs-config-btn-cancel").click(function(){
							if ( ds.$("#accordionListForm_"+ds.$("#pageContentTitle").text().trim()).length > 0 ) {
								ds.$("#DeltaPlaceHolderMain > DIV:eq(1)").append(ds.$("#onetIDListForm"));
								ds.$("#pageContentTitle").show();
								ds.$("#accordionListForm_"+ds.$("#pageContentTitle").text().trim()).remove();
							}
							ds.$(".ds-config-gui-tabs").remove();
							ds.$(".ds-relatedRecordsUI").show();
						});
						/* global save configuration button*/
						ds.$(".ds-tabs-config-btn-save").click(function(){
							var arrAllTabSettings = [];
							ds.$(".ds-config-tab-wrapper:not(.masterSettings):not(.relatedRecordsSettings)").each(function(){
								if ( ds.$(this).hasClass("ds-htmlTab") === false ) {
									var thisTab = {};
									thisTab.listName = ds.$(this).find(".ds-tab-list-name").val();
									thisTab.listFaClass = ds.$(this).find(".ds-tab-list-Fa-class").val();
									thisTab.tabText = ds.$(this).find(".ds-tab-display-text").val();
									thisTab.tabHeaderHTML = ds.util.escapeJS(ds.util.minifyJS(ds.$(this).find(".ds-tab-header-html").text()));
									thisTab.tabTableFields = [];
									ds.$(this).find(".ds-tab-table-fields-tbody TR").each(function(){
										var oTF = {};
										oTF.fin = ds.$(this).find(".ds-tab-table-field-fin OPTION:selected").val();
										oTF.label = ds.$(this).find(".ds-tab-table-field-label").val();
										try{oTF.formatAs = ds.$(this).find(".ds-tab-table-field-formatAs").val();}catch(err){oTF.formatAs = '';}
										if ( oTF.fin === 'HTMLSnippit' ) {
											try{
												oTF.formatAs = ds.util.escapeJS(ds.util.minifyJS(ds.$(this).find(".ds-tab-table-field-htmlsnippit").text()));
											}
											catch(err){
												oTF.formatAs = '';
											}
										}
										try{oTF.formatString = ds.$(this).find(".ds-tab-table-field-formatString").val();}catch(err){oTF.formatString = '';}
										try{oTF.widthPx = ds.$(this).find(".ds-tab-table-field-widthPx").val();}catch(err){oTF.widthPx = '';}
										try{oTF.textAlign = ds.$(this).find(".ds-tab-table-field-textAlign").val();}catch(err){oTF.textAlign = '';}
										try{oTF.verticalAlign = ds.$(this).find(".ds-tab-table-field-verticalAlign").val();}catch(err){oTF.verticalAlign = '';}
										thisTab.tabTableFields.push(oTF);
									});
									thisTab.tabFooterHTML = ds.util.escapeJS(ds.util.minifyJS(ds.$(this).find(".ds-tab-footerButton-html").text()));
									thisTab.psudoPopupSaveNewFx = ds.util.escapeJS(ds.util.minifyJS(ds.$(this).find(".ds-tab-saveNewFx-js").text()));
									thisTab.psudoPopupSaveUpdateFx = ds.util.escapeJS(ds.util.minifyJS(ds.$(this).find(".ds-tab-saveUpdateFx-js").text()));
									arrAllTabSettings.push(thisTab);
								}
								else {
									var thisTab = {};
									thisTab.listName = "HTML";
									thisTab.tabText = ds.$(this).find(".ds-tab-display-text").val();
									thisTab.listFaClass = ds.$(this).find(".ds-tab-list-Fa-class").val();
									thisTab.tabHeaderHTML = ds.util.escapeJS(ds.util.minifyJS(ds.$(this).find(".ds-htmlTab-html-content").text()));
									thisTab.tabFooterHTML = ds.util.escapeJS(ds.util.minifyJS(ds.$(this).find(".ds-htmlTab-afterFx-js").text()));
									arrAllTabSettings.push(thisTab);
								}
							});
							var masterSettings = {}, relatedRecordsSettings = {};
							relatedRecordsSettings.hideAddRelatedRecordButtons = ds.$("#chkHideAddRelatedRecordsButtons").prop("checked");
							relatedRecordsSettings.hideFilterTab = ds.$("#chkHideFilterTab").prop("checked");
							masterSettings.initFx = ds.util.escapeJS(ds.util.minifyJS(ds.$(".ds-tabs-masterSettings-initFx-js").text()));
							masterSettings.afterFx = ds.util.escapeJS(ds.util.minifyJS(ds.$(".ds-tabs-masterSettings-afterFx-js").text()));
							var jsonBlob = {"masterSettings": masterSettings};
							jsonBlob["relatedRecordsSettings"] = relatedRecordsSettings;
							if ( arrAllTabSettings.length > 0 ) {
								jsonBlob["relatedRecords"] = arrAllTabSettings;
							}
							/* get record ID from dsFormSettings to update*/
							var nID = ds.stor.formSettingsId;
							ds.util.log("found record to update in dsFormSettings for current form", true);
							ds.rest.list.item.update({"blbRelRecs":JSON.stringify(jsonBlob)}, ds.lists.dsformsettings.Id, nID, function(){
								var bResponse = confirm("settings have been saved. reload the page?");
								if ( bResponse === false ) {
									ds.$(".ds-config-gui-tabs").remove();
									ds.$(".ds-relatedRecordsUI").show();
								}
								else {
									window.location.reload();
								}
							});
						});
						/* global add new tab button*/
						ds.$(".ds-tabs-config-btn-new").click(function(){
							var tabIndex = ds.$(".ds-config-tab-wrapper:not(.masterSettings)").length+1;
							var tabName = prompt("Enter tab rest list name");
							var $head = ds.$(ds.stor.tabsConfigNewHeader).clone(true);
							$head.attr("restlistname",tabName).attr("tabindex",tabIndex);
							$head.find(".ds-config-tab-index").text(tabIndex);
							$head.find(".ds-config-tab-header-tabName").text(tabName);
							ds.$(".ds-config-gui-tabs").eq(0).append($head);
							var $content = ds.$(ds.stor.tabsConfigNew).clone(true);
							$content.attr("tabindex",tabIndex).attr("restlistname",tabName);
							$content.find(".ds-tab-display-text").val(tabName);
							ds.$(".ds-config-gui-tabs").eq(0).append($content);
							/* need to setup events*/
							$content.find(".ds-tab-list-name OPTION:contains('"+tabName+"')").prop("selected",true);
							/* Add fields available via REST to this list's tab config fieldInternalName drop-down*/
							for ( restFieldName in ds.stor.listFields[tabName] ) {
								if ( typeof(restFieldName) !== "object" ) {
									if ( $content.find(".ds-tab-table-field-fin OPTION:contains('"+ restFieldName +"')").length < 1 ) {
										$content.find(".ds-tab-table-field-fin").append("<option value='"+ restFieldName +"'>"+ restFieldName +"</option>");
									}
								}
							}
							/* show list rest fields when the tab list name dropdown is changed*/
							$content.find(".ds-tab-list-name").each(function(){
								ds.$(this).change(function(){
									ds.$(this).parents(".ds-config-tab-wrapper").eq(0).find(".ds-tab-table-field-fin OPTION").each(function(iFIN, elmFIN){
										if ( iFIN <= 1 ) { 
											/*nothing*/
										}
										else {
											ds.$(this).remove();
										}
									});
									var restListName = ds.$(this).val();
									for ( restFieldName in ds.stor.listFields[restListName] ) {
										if ( typeof(restFieldName) !== "object" ) {
											if ( ds.$(this).parents(".ds-config-tab-wrapper").eq(0).find(".ds-tab-table-field-fin OPTION:contains('"+ restFieldName +"')").length < 1 ) {
												ds.$(this).parents(".ds-config-tab-wrapper").eq(0).find(".ds-tab-table-field-fin").append("<option value='"+ restFieldName +"'>"+ restFieldName +"</option>");
											}
										}
									}
								});
							});
							/* setup this tab config's accordion functionality*/
							$head.find(".ds-config-tab-header-tabName").on("click", function(){
								if ( ds.$(this).parents(".ds-config-tab-header").eq(0).next().css("display") === "none" ) {
									ds.$(this).parents(".ds-config-tab-header").eq(0).next().slideDown();
								}
								else {
									ds.$(this).parents(".ds-config-tab-header").eq(0).next().slideUp();
								}
							});
							$head.find(".ds-config-tab-move-up").click(function(){
								ds.util.log("Attempting to move tab up... css cursor = "+ ds.$(this).css("cursor") ,true);
								if ( ds.$(this).css("cursor") === "pointer" ) {
									var $head = ds.$(this).parents(".ds-config-tab-header").eq(0);
									var $content = ds.$(this).parents(".ds-config-tab-header").next().eq(0);
									var currIndex = parseInt($head.attr("tabindex"),10);
									$head.insertBefore(".ds-config-tab-header[tabindex='"+(currIndex-1)+"']");
									$content.insertBefore(".ds-config-tab-header[tabindex='"+(currIndex-1)+"']");
									ds.$(".ds-config-tab-header[tabindex='"+(currIndex-1)+"']").attr("tabindex",currIndex).find(".ds-config-tab-index").text(currIndex);
									ds.$(".ds-config-tab-wrapper[tabindex='"+(currIndex-1)+"']").attr("tabindex",currIndex);
									$head.attr("tabindex",(currIndex-1));
									$head.find(".ds-config-tab-index").text((currIndex-1));
									$content.attr("tabindex",(currIndex-1));
								}
							});
							$head.find(".ds-config-tab-move-down").click(function(){
								ds.util.log("Attempting to move tab down... css cursor = "+ ds.$(this).css("cursor") ,true);
								if ( ds.$(this).css("cursor") === "pointer" ) {
									var $head = ds.$(this).parents(".ds-config-tab-header").eq(0);
									var $content = ds.$(this).parents(".ds-config-tab-header").next().eq(0);
									var currIndex = parseInt($head.attr("tabindex"),10);
									$content.insertAfter(".ds-config-tab-wrapper[tabindex='"+(currIndex+1)+"']");
									$head.insertAfter(".ds-config-tab-wrapper[tabindex='"+(currIndex+1)+"']");
									ds.$(".ds-config-tab-header[tabindex='"+(currIndex+1)+"']").attr("tabindex",currIndex).find(".ds-config-tab-index").text(currIndex);
									ds.$(".ds-config-tab-wrapper[tabindex='"+(currIndex+1)+"']").attr("tabindex",currIndex);
									$head.attr("tabindex",(currIndex+1));
									$head.find(".ds-config-tab-index").text((currIndex+1));
									$content.attr("tabindex",(currIndex+1));
								}
							});
							/* setup auto-preview functionality for FA icon class*/
							$content.find(".ds-tab-list-Fa-class").change(function(){
								ds.$(this).next().removeClass();
								ds.$(this).next().addClass("ds-tab-list-Fa-class-preview").addClass("fa");
								ds.$(this).next().addClass(ds.$(this).val());
							}).dblclick(function(){
								ds.$(this).next().removeClass();
								ds.$(this).next().addClass("ds-tab-list-Fa-class-preview").addClass("fa");
								ds.$(this).next().addClass(ds.$(this).val());
							});
							/* setup codeEditor events*/
							$content.find(".ds-tab-saveNewFx-js").html("function(){}");
							$content.find(".ds-tab-saveUpdateFx-js").html("function(nID){}");
							ds.controls.codeEditor.setupEventsFx($content.find(".ds-tab-header-html"));
							ds.controls.codeEditor.setupEventsFx($content.find(".ds-tab-footerButton-html"));
							ds.controls.codeEditor.setupEventsFx($content.find(".ds-tab-saveNewFx-js"));
							ds.controls.codeEditor.setupEventsFx($content.find(".ds-tab-saveUpdateFx-js"));
							/* setup related records fields buttons*/
							$content.find(".ds-tab-table-field-gui-clone").click(function(){
								var $cloned = ds.$(this).parents("tr").eq(0).clone(true);
								var tabRestListName = ds.$(this).parents(".ds-config-tab-wrapper").attr("restlistname");
								$cloned.find(".ds-tab-table-field-index").text(ds.controls.tabs.configure.getNextTabTableFieldIndex(".ds-config-tab-wrapper[restlistname='"+tabRestListName+"']"));
								$cloned.appendTo(ds.$(this).parents("tbody").eq(0));
							});
							$content.find(".ds-tab-table-field-gui-delete").click(function(){
								ds.$(this).parents("tr").eq(0).remove();
							});
							$content.find(".ds-tab-table-field-gui-up").click(function(){
								var moveRow = ds.$(this).parents("tr").eq(0);
								var newIndex = ds.$(this).parents("tr").eq(0).prev().find(".ds-tab-table-field-index").text();
								var oldIndex = ds.$(this).parents("tr").eq(0).find(".ds-tab-table-field-index").text();
								moveRow.find(".ds-tab-table-field-index").text(newIndex);
								ds.$(this).parents("tr").eq(0).prev().find(".ds-tab-table-field-index").text(oldIndex);
								ds.$(this).parents("tr").eq(0).prev().before(moveRow);
							});
							$content.find(".ds-tab-table-field-gui-down").click(function(){
								var moveRow = ds.$(this).parents("tr").eq(0);
								var newIndex = ds.$(this).parents("tr").eq(0).next().find(".ds-tab-table-field-index").text();
								var oldIndex = ds.$(this).parents("tr").eq(0).find(".ds-tab-table-field-index").text();
								moveRow.find(".ds-tab-table-field-index").text(newIndex);
								ds.$(this).parents("tr").eq(0).next().find(".ds-tab-table-field-index").text(oldIndex);
								ds.$(this).parents("tr").eq(0).next().after(moveRow);
							});
							$content.find(".ds-tab-table-fields-config-btn-new").click(function(){
								var tabRestListName = ds.$(this).parents(".ds-config-tab-wrapper").find(".ds-tab-list-name").val();
								var tabTableFieldIndex = ds.controls.tabs.configure.getNextTabTableFieldIndex(".ds-config-tab-wrapper[restlistname='"+tabRestListName+"']");
								ds.$(this).parents(".ds-config-tab-wrapper").eq(0).find(".ds-tab-all-table-fields > TBODY").append(ds.stor.tabTableFieldsNew.clone());
								ds.util.log("Adding tab table field row for list |"+ ds.$(this).parents(".ds-config-tab-wrapper").find(".ds-tab-list-name").val() +"|", true);
								ds.$(this).parents(".ds-config-tab-wrapper").eq(0).find(".ds-tab-all-table-fields > TBODY > TR:last-child").find(".ds-tab-table-field-index").text(tabTableFieldIndex);
								/* Add fields available via REST to this list's tab config fieldInternalName drop-down*/
								for ( prop in ds.lists[ds.$(this).parents(".ds-config-tab-wrapper").find(".ds-tab-list-name").val()].items.results[0] ) {
									var restFieldName = prop;
									if ( typeof(restFieldName) !== "object" ) {
										ds.$(this).parents(".ds-config-tab-wrapper").eq(0).find(".ds-tab-all-table-fields > TBODY > TR:last-child").find(".ds-tab-table-field-fin").append("<option value='"+ restFieldName +"'>"+ restFieldName +"</option>");
									}
								}
								/* setup clone and delete events*/
								ds.$(this).parents(".ds-config-tab-wrapper").eq(0).find(".ds-tab-all-table-fields > TBODY > TR:last-child").find(".ds-tab-table-field-gui-clone").click(function(){
									ds.$(this).parents("tr").eq(0).clone(true).appendTo(ds.$(this).parents("tbody").eq(0));
								});
								ds.$(this).parents(".ds-config-tab-wrapper").eq(0).find(".ds-tab-all-table-fields > TBODY > TR:last-child").find(".ds-tab-table-field-gui-delete").click(function(){
									ds.$(this).parents("tr").eq(0).remove();
								});
								ds.$(this).parents(".ds-config-tab-wrapper").eq(0).find(".ds-tab-all-table-fields > TBODY > TR:last-child").find(".ds-tab-table-field-gui-up").click(function(){
									var moveRow = ds.$(this).parents("tr").eq(0);
									var newIndex = ds.$(this).parents("tr").eq(0).prev().find(".ds-tab-table-field-index").text();
									var oldIndex = ds.$(this).parents("tr").eq(0).find(".ds-tab-table-field-index").text();
									moveRow.find(".ds-tab-table-field-index").text(newIndex);
									ds.$(this).parents("tr").eq(0).prev().find(".ds-tab-table-field-index").text(oldIndex);
									ds.$(this).parents("tr").eq(0).prev().before(moveRow);
								});
								
								ds.$(this).parents(".ds-config-tab-wrapper").eq(0).find(".ds-tab-all-table-fields > TBODY > TR:last-child").find(".ds-tab-table-field-gui-down").click(function(){
									var moveRow = ds.$(this).parents("tr").eq(0);
									var newIndex = ds.$(this).parents("tr").eq(0).next().find(".ds-tab-table-field-index").text();
									var oldIndex = ds.$(this).parents("tr").eq(0).find(".ds-tab-table-field-index").text();
									moveRow.find(".ds-tab-table-field-index").text(newIndex);
									ds.$(this).parents("tr").eq(0).next().find(".ds-tab-table-field-index").text(oldIndex);
									ds.$(this).parents("tr").eq(0).next().after(moveRow);
								});
								/* setup HTMLSnippit*/
								ds.$(this).parents(".ds-config-tab-wrapper").eq(0).find(".ds-tab-all-table-fields > TBODY > TR:last-child").find(".ds-tab-table-field-fin").each(function(){
									ds.$(this).change(function(){
										if ( ds.$(this).val() === 'HTMLSnippit' ) {
											ds.$(this).children().each(function(){
												if ( ds.$(this).val() !== 'HTMLSnippit' ) {
													ds.$(this).remove();
												}
											});
											ds.$(this).parents("tr").eq(0).children("TD").each(function(iTD, elmTD){
												if ( iTD >= 2 && iTD <= 3 ) {
													ds.$(elmTD).remove();
												}
											});
											ds.$(this).parents("tr").eq(0).children("TD").eq(1).after("<td colspan='2'>"+ds.controls.codeEditor.generate("html","ds-tab-table-field-htmlsnippit")+"</td>");
											ds.controls.codeEditor.setupEventsFx(".ds-tab-table-field-htmlsnippit");
										}
									});
								});
							});
							/* setup HTMLSnippit functionality*/
							$content.find(".ds-tab-table-field-fin").each(function(){
								ds.$(this).change(function(){
									if ( ds.$(this).val() === 'HTMLSnippit' ) {
										ds.$(this).children().each(function(){
											if ( ds.$(this).val() !== 'HTMLSnippit' ) {
												ds.$(this).remove();
											}
										});
										ds.$(this).parents("tr").eq(0).children("TD").each(function(iTD, elmTD){
											if ( iTD >= 2 && iTD <= 3 ) {
												ds.$(elmTD).remove();
											}
										});
										ds.$(this).parents("tr").eq(0).children("TD").eq(1).after("<td colspan='2'>"+ds.controls.codeEditor.generate("html","ds-tab-table-field-htmlsnippit")+"</td>");
										ds.controls.codeEditor.setupEventsFx(".ds-tab-table-field-htmlsnippit");
									}
								});
							});
							/* setup bottom buttons for whole tab*/
							$content.find(".ds-config-tab-table-gui-delete").click(function(){
								ds.$(this).parents(".ds-config-tab-wrapper").eq(0).prev().remove();
								ds.$(this).parents(".ds-config-tab-wrapper").eq(0).remove();
							});
							$content.find(".ds-config-tab-table-gui-clone").click(function(){
								ds.$(this).parents(".ds-config-tab-wrapper").eq(0).clone(true).appendTo(ds.$(this).parents(".ds-config-gui-tabs").eq(0));
							});
						});
						ds.$(".ds-tabs-config-btn-new-htmlTab").click(function(){
							var tabIndex = ds.$(".ds-config-tab-wrapper:not(.masterSettings)").length+1;
							var tabName = prompt("Enter tab name");
							var $head = ds.stor.newHTMLTabHeader.clone(true);
							var $content = ds.stor.newHTMLTabContent.clone(true);
							$head.find(".ds-config-tab-index").text(tabIndex);
							$head.find(".ds-config-tab-header-tabName").text(tabName);
							$head.attr("tabIndex",tabIndex);
							$content.find(".ds-tab-display-text").val(tabName);
							$content.attr("tabIndex",tabIndex);
							$head.appendTo(".ds-config-gui-tabs");
							$content.appendTo(".ds-config-gui-tabs");
							/* setup this tab config's accordion functionality*/
							$head.find(".ds-config-tab-header-tabName").on("click", function(){
								if ( ds.$(this).parents(".ds-config-tab-header").eq(0).next().css("display") === "none" ) {
									ds.$(this).parents(".ds-config-tab-header").eq(0).next().slideDown();
								}
								else {
									ds.$(this).parents(".ds-config-tab-header").eq(0).next().slideUp();
								}
							});
							/* setup auto-preview functionality for FA icon class*/
							$content.find(".ds-tab-list-Fa-class").change(function(){
								ds.$(this).next().removeClass();
								ds.$(this).next().addClass("ds-tab-list-Fa-class-preview").addClass("fa");
								ds.$(this).next().addClass(ds.$(this).val());
							}).dblclick(function(){
								ds.$(this).next().removeClass();
								ds.$(this).next().addClass("ds-tab-list-Fa-class-preview").addClass("fa");
								ds.$(this).next().addClass(ds.$(this).val());
							});
							/* setup codeEditor events*/
							ds.controls.codeEditor.setupEventsFx($content.find(".ds-htmlTab-html-content"));
							ds.controls.codeEditor.setupEventsFx($content.find(".ds-htmlTab-afterFx-js"));
						});
					},
					getNextTabTableFieldIndex: function(jqSelTabConfigWrapper){
						var iLastIndex = new Number(ds.$(jqSelTabConfigWrapper).find(".ds-tab-all-table-fields TR.ds-tab-table-field").eq(ds.$(jqSelTabConfigWrapper).find(".ds-tab-all-table-fields TR.ds-tab-table-field").length - 1).find(".ds-tab-table-field-index").text());
						iLastIndex = iLastIndex + 1;
						return iLastIndex;
					},
					tabTableFieldHTMLSnippit: function(){
						ds.$(".ds-config-tab-wrapper").find(".ds-tab-all-table-fields > TBODY > TR").find(".ds-tab-table-field-fin").each(function(){
							ds.$(this).off("change").on("change", ds.controls.tabs.configure.dsTabTableFieldFinChange);
						});
					},
					dsTabTableFieldFinChange: function(e){
						if ( ds.$(this).val() === 'HTMLSnippit' ) {
							ds.$(this).children().each(function(){
								if ( ds.$(this).val() !== 'HTMLSnippit' ) {
									if ( !ds.$(this).parent().attr("oldvalue") === false ) {
										if ( ds.$(this).parent().attr("oldvalue").toLowerCase() !== ds.$(this).val().toLowerCase() ) {
											ds.util.log("hiding |"+ds.$(this).val().toLowerCase()+"| because it is not === |"+ ds.$(this).parent().attr("oldvalue") +"|");
											ds.$(this).hide();
										}
									}
									else {
										ds.util.log("hiding |"+ds.$(this).val().toLowerCase()+"|");
										ds.$(this).hide();
									}
								}
							});
							ds.$(this).parents("tr").eq(0).children("TD").each(function(iTD, elmTD){
								if ( iTD >= 2 && iTD <= 3 ) {
									ds.$(elmTD).hide();
								}
							});
							ds.$(this).parents("tr").eq(0).children("TD").eq(1).after("<td colspan='2'>"+ds.controls.codeEditor.generate("html","ds-tab-table-field-htmlsnippit")+"</td>");
							ds.controls.codeEditor.setupEventsFx(".ds-tab-table-field-htmlsnippit");
						}
						else {
							ds.$(this).attr("oldvalue",ds.$(this).val());
							ds.$(this).parents("tr").eq(0).find("TD[colspan=2]").remove();
							ds.$(this).parents("tr").eq(0).children("TD").each(function(iTD, elmTD){
								ds.$(this).show();
							});
							ds.$(this).children().each(function(){
								ds.$(this).show();
							});
						}
					},
					tabTableFieldClone: function(e){
						var $cloned = ds.$(this).parents("tr").eq(0).clone(true);
						var tabRestListName = ds.$(this).parents(".ds-config-tab-wrapper").attr("restlistname");
						ds.$(this).parents("tr").eq(0).find("TD SELECT").each(function(i,elm){
							$cloned.find("TD SELECT").eq(i).val(ds.$(this).val());
						});
						$cloned.find(".ds-tab-table-field-index").text(ds.controls.tabs.configure.getNextTabTableFieldIndex(".ds-config-tab-wrapper[restlistname='"+tabRestListName+"']"));
						$cloned.appendTo(ds.$(this).parents("tbody").eq(0));			
					},
					tabTableFieldWidthAdjust: function(e){
						try{
							ds.$(".ds-relatedRecordsUI").show();
							ds.$(".ds-config-gui-tabs").hide();
							ds.$("li.ds-psudo-tab[listname='"+ds.$(this).parents(".ds-config-tab-wrapper").attr("restlistname")+"']").click();
							var iCol = new Number(ds.$(this).parents("TR").eq(0).find(".ds-tab-table-field-index").text());
							ds.util.log(ds.$(this).parents(".ds-config-tab-wrapper").find(".ds-tab-display-text").val(),true);
							var $content = ds.$(".ds-tabContentDiv#tabs"+ds.$(this).parents(".ds-config-tab-wrapper").find(".ds-tab-display-text").val());
							ds.util.log($content,true);
							ds.util.log($content.find(".ds-tabContentHeader > table tr.ds-headerRow > td").eq(iCol).length,true);
							var newWidth = ds.$(this).val();
							$content.find(".ds-tabContentHeader > table tr.ds-headerRow > td").eq(iCol).width(newWidth);
							ds.util.log($content.find(".ds-tabContentScroll > table tr.ds-dataRow").length,true);
							$content.find(".ds-tabContentScroll > table tr.ds-dataRow").each(function(){
								ds.$(this).find("td").eq(iCol).width(newWidth);
							});
							setTimeout(function(){
								ds.$(".ds-relatedRecordsUI").hide();
								ds.$(".ds-config-gui-tabs").show();
							},3210);
						}
						catch(err){
							ds.$(".ds-relatedRecordsUI").hide();
							ds.$(".ds-config-gui-tabs").show();
						}
					},
					tabTableFieldDelete: function(e){
						ds.$(this).parents("tr").eq(0).remove();
					},
					tabTableFieldUp: function(e){
						var moveRow = ds.$(this).parents("tr").eq(0);
						var newIndex = ds.$(this).parents("tr").eq(0).prev().find(".ds-tab-table-field-index").text();
						var oldIndex = ds.$(this).parents("tr").eq(0).find(".ds-tab-table-field-index").text();
						moveRow.find(".ds-tab-table-field-index").text(newIndex);
						ds.$(this).parents("tr").eq(0).prev().find(".ds-tab-table-field-index").text(oldIndex);
						ds.$(this).parents("tr").eq(0).prev().before(moveRow);
					},
					tabTableFieldDown: function(e){
						var moveRow = ds.$(this).parents("tr").eq(0);
						var newIndex = ds.$(this).parents("tr").eq(0).next().find(".ds-tab-table-field-index").text();
						var oldIndex = ds.$(this).parents("tr").eq(0).find(".ds-tab-table-field-index").text();
						moveRow.find(".ds-tab-table-field-index").text(newIndex);
						ds.$(this).parents("tr").eq(0).next().find(".ds-tab-table-field-index").text(oldIndex);
						ds.$(this).parents("tr").eq(0).next().after(moveRow);
					},
					tabTableFieldNew: function(e){
						var tabRestListName = ds.$(this).parents(".ds-config-tab-wrapper").find(".ds-tab-list-name").val();
						var tabTableFieldIndex = ds.controls.tabs.configure.getNextTabTableFieldIndex(".ds-config-tab-wrapper[restlistname='"+tabRestListName+"']");
						ds.$(this).parents(".ds-config-tab-wrapper").eq(0).find(".ds-tab-all-table-fields > TBODY").append(ds.stor.tabTableFieldsNew.clone());
						ds.util.log("Adding tab table field row for list |"+ ds.$(this).parents(".ds-config-tab-wrapper").find(".ds-tab-list-name").val() +"|", true);
						ds.$(this).parents(".ds-config-tab-wrapper").eq(0).find(".ds-tab-all-table-fields > TBODY > TR:last-child").find(".ds-tab-table-field-index").text(tabTableFieldIndex);
						/* Add fields available via REST to this list's tab config fieldInternalName drop-down*/
						for ( prop in ds.lists[ds.$(this).parents(".ds-config-tab-wrapper").find(".ds-tab-list-name").val()].items.results[0] ) {
							var restFieldName = prop;
							if ( typeof(restFieldName) !== "object" ) {
								ds.$(this).parents(".ds-config-tab-wrapper").eq(0).find(".ds-tab-all-table-fields > TBODY > TR:last-child").find(".ds-tab-table-field-fin").append("<option value='"+ restFieldName +"'>"+ restFieldName +"</option>");
							}
						}
						/* setup clone and delete events*/
						ds.$(this).parents(".ds-config-tab-wrapper").eq(0).find(".ds-tab-all-table-fields > TBODY > TR:last-child").find(".ds-tab-table-field-gui-clone").click(function(){
							ds.$(this).parents("tr").eq(0).clone(true).appendTo(ds.$(this).parents("tbody").eq(0));
						});
						ds.$(this).parents(".ds-config-tab-wrapper").eq(0).find(".ds-tab-all-table-fields > TBODY > TR:last-child").find(".ds-tab-table-field-gui-delete").click(function(){
							ds.$(this).parents("tr").eq(0).remove();
						});
						ds.$(this).parents(".ds-config-tab-wrapper").eq(0).find(".ds-tab-all-table-fields > TBODY > TR:last-child").find(".ds-tab-table-field-gui-up").click(function(){
							var moveRow = ds.$(this).parents("tr").eq(0);
							var newIndex = ds.$(this).parents("tr").eq(0).prev().find(".ds-tab-table-field-index").text();
							var oldIndex = ds.$(this).parents("tr").eq(0).find(".ds-tab-table-field-index").text();
							moveRow.find(".ds-tab-table-field-index").text(newIndex);
							ds.$(this).parents("tr").eq(0).prev().find(".ds-tab-table-field-index").text(oldIndex);
							ds.$(this).parents("tr").eq(0).prev().before(moveRow);
						});
						
						ds.$(this).parents(".ds-config-tab-wrapper").eq(0).find(".ds-tab-all-table-fields > TBODY > TR:last-child").find(".ds-tab-table-field-gui-down").click(function(){
							var moveRow = ds.$(this).parents("tr").eq(0);
							var newIndex = ds.$(this).parents("tr").eq(0).next().find(".ds-tab-table-field-index").text();
							var oldIndex = ds.$(this).parents("tr").eq(0).find(".ds-tab-table-field-index").text();
							moveRow.find(".ds-tab-table-field-index").text(newIndex);
							ds.$(this).parents("tr").eq(0).next().find(".ds-tab-table-field-index").text(oldIndex);
							ds.$(this).parents("tr").eq(0).next().after(moveRow);
						});
						/* setup HTMLSnippit*/
						ds.$(this).parents(".ds-config-tab-wrapper").eq(0).find(".ds-tab-all-table-fields > TBODY > TR:last-child").find(".ds-tab-table-field-fin").off("change").on("change", ds.controls.tabs.configure.dsTabTableFieldFinChange);
					},
					dsConfigTabMoveUp: function(e){
						ds.util.log("Attempting to move tab up... css cursor = "+ ds.$(this).css("cursor") ,true);
						if ( ds.$(this).css("cursor") === "pointer" ) {
							var $head = ds.$(this).parents(".ds-config-tab-header").eq(0);
							var $content = ds.$(this).parents(".ds-config-tab-header").next().eq(0);
							var currIndex = parseInt($head.attr("tabindex"),10);
							$head.insertBefore(".ds-config-tab-header[tabindex='"+(currIndex-1)+"']");
							$content.insertBefore(".ds-config-tab-header[tabindex='"+(currIndex-1)+"']");
							ds.$(".ds-config-tab-header[tabindex='"+(currIndex-1)+"']").attr("tabindex",currIndex).find(".ds-config-tab-index").text(currIndex);
							ds.$(".ds-config-tab-wrapper[tabindex='"+(currIndex-1)+"']").attr("tabindex",currIndex);
							$head.attr("tabindex",(currIndex-1));
							$head.find(".ds-config-tab-index").text((currIndex-1));
							$content.attr("tabindex",(currIndex-1));
						}
					},
					dsConfigTabMoveDown: function(e){
						ds.util.log("Attempting to move tab down... css cursor = "+ ds.$(this).css("cursor") ,true);
						if ( ds.$(this).css("cursor") === "pointer" ) {
							var $head = ds.$(this).parents(".ds-config-tab-header").eq(0);
							var $content = ds.$(this).parents(".ds-config-tab-header").next().eq(0);
							var currIndex = parseInt($head.attr("tabindex"),10);
							$content.insertAfter(".ds-config-tab-wrapper[tabindex='"+(currIndex+1)+"']");
							$head.insertAfter(".ds-config-tab-wrapper[tabindex='"+(currIndex+1)+"']");
							ds.$(".ds-config-tab-header[tabindex='"+(currIndex+1)+"']").attr("tabindex",currIndex).find(".ds-config-tab-index").text(currIndex);
							ds.$(".ds-config-tab-wrapper[tabindex='"+(currIndex+1)+"']").attr("tabindex",currIndex);
							$head.attr("tabindex",(currIndex+1));
							$head.find(".ds-config-tab-index").text((currIndex+1));
							$content.attr("tabindex",(currIndex+1));
						}
					},
					setupTabEventsForConfigGUI: function(){
						ds.$(".ds-tab-table-field-gui-clone").on("click",ds.controls.tabs.configure.tabTableFieldClone);
						ds.$(".ds-tab-table-field-gui-delete").on("click",ds.controls.tabs.configure.tabTableFieldDelete);
						ds.$(".ds-tab-table-field-gui-up").on("click",ds.controls.tabs.configure.tabTableFieldUp);
						ds.$(".ds-tab-table-field-gui-down").on("click",ds.controls.tabs.configure.tabTableFieldDown);
						ds.$(".ds-tab-table-fields-config-btn-new").on("click",ds.controls.tabs.configure.tabTableFieldNew);
						ds.$(".ds-tab-table-field-widthPx").on("change",ds.controls.tabs.configure.tabTableFieldWidthAdjust);
						/* events for whole tab*/
						
						/* config delete button for the whole tab*/
						ds.$(".ds-config-tab-table-gui-delete").click(function(){
							ds.$(this).parents(".ds-config-tab-wrapper").eq(0).prev().remove();
							ds.$(this).parents(".ds-config-tab-wrapper").eq(0).remove();
						});
						/* config clone button for the whole tab*/
						ds.$(".ds-config-tab-table-gui-clone").click(function(){
							ds.$(this).parents(".ds-config-tab-wrapper").eq(0).clone(true).appendTo(ds.$(this).parents(".ds-config-gui-tabs").eq(0));
						});
						/* show initial fa icon previews*/
						ds.$(".ds-tab-list-Fa-class-preview").each(function(){
							ds.$(this).removeClass();
							ds.$(this).addClass("ds-tab-list-Fa-class-preview").addClass("fa");
							ds.$(this).addClass(ds.$(this).siblings(".ds-tab-list-Fa-class").val());
						});
						/* setup syntax highlighting for all codeEditor widgets*/
						ds.util.log("ds.controls.tabs.config.setupTabEventsForConfigGUI... calling ds.controls.codeEditor.setupEventsFx('.ds-tab-header-html,.ds-tab-footerButton-html,.ds-tab-saveNewFx-js,.ds-tab-saveUpdateFx-js,.ds-tabs-masterSettings-afterFx-js,.ds-tabs-masterSettings-initFx-js,.ds-masterSettings-initFx-js,.ds-masterSettings-afterFx-js,.ds-htmlTab-html-content,.ds-htmlTab-afterFx-js')",true);
						ds.controls.codeEditor.setupEventsFx(".ds-tab-header-html,.ds-tab-footerButton-html,.ds-tab-saveNewFx-js,.ds-tab-saveUpdateFx-js,.ds-tabs-masterSettings-afterFx-js,.ds-tabs-masterSettings-initFx-js,.ds-masterSettings-initFx-js,.ds-masterSettings-afterFx-js,.ds-htmlTab-html-content,.ds-htmlTab-afterFx-js");
						ds.util.log("ds.controls.tabs.config.setupTabEventsForConfigGUI... calling ds.controls.codeEditor.setupEventsFx('.ds-tab-table-field-htmlsnippit')",true);
						ds.controls.codeEditor.setupEventsFx(".ds-tab-table-field-htmlsnippit");
						/* show list rest fields when the tab list name dropdown is changed*/
						ds.util.log("ds.controls.tabs.config.setupTabEventsForConfigGUI... about to setup change event for .ds-tab-list-name",true);
						ds.$(".ds-tab-list-name").each(function(){
							ds.$(this).change(function(){
								ds.$(this).parents(".ds-config-tab-wrapper").eq(0).find(".ds-tab-table-field-fin OPTION").each(function(iFIN, elmFIN){
									if ( iFIN <= 1 ) { 
										/*nothing*/
									}
									else {
										ds.$(this).remove();
									}
								});
								var restListName = ds.$(this).val();
								for ( prop in ds.stor.listFields[restListName] ) {
									var restFieldName = prop;
									if ( typeof(restFieldName) !== "object" ) {
										if ( ds.$(this).parents(".ds-config-tab-wrapper").eq(0).find(".ds-tab-table-field-fin OPTION:contains('"+ restFieldName +"')").length < 1 ) {
											ds.$(this).parents(".ds-config-tab-wrapper").eq(0).find(".ds-tab-table-field-fin").append("<option value='"+ restFieldName +"'>"+ restFieldName +"</option>");
										}
									}
								}
							});
						});
						/* setup tab table field HTMLSnippit functionality*/
						ds.util.log("ds.controls.tabs.config.setupTabEventsForConfigGUI... about to setup change event for .ds-tab-table-field-fin",true);
						ds.controls.tabs.configure.tabTableFieldHTMLSnippit();
						/* events for the whole tabs config accordion*/
						ds.util.log("ds.controls.tabs.config.setupTabEventsForConfigGUI... about to collapse all tab wrapper divs",true);
						
						/* collapse all sections*/
						ds.$(".ds-config-tab-wrapper").each(function(){
							ds.$(this).slideUp();
						});
						/* setup accordion expand on click for headers*/
						ds.$(".ds-config-tab-header-tabName").on("click", function(){
							if ( ds.$(this).parents(".ds-config-tab-header").eq(0).next().css("display") === "none" ) {
								ds.$(this).parents(".ds-config-tab-header").eq(0).next().slideDown();
							}
							else {
								ds.$(this).parents(".ds-config-tab-header").eq(0).next().slideUp();
							}
						});
						
						
						ds.stor.newRelRecTabHeader = ds.$(".ds-config-tab-header").eq(0).clone(true);
						ds.stor.newRelRecTabContent = ds.$(".ds-config-tab-wrapper").eq(0).clone(true);
					
						ds.stor.tabTableFieldsNew = ds.$(".ds-tab-all-table-fields > TBODY > TR").eq(0).clone(true);
						
						if ( ds.$(".ds-tab-all-table-fields > TBODY > TR").length > 1 ) {
							ds.$(".ds-tab-all-table-fields > TBODY > TR").eq(0).hide();
						}
						/* config tab movement controls*/
						ds.$(".ds-config-tab-move-up").on("click",ds.controls.tabs.configure.dsConfigTabMoveUp);
						ds.$(".ds-config-tab-move-down").on("click",ds.controls.tabs.configure.dsConfigTabMoveDown);
						ds.$(".ds-tabs-config-btn-collapseListForm").click(function(){
							if ( ds.$(this).attr("decollapse") === "true" ) {
								ds.$("#DeltaPlaceHolderMain > DIV:eq(1)").append(ds.$("#onetIDListForm"));
								ds.$("#pageContentTitle").show();
								ds.$("#accordionListForm_"+ds.$("#pageContentTitle").text().trim()).remove();
								ds.$(this).find(".fa").removeClass("fa-chevron-down").addClass("fa-chevron-up");
								ds.$(this).html(ds.$(this).html().replace("Decollapse","Collapse"));
								ds.$(this).attr("decollapse","false");
							}
							else {
								ds.controls.accordion.arrContent = [];
								ds.controls.accordion.genSection("fa-gears","List Form: "+ ds.$("#pageContentTitle").text().trim(),"<div id='placeholderonetIDListForm'></div>");
								ds.controls.accordion.init(function(){
									ds.$("#placeholderonetIDListForm").replaceWith(ds.$("#onetIDListForm"));
									setTimeout(function(){ds.$("#accordionListForm_"+ds.$("#pageContentTitle").text().trim()).find(".ds-accordionSectionHeader").click();},1000);
									ds.$("#pageContentTitle").hide();
								},"accordionListForm_"+ds.$("#pageContentTitle").text().trim());
								ds.$(this).find(".fa").removeClass("fa-chevron-up").addClass("fa-chevron-down");
								ds.$(this).html(ds.$(this).html().replace("Collapse","Decollapse"));
								ds.$(this).attr("decollapse","true");
							}
						});
						ds.$(".ds-tabs-masterSettings-initFx-wrapper > pre > code > div, .ds-tabs-masterSettings-afterFx-wrapper > pre > code > div").attr("contenteditable","false").removeClass("ms-rtestate-write").addClass("ms-rtestate-read");
					}
				}
			},
			contextMenu: {
				arrHandleRightClicks: [],
				arrAfterHandlingRightClicks: [],
				arrMenuOptions: [],
				arrMenuOptionEvents: [],
				locpos: {
					clientX: 0, 
					clientY: 0
				},
				evts: {
					mouseUp: null, 
					mouseDown: null, 
					contextMenu: null
				},
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
			},
			classicDatasheet: {
				bInitDone: false,
				bAutoShowViewRibbon: false,
				listGUID: null,
				viewGUID: null,
				$listViewOnPage: null,
				$cloned: null,
				obj: null,
				d: null, 
				s: null, 
				x: null, 
				e: null,
				viewSchema: null,
				listSchema: null,
				listData: null,
				arrH: [],
				wfRibbon: {
					intvl: null,
					counter: 0,
					pauseMS: 773,
					timeOut: 300000,
					resetIntvl: function(){
						ds.controls.classicDatasheet.wfRibbon.counter = 0;
						try{clearInterval(ds.controls.classicDatasheet.wfRibbon.intvl);}catch(err){}
						return true;
					}
				},
				waitForRibbonThenAddButton: function(){
					ds.controls.classicDatasheet.wfRibbon.resetIntvl();
					ds.util.log("ds.controls.classicDatasheet is waiting for the List or Library ribbon to appear",true);
					ds.controls.classicDatasheet.wfRibbon.intvl = setInterval(function(){
						ds.controls.classicDatasheet.wfRibbon.counter++;
						if ( !ds.$("[id='Ribbon.Library'],[id='Ribbon.List']").html() === false ) {
							if ( ds.$("[id^='Ribbon.Library.ViewFormat.DatasheetClassic'], [id^='Ribbon.List.ViewFormat.DatasheetClassic']").length < 1 ) {
								ds.controls.classicDatasheet.$listViewOnPage = ds.$(".ms-listviewtable");
								ds.controls.classicDatasheet.configureClassicDatasheetViewButton();
								ds.controls.classicDatasheet.waitForRibbonThenAddButton();
							}
						}
					},ds.controls.classicDatasheet.wfRibbon.pauseMS);
				},
				checkBrowserCompatibility: function(bQuiet){
					/* 
					Avoids the automatic redirect to an unhelpful error page when the browser can't render the datasheet view
					Errors cause the user to be redirected to:
						http://1.dsmagicsp.cloudappsportal.com/_layouts/15/error.aspx
						?ErrorID=GridViewNotWorking
						&ErrorLinkTextID=GridViewNotworkingLinkText
						&ErrorLinkNavigateUrl=http://1.dsmagicsp.cloudappsportal.com/SitePages/demo_datasheetView.aspx?ShowInGrid%3DFalse
					*/
					var oRet = false;
					if ( navigator.appName !== "Microsoft Internet Explorer" ) {
						oRet = false;
						ds.stor.session.browserName = "Unsure";
						ds.stor.session.browserSupportsActiveX = false;
						ds.stor.session.browserSupportsClassicDatasheet = false;
					}
					else {
						if ( navigator.userAgent.indexOf("MSIE") < 0 ) {
							oRet = false;
							ds.stor.session.browserName = "Unsure";
							ds.stor.session.browserSupportsActiveX = false;
							ds.stor.session.browserSupportsClassicDatasheet = false;
						}
						else {
							ds.stor.session.browserName = "Internet Explorer";
							var sVersion = navigator.userAgent.substr(navigator.userAgent.indexOf("MSIE"),15);
							sVersion = sVersion.substring(0,sVersion.indexOf(";")-1).replace("MSIE ","");
							var nVersion = parseInt(sVersion,10);
							ds.stor.session.browserVersion = nVersion;
							if ( nVersion < 7 || nVersion > 10 ) {
								oRet = false;
							}
							else { 
								var bActiveX = false;
								/* check browser's compatibility with the ListNet control (https://www.microsoft.com/en-us/download/details.aspx?id=13255) */
								try{var ActiveXobj = new ActiveXObject('ListNet.ListNet'); bActiveX = true;}catch(err){}
								if ( bActiveX === true ) {
									ds.stor.session.browserSupportsActiveX = true;
									ds.stor.session.browserSupportsClassicDatasheet = true;
									oRet = true;
								}
								else {
									ds.stor.session.browserSupportsActiveX = true;
									ds.stor.session.browserSupportsClassicDatasheet = false;
									oRet = false;
								}
							}
						}
					}
					if ( oRet === false ) {
						if ( bQuiet === false ) {ds.$("#contentBox").append('<p class="ms-descriptiontext">Ooops! Your browser\'s ActiveX controls don\'t work<br/><a href="https://www.microsoft.com/en-us/download/details.aspx?id=13255">You may need to install the MS Access database engine from MS Office 2010 (https://www.microsoft.com/en-us/download/details.aspx?id=13255)</a><br/>You must use <a href="https://www.microsoft.com/en-us/download/internet-explorer.aspx" target="_blank">MS Internet Explorer</a></p>');}
					}
					return oRet;
				},
				handleClicksForClassicDatasheetView: function(e){
					ds.controls.classicDatasheet.listGUID = ds.$(this).attr("listguid");
					ds.controls.classicDatasheet.viewGUID = ds.$(this).attr("viewguid");
					window.open(ds.p.root +"SitePages/classicDatasheet.aspx?listGUID="+ds.controls.classicDatasheet.listGUID+"&viewGUID="+ds.controls.classicDatasheet.viewGUID,"_blank");
				},
				configureClassicDatasheetViewButton: function(){
					if ( ds.$("[id^='Ribbon.Library.ViewFormat.DatasheetClassic'], [id^='Ribbon.List.ViewFormat.DatasheetClassic']").length < 1 ) {
						if ( ds.$("[id^='Ribbon.Library']").length > 0 ) {
							$cloned = ds.$("UL[id='Ribbon.Library'] > LI[id='Ribbon.Library.ViewFormat'] > span.ms-cui-groupContainer > span.ms-cui-groupBody > span.ms-cui-layout > span.ms-cui-section > span.ms-cui-row-onerow > a[id^='Ribbon.Library.ViewFormat.Datasheet']").clone(false);
							$cloned.removeAttr("onclick");
							$cloned.attr("aria-describedby",$cloned.attr("aria-describedby").replace("Datasheet","DatasheetClassic"));
							$cloned.attr("id",$cloned.attr("id").replace("Datasheet","DatasheetClassic"));
							$cloned.find("img").css({
								"top":"-407px",
								"left":"-308px"
							});
							$cloned.children("span:last-child").html("Classic<br>Datasheet");
							$cloned.attr("listguid",_spPageContextInfo.pageListId.replace("{","").replace("}",""));
							$cloned.attr("viewguid",decodeURIComponent(ds.controls.classicDatasheet.$listViewOnPage.attr("o:webquerysourcehref").split("&View=")[1]).replace("{","").replace("}",""));
							$cloned.attr("sourceviewmode","Standard");
							$cloned.appendTo("UL[id='Ribbon.Library'] > LI[id='Ribbon.Library.ViewFormat'] > span.ms-cui-groupContainer > span.ms-cui-groupBody > span.ms-cui-layout > span.ms-cui-section > span.ms-cui-row-onerow");
							//if ( ds.controls.classicDatasheet.checkBrowserCompatibility() === false ) {
							if ( ds.stor.session.browserSupportsClassicDatasheet === false ) {
								$cloned.attr("aria-disabled",true).prop("disabled",true).addClass("ms-cui-disabled").attr("title","Your browser doesn't support the classic Datasheet view, which requires ActiveX support");
							}
						}
						else {
							$cloned = ds.$("UL[id='Ribbon.List'] > LI[id='Ribbon.List.ViewFormat'] > span.ms-cui-groupContainer > span.ms-cui-groupBody > span.ms-cui-layout > span.ms-cui-section > span.ms-cui-row-onerow > a[id^='Ribbon.List.ViewFormat.Datasheet']").clone(false);
							$cloned.removeAttr("onclick");
							$cloned.attr("aria-describedby",$cloned.attr("aria-describedby").replace("Datasheet","DatasheetClassic"));
							$cloned.attr("id",$cloned.attr("id").replace("Datasheet","DatasheetClassic"));
							$cloned.find("img").css({
								"top":"-407px",
								"left":"-308px"
							});
							$cloned.children("span:last-child").html("Classic<br>Datasheet");
							$cloned.attr("listguid",ds.controls.classicDatasheet.$listViewOnPage.attr("id").split("}-{")[0].replace("{","").replace("}",""));
							$cloned.attr("viewguid",ds.controls.classicDatasheet.$listViewOnPage.attr("id").split("}-{")[1].replace("{","").replace("}",""));
							$cloned.attr("sourceviewmode","Standard");
							$cloned.appendTo("UL[id='Ribbon.List'] > LI[id='Ribbon.List.ViewFormat'] > span.ms-cui-groupContainer > span.ms-cui-groupBody > span.ms-cui-layout > span.ms-cui-section > span.ms-cui-row-onerow");
							//if ( ds.controls.classicDatasheet.checkBrowserCompatibility() === false ) {
								if ( ds.stor.session.browserSupportsClassicDatasheet === false ) {
								$cloned.attr("aria-disabled",true).prop("disabled",true).addClass("ms-cui-disabled").attr("title","Your browser doesn't support the classic Datasheet view, which requires ActiveX support");
							}
						}
						$cloned.on("click",ds.controls.classicDatasheet.handleClicksForClassicDatasheetView);
					}
				},
				getListItemDataXML: function(afterFx){
					ds.$.ajax({
						url: ds.p.root + ds.p.rest.lists2013 +"(guid'"+ds.controls.classicDatasheet.listGUID+"')/Items",
						async: true,
						method: "GET", 
						dataType: "xml",
						headers: {
							"X-RequestDisgest": ds.$("#__REQUESTDIGEST").val(),
							"Accept": "application/xml; odata=verbose",
							"content-type": "application/xml; odata=verbose"
						}
					}).done(function(d1, s1, x1){
						ds.controls.classicDatasheet.d = d1, ds.controls.classicDatasheet.s = s1, ds.controls.classicDatasheet.x = x1, ds.controls.classicDatasheet.listData = x1.responseText;
						if ( typeof(afterFx) === "function" ) {
							afterFx();
						}
					}).fail(function(x1, s1, e1){
						ds.controls.classicDatasheet.x = x1, ds.controls.classicDatasheet.s = s1, ds.controls.classicDatasheet.e = e1;
					});
				},
				getListDefinitionXML: function(afterFx){
					ds.$.ajax({
						url: ds.p.root + ds.p.rest.lists2013 +"(guid'"+ds.controls.classicDatasheet.listGUID+"')",
						async: true,
						method: "GET", 
						dataType: "xml",
						headers: {
							"X-RequestDisgest": ds.$("#__REQUESTDIGEST").val(),
							"Accept": "application/xml; odata=verbose",
							"content-type": "application/xml; odata=verbose"
						}
					}).done(function(d1, s1, x1){
						ds.controls.classicDatasheet.d = d1, ds.controls.classicDatasheet.s = s1, ds.controls.classicDatasheet.x = x1, ds.controls.classicDatasheet.listSchema = x1.responseText;
						if ( typeof(afterFx) === "function" ) {
							afterFx();
						}
					}).fail(function(x1, s1, e1){
						ds.controls.classicDatasheet.x = x1, ds.controls.classicDatasheet.s = s1, ds.controls.classicDatasheet.e = e1;
					});
				},
				getViewSchemaXML: function(afterFx){
					ds.$.ajax({
						url: ds.p.root + ds.p.rest.lists2013 +"(guid'"+ds.controls.classicDatasheet.listGUID+"')/Views(guid'"+ds.controls.classicDatasheet.viewGUID+"')?$select=ListViewXML",
						async: true,
						method: "GET", 
						dataType: "xml",
						headers: {
							"X-RequestDisgest": ds.$("#__REQUESTDIGEST").val(),
							"Accept": "application/xml; odata=verbose",
							"content-type": "application/xml; odata=verbose"
						}
					}).done(function(d1, s1, x1){
						ds.controls.classicDatasheet.d = d1, ds.controls.classicDatasheet.s = s1, ds.controls.classicDatasheet.x = x1, ds.controls.classicDatasheet.viewSchema = x1.responseText;
						if ( typeof(afterFx) === "function" ) {
							afterFx();
						}
					}).fail(function(x1, s1, e1){
						ds.controls.classicDatasheet.x = x1, ds.controls.classicDatasheet.s = s1, ds.controls.classicDatasheet.e = e1;
					});
				},
				getListDefaultViewGUID: function(){
					var oReturn = null;
					ds.$.ajax({
						url: ds.p.root + ds.p.rest.lists2013 + "(guid'" + listGUID + "')/Views?$filter=DefaultView eq true&$select=Id",
						async: false,
						method: "GET",
						dataType: "xml",
						headers: {
							"X-RequestDisgest": ds.$("#__REQUESTDIGEST").val(),
							"Accept": "application/xml; odata=verbose",
							"content-type": "application/xml; odata=verbose"
						}
					}).done(function(d1, s1, x1) {
						d = d1, s = s1, x = x1, oReturn = d.documentElement.getElementsByTagName("d:Id")[0].textContent;
						if ( typeof(afterFx) === "function" ) {
							afterFx();
						}
					}).fail(function(x1, s1, e1) {
						x = x1, s = s1, e = e1;
					});
					return oReturn;
				},
				generate: function(){
					ds.controls.classicDatasheet.listGUID = GetUrlKeyValue("listGUID");
					ds.util.log("listGUID = |" + ds.controls.classicDatasheet.listGUID + "|", true);
					ds.controls.classicDatasheet.viewGUID = GetUrlKeyValue("viewGUID");
					ds.util.log("viewGUID = |" + ds.controls.classicDatasheet.viewGUID + "|", true);
					/*if (ds.controls.classicDatasheet.checkBrowserCompatibility() === true) {*/
					if ( ds.stor.session.browserSupportsClassicDatasheet === true ) {
						if (!ds.controls.classicDatasheet.listGUID === false) {
							ds.controls.classicDatasheet.listGUID = ds.controls.classicDatasheet.listGUID.replace("{", "").replace("}", "");
							if (!ds.controls.classicDatasheet.viewGUID === true) {
								ds.controls.classicDatasheet.viewGUID = ds.controls.classicDatasheet.getListDefaultViewGUID();
								ds.util.log("viewGUID = |" + ds.controls.classicDatasheet.viewGUID + "|... got list's default view", true);
							}
							ds.controls.classicDatasheet.viewGUID = ds.controls.classicDatasheet.viewGUID.replace("{", "").replace("}", "");
							ds.controls.classicDatasheet.getViewSchemaXML(ds.controls.classicDatasheet.getListDefinitionXML(ds.controls.classicDatasheet.getListItemDataXML(function(){
								/*CLSID for the ActiveX control from https://msdn.microsoft.com/en-us/library/ms416795(v=office.14).aspx*/
								ds.controls.classicDatasheet.arrH = ['<object name="STSListControlWPQ2" width="' + Math.floor(ds.$("#ctl00_PlaceHolderMain_WikiField .ms-rte-layoutszone-inner").width() * 0.9) + '" height="' + Math.floor(ds.$("#ctl00_PlaceHolderMain_WikiField .ms-rte-layoutszone-inner").height() * 0.9) + '" tabIndex="1" class="ms-dlgDisable" id="STSListControlWPQ2" classid="CLSID:65BCBEE4-7728-41A0-97BE-14E1CAE36AAE">'];
								ds.controls.classicDatasheet.arrH.push('<param name="ListName" value="{' + ds.controls.classicDatasheet.listGUID + '}">');
								ds.controls.classicDatasheet.arrH.push('<param name="ViewGuid" value="{' + ds.controls.classicDatasheet.viewGUID + '}">');
								ds.controls.classicDatasheet.arrH.push('<param name="ListWeb" value="' + ds.p.root + '_vti_bin">');
								ds.controls.classicDatasheet.arrH.push('<param name="ListData" value="' + ds.controls.classicDatasheet.listData + '">');
								ds.controls.classicDatasheet.arrH.push('<param name="ViewSchema" value="' + ds.controls.classicDatasheet.viewSchema + '">');
								ds.controls.classicDatasheet.arrH.push('<param name="ListSchema" value="' + ds.controls.classicDatasheet.listSchema + '">');
								ds.controls.classicDatasheet.arrH.push('<param name="ControlName" value="STSListControlWPQ2">');
								ds.controls.classicDatasheet.arrH.push('<p class="ms-descriptiontext">Ooops your browser\'s ActiveX controls don\'t work<br/><a href="https://www.microsoft.com/en-us/download/details.aspx?id=13255">You may need to install the MS Access database engine from MS Office 2010 (https://www.microsoft.com/en-us/download/details.aspx?id=13255)</a></p>');
								ds.controls.classicDatasheet.arrH.push('</object>'); 
								/* appending this to the page will cause the code to attempt a post to ds.p.root + '_vti_bin/list.asmx' for a GetListAndView operation, and that will fail for anonymous users */
								ds.$("#ctl00_PlaceHolderMain_WikiField .ms-rte-layoutszone-inner").append(ds.controls.classicDatasheet.arrH.join(""));
							})));
						}
					} else {
						ds.util.log("Your browser is not compatible with the classic datasheet view\n\nMust use MS Internet Explorer\nMust have MS Access Database Engine 2010 32-bit installed", true);
						ds.$("#ctl00_PlaceHolderMain_WikiField .ms-rte-layoutszone-inner").append("<p>Your browser is not compatible with the classic datasheet view<ul><li>You must use MS Internet Explorer</li><li>You must have MS Access Database Engine 2010 32-bit installed</li></ul></p>"); /*alert("Your browser is not compatible with the classic datasheet view\n\nMust use MS Internet Explorer\nMust have MS Access Database Engine 2010 32-bit installed");*/
					}
				},
				init: setTimeout(function(){
					ExecuteOrDelayUntilScriptLoaded(function(){
						if ( ds.controls.classicDatasheet.bAutoShowViewRibbon === true ) {
							ds.$("LI[id='Ribbon.Library-title'] > A, LI[id='Ribbon.List-title'] > A")[0].click();
						}
						if ( ds.controls.classicDatasheet.bInitDone === false ) {
							ds.controls.classicDatasheet.waitForRibbonThenAddButton();
							ds.controls.classicDatasheet.bInitDone = true;
						}
					},"sp.ribbon.js");
				}, 123)
			},
			cssVariablesShim: {
				addSupportAsNeeded: function(){
					try{
						if ( window.CSS.supports('--fake-var', 0) === true ) {
							ds.stor.session.browserSupportsCSSVariables = true;
							ds.$.ajax({
								url: ds.p.root +"Style%20Library/DS_styles_with_variables.dev.css",
								dataType:"text",
								headers:{
									"content-type":"text/css",
									"accept":"text/css"
								}
							}).done(function(d2,s2,x2){
								ds.util.log("Appending contents of |DS_styles_with_variables.dev.css| to the main content area",true);
								ds.util.appendToMain("<style type='text/css'>"+x2.responseText+"</style>");
							});
						}
						else {
							ds.stor.session.browserSupportsCSSVariables = false;
							ds.util.log("Shimming in DS Magic CSS variable support",true);
							var styleSheet = "";
							ds.util.log("Retrieving CSS variable values from 'DS_styles_variables.css'",true);
							ds.$.ajax({
								url:"http://1.dsmagicsp.cloudappsportal.com/Style%20Library/DS_styles_variables.css",
								dataType:"text",
								headers:{
									"content-type":"text/css",
									"accept":"text/css"
								}
							}).done(function(d,s,x){
								ds.util.log("Building loopable array from CSS variable values in 'DS_styles_variables.css'",true);
								var resp = x.responseText;
								resp = resp.split("{")[1].replace("}","");
								var collVars = resp.split(";");
								ds.util.log("Retrieving CSS variable values from 'DS_styles_with_variables.dev.css'",true);
								ds.$.ajax({
									url:"http://1.dsmagicsp.cloudappsportal.com/Style%20Library/DS_styles_with_variables.dev.css",
									dataType:"text",
									headers:{
										"content-type":"text/css",
										"accept":"text/css"
									}
								}).done(function(d2,s2,x2){
									styleSheet = x2.responseText;
									ds.util.log("Looping through CSS variable array and making substitutions for their values",true);
									for ( var iV = 0; iV < collVars.length; iV++ ) {
										var def = collVars[iV].split(":");
										ds.util.log("making substitution for varName = '"+ "var("+ def[0] +")" +"' value = |"+ def[1] +"|",true);
										if ( styleSheet.indexOf("var("+ def[0] +")") >= 0 ) {
											var iBreak = 0;
											do {
												styleSheet = styleSheet.replace("var("+ def[0] +")",def[1]);
												iBreak++;
												if ( iBreak > 1000 ) {
													ds.util.log("ERROR",true);
													break;
												}
											} while ( styleSheet.indexOf("var("+ def[0] +")") >= 0 )
										}
										ds.util.log("finished making substitution for varName = '"+ "var("+ def[0] +")" +"' value = |"+ def[1] +"|",true);
									}
									ds.util.log("Appending stylesheet with substituted CSS variable values",true);
									ds.util.appendToMain("<style type='text/css'>"+styleSheet+"</style>");
								});
							});
							/*
							ds.util.log("Shimming in DS Magic CSS variable support",true);
							ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_cssVariablesLegacySupport.js");
							*/
						}
					}
					catch(err){
						ds.stor.session.browserSupportsCSSVariables = false;
						ds.util.log("Shimming in DS Magic CSS variable support",true);
						var styleSheet = "";
						ds.util.log("Retrieving CSS variable values from 'DS_styles_variables.css'",true);
						ds.$.ajax({
							url:"http://1.dsmagicsp.cloudappsportal.com/Style%20Library/DS_styles_variables.css",
							dataType:"text",
							headers:{
								"content-type":"text/css",
								"accept":"text/css"
							}
						}).done(function(d,s,x){
							ds.util.log("Building loopable array from CSS variable values in 'DS_styles_variables.css'",true);
							var resp = x.responseText;
							resp = resp.split("{")[1].replace("}","");
							var collVars = resp.split(";");
							ds.util.log("Retrieving CSS variable values from 'DS_styles_with_variables.dev.css'",true);
							ds.$.ajax({
								url:"http://1.dsmagicsp.cloudappsportal.com/Style%20Library/DS_styles_with_variables.dev.css",
								dataType:"text",
								headers:{
									"content-type":"text/css",
									"accept":"text/css"
								}
							}).done(function(d2,s2,x2){
								styleSheet = x2.responseText;
								ds.util.log("Looping through CSS variable array and making substitutions for their values",true);
								for ( var iV = 0; iV < collVars.length; iV++ ) {
									var def = collVars[iV].split(":");
									ds.util.log("making substitution for varName = '"+ "var("+ def[0] +")" +"' value = |"+ def[1] +"|",true);
									if ( styleSheet.indexOf("var("+ def[0] +")") >= 0 ) {
										var iBreak = 0;
										do {
											styleSheet = styleSheet.replace("var("+ def[0] +")",def[1]);
											iBreak++;
											if ( iBreak > 1000 ) {
												ds.util.log("ERROR",true);
												break;
											}
										} while ( styleSheet.indexOf("var("+ def[0] +")") >= 0 )
									}
									ds.util.log("finished making substitution for varName = '"+ "var("+ def[0] +")" +"' value = |"+ def[1] +"|",true);
								}
								ds.util.log("Appending stylesheet with substituted CSS variable values",true);
								ds.util.appendToMain("<style type='text/css'>"+styleSheet+"</style>");
							});
						});
						/*
						ds.util.log("Shimming in DS Magic CSS variable support",true);
						ds.$.getCachedScript(ds.p.root +"Style%20Library/DS_Namespace-1_cssVariablesLegacySupport.js");
						*/
					}
				}
			},
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
			},
			hoverMenu: {
				data:[],
				init: function(){
					ds.util.appendToMain("<ul class='root static ds-hoverMenu'></ul>");
					ds.controls.hoverMenu.buildFromLibrary("dsmagichelp");
				},
				buildFromLibrary: function(listName){
					//ds.rest.getDataFromURI(listName +"?$select=Id,FileSystemObjectType,GUID,TagsId,File,File/Title,File/ServerRelativeUrl,Folder,Folder/Name,Folder/ServerRelativeUrl,Folder/GUID&$expand=File,Folder",fxEachPage(d,s,x),true,false,fxAfterLastPage(d2,s2,x2))
					ds.controls.hoverMenu.getLibraryContents(ds.lists[listName].__metadata.uri);
				},
				getLibraryContents: function(listBaseRestURL){
					//most lists/libraries won't have the Tags lookup field (TagsId)
					var fxEachPage = function(d,s,x){
						ds.controls.hoverMenu.data = ds.controls.hoverMenu.data.concat(d.d.results);
					};
					var fxAfterLastPage = function(){
						ds.controls.hoverMenu.outputRootFolders();
					};
					//ds.rest.getDataFromURI(listName +"?$select=Id,FileSystemObjectType,GUID,TagsId,File,File/Title,File/ServerRelativeUrl,Folder,Folder/Name,Folder/ServerRelativeUrl,Folder/GUID&$expand=File,Folder",fxEachPage(d,s,x),true,false,fxAfterLastPage(d2,s2,x2))
					var intvl = ds.intvls.newIntvl("ds.controls.hoverMenu.getLibraryContents");
					ds.intvls[intvl].pauseMS = 100;
					ds.intvls[intvl].forFx = 'ds.controls.hoverMenu.getLibraryContents';
					ds.intvls[intvl].doWorkFx = function(){
						return ds.intvls[intvl].bDone;
					};
					ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx, ds.intvls[intvl].pauseMS);
					ds.rest.getDataFromURI(listBaseRestURL +"/Items?$select=Id,FileSystemObjectType,GUID,Folder,Folder/Name,Folder/ServerRelativeUrl,Folder/GUID,Folder/Folders,Folder/Files,File,File/Name,File/ServerRelativeUrl&$expand=Folder,File",fxEachPage,true,false,intvl,"dsmagichelp",fxAfterLastPage);
				},
				outputRootFolders: function(){
					for ( var iR = 0; iR < ds.controls.hoverMenu.data.length; iR++ ){
						if ( ds.controls.hoverMenu.data[iR].FileSystemObjectType === 1 && ds.controls.hoverMenu.data[iR].Folder.Name.indexOf("ds.") > -1 ){
							ds.controls.hoverMenu.addRootFolder(ds.p.rootNs + ds.controls.hoverMenu.data[iR].Folder.ServerRelativeUrl, ds.controls.hoverMenu.data[iR].Folder.Name, ds.controls.hoverMenu.data[iR].GUID);
						}
					}
					ds.controls.hoverMenu.outputSubFolders();
				},
				outputSubFolders: function(){
					var bMissing = false;
					var iLoopBreak = 0;
					do {
						bMissing = false;
						for ( var iR = 0; iR < ds.controls.hoverMenu.data.length; iR++ ){
							if ( ds.controls.hoverMenu.data[iR].FileSystemObjectType === 1 ){
								if ( ds.$("a[href$='"+ ds.controls.hoverMenu.data[iR].Folder.ServerRelativeUrl+"']").length < 1 ) {
									bMissing = true;
									/*ds.controls.hoverMenu.addRootFolder(ds.p.rootNs + ds.controls.hoverMenu.data[iR].Folder.ServerRelativeUrl, ds.controls.hoverMenu.data[iR].Folder.Name, ds.controls.hoverMenu.data[iR].GUID);*/
									ds.controls.hoverMenu.addSubFolder(ds.p.rootNs + ds.controls.hoverMenu.data[iR].Folder.ServerRelativeUrl, ds.controls.hoverMenu.data[iR].Folder.Name, ds.controls.hoverMenu.data[iR].GUID, "a[href$='"+ ds.controls.hoverMenu.data[iR].Folder.ServerRelativeUrl.substr(0,ds.controls.hoverMenu.data[iR].Folder.ServerRelativeUrl.lastIndexOf("/")) +"']");
								}
								
							}
						}
						iLoopBreak++;
						if ( iLoopBreak > 100 ) {
							ds.util.log("ds.controls.hoverMenu.outputSubFolders... Breaking while loop",true);
							bMissing = false;
						}
					} while (bMissing === true)
					ds.controls.hoverMenu.outputFiles();
				},
				outputFiles: function(){
					for ( var iR = 0; iR < ds.controls.hoverMenu.data.length; iR++ ){
						if ( ds.controls.hoverMenu.data[iR].FileSystemObjectType !== 1 ){
							ds.controls.hoverMenu.addFile(ds.p.rootNs + ds.controls.hoverMenu.data[iR].File.ServerRelativeUrl, ds.controls.hoverMenu.data[iR].File.Name, "a[href$='"+ ds.controls.hoverMenu.data[iR].File.ServerRelativeUrl.substr(0,ds.controls.hoverMenu.data[iR].File.ServerRelativeUrl.lastIndexOf("/")) +"']");
						}
					}
					ds.util.log("ds.controls.hoverMenu.outputFiles... done",true);
				},
				getLibraryFolderSubFolders: function(folderItemBaseRestURL, parentFolderGUID){
					var fxEachPage = function(d,s,x){
						for ( var iR = 0; iR < d.d.results.length; iR++ ){
							if ( d.d.results[iR].ListItemAllFields.FileSystemObjectType === 1 ){
								ds.controls.hoverMenu.addSubFolder(ds.p.rootNs + d.d.results[iR].ServerRelativeUrl, d.d.results[iR].Name, d.d.results[iR].ListItemAllFields.GUID, parentFolderGUID);
								ds.controls.hoverMenu.getLibraryFolderSubFolders(d.d.results[iR].ListItemAllFields.__metadata.uri, parentFolderGUID);
								ds.controls.hoverMenu.getLibraryFolderFiles(d.d.results[iR].ListItemAllFields.__metadata.uri, parentFolderGUID);
							}
						}
					};
					var fxAfterLastPage = function(d,s,x){
						for ( var iR = 0; iR < d.d.results.length; iR++ ){
							if ( d.d.results[iR].ListItemAllFields.FileSystemObjectType === 1 ){
								ds.controls.hoverMenu.addSubFolder(ds.p.rootNs + d.d.results[iR].ServerRelativeUrl, d.d.results[iR].Name, d.d.results[iR].ListItemAllFields.GUID, parentFolderGUID);
								ds.controls.hoverMenu.getLibraryFolderSubFolders(d.d.results[iR].ListItemAllFields.__metadata.uri, parentFolderGUID);
								ds.controls.hoverMenu.getLibraryFolderFiles(d.d.results[iR].ListItemAllFields.__metadata.uri, parentFolderGUID);
							}
						}
					};
					ds.rest.getDataFromURI(folderItemBaseRestURL+"/Folder/Folders?$select=Name,ServerRelativeUrl,Folders,Files,ListItemAllFields/GUID,ListItemAllFields/Id,ListItemAllFields/FileSystemObjectType,ParentFolder,ParentFolder/Name,ParentFolder/ServerRelativeUrl,ParentFolder/ListItemAllFields&$expand=ListItemAllFields,ParentFolder,ParentFolder/ListItemAllFields",fxEachPage,true,false,fxAfterLastPage);
				},
				getLibraryFolderFiles: function(folderItemBaseRestURL, parentFolderGUID){
					var fxEachPage = function(d,s,x){
						for ( var iR = 0; iR < d.d.results.length; iR++ ){
							if ( d.d.results[iR].ListItemAllFields.FileSystemObjectType !== 1 ){
								ds.controls.hoverMenu.addFile(ds.p.rootNs + d.d.results[iR].ServerRelativeUrl, d.d.results[iR].Name, parentFolderGUID);
							}
						}
					};
					var fxAfterLastPage = function(d,s,x){
						for ( var iR = 0; iR < d.d.results.length; iR++ ){
							if ( d.d.results[iR].ListItemAllFields.FileSystemObjectType !== 1 ){
								ds.controls.hoverMenu.addFile(ds.p.rootNs + d.d.results[iR].ServerRelativeUrl, d.d.results[iR].Name, parentFolderGUID);
							}
						}
					};
					ds.rest.getDataFromURI(folderItemBaseRestURL+"/Folder/Files?$select=Name,ServerRelativeUrl,ListItemAllFields/GUID,ListItemAllFields/Id,ListItemAllFields/FileSystemObjectType&$expand=ListItemAllFields",fxEachPage,true,false,fxAfterLastPage);
				},
				addRootFolder: function(folderServerRelativeURL, folderName, folderGUID){
					var arrH = ["<li class='static dynamic-children'><a class='static dynamic-children menu-item ms-displayInline ms-navedit-linkNode' href='"];
					arrH.push(folderServerRelativeURL);
					arrH.push("'><span aria-haspopup='true' class='additional-background ms-navedit-flyoutArrow dynamic-children'><span class='menu-item-text'><table border='0' cellpadding='0' cellspacing='0'><tr><td class='menu-item-icon'><img border='0' alt='folder' src='/_layouts/15/images/folder.gif'/></td><td class='menu-item-displayText'>");
					arrH.push(folderName)
					arrH.push("</td></tr></table></span></span></a><ul class='dynamic' style='position: inherit; top: 0px; left: 0px; z-index: inherit;' id='children");
					arrH.push(folderGUID);
					arrH.push("'></ul></a></li>");
					ds.util.log("appending hoverMenu root folder to |UL.root.static.ds-hoverMenu|",true);
					ds.$("UL.root.static.ds-hoverMenu").append(arrH.join(""));
				},
				addSubFolder: function(folderServerRelativeURL, folderName, folderGUID, jqSelAppend){
					var arrH = ["<li class='dynamic dynamic-children'><a class='dynamic dynamic-children menu-item ms-displayInline ms-navedit-linkNode' href='"];
					arrH.push(folderServerRelativeURL);
					arrH.push("'><span aria-haspopup='true' class='additional-background ms-navedit-flyoutArrow dynamic-children'><span class='menu-item-text'><table border='0' cellpadding='0' cellspacing='0'><tr><td class='menu-item-icon'><img border='0' alt='folder' src='/_layouts/15/images/folder.gif'/></td><td class='menu-item-displayText'>");
					arrH.push(folderName)
					//arrH.push("</td></tr></table></span></span></a><ul class='dynamic' style='position: inherit; top: 0px; left: 0px; z-index: inherit;' id='children");
					arrH.push("</td></tr></table></span></span></a><ul class='dynamic' id='children");
					arrH.push(folderGUID);
					arrH.push("'></ul></a></li>");
					//ds.util.log("appending hoverMenu subFolder to |UL#children"+parentFolderGUID+"|",true);
					ds.util.log("appending hoverMenu subFolder to |"+jqSelAppend+"|",true);
					//ds.$("UL.dynamic#children"+ parentFolderGUID).append(arrH.join(""));
					ds.$(jqSelAppend).next().append(arrH.join(""));
				},
				addFile: function(fileServerRelativeURL, fileName, jqSelAppend){
					var arrH = ["<li class='dynamic'><a class='dynamic menu-item ms-displayInline ms-navedit-linkNode' href='"];
					arrH.push(fileServerRelativeURL);
					arrH.push("'><span class='additional-background ms-navedit-flyoutArrow'><span class='menu-item-text'><table border='0' cellpadding='0' cellspacing='0'><tr><td class='menu-item-icon'><img border='0' alt='file' src='/_layouts/images/icgen.gif'/></td><td class='menu-item-displayText'>");
					arrH.push(fileName)
					arrH.push("</td></tr></table></span></span></a></li>");
					//ds.util.log("appending hoverMenu file |"+fileName+"| to |UL#children"+parentFolderGUID+"|",true);
					ds.util.log("appending hoverMenu file to |"+jqSelAppend+"|",true);
					//ds.$("UL.dynamic#children"+ parentFolderGUID).append(arrH.join(""));
					ds.$(jqSelAppend).next().append(arrH.join(""));
				}
			},
			siteCrawler: {
				arrWaiting: [],
				arrFailed: [],
				arrROs: [],
				arrIntvls: [],
				init: function(arrSkipLists){
					ds.util.appendToMain("<ul id='dsSiteFiles'></ul>");
					for ( listName in ds.lists ){
						if ( arrSkipLists.indexOf(listName) < 0 ) {
							ds.util.log("Defining a function to handle processes of outputting all files from list |"+ listName +"|");
							var outputFilesFromThisList = function(list){
									ds.util.log("Appending an item for the list itself |"+ list +"|",true);
									try{
										if ( list === "masterpagegallery" ) {
											var listRelativeURL = ds.p.root + "_catalogs/masterpage";
										}
										else if ( list === "wfpub" ) {
											var listRelativeURL = ds.p.root + "_catalogs/wfpub";
										}
										else if ( list === "workflows" ) {
											var listRelativeURL = ds.p.root + "_catalogs/Workflows";
										}
										else if ( ds.lists[list].BaseTemplate === 100 ) {
											var listRelativeURL = ds.lists[list].views[0].ServerRelativeUrl.substr(0,ds.lists[list].views[0].ServerRelativeUrl.lastIndexOf("/"));
										}
										else {
											var listRelativeURL = ds.lists[list].views[0].ServerRelativeUrl.split("/")[0] +"/"+ ds.lists[list].views[0].ServerRelativeUrl.split("/")[1];
											/*var listRelativeURL = ds.lists[list].views[0].ServerRelativeUrl.substr(0,ds.lists[list].views[0].ServerRelativeUrl.lastIndexOf("/"));*/
										}
									}catch(err){}
									ds.controls.siteCrawler.outputList(list, listRelativeURL);
									ds.util.log("Grabbing file contents of |"+ list +"|");
									
									ds.util.log("Setting up an interval so we can wait for the rest operations to request and obtain the items in this list, then do something afterwards (despite the fact that we don't know how many items the list currently contrains) for |"+ list +"|");
									var intvl = ds.intvls.newIntvl("dsrestgetSiteFiles"+list);
									ds.intvls[intvl].pauseMS = 100;
									ds.intvls[intvl].forFx = list;
									ds.intvls[intvl].timeoutMS = 30000;
									ds.intvls[intvl].doWorkFx = function(){
										return ds.intvls[intvl].bDone;
									};
									ds.controls.siteCrawler.arrIntvls.push(intvl);
						
									ds.util.log("Setting up a function to run on each page of items for |"+ list +"|");
									var fxEachPage = function(d,s,x){
										if ( typeof(d.d.results) === "object" ){
											ds.util.log("Setting up a repeat operation (RO) to handle the current page of items from |"+ list +"|, containing "+ d.d.results.length +" items");
											var loopingFx = function(resultIndex){
												ds.util.log("Running the RO main operation (loopingFx) for page item at index |"+ resultIndex +"|");
												var item = d.d.results[resultIndex];
												var contentType = "unknown";
												var fileType = "unknown";
												try{
													contentType = item.ContentType.Name;
												}catch(err){}
												try{
													if ( item.FileSystemObjectType === 0 ) {
														fileType = "File";
													}
													else if ( item.FileSystemObjectType === 1 ) {
														fileType = "Folder";
													}
												}catch(err){}
												switch (contentType) {
													case "Wiki Page":
														ds.controls.siteCrawler.outputWikiPage(list, item, contentType, fileType, listRelativeURL);
														break;
													case "Web Part Page":
														ds.controls.siteCrawler.outputWebPartPage(list, item, contentType, fileType, listRelativeURL);
														break;
													case "Folder":
														ds.controls.siteCrawler.outputFolder(list, item, contentType, fileType, listRelativeURL);
														break;
													case "Document":
														ds.controls.siteCrawler.outputDocument(list, item, contentType, fileType, listRelativeURL);
														break;
													case "Item":
														ds.controls.siteCrawler.outputItem(list, item, contentType, fileType, listRelativeURL);
														break;
													/*
													case "Workflow History":
														break;
													case "SharePointGroup":
														break;
													case "Person":
														break;
													case "Task":
														break;
													case "Event":
														break;
													case "Composed Looks":
														break;
													*/
													default:
														ds.util.log("Could not output an item; List = |"+ ds.lists[list].Id +"|, contentType = |"+ contentType +"|, fileType = |"+ fileType +"|");
														ds.util.log(item);
												}
											};
						
											var successFx = function(){
												ds.util.log("Finished RO for page of items for |"+ list +"|",true);
												if ( typeof(d.d.__next) === "undefined" ) {
													ds.util.log("This was the RO that handled the last page of items for |"+ list +"|",true);
												}
											};
						
											ds.util.log("Getting a new unique RO name under ds.repOp that will handle the current page of items from |"+ list +"|");
											var roID = ds.repOp.newObjRO("ds.rest.getSiteFiles_"+list+"_page", ds.rest.getSiteFiles, "RO for "+list+" page", d.d.results.length-1, loopingFx, successFx);
											ds.controls.siteCrawler.arrROs.push(roID);
											ds.util.log("Initializing the repeat operation (RO) that will handle the current page of items from |"+ list +"|",true);
											if ( typeof(d.d.__next) === "undefined" ) {ds.util.log("This was the last page of items for |"+ list +"|");}
											ds.repOp[roID].initFx();
									}
								};
						
								var fxAfterLastPage = function(){
									ds.util.log("Obtained the final page of items for "+ list);
								};
						
								ds.util.log("Making request for the first page of items for "+ list);
								var restURL = ds.lists[list].__metadata.uri+"/Items?$expand=ContentType,Folder,File,File/Versions,ParentList";
								if ( ds.lists[list].EnableAttachments === true ) {
									restURL += ",AttachmentFiles,ParentList,ParentList/Forms,ParentList/Views";
								}
								ds.util.log("Start waiting for our interval |"+ intvl +"| for |"+ list +"|",true);
								ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx, ds.intvls[intvl].pauseMS);
								ds.rest.getDataFromURI(
									restURL,
									fxEachPage,
									true,
									false,
									intvl,
									list,
									fxAfterLastPage
								);
							};
						
							ds.util.log("Running the function to handle processes of outputting all files from list |"+ listName +"|");
							outputFilesFromThisList(listName);	
						}
						else {
							/* skip list if it was an element in the arrSkipLists parameter */
						}
					}
					ds.controls.siteCrawler.waitUntilAllDone(function(){
						ds.util.log("ds.controls.siteCrawler.waitUntilAllDone fisished waiting for all intervals and repeat operations",true);
						/*ds.controls.siteCrawler.outputFromWaiting(function(){*/
							ds.controls.siteCrawler.setupEvents();
							ds.controls.siteCrawler.populateVersionCounts();	
						/*});*/
					});
				},
				outputItem: function(list, item, contentType, fileType, listRelativeURL){
					try{
						if ( item.Attachments === true ) {
							/*ds.controls.siteCrawler.arrFailed.push({"list":list,"item":item,"contentType":contentType,"fileType":fileType,"listRelativeURL":listRelativeURL});*/
							ds.util.log("Found an item with attachments",true);
							var itemDisplayFormURL = "";
							var itemSize = 0;
							for ( var iAttached = 0; iAttached < item.AttachmentFiles.results.length; iAttached++ ){
								ds.util.log("Checking size of attached file located at |"+ item.AttachmentFiles.results[iAttached].ServerRelativeUrl +"|");
								ds.$.ajax({
									url:ds.p.root + ds.p.rest[2013].web+"/GetFileByServerRelativeUrl('"+item.AttachmentFiles.results[iAttached].ServerRelativeUrl+"')",
									method:"GET",
									async: false
								}).always(function(){
									ds.util.log("Attempting to check the size of the file attached to item |"+ item.Id +"| at index |"+ iAttached +"|");
								}).done(function(d,s,x){
									ds.util.log("Successfully checked the size of the file attached to item |"+ item.Id +"| at index |"+ iAttached +"|");
									ds.util.log(x);
									item.AttachmentFiles.results[iAttached].size = d.d.Length;
									itemSize += d.d.Length;
								}).fail(function(x,s,e){
									ds.util.log("Unsuccessfully checked the size of the file attached to item |"+ item.Id +"| at index |"+ iAttached +"|");
									ds.util.log(x);
								});
							}
							for ( var iForm = 0; iForm < item.ParentList.Forms.results.length; iForm++ ) {
								if ( item.ParentList.Forms.results[iForm].FormType === 4 ) {
									itemDisplayFormURL = item.ParentList.Forms.results[iForm].ServerRelativeUrl +"?ID="+ item.Id;
									listRelativeURL = item.ParentList.Forms.results[iForm].ServerRelativeUrl.substr(0,item.ParentList.Forms.results[iForm].ServerRelativeUrl.lastIndexOf("/"));
									ds.controls.siteCrawler.arrFailed.push({"list":list,"item":item,"contentType":contentType,"fileType":fileType,"listRelativeURL":listRelativeURL});
									ds.controls.siteCrawler.addContent(listRelativeURL, ds.controls.siteCrawler.getSubItemWrapperForRelativeUrl(listRelativeURL),"<li class='item dynamic'><table><tbody><tr><td class='expandControl'><img border='0' alt='expand' src='/_layouts/15/images/collapseplus.gif'/></td><td class='contentIcon'><span unselectable='on' class='ms-cui-img-16by16 ms-cui-img-cont-float'><img unselectable='on' alt='item' src='/_layouts/15/1033/images/formatmap16x16.png?rev=23' style='top: -107px; left: -37px;'></span></td><td class='contentLink'><a href='"+ itemDisplayFormURL +"'>Item ("+ item.Id +")</a></td><td class='versionCount'></td><td class='contentSize'>"+ itemSize +"</td><td class='versionLabel'>"+ item.OData__UIVersionString +"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr><tr><td colspan='2'></td><td colspan='6'><ul class='itemVersions'></ul></td></tr></tbody></table></li>");
									ds.rest.list.item.getVersions(ds.lists[list].Id, item.Id, function(versions){
										for ( itemVersionLabel in versions ){
											ds.controls.siteCrawler.addContent(itemDisplayFormURL, ds.controls.siteCrawler.getSubItemWrapperForRelativeUrl(itemDisplayFormURL),"<li class='item itemVersion dynamic'><table><tbody><tr><td class='expandControl'></td><td class='contentIcon'><span class='ms-cui-img-16by16 ms-cui-img-cont-float ms-cui-imageDisabled' unselectable='on'><img class='' style='top: -99px;left: -55px;' unselectable='on' src='/_layouts/15/1033/images/formatmap16x16.png?rev=23'></span></td><td class='contentLink'><a href='"+ versions[itemVersionLabel].verurl +"'>"+ itemVersionLabel +"</a></td><td class='versionCount'></td><td class='contentSize'>"+ itemSize +"</td><td class='versionLabel'>"+ itemVersionLabel +"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr></tbody></table></li>");
										}
									});
									break;
								}
							}
							
						}
					}
					catch(err){
						ds.util.log("Could not output an item which appeared to be a File; List = |"+ ds.lists[list].Id +"|, contentType = |"+ contentType +"|, fileType = |"+ fileType +"|", true);
						ds.util.log(item);
					}
				},
				outputWikiPage: function(list, item, contentType, fileType, listRelativeURL){
					try{
						var parentFolderPath = item.File.ServerRelativeUrl.substr(0,item.File.ServerRelativeUrl.lastIndexOf("/"));
						if ( listRelativeURL !== parentFolderPath ) {
							/*ds.controls.siteCrawler.addContent(parentFolderPath, ds.$("#dsSiteFiles a[href$='"+ parentFolderPath +"']").parents("tbody").eq(0).children("tr").eq(1).children("td").eq(1).children("ul"), "<li class='file current dynamic'><table><tbody><tr><td class='expandControl'><img border='0' alt='expand' src='/_layouts/15/images/collapseplus.gif'/></td><td class='contentIcon'><img border='0' alt='wiki page' src='/_layouts/15/images/ichtm.gif'/></td><td class='contentLink'><a href='"+item.File.ServerRelativeUrl+"'>"+item.File.Name+"</a></td><td class='versionCount'></td><td class='contentSize'>"+ item.File.Length +"</td><td class='versionLabel'>"+item.File.UIVersionLabel+"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr><tr><td colspan='2'></td><td colspan='6'><ul class='fileVersions'></ul></td></tr></tbody></table></li>");*/
							ds.controls.siteCrawler.addContent(parentFolderPath, ds.controls.siteCrawler.getSubItemWrapperForRelativeUrl(parentFolderPath), "<li class='file current dynamic'><table><tbody><tr><td class='expandControl'><img border='0' alt='expand' src='/_layouts/15/images/collapseplus.gif'/></td><td class='contentIcon'><img border='0' alt='wiki page' src='/_layouts/15/images/ichtm.gif'/></td><td class='contentLink'><a href='"+item.File.ServerRelativeUrl+"'>"+item.File.Name+"</a></td><td class='versionCount'></td><td class='contentSize'>"+ item.File.Length +"</td><td class='versionLabel'>"+item.File.UIVersionLabel+"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr><tr><td colspan='2'></td><td colspan='6'><ul class='fileVersions'></ul></td></tr></tbody></table></li>");
						}
						else {
							/*ds.controls.siteCrawler.addContent(listRelativeURL, ds.$("#dsSiteFiles a[href$='"+ listRelativeURL +"']").parents("tbody").eq(0).children("tr").eq(1).children("td").eq(1).children("ul"), "<li class='file current dynamic'><table><tbody><tr><td class='expandControl'><img border='0' alt='expand' src='/_layouts/15/images/collapseplus.gif'/></td><td class='contentIcon'><img border='0' alt='wiki page' src='/_layouts/15/images/ichtm.gif'/></td><td class='contentLink'><a href='"+item.File.ServerRelativeUrl+"'>"+item.File.Name+"</a></td><td class='versionCount'></td><td class='contentSize'>"+ item.File.Length +"</td><td class='versionLabel'>"+item.File.UIVersionLabel+"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr><tr><td colspan='2'></td><td colspan='6'><ul class='fileVersions'></ul></td></tr></tbody></table></li>");*/
							ds.controls.siteCrawler.addContent(listRelativeURL, ds.controls.siteCrawler.getSubItemWrapperForRelativeUrl(listRelativeURL), "<li class='file current dynamic'><table><tbody><tr><td class='expandControl'><img border='0' alt='expand' src='/_layouts/15/images/collapseplus.gif'/></td><td class='contentIcon'><img border='0' alt='wiki page' src='/_layouts/15/images/ichtm.gif'/></td><td class='contentLink'><a href='"+item.File.ServerRelativeUrl+"'>"+item.File.Name+"</a></td><td class='versionCount'></td><td class='contentSize'>"+ item.File.Length +"</td><td class='versionLabel'>"+item.File.UIVersionLabel+"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr><tr><td colspan='2'></td><td colspan='6'><ul class='fileVersions'></ul></td></tr></tbody></table></li>");
						}
						if ( typeof(item.File.Versions.results) === "object" ) {
							for ( var iV = 0; iV < item.File.Versions.results.length; iV++ ){
								var parentFilePath = item.File.ServerRelativeUrl;
								/*ds.controls.siteCrawler.addContent(parentFilePath, ds.$("#dsSiteFiles a[href$='"+ parentFilePath +"']").parents("tbody").eq(0).children("tr").eq(1).children("td").eq(1).children("ul"), "<li class='file fileVersion dynamic'><table><tbody><tr><td class='expandControl'></td><td class='contentIcon'><span class='ms-cui-img-16by16 ms-cui-img-cont-float ms-cui-imageDisabled' unselectable='on'><img class='' style='top: -99px;left: -55px;' unselectable='on' src='/_layouts/15/1033/images/formatmap16x16.png?rev=23'></span></td><td class='contentLink'><a href='"+item.File.Versions.results[iV].Url+"'>"+item.File.Name+"</a></td><td class='versionCount'></td><td class='contentSize'>"+ item.File.Versions.results[iV].Size +"</td><td class='versionLabel'>"+item.File.Versions.results[iV].VersionLabel +"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr></tbody></table></li>");*/
								ds.controls.siteCrawler.addContent(parentFilePath, ds.$("#dsSiteFiles li.file:not(.fileVersion) > table > tbody > tr:first-child > td.contentLink > a[href$='"+ parentFilePath +"']").parents("tbody").eq(0).children("tr").eq(1).children("td").eq(1).children("ul"), "<li class='file fileVersion dynamic'><table><tbody><tr><td class='expandControl'></td><td class='contentIcon'><span class='ms-cui-img-16by16 ms-cui-img-cont-float ms-cui-imageDisabled' unselectable='on'><img class='' style='top: -99px;left: -55px;' unselectable='on' src='/_layouts/15/1033/images/formatmap16x16.png?rev=23'></span></td><td class='contentLink'><a href='"+item.File.Versions.results[iV].Url+"'>"+item.File.Name+"</a></td><td class='versionCount'></td><td class='contentSize'>"+ item.File.Versions.results[iV].Size +"</td><td class='versionLabel'>"+item.File.Versions.results[iV].VersionLabel +"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr></tbody></table></li>");
								/*ds.controls.siteCrawler.addContent(parentFilePath, ds.controls.siteCrawler.getSubItemWrapperForRelativeUrl(parentFilePath), "<li class='file fileVersion dynamic'><table><tbody><tr><td class='expandControl'></td><td class='contentIcon'><span class='ms-cui-img-16by16 ms-cui-img-cont-float ms-cui-imageDisabled' unselectable='on'><img class='' style='top: -99px;left: -55px;' unselectable='on' src='/_layouts/15/1033/images/formatmap16x16.png?rev=23'></span></td><td class='contentLink'><a href='"+item.File.Versions.results[iV].Url+"'>"+item.File.Name+"</a></td><td class='versionCount'></td><td class='contentSize'>"+ item.File.Versions.results[iV].Size +"</td><td class='versionLabel'>"+item.File.Versions.results[iV].VersionLabel +"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr></tbody></table></li>");*/
							}
						}
					}catch(err){
						ds.util.log("Could not output an item which appeared to be a File; List = |"+ ds.lists[list].Id +"|, contentType = |"+ contentType +"|, fileType = |"+ fileType +"|", true);
						ds.util.log(item);
					}
				},
				outputWebPartPage: function(list, item, contentType, fileType, listRelativeURL){
					try{
						var parentFolderPath = item.File.ServerRelativeUrl.substr(0,item.File.ServerRelativeUrl.lastIndexOf("/"));
						if ( listRelativeURL !== parentFolderPath ) {
							/*ds.controls.siteCrawler.addContent(parentFolderPath, ds.$("#dsSiteFiles a[href$='"+ parentFolderPath +"']").parents("tbody").eq(0).children("tr").eq(1).children("td").eq(1).children("ul"), "<li class='file current dynamic'><table><tbody><tr><td class='expandControl'><img border='0' alt='expand' src='/_layouts/15/images/collapseplus.gif'/></td><td class='contentIcon'><img border='0' alt='web part page' src='/_layouts/15/images/icsmrtpg.gif'/></td><td class='contentLink'><a href='"+item.File.ServerRelativeUrl+"'>"+item.File.Name+"</a></td><td class='versionCount'></td><td class='contentSize'>"+ item.File.Length +"</td><td class='versionLabel'>"+item.File.UIVersionLabel+"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr><tr><td colspan='2'></td><td colspan='6'><ul class='fileVersions'></ul></td></tr></tbody></table></li>");*/
							ds.controls.siteCrawler.addContent(parentFolderPath, ds.controls.siteCrawler.getSubItemWrapperForRelativeUrl(parentFolderPath), "<li class='file current dynamic'><table><tbody><tr><td class='expandControl'><img border='0' alt='expand' src='/_layouts/15/images/collapseplus.gif'/></td><td class='contentIcon'><img border='0' alt='web part page' src='/_layouts/15/images/icsmrtpg.gif'/></td><td class='contentLink'><a href='"+item.File.ServerRelativeUrl+"'>"+item.File.Name+"</a></td><td class='versionCount'></td><td class='contentSize'>"+ item.File.Length +"</td><td class='versionLabel'>"+item.File.UIVersionLabel+"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr><tr><td colspan='2'></td><td colspan='6'><ul class='fileVersions'></ul></td></tr></tbody></table></li>");
						}
						else {
							/*ds.controls.siteCrawler.addContent(listRelativeURL, ds.$("#dsSiteFiles a[href$='"+ listRelativeURL +"']").parents("tbody").eq(0).children("tr").eq(1).children("td").eq(1).children("ul"), "<li class='file current dynamic'><table><tbody><tr><td class='expandControl'><img border='0' alt='expand' src='/_layouts/15/images/collapseplus.gif'/></td><td class='contentIcon'><img border='0' alt='web part page' src='/_layouts/15/images/icsmrtpg.gif'/></td><td class='contentLink'><a href='"+item.File.ServerRelativeUrl+"'>"+item.File.Name+"</a></td><td class='versionCount'></td><td class='contentSize'>"+ item.File.Length +"</td><td class='versionLabel'>"+item.File.UIVersionLabel+"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr><tr><td colspan='2'></td><td colspan='6'><ul class='fileVersions'></ul></td></tr></tbody></table></li>");*/
							ds.controls.siteCrawler.addContent(listRelativeURL, ds.controls.siteCrawler.getSubItemWrapperForRelativeUrl(listRelativeURL), "<li class='file current dynamic'><table><tbody><tr><td class='expandControl'><img border='0' alt='expand' src='/_layouts/15/images/collapseplus.gif'/></td><td class='contentIcon'><img border='0' alt='web part page' src='/_layouts/15/images/icsmrtpg.gif'/></td><td class='contentLink'><a href='"+item.File.ServerRelativeUrl+"'>"+item.File.Name+"</a></td><td class='versionCount'></td><td class='contentSize'>"+ item.File.Length +"</td><td class='versionLabel'>"+item.File.UIVersionLabel+"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr><tr><td colspan='2'></td><td colspan='6'><ul class='fileVersions'></ul></td></tr></tbody></table></li>");
						}
						if ( typeof(item.File.Versions.results) === "object" ) {
							for ( var iV = 0; iV < item.File.Versions.results.length; iV++ ){
								var parentFilePath = item.File.ServerRelativeUrl;
								/*ds.controls.siteCrawler.addContent(parentFilePath, ds.$("#dsSiteFiles a[href$='"+ parentFilePath +"']").parents("tbody").eq(0).children("tr").eq(1).children("td").eq(1).children("ul"), "<li class='file fileVersion dynamic'><table><tbody><tr><td class='expandControl'></td><td class='contentIcon'><span class='ms-cui-img-16by16 ms-cui-img-cont-float ms-cui-imageDisabled' unselectable='on'><img class='' style='top: -99px;left: -55px;' unselectable='on' src='/_layouts/15/1033/images/formatmap16x16.png?rev=23'></span></td><td class='contentLink'><a href='"+item.File.Versions.results[iV].Url+"'>"+item.File.Name+"</a></td><td class='versionCount'></td><td class='contentSize'>"+ item.File.Versions.results[iV].Size +"</td><td class='versionLabel'>"+item.File.Versions.results[iV].VersionLabel +"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr></tbody></table></li>");*/
								ds.controls.siteCrawler.addContent(parentFilePath, ds.$("#dsSiteFiles li.file:not(.fileVersion) > table > tbody > tr:first-child > td.contentLink > a[href$='"+ parentFilePath +"']").parents("tbody").eq(0).children("tr").eq(1).children("td").eq(1).children("ul"), "<li class='file fileVersion dynamic'><table><tbody><tr><td class='expandControl'></td><td class='contentIcon'><span class='ms-cui-img-16by16 ms-cui-img-cont-float ms-cui-imageDisabled' unselectable='on'><img class='' style='top: -99px;left: -55px;' unselectable='on' src='/_layouts/15/1033/images/formatmap16x16.png?rev=23'></span></td><td class='contentLink'><a href='"+item.File.Versions.results[iV].Url+"'>"+item.File.Name+"</a></td><td class='versionCount'></td><td class='contentSize'>"+ item.File.Versions.results[iV].Size +"</td><td class='versionLabel'>"+item.File.Versions.results[iV].VersionLabel +"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr></tbody></table></li>");
								/*ds.controls.siteCrawler.addContent(parentFilePath, ds.controls.siteCrawler.getSubItemWrapperForRelativeUrl(parentFilePath), "<li class='file fileVersion dynamic'><table><tbody><tr><td class='expandControl'></td><td class='contentIcon'><span class='ms-cui-img-16by16 ms-cui-img-cont-float ms-cui-imageDisabled' unselectable='on'><img class='' style='top: -99px;left: -55px;' unselectable='on' src='/_layouts/15/1033/images/formatmap16x16.png?rev=23'></span></td><td class='contentLink'><a href='"+item.File.Versions.results[iV].Url+"'>"+item.File.Name+"</a></td><td class='versionCount'></td><td class='contentSize'>"+ item.File.Versions.results[iV].Size +"</td><td class='versionLabel'>"+item.File.Versions.results[iV].VersionLabel +"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr></tbody></table></li>");*/
							}
						}
					}catch(err){
						ds.util.log("Could not output an item which appeared to be a File; List = |"+ ds.lists[list].Id +"|, contentType = |"+ contentType +"|, fileType = |"+ fileType +"|", true);
						ds.util.log(item);
					}
				},
				outputFolder: function(list, item, contentType, fileType, listRelativeURL){
					try{
						var parentFolderPath = item.Folder.ServerRelativeUrl.substr(0,item.Folder.ServerRelativeUrl.lastIndexOf("/"));
						/*
						for ( checkList in ds.lists ) {
							if ( ds.lists[checkList].__metadata.id.indexOf(item.ParentList.__metadata.id) === 0 ) {

								break;
							}
						}
						*/
						if ( listRelativeURL !== parentFolderPath ) {
							/*ds.controls.siteCrawler.addContent(parentFolderPath, ds.$("#dsSiteFiles a[href$='"+ parentFolderPath +"']").parents("tbody").eq(0).children("tr").eq(1).children("td").eq(1).children("ul"), "<li class='folder dynamic'><table><tbody><tr><td class='expandControl'><img border='0' alt='expand' src='/_layouts/15/images/collapseplus.gif'/></td><td class='contentIcon'><img border='0' alt='folder' src='/_layouts/15/images/folder.gif'/></td><td class='contentLink'><a href='"+item.Folder.ServerRelativeUrl+"'>"+item.Folder.Name+"</a></td><td class='versionCount'>"+item.Folder.ItemCount+"</td><td class='contentSize'></td><td class='versionLabel'></td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr><tr><td colspan='2'></td><td colspan='6'><ul class='folderContents'></ul></td></tr></tbody></table></li>");*/
							ds.controls.siteCrawler.addContent(parentFolderPath, ds.controls.siteCrawler.getSubItemWrapperForRelativeUrl(parentFolderPath), "<li class='folder dynamic'><table><tbody><tr><td class='expandControl'><img border='0' alt='expand' src='/_layouts/15/images/collapseplus.gif'/></td><td class='contentIcon'><img border='0' alt='folder' src='/_layouts/15/images/folder.gif'/></td><td class='contentLink'><a href='"+item.Folder.ServerRelativeUrl+"'>"+item.Folder.Name+"</a></td><td class='versionCount'>"+item.Folder.ItemCount+"</td><td class='contentSize'></td><td class='versionLabel'></td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr><tr><td colspan='2'></td><td colspan='6'><ul class='folderContents'></ul></td></tr></tbody></table></li>");
						}
						else {
							/*ds.controls.siteCrawler.addContent(listRelativeURL, ds.$("#dsSiteFiles a[href$='"+ listRelativeURL +"']").parents("tbody").eq(0).children("tr").eq(1).children("td").eq(1).children("ul"), "<li class='folder root dynamic'><table><tbody><tr><td class='expandControl'><img border='0' alt='expand' src='/_layouts/15/images/collapseplus.gif'/></td><td class='contentIcon'><img border='0' alt='folder' src='/_layouts/15/images/folder.gif'/></td><td class='contentLink'><a href='"+item.Folder.ServerRelativeUrl+"'>"+item.Folder.Name+"</a></td><td class='versionCount'>"+item.Folder.ItemCount+"</td><td class='contentSize'></td><td class='versionLabel'></td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr><tr><td colspan='2'></td><td colspan='6'><ul class='folderContents'></ul></td></tr></tbody></table></li>");*/
							ds.controls.siteCrawler.addContent(listRelativeURL, ds.controls.siteCrawler.getSubItemWrapperForRelativeUrl(listRelativeURL), "<li class='folder root dynamic'><table><tbody><tr><td class='expandControl'><img border='0' alt='expand' src='/_layouts/15/images/collapseplus.gif'/></td><td class='contentIcon'><img border='0' alt='folder' src='/_layouts/15/images/folder.gif'/></td><td class='contentLink'><a href='"+item.Folder.ServerRelativeUrl+"'>"+item.Folder.Name+"</a></td><td class='versionCount'>"+item.Folder.ItemCount+"</td><td class='contentSize'></td><td class='versionLabel'></td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr><tr><td colspan='2'></td><td colspan='6'><ul class='folderContents'></ul></td></tr></tbody></table></li>");
						}
					}catch(err){
						ds.util.log("Could not output an item which appeared to be a File; List = |"+ ds.lists[list].Id +"|, contentType = |"+ contentType +"|, fileType = |"+ fileType +"|", true);
						ds.util.log(item);
					}
				},
				outputDocument: function(list, item, contentType, fileType, listRelativeURL){
					try{
						var parentFolderPath = item.File.ServerRelativeUrl.substr(0,item.File.ServerRelativeUrl.lastIndexOf("/"));
						if ( listRelativeURL !== parentFolderPath ) {
							/*ds.controls.siteCrawler.addContent(parentFolderPath, ds.$("#dsSiteFiles a[href$='"+ parentFolderPath +"']").parents("tbody").eq(0).children("tr").eq(1).children("td").eq(1).children("ul"), "<li class='file current dynamic'><table><tbody><tr><td class='expandControl'><img border='0' alt='expand' src='/_layouts/15/images/collapseplus.gif'/></td><td class='contentIcon'><img border='0' alt='file' src='/_layouts/15/images/icgen.gif'/></td><td class='contentLink'><a href='"+item.File.ServerRelativeUrl+"'>"+item.File.Name+"</a></td><td class='versionCount'></td><td class='contentSize'>"+ item.File.Length +"</td><td class='versionLabel'>"+item.File.UIVersionLabel+"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr><tr><td colspan='2'></td><td colspan='6'><ul class='fileVersions'></ul></td></tr></tbody></table></li>");*/
							ds.controls.siteCrawler.addContent(parentFolderPath, ds.controls.siteCrawler.getSubItemWrapperForRelativeUrl(parentFolderPath), "<li class='file current dynamic'><table><tbody><tr><td class='expandControl'><img border='0' alt='expand' src='/_layouts/15/images/collapseplus.gif'/></td><td class='contentIcon'><img border='0' alt='file' src='/_layouts/15/images/icgen.gif'/></td><td class='contentLink'><a href='"+item.File.ServerRelativeUrl+"'>"+item.File.Name+"</a></td><td class='versionCount'></td><td class='contentSize'>"+ item.File.Length +"</td><td class='versionLabel'>"+item.File.UIVersionLabel+"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr><tr><td colspan='2'></td><td colspan='6'><ul class='fileVersions'></ul></td></tr></tbody></table></li>");
						}
						else {
							/*ds.controls.siteCrawler.addContent(listRelativeURL, ds.$("#dsSiteFiles a[href$='"+ listRelativeURL +"']").parents("tbody").eq(0).children("tr").eq(1).children("td").eq(1).children("ul"), "<li class='file current dynamic'><table><tbody><tr><td class='expandControl'><img border='0' alt='expand' src='/_layouts/15/images/collapseplus.gif'/></td><td class='contentIcon'><img border='0' alt='file' src='/_layouts/15/images/icgen.gif'/></td><td class='contentLink'><a href='"+item.File.ServerRelativeUrl+"'>"+item.File.Name+"</a></td><td class='versionCount'></td><td class='contentSize'>"+ item.File.Length +"</td><td class='versionLabel'>"+item.File.UIVersionLabel+"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr><tr><td colspan='2'></td><td colspan='6'><ul class='fileVersions'></ul></td></tr></tbody></table></li>");*/
							ds.controls.siteCrawler.addContent(listRelativeURL, ds.controls.siteCrawler.getSubItemWrapperForRelativeUrl(listRelativeURL), "<li class='file current dynamic'><table><tbody><tr><td class='expandControl'><img border='0' alt='expand' src='/_layouts/15/images/collapseplus.gif'/></td><td class='contentIcon'><img border='0' alt='file' src='/_layouts/15/images/icgen.gif'/></td><td class='contentLink'><a href='"+item.File.ServerRelativeUrl+"'>"+item.File.Name+"</a></td><td class='versionCount'></td><td class='contentSize'>"+ item.File.Length +"</td><td class='versionLabel'>"+item.File.UIVersionLabel+"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr><tr><td colspan='2'></td><td colspan='6'><ul class='fileVersions'></ul></td></tr></tbody></table></li>");
						}
						if ( typeof(item.File.Versions.results) === "object" ) {
							for ( var iV = 0; iV < item.File.Versions.results.length; iV++ ){
								var parentFilePath = item.File.ServerRelativeUrl;
								/*ds.controls.siteCrawler.addContent(parentFilePath, ds.$("#dsSiteFiles a[href$='"+ parentFilePath +"']").parents("tbody").eq(0).children("tr").eq(1).children("td").eq(1).children("ul"), "<li class='file fileVersion dynamic'><table><tbody><tr><td class='expandControl'></td><td class='contentIcon'><span class='ms-cui-img-16by16 ms-cui-img-cont-float ms-cui-imageDisabled' unselectable='on'><img class='' style='top: -99px;left: -55px;' unselectable='on' src='/_layouts/15/1033/images/formatmap16x16.png?rev=23'></span></td><td class='contentLink'><a href='"+item.File.Versions.results[iV].Url+"'>"+item.File.Name+"</a></td><td class='versionCount'></td><td class='contentSize'>"+ item.File.Versions.results[iV].Size +"</td><td class='versionLabel'>"+item.File.Versions.results[iV].VersionLabel +"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr></tbody></table></li>");*/
								ds.controls.siteCrawler.addContent(parentFilePath, ds.$("#dsSiteFiles li.file:not(.fileVersion) > table > tbody > tr:first-child > td.contentLink > a[href$='"+ parentFilePath +"']").parents("tbody").eq(0).children("tr").eq(1).children("td").eq(1).children("ul"), "<li class='file fileVersion dynamic'><table><tbody><tr><td class='expandControl'></td><td class='contentIcon'><span class='ms-cui-img-16by16 ms-cui-img-cont-float ms-cui-imageDisabled' unselectable='on'><img class='' style='top: -99px;left: -55px;' unselectable='on' src='/_layouts/15/1033/images/formatmap16x16.png?rev=23'></span></td><td class='contentLink'><a href='"+item.File.Versions.results[iV].Url+"'>"+item.File.Name+"</a></td><td class='versionCount'></td><td class='contentSize'>"+ item.File.Versions.results[iV].Size +"</td><td class='versionLabel'>"+item.File.Versions.results[iV].VersionLabel +"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr></tbody></table></li>");
								/*ds.controls.siteCrawler.addContent(parentFilePath, ds.controls.siteCrawler.getSubItemWrapperForRelativeUrl(parentFilePath), "<li class='file fileVersion dynamic'><table><tbody><tr><td class='expandControl'></td><td class='contentIcon'><span class='ms-cui-img-16by16 ms-cui-img-cont-float ms-cui-imageDisabled' unselectable='on'><img class='' style='top: -99px;left: -55px;' unselectable='on' src='/_layouts/15/1033/images/formatmap16x16.png?rev=23'></span></td><td class='contentLink'><a href='"+item.File.Versions.results[iV].Url+"'>"+item.File.Name+"</a></td><td class='versionCount'></td><td class='contentSize'>"+ item.File.Versions.results[iV].Size +"</td><td class='versionLabel'>"+item.File.Versions.results[iV].VersionLabel +"</td><td></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr></tbody></table></li>");*/
							}
						}
					}catch(err){
						ds.util.log("Could not output an item which appeared to be a File; List = |"+ ds.lists[list].Id +"|, contentType = |"+ contentType +"|, fileType = |"+ fileType +"|", true);
						ds.util.log(item);
					}
				},
				addContent: function(parentRelativePath, jqObjectAppend, appendHTML){
					if ( ds.$(jqObjectAppend).length < 1 ) {
						ds.controls.siteCrawler.arrWaiting.push({"parentRelativePath":parentRelativePath,"jqObjectAppend":jqObjectAppend, "appendHTML": appendHTML});
					}
					else {
						ds.$(jqObjectAppend).append(appendHTML);
						/*
						ds.$(jqObjectAppend).children("LI").eq(ds.$(jqObjectAppend).children("LI").length-1).on("click",function(e){
							if ( $(this).children("UL").hasClass("expanded") === false ) {
								$(this).children("UL").addClass("expanded");
							}
							else {
								$(this).children("UL").removeClass("expanded");
							}
							e.preventDefault();
							e.stopPropagation();
							return false;
						});
						*/
					}
				},
				outputList: function(list, listRelativeURL){
					ds.$("#dsSiteFiles").append("<li class='list static'><table><tbody><tr><td class='expandControl'><img border='0' alt='expand' src='/_layouts/15/images/collapseplus.gif'/></td><td class='contentIcon'><img border='0' alt='list' src='/_layouts/15/images/list.gif'/></td><td class='contentLink'><a href='"+ listRelativeURL +"'>"+ list +"</a></td><td class='versionCount'>"+ds.lists[list].ItemCount+"</td><td class='contentSize'></td><td class='versionLabel'></td><td class='viewContent'><span class='viewFile'>View</span></td></td><td class='downloadContent'><span class='downloadFile'>Download</span></td></tr><tr><td colspan='2'></td><td colspan='6'><ul class='listContents'></ul></td></tr></tbody></table></li>");
				},
				outputFromWaiting: function(afterDone){
					var iLoopBreak = 0;
					if ( ds.controls.siteCrawler.arrWaiting.length > 0 ) {
						for ( var i = 0; i < ds.controls.siteCrawler.arrWaiting.length; i++ ) {
							if ( ds.controls.siteCrawler.getSubItemWrapperForRelativeUrl(ds.controls.siteCrawler.arrWaiting[i].parentRelativePath).length > 0 ) {
								ds.util.log(ds.controls.siteCrawler.arrWaiting[i],true);
								ds.controls.siteCrawler.getSubItemWrapperForRelativeUrl(ds.controls.siteCrawler.arrWaiting[i].parentRelativePath).append(ds.controls.siteCrawler.arrWaiting[i].appendHTML);
							}
						}
						if ( typeof(afterDone) === "function" ) {
							afterDone();
						}
					}
				},
				waitUntilAllDone: function(afterDoneWaitingFx){
					var bDetector = false;
					var iLoopBreak = 0;
					var wfDone = setInterval(function(){
					
						var bNotDone = false;
						iLoopBreak++;
						if ( iLoopBreak > 10000 ) {
							ds.util.log("breaking interval loop",true);
							clearInterval(wfDone);
						}
						for ( var iIntvl = 0; iIntvl < ds.controls.siteCrawler.arrIntvls.length; iIntvl++ ){
							if ( ds.intvls[ds.controls.siteCrawler.arrIntvls[iIntvl]].bDone === false ) {
								bNotDone = true;
								break;
							}
						}
						if ( bNotDone === false ) {
							for ( var iRO = 0; iRO < ds.controls.siteCrawler.arrROs.length; iRO++ ){
								if ( ds.repOp[ds.controls.siteCrawler.arrROs[iRO]].bDone === false ) {
									bNotDone = true;
									break;
								}
							}
						}
						if ( bNotDone === false ) { 
							bDetector = true;
							if ( typeof(afterDoneWaitingFx) === "function" ) {
								afterDoneWaitingFx();
							}
							clearInterval(wfDone);
						}
					//} while ( bDetector === false )
					}, 125);
				},
				populateVersionCounts: function(){
					ds.$("#dsSiteFiles li").each(function(iItem,elmItem){
						var itemVersionCount = ds.$(this).children("table").children("tbody").children("tr").children("td").children("ul").children("li").length;
						var itemHref = ds.$(this).children("table").children("tbody").children("tr").children("td.contentLink").children("a").attr("href");
						if ( itemVersionCount > 0 ) {
							ds.$(this).children("table").children("tbody").children("tr").children("td.versionCount").text(itemVersionCount);
						}
						else {
							ds.$(this).children("table").children("tbody").children("tr").children("td.expandControl").children("img").attr({"src":"/_layouts/15/images/blank.gif","width":"16px","alt":"no subitems to expand"});
						}
					});
					/*
					ds.$("#dsSiteFiles ul.fileVersions").each(function(){
						ds.$(this).parents("tbody").eq(0).children("tr").eq(0).children("td.versionCount").text(ds.$(this).children("li").length +" versions");
						if ( ds.$(this).children("li").length < 1 ) {
							ds.$(this).parents("tbody").eq(0).children("tr").eq(0).children("td").eq(0).children("img").attr({"src":"/_layouts/15/images/blank.gif","width":"16px","alt":"no subitems to expand"});
						}
					});
					*/
				},
				setupEvents: function(){
					ds.$("#dsSiteFiles li").each(function(i,elm){
						/*ds.$(this).on("click",ds.controls.siteCrawler.itemClicked);*/
						
						ds.$(this).on("click",function(e){
							
							if ( ds.$(this).children("TABLE").children("TBODY").children("TR").eq(1).children("TD").eq(1).children("UL").hasClass("expanded") === false ) {
								ds.$(this).children("TABLE").children("TBODY").children("TR").eq(1).children("TD").eq(1).children("UL").addClass("expanded");
								ds.$(this).children("TABLE").children("TBODY").children("TR").eq(0).children("TD").eq(0).children("img").attr({"src":"/_layouts/15/images/collapseminus.gif","alt":"collapse"});
							}
							else {
								ds.$(this).children("TABLE").children("TBODY").children("TR").eq(1).children("TD").eq(1).children("UL").removeClass("expanded");
								ds.$(this).children("TABLE").children("TBODY").children("TR").eq(0).children("TD").eq(0).children("img").attr({"src":"/_layouts/15/images/collapseplus.gif","alt":"expand"});
							}
							e.preventDefault();
							e.stopPropagation();
							return false;
						});
					});
				},
				itemClicked: function(e){
					ds.util.log(e,true);
					var itemWrapper = ds.$(e.target);
					var itemUrl = itemWrapper.children("table").children("tbody").children("tr").children("td.contentLink").children("a").attr("href");
					var subItemWrapper = ds.controls.siteCrawler.getSubItemWrapperForRelativeUrl(itemUrl);
					var expandControl = itemWrapper.children("table").children("tbody").children("tr").children("td.expandControl").children("img");
					if ( subItemWrapper.hasClass("expanded") === false ){
						subItemWrapper.addClass("expanded");
						expandControl.attr({"src":"/_layouts/15/images/collapseminus.gif","alt":"collapse"});
					}
					else {
						subItemWrapper.removeClass("expanded");
						expandControl.attr({"src":"/_layouts/15/images/collapseplus.gif","alt":"expand"});
					}
					e.preventDefault();
					e.stopPropagation();
					return false;
				},
				findByRelativeUrl: function(itemHrefEndsWith){
					return ds.$("#dsSiteFiles a[href='"+ itemHrefEndsWith +"']").parents("li").eq(0);
				},
				getSubItemWrapperForRelativeUrl: function(itemHrefEndsWith){
					return ds.controls.siteCrawler.findByRelativeUrl(itemHrefEndsWith).children("table").children("tbody").children("tr").children("td").children("ul");
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
				ds.util.getBrowserNameAndVersion(function(oBrowser){ds.util.log("DS Magic for SharePoint namespace detected browser as |" + oBrowser.browserName +"| and version |"+ oBrowser.browserVersion +"|",true);});
				ds.$("#DeltaSiteLogo").empty().append("<div class='ds-magic-logo-wrapper' unselectable='on'><span class='ds-magic-logo-content-letter' unselectable='on'>d</span><span class='ds-magic-logo-content-letter' unselectable='on'>s</span><span class='ds-magic-logo-content-fa' unselectable='on'><i class='fa fa-magic'></i></span></div>");
			}
		},
		configure: {
			load: function(){
				ds.stor.configGui = {};
				ds.controls.codeEditor.addScripts(function(){
					ds.util.appendToMain("<div class=\'ds-config-gui\'><div class=\'ds-config-gui-top-menu\'><table align=\'left\' border=\'0\' cellpadding=\'0\' cellspacing=\'2\'><tbody><tr><td><button type=\'button\' class=\'ds-psudo-button ds-config-btn-save\'><span class=\'ds-config-btn\'><i class=\'fa fa-gears\'></i>&nbsp;Save</span></button></td><td><button type=\'button\' class=\'ds-psudo-button ds-config-btn-cancel\'><span class=\'ds-config-btn\'><i class=\'fa fa-close\'></i>&nbsp;Cancel</span></button></td><td><button type=\'button\' class=\'ds-psudo-button ds-config-btn-new\'><span class=\'ds-config-btn\'><i class=\'fa fa-plus-circle\'></i>&nbsp;New</span></button></td></tr></tbody></table></div><h3 class=\'ds-config-section-header\' restListName=\'\' tabIndex=\'\'><table class=\'ds-config-section-header-content-wrapper\' border=\'0\' cellpadding=\'2\' cellspacing=\'2\'><tbody><tr><td>{<span class=\'ds-config-section-index\'></span>}</td><td class=\'ds-config-section-header-name\'></td><td class=\'ds-config-section-guiControl-move-up\'><span class=\'ds-config-section-move-up\'><i class=\'fa fa-arrow-up\'></i>&nbsp;Up</span></td><td class=\'ds-config-section-guiControl-move-down\'><span class=\'ds-config-section-move-down\'><i class=\'fa fa-arrow-down\'></i>&nbsp;Down</span></td></tr></tbody></table></h3><div class=\'ds-config-section-wrapper\' restListName=\'\' tabIndex=\'\'><table class=\'ds-config-section-table-wrapper\' border=\'0\' cellpadding=\'2\' cellspacing=\'2\'><tbody><tr><td></td></tr></tbody></table></div><h3 class=\'ds-config-section-header masterSettings\'><table class=\'ds-config-section-header-content-wrapper\' border=\'0\' cellpadding=\'2\' cellspacing=\'2\'><tbody><tr><td>{<span class=\'ds-config-section-index\'>0</span>}</td><td class=\'ds-config-section-header-name\'>master settings</td></tr></tbody></table></h3><div class=\'ds-config-section-wrapper masterSettings\'><table class=\'ds-config-section-table-wrapper\' border=\'0\' cellpadding=\'2\' cellspacing=\'2\'><tbody><tr><td><h2 title=\'Optional\'>initFx (javascript function) <img border=\'0\' src=\'_layouts/images/helpicon.gif\' title=\'Double click the code to update the syntax highlighting\'/></h2><div class=\'ds-masterSettings-initFx-wrapper\'><pre><code class=\'hljs javascript js\'><div contenteditable=\'true\' class=\'ms-rtestate-write ms-rteflags-0 ms-rtestate-field ds-masterSettings-initFx-js hljs javascript js\'></div></code></pre></div></td></tr><tr><td><h2 title=\'Optional\'>afterFx (javascript function) <img border=\'0\' src=\'_layouts/images/helpicon.gif\' title=\'Double click the code to update the syntax highlighting\'/></h2><div class=\'ds-masterSettings-afterFx-wrapper\'><pre><code class=\'hljs javascript js\'><div contenteditable=\'true\' class=\'ms-rtestate-write ms-rteflags-0 ms-rtestate-field ds-masterSettings-afterFx-js hljs javascript js\'></div></code></pre></div></td></tr></tbody></table></div></div>");
					ds.$(".ds-config-gui").css({"position":"fixed","width":"90%","height":"90%","bottom":"5%","right":"5%"});
					ds.$(".ds-config-gui").wrap("<div class='ds-psudoPopupWrapper'></div>");
					ds.configure.init();
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
					ds.configure.populateCurrentSettings();
					/* global cancel button (hide configure GUI)*/
					ds.$(".ds-config-btn-cancel").click(function(){
						ds.$(".ds-psudoPopupWrapper").remove();
					});
					/* global cancel button (hide configure GUI)*/
					ds.$(".ds-config-btn-save").click(function(){
						var blob = {"masterSettings": dsMagicConfig.captureMasterSettings()};
						dsMagicConfig.saveDsMagicSettings(JSON.stringify(blob));
					});
					iSettingIndex++;
				});
			},
			events: {},
			saveDsMagicSettings: function(jsonBlob){
				var jsonBlob = {"masterSettings": ds.configure.captureMasterSettings(),"relatedRecordsSettings":ds.configure.captureRelatedRecordsSettings(),"relatedRecords": ds.configure.captureAllTabsUISettings()};
				/* get record ID from dsFormSettings to update*/
				var nID = 0;
				var lisOrLibraryName = ds.p.pageListName;
				var formOrPageName = ds.p.pageFormName;
				var bSaved = false;
				ds.util.getSettingsForCurrentPage(function(formSettings){
					if ( ds.stor.existingFormSettings === false ) {
						/* this is a new record save operation*/
						ds.util.log("saving a new record to dsFormSettings for current page", true);
						ds.rest.list.item.add({"Title":_spPageContextInfo.serverRequestPath,"FormNameURL":formOrPageName,"blbRelRecs":JSON.stringify(jsonBlob)}, ds.lists.dsformsettings.Id, function(){
							bSaved = true;
							var bResponse = confirm("settings have been saved. reload the page?");
							if ( bResponse === false ) {
								ds.$(".ds-psudoPopupWrapper").remove();
								ds.$(".ds-relatedRecordsUI").show();
							}
							else {
								window.location.reload();
							}
						});
					}
					else {
						nID = ds.lists.dsformsettings.items.results[0].Id;
						ds.util.log("found record to update in dsFormSettings for current form ("+ nID +")", true);
						ds.rest.list.item.update({"blbRelRecs":JSON.stringify(jsonBlob)}, ds.lists.dsformsettings.Id, nID, function(){
							bSaved = true;
							var bResponse = confirm("settings have been saved. reload the page?");
							if ( bResponse === false ) {
								ds.$(".ds-psudoPopupWrapper").remove();
								ds.$(".ds-relatedRecordsUI").show();
							}
							else {
								window.location.reload();
							}
						});
					}
				},false,true);
			},
			captureMasterSettings: function(){
				var masterSettings = {};
				masterSettings.initFx = ds.util.escapeJS(ds.util.minifyJS(ds.$(".ds-masterSettings-initFx-js").text()));
				masterSettings.afterFx = ds.util.escapeJS(ds.util.minifyJS(ds.$(".ds-masterSettings-afterFx-js").text()));
				return masterSettings;
			},
			captureAllTabsUISettings: function(){
				var arrAllTabSettings = [];
				ds.$(".ds-config-tab-wrapper:not(.masterSettings)").each(function(){
					var $tabWrapper = ds.$(this);
					if ( ds.$(this).hasClass("ds-htmlTab") === false ) {
						arrAllTabSettings.push(ds.configure.captureRelatedRecordsTabSettings($tabWrapper));
					}
					else {
						arrAllTabSettings.push(ds.configure.captureHTMLTabSettings($tabWrapper));
					}
				});
				return arrAllTabSettings;
			},
			captureRelatedRecordsSettings: function(){
				var relatedRecordsSettings = ds.stor.formSettings.relatedRecordsSettings;
				return relatedRecordsSettings;
			},
			captureRelatedRecordsTabSettings: function($tabWrapper){
				var thisTab = {};
				thisTab.listName = $tabWrapper.find(".ds-tab-list-name").val();
				thisTab.listFaClass = $tabWrapper.find(".ds-tab-list-Fa-class").val();
				thisTab.tabText = $tabWrapper.find(".ds-tab-display-text").val();
				thisTab.tabHeaderHTML = ds.util.escapeJS(ds.util.minifyJS($tabWrapper.find(".ds-tab-header-html").text()));
				thisTab.tabTableFields = [];
				$tabWrapper.find(".ds-tab-table-fields-tbody TR").each(function(){
					var oTF = {};
					oTF.fin = ds.$(this).find(".ds-tab-table-field-fin OPTION:selected").val();
					oTF.label = ds.$(this).find(".ds-tab-table-field-label").val();
					try{oTF.formatAs = ds.$(this).find(".ds-tab-table-field-formatAs").val();}catch(err){oTF.formatAs = '';}
					if ( oTF.fin === 'HTMLSnippit' ) {
						try{
							oTF.formatAs = ds.util.escapeJS(ds.util.minifyJS(ds.$(this).find(".ds-tab-table-field-htmlsnippit").text()));
						}
						catch(err){
							oTF.formatAs = '';
						}
					}
					try{oTF.formatString = ds.$(this).find(".ds-tab-table-field-formatString").val();}catch(err){oTF.formatString = '';}
					try{oTF.widthPx = ds.$(this).find(".ds-tab-table-field-widthPx").val();}catch(err){oTF.widthPx = '';}
					try{oTF.textAlign = ds.$(this).find(".ds-tab-table-field-textAlign").val();}catch(err){oTF.textAlign = '';}
					try{oTF.verticalAlign = ds.$(this).find(".ds-tab-table-field-verticalAlign").val();}catch(err){oTF.verticalAlign = '';}
					thisTab.tabTableFields.push(oTF);
				});
				thisTab.tabFooterHTML = ds.util.escapeJS(ds.util.minifyJS($tabWrapper.find(".ds-tab-footerButton-html").text()));
				thisTab.psudoPopupSaveNewFx = ds.util.escapeJS(ds.util.minifyJS($tabWrapper.find(".ds-tab-saveNewFx-js").text()));
				thisTab.psudoPopupSaveUpdateFx = ds.util.escapeJS(ds.util.minifyJS($tabWrapper.find(".ds-tab-saveUpdateFx-js").text()));
				return thisTab;
			},
			captureHTMLTabSettings: function($tabWrapper){
				var thisTab = {};
				thisTab.listName = "HTML";
				thisTab.tabText = $tabWrapper.find(".ds-tab-display-text").val();
				thisTab.listFaClass = $tabWrapper.find(".ds-tab-list-Fa-class").val();
				thisTab.tabHeaderHTML = ds.util.escapeJS(ds.util.minifyJS($tabWrapper.find(".ds-htmlTab-html-content").text()));
				thisTab.tabFooterHTML = ds.util.escapeJS(ds.util.minifyJS($tabWrapper.find(".ds-htmlTab-afterFx-js").text()));
				return thisTab;
			},
			populateCurrentSettings: function() {
				ds.util.getSettingsForCurrentPage(function(formSettings){
					var masterSettings = formSettings.masterSettings;
					if ( typeof(formSettings.relatedRecords) !== "undefined" ) {
						/*
						for ( var iFS = 0; iFS < formSettings.relatedRecords.length; iFS++ ) {
							var currRelatedListSettings = formSettings.relatedRecords[iFS]; 
							ds.controls.tabs.configure.populateCurrentSettings(currRelatedListSettings);
						}
						*/
					}
					ds.stor.masterConfigNew = ds.$(".ds-config-section-wrapper:not(.masterSettings)").eq(0);
					ds.stor.masterConfigNewHeader = ds.$(".ds-config-section-header:not(.masterSettings)").eq(0);
					ds.$(".ds-config-section-wrapper:not(.masterSettings)").eq(0).remove();
					ds.$(".ds-config-section-header:not(.masterSettings)").eq(0).remove();
					if ( typeof(formSettings.relatedRecordsSettings) !== "undefined" ) {
						if ( formSettings.relatedRecordsSettings.hideAddRelatedRecordButtons === true ) {
							ds.$("#chkHideAddRelatedRecordsButtons").prop("checked",true);
						}
						else {
							ds.$("#chkHideAddRelatedRecordsButtons").prop("checked",false);
						}
						if ( formSettings.relatedRecordsSettings.hideFilterTab === true ) {
							ds.$("#chkHideFilterTab").prop("checked",true);
						}
						else {
							ds.$("#chkHideFilterTab").prop("checked",false);
						}
					}
					try{
						eval("formSettings.masterSettings.initFx = "+ formSettings.masterSettings.initFx +";");
						ds.$(".ds-masterSettings-initFx-js").text(js_beautify(ds.util.getFunctionCode(formSettings.masterSettings.initFx)));
					}catch(err){}
					try{
						eval("formSettings.masterSettings.afterFx = "+ formSettings.masterSettings.afterFx +";");
						ds.$(".ds-masterSettings-afterFx-js").text(js_beautify(ds.util.getFunctionCode(formSettings.masterSettings.afterFx)));
					}catch(err){}
					ds.configure.setupEvents();
				});
			},
			setupEvents: function(){
				hljs.configure({languages: ['html','css','javascript']});
				/* setup syntax highlighting for all codeEditor widgets*/
				ds.util.log("ds.controls.tabs.config.setupTabEventsForConfigGUI... calling ds.controls.codeEditor.setupEventsFx('.ds-masterSettings-initFx-js,.ds-masterSettings-afterFx-js')",true);
				ds.controls.codeEditor.setupEventsFx(".ds-masterSettings-initFx-js,.ds-masterSettings-afterFx-js");
			}
		},
		$:$,
		onLoad: setTimeout(function(){
			ds.util.log("DS Namespace loaded", true);
			/*
			$.noConflict();
			ds["$"] = jQuery;
			*/
			ds.util.log("jQuery version loaded = " + ds.$.fn.jquery, true);
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
					"X-RequestDigest": ds.$("#__REQUESTDIGEST").val()
				}
			});
			ds.util.log("DS Namespace jQuery extended with additional functions",true);
			ExecuteOrDelayUntilScriptLoaded(function(){
				ds.$(document).ready(function(){
					ds.util.log("Document.ready event fired",true);
					ds.util.getSPUIVersion(function(){ds.util.log("DS Namespace detected SP UI version of |"+ ds.stor.session.uiVersion +"|",true);});
					ds.util.getPageType(function(){ds.util.log("DS Namespace detected page type of |"+ ds.stor.session.pageType +"|",true);});
					if ( ds.util.isPageInEditMode() === false && ds.util.isPageInDialog() === false ) {
						ds.intvls.wfIdleToLoadResources.intvl = setInterval(ds.intvls.wfIdleToLoadResources.loopingFx, ds.intvls.wfIdleToLoadResources.pauseMS);
						if ( ds.p.pageListName === "dsMagicHelp" ) {
							ds.util.setupSyntaxHighlightingForCodeSamples();
						}
					}
					ds.controls.cssVariablesShim.addSupportAsNeeded();
					ds.$(document).off("ready");
				});
			},"sp.js");
		}, 100)
	};
}