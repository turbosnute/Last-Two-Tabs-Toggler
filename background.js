let tabStack = [];

chrome.tabs.onActivated.addListener(activeInfo => {
  tabStack.push(activeInfo.tabId);
  if (tabStack.length > 2) {
    tabStack.shift();
  }
  //console.log("Logging tab");
});

chrome.commands.onCommand.addListener(command => {
  if (command === "toggle_tabs" && tabStack.length === 2) {
    chrome.tabs.update(tabStack[0], { active: true });
    //console.log("Toggling tabs");
  }
});