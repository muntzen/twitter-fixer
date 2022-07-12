function removeStatus() {
  document.querySelectorAll('[role="status"]').forEach(function (el){
    el.remove();
  });
}
  
chrome.action.onClicked.addListener((tab) => {
  if(tab.url.includes("twitter.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: removeStatus
    });
  }
});