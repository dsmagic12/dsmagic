ds.stor.createLists = {
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
};