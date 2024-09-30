/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "David L. Espada",
  title: "Hi! I'm David L. Espada",
  subTitle: emoji(
    "👨‍💻 Unreal Engine & C++ Programmer | Expert in complex systems & gameplay mechanics 🎮 | Let's create something amazing! 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1dm6VWgxruFOo0MUUhNNVlkPG9DH_HuPD/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/davidlespada",
  linkedin: "https://www.linkedin.com/in/david-l%C3%B3pez-espada-89177a214",
  gmail: "davidlespada@gmail.com",
  // You can add more social media links here
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Experienced Unreal Engine Programmer Specializing in Complex Systems and Gameplay Mechanics",
  skills: [
    emoji(
      "⚡ Develop robust core systems and base architecture in Unreal Engine using C++ and Blueprints"
    ),
    emoji(
      "⚡ Expert in gameplay programming, including complex gameplay systems and mechanics"
    ),
    emoji(
      "⚡ Proficient in animation programming, character locomotion systems, and integrating GAS and Common UI"
    ),
    emoji(
      "⚡ Develop tools and editor scripting to streamline workflows for artists and designers"
    ),
    emoji(
      "⚡ Lead programmer skilled in team leadership and developing pipelines between department"
    ),
    emoji(
      "⚡ Experience in creating games from scratch and participating in game jams"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Unreal Engine",
      fontAwesomeClassname: "fas fa-gamepad"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Blueprints",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "GAS (Gameplay Ability System)",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Common UI",
      fontAwesomeClassname: "fas fa-tv"
    },
	{
      skillName: "Animation Programming",
      fontAwesomeClassname: "fas fa-running"
    },
    {
      skillName: "Tools & Scripting",
      fontAwesomeClassname: "fas fa-tools"
    },
    {
      skillName: "Team Leadership",
      fontAwesomeClassname: "fas fa-chalkboard-teacher"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
	    {
      skillName: "Perforce",
      fontAwesomeClassname: "fas fa-code-branch"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "PrimerFrame",
      logo: require("./assets/images/primerframeLogo.png"), // Replace with the correct path to your logo
      subHeader: "Diploma in Game Development",
      duration: "2019",
      desc: "Studied game development focusing on programming, animation, and 3D art.",
      descBullets: [
        "Developed final project 'CIEV' as main programmer, implementing base systems, player programming, pushable items, and UIs",
        "Learned how different areas of game development assemble together",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Gameplay Programming",
      progressPercentage: "95%"
    },
    {
      Stack: "Unreal Engine Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Tools & Editor Scripting",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display CodersRank badges, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Unreal Engine Programmer",
      company: "Daloar Studios",
      companylogo: require("./assets/images/daloarStudiosLogo.png"), // Replace with the correct path to your logo
      date: "August 2021 – Present",
      desc: "Leading the programming team in developing 'The Occultist', a next-gen video game for PC, PS5, and Xbox Series X/S.",
      descBullets: [
        "Developed core systems and base architecture using C++ and Blueprints",
        "Implemented complex gameplay systems and mechanics",
        "Set up character locomotion and animation systems",
        "Created tools and editor scripts to streamline workflows for artists and designers",
        "Integrated GAS (Gameplay Ability System) and Common UI into the project",
        "Collaborated closely with cross-functional teams to deliver high-quality game features"
      ]
    },
    {
      role: "Unreal game programmer",
      company: "FrameOver",
      companylogo: require("./assets/images/frameoverLogo.png"), // Replace with the correct path to your logo
      date: "October 2020 – May 2021",
      desc: "Developed a prototype for a few months and developed a VR standalone experience for Quest 2",
      descBullets: [
        "Installed SDKs and responsible for app builds and compatibility",
        "VR interaction system",
        "UI navigation",
        "Organize projects with art departments",
        "Android profiling for optimal FPS"
      ]
    },
    {
      role: "Game Programmer",
      company: "Freelance / Personal Projects",
      companylogo: require("./assets/images/freelanceLogo.png"), // Replace with the correct path to your logo
      date: "2018 – Present",
      desc: "Developed several indie games and participated in game jams.",
      descBullets: [
        "Won Epic MegaJam with 'The Yellow Robot' as the sole programmer",
        "Developed 'Kibus', which placed first on Itch.io for several days",
        "Created 'Nodine' and other personal projects, handling all programming aspects"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Projects I have worked on",
  projects: [
    {
      image: require("./assets/images/theOccultistLogo.png"), // Replace with the correct path to your image
      projectName: "The Occultist",
      projectDesc:
        "A next-gen video game for PC, PS5, and Xbox Series X/S developed at Daloar Studios.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://theoccultist.com/" // Replace with the actual URL
        }
        // You can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/theYellowRobotLogo.png"), // Replace with the correct path to your image
      projectName: "The Yellow Robot",
      projectDesc:
        "Winner of Epic MegaJam. Developed as sole programmer alongside artists and animators.",
      footerLink: [
        {
          name: "View on Itch.io",
          url: "https://daboiowich.itch.io/the-yellow-robot" // Replace with the actual URL
        }
      ]
    },
    {
      image: require("./assets/images/kibusLogo.png"), // Replace with the correct path to your image
      projectName: "Kibus",
      projectDesc: "Indie game that placed first on Itch.io for several days.",
      footerLink: [
        {
          name: "View on Itch.io",
          url: "https://daboiowich.itch.io/kibus" // Replace with the actual URL
        }
      ]
    },
    {
      image: require("./assets/images/nodineLogo.png"), // Replace with the correct path to your image
      projectName: "Nodine",
      projectDesc: "Personal project developed entirely by me.",
      footerLink: [
        {
          name: "View on Itch.io",
          url: "https://your-itch-io-link.com" // Replace with the actual URL
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Some of the achievements and recognitions I have received",

  achievementsCards: [
    {
      title: "Epic MegaJam Winner",
      subtitle:
        "Won the Epic MegaJam with 'The Yellow Robot' as the sole programmer alongside artists and animators.",
      image: require("./assets/images/epicGamesLogo.png"), // Replace with the correct path to your image
      imageAlt: "Epic MegaJam Logo",
      footerLink: [
        {
          name: "View Project",
          url: "https://daboiowich.itch.io/the-yellow-robot" // Replace with the actual URL
        },
        {
          name: "Epic MegaJam Announcement",
          url: "https://your-announcement-link.com" // Replace with the actual URL
        }
      ]
    },
    {
      title: "'Kibus' - Top Game on Itch.io",
      subtitle: "'Kibus' placed first on Itch.io for several days.",
      image: require("./assets/images/itchIoLogo.png"), // Replace with the correct path to your image
      imageAlt: "Itch.io Logo",
      footerLink: [
        {
          name: "Play Kibus",
          url: "https://your-itch-io-link.com" // Replace with the actual URL
        }
      ]
    }
    // You can add more achievements here
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love to share my knowledge and experiences in game development.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Section

const talkSection = {
  title: "Talks",
  subtitle: "",
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I love to talk about game development and share my experiences.",
  podcast: [
    "https://www.ivoox.com/player_ej_131253132_6_1.html" // Replace with your podcast embedded link
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false // Set false to hide this section, defaults to true
};

// Contact Info

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let me know anything! My inbox is open for all.",
  number: "", // You can add your phone number here
  email_address: "davidlespada@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", // Replace "twitter" with your Twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
