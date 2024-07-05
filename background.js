chrome.runtime.onInstalled.addListener(() => {
    console.log('Sidebar ChatGPT Extension installed');
  });
  
  chrome.windows.onRemoved.addListener((windowId) => {
    chrome.storage.local.get(['sidebarWindowId'], (result) => {
      if (result.sidebarWindowId === windowId) {
        chrome.storage.local.remove('sidebarWindowId', () => {
          console.log('Sidebar window ID removed from storage after window closed');
        });
      }
    });
  });