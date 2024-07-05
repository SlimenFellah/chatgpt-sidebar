console.log('Content script loaded');

const sidebarId = 'chatgpt-sidebar';

// Check if sidebar already exists
if (!document.getElementById(sidebarId)) {
  console.log('Injecting sidebar');
  
  // Create the sidebar container
  const sidebar = document.createElement('div');
  sidebar.id = sidebarId;
  sidebar.style.position = 'fixed';
  sidebar.style.top = '0';
  sidebar.style.right = '0';
  sidebar.style.width = '400px';
  sidebar.style.height = '100%';
  sidebar.style.backgroundColor = 'white';
  sidebar.style.zIndex = '9999';
  sidebar.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
  
  // Create the iframe for ChatGPT
  const iframe = document.createElement('iframe');
  iframe.src = 'https://chat.openai.com';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  
  // Append iframe to the sidebar
  sidebar.appendChild(iframe);
  
  // Append sidebar to the body
  document.body.appendChild(sidebar);
} else {
  console.log('Sidebar already exists');
}
