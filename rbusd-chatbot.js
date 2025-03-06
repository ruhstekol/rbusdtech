// RBUSD Tech Resources Chatbot
// This chatbot helps teachers quickly find resources on the RBUSD Tech Resources site

// Comprehensive database of RBUSD tech resources
const rbusdTechResources = [
  // Clever resources
  {
    keywords: ["clever", "login", "sso", "single sign on", "portal", "sign in", "access"],
    title: "Clever Login",
    description: "Access your Clever portal to reach all district applications",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/clever/login"
  },
  {
    keywords: ["clever", "apps", "add", "application", "integration", "software", "program"],
    title: "Clever Apps Integration",
    description: "Learn how to add and manage apps in Clever",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/clever/integration"
  },
  {
    keywords: ["clever", "troubleshoot", "problem", "issue", "error", "not working", "help"],
    title: "Clever Troubleshooting",
    description: "Solutions for common Clever issues",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/clever/troubleshooting"
  },
  
  // Google resources
  {
    keywords: ["google", "classroom", "class", "assignment", "course", "grade", "student"],
    title: "Google Classroom",
    description: "Setup and manage your Google Classroom environment",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/google/classroom"
  },
  {
    keywords: ["google", "meet", "video", "conference", "virtual", "call", "online"],
    title: "Google Meet",
    description: "Host and join virtual meetings with Google Meet",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/google/meet"
  },
  {
    keywords: ["google", "drive", "file", "storage", "document", "share", "upload"],
    title: "Google Drive",
    description: "Store, share, and collaborate on files with Google Drive",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/google/drive"
  },
  {
    keywords: ["gmail", "email", "message", "inbox", "send", "receive", "communicate"],
    title: "Gmail",
    description: "Access and use your district Gmail account",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/google/gmail"
  },
  {
    keywords: ["google", "calendar", "schedule", "event", "appointment", "meeting", "plan"],
    title: "Google Calendar",
    description: "Scheduling and managing events with Google Calendar",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/google/calendar"
  },
  {
    keywords: ["google", "form", "survey", "quiz", "assessment", "feedback", "collect"],
    title: "Google Forms",
    description: "Creating and managing forms, surveys, and assessments",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/google/forms"
  },
  {
    keywords: ["google", "doc", "document", "word", "write", "edit", "collaborate"],
    title: "Google Docs",
    description: "Creating and editing documents with Google Docs",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/google/docs"
  },
  {
    keywords: ["google", "sheet", "spreadsheet", "excel", "calculate", "data", "formula"],
    title: "Google Sheets",
    description: "Working with spreadsheets in Google Sheets",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/google/sheets"
  },
  {
    keywords: ["google", "slide", "presentation", "powerpoint", "present", "deck"],
    title: "Google Slides",
    description: "Creating presentations with Google Slides",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/google/slides"
  },
  
  // iPad resources
  {
    keywords: ["ipad", "setup", "configuration", "apple", "tablet", "device", "install"],
    title: "iPad Setup",
    description: "Setting up and configuring iPads for classroom use",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/ipad/setup"
  },
  {
    keywords: ["ipad", "apps", "application", "software", "install", "download", "program"],
    title: "iPad Apps",
    description: "Installing and managing approved apps on iPads",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/ipad/apps"
  },
  {
    keywords: ["ipad", "management", "mdm", "supervise", "control", "restrict", "settings"],
    title: "iPad Management",
    description: "Managing classroom iPads and settings",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/ipad/management"
  },
  {
    keywords: ["ipad", "troubleshoot", "problem", "issue", "error", "not working", "fix"],
    title: "iPad Troubleshooting",
    description: "Solutions for common iPad issues",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/ipad/troubleshooting"
  },
  
  // Promethean resources
  {
    keywords: ["promethean", "activation", "setup", "install", "initialize", "start"],
    title: "Promethean Activation",
    description: "Activating and setting up your Promethean panel",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/promethean/activation"
  },
  {
    keywords: ["promethean", "board", "panel", "smart board", "display", "screen", "use", "interactive"],
    title: "Promethean Panel Use",
    description: "How to operate and use Promethean panels in your classroom",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/promethean/panel-use"
  },
  {
    keywords: ["promethean", "software", "activinspire", "application", "install", "program"],
    title: "Promethean Software",
    description: "Installing and using software for Promethean panels",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/promethean/software"
  },
  {
    keywords: ["promethean", "troubleshoot", "problem", "issue", "error", "not working", "fix"],
    title: "Promethean Troubleshooting",
    description: "Solutions for common Promethean panel issues",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/promethean/troubleshooting"
  },
  
  // Student Information resources
  {
    keywords: ["powerschool", "student", "information", "system", "sis", "data", "access"],
    title: "PowerSchool Access",
    description: "Accessing and navigating the PowerSchool student information system",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/student-information/powerschool"
  },
  {
    keywords: ["attendance", "present", "absent", "record", "powerschool", "roll", "student"],
    title: "Taking Attendance",
    description: "How to record and manage student attendance",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/student-information/attendance"
  },
  {
    keywords: ["grade", "grading", "mark", "assessment", "powerschool", "report", "score"],
    title: "Grades",
    description: "Managing and entering grades in PowerSchool",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/student-information/grades"
  },
  {
    keywords: ["report", "card", "transcript", "student", "information", "record", "document"],
    title: "Reports",
    description: "Generating and accessing student reports",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/student-information/reports"
  },
  
  // Tech Support resources
  {
    keywords: ["help", "support", "ticket", "helpdesk", "request", "issue", "problem", "assistance"],
    title: "Helpdesk",
    description: "How to submit and track technical support requests",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/tech-support/helpdesk"
  },
  {
    keywords: ["password", "reset", "account", "login", "credentials", "forgot", "change"],
    title: "Password Reset",
    description: "Procedures for resetting passwords for various systems",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/tech-support/password-reset"
  },
  {
    keywords: ["equipment", "request", "hardware", "device", "computer", "order", "new"],
    title: "Equipment Requests",
    description: "How to request new or replacement equipment",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/tech-support/equipment-requests"
  },
  {
    keywords: ["training", "professional", "development", "learn", "tutorial", "workshop", "pd"],
    title: "Training",
    description: "Technology training resources and opportunities",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/tech-support/training"
  },
  
  // Webex resources
  {
    keywords: ["webex", "install", "setup", "download", "configure", "access", "get"],
    title: "Webex Installation",
    description: "Installing and configuring Webex on your devices",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/webex/installation"
  },
  {
    keywords: ["webex", "meeting", "video", "conference", "virtual", "remote", "host", "join"],
    title: "Webex Meetings",
    description: "Setting up and hosting Webex meetings",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/webex/meetings"
  },
  {
    keywords: ["webex", "feature", "tool", "function", "capability", "option", "setting"],
    title: "Webex Features",
    description: "Overview of Webex features for teachers",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/webex/features"
  },
  {
    keywords: ["webex", "troubleshoot", "problem", "issue", "error", "not working", "fix"],
    title: "Webex Troubleshooting",
    description: "Solutions for common Webex issues",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/webex/troubleshooting"
  },
  
  // For Students resources
  {
    keywords: ["student", "account", "access", "login", "credentials", "password", "username"],
    title: "Student Account Access",
    description: "Information on student account access and management",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/for-students/account-access"
  },
  {
    keywords: ["student", "resources", "learning", "tools", "platforms", "materials", "access"],
    title: "Student Learning Resources",
    description: "Digital learning resources available to students",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/for-students/learning-resources"
  },
  {
    keywords: ["digital", "citizenship", "safety", "online", "behavior", "etiquette", "responsibility"],
    title: "Digital Citizenship",
    description: "Resources for teaching digital citizenship",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/for-students/digital-citizenship"
  },
  
  // For Parents resources
  {
    keywords: ["parent", "portal", "access", "login", "account", "connect", "view"],
    title: "Parent Portal Access",
    description: "How parents can access digital resources and information",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/for-parents/portal-access"
  },
  {
    keywords: ["parent", "resources", "guide", "help", "support", "information", "material"],
    title: "Parent Resources",
    description: "Technology resources for parents",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/for-parents/resources"
  },
  {
    keywords: ["parent", "communication", "message", "contact", "platform", "connect", "reach"],
    title: "Parent Communication",
    description: "Tools and platforms for communicating with parents",
    url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/for-parents/communication"
  }
];

// Common question patterns with redirects to appropriate resources
const commonQuestions = [
  {
    patterns: ["password reset", "forgot password", "change password", "can't login", "account locked"],
    redirect: "Password Reset"
  },
  {
    patterns: ["google classroom", "create class", "add student", "assignment", "classroom setup"],
    redirect: "Google Classroom"
  },
  {
    patterns: ["promethean not working", "board issues", "panel problem", "interactive whiteboard", "touch not working"],
    redirect: "Promethean Troubleshooting"
  },
  {
    patterns: ["take attendance", "mark absent", "record attendance", "student present", "attendance record"],
    redirect: "Taking Attendance"
  },
  {
    patterns: ["submit ticket", "get help", "tech support", "IT help", "computer problem", "need assistance"],
    redirect: "Helpdesk"
  },
  {
    patterns: ["webex meeting", "host webex", "join conference", "video call", "virtual meeting"],
    redirect: "Webex Meetings"
  },
  {
    patterns: ["ipad apps", "install app", "update ipad", "apple classroom", "manage ipad"],
    redirect: "iPad Apps"
  }
];

// Function to find relevant resources based on user query
function findResources(query) {
  // Normalize the query (lowercase, remove extra spaces)
  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery.split(/\s+/);
  
  // Check for common question patterns first
  for (const question of commonQuestions) {
    for (const pattern of question.patterns) {
      if (normalizedQuery.includes(pattern.toLowerCase())) {
        // Return the specific redirect resource
        const redirectResource = rbusdTechResources.find(resource => 
          resource.title.toLowerCase() === question.redirect.toLowerCase());
        
        if (redirectResource) {
          return [{ ...redirectResource, score: 100 }]; // Give it a high score
        }
      }
    }
  }
  
  // Calculate resource relevance scores
  const scoredResources = rbusdTechResources.map(resource => {
    let score = 0;
    
    // Check for keyword matches
    queryWords.forEach(word => {
      if (word.length < 3) return; // Skip very short words
      
      resource.keywords.forEach(keyword => {
        // Exact keyword match
        if (keyword === word) {
          score += 10;
        }
        // Keyword contains the query word
        else if (keyword.includes(word)) {
          score += 5;
        }
        // Query word contains the keyword
        else if (word.includes(keyword) && keyword.length > 3) {
          score += 3;
        }
      });
      
      // Check if query word appears in title or description
      if (resource.title.toLowerCase().includes(word)) {
        score += 3;
      }
      if (resource.description.toLowerCase().includes(word)) {
        score += 2;
      }
    });
    
    // Check for phrase matches (higher score for multi-word matches)
    resource.keywords.forEach(keyword => {
      if (keyword.includes(' ') && normalizedQuery.includes(keyword)) {
        score += 15; // Bonus for multi-word matches
      }
    });
    
    // Check if the full query matches parts of the resource
    if (resource.title.toLowerCase().includes(normalizedQuery)) {
      score += 25; // Strong bonus for title match
    }
    if (resource.description.toLowerCase().includes(normalizedQuery)) {
      score += 15; // Good bonus for description match
    }
    
    return {
      ...resource,
      score
    };
  });
  
  // Filter and sort results
  const relevantResources = scoredResources
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);
  
  return relevantResources;
}

// Function to generate chatbot response
function generateResponse(query) {
  // Special case for empty or very short queries
  if (!query || query.trim().length < 3) {
    return {
      message: "How can I help with RBUSD technology resources today? You can ask me about Google Classroom, iPads, Promethean boards, or any other tech resources.",
      resources: [],
      showCategories: true
    };
  }
  
  // Special case for "help" or general questions
  if (["help", "menu", "options", "categories"].includes(query.toLowerCase().trim())) {
    return {
      message: "Here are the main technology resource categories available at RBUSD:",
      resources: [
        { title: "Clever", description: "Single sign-on portal access and apps", url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/clever" },
        { title: "Google", description: "Google Workspace apps including Classroom, Meet, etc.", url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/google" },
        { title: "iPad", description: "iPad setup, apps, and management", url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/ipad" },
        { title: "Promethean", description: "Interactive panel setup and use", url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/promethean" },
        { title: "Student Information", description: "PowerSchool, attendance, and grades", url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/student-information" },
        { title: "Tech Support", description: "Helpdesk, password resets, and equipment requests", url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/tech-support" },
        { title: "Webex", description: "Video conferencing setup and use", url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/webex" },
        { title: "For Students", description: "Student-focused resources", url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/for-students" },
        { title: "For Parents", description: "Parent-focused resources", url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/for-parents" }
      ],
      showCategories: true
    };
  }
  
  const resources = findResources(query);
  
  if (resources.length === 0) {
    // No direct matches, show main categories
    return {
      message: "I couldn't find specific resources matching your query. Here are the main technology resource categories available:",
      resources: [
        { title: "Clever", description: "Single sign-on portal access and apps", url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/clever" },
        { title: "Google", description: "Google Workspace apps including Classroom, Meet, etc.", url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/google" },
        { title: "iPad", description: "iPad setup, apps, and management", url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/ipad" },
        { title: "Promethean", description: "Interactive panel setup and use", url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/promethean" },
        { title: "Student Information", description: "PowerSchool, attendance, and grades", url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/student-information" },
        { title: "Tech Support", description: "Helpdesk, password resets, and equipment requests", url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/tech-support" },
        { title: "Webex", description: "Video conferencing setup and use", url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/webex" },
        { title: "For Students", description: "Student-focused resources", url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/for-students" },
        { title: "For Parents", description: "Parent-focused resources", url: "https://sites.google.com/rbusd.org/copyofrbusdtechresources/for-parents" }
      ],
      showCategories: true
    };
  }
  
  // Take top 3 results at most
  const topResources = resources.slice(0, 3);
  
  return {
    message: `I found ${topResources.length} resource${topResources.length > 1 ? 's' : ''} that might help you:`,
    resources: topResources,
    showCategories: false
  };
}

// HTML interface for the chatbot
document.addEventListener('DOMContentLoaded', function() {
  // Create the chatbot UI
  const container = document.createElement('div');
  container.id = 'rbusd-chatbot-container';
  container.innerHTML = `
    <div class="chatbot-header">
      <h3>RBUSD Tech Resource Assistant</h3>
    </div>
    <div id="chat-area" class="chat-area"></div>
    <div class="input-area">
      <input type="text" id="user-input" placeholder="Ask about tech resources..." aria-label="Ask a question">
      <button id="send-button" aria-label="Send">Send</button>
    </div>
  `;
  document.body.appendChild(container);
  
  // Add styles
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    #rbusd-chatbot-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 350px;
      height: 500px;
      border: 1px solid #ccc;
      border-radius: 10px;
      background-color: white;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
      z-index: 1000;
      overflow: hidden;
    }
    
    .chatbot-header {
      background-color: #0046AD; /* RBUSD blue */
      color: white;
      padding: 12px;
      border-radius: 10px 10px 0 0;
      text-align: center;
    }
    
    .chatbot-header h3 {
      margin: 0;
      font-size: 16px;
    }
    
    .chat-area {
      flex: 1;
      overflow-y: auto;
      padding: 15px;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    
    .bot-message, .user-message {
      padding: 10px 12px;
      border-radius: 15px;
      max-width: 80%;
      word-wrap: break-word;
      overflow-wrap: break-word;
      word-break: break-word;
      hyphens: auto;
    }
    
    .bot-message {
      background-color: #f0f0f0;
      align-self: flex-start;
      border-bottom-left-radius: 5px;
    }
    
    .user-message {
      background-color: #0046AD; /* RBUSD blue */
      color: white;
      align-self: flex-end;
      border-bottom-right-radius: 5px;
    }
    
    .resource-list {
      list-style-type: none;
      padding: 0;
      margin: 10px 0 0 0;
      width: 100%;
    }
    
    .resource-list li {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 10px;
      margin-bottom: 10px;
      background-color: white;
      width: 100%;
      box-sizing: border-box;
    }
    
    .resource-list h3 {
      margin: 0 0 5px 0;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .resource-list p {
      margin: 0;
      font-size: 12px;
      color: #666;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .resource-list a {
      color: #0046AD; /* RBUSD blue */
      text-decoration: none;
    }
    
    .resource-list a:hover {
      text-decoration: underline;
    }
    
    .input-area {
      display: flex;
      padding: 10px;
      border-top: 1px solid #eee;
    }
    
    #user-input {
      flex: 1;
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 20px;
      outline: none;
    }
    
    #send-button {
      background-color: #0046AD; /* RBUSD blue */
      color: white;
      border: none;
      border-radius: 20px;
      padding: 8px 15px;
      margin-left: 8px;
      cursor: pointer;
    }
    
    #send-button:hover {
      background-color: #003A8C;
    }
    
    .category-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-top: 10px;
      width: 100%;
    }
    
    .category-item {
      background-color: #f8f8f8;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 10px;
      text-align: center;
      overflow: hidden;
    }
    
    .category-item a {
      display: block;
      color: #0046AD;
      text-decoration: none;
      font-weight: bold;
      font-size: 13px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .category-item p {
      margin: 5px 0 0 0;
      font-size: 11px;
      color: #666;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `;
  document.head.appendChild(styleEl);
  
  // Add a font stylesheet for better typography
  const fontStyleEl = document.createElement('link');
  fontStyleEl.rel = 'stylesheet';
  fontStyleEl.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap';
  document.head.appendChild(fontStyleEl);
  
  // Update font style for all elements
  const fontUpdateEl = document.createElement('style');
  fontUpdateEl.textContent = `
    #rbusd-chatbot-container * {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    }
  `;
  document.head.appendChild(fontUpdateEl);
  
  // Add initial welcome message
  const chatArea = document.getElementById('chat-area');
  const welcomeMessage = document.createElement('div');
  welcomeMessage.className = 'bot-message';
  welcomeMessage.innerHTML = `
    <p>👋 Welcome to the RBUSD Tech Resources Assistant! I'm here to help you find the technology resources you need.</p>
    <p>You can ask me questions like:</p>
    <ul style="margin: 5px 0; padding-left: 20px;">
      <li>"How do I reset my password?"</li>
      <li>"Setting up Google Classroom"</li>
      <li>"Promethean board troubleshooting"</li>
    </ul>
    <p>Or type "help" to see all resource categories.</p>
  `;
  chatArea.appendChild(welcomeMessage);
  
  // Handle user input
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');
  
  function handleSend() {
    const query = userInput.value.trim();
    if (query.length === 0) return;
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = query;
    chatArea.appendChild(userMessage);
    
    // Generate and display response
    const response = generateResponse(query);
    const botMessage = document.createElement('div');
    botMessage.className = 'bot-message';
    
    let botContent = `<p>${response.message}</p>`;
    
    if (response.showCategories && response.resources.length > 0) {
      // Display resource categories in a grid
      botContent += '<div class="category-grid">';
      response.resources.forEach(resource => {
        botContent += `
          <div class="category-item">
            <a href="${resource.url}" target="_blank">${resource.title}</a>
            <p>${resource.description}</p>
          </div>
        `;
      });
      botContent += '</div>';
    } else if (response.resources.length > 0) {
      // Display specific resources as a list
      botContent += '<ul class="resource-list">';
      response.resources.forEach(resource => {
        botContent += `
          <li>
            <h3><a href="${resource.url}" target="_blank">${resource.title}</a></h3>
            <p>${resource.description}</p>
          </li>
        `;
      });
      botContent += '</ul>';
    }
    
    botMessage.innerHTML = botContent;
    chatArea.appendChild(botMessage);
    
    // Clear input and scroll to bottom
    userInput.value = '';
    chatArea.scrollTop = chatArea.scrollHeight;
  }
  
  sendButton.addEventListener('click', handleSend);
  userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      handleSend();
    }
  });
})