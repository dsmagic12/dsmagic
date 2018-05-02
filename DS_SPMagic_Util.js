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
            lists2013: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/lists',
            lists2010: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_vti_bin/ListData.svc/',
            '2010': {
                lists: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_vti_bin/ListData.svc'
            },
            '2013': {
                web: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web',
                firstUniqueAncestorSecurableObject: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/FirstUniqueAncestorSecurableObject',
                roleAssignments: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/RoleAssignments',
                allProperties: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/AllProperties',
                associatedMemberGroup: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/AssociatedMemberGroup',
                associatedOwnerGroup: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/AssociatedOwnerGroup',
                associatedVisitorGroup: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/AssociatedVisitorGroup',
                availableContentTypes: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/AvailableContentTypes',
                availableFields: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/AvailableFields',
                contentTypes: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/ContentTypes',
                currentUser: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/CurrentUser',
                eventReceivers: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/EventReceivers',
                features: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/Features',
                fields: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/Fields',
                folders: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/Folders',
                lists: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/Lists',
                listByGUID: function(guid){ return window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + "_api/web/Lists(guid'" + guid + "')"; },
                listByTitle: function(title){ return window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + "_api/web/Lists/GetByTitle('" + title + "')"; },
                listTemplates: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/ListTemplates',
                navigation: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/Navigation',
                parentWeb: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/ParentWeb',
                pushNotificationSubscribers: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/PushNotificationSubscribers',
                recycleBin: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/RecycleBin',
                regionalSettings: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/RegionalSettings',
                roleDefinitions: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/RoleDefinitions',
                rootFolder: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/RootFolder',
                siteGroups: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/SiteGroups',
                siteUserInfoList: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/SiteUserInfoList',
                siteUsers: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/SiteUsers',
                themeInfo: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/ThemeInfo',
                userCustomActions: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/UserCustomActions',
				webs: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/Webs',
				subsites: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/Webs',
                webInfos: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/WebInfos',
                workflowAssociations: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/WorkflowAssociations',
                workflowTemplates: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/WorkflowTemplates',
                userProfiles: {
                    peoplemanager: {
                        current: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/sp.userprofiles.peoplemanager/getmyproperties',
                        byUserAccount: function(userKey) { return window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + "/_api/sp.userprofiles.peoplemanager/getpropertiesfor(@v)?@v='" + encodeURIComponent(userKey) + "'" }
                    },
                    profile: {
                        current: window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + '/_api/web/CurrentUser',
                        bySPUserId: function(spUID) { return window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + "/_api/web/GetUserById(" + spUID + ")" }
                    }
                },
                listFile: function(listGUID, itemID) { return window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists(guid'" + listGUID + "')/items(" + itemID + ")/File"; },
                fileVersions: function(listGUID, itemID) { return window.location.protocol + '//'+ window.location.host + _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists(guid'" + listGUID + "')/items(" + itemID + ")/File/Versions"; }
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
    spObjs: {
        list: function(listTitle, listTemplateNum, listDescription, ){
            return {
                __metadata: { type: 'SP.List' }, 
                AllowContentTypes: true, 
                BaseTemplate: nListTemplateID, 
                ContentTypesEnabled: true, 
                Description: sListDescription, 
                Title: sListName 
            }
        }
    },
	lists: {},
	webParts: {},
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
        captureArray: function(restURL, strCaptureResultsIn, fxLastPage, fxFailed) {
			if (typeof(eval(strCaptureResultsIn)) !== "object") {
				eval(strCaptureResultsIn + "={};");
			}
			else {
				strCaptureResultsIn += ".results";
				eval(strCaptureResultsIn + "=[];");
			}
			var fxCallback = function(xhr, data) {
                if (typeof(data.d.results) !== undefined) {
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
		captureNamedArray: function(restURL, strCaptureResultsIn, strNameByProperty, fxLastPage, fxFailed){
			if ( typeof(strNameByProperty) === "undefined" ) { var strNameByProperty = "Id"; }
			if (typeof(eval(strCaptureResultsIn)) !== "object") {
				eval(strCaptureResultsIn + "={};");
			}
			var fxCallback = function(xhr, data) {
                if (typeof(data.d.results) !== undefined) {
                    if ( data.d.results.length > 0 ){
                        if (typeof(eval(strCaptureResultsIn + "['" + data.d.results[0][strNameByProperty] + "']")) !== "object") {
                            eval(strCaptureResultsIn + "['" + data.d.results[0][strNameByProperty] + "']={};");
                        }
                        for (var i = 0; i < data.d.results.length; i++) {
                            eval(strCaptureResultsIn + "['"+data.d.results[i][strNameByProperty]+"'] = " + JSON.stringify(data.d.results[i]) + ";");
                        }
                    }
                } else {
					if (typeof(eval(strCaptureResultsIn + "['" + data.d[strNameByProperty] + "']")) !== "object") {
						eval(strCaptureResultsIn + "['" + data.d[strNameByProperty] + "']={};");
					}
                    for (prop in data.d) {
                        eval(strCaptureResultsIn + "['" + data.d[strNameByProperty] + "'][" + prop + "] = " + data.d[prop] + ";");
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
		},
		getListPermissions: function(strCaptureResultsIn) {
			var restURL = eval(strCaptureResultsIn+".__metadata.uri");
			restURL += "?$select=EffectiveBasePermissions";
			var fxCallback = function(xhr, data) {
				eval(strCaptureResultsIn+".EffectiveBasePermissions = "+JSON.stringify(data.d.EffectiveBasePermissions)+";");
            }
			ds.ajax.read(restURL, fxCallback);
		}
	},
    log: function(message, bIgnoreDebugReq) {
        if (typeof(bIgnoreDebugReq) === "undefined") { var bIgnoreDebugReq = false; }
        if (ds.settings.bDebug === true || bIgnoreDebugReq === true) {
            try { console.log(message); } catch (err) {}
        }
	},
	forms:{
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
        getFieldFromCtx: function(sFieldName, fxCallback){
            /*
                ds.forms.getFieldFromCtx("Choice Dropdown", function(oField){ds.log("Found field with Title = |"+ oField.Title +"|");});
            */
            ds.util.getWebParts(function(webParts){
                var bFound = false;
                var oReturn = null;
                for ( wp in webParts ){
                    /*ds.log("Checking wp |"+ wp +"|");*/
                    if ( webParts[wp].type === "form" ){
                        for ( field in webParts[wp].schemaData ){
                            /*ds.log("Checking wp field |"+ field +"|");*/
                            if ( webParts[wp].schemaData[field].Title === sFieldName ){
                                bFound = true;
                                oReturn = webParts[wp].schemaData[field];
                                break;
                            }
                        }
                    }
                    if ( bFound === true ){
                        break;
                    }
                }
                /*ds.log(oReturn);*/
                if ( !oReturn === false ){
                    if ( typeof(fxCallback) === "function" ){
                        return fxCallback(oReturn);
                    }
                    else {
                        return oReturn;
                    }
                }
                else {
                    return false;
                }
            });
        },
        getFieldControlType: function(oField, fxCallback){
            //ds.log(oField);
            var oReturn = {};
            switch (oField.FieldType){
                case "Choice":
                    //ds.log(oField.FieldType);
                    switch (oField.FormatType){
                        case 0:
                            oReturn.tagName = "SELECT";
                            oReturn.mulitple = false;
                            oReturn.options = oField.Choices;
                            oReturn.guid = oField.Id;
                            oReturn.id = oField.Name +"_"+ oField.Id +"_$DropDownChoice";
                            oReturn.title = oField.Title;
                            oReturn.name = oField.Name;
                            oReturn.required = oField.Required;
                            oReturn.fillInChoice = oField.FillInChoice;
                            oReturn.numberOfLines = false;
                            oReturn.richText = false;
                            oReturn.richTextMode = false;
                            oReturn.restrictedMode = false;
                            oReturn.allowHyperlink = false;
                            oReturn.appendOnly = false;
                            oReturn.showAsPercentage = false;        
                            oReturn.set = function(value){
                                //document.getElementById(this.id).value = this.value;
                                var collChoices = document.getElementById(this.name +"_"+ this.guid +"_$DropDownChoice").childNodes;
                                for ( var i = 0; i < collChoices.length; i++ ) {
                                    if ( collChoices[i].innerText === value ){
                                        collChoices[i].selected = true;
                                    }
                                    else {
                                        collChoices[i].selected = false;
                                    }
                                }
                            };
                            oReturn.get = function(){
                                return document.getElementById(this.id).value;
                            };
                            if ( typeof(fxCallback) === "function" ){
                                return fxCallback(oReturn);
                            }
                            break;
                        case 1:
                            oReturn.tagName = "TABLE";
                            oReturn.mulitple = false;
                            oReturn.options = oField.Choices;
                            oReturn.guid = oField.Id;
                            oReturn.id = oField.Name +"_"+ oField.Id +"_ChoiceRadioTable";
                            oReturn.title = "";
                            oReturn.name = oField.Name;
                            oReturn.required = oField.Required;
                            oReturn.fillInChoice = oField.FillInChoice;
                            oReturn.numberOfLines = false;
                            oReturn.richText = false;
                            oReturn.richTextMode = false;
                            oReturn.restrictedMode = false;
                            oReturn.allowHyperlink = false;
                            oReturn.appendOnly = false;
                            oReturn.showAsPercentage = false;        
                            oReturn.set = function(value){
                                for ( var i = 0; i < this.options.length; i++ ){
                                    if ( this.options[i] === value ){
                                        document.getElementById(oField.Name +"_"+ this.guid +"_$RadioButtonChoiceField"+ i).checked = true;
                                        break;
                                    }
                                }
                                
                            };
                            oReturn.get = function(){
                                var collRadios = document.getElementById(this.id).getElementsByClassName("ms-RadioText");
                                for ( var i = 0; i < collRadios.length; i++ ){
                                    if ( collRadios[i].checked === true ) {
                                        return collRadios[i].nextSibling.innerText;
                                        break;
                                    }
                                }
                            };
                            if ( typeof(fxCallback) === "function" ){
                                return fxCallback(oReturn);
                            }
                            break;
                        default:
                            ds.log("Unknown format type |"+ oField.FormatType +"| for |"+ oField.FieldType +"|");
                    }
                    break;
                case "MultiChoice":
                    //ds.log(oField.FieldType);
                    oReturn.tagName = "TABLE";
                    oReturn.mulitple = false;
                    oReturn.options = oField.Choices;
                    oReturn.guid = oField.Id;
                    oReturn.id = oField.Name +"_"+ oField.Id +"_MultiChoiceTable";
                    oReturn.title = "";
                    oReturn.name = oField.Name;
                    oReturn.required = oField.Required;
                    oReturn.fillInChoice = oField.FillInChoice;
                    oReturn.numberOfLines = false;
                    oReturn.richText = false;
                    oReturn.richTextMode = false;
                    oReturn.restrictedMode = false;
                    oReturn.allowHyperlink = false;
                    oReturn.appendOnly = false;
                    oReturn.showAsPercentage = false;
                    oReturn.set = function(value){ 
                        for ( var i = 0; i < this.options.length; i++ ){
                            if ( this.options[i] === value ){
                                document.getElementById(oField.Name +"_"+ this.guid +"_MultiChoiceOption_"+ i).checked = true;
                                break;
                            }
                        }
                    };
                    oReturn.get = function(){
                        var collRadios = document.getElementById(this.id).getElementsByClassName("ms-RadioText");
                        for ( var i = 0; i < collRadios.length; i++ ){
                            if ( collRadios[i].checked === true ) {
                                return collRadios[i].nextSibling.innerText;
                                break;
                            }
                        }
                    };
                    if ( typeof(fxCallback) === "function" ){
                        return fxCallback(oReturn);
                    }
                    break;
                case "Note":
                    //ds.log(oField.FieldType);
                    oReturn.mulitple = false;
                    oReturn.options = false;
                    oReturn.guid = oField.Id;
                    oReturn.id = "";
                    oReturn.title = oField.Title;
                    oReturn.name = oField.Name;
                    oReturn.required = oField.Required;
                    oReturn.fillInChoice = false;
                    oReturn.numberOfLines = oField.NumberOfLines;
                    oReturn.richText = oField.RichText;
                    oReturn.richTextMode = oField.RichTextMode;
                    oReturn.restrictedMode = oField.RestrictedMode;
                    oReturn.allowHyperlink = oField.AllowHyperlink;
                    oReturn.appendOnly = oField.AppendOnly;
                    oReturn.showAsPercentage = false;
                    if ( oField.RichText === false ){
                        oReturn.tagName = "TEXTAREA";
                        oReturn.id = oField.Name +"_"+ oField.Id +"_$TextField";
                        oReturn.set = function(value){ 
                            document.getElementById(this.id).value = value;
                        };
                        oReturn.get = function(){
                            return document.getElementById(this.id).value;
                        };
                    }
                    else {
                        oReturn.tagName = "DIV";
                        oReturn.id = oField.Name +"_"+ oField.Id +"_$TextField_inplacerte";
                        oReturn.set = function(value){ 
                            document.getElementById(this.id).innerHTML = value;
                        };
                        oReturn.get = function(){
                            return document.getElementById(this.id).innerHTML;
                        };
                    }
                    if ( typeof(fxCallback) === "function" ){
                        return fxCallback(oReturn);
                    }
                    break;
                case "Currency":
                    //ds.log(oField.FieldType);
                    oReturn.tagName = "INPUT";
                    oReturn.mulitple = false;
                    oReturn.options = false;
                    oReturn.guid = oField.Id;
                    oReturn.id = oField.Name +"_"+ oField.Id +"_$CurrencyField";
                    oReturn.title = oField.Title;
                    oReturn.name = oField.Name;
                    oReturn.required = oField.Required;
                    oReturn.fillInChoice = false;
                    oReturn.numberOfLines = false;
                    oReturn.richText = false;
                    oReturn.richTextMode = false;
                    oReturn.restrictedMode = false;
                    oReturn.allowHyperlink = false;
                    oReturn.appendOnly = false;
                    oReturn.showAsPercentage = oField.ShowAsPercentage;
                    oReturn.set = function(value){ 
                        document.getElementById(this.id).value = value;
                    };
                    oReturn.get = function(){
                        return document.getElementById(this.id).value;
                    };
                    if ( typeof(fxCallback) === "function" ){
                        return fxCallback(oReturn);
                    }
                    break;
                case "DateTime":
                    //ds.log(oField.FieldType);
                    switch (oField.DisplayFormat){
                        case 0:
                            oReturn.tagName = "INPUT";
                            oReturn.mulitple = false;
                            oReturn.options = false;
                            oReturn.guid = oField.Id;
                            oReturn.id = oField.Name +"_"+ oField.Id +"_$DateTimeFieldDate";
                            oReturn.title = oField.Title;
                            oReturn.name = oField.Name;
                            oReturn.required = oField.Required;
                            oReturn.fillInChoice = false;
                            oReturn.numberOfLines = false;
                            oReturn.richText = false;
                            oReturn.richTextMode = false;
                            oReturn.restrictedMode = false;
                            oReturn.allowHyperlink = false;
                            oReturn.appendOnly = false;
                            oReturn.showAsPercentage = false;        
                            oReturn.showWeekNumber = oField.ShowWeekNumber;
                            oReturn.timeZoneDifference = oField.TimeZoneDifference;
                            oReturn.maxJDay = oField.MaxJDay;
                            oReturn.minJDay = oField.MinJDay;
                            oReturn.firstDayOfWeek = oField.FirstDayOfWeek;
                            oReturn.firstWeekOfYear = oField.FirstWeekOfYear;
                            oReturn.hijriAdjustment = oField.HijriAdjustment;
                            oReturn.localeId = oField.LocaleId;
                            oReturn.workWeek = oField.WorkWeek;
                            oReturn.calendarType = oField.CalendarType;
                            oReturn.timeSeparator = oField.TimeSeparator;
                            oReturn.hoursMode24 = false;
                            oReturn.hoursOptions = false;
                            oReturn.set = function(value){
                                document.getElementById(this.id).value = this.value;
                            };
                            oReturn.get = function(){
                                return document.getElementById(this.id).value;
                            };
                            if ( typeof(fxCallback) === "function" ){
                                return fxCallback(oReturn);
                            }
                            break;
                        case 1:
                            oReturn.tagName = "INPUT";
                            oReturn.mulitple = false;
                            oReturn.options = false;
                            oReturn.guid = oField.Id;
                            oReturn.id = oField.Name +"_"+ oField.Id +"_$DateTimeFieldDate";
                            oReturn.title = oField.Title;
                            oReturn.name = oField.Name;
                            oReturn.required = oField.Required;
                            oReturn.fillInChoice = false;
                            oReturn.numberOfLines = false;
                            oReturn.richText = false;
                            oReturn.richTextMode = false;
                            oReturn.restrictedMode = false;
                            oReturn.allowHyperlink = false;
                            oReturn.appendOnly = false;
                            oReturn.showAsPercentage = false;        
                            oReturn.showWeekNumber = oField.ShowWeekNumber;
                            oReturn.timeZoneDifference = oField.TimeZoneDifference;
                            oReturn.maxJDay = oField.MaxJDay;
                            oReturn.minJDay = oField.MinJDay;
                            oReturn.firstDayOfWeek = oField.FirstDayOfWeek;
                            oReturn.firstWeekOfYear = oField.FirstWeekOfYear;
                            oReturn.hijriAdjustment = oField.HijriAdjustment;
                            oReturn.localeId = oField.LocaleId;
                            oReturn.workWeek = oField.WorkWeek;
                            oReturn.calendarType = oField.CalendarType;
                            oReturn.hoursMode24 = oField.HoursMode24;
                            oReturn.hoursOptions = oField.HoursOptions;
                            oReturn.timeSeparator = oField.TimeSeparator;
                            oReturn.set = function(dateValue, hoursValue, minutesValue){
                                document.getElementById(this.id).value = this.value;
                                var collHours = document.getElementById(this.name +"_"+ this.guid +"_$DateTimeFieldDateHours").childNodes;
                                for ( var i = 0; i < collHours.length; i++ ) {
                                    if ( parseInt(collHours[i].value,10) === hoursValue ){
                                        collHours[i].selected = true;
                                    }
                                    else {
                                        collHours[i].selected = false;
                                    }
                                }
                                var collMinutes = document.getElementById(this.name +"_"+ this.guid +"_$DateTimeFieldDateMinutes").childNodes;
                                for ( var i = 0; i < collMinutes.length; i++ ) {
                                    if ( parseInt(collMinutes[i].value,10) === minutesValue ){
                                        collMinutes[i].selected = true;
                                    }
                                    else {
                                        collMinutes[i].selected = false;
                                    }
                                }
                            };
                            oReturn.get = function(){
                                return document.getElementById(this.id).value +" "+ document.getElementById(this.name +"_"+ this.guid +"_$DateTimeFieldDateHours").value + this.timeSeparator + document.getElementById(this.name +"_"+ this.guid +"_$DateTimeFieldDateMinutes").value;
                            };
                            if ( typeof(fxCallback) === "function" ){
                                return fxCallback(oReturn);
                            }
                            break;
                        default:
                            ds.log("Unknown format type |"+ oField.FormatType +"| for |"+ oField.DisplayFormat +"|");
                    }
                    break;
                case "UserMulti":
                    //ds.log(oField.FieldType);
                    oReturn.picker = SPClientPeoplePicker.SPClientPeoplePickerDict[oField.TopLevelElementId];
                    //ds.log(oReturn.picker);
                    oReturn.get = function(){
                        if ( SPClientPeoplePicker.SPClientPeoplePickerDict[oField.TopLevelElementId].AllowMultipleUsers === false ){
                            if ( SPClientPeoplePicker.SPClientPeoplePickerDict[oField.TopLevelElementId].HasResolvedUsers() === true ) {
                                return SPClientPeoplePicker.SPClientPeoplePickerDict[oField.TopLevelElementId].GetAllUserInfo()[0];
                            }
                            else {
                                return SPClientPeoplePicker.SPClientPeoplePickerDict[oField.TopLevelElementId].GetAllUserInfo();
                            }
                        }
                        else {
                            return SPClientPeoplePicker.SPClientPeoplePickerDict[oField.TopLevelElementId].GetAllUserInfo();
                        }
                    };
                    oReturn.set = function(userKey){
                        if ( typeof(userKey) === "undefined" ){ var userKey = _spPageContextInfo.systemUserKey; }
                        SPClientPeoplePicker.SPClientPeoplePickerDict[oField.TopLevelElementId].AddUserKeys(userKey);
                    };
                    if ( typeof(fxCallback) === "function" ){
                        return fxCallback(oReturn);
                    }
                    break;
                case "User":
                    //ds.log(oField.FieldType);
                    oReturn.picker = SPClientPeoplePicker.SPClientPeoplePickerDict[oField.TopLevelElementId];
                    //ds.log(oReturn.picker);
                    oReturn.get = function(){
                        if ( SPClientPeoplePicker.SPClientPeoplePickerDict[oField.TopLevelElementId].AllowMultipleUsers === false ){
                            if ( SPClientPeoplePicker.SPClientPeoplePickerDict[oField.TopLevelElementId].HasResolvedUsers() === true ) {
                                return SPClientPeoplePicker.SPClientPeoplePickerDict[oField.TopLevelElementId].GetAllUserInfo()[0];
                            }
                            else {
                                return SPClientPeoplePicker.SPClientPeoplePickerDict[oField.TopLevelElementId].GetAllUserInfo();
                            }
                        }
                        else {
                            return SPClientPeoplePicker.SPClientPeoplePickerDict[oField.TopLevelElementId].GetAllUserInfo();
                        }
                    };
                    oReturn.set = function(userKey){
                        if ( typeof(userKey) === "undefined" ){ var userKey = _spPageContextInfo.systemUserKey; }
                        SPClientPeoplePicker.SPClientPeoplePickerDict[oField.TopLevelElementId].AddUserKeys(userKey);
                    };
                    if ( typeof(fxCallback) === "function" ){
                        return fxCallback(oReturn);
                    }
                    break;
                case "Text":
                    oReturn.tagName = "INPUT";
                    oReturn.guid = oField.Id;
                    oReturn.id = oField.Name +"_"+ oField.Id +"_$TextField";
                    oReturn.title = oField.Title;
                    oReturn.name = oField.Name;
                    oReturn.required = oField.Required;
                    oReturn.maxLength = oField.MaxLength;
                    oReturn.set = function(value){ 
                        document.getElementById(this.id).value = value;
                    };
                    oReturn.get = function(){
                        return document.getElementById(this.id).value;
                    };
                    if ( typeof(fxCallback) === "function" ){
                        return fxCallback(oReturn);
                    }
                    break;
                case "Number":
                    oReturn.tagName = "INPUT";
                    oReturn.guid = oField.Id;
                    oReturn.id = oField.Name +"_"+ oField.Id +"_$NumberField";
                    oReturn.title = oField.Title;
                    oReturn.name = oField.Name;
                    oReturn.required = oField.Required;
                    oReturn.showAsPercentage = oField.ShowAsPercentage;
                    oReturn.set = function(value){ 
                        document.getElementById(this.id).value = value;
                    };
                    oReturn.get = function(){
                        return document.getElementById(this.id).value;
                    };
                    if ( typeof(fxCallback) === "function" ){
                        return fxCallback(oReturn);
                    }
                    break;
                case "Lookup":
                    /*
                        ds.forms.getFieldFromCtx("Lookup Single",function(myField){ ds.forms.getFieldControlType(myField, function(fieldControl){fieldControl.set("Demo get user properties");}); });
                    */
                    oReturn.tagName = "SELECT";
                    oReturn.guid = oField.Id;
                    oReturn.id = oField.Name +"_"+ oField.Id +"_$LookupField";
                    oReturn.title = oField.Title;
                    oReturn.name = oField.Name;
                    oReturn.required = oField.Required;
                    oReturn.throttled = oField.Throttled;
                    oReturn.lookupListId = oField.LookupListId;
                    oReturn.dependentLookup = oField.DependentLookup;
                    oReturn.choiceCount = oField.ChoiceCount;
                    oReturn.choices = oField.Choices;
                    oReturn.allowMultipleValues = oField.AllowMultipleValues;
                    oReturn.set = function(value){ 
                        //document.getElementById(this.id).value = value;
                        var collChoices = document.getElementById(this.id).childNodes;
                        for ( var i = 0; i < collChoices.length; i++ ) {
                            if ( collChoices[i].innerText === value ){
                                collChoices[i].selected = true;
                            }
                            else {
                                collChoices[i].selected = false;
                            }
                        }
                    };
                    oReturn.get = function(){
                        return document.getElementById(this.id).value;
                    };
                    if ( typeof(fxCallback) === "function" ){
                        return fxCallback(oReturn);
                    }
                    break;
                case "LookupMulti":
                    /*
                    ds.forms.getFieldFromCtx("Lookup Multi",function(myField){ ds.forms.getFieldControlType(myField, function(fieldControl){fieldControl.set("Demo working with people pickers via SharePoint's CSOM");}); });
                    */
                    oReturn.tagName = "SELECT";
                    oReturn.guid = oField.Id;
                    oReturn.id = oField.Name +"_"+ oField.Id +"_MultiLookup";
                    oReturn.idCandidate = oField.Name +"_"+ oField.Id +"_SelectCandidate";
                    oReturn.idResult = oField.Name +"_"+ oField.Id +"_SelectResult";
                    oReturn.idAddButton = oField.Name +"_"+ oField.Id +"_AddButton";
                    oReturn.idRemoveButton = oField.Name +"_"+ oField.Id +"_RemoveButton";
                    oReturn.title = oField.Title;
                    oReturn.name = oField.Name;
                    oReturn.required = oField.Required;
                    oReturn.throttled = oField.Throttled;
                    oReturn.lookupListId = oField.LookupListId;
                    oReturn.dependentLookup = oField.DependentLookup;
                    oReturn.choiceCount = oField.ChoiceCount;
                    oReturn.choices = oField.Choices;
                    oReturn.allowMultipleValues = oField.AllowMultipleValues;
                    oReturn.set = function(value){ 
                        //document.getElementById(this.id).value = value;
                        /* remove unmatched choices */
                        var collChoices = document.getElementById(this.idResult).childNodes;
                        for ( var i = 0; i < collChoices.length; i++ ) {
                            if ( collChoices[i].innerText === value ){
                                collChoices[i].selected = false;
                            }
                            else {
                                collChoices[i].selected = true;
                            }
                        }
                        document.getElementById(this.idRemoveButton).click()
                        /* add matched choices */
                        var collChoices = document.getElementById(this.idCandidate).childNodes;
                        for ( var i = 0; i < collChoices.length; i++ ) {
                            if ( collChoices[i].innerText === value ){
                                collChoices[i].selected = true;
                            }
                            else {
                                collChoices[i].selected = false;
                            }
                        }
                        document.getElementById(this.idAddButton).click()

                    };
                    oReturn.get = function(){
                        return document.getElementById(this.idResult).value;
                    };
                    if ( typeof(fxCallback) === "function" ){
                        return fxCallback(oReturn);
                    }
                    break;
                default: 
                    ds.log("Unknown format type |"+ oField.FormatType +"| for |"+ oField.FieldType +"|");
            }
            //ds.log(oReturn);
            /*return oReturn;*/
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
            ds.ajax.captureArray(ds.p.rest.lists2013, "ds.lists")
            ds.util.findObjectInArray(ds.lists.results, {"Title": "Meetings"})
            
            
            
            ds.ajax.captureArray(ds.p.rest.lists2013+"?$expand=Fields,Views,Forms", "ds.lists")
            ds.util.findObjectInArray(ds.lists.results, [{"Title": "Meetings"},{"Id":"ecb433ee-09f5-4c9d-8cd4-0090f730d3aa"}], function(matches){
                for ( var m = 0; m < matches.length; m++ ) {
                    ds.util.findObjectInArray(matches[m].Fields.results, {"LookupList":_spPageContextInfo.pageListId}, function(subMatch){
                        ds.log(subMatch);
                    })
                }
			});
			
			ds.ajax.captureNamedArray(ds.p.rest.lists2013+"?$expand=Fields,Views,Forms", "ds.lists", "Title")
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
			if ( typeof(array) === "object" ){
				if ( typeof(array.length) !== "undefined" ){
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
				}
				else {
					for ( arrayElement in array ){
						bMatch = false;
						if (typeof(arrPropertiesValues) === "object") {
							if (typeof(arrPropertiesValues.length) === "undefined") {
								for (prop in arrPropertiesValues) {
									//ds.log("Checking match for property |" + prop + "|");
									try {
										//ds.log("Checking match for property |" + array[arrayElement][prop] + "|");
										if (array[arrayElement][prop] === arrPropertiesValues[prop]) {
											bMatch = true;
											break;
										}
									} catch (err) {
										bMatch = false;
										ds.log("Coulding check property value match |" + prop + "|");
										ds.log("array element");
										ds.log(array[arrayElement]);
										ds.log("Checking for match to value");
										ds.log(arrPropertiesValues[prop]);
										break;
									}
								}
								if (bMatch === true) {
									oReturn.push(array[arrayElement]);
								}
							} else {
								bFullMatch = true;
								for (var iA = 0; iA < arrPropertiesValues.length; iA++) {
									bMatch = false;
									for (prop in arrPropertiesValues[iA]) {
										//ds.log("Checking match for property |" + prop + "|");
										try {
											//ds.log("Checking match for property value |" + array[arrayElement][prop] + "|");
											//ds.log("Checking match for property value |" + arrPropertiesValues[iA][prop] + "|");
											if (array[arrayElement][prop] === arrPropertiesValues[iA][prop]) {
												bMatch = true;
												break;
											}
										} catch (err) {
											ds.log("Coulding check property value match |" + prop + "|");
											ds.log("array element");
											ds.log(array[arrayElement]);
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
									oReturn.push(array[arrayElement]);
								}
							}
						} else {
							break;
						}
					}
				}

			}

            if (typeof(fxCallback) === "function") {
                fxCallback(oReturn);
            }
            return oReturn;
		},
		getWebParts: function(fxCallback){
			ds.webParts = {};
			var collWPs = document.getElementsByClassName("ms-webpartzone-cell");
			for ( var iWP = 0; iWP < collWPs.length; iWP++ ){
				var wp = collWPs[iWP].id.replace("MSOZoneCell_WebPart","");
				ds.webParts[wp] = {
					outerWrapper: collWPs[iWP],
					seqID: parseInt(collWPs[iWP].id.replace("MSOZoneCell_WebPartWPQ",""),10),
					type: "",
					title: "",
					shortName: wp,
					formCtx: undefined,
					listData: undefined,
                    schemaData: undefined,
                    varPart: undefined
				}
				try{ds.webParts[wp].title = document.getElementById("WebPart"+wp+"_ChromeTitle").innerText;}catch(err){}
				try{ds.webParts[wp].formCtx = eval(wp+"FormCtx;");}catch(err){}
				try{ds.webParts[wp].listData = eval(wp+"ListData;");}catch(err){}
                try{ds.webParts[wp].schemaData = eval(wp+"SchemaData;");}catch(err){}
                try{ds.webParts[wp].varPart = eval("varPart"+wp+";");}catch(err){}
				if ( typeof(ds.webParts[wp].formCtx) !== "undefined" ){ 
					ds.webParts[wp].type = "form"; 
					ds.webParts[wp].listData = ds.webParts[wp].formCtx.ListData;
					ds.webParts[wp].schemaData = ds.webParts[wp].formCtx.ListSchema;
				}
				else { wp.type = "view"; }
			}
			if (typeof(fxCallback) === "function") {
                return fxCallback(ds.webParts);
            }
            else if ( collWPs.length > 0 ) {
                return true;
            }
            else {
                return false;
            }
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