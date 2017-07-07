ds.controls.codeEditor = {
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
				// drop any existing style or css that affects the appearance of our code
				ds.$(this).text(ds.$(this).text());
				// re-run the script to highlight our code
				hljs.highlightBlock(ds.$(this).parent()[0]);
			})
			ds.$(this).parent().dblclick(function(){
				// drop any existing style or css that affects the appearance of our code
				ds.$(this).children().eq(0).text(ds.$(this).children().eq(0).text());
				// re-run the script to highlight our code
				hljs.highlightBlock(ds.$(this)[0]);
			});
		});
	},
	forceHighlight: function(jqSel) {
		//ds.$(jqSel).text(js_beautify(ds.$(jqSel).text()));
		ds.$(jqSel).text(ds.$(jqSel).text());
		hljs.highlightBlock(ds.$(jqSel)[0]);
		return true;
	}
};