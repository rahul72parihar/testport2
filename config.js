/**
 * ==============================================================================
 * 🌟 SINGLE CONFIGURATION FILE (EDIT EVERYTHING HERE!)
 * ==============================================================================
 * Welcome! This is the ONLY file you ever need to edit.
 * You can open and edit this file in Notepad (Windows) or TextEdit (Mac).
 * 
 * 💡 TIPS:
 * 1. Keep your text inside quotes: "Like this".
 * 2. Keep commas at the ends of lines.
 * 3. To add more projects, copy-paste a project block into the 'projects' list below!
 * ==============================================================================
 */

const siteConfig = {
  // ============================================================================
  // 1. PERSONAL & BRAND PROFILE
  // ============================================================================
  personal: {
    name: "Rahul Parihar",
    firstName: "Rahul",
    lastName: "Parihar",
    brandName: "manwhoedit",
    role: "Video Editor & Motion Graphics Designer",
    tagline: "Turning raw footage into visual stories — with style, precision, and a touch of cinematic magic.",
    bioQuote: "I don't just cut footage; I construct emotions. Every frame must earn its place on the timeline, serving the narrative above all else.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    location: "Worldwide (Remote)",
    yearsOfExperience: "5+",
    availabilityStatus: "Available for Hire",
  },

  // ============================================================================
  // 2. THEME COLORS (PASTEL LIQUID GLASS)
  // ============================================================================
  colors: {
    thistle: "#cdb4db",
    pastelPetal: "#ffc8dd",
    babyPink: "#ffafcc",
    icyBlue: "#bde0fe",
    skyBlue: "#a2d2ff",
  },

  // ============================================================================
  // 3. NAVIGATION MENU
  // ============================================================================
  navigation: [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ],

  // ============================================================================
  // 4. HERO SECTION
  // ============================================================================
  hero: {
    badgeText: "Available for Hire",
    titleLine1: "CINEMATIC",
    titleLine2: "EDITOR",
    subtitle: "Turning raw footage into visual stories — with style, precision, and a touch of cinematic magic.",
    primaryButtonText: "View Work",
    primaryButtonHref: "#projects",
    secondaryButtonText: "Contact Me",
    secondaryButtonHref: "#contact",
  },

  // ============================================================================
  // 5. SERVICES ("WHAT I CAN DO FOR YOU")
  // ============================================================================
  services: [
    {
      title: "YouTube Editing",
      description: "Engaging edits structured for high retention, hooks, and natural narrative flow.",
      icon: "🎬",
    },
    {
      title: "Course & Educational",
      description: "Clear, structured educational videos polished with informative lower-thirds.",
      icon: "📚",
    },
    {
      title: "Motion Graphics",
      description: "Dynamic 2D animations, title cards, and kinetic typography that boost production value.",
      icon: "✨",
    },
    {
      title: "Color Grading",
      description: "Film-like color palettes, skin tone correction, and evocative mood styling.",
      icon: "🎨",
    },
    {
      title: "Shorts & Reels",
      description: "Fast-paced vertical videos optimized for Instagram, TikTok, and YouTube Shorts.",
      icon: "📱",
    },
    {
      title: "Sound Design & Mix",
      description: "Pristine vocal enhancement, background soundscapes, and impactful whooshes.",
      icon: "🎵",
    },
  ],

  // ============================================================================
  // 6. ABOUT SECTION
  // ============================================================================
  about: {
    badge: "About The Creator",
    headingPart1: "The Creator Behind the",
    headingHighlight: "Magic",
    experienceNumber: "5+",
    experienceLabel: "Years Active",
    experienceDescription: "Years of specialized commercial editing and motion graphics.",
    reachBadge: "WORLDWIDE",
    reachDescription: "Collaborating seamlessly across global time zones.",
    quote: "I don't just cut footage; I construct emotions. Every frame must earn its place on the timeline.",
  },

  // ============================================================================
  // 7. TECHNICAL SKILLS & WORKFLOW
  // ============================================================================
  skills: {
    technicalTools: [
      { name: "DaVinci Resolve", category: "Color & Post", desc: "Color grading, studio editing & Fairlight audio", icon: "🎞️" },
      { name: "Adobe Premiere Pro", category: "Editing", desc: "Multicam synchronization & pacing workflows", icon: "✂️" },
      { name: "After Effects", category: "VFX & Motion", desc: "Procedural motion graphics & visual compositing", icon: "✨" },
      { name: "Photoshop", category: "Design", desc: "High-CTR thumbnail styling & graphic assets", icon: "🎨" },
      { name: "Adobe Audition", category: "Audio", desc: "Noise reduction & master loudness balancing", icon: "🔊" },
    ],
    workflow: [
      { step: "01", title: "Project Analysis", desc: "Aligning on goals, tone, references, and delivery deadlines." },
      { step: "02", title: "Footage Review", desc: "Organizing selects, tagging moments, and creating the narrative spine." },
      { step: "03", title: "Rough Cut & Pacing", desc: "Assembly edit focused on rhythm, engagement hooks, and story flow." },
      { step: "04", title: "Sound & Polish", desc: "Adding SFX, music scoring, motion graphics, and color grading." },
      { step: "05", title: "Feedback & Revisions", desc: "Iterating based on time-stamped client feedback." },
      { step: "06", title: "Master Delivery", desc: "Exporting high-bitrate master files formatted for all platforms." },
    ],
  },

  // ============================================================================
  // 8. TRUSTED CLIENTS / BRANDS
  // ============================================================================
  clients: [
    { name: "Stack Learner" },
    { name: "GrowthLeo" },
    { name: "EduBridge" },
    { name: "EcoRevolution" },
    { name: "Impel IT" },
    { name: "Apex Media" },
  ],

  // ============================================================================
  // 9. CONTACT & SOCIALS
  // ============================================================================
  contact: {
    heading: "Get In Touch",
    subheading: "Have a project in mind or want to collaborate? Send a message and let's create something extraordinary.",
    email: "manwhoedit@gmail.com",
    whatsappNumber: "Details sent to client via email",
    whatsappFormatted: "Details sent to client via email",
    responseTime: "Within 24 Hours",
    location: "Worldwide / Remote",
  },

  socials: [
    { name: "YouTube", url: "https://youtube.com", icon: "▶️" },
    { name: "Instagram", url: "https://instagram.com", icon: "📷" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "💼" },
    { name: "Twitter / X", url: "https://twitter.com", icon: "✖️" },
  ],

  // ============================================================================
  // 10. CALL TO ACTION (CTA)
  // ============================================================================
  cta: {
    badge: "Open for New Projects",
    title: "Ready to create magic together?",
    description: "Let's turn your raw footage into captivating visual narratives that stand out.",
    buttonText: "Start Collaboration",
    buttonHref: "#contact",
  },

  // ============================================================================
  // 11. FOOTER
  // ============================================================================
  footer: {
    text: "Video Editor and Motion Graphics Designer crafting cinematic visual stories with precision.",
    credit: "Midnight Liquid Glass Portfolio",
  },

  // ============================================================================
  // 12. PROJECTS GALLERY (EASILY ADD NEW PROJECTS HERE!)
  // ============================================================================
  /**
   * 📌 HOW TO ADD A NEW PROJECT:
   * Copy the template block below, paste it inside the 'projects' list,
   * and replace the values inside quotes with your project details!
   * 
   * {
   *   id: "rVVeLdouViU",                         // YouTube video ID (or unique slug)
   *   title: "Project Title",                   // Name of video
   *   description: "Description of the edit.",  // What you did
   *   category: "Talking Head",                 // Category name (creates filter button automatically!)
   *   youtubeId: "rVVeLdouViU",                 // YouTube Video ID (used for player & thumbnail)
   *   client: "Client Name",                    // Client
   *   duration: "6:32",                         // Length
   *   software: ["DaVinci Resolve"],            // Software used
   * },
   */
  projects: [
    {
      id: "rVVeLdouViU",
      title: "Inside a FAANG Engineer's Resume – Breakdown",
      description: "High-retention talking head edit featuring custom motion graphics, sound design, and clean pacing.",
      category: "Talking Head",
      youtubeId: "rVVeLdouViU",
      client: "Stack Learner",
      duration: "6:32",
      software: ["DaVinci Resolve", "After Effects"],
    },
    {
      id: "JSZmQxg3fos",
      title: "Mastering DSA for Developers | Workshop Announcement",
      description: "High-energy workshop promo blending real-world software engineering scenarios with motion typography.",
      category: "Talking Head",
      youtubeId: "JSZmQxg3fos",
      client: "Stack Learner",
      duration: "10:12",
      software: ["DaVinci Resolve", "After Effects"],
    },
    {
      id: "ufRtWGd0cXo",
      title: "Calm Your Nervous System in 60 Seconds | Wellness Guide",
      description: "Cinematic color grading and peaceful audio mixing tailored for high-engagement wellness audiences.",
      category: "Explainer",
      youtubeId: "ufRtWGd0cXo",
      client: "GrowthLeo",
      duration: "7:18",
      software: ["DaVinci Resolve"],
    },
    {
      id: "7OuSRaIPOds",
      title: "The Real Reason You Can't Change | Mindset Transformation",
      description: "A deep dive into behavioral psychology and habit formation. Edited with smooth visual metaphors.",
      category: "Explainer",
      youtubeId: "7OuSRaIPOds",
      client: "GrowthLeo",
      duration: "8:13",
      software: ["DaVinci Resolve"],
    },
    {
      id: "esjJzKjx9Fo",
      title: "From Stuck to Strong: Complete Brain Reset",
      description: "Transformative lifestyle guide edited with retention hooks, sound design, and clean cinematic cuts.",
      category: "Talking Head",
      youtubeId: "esjJzKjx9Fo",
      client: "GrowthLeo",
      duration: "7:59",
      software: ["DaVinci Resolve"],
    },
    {
      id: "Qwwgg_qt5ew",
      title: "Simplifying Complex Logic with Clean Code Patterns",
      description: "Fast-paced short-form programming tip with kinetic text animations and synchronized sound design.",
      category: "Shorts",
      youtubeId: "Qwwgg_qt5ew",
      client: "Stack Learner",
      duration: "0:59",
      software: ["After Effects"],
    },
    {
      id: "TiZvFO99rpw",
      title: "HTTP Requests Explained Visually",
      description: "Visual explainer breaking down web networking with dynamic animations and crisp pacing.",
      category: "Shorts",
      youtubeId: "TiZvFO99rpw",
      client: "Tech Ed",
      duration: "1:00",
      software: ["After Effects"],
    },
    {
      id: "demo-promo-1",
      title: "Next-Gen Creative Studio Showreel",
      description: "High-intensity studio showreel highlighting multi-camera edits, 3D typography, and color grading.",
      category: "Promo",
      youtubeId: "JSZmQxg3fos",
      client: "Independent Brand",
      duration: "1:45",
      software: ["Premiere Pro", "DaVinci Resolve"],
    },
  ],
};
