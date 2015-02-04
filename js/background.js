function genericOnClick(info, tab) {
  
  var myVar = "";
  
   if (info.srcUrl ) {
	myVar = info.srcUrl ;
  }
  
   if (info.pageUrl ) {
	myVar = info.pageUrl ;
  }
  
   if (info.frameUrl ) {
	myVar = info.frameUrl ;
  }
  
   if (info.linkUrl) {

	myVar = info.linkUrl;
  }

  window.open("http://www.facebook.com/sharer.php?u=" + myVar,"mywindow","menubar=1,resizable=1,width=550,height=300");
}

	// Create one test item for each context type.
var contexts = ["page","link"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  //var title = "Test '" + context + "' menu item";
  var title = "Send " + context + " to FaceBook QuickShare";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "onclick": genericOnClick});

}
