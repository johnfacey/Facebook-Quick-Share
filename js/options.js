
var myVar = "";
var mySharebutton = "";
var index = "";


       window.fbAsyncInit = function() { 

       FB.init({appId: "YOUR APP ID FROM STEP 3", status: true, cookie: true, 

             xfbml: true}); 

        }; 

		function maximizeWindow(thisWindow) {
  thisWindow.moveTo(0, 0);
  if (document.all) {
    thisWindow.resizeTo(screen.availWidth,screen.availHeight);
  } else if (document.layers||document.getElementById) {
    if (thisWindow.outerHeight < screen.availHeight || thisWindow.outerWidth < screen.availWidth) {
      thisWindow.outerHeight = screen.availHeight;
      thisWindow.outerWidth = screen.availWidth;
    }
  }
}
		


      function streamPublish(){       

var attachment = {'media':[{'type':'image','src':'http://bit.ly/AJTnf','href':'http://bit.ly/hifZk'}]};
FB.streamPublish('', attachment);
           } 

showFacebookShare = function(url) {
var width = screen.width;
var myWin = window.open(myVar,"sharer","toolbar=1, status=1, width=800, height=436 scrollbars=yes resizeable=yes location=1");
//maximizeWindow(myWin);
//myWin.resizeTo(800,300);
}

function clickHandler(e) {
  showFacebookShare(myVar);
}

function clickHandler2(e) {
 chrome.tabs.create({url: 'http://johnfacey.wordpress.com/projects/facebook-quick-share/'}, null)
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('fbQS').addEventListener('click', clickHandler);
   document.getElementById('fbContact').addEventListener('click', clickHandler2);
  //main();
});



  onload = function() {
	
	
    // Initialize the option controls.
	chrome.tabs.getSelected(null ,function (tab) {

		myVar = 'https://www.facebook.com/sharer.php?u=' + tab.url + "&t=" + tab.title;
		//myVar = 'http://www.facebook.com/dialog/feed?app_id=123050457758183&link='+tab.url+'&picture=http://fbrell.com/f8.jpg&name=' + tab.title+ '&caption=Posted By Facebook Quick Share&description=' + tab.url + '&message=Facebook%20Dialogs%20are%20so%20easy!&redirect_uri=javascript:window.close()';
		document.getElementById('divShare').innerHTML = mySharebutton;
		index = tab.index;
		ifrm = document.createElement("IFRAME"); 
	   ifrm.setAttribute("src", "https://www.facebook.com/plugins/like.php?href=" + tab.url); 
	   ifrm.setAttribute("frameborder", 0); 
	   ifrm.style.width = 200+"px"; 
	   ifrm.style.height = 40+"px"; 
	   document.body.appendChild(ifrm);
		
	})
//onClick="javascript:chrome.tabs.create({url: myVar}, null)" onClick="javascript:showFacebookShare(myVar)
  };