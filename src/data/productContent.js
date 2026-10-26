export const guideIntro = {
  title: 'UniHelp product guide',
  subtitle:
    'A practical guide to UniHelp’s study tools, AI assistance, student community, campus feed, marketplace and account controls.',
  badges: ['Study resources', 'AI study help', 'CBT practice', 'Planning tools', 'Chats & groups', 'Campus feed', 'Marketplace', 'Premium'],
}

export const featureGroups = [
  {
    title: 'Account & Profile',
    summary: 'Create a student account, verify your email, complete your profile and manage your account settings.',
    features: [
      'Sign up with your name, username, email and password.',
      'Add your university, department, faculty, level, student type, interests and profile photo.',
      'Verify your email before using the main app.',
      'Reset your password from the login screen when needed.',
      'Update your profile, sign out or delete your account from your profile settings.',
    ],
    data: 'Your profile can include your name, email, username, school details, department, level, interests, bio and profile photo.',
    access: 'Most account features require you to be signed in.',
  },
  {
    title: 'Study Tools',
    summary: 'Find learning resources, practice with CBT and flashcards, track grades and plan your study time.',
    features: [
      'Browse, search and filter lecture notes, past questions and tutorials.',
      'Upload lecture notes as PDF documents.',
      'Find past questions by school, course, year, exam type, semester, department and level.',
      'Request lecture notes or past questions from the student community.',
      'Use Formula Hub to browse subjects and formulas, review flashcards and save bookmarks.',
      'Track GPA and CGPA records for your semesters.',
      'Practice with CBT mock exams and quizzes.',
      'Organize assignments and deadlines with Tasks, plan study sessions with Smart Schedule, and focus with the Pomodoro timer.',
      'Save resources for quick access and download supported notes and past questions for offline study with Premium.',
    ],
    data: 'Study tools may store resource requests and uploads, course details, GPA/CGPA records, bookmarks, tasks, schedules and study progress.',
    access: 'Signed-in students can use the main study features. Offline downloads require Premium.',
  },
  {
    title: 'AI Study Help',
    summary: 'Get structured AI help for coursework, revision and planning.',
    features: [
      'Choose Solve, Explain, Summarize, Practice, Study Plan or Research.',
      'Provide a question, topic, notes or study goals to guide the response.',
      'Connect a PDF and ask questions, request summaries, generate quiz questions or clarify topics from its text.',
      'View remaining AI usage where the app shows a usage limit.',
      'Premium provides a higher AI response limit.',
    ],
    data: 'AI study help processes the questions, notes, extracted PDF text and study context you submit to generate a response. Avoid sharing sensitive personal information, and verify important academic answers.',
    access: 'AI study help is available to signed-in users.',
  },
  {
    title: 'Challenge Arena',
    summary: 'Build study momentum with challenges, scores, streaks, achievements, leaderboards and rewards.',
    features: [
      'Answer daily and category-based challenge questions.',
      'Review your score, accuracy, correct answers, missed answers and skipped questions.',
      'Track XP, points, streaks and badges.',
      'Compare progress on leaderboards.',
      'View challenge history and streak calendars.',
      'Save some progress while offline and sync it when your connection returns.',
    ],
    data: 'Challenge Arena may store scores, answers, XP, points, streaks, badges and reward activity.',
    access: 'Challenge features require a signed-in account.',
  },
  {
    title: 'Community & Messages',
    summary: 'Connect with students in direct chats and groups. On the website, Chats and Groups are available together in the Connect area.',
    features: [
      'Join and participate in student groups.',
      'Create groups and manage group settings where you have permission.',
      'On the website, switch between Chats and Groups with the tabs at the top of the Connect screen.',
      'Find students, send friend requests and review incoming message requests.',
      'Open direct conversations, see typing indicators and manage message requests.',
      'Reply to messages, use quick reactions, and edit or delete your own messages.',
      'Send stickers and record and send voice messages.',
      'View photo and video previews in chat, then open media in the in-app viewer. Supported documents can be previewed without leaving the website.',
      'Block or unblock students and report problems when needed.',
      'Receive app notifications for important community updates and new activity.',
    ],
    data: 'Community features may store profiles, groups, group posts, direct messages, attachment files, message requests, replies, reactions, voice notes, stickers, typing activity, friend connections, blocks, reports and notifications.',
    access: 'Community and messaging features, including voice messages, require a signed-in account. Microphone access is only needed when you choose to record a voice message.',
  },
  {
    title: 'Marketplace & Hostels',
    summary: 'Explore student product listings, hostel accommodation and learning tutorials.',
    features: [
      'Create student product listings with photos, category, price, location, condition, availability, phone and description.',
      'Create hostel listings with photos, rent, location, room type, distance, amenities, availability, phone and description.',
      'Browse and save tutorials, and publish video tutorials with an optional thumbnail and PDF.',
      'Review marketplace listings with a rating and comment.',
      'Promote eligible marketplace listings for 7, 14 or 21 days.',
      'Free accounts can upload up to 5 products and 5 hostels.',
      'Premium accounts can upload up to 10 products and 10 hostels.',
    ],
    data: 'Marketplace features may store product, hostel and tutorial details, photos, videos, documents, phone numbers, reviews, ratings and payment records.',
    access: 'Buying, selling, uploading and reviewing require a signed-in account.',
  },
  {
    title: 'Stories, News & Announcements',
    summary: 'Share stories, follow campus updates and take part in the student feed.',
    features: [
      'Read stories from the story feed.',
      'Create stories and chapters from your account.',
      'Add story covers, summaries, genres and content.',
      'Like, bookmark and comment on stories where available.',
      'Browse campus feed posts, including text, photo and background posts.',
      'Choose a post audience where available, and like, comment on, share or report posts.',
      'View announcements and education news.',
    ],
    data: 'Feed and story features may store post text and images, audience settings, comments, likes, reports, saved stories, published stories, covers and bookmarks.',
    access: 'Reading and browsing may be available in app areas; creating and managing your own content requires sign-in.',
  },
  {
    title: 'Support',
    summary: 'Get help, send contact messages, report problems and share suggestions from the app.',
    features: [
      'Open the Help Center for support options.',
      'Send a contact message to UniHelp support.',
      'Report a problem with details and attachments where supported.',
      'Send suggestions for product improvements.',
      'Browse or submit requests for lecture notes and past questions.',
      'Check FAQ, Privacy and Terms pages from the support area.',
    ],
    data: 'Support flows may store your contact details, message, report information, suggestion details and attachments.',
    access: 'Some support pages are available broadly; account-specific support works best when you are signed in.',
  },
]

export const privacyCategories = [
  {
    title: 'Account Information',
    items: [
      'Name, username and email address',
      'University, department, faculty, level and student type',
      'Bio, interests, profile photo and cover photo',
      'Other profile details you choose to provide, such as location, gender or date of birth',
      'Premium status, billing period and access expiry',
    ],
  },
  {
    title: 'Content You Create',
    items: [
      'Lecture notes, past-question details and uploaded files',
      'Requests for study resources, marketplace and hostel listings, tutorial media, reviews and comments',
      'Stories, chapters, story comments, likes and bookmarks',
      'Group activity, direct messages, replies, reactions, voice notes, message requests, blocks, reports, suggestions and support messages',
      'Questions, notes and other materials you provide to AI study tools',
    ],
  },
  {
    title: 'Learning Activity',
    items: [
      'GPA and CGPA records',
      'Challenge attempts, XP, points, streaks and badges',
      'Formula bookmarks and saved study materials',
      'Offline downloads and sync progress',
    ],
  },
  {
    title: 'Device & App Activity',
    items: [
      'Notification tokens used to deliver app notifications',
      'Local app storage used for profile cache, offline downloads and study progress',
      'Media details for images, documents, audio, video and other files you upload',
      'Conversation activity needed to deliver messages and typing indicators',
    ],
  },
]

export const serviceProviders = [
  { name: 'Secure account services', role: 'Help UniHelp create accounts, verify users and protect sign-in sessions.' },
  { name: 'Media storage services', role: 'Store photos, documents, audio, video, stickers and other uploaded media.' },
  { name: 'Payment providers', role: 'Process Premium subscriptions and marketplace promotion payments.' },
  { name: 'Notification services', role: 'Deliver reminders, announcements and account-related notifications.' },
  { name: 'Realtime messaging services', role: 'Support conversation updates such as typing activity and message delivery.' },
  { name: 'AI study services', role: 'Generate study support responses when you use AI features.' },
]

export const permissionInventory = [
  {
    name: 'Notifications',
    platform: 'Mobile notification permission',
    purpose: 'Used to send reminders, announcements, payment updates and other app notifications.',
  },
  {
    name: 'Microphone',
    platform: 'Mobile microphone permission',
    purpose: 'Used when you choose to record and send voice messages.',
  },
  {
    name: 'Photos and media',
    platform: 'Mobile media picker permission',
    purpose: 'Used when you choose profile photos, group images, listing photos, story covers, stickers or other images.',
  },
  {
    name: 'Files and documents',
    platform: 'Mobile file picker access',
    purpose: 'Used when you choose PDFs or documents for notes, past questions, AI attachments or other supported uploads.',
  },
  {
    name: 'Local storage',
    platform: 'On-device app storage',
    purpose: 'Used for Premium offline downloads, temporary files, local progress and cached profile details.',
  },
]

export const premiumDetails = {
  plan: 'Student Premium',
  prices: ['Monthly: NGN 1,000', 'Yearly: NGN 10,000'],
  providers: ['Card or supported online checkout', 'Google Play subscriptions on Android'],
  benefits: [
    'Offline Learning Library',
    'Past-question and lecture-note downloads',
    'Verified student badge',
    'Higher AI response limit',
    'Reduced ads experience',
    'Up to 10 hostel uploads and 10 product uploads',
    'Early access to new tools',
  ],
  limits: ['Standard accounts: 5 hostel uploads and 5 product uploads', 'Premium accounts: 10 hostel uploads and 10 product uploads'],
}

export const sponsorshipDetails = [
  { label: '7 days', price: 'NGN 500' },
  { label: '14 days', price: 'NGN 1,000' },
  { label: '21 days', price: 'NGN 1,500' },
]

export const uploadRules = [
  'Past-question and lecture-note uploads can be up to 50 MB.',
  'Marketplace and hostel images can be up to 10 MB per image.',
  'Lecture notes should be uploaded as PDF files.',
  'Past questions can include supported image, PDF, DOC and DOCX files.',
  'Web page files such as HTML are not accepted for upload.',
  'If an upload fails, try a smaller file or a supported file type.',
]

export const accountSecurity = [
  'UniHelp uses secure sign-in to help protect your account.',
  'Password-based accounts must confirm the password before account deletion.',
  'Some accounts may need a fresh sign-in before deletion.',
  'Account deletion removes your profile, activity history and user-owned uploaded records from UniHelp.',
  'Signing out clears the locally cached profile for that account on the device.',
]
