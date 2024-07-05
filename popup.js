document.getElementById('toggle-sidebar').addEventListener('click', () => {
    chrome.storage.local.get(['sidebarWindowId'], (result) => {
      if (result.sidebarWindowId) {
        // If the sidebar is open, close it
        chrome.windows.remove(result.sidebarWindowId, () => {
          chrome.storage.local.remove('sidebarWindowId', () => {
            console.log('Sidebar window closed and ID removed from storage');
          });
        });
      } else {
        // If the sidebar is not open, create it
        chrome.windows.create({
          url: "https://chat.openai.com",
          type: "popup",
          width: 400,
          height: screen.height,
          left: screen.width - 400,
          top: 0
        }, (newWindow) => {
          chrome.storage.local.set({ sidebarWindowId: newWindow.id }, () => {
            console.log('Sidebar window opened and ID stored');
          });
        });
      }
    });
  });