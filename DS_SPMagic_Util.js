	var ds = {
	    p: {
	        root: window.location.protocol + '//' + window.location.host + _spPageContextInfo.webServerRelativeUrl,
	        rootNs: window.location.protocol + '//' + window.location.host + _spPageContextInfo.webServerRelativeUrl.substr(0, _spPageContextInfo.webServerRelativeUrl.length - 1),
	        page: window.location.protocol + '//' + window.location.host + _spPageContextInfo.webServerRelativeUrl + _spPageContextInfo.serverRequestPath,
	        pageListName: _spPageContextInfo.serverRequestPath.indexOf("/Lists/") >= 0 ? _spPageContextInfo.serverRequestPath.replace("/Lists/", "/").split("/")[1] : _spPageContextInfo.serverRequestPath.indexOf("/_catalogs/") >= 0 ? _spPageContextInfo.serverRequestPath.replace("/_catalogs/", "/").split("/")[1] : _spPageContextInfo.serverRequestPath.split("/")[1],
	        pageFormName: _spPageContextInfo.serverRequestPath.split("/")[_spPageContextInfo.serverRequestPath.split("/").length - 1].split(".")[0],
	        pageListId: _spPageContextInfo.pageListId.replace("{", "").replace("}", ""),
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
	                        byUserAccount: function(userKey) { return "_api/sp.userprofiles.peoplemanager/getpropertiesfor(@v)?@v='" + encodeURIComponent(userKey) + "'" }
	                    },
	                    profile: {
	                        current: '_api/web/CurrentUser',
	                        bySPUserId: function(spUID) { return "_api/web/GetUserById(" + spUID + ")" }
	                    }
	                },
	                listFile: function(listGUID, itemID) { return "_api/web/lists(guid'" + listGUID + "')/items(" + itemID + ")/File"; },
	                fileVersions: function(listGUID, itemID) { return "_api/web/lists(guid'" + listGUID + "')/items(" + itemID + ")/File/Versions"; }
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
	    settings: {
	        bDebug: true,
	        bOnlyGetListsWhenTold: false,
	        bDontCreateSettingsList: false,
	        bReloadNamespace: false,
	        idleTime: 0
	    },
	    stor: {
	        SPTZs: { /*SPTZ IDs from https://msdn.microsoft.com/library/microsoft.sharepoint.spregionalsettings.timezones.aspx*/
	            2: '(GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London',
	            3: '(GMT+01:00) Brussels, Copenhagen, Madrid, Paris',
	            4: '(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
	            5: '(GMT+02:00) Athens, Bucharest, Istanbul',
	            6: '(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
	            7: '(GMT+02:00) Minsk',
	            8: '(GMT-03:00) Brasilia',
	            9: '(GMT-04:00) Atlantic Time (Canada)',
	            10: '(GMT-05:00) Eastern Time (US and Canada)',
	            11: '(GMT-06:00) Central Time (US and Canada)',
	            12: '(GMT-07:00) Mountain Time (US and Canada)',
	            13: '(GMT-08:00) Pacific Time (US and Canada)',
	            14: '(GMT-09:00) Alaska',
	            15: '(GMT-10:00) Hawaii',
	            16: '(GMT-11:00) Midway Island, Samoa',
	            17: '(GMT+12:00) Auckland, Wellington',
	            18: '(GMT+10:00) Brisbane',
	            19: '(GMT+09:30) Adelaide',
	            20: '(GMT+09:00) Osaka, Sapporo, Tokyo',
	            21: '(GMT+08:00) Kuala Lumpur, Singapore',
	            22: '(GMT+07:00) Bangkok, Hanoi, Jakarta',
	            23: '(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi',
	            24: '(GMT+04:00) Abu Dhabi, Muscat',
	            25: '(GMT+03:30) Tehran',
	            26: '(GMT+03:00) Baghdad',
	            27: '(GMT+02:00) Jerusalem',
	            28: '(GMT-03:30) Newfoundland',
	            29: '(GMT-01:00) Azores',
	            30: '(GMT-02:00) Mid-Atlantic',
	            31: '(GMT) Casablanca, Monrovia, Reykjavik',
	            32: '(GMT-03:00) Buenos Aires, Georgetown',
	            33: '(GMT-04:00) Caracas, La Paz',
	            34: '(GMT-05:00) Indiana (East)',
	            35: '(GMT-05:00) Bogota, Lima, Quito, Rio Branco',
	            36: '(GMT-06:00) Saskatchewan',
	            37: '(GMT-06:00) Guadalajara, Mexico City, Monterrey',
	            38: '(GMT-07:00) Arizona',
	            39: '(GMT-12:00) International Date Line West',
	            40: '(GMT+12:00) Fiji Is., Kamchatka, Marshall Is.',
	            41: '(GMT+11:00) Magadan, Solomon Is., New Caledonia',
	            42: '(GMT+10:00) Hobart',
	            43: '(GMT+10:00) Guam, Port Moresby',
	            44: '(GMT+09:30) Darwin',
	            45: '(GMT+08:00) Beijing, Chongqing, Hong Kong S.A.R., Urumqi',
	            46: '(GMT+06:00) Almaty, Novosibirsk',
	            47: '(GMT+05:00) Islamabad, Karachi, Tashkent',
	            48: '(GMT+04:30) Kabul',
	            49: '(GMT+02:00) Cairo',
	            50: '(GMT+02:00) Harare, Pretoria',
	            51: '(GMT+03:00) Moscow, St. Petersburg, Volgograd',
	            53: '(GMT-01:00) Cape Verde Is.',
	            54: '(GMT+04:00) Baku',
	            55: '(GMT-06:00) Central America',
	            56: '(GMT+03:00) Nairobi',
	            57: '(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb',
	            58: '(GMT+05:00) Ekaterinburg',
	            59: '(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
	            60: '(GMT-03:00) Greenland',
	            61: '(GMT+06:30) Yangon (Rangoon)',
	            62: '(GMT+05:45) Kathmandu',
	            63: '(GMT+08:00) Irkutsk, Ulaan Bataar',
	            64: '(GMT+07:00) Krasnoyarsk',
	            65: '(GMT-04:00) Santiago',
	            66: '(GMT+05:30) Sri Jayawardenepura',
	            67: '(GMT+13:00) Nuku\'alofa',
	            68: '(GMT+10:00) Vladivostok',
	            69: '(GMT+01:00) West Central Africa',
	            70: '(GMT+09:00) Yakutsk',
	            71: '(GMT+06:00) Astana, Dhaka',
	            72: '(GMT+09:00) Seoul',
	            73: '(GMT+08:00) Perth',
	            74: '(GMT+03:00) Kuwait, Riyadh',
	            75: '(GMT+08:00) Taipei',
	            76: '(GMT+10:00) Canberra, Melbourne, Sydney',
	            77: '(GMT-07:00) Chihuahua, La Paz, Mazatlan',
	            78: '(GMT-08:00) Tijuana, Baja California',
	            79: '(GMT+02:00) Amman',
	            80: '(GMT+02:00) Beirut',
	            81: '(GMT-04:00) Manaus',
	            82: '(GMT+03:00) Tbilisi',
	            83: '(GMT+02:00) Windhoek',
	            84: '(GMT+04:00) Yerevan'
	        },
	        fieldType: {
	            /*https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spfieldtype.aspx*/
	            Invalid: 0,
	            Integer: 1,
	            Text: 2,
	            Note: 3,
	            DateTime: 4,
	            Counter: 5,
	            Choice: 6,
	            Lookup: 7,
	            Boolean: 8,
	            Number: 9,
	            Currency: 10,
	            URL: 11,
	            Computed: 12,
	            Threading: 13,
	            Guid: 14,
	            MultiChoice: 15,
	            GridChoice: 16,
	            Calculated: 17,
	            File: 18,
	            Attachments: 19,
	            User: 20,
	            Recurrence: 21,
	            CrossProjectLink: 22,
	            ModStat: 23,
	            Error: 24,
	            ContentTypeId: 25,
	            PageSeparator: 26,
	            ThreadIndex: 27,
	            WorkflowStatus: 28,
	            AllDayEvent: 29,
	            WorkflowEventType: 30,
	            Geolocation: null,
	            OutcomeChoice: null,
	            MaxItems: 31
	        },
	        listTemplates: {
	            /*https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.splisttemplatetype.aspx*/
	            InvalidType: -1,
	            NoListTemplate: 0,
	            GenericList: 100,
	            DocumentLibrary: 101,
	            Survey: 102,
	            Links: 103,
	            Announcements: 104,
	            Contacts: 105,
	            Events: 106,
	            Tasks: 107,
	            DiscussionBoard: 108,
	            PictureLibrary: 109,
	            DataSources: 110,
	            WebTemplateCatalog: 111,
	            UserInformation: 112,
	            WebPartCatalog: 113,
	            ListTemplateCatalog: 114,
	            XMLForm: 115,
	            MaterPageCatalog: 116,
	            NoCodeWorkflows: 117,
	            WorkflowProcess: 118,
	            WebPageLibrary: 119,
	            CustomGrid: 120,
	            SolutionCatalog: 121,
	            NoCodePublic: 122,
	            ThemeCatalog: 123,
	            DesignCatalog: 124,
	            AppDataCatalog: 125,
	            DataConnectionLibrary: 130,
	            WorkflowHistory: 140,
	            GanttTasks: 150,
	            HelpLibrary: 151,
	            AccessRequest: 160,
	            TasksWithTimelineAndHierarchy: 171,
	            MaintenanceLogs: 175,
	            Meetings: 200,
	            Agenda: 201,
	            MeetingUser: 202,
	            Decision: 204,
	            MeetingObjective: 207,
	            TextBox: 210,
	            ThingsToBring: 211,
	            HomePageLibrary: 212,
	            Posts: 301,
	            Comments: 302,
	            Categories: 303,
	            Facility: 402,
	            Whereabouts: 403,
	            CallTrack: 404,
	            Circulation: 405,
	            Timecard: 420,
	            Holidays: 421,
	            IMEDic: 499,
	            ExternalList: 600,
	            MySiteDocumentLibrary: 700,
	            IssueTracking: 1100,
	            AdminTasks: 1200,
	            HealthRules: 1220,
	            HealthReports: 1221,
	            DeveloperSiteDraftApps: 1230
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
	                Low: _spPageContextInfo.webPermMasks.Low
	            }
	        },
	        formSettings: null,
	        existingFormSettings: false,
	        commonContent: {}
	    },
	    lists: {},
	    ajax: {
	        lastCall: {},
	        create: function(restURL, object, fxCallback, fxFailed) {
	            ds.ajax.lastCall = { xhr: null, readyState: null, data: null, status: null, url: restURL, error: null };
	            var xhr = new XMLHttpRequest();
	            xhr.open('POST', restURL, true);
	            xhr.setRequestHeader("X-RequestDigest", document.getElementById("__REQUESTDIGEST").value);
	            xhr.setRequestHeader("IF-MATCH", "*");
	            xhr.setRequestHeader("X-HTTP-Method", "POST");
	            xhr.setRequestHeader("accept", "application/json;odata=verbose");
	            xhr.setRequestHeader("content-type", "application/json;odata=verbose");
	            xhr.onreadystatechange = function() {
	                ds.ajax.lastCall.readyState = xhr.readyState;
	                ds.ajax.lastCall.status = xhr.status;
	                if (xhr.readyState === 4) {
	                    if (xhr.status !== 200) {
	                        ds.ajax.lastCall.data = xhr.response;
	                        if (typeof(fxFailed) === "function") {
	                            fxFailed(xhr, xhr.response, xhr.status);
	                        }
	                    } else {
	                        var resp = JSON.parse(xhr.response);
	                        ds.ajax.lastCall.data = resp;
	                        if (typeof(fxCallback) === "function") {
	                            fxCallback(xhr, resp);
	                        }
	                    }
	                }
	            };
	            xhr.send(object);
	        },
	        update: function(restURL, object, fxCallback) {
	            ds.ajax.lastCall = { xhr: null, readyState: null, data: null, status: null, url: restURL, error: null };
	            var xhr = new XMLHttpRequest();
	            xhr.open('POST', restURL, true);
	            xhr.setRequestHeader("X-RequestDigest", document.getElementById("__REQUESTDIGEST").value);
	            xhr.setRequestHeader("IF-MATCH", "*");
	            xhr.setRequestHeader("X-HTTP-Method", "MERGE");
	            xhr.setRequestHeader("accept", "application/json;odata=verbose");
	            xhr.setRequestHeader("content-type", "application/json;odata=verbose");
	            xhr.onreadystatechange = function() {
	                ds.ajax.lastCall.readyState = xhr.readyState;
	                ds.ajax.lastCall.status = xhr.status;
	                if (xhr.readyState === 4) {
	                    if (xhr.status !== 200) {
	                        ds.ajax.lastCall.data = xhr.response;
	                        if (typeof(fxFailed) === "function") {
	                            fxFailed(xhr, xhr.response, xhr.status);
	                        }
	                    } else {
	                        var resp = JSON.parse(xhr.response);
	                        ds.ajax.lastCall.data = resp;
	                        if (typeof(fxCallback) === "function") {
	                            fxCallback(xhr, resp);
	                        }
	                    }
	                }
	            };
	            xhr.send(object);
	        },
	        delete: function(restURL, object, fxCallback) {
	            ds.ajax.lastCall = { xhr: null, readyState: null, data: null, status: null, url: restURL, error: null };
	            var xhr = new XMLHttpRequest();
	            xhr.open('POST', restURL, true);
	            xhr.setRequestHeader("X-RequestDigest", document.getElementById("__REQUESTDIGEST").value);
	            xhr.setRequestHeader("IF-MATCH", "*");
	            xhr.setRequestHeader("X-HTTP-Method", "DELETE");
	            xhr.setRequestHeader("accept", "application/json;odata=verbose");
	            xhr.setRequestHeader("content-type", "application/json;odata=verbose");
	            xhr.onreadystatechange = function() {
	                ds.ajax.lastCall.readyState = xhr.readyState;
	                ds.ajax.lastCall.status = xhr.status;
	                if (xhr.readyState === 4) {
	                    if (xhr.status !== 200) {
	                        ds.ajax.lastCall.data = xhr.response;
	                        if (typeof(fxFailed) === "function") {
	                            fxFailed(xhr, xhr.response, xhr.status);
	                        }
	                    } else {
	                        var resp = JSON.parse(xhr.response);
	                        ds.ajax.lastCall.data = resp;
	                        if (typeof(fxCallback) === "function") {
	                            fxCallback(xhr, resp);
	                        }
	                    }
	                }
	            };
	            xhr.send(object);
	        },
	        read: function(restURL, fxCallback, fxLastPage, fxFailed) {
	            ds.ajax.lastCall = { xhr: null, readyState: null, data: null, status: null, url: restURL, error: null };
	            var xhr = new XMLHttpRequest();
	            xhr.open('GET', restURL, true);
	            xhr.setRequestHeader("X-RequestDigest", document.getElementById("__REQUESTDIGEST").value);
	            xhr.setRequestHeader("accept", "application/json;odata=verbose");
	            xhr.setRequestHeader("content-type", "application/json;odata=verbose");
	            xhr.onreadystatechange = function() {
	                ds.ajax.lastCall.readyState = xhr.readyState;
	                ds.ajax.lastCall.status = xhr.status;
	                if (xhr.readyState === 4) {
	                    if (xhr.status !== 200) {
	                        ds.ajax.lastCall.data = xhr.response;
	                        if (typeof(fxFailed) === "function") {
	                            fxFailed(xhr, xhr.response, xhr.status);
	                        }
	                    } else {
	                        var resp = JSON.parse(xhr.response);
	                        ds.ajax.lastCall.data = resp;
	                        if (typeof(fxCallback) === "function") {
	                            fxCallback(xhr, resp);
	                        }
	                        if (typeof(resp.d.__next) !== "undefined") {
	                            ds.ajax.read(resp.d.__next, fxCallback, fxLastPage);
	                        } else if (typeof(fxLastPage) === "function") {
	                            fxLastPage(xhr, resp);
	                        }
	                    }
	                }
	            };
	            xhr.send();
	        },
	        capture: function(restURL, strCaptureResultsIn, fxLastPage, fxFailed) {
	            var fxCallback = function(xhr, data) {
	                if (typeof(data.d.results) !== undefined) {
	                    if (typeof(eval(strCaptureResultsIn)) !== "object") {
	                        eval(strCaptureResultsIn + "={};");
	                    }
	                    if (typeof(eval(strCaptureResultsIn + ".results")) !== "object") {
	                        strCaptureResultsIn += ".results";
	                        eval(strCaptureResultsIn + "=[];");
	                    }
	                    for (var i = 0; i < data.d.results.length; i++) {
	                        eval(strCaptureResultsIn + ".push(" + JSON.stringify(data.d.results[i]) + ");");
	                    }

	                } else {
	                    if (typeof(eval(strCaptureResultsIn)) !== "object") {
	                        eval(strCaptureResultsIn + "={};");
	                    }
	                    for (prop in data.d) {
	                        eval(strCaptureResultsIn + "[" + prop + "] = " + data.d[prop] + ";");
	                    }
	                }
	            }
	            ds.ajax.read(restURL, fxCallback, fxLastPage, fxFailed);
	        },
	        expandDeferred: function(strCaptureResultsFrom, fxCallBack, fxLastPage) {
	            /*
	            ds.rest.expandDeferred("ds.lists.meetingattendance.Views.__deferred.uri", true, false, undefined, undefined);
	            */
	            var restURL = eval(strCaptureResultsFrom);
	            var strCaptureResultsIn = strCaptureResultsFrom.substr(0, strCaptureResultsFrom.lastIndexOf("."));
	            strCaptureResultsIn = strCaptureResultsIn.substr(0, strCaptureResultsIn.lastIndexOf("."));
	            strCaptureResultsIn += ".results";
	            eval(strCaptureResultsIn + "=[];");
	            if (typeof(fxLastPage) === "undefined") {
	                var fxLastPage = function(xhr, data, strCaptureResultsFrom) {
	                    ds.log("ds.ajax.expandDeferred handled the last page of results from |" + strCaptureResultsFrom + "|", true);
	                };
	            }
	            if (typeof(fxCallBack) === "undefined") {
	                var fxCallBack = function(xhr, data, strCaptureResultsFrom) {
	                    ds.log("ds.ajax.expandDeferred handled a page of results from |" + strCaptureResultsFrom + "|", true);
	                    if (typeof(data.d.results) !== undefined) {
	                        eval(strCaptureResultsIn + " = " + strCaptureResultsIn + ".concat(" + data.d.results + ");");
	                    } else {
	                        for (prop in data.d) {
	                            eval(strCaptureResultsIn + "[" + prop + "] = " + data.d[prop] + ";");
	                        }
	                    }
	                }
	            }
	            ds.ajax.read(restURL, fxCallback, fxAfterLastPage);
	        }
	    },
	    rest: {
	        list: {
	            field: {
	                getDef: function(sListGUID, sFieldGUID, afterFx) {
	                    //"http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')"
	                },
	                add: function(sListGUID, sFieldTitle, sFieldType, bRequired, jsonFieldData, lookupListGUID, afterFx) {
	                    //ds.rest.list.field.add(ds.lists.tasks.def.Id, "NewField", "Number", false, null, function(){alert("Done!");});
	                    //ds.rest.list.field.add(ds.lists.tasks.def.Id, "NewField", "Choice", false, {Choices: { __metadata: { type: 'Collection(Edm.String)' }, 'results': ['High','Medium','Low']}}, function(){alert("Done!");});
	                    var restURL = ds.p.root + ds.p.rest.lists2013 + "(guid'" + sListGUID + "')/Fields";
	                    var field = { parameters: {} };
	                    if (ds.stor.fieldType[sFieldType] === 7) {
	                        var parameters = {
	                            __metadata: { type: 'SP.FieldCreationInformation' },
	                            Title: sFieldTitle,
	                            FieldTypeKind: ds.stor.fieldType[sFieldType],
	                            LookupListId: lookupListGUID,
	                            LookupFieldName: 'Title',
	                            Required: bRequired
	                        };
	                        restURL += "/addField"
	                    } else {
	                        var parameters = {
	                            __metadata: { type: 'SP.Field' + sFieldType },
	                            Title: sFieldTitle,
	                            FieldTypeKind: ds.stor.fieldType[sFieldType],
	                            Required: bRequired
	                        };
	                    }
	                    if (!jsonFieldData === false) {
	                        for (fd in jsonFieldData) {
	                            parameters[fd] = jsonFieldData[fd];
	                        }
	                    }
	                    //field.parameters = parameters
	                    field = parameters;
	                    intvl = ds.intvls.newIntvl("wfXHR");
	                    ds.intvls[intvl].pauseMS = 100;
	                    ds.intvls[intvl].forFx = 'ds.rest.list.field.add("' + JSON.stringify(field) + ', ' + sListGUID + '")';
	                    ds.intvls[intvl].desc = 'Do we have an afterFx? ' + typeof(afterFx);
	                    ds.intvls[intvl].doWorkFx = function() {
	                        return ds.intvls[intvl].bDone;
	                    };
	                    if (typeof(afterFx) === "function") { ds.intvls[intvl].successFx = afterFx; }
	                    ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx, ds.intvls[intvl].pauseMS);
	                    ds.rest.lastCall = { jqXHR: null, data: null, status: null, url: restURL };
	                    return ds.$.ajax({
	                        url: restURL,
	                        method: "POST",
	                        data: JSON.stringify(field)
	                    }).fail(function(jqXHR, textStatus, errorThrown) {
	                        ds.rest.lastCall.status = textStatus;
	                        ds.rest.lastCall.jqXHR = jqXHR;
	                        ds.intvls[intvl].bDone = true;
	                    }).done(function(data, textStatus, jqXHR) {
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
	                    if (!jsonFieldData === false) {
	                        for (fd in jsonFieldData) {
	                            field[fd] = jsonFieldData[fd];
	                        }
	                    }
	                    intvl = ds.intvls.newIntvl("wfXHR");
	                    ds.intvls[intvl].pauseMS = 100;
	                    ds.intvls[intvl].forFx = 'ds.rest.list.field.change("' + JSON.stringify(field) + ', ' + sListGUID + '")';
	                    ds.intvls[intvl].desc = 'Do we have an afterFx? ' + typeof(afterFx);
	                    ds.intvls[intvl].doWorkFx = function() {
	                        return ds.intvls[intvl].bDone;
	                    };
	                    if (typeof(afterFx) === "function") { ds.intvls[intvl].successFx = afterFx; }
	                    ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx, ds.intvls[intvl].pauseMS);
	                    ds.rest.lastCall = { jqXHR: null, data: null, status: null, url: ds.p.root + ds.p.rest.lists2013 + "(guid'" + sListGUID + "')/fields('" + sFieldGUID + "')" };
	                    return ds.$.ajax({
	                        url: ds.p.root + ds.p.rest.lists2013 + "(guid'" + sListGUID + "')/fields('" + sFieldGUID + "')",
	                        method: "POST",
	                        data: JSON.stringify(field)
	                    }).fail(function(jqXHR, textStatus, errorThrown) {
	                        ds.rest.lastCall.status = textStatus;
	                        ds.rest.lastCall.jqXHR = jqXHR;
	                        ds.intvls[intvl].bDone = true;
	                    }).done(function(data, textStatus, jqXHR) {
	                        ds.rest.lastCall.data = data;
	                        ds.rest.lastCall.status = textStatus;
	                        ds.rest.lastCall.jqXHR = jqXHR;
	                        ds.intvls[intvl].bDone = true;
	                    });
	                }
	            },
	            item: {
	                add: function(jsonItemData, sList, afterFx) {
	                    var metadataType = "";
	                    var bWaitToReturnResponse = false;
	                    var intvl = null;
	                    var listName = "";
	                    var urlRest = ds.p.root + ds.p.rest.lists2013;
	                    var bFoundListDef = false;
	                    var oListDef;
	                    var createdListItem = null;
	                    // Check if we were passed a GUID to see if we can build our rest URL directly with that
	                    if (SP.Guid.isValid(sList) === true) {
	                        urlRest += "(guid'" + sList + "')";
	                        oListDef = ds.util.findList("Id", sList);
	                        if (typeof(oListDef) === "object") {
	                            bFoundListDef = true;
	                            metadataType = oListDef.ListItemEntityTypeFullName;
	                        }
	                    } else {
	                        urlRest += "/GetByTitle('" + sList + "')";
	                        if (typeof(ds.lists[sList]) === "object") {
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
	                        __metadata: { "type": metadataType }
	                    }, jsonItemData);
	                    ds.rest.lastCall = { jqXHR: null, data: null, status: null, url: urlRest };
	                    ds.rest.lastCall.payload = JSON.stringify(item);
	                    ds.intvls[intvl].pauseMS = 100;
	                    ds.intvls[intvl].forFx = 'ds.rest.list.item.update("' + JSON.stringify(item) + ', ' + sList + '")';
	                    ds.intvls[intvl].desc = 'Do we have an afterFx? ' + typeof(afterFx);
	                    ds.intvls[intvl].doWorkFx = function() {
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
	                    }).fail(function(jqXHR, textStatus, errorThrown) {
	                        ds.rest.lastCall.textStatus = textStatus;
	                        ds.rest.lastCall.jqXHR = jqXHR;
	                        ds.intvls[intvl].bDone = true;
	                        ds.log("ds.rest.item.add call failed with error |" + errorThrown + "|", true);
	                    }).done(function(data, textStatus, jqXHR) {
	                        try { ds.rest.lastCall.data = data; } catch (err) { ds.log("ds.rest.list.item.add method could not capture data in ds.rest.lastCall", true); }
	                        ds.rest.lastCall.textStatus = textStatus;
	                        ds.rest.lastCall.jqXHR = jqXHR;
	                        try { createdListItem = data.d; } catch (err) { ds.log("ds.rest.list.item.add method could not capture data in local variable createdListItem", true); }
	                        if (typeof(afterFx) === "function") {
	                            try { afterFx(data, textStatus, jqXHR); } catch (err) {
	                                ds.log("ds.rest.list.item.add method could not call afterFx and pass data, textStatus, jqXHR parameters", true);
	                                afterFx();
	                            }
	                        }
	                        ds.intvls[intvl].bDone = true;
	                    });
	                },
	                delete: function(nID, sList, afterFx) {
	                    var listName = "";
	                    var urlRest = ds.p.root + ds.p.rest.lists2013;
	                    var intvl = null;
	                    var metadataType = "";
	                    var bFoundListDef = false;
	                    var oListDef;
	                    if (SP.Guid.isValid(sList) === true) {
	                        // We were passes a GUID, so run the query directly against that
	                        urlRest += "(guid'" + sList + "')/items(" + nID + ")";
	                        oListDef = ds.util.findList("Id", sList);
	                        if (typeof(oListDef) === "object") {
	                            bFoundListDef = true;
	                            metadataType = oListDef.ListItemEntityTypeFullName;
	                        }
	                    } else {
	                        // We were not passed a GUID, so assume it was a list name and try to run the query directly against that
	                        urlRest += "/GetByTitle('" + sList + "')/items(" + nID + ")";
	                        if (typeof(ds.lists[sList]) === "object") {
	                            // we were passed a list name and we already have its definition
	                            bFoundListDef = true;
	                            oListDef = ds.lists[sList];
	                            metadataType = oListDef.ListItemEntityTypeFullName;
	                        }
	                    }
	                    intvl = ds.intvls.newIntvl("wfXHR_ds.rest.list.item.delete");
	                    ds.rest.lastCall = { jqXHR: null, data: null, status: null, url: urlRest };
	                    ds.intvls[intvl].pauseMS = 73;
	                    ds.intvls[intvl].forFx = 'ds.rest.list.item.delete("' + nID + '", "' + sList + '", "afterFx")';
	                    ds.intvls[intvl].desc = 'Do we have an afterFx? ' + typeof(afterFx);
	                    ds.intvls[intvl].doWorkFx = function() {
	                        return ds.intvls[intvl].bDone;
	                    };
	                    ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx, ds.intvls[intvl].pauseMS);
	                    ds.$.ajax({
	                        url: urlRest,
	                        type: "DELETE",
	                        headers: {
	                            "IF-MATCH": "*"
	                        }
	                    }).fail(function(jqXHR, textStatus, errorThrown) {
	                        ds.rest.lastCall.textStatus = textStatus;
	                        ds.rest.lastCall.jqXHR = jqXHR;
	                        ds.intvls[intvl].bDone = true;
	                        ds.log("ds.rest.item.delete call failed with error |" + errorThrown + "|", true);
	                    }).done(function(data, textStatus, jqXHR) {
	                        try { ds.rest.lastCall.data = data; } catch (err) { ds.log("ds.rest.list.item.delete method could not capture data in ds.rest.lastCall", true); }
	                        ds.rest.lastCall.textStatus = textStatus;
	                        ds.rest.lastCall.jqXHR = jqXHR;
	                        if (typeof(afterFx) === "function") {
	                            try { afterFx(data, textStatus, jqXHR); } catch (err) {
	                                ds.log("ds.rest.list.item.delete method could not call afterFx and pass data, textStatus, jqXHR parameters", true);
	                                afterFx();
	                            }
	                        }
	                        ds.intvls[intvl].bDone = true;
	                    });
	                },
	                update: function(jsonItemData, sList, nID, afterFx) {
	                    var updatedListItem = null;
	                    var metadataType = "";
	                    var bWaitToReturnResponse = false;
	                    var intvl = null;
	                    var listName = "";
	                    var urlRest = ds.p.root + ds.p.rest.lists2013;
	                    var bFoundListDef = false;
	                    var oListDef;
	                    // Check if we were passed a GUID to see if we can build our rest URL directly with that
	                    if (SP.Guid.isValid(sList) === true) {
	                        urlRest += "(guid'" + sList + "')";
	                        oListDef = ds.util.findList("Id", sList);
	                        if (typeof(oListDef) === "object") {
	                            bFoundListDef = true;
	                            metadataType = oListDef.ListItemEntityTypeFullName;
	                        }
	                    } else {
	                        urlRest += "/GetByTitle('" + sList + "')";
	                        if (typeof(ds.lists[sList]) === "object") {
	                            // we were passed a list name and we already have its definition
	                            bFoundListDef = true;
	                            oListDef = ds.lists[sList];
	                            metadataType = oListDef.ListItemEntityTypeFullName;
	                        }
	                    }
	                    urlRest += "/items(" + nID + ")";
	                    bWaitToReturnResponse = true;
	                    intvl = ds.intvls.newIntvl("wfXHR_ds.rest.list.item.update");
	                    // Prepping our update
	                    var item = ds.$.extend({
	                        __metadata: { "type": metadataType }
	                    }, jsonItemData);
	                    ds.rest.lastCall = { jqXHR: null, data: null, status: null, url: urlRest };
	                    ds.rest.lastCall.payload = JSON.stringify(item);
	                    ds.intvls[intvl].pauseMS = 100;
	                    ds.intvls[intvl].forFx = 'ds.rest.list.item.update("' + JSON.stringify(item) + ', ' + sList + '")';
	                    ds.intvls[intvl].desc = 'Do we have an afterFx? ' + typeof(afterFx);
	                    ds.intvls[intvl].doWorkFx = function() {
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
	                    }).fail(function(jqXHR, textStatus, errorThrown) {
	                        ds.rest.lastCall.textStatus = textStatus;
	                        ds.rest.lastCall.jqXHR = jqXHR;
	                        ds.intvls[intvl].bDone = true;
	                        ds.log("ds.rest.item.update call failed with error |" + errorThrown + "|", true);
	                    }).done(function(data, textStatus, jqXHR) {
	                        try { ds.rest.lastCall.data = data; } catch (err) { ds.log("ds.rest.list.item.update method could not capture data in ds.rest.lastCall", true); }
	                        ds.rest.lastCall.textStatus = textStatus;
	                        ds.rest.lastCall.jqXHR = jqXHR;
	                        try { updatedListItem = data.d; } catch (err) { ds.log("ds.rest.list.item.update method could not capture data in local variable updatedListItem", true); }
	                        if (typeof(afterFx) === "function") {
	                            try { afterFx(data, textStatus, jqXHR); } catch (err) {
	                                ds.log("ds.rest.list.item.update method could not call afterFx and pass data, textStatus, jqXHR parameters", true);
	                                afterFx();
	                            }
	                        }
	                        ds.intvls[intvl].bDone = true;
	                    });
	                },
	                getVersions: function(listId, itemId, afterFx) {
	                    var url = ds.p.root;
	                    var versionsUrl = url + '_layouts/versions.aspx?list=' + listId + '&ID=' + itemId;
	                    var intvl = null;
	                    intvl = ds.intvls.newIntvl("wfXHR_getItemVersions_" + listId + "|" + itemId);
	                    ds.intvls[intvl].pauseMS = 100;
	                    ds.intvls[intvl].forFx = 'ds.rest.list.item.getVersions...URL = |' + versionsUrl + '|';
	                    ds.intvls[intvl].desc = 'Do we have an afterFx? ' + typeof(afterFx);
	                    ds.intvls[intvl].doWorkFx = function() {
	                        return ds.intvls[intvl].bDone;
	                    };
	                    /*ds.lists[listName].items = [];*/
	                    ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx, ds.intvls[intvl].pauseMS);
	                    ds.$.ajax({
	                        url: versionsUrl,
	                        dataType: "html",
	                        method: "GET"
	                    }).fail(function(jqXHR, textStatus, errorThrown) {
	                        ds.rest.lastCall.textStatus = textStatus;
	                        ds.rest.lastCall.jqXHR = jqXHR;
	                        ds.intvls[intvl].bDone = true;
	                    }).done(function(data, textStatus, jqXHR) {
	                        ds.rest.lastCall.textStatus = textStatus;
	                        ds.rest.lastCall.jqXHR = jqXHR;
	                        ds.rest.lastCall.data = data;
	                        var versionEntries = ds.rest.list.item.parseVersions(data);
	                        ds.intvls[intvl].bDone = true;
	                        if (typeof(afterFx) === "function") {
	                            afterFx(versionEntries);
	                        }
	                    });
	                },
	                parseVersions: function(versionsData) {
	                    var entries = {};
	                    var versionList = ds.$(versionsData).find('table.ms-settingsframe');
	                    versionList.find('tbody > tr').each(function(i, elm) {
	                        if (i > 0 && (i - 1) % 2 == 0) {
	                            var verRow = ds.$(this); /*get version row*/
	                            var propsRow = verRow.next(); /*get properties row*/
	                            var versionLabel = verRow.find('td:first').html().trim();
	                            if (!versionLabel === false) {
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
	                                ds.$(propsRow).children("td").eq(1).children("table").children("tbody").children("tr").each(function(iProp, elmProp) {
	                                    entries[versionLabel][ds.$(elmProp).children("td.ms-propertysheet").text().trim()] = ds.$(elmProp).children("td.ms-vb").text().trim();
	                                });
	                            }
	                        }
	                    });
	                    return entries;
	                }
	            },
	            getItemType: function(name) {
	                return "SP.Data." + name[0].toUpperCase() + name.substring(1) + "ListItem";
	            },
	            getDef: function(sList, afterFx, bGetFields) {
	                if (typeof(bGetFields) === "undefined") { var bGetFields = false; }
	                var bWaitToReturnResponse = false;
	                var intvl = null;
	                var listName = "";
	                var urlRest = ds.p.root + ds.p.rest.lists2013;
	                var bFoundListDef = false;
	                var oListDef;
	                // Check if we were passed a GUID to see if we can build our rest URL directly with that
	                if (SP.Guid.isValid(sList) === true) {
	                    urlRest += "(guid'" + sList + "')";
	                    oListDef = ds.util.findList("Id", sList.replace("{", "").replace("}", ""));
	                    if (typeof(oListDef) === "object") {
	                        bFoundListDef = true;
	                    }
	                } else {
	                    urlRest += "/GetByTitle('" + sList + "')";
	                    oListDef = ds.util.findList("Title", sList);
	                    if (typeof(oListDef) === "object") {
	                        bFoundListDef = true;
	                    }
	                }
	                if (bFoundListDef === true) {
	                    if (typeof(afterFx) === "function") { afterFx(oListDef); }
	                    return oListDef;
	                } else {
	                    bWaitToReturnResponse = true;
	                    intvl = ds.intvls.newIntvl("wfXHR_ds.rest.list.getDef");
	                    ds.intvls[intvl].pauseMS = 100;
	                    ds.intvls[intvl].forFx = 'ds.rest.list.getDef("' + sList + '")';
	                    ds.intvls[intvl].desc = 'Do we have an afterFx? ' + typeof(afterFx);
	                    ds.intvls[intvl].doWorkFx = function() {
	                        return ds.intvls[intvl].bDone;
	                    };
	                    ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx, ds.intvls[intvl].pauseMS);
	                    ds.rest.lastCall.url = urlRest;
	                    ds.rest.lastCall.data = null;
	                    ds.rest.lastCall.textStatus = null;
	                    ds.rest.lastCall.jqXHR = null;
	                    ds.rest.getDataFromURI(urlRest, function(data, textStatus, jqXHR) {
	                        listName = data.d.Title.toLowerCase().replace(" ", "").replace(" ", "");
	                        ds.lists[listName] = data.d;
	                        ds.lists[listName].gotDef = true;
	                        ds.lists[listName].gotFields = false;
	                        oListDef = ds.lists[listName];
	                        if (bGetFields === true && ds.lists[listName].Hidden === false) {
	                            ds.rest.coll.getListFields(listName, ds.lists[listName].Fields.__deferred.uri);
	                        }
	                        if (typeof(afterFx) === "function") { afterFx(listName); }
	                        ds.intvls[intvl].bDone = true;
	                    }, true, true);
	                    return true;
	                }
	            },
	            getData: {
	                fromList: function(sList, arrFilterFields, arrOperators, arrValues, arrLogicalJoins, afterFx, sRestArgs, bIgnoreNextPage) {
	                    if (typeof(bIgnoreNextPage) === "undefined") { var bIgnoreNextPage = false; }
	                    var url = ds.p.root + ds.p.rest.lists2013 + "/GetByTitle('" + sList + "')/items";
	                    var listName = sList.toLowerCase().replace(" ", "").replace(" ", "").replace(" ", "");
	                    var intvl = null;
	                    url = ds.rest.buildRestURL(url, arrFilterFields, arrOperators, arrValues, arrLogicalJoins, sRestArgs);
	                    ds.log(url);
	                    intvl = ds.intvls.newIntvl("wfXHR_getDataFromList_" + sList);
	                    ds.intvls[intvl].pauseMS = 100;
	                    ds.intvls[intvl].forFx = 'ds.rest.list.getData.fromList("' + sList + '")...URL = |' + url + '|';
	                    ds.intvls[intvl].desc = 'Do we have an afterFx? ' + typeof(afterFx);
	                    ds.intvls[intvl].doWorkFx = function() {
	                        return ds.intvls[intvl].bDone;
	                    };
	                    ds.lists[listName].items = [];
	                    ds.intvls[intvl].intvl = setInterval(ds.intvls[intvl].loopingFx, ds.intvls[intvl].pauseMS);
	                    ds.$.ajax({
	                        url: url,
	                        dataType: "json",
	                        method: "GET"
	                    }).fail(function(jqXHR, textStatus, errorThrown) {
	                        ds.rest.lastCall.textStatus = textStatus;
	                        ds.rest.lastCall.jqXHR = jqXHR;
	                        ds.intvls[intvl].bDone = true;
	                    }).done(function(data, textStatus, jqXHR) {
	                        ds.rest.lastCall.textStatus = textStatus;
	                        ds.rest.lastCall.jqXHR = jqXHR;
	                        ds.rest.lastCall.data = data;
	                        ds.lists[listName].items.results = data.d.results;
	                        if (!data.d.__next === false) {
	                            if (bIgnoreNextPage === false) {
	                                ds.lists[listName].items.uri = data.d.__next;
	                                ds.rest.getNextPage(data.d.__next, intvl, listName, function(d, s, x) {
	                                    for (listName in ds.lists) {
	                                        if (ds.lists[listName].Id === d.d.results[0].__metadata.id.split("'")[1]) {
	                                            ds.lists[listName].items.results = ds.lists[listName].items.results.concat(d.d.results);
	                                            break;
	                                        }
	                                    }
	                                }, function() {
	                                    ds.intvls[intvl].bDone = true;
	                                });
	                            } else {
	                                ds.lists[listName].items.uri = url;
	                                ds.intvls[intvl].bDone = true;
	                            }
	                        } else {
	                            ds.lists[listName].items.uri = url;
	                            ds.intvls[intvl].bDone = true;
	                        }
	                        if (typeof(afterFx) === "function") {
	                            afterFx(data, textStatus, jqXHR);
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
	                ds.rest.lastCall = { jqXHR: null, data: null, status: null, url: ds.p.root + ds.p.rest.lists2013 };
	                return ds.$.ajax({
	                    url: ds.p.root + ds.p.rest.lists2013,
	                    method: "POST",
	                    data: JSON.stringify(body)
	                }).done(function(data, textStatus, jqXHR) {
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
	                    ds.log("List created via REST", true);
	                    if (typeof(afterFx) === "function") { afterFx(data, textStatus, jqXHR); }
	                }).fail(function(jqXHR, textStatus, errorThrown) {
	                    ds.rest.lastCall.status = textStatus;
	                    ds.rest.lastCall.errorThrown = errorThrown;
	                    ds.rest.lastCall.jqXHR = jqXHR;
	                    if (typeof(afterFx) === "function") { afterFx(data, textStatus, jqXHR); }
	                });
	            },
	            update: function(sListName, oSettings, afterFx) {
	                var body = {
	                    __metadata: { type: 'SP.List' }
	                };
	                for (setting in oSettings) {
	                    body[setting] = oSettings[setting];
	                }
	                var sRESTURL = ds.p.root + ds.p.rest.lists2013 + "/GetByTitle('" + sListName + "')";
	                ds.rest.lastCall = { jqXHR: null, data: null, status: null, url: sRESTURL };
	                return ds.$.ajax({
	                    url: sRESTURL,
	                    type: "POST",
	                    data: JSON.stringify(body),
	                    headers: {
	                        "X-HTTP-Method": "MERGE",
	                        "IF-MATCH": "*"
	                    }
	                }).fail(function(jqXHR, textStatus, errorThrown) {
	                    ds.rest.lastCall.textStatus = textStatus;
	                    ds.rest.lastCall.jqXHR = jqXHR;
	                }).done(function(data, textStatus, jqXHR) {
	                    ds.rest.lastCall.status = textStatus;
	                    ds.rest.lastCall.data = data;
	                    ds.rest.lastCall.jqXHR = jqXHR;
	                    try { ds.lists[sListName].EnableVersioning = jqXHR.responseJSON.d.EnableVersioning; } catch (err) {}
	                    ds.log("List updated via REST", true);
	                    if (typeof(afterFx) === "function") { afterFx(data, textStatus, jqXHR); }
	                });
	            },
	            addField: function(listGUID, title, fieldTypeKind, bRequired, bEnforceUniqueValues, staticName, lookupListGUID, jsonFieldData, afterFx) {
	                ds.log("ds.rest.list.addField called for listGUID |" + listGUID + "|");
	                var body = {
	                    __metadata: { type: 'SP.Field' },
	                    Title: title,
	                    FieldTypeKind: fieldTypeKind,
	                    Required: bRequired,
	                    EnforceUniqueValues: bEnforceUniqueValues,
	                    StaticName: staticName
	                };
	                var restURL = ds.p.root + ds.p.rest.lists2013 + "(guid'" + listGUID + "')/Fields";
	                if (fieldTypeKind === 7) {
	                    var body = {
	                        parameters: {
	                            __metadata: { type: 'SP.FieldCreationInformation' },
	                            Title: title,
	                            FieldTypeKind: fieldTypeKind,
	                            LookupListId: lookupListGUID,
	                            LookupFieldName: 'Title'
	                        }
	                    };
	                    if (!jsonFieldData === false) {
	                        for (fd in jsonFieldData) {
	                            body.parameters[fd] = jsonFieldData[fd];
	                        }
	                    }
	                    restURL += "/addField"
	                } else {
	                    if (!jsonFieldData === false) {
	                        for (fd in jsonFieldData) {
	                            body[fd] = jsonFieldData[fd];
	                        }
	                    }
	                }
	                ds.rest.lastCall = { jqXHR: null, data: null, status: null, url: restURL };
	                return ds.$.ajax({
	                    url: restURL,
	                    method: "POST",
	                    data: JSON.stringify(body)
	                }).done(function(data, textStatus, jqXHR) {
	                    ds.rest.lastCall.status = textStatus;
	                    ds.rest.lastCall.data = data;
	                    ds.rest.lastCall.jqXHR = jqXHR;
	                    ds.log("List field added via REST", true);
	                    if (typeof(afterFx) === "function") { afterFx(data, textStatus, jqXHR); }
	                });
	            }
	        },
	        coll: {
	            getLists: function(bGetFieldDefs, afterFx) {
	                ds.log("Requesting definitions for all lists and libraries in this site");
	                return ds.$.ajax({
	                    url: ds.p.root + ds.p.rest.lists2013,
	                    //url: ds.p.root + ds.p.rest.lists2013 +"?$expand=Items",
	                    dataType: "json",
	                    method: "GET"
	                }).fail(function(jqXHR, textStatus, errorThrown) {
	                    ds.rest.lastCall.jqXHR = jqXHR;
	                    ds.rest.lastCall.textStatus = textStatus;
	                    ds.rest.lastCall.errorThrown = errorThrown;
	                    ds.log("Failed to get definitions for all lists and libraries in this site");
	                }).done(function(data, textStatus, jqXHR) {
	                    ds.rest.lastCall.data = data;
	                    ds.rest.lastCall.textStatus = textStatus;
	                    ds.rest.lastCall.jqXHR = jqXHR;
	                    for (var i = 0; i < data.d.results.length; i++) {
	                        try {
	                            var listGUID = data.d.results[i].Id;
	                            var listTitle = data.d.results[i].Title.replace(" ", "").replace(" ", "").toLowerCase();
	                            ds.lists[listTitle] = data.d.results[i];
	                            ds.lists[listTitle].gotDef = true;
	                            ds.lists[listTitle].gotItemPermissions = false;
	                            ds.lists[listTitle].items = [];
	                            ds.log("Got list definition for list |" + listTitle + "|");
	                            ds.lists[listTitle].gotFields = false;
	                            //ds.lists[listTitle].gotFields = true;
	                            if (bGetFieldDefs === true && data.d.results[i].Hidden === false) {
	                                ds.log("Requesting field definitions for list |" + listTitle + "|");
	                                //ds.rest.coll.getListFields(listTitle, data.d.results[i].Fields.__deferred.uri);
	                                ds.rest.coll.expandListDef(listTitle, ds.p.root + ds.p.rest.lists2013 + "('" + listGUID + "')");
	                            } else {
	                                ds.lists[listTitle].gotFields = true;
	                            }
	                        } catch (err) {}
	                    }
	                    if (typeof(afterFx) === "function") { afterFx(data, textStatus, jqXHR); }
	                });
	            },
	            expandListDef: function(restListName, restBaseURL, afterFx) {
	                if (restListName !== "userinformationlist") {
	                    var restURL = restBaseURL + "?$select=EffectiveBasePermissions,Fields,Views,items,items/EffectiveBasePermissions&$expand=items,Fields,Views,Views/ViewFields";
	                    //var restURL = restBaseURL +"?$select=EffectiveBasePermissions,items/EffectiveBasePermissions&$expand=items";
	                    //var restURL = restBaseURL +"?$select=EffectiveBasePermissions,Fields,Views,Items&$expand=Items,Fields,Views,Views/ViewFields";
	                } else {
	                    var restURL = restBaseURL + "?$select=Fields,Views,items&$expand=items,Fields,Views,Views/ViewFields";
	                }
	                // Get list Items, Fields, Views, ViewFields, and list-level base permissions
	                var restURL = restBaseURL + "?$select=EffectiveBasePermissions,Fields,Views,Items&$expand=Items,Fields,Views,Views/ViewFields";
	                ds.log("ds.rest.coll.expandListDef function about to call REST URL... " + restURL);
	                ds.rest.getDataFromURI(restURL, function(data, textStatus, jqXHR) {
	                    ds.log("Expanded list def part 1: " + restListName);
	                    ds.lists[restListName].items = data.d.Items.results;
	                    ds.lists[restListName].fields_def = data.d.Fields.results;
	                    ds.lists[restListName].gotFields = true;
	                    ds.lists[restListName].views = data.d.Views.results;
	                    try { ds.lists[restListName].EffectiveBasePermissions = data.d.EffectiveBasePermissions; } catch (err) {}
	                    ds.log("ds.rest.getDataFromURI function got server response with status |" + textStatus + "|");
	                    if (restListName !== "userinformationlist") {
	                        // Get the item level permissions
	                        var restURL = restBaseURL + "?$select=EffectiveBasePermissions,items,items/EffectiveBasePermissions&$expand=items";
	                        ds.log("ds.rest.coll.expandListDef function about to call REST URL... " + restURL);
	                        ds.rest.getDataFromURI(restURL, function(data, textStatus, jqXHR) {
	                            ds.log("ds.rest.getDataFromURI function got server response with status |" + textStatus + "|");
	                            ds.log("Expanded list def part 2: " + restListName);
	                            //ds.lists[restListName].fields_def = data.d.Fields.results;
	                            //try{ds.lists[restListName].EffectiveBasePermissions = data.d.EffectiveBasePermissions;}catch(err){}
	                            for (var k = 0; k < data.d.Items.results.length; k++) {
	                                var bFoundItem = false;
	                                for (var i = 0; i < ds.lists[restListName].items.length; i++) {
	                                    if (ds.lists[restListName].items[i].__metadata.id === data.d.Items.results[k].__metadata.id) {
	                                        ds.lists[restListName].items[i].EffectiveBasePermissions = data.d.Items.results[k].EffectiveBasePermissions;
	                                        bFoundItem = true;
	                                        break;
	                                    }
	                                }
	                                if (bFoundItem === false) {
	                                    ds.lists[restListName].items.push(data.d.Items.results[k]);
	                                }
	                            }
	                            ds.lists[restListName].gotItemPermissions = true;
	                            //ds.lists[restListName].views = data.d.Views.results;
	                            if (typeof(afterFx) === "function") {
	                                afterFx(data, textStatus, jqXHR);
	                            }
	                        }, true, true, null, restListName, "", function() {});
	                    }
	                }, true, true, null, restListName, "", function() {});
	            },
	            getListFields: function(sListStorName, sRestURL, afterGotFieldDefsFx) {
	                ds.rest.getDataFromURI(sRestURL, function(d, s, x) {
	                    ds.lists[sListStorName].fields_def = d.d;
	                    ds.lists[sListStorName].gotFields = true;
	                    ds.log("Got field definitions for list |" + sListStorName + "|");
	                    if (typeof(afterGotFieldDefsFx) === "function") { afterGotFieldDefsFx(d, s, x); }
	                }, true, true, null, sListStorName, function() {}, function(x, s, e) {
	                    ds.log("ds.rest.getDataFromURI call for sRestURL |" + sRestURL + "| failed with error |" + e + "|", true);
	                });
	            }
	        },
	        user: {
	            getCurrent: function(afterFx) {
	                ds.rest.getDataFromURI(ds.p.root + ds.p.rest[2013].currentUser + "?$select=Email,Id,IsHiddenInUI,IsSiteAdmin,LoginName,PrincipalType,Title,Groups,UserId&$expand=Groups,UserId", function(d, s, x) {
	                    ds.stor.currentUser = d.d;
	                    if (typeof(afterFx) === "function") { afterFx(); }
	                }, true, true);
	            },
	            getUser: function(afterFx) {

	            },
	            getSiteUsers: function(afterFx) {
	                ds.rest.getDataFromURI(ds.p.root + ds.p.rest[2013].siteUsers + "?$select=Email,Id,IsHiddenInUI,IsSiteAdmin,LoginName,PrincipalType,Title,Groups,UserId&$expand=Groups,UserId", function(d, s, x) {
	                    ds.stor.siteUsers = d.d;
	                    if (typeof(afterFx) === "function") { afterFx(); }
	                }, true, true);
	            }
	        }
	    },
	    log: function(message, bIgnoreDebugReq) {
	        if (typeof(bIgnoreDebugReq) === "undefined") { var bIgnoreDebugReq = false; }
	        if (ds.settings.bDebug === true || bIgnoreDebugReq === true) {
	            try { console.log(message); } catch (err) {}
	        }
	    },
	    util: {
	        getFunctionCode: function(fx) {
	            if (typeof(fx) === "function") {
	                return fx.toString();
	            } else {
	                return fx;
	            }
	        },
	        findObjectInArray: function(array, arrPropertiesValues, fxCallback) {
	            /*
	            ds.ajax.capture(ds.p.root +"/"+ ds.p.rest.lists2013, "ds.lists")
                ds.util.findObjectInArray(ds.lists.results, {"Title": "Meetings"})
                
                
                
                ds.ajax.capture(ds.p.root +"/"+ ds.p.rest.lists2013+"?$expand=Fields,Views,Forms", "ds.lists")
                ds.util.findObjectInArray(ds.lists.results, [{"Title": "Meetings"},{"Id":"ecb433ee-09f5-4c9d-8cd4-0090f730d3aa"}], function(matches){
                    for ( var m = 0; m < matches.length; m++ ) {
                        ds.util.findObjectInArray(matches[m].Fields.results, {"LookupList":_spPageContextInfo.pageListId}, function(subMatch){
                            ds.log(subMatch);
                        })
                    }
                });
                */
	            var oReturn = [];
	            var bMatch = true;
	            var bFullMatch = true;
	            for (var i = 0; i < array.length; i++) {
	                bMatch = false;
	                if (typeof(arrPropertiesValues) === "object") {
	                    if (typeof(arrPropertiesValues.length) === "undefined") {
	                        for (prop in arrPropertiesValues) {
	                            //ds.log("Checking match for property |" + prop + "|");
	                            try {
	                                //ds.log("Checking match for property |" + array[i][prop] + "|");
	                                if (array[i][prop] === arrPropertiesValues[prop]) {
	                                    bMatch = true;
	                                    break;
	                                }
	                            } catch (err) {
	                                bMatch = false;
	                                ds.log("Coulding check property value match |" + prop + "|");
	                                ds.log("array element");
	                                ds.log(array[i]);
	                                ds.log("Checking for match to value");
	                                ds.log(arrPropertiesValues[prop]);
	                                break;
	                            }
	                        }
	                        if (bMatch === true) {
	                            oReturn.push(array[i]);
	                        }
	                    } else {
	                        bFullMatch = true;
	                        for (var iA = 0; iA < arrPropertiesValues.length; iA++) {
	                            bMatch = false;
	                            for (prop in arrPropertiesValues[iA]) {
	                                //ds.log("Checking match for property |" + prop + "|");
	                                try {
	                                    //ds.log("Checking match for property value |" + array[i][prop] + "|");
	                                    //ds.log("Checking match for property value |" + arrPropertiesValues[iA][prop] + "|");
	                                    if (array[i][prop] === arrPropertiesValues[iA][prop]) {
	                                        bMatch = true;
	                                        break;
	                                    }
	                                } catch (err) {
	                                    ds.log("Coulding check property value match |" + prop + "|");
	                                    ds.log("array element");
	                                    ds.log(array[i]);
	                                    ds.log("Checking for match to value");
	                                    ds.log(arrPropertiesValues[iA][prop]);
	                                    break;
	                                }
	                                if (bMatch === false) {
	                                    //ds.log("Failed match for property value |" + arrPropertiesValues[iA][prop] + "|");
	                                    bFullMatch = false;
	                                    break;
	                                }
	                            }
	                            if (bMatch === false) {
	                                bFullMatch = false;
	                                break;
	                            }
	                        }
	                        if (bFullMatch === true) {
	                            oReturn.push(array[i]);
	                        }
	                    }
	                } else {
	                    break;
	                }
	            }
	            if (typeof(fxCallback) === "function") {
	                fxCallback(oReturn);
	            }
	            return oReturn;
	        },
	        minifyJS: function(strJS) {
	            while (strJS.indexOf("    ") >= 0) {
	                strJS = strJS.replace("    ", "");
	            }
	            while (strJS.indexOf("\n") >= 0) {
	                strJS = strJS.replace("\n", "");
	            }
	            return strJS;
	        },
	        escapeJS: function(strJS) {
	            var max = 20000;
	            var curr = 0;
	            var regEx = /([~\\]\")/g
	            while (strJS.indexOf(regEx) >= 1) {
	                strJS.replace(regEx, "\"");
	                curr++;
	                if (curr >= max) {
	                    break;
	                }
	            }
	            return strJS;
	        },
	        appendToMain: function(html) {
	            if (typeof(html) === "string") {
	                return document.getElementById("DeltaPlaceHolderMain").innerHTML = document.getElementById("DeltaPlaceHolderMain").innerHTML + html;
	            } else if (typeof(html) === "array" || typeof(html) === "object") {
	                return document.getElementById("DeltaPlaceHolderMain").innerHTML = document.getElementById("DeltaPlaceHolderMain").innerHTML + html.join("");
	            }
	        },
	        getPageRelativeURL: function() {
	            var relativeURL = _spPageContextInfo.serverRequestPath;
	            return relativeURL;
	        },
	        getSiteRegionalTimeZone: function() {
	            ds.stor.spCSOM.clientContext = new SP.ClientContext();
	            ds.stor.spCSOM.web = ds.stor.spCSOM.clientContext.get_web();
	            ds.stor.spCSOM.culture = ds.stor.spCSOM.web.get_regionalSettings();
	            ds.stor.spCSOM.clientContext.load(ds.stor.spCSOM.culture);
	            ds.stor.spCSOM.tz = ds.stor.spCSOM.culture.get_timeZone();
	            ds.stor.spCSOM.clientContext.load(ds.stor.spCSOM.tz);
	            /* Use SP CSOM to get the site's current regional settings for the time zone capture the async response via a callback function */
	            ds.stor.spCSOM.clientContext.executeQueryAsync(function() {
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
	        createSettingsList: function(afterCreatingSettingsListFx) {
	            var sListDisplayName = "dsFormSettings";
	            var listDef = null;
	            if (typeof(afterCreatingSettingsListFx) === "undefined") {
	                var afterCreatingSettingsListFx = function() {
	                    ds.log("Created and configured the settings list", true);
	                };
	            }
	            ds.rest.list.create(100, sListDisplayName, "stores the settings for the forms on your site", function(cD, cS, cX) {
	                listDef = cD.d;
	                var oSettings1 = {
	                    EnableVersioning: true,
	                    EnableModeration: true,
	                    EnableAttachments: false
	                };
	                ds.rest.list.update(sListDisplayName, oSettings1, function() {
	                    ds.log("Enabled Versioning and disabled Attachments for |" + sListDisplayName + "||");
	                    var oSettings2 = {
	                        MajorVersionLimit: 10,
	                        DraftVersionVisibility: 2,
	                        MajorWithMinorVersionsLimit: 25
	                    };
	                    ds.rest.list.update(sListDisplayName, oSettings2, function() {
	                        ds.log("Finished configuring Versioning for |" + sListDisplayName + "|");
	                        var to1 = setTimeout(function() {
	                            var oField = {
	                                Description: "The form name, as it appears in the URL",
	                                StaticName: "FormNameURL",
	                                EnforceUniqueValues: false
	                            };
	                            ds.rest.list.addField(ds.lists[sListDisplayName].Id, "FormNameURL", 2, false, false, "FormNameURL", null, oField, function() {
	                                ds.log("Added field |FormNameURL| to list");
	                            });
	                            var to2 = setTimeout(function() {
	                                var oField = {
	                                    StaticName: "blbRelRecs"
	                                };
	                                ds.rest.list.addField(ds.lists[sListDisplayName].Id, "blbRelRecs", 3, false, false, "blbRelRecs", null, oField, function(d, s, x) {
	                                    ds.log("Added field |blbRelRecs| to list");
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
	                                            "X-HTTP-Method": "MERGE",
	                                            "IF-MATCH": "*"
	                                        }
	                                    }).done(function(data, textStatus, jqXHR) {
	                                        ds.rest.lastCall.status = textStatus;
	                                        ds.rest.lastCall.data = data;
	                                        ds.rest.lastCall.jqXHR = jqXHR;
	                                        ds.log("List field |blbRelRecs| updated via REST");
	                                        ds.log(listDef.Fields, true);
	                                        ds.$.ajax({
	                                            url: listDef.Fields.__deferred.uri + "?$filter=StaticName eq 'Title'",
	                                            method: "GET",
	                                            data: null
	                                        }).done(function(data, textStatus, jqXHR) {
	                                            ds.log("Got definition of existing list Title field...");
	                                            ds.log(data, true);
	                                            var body2 = {
	                                                __metadata: { type: data.d.results[0].__metadata.type },
	                                                Title: "ListNameURL",
	                                                StaticName: data.d.results[0].Title
	                                            };
	                                            ds.log("Attempting update to Title field's Display name...");
	                                            ds.$.ajax({
	                                                url: data.d.results[0].__metadata.uri,
	                                                method: "POST",
	                                                data: JSON.stringify(body2),
	                                                headers: {
	                                                    "X-HTTP-Method": "MERGE",
	                                                    "IF-MATCH": "*"
	                                                }
	                                            }).done(function(data, textStatus, jqXHR) {
	                                                ds.rest.lastCall.status = textStatus;
	                                                ds.rest.lastCall.data = data;
	                                                ds.rest.lastCall.jqXHR = jqXHR;
	                                                ds.log("List field |Title| updated to |ListNameURL| via REST");
	                                                if (typeof(afterCreatingSettingsListFx) === "function") {
	                                                    afterCreatingSettingsListFx();
	                                                }
	                                            }).fail(function(jqXHR, textStatus, errorThrown) {
	                                                ds.rest.lastCall.status = textStatus;
	                                                ds.rest.lastCall.errorThrown = errorThrown;
	                                                ds.rest.lastCall.jqXHR = jqXHR;
	                                            });
	                                        }).fail(function(jqXHR, textStatus, errorThrown) {
	                                            ds.rest.lastCall.status = textStatus;
	                                            ds.rest.lastCall.errorThrown = errorThrown;
	                                            ds.rest.lastCall.jqXHR = jqXHR;
	                                        });
	                                    }).fail(function(jqXHR, textStatus, errorThrown) {
	                                        ds.rest.lastCall.status = textStatus;
	                                        ds.rest.lastCall.errorThrown = errorThrown;
	                                        ds.rest.lastCall.jqXHR = jqXHR;
	                                    });
	                                });
	                            }, 234);
	                        }, 123);
	                    });
	                });
	            });
	        },
	        getCurrentListFormItemDetails: function(afterFx, bAsync) {
	            ds.rest.lastCall = {};

	            ds.rest.getDataFromURI(ds.p.root + ds.p.rest[2013].lists + "(guid'" + ds.p.pageListId + "')/Items(" + GetUrlKeyValue("ID") + ")", function(data, textStatus, jqXHR) {
	                ds.rest.lastCall.data = data;
	                ds.rest.lastCall.textStatus = textStatus;
	                ds.rest.lastCall.jqXHR = jqXHR;
	                if (typeof(afterFx) === "function") {
	                    afterFx(data, textStatus, jqXHR);
	                }
	            }, bAsync);
	        },
	        getListPermissions: function(restlistname, afterFx) {
	            if (typeof(ds.lists[restlistname]) === "undefined") {
	                ds.rest.list.getDef(restlistname, function(d, s, x) {
	                    ds.rest.coll.expandListDef(restlistname, ds.lists[restlistname].__metadata.uri, function(d, s, x) {
	                        //ds.log(d,true);
	                        //ds.log(s,true);
	                        //ds.log(x,true);
	                        if (typeof(afterFx) === "function") { afterFx(ds.lists[restlistname].EffectiveBasePermissions); }
	                    });
	                });
	            } else if (typeof(ds.lists[restlistname].EffectiveBasePermissions) === "undefined") {
	                ds.rest.coll.expandListDef(restlistname, ds.lists[restlistname].__metadata.uri, function(d, s, x) {
	                    //ds.log(d,true);
	                    //ds.log(s,true);
	                    //ds.log(x,true);
	                    if (typeof(afterFx) === "function") { afterFx(ds.lists[restlistname].EffectiveBasePermissions); }
	                });
	            } else {
	                if (typeof(afterFx) === "function") {
	                    afterFx(ds.lists[restlistname].EffectiveBasePermissions);
	                }
	            }
	        },
	        checkForItemEditAddDelete: function(restlistname, afterFx) {
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
	            if (typeof(_spPageContextInfo.userId) === "undefined") {
	                if (ds.lists[restlistname].EffectiveBasePermissions.High < up.$5_1) {
	                    if (typeof(afterFx) === "function") { afterFx(true); }
	                    return true;
	                } else {
	                    if (typeof(afterFx) === "function") { afterFx(false); }
	                    return false;
	                }
	            } else {
	                if (ds.lists[restlistname].EffectiveBasePermissions.High > up.$5_1) {
	                    if (typeof(afterFx) === "function") { afterFx(true); }
	                    return true;
	                } else {
	                    if (typeof(afterFx) === "function") { afterFx(false); }
	                    return false;
	                }
	            }
	        },
	        getListFormFieldByDisplayName: function(sName) {
	            var $listFormTableRow = ds.$(".ms-formlabel:contains('" + sName + "')").parents("tr").eq(0);
	            var $formField = $listFormTableRow.children(".ms-formbody").find("TEXTAREA[title^='" + sName + "'],INPUT[title^='" + sName + "'],SELECT[title^='" + sName + "']");
	            return $formField;
	        },
	        getListFormFieldValueByDisplayName: function(sName) {
	            var $listFormTableRow = ds.$(".ms-formlabel:contains('" + sName + "')").parents("tr").eq(0);
	            var $formField = $listFormTableRow.children(".ms-formbody").find("TEXTAREA[title^='" + sName + "'],INPUT[title^='" + sName + "'],SELECT[title^='" + sName + "']");
	            if ($formField[0].tagName.toUpperCase() === "SELECT") {
	                if ($formField.prop("multiple") === true) {
	                    var $options = $formField.find("OPTION[selected]");
	                    var arrReturn = [];
	                    $options.each(function() {
	                        arrReturn.push([ds.$(this).val(), ds.$(this).text()]);
	                    });
	                    return arrReturn;
	                } else {
	                    var $options = $formField.find("OPTION[selected]");
	                    return [$options.val(), $options.text()];
	                }
	            } else {
	                return $formField.val();
	            }
	        },
	        getListViewColumnIndex: function(fieldDisplayName) {
	            return ds.$("TABLE.ms-listviewtable > THEAD > TR.ms-viewheadertr > TH:contains('" + fieldDisplayName + "')").index();
	        },
	        simulateBrowseTabClick: function() {
	            document.getElementById("Ribbon.Read-title").firstElementChild.click();
	        },
	        isPageInEditMode: function() {
	            /*https://sharepoint.stackexchange.com/questions/149096/a-way-to-identify-when-page-is-in-edit-mode-for-javascript-purposes*/
	            var result = (window.MSOWebPartPageFormName != undefined) && ((document.forms[window.MSOWebPartPageFormName] && document.forms[window.MSOWebPartPageFormName].MSOLayout_InDesignMode && ("1" == document.forms[window.MSOWebPartPageFormName].MSOLayout_InDesignMode.value)) || (document.forms[window.MSOWebPartPageFormName] && document.forms[window.MSOWebPartPageFormName]._wikiPageMode && ("Edit" == document.forms[window.MSOWebPartPageFormName]._wikiPageMode.value)));
	            ds.stor.session.editMode = result || false;
	            return result || false;
	        },
	        isPageInDialog: function() {
	            if (GetUrlKeyValue("IsDlg") === "1") {
	                return true;
	            } else {
	                return false;
	            }
	        },
	        getSPUIVersion: function(afterFx) {
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
	                if (typeof(afterFx) === "function") {
	                    afterFx(result);
	                }
	            }

	            function onRequestFailed() {
	                result = 'unknown';
	                if (typeof(afterFx) === "function") {
	                    afterFx(result);
	                }
	            }
	        },
	        getWPZByRowAndColumn: function(row, col) {
	            var jqSelWPP = ["TABLE.ms-webpartPage-root > TBODY"];
	            if (typeof(row) === "object" && typeof(col) === "object") {
	                for (var i = 0; i < row.length; i++) {
	                    if (i > 0) {
	                        jqSelWPP.push(" TABLE > TBODY");
	                    }
	                    if ((i + 1) === row.length) {
	                        jqSelWPP.push(" > TR:eq(" + row[i] + ") > TD[name='_invisibleIfEmpty']:eq(" + col[i] + ")");
	                    } else {
	                        jqSelWPP.push(" > TR:eq(" + row[i] + ") > TD:eq(" + col[i] + ")");
	                    }
	                }
	            } else {
	                jqSelWPP.push(" > TR:eq(" + row + ") > TD[name='_invisibleIfEmpty']:eq(" + col + ")");
	            }
	            jqSelWPP.push(" > .ms-webpart-zone > [id^='MSOZoneCell_WebPartWPQ']");
	            ds.log("WPP web part zone selector length = " + ds.$(jqSelWPP.join("")).length + " |" + jqSelWPP.join("") + "|");
	            if (ds.$(jqSelWPP.join("")).length > 0) {
	                return ds.$(jqSelWPP.join(""));
	            } else {
	                var jqSelWiki = ["TABLE#layoutsTable > TBODY"];
	                if (typeof(row) === "object" && typeof(col) === "object") {
	                    for (var i = 0; i < row.length; i++) {
	                        if (i > 0) {
	                            jqSelWiki.push(" TABLE > TBODY");
	                        }
	                        if ((i + 1) === row.length) {
	                            jqSelWiki.push(" > TR:eq(" + row[i] + ") > TD:eq(" + col[i] + ")");
	                        } else {
	                            jqSelWiki.push(" > TR:eq(" + row[i] + ") > TD:eq(" + col[i] + ")");
	                        }
	                    }
	                } else {
	                    jqSelWiki.push(" > TR:eq(" + row + ") > TD:eq(" + col + ")");
	                }
	                jqSelWiki.push(" > .ms-rte-layoutszone-outer > .ms-rte-layoutszone-inner > [id^='MSOZoneCell_WebPartWPQ']");
	                ds.log("Wiki web part zone selector length = " + ds.$(jqSelWiki.join("")).length + " |" + jqSelWiki.join("") + "|");
	                if (ds.$(jqSelWiki.join("")).length > 0) {
	                    return ds.$(jqSelWiki.join(""));
	                } else {
	                    return false;
	                }
	            }
	        },
	        getSiblingsOfWebPartWithTitle: function(sWebPartTitle) {
	            var oRet;
	            ds.$("[id^='MSOZoneCell_WebPartWPQ'] .ms-webpart-chrome-title").each(function(iWP, elmWP) {
	                if (ds.$(this).text().trim() === sWebPartTitle) {
	                    oRet = ds.$(this).parents("TD[id='_invisibleIfEmpty'], .ms-rte-layoutszone-inner").find("[id^='MSOZoneCell_WebPartWPQ']");
	                    return false;
	                }
	            });
	            return oRet;
	        },
	        checkFileAccess: function(relativeFilePath, fxSuccess, fxFail, fxAlways) {
	            ds.$.ajax({
	                url: ds.p.root + ds.p.rest[2013].web + "/GetFileByServerRelativeUrl('" + relativeFilePath + "')",
	                method: "GET"
	            }).always(function() {
	                ds.log("ds.util.checkFileAccess... Always!", true);
	                if (typeof(fxAlways) === "function") { fxAlways(); }
	            }).done(function(d, s, x) {
	                ds.log("ds.util.checkFileAccess... Success!", true);
	                ds.log(x);
	                if (typeof(fxSuccess) === "function") { fxSuccess(d, s, x); }
	            }).fail(function(x, s, e) {
	                ds.log("ds.util.checkFileAccess... Fail!", true);
	                ds.log(x);
	                if (typeof(fxFail) === "function") { fxFail(x, s, e); }
	            });
	        },
	        checkUserGroupMembership: function(oUser, groupPropertyName, groupPropertyValue, fxOnMembershipFound, fxOnMembershipNotFound) {
	            /*ds.util.checkUserGroupMembership(ds.stor.currentUser, "Title", "DS Magic for SharePoint Owners", function(){alert("User is a member of the group");}, function(){alert("User is not a member of the group");});*/
	            /*ds.util.checkUserGroupMembership(ds.stor.siteUsers.results[1], "Title", "DS Magic for SharePoint Owners", function(){alert("User is a member of the group");}, function(){alert("User is not a member of the group");});*/
	            var bUserGroupMatchFound = false;
	            for (var iGroup = 0; iGroup < oUser.Groups.results.length; iGroup++) {
	                try {
	                    if (oUser.Groups.results[iGroup][groupPropertyName] === groupPropertyValue) {
	                        ds.log("Found matching group in the supplied user's Groups collection", true);
	                        bUserGroupMatchFound = true;
	                        break;
	                    }
	                } catch (err) {}
	            }
	            if (bUserGroupMatchFound === true) {
	                if (typeof(fxOnMembershipFound) === "function") { fxOnMembershipFound(); }
	            } else if (bUserGroupMatchFound === false) {
	                if (typeof(fxOnMembershipNotFound) === "function") { fxOnMembershipNotFound(); }
	            }
	        },
	        getBrowserNameAndVersion: function(afterFx) {
	            var regExp, collMatches, iMatch;
	            if (navigator.userAgent.indexOf("Edge") >= 0) {
	                ds.stor.session.browserName = "Edge";
	                ds.stor.session.browserSupportsActiveX = false;
	                browserSupportsClassicDatasheet = false;
	                regExp = /Edge\/([0-9.]+)/ig
	                collMatches = regExp.exec(navigator.userAgent);
	                for (iMatch = 0; iMatch < collMatches.length; iMatch++) {
	                    ds.stor.session.browserVersion = parseFloat(collMatches[iMatch].split("/")[1], 10);
	                    break;
	                }
	            } else if (navigator.userAgent.indexOf("Chrome") >= 0 && navigator.userAgent.indexOf("Chromium") < 0) {
	                ds.stor.session.browserName = "Chrome";
	                ds.stor.session.browserSupportsActiveX = false;
	                browserSupportsClassicDatasheet = false;
	                regExp = /Chrome\/([0-9.]+)/ig
	                collMatches = regExp.exec(navigator.userAgent);
	                for (iMatch = 0; iMatch < collMatches.length; iMatch++) {
	                    ds.stor.session.browserVersion = parseFloat(collMatches[iMatch].split("/")[1], 10);
	                    break;
	                }
	            } else if (navigator.userAgent.indexOf("Safari") >= 0 && navigator.userAgent.indexOf("Chrome") < 0 && navigator.userAgent.indexOf("Chromium") < 0) {
	                ds.stor.session.browserName = "Safari";
	                ds.stor.session.browserSupportsActiveX = false;
	                browserSupportsClassicDatasheet = false;
	                regExp = /Version\/([0-9.]+)/ig
	                collMatches = regExp.exec(navigator.userAgent);
	                for (iMatch = 0; iMatch < collMatches.length; iMatch++) {
	                    ds.stor.session.browserVersion = parseFloat(collMatches[iMatch].split("/")[1], 10);
	                    break;
	                }
	            } else if (navigator.userAgent.indexOf("OPR") >= 0) {
	                ds.stor.session.browserName = "Opera (Blink)";
	                ds.stor.session.browserSupportsActiveX = false;
	                browserSupportsClassicDatasheet = false;
	                regExp = /Version\/([0-9.]+)/ig
	                collMatches = regExp.exec(navigator.userAgent);
	                for (iMatch = 0; iMatch < collMatches.length; iMatch++) {
	                    ds.stor.session.browserVersion = parseFloat(collMatches[iMatch].split("/")[1], 10);
	                    break;
	                }
	            } else if (navigator.userAgent.indexOf("Opera") >= 0) {
	                ds.stor.session.browserName = "Opera (Presto)";
	                ds.stor.session.browserSupportsActiveX = false;
	                browserSupportsClassicDatasheet = false;
	                regExp = /Version\/([0-9.]+)/ig
	                collMatches = regExp.exec(navigator.userAgent);
	                for (iMatch = 0; iMatch < collMatches.length; iMatch++) {
	                    ds.stor.session.browserVersion = parseFloat(collMatches[iMatch].split("/")[1], 10);
	                    break;
	                }
	            } else if (navigator.userAgent.indexOf("Firefox") >= 0 && navigator.userAgent.indexOf("Seamonkey") < 0) {
	                ds.stor.session.browserName = "Firefox";
	                ds.stor.session.browserSupportsActiveX = false;
	                browserSupportsClassicDatasheet = false;
	                regExp = /Firefox\/([0-9.]+)/ig
	                collMatches = regExp.exec(navigator.userAgent);
	                for (iMatch = 0; iMatch < collMatches.length; iMatch++) {
	                    ds.stor.session.browserVersion = parseFloat(collMatches[iMatch].split("/")[1], 10);
	                    break;
	                }
	            } else if (navigator.userAgent.indexOf("; MSIE ") >= 0 && navigator.appName === "Microsoft Internet Explorer") {
	                ds.stor.session.browserName = "Internet Explorer";
	                ds.stor.session.browserSupportsActiveX = true;
	                regExp = /MSIE ([0-9.]+)/ig
	                collMatches = regExp.exec(navigator.userAgent);
	                for (iMatch = 0; iMatch < collMatches.length; iMatch++) {
	                    ds.stor.session.browserVersion = parseFloat(collMatches[iMatch].split(" ")[1], 10);
	                    break;
	                }
	                if (ds.stor.session.browserVersion < 7 || ds.stor.session.browserVersion > 10) {
	                    browserSupportsClassicDatasheet = false;
	                } else {
	                    var bActiveX = false;
	                    /* check browser's compatibility with the ListNet control (https://www.microsoft.com/en-us/download/details.aspx?id=13255) */
	                    try {
	                        var ActiveXobj = new ActiveXObject('ListNet.ListNet');
	                        bActiveX = true;
	                    } catch (err) {}
	                    if (bActiveX === true) {
	                        browserSupportsClassicDatasheet = true;
	                    }
	                }
	            }
	            if (typeof(afterFx) === "function") {
	                afterFx({ "browserName": ds.stor.session.browserName, "browserVersion": ds.stor.session.browserVersion, "browserSupportsActiveX": ds.stor.session.browserSupportsActiveX, "browserSupportsClassicDatasheet": ds.stor.session.browserSupportsClassicDatasheet });
	            }
	            return ds.stor.session.browserName;
	        },
	        getPageType: function(afterFx) {
	            if (ds.$("#_wikiPageMode").length > 0) {
	                ds.stor.session.pageType = 'Wiki';
	            }
	            if (GetUrlKeyValue("IsDlg") === "1") {
	                ds.stor.session.pageType = 'Dialog';
	                if (ds.$("#_wikiPageMode").length > 0) {
	                    ds.stor.session.pageType += ' Wiki';
	                }
	            }
	            if (typeof(afterFx) === "function") {
	                afterFx(ds.stor.session.pageType);
	            }
	            return ds.stor.session.pageType;
	        }
	    },
	    evts: {},
	    repOp: {
	        newObjRO: function(sROName, sROForFx, sRODesc, iLoopsToDo, loopingFx, successFx) {
	            var rightNow = new Date();
	            var ROName = sROName + rightNow.valueOf();
	            if (typeof(ds.repOp[ROName]) === "undefined") {
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
	                        ds.repOp[ROName].ro = new ds.repOp.newRO(function() {
	                            var loopIndex = ds.repOp[ROName].loopIndex;
	                            ds.repOp[ROName].loopingFx(loopIndex);
	                            // do stuff
	                            ds.log("Repeat Operation |" + ROName + "| running... at index |" + ds.repOp[ROName].loopIndex + "|");
	                            ds.repOp[ROName].loopIndex = ds.repOp[ROName].loopIndex + 1;
	                            ds.repOp[ROName].loopsDone = ds.repOp[ROName].loopsDone + 1;
	                            if (ds.repOp[ROName].loopsDone < ds.repOp[ROName].loopsToDo) {
	                                ds.repOp[ROName].ro();
	                            } else {
	                                ds.repOp[ROName].bDone = true;
	                                ds.log("Repeat Operation |" + ROName + "| complete");
	                                ds.repOp[ROName].successFx();
	                            }
	                        }, ds.repOp.yieldAfter);
	                        ds.repOp[ROName].ro();
	                    },
	                    successFx: successFx,
	                    loopingFx: loopingFx
	                };
	            } else {
	                ds.log("A Repeat Operation with that name (" + ROName + ") already exists!", true);
	                alert("A Repeat Operation with that name (" + ROName + ") already exists!");
	            }
	            return ROName;
	        },
	        newRO: function(anonymousOperation, whenToYield) {
	            /* This innocuous bit of code is the key bit that will allow for long processes without triggering the 'Stop Running This Script?' message*/
	            var count = 0;
	            return function() {
	                if (++count >= whenToYield) {
	                    count = 0;
	                    ds.log("Repeat operation is paused for |" + ds.repOp.pauseBetweenMS + "|ms");
	                    setTimeout(function() {
	                        anonymousOperation();
	                    }, ds.repOp.pauseBetweenMS);
	                } else {
	                    anonymousOperation();
	                }
	            }
	        },
	        yieldAfter: 2,
	        pauseBetweenMS: 173
	    },
	    intvls: {
	        newIntvl: function(sIntvlName) {
	            var rightNow = new Date();
	            var intvlName = sIntvlName + rightNow.valueOf();
	            if (typeof(ds.intvls[intvlName]) === "undefined") {
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
	                    loopingFx: function() {
	                        ds.intvls[intvlName].counter = ds.intvls[intvlName].counter + 1;

	                        ds.intvls[intvlName].doWorkFx();

	                        if (ds.intvls[intvlName].bDone === true) {
	                            ds.intvls[intvlName].successFx();
	                            clearInterval(ds.intvls[intvlName].intvl);
	                        }
	                        if ((ds.intvls[intvlName].counter * ds.intvls[intvlName].pauseMS) >= ds.intvls[intvlName].timeoutMS) {
	                            ds.intvls[intvlName].timeoutFx();
	                            clearInterval(ds.intvls[intvlName].intvl);
	                        }
	                    },
	                    doWorkFx: function() {

	                        // evaluate if we're done waiting, then set ds.intvls[this.name].bDone = true if so
	                    },
	                    successFx: function() {
	                        ds.log("ds.intvls." + intvlName + ".intvl... SUCCESSFULLY FINISHED WAITING", true);
	                    },
	                    timeoutFx: function() {
	                        ds.log("ds.intvls." + intvlName + ".intvl... ERROR! TIMED OUT WAITING", true);
	                    }
	                };
	            } else {
	                ds.log("An interval with that name (" + intvlName + ") already exists!", true);
	                alert("An interval with that name (" + intvlName + ") already exists!");
	            }
	            return intvlName;
	        },
	        wfIdleToLoadResources: {
	            intvl: null,
	            pauseMS: 73,
	            timeoutMS: 1100,
	            counter: 0,
	            loopingFx: function() {
	                var bSuccess = false;
	                // check to see if we're done waiting
	                try {
	                    if (ds.settings.idleTime >= (ds.intvls.wfIdleToLoadResources.timeoutMS / 2)) {
	                        bSuccess = true;
	                    }
	                } catch (err) {}
	                if (bSuccess === true) {
	                    ds.intvls.wfIdleToLoadResources.onSuccessFx();
	                    clearInterval(ds.intvls.wfIdleToLoadResources.intvl);
	                } else {
	                    if (ds.intvls.wfIdleToLoadResources.pauseMS * ds.intvls.wfIdleToLoadResources.counter >= ds.intvls.wfIdleToLoadResources.timeoutMS) {
	                        ds.intvls.wfIdleToLoadResources.onTimeoutFx();
	                        clearInterval(ds.intvls.wfIdleToLoadResources.intvl);
	                    } else {
	                        ds.intvls.wfIdleToLoadResources.counter = ds.intvls.wfIdleToLoadResources.counter + 1;
	                    }
	                }
	                ds.settings.idleTime += ds.intvls.wfIdleToLoadResources.pauseMS;
	            },
	            onTimeoutFx: function() {
	                ds.log("wfIdleToLoadResources... Detected user idle time... will load additional content in anticipation of the next user request to speed things up", true);
	                if (typeof(ds.intvls.wfIdleToLoadResources.afterFx) === "function") { ds.intvls.wfIdleToLoadResources.afterFx(); }
	            },
	            onSuccessFx: function() {
	                ds.log("wfIdleToLoadResources... Detected that sp.ribbon.js is loaded and document.readyState is complete... will load additional content in anticipation of the next user request to speed things up");
	                if (typeof(ds.intvls.wfIdleToLoadResources.afterFx) === "function") { ds.intvls.wfIdleToLoadResources.afterFx(); }
	            },
	            afterFx: function() {
	                if (ds.settings.bOnlyGetListsWhenTold === false) {
	                    ds.rest.coll.getLists(true, function() {
	                        ds.intvls.wfAllListsAndFields.intvl = setInterval(ds.intvls.wfAllListsAndFields.loopingFx, ds.intvls.wfAllListsAndFields.pauseMS);
	                    });
	                } else if (ds.util.isPageInEditMode() === false && ds.util.isPageInDialog() === false) {
	                    ds.util.getSettingsForCurrentPage(function(formSettings) {
	                        try {
	                            eval("formSettings.masterSettings.initFx = " + formSettings.masterSettings.initFx + ";");
	                            formSettings.masterSettings.initFx();
	                            if (typeof(formSettings.masterSettings.afterFx) === "function") {
	                                formSettings.masterSettings.afterFx();
	                            }
	                        } catch (err) {}
	                    });
	                    setTimeout(ds.util.conditionallyShowDsMagicConfigurationButton, 1300);
	                }

	                ds.pages.all();
	            }
	        },
	        wfAllListsAndFields: {
	            intvl: null,
	            pauseMS: 500,
	            timeoutMS: 8000,
	            counter: 0,
	            loopingFx: function() {
	                var bSuccess = false;
	                // check to see if we're done waiting
	                try {
	                    bSuccess = ds.util.checkIfAllListDefsRetrieved(true);
	                } catch (err) {}
	                if (bSuccess === true) {
	                    ds.intvls.wfAllListsAndFields.onSuccessFx();
	                    clearInterval(ds.intvls.wfAllListsAndFields.intvl);
	                } else {
	                    if (ds.intvls.wfAllListsAndFields.pauseMS * ds.intvls.wfAllListsAndFields.counter >= ds.intvls.wfAllListsAndFields.timeoutMS) {
	                        ds.intvls.wfAllListsAndFields.onTimeoutFx();
	                        clearInterval(ds.intvls.wfAllListsAndFields.intvl);
	                    } else {
	                        ds.intvls.wfAllListsAndFields.counter = ds.intvls.wfAllListsAndFields.counter + 1;
	                    }
	                }
	            },
	            onTimeoutFx: function() {
	                ds.log("wfAllListsAndFields... timeout waiting for all lists and fields to be retrieved");
	                window.clearInterval(ds.intvls.wfAllListsAndFields.intvl);
	            },
	            onSuccessFx: function() {
	                if (ds.settings.bOnlyGetListsWhenTold === true) {
	                    ds.log("wfAllListsAndFields... Detected that all lists and fields have been retrieved", true);
	                    if (ds.util.isPageInEditMode() === false && ds.util.isPageInDialog() === false) {
	                        setTimeout(ds.util.conditionallyShowDsMagicConfigurationButton, 1300);
	                    }
	                    window.clearInterval(ds.intvls.wfAllListsAndFields.intvl);
	                } else if (ds.util.isPageInEditMode() === false && ds.util.isPageInDialog() === false) {
	                    ds.log("wfAllListsAndFields... Detected that all lists and fields have been retrieved... retrieving settings", true);
	                    ds.util.getSettingsForCurrentPage(function(formSettings) {
	                        try {
	                            eval("formSettings.masterSettings.initFx = " + formSettings.masterSettings.initFx + ";");
	                            formSettings.masterSettings.initFx();
	                            if (typeof(formSettings.masterSettings.afterFx) === "function") {
	                                formSettings.masterSettings.afterFx();
	                            }
	                        } catch (err) {}
	                    });
	                    setTimeout(ds.util.conditionallyShowDsMagicConfigurationButton, 1300);
	                    window.clearInterval(ds.intvls.wfAllListsAndFields.intvl);
	                } else {
	                    ds.log("wfAllListsAndFields... Detected that page is in edit mode or is a dialog, so not retrieving settings or showing config button", true);
	                    window.clearInterval(ds.intvls.wfAllListsAndFields.intvl);
	                }
	            }
	        }
	    },
	    pages: {
	        all: function() {
	            ds.log("Setting up event handlers used on all pages", true);
	            ds.$("BODY").on("keypress", function(e) {
	                ds.settings.idleTime = 0;
	                ds.evts.keyPressBody = e;
	            });
	            ds.$("BODY").on("mousedown", function(e) {
	                ds.settings.idleTime = 0;
	                ds.evts.mouseDownBody = e;
	            });
	            ds.$("BODY").on("mouseup", function(e) {
	                ds.settings.idleTime = 0;
	                ds.evts.mouseUpBody = e;
	            });
	            ds.$("BODY").on("mousemove", function(e) {
	                ds.settings.idleTime = 0;
	                ds.evts.mouseMoveBody = e;
	                ds.stor.session.mouseX = e.clientX;
	                ds.stor.session.mouseY = e.clientY;
	            });
	            ds.$(window).on("blur", function(e) {
	                ds.stor.session.windowFocus = false;
	                ds.settings.idleTime = ds.intvls.wfIdleToLoadResources.timeoutMS + 1;
	                ds.evts.blurWindow = e;
	            });
	            ds.$(window).on("focus", function(e) {
	                ds.stor.session.windowFocus = true;
	                ds.evts.focusWindow = e;
	            });
	            ds.util.getBrowserNameAndVersion(function(oBrowser) { ds.log("DS Magic for SharePoint namespace detected browser as |" + oBrowser.browserName + "| and version |" + oBrowser.browserVersion + "|", true); });
	            ds.$("#DeltaSiteLogo").empty().append("<div class='ds-magic-logo-wrapper' unselectable='on'><span class='ds-magic-logo-content-letter' unselectable='on'>d</span><span class='ds-magic-logo-content-letter' unselectable='on'>s</span><span class='ds-magic-logo-content-fa' unselectable='on'><i class='fa fa-magic'></i></span></div>");
	        }
	    },
	    onLoad: setTimeout(function() {
	        ds.log("DS SPMagic Util Namespace loaded", true);
	        document.onreadystatechange = function() {
	            if (document.readyState === "complete") {
	                ExecuteOrDelayUntilScriptLoaded(function() {
	                    ds.log("Document.ready event fired", true);
	                    ds.util.getSPUIVersion(function() { ds.log("DS Namespace detected SP UI version of |" + ds.stor.session.uiVersion + "|", true); });
	                    ds.util.getPageType(function() { ds.log("DS Namespace detected page type of |" + ds.stor.session.pageType + "|", true); });
	                    if (ds.util.isPageInEditMode() === false && ds.util.isPageInDialog() === false) {
	                        /*ds.intvls.wfIdleToLoadResources.intvl = setInterval(ds.intvls.wfIdleToLoadResources.loopingFx, ds.intvls.wfIdleToLoadResources.pauseMS);*/
	                    }
	                }, "sp.js");
	            }
	        }
	    }, 100)
	};
