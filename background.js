function removeStatus() {
  //document.body.style.backgroundColor = 'red';
  document.querySelectorAll('[role="status"]').forEach(function (el){
    el.remove();
  });
}
  
chrome.action.onClicked.addListener((tab) => {
  if(!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: removeStatus
    });
  }
});