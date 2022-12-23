/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kritagya's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Kritagya Kumra Portfolio",
    type: "website",
    url: "http://kritagyakumra.herokuapp.com/",
  },
};

//Home Page
const greeting = {
  title: "Kritagya Kumra",
  logo_name: "KritagyaKumra",
  nickname: "Kritagya-web",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1XvmOASqt3_poL8iRU6-jJWOTzHN1IUHn/view?usp=share_link",
  portfolio_repository:
    "https://github.com/Kritagya-web/Kritagya_React_Portfolio",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Kritagya-web",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kritagya-kumra-bba9b41b6/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:kritagyakumra@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/kritagya.kumra",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/kritagyakumra/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F28C28",
      },
      profileLink: "https://leetcode.com/Kritagya7777/",
    },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/kritagyakumra",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@kritagya6",
    // },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/kritagyakumra",
    },
    {
      siteName: "Coding Ninjas",
      iconifyClassname: "simple-icons:codingninjas",
      style: {
        color: "#F28C28",
      },
      profileLink: "https://www.codingninjas.com/codestudio/profile/34a33414-da35-4b62-ab67-1507226c6539",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Guru Nanak Dev University Main Campus, Amritsar",
      subtitle: "B.Tech. in Computer Science & Engineering",
      logo_path: "gndu_logo.png",
      alt_name: "GNDU Main Campus, Amritsar",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Machine Learning, Data Science, C/C++, Python, Java, Reactjs and Full Stack Development.",
        "⚡ I have created projects in different fields to master the fundamentals of the respective domains and have tried to master the concepts through their basics.",
        "⚡ I was known for my curiosity during my entire college period and have performed very well in every subject of my academic career as a CSE student.",
      ],
      website_link: "https://online.gndu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning A-Z™: Python & R in Data Science [2022]",
      subtitle: "- Kirill Eremenko, Hadelin de Ponteves, Ligency I Team, Ligency Team",
      logo_path: "Udemy_logo.png",
      certificate_link:
        "",
      alt_name: "Machine Learning",
      color_code: "#E5AA70",
    },
    {
      title: "Machine Learning & Deep Learning in Python & R",
      subtitle: "- Start-Tech Academy",
      logo_path: "Udemy_logo.png",
      certificate_link:
        "",
      alt_name: "deeplearning.ai",
      color_code: "#EADDCA",
    },
    {
      title: "React 17",
      subtitle: "- Sameer Buna",
      logo_path: "Pluralsight_logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1CBTGevGlv1tlHv67G1QbB-eZ-OdLnVG-/view?usp=sharing",
      alt_name: "React",
      color_code: "#000",
    },
    {
      title: "Unleashing Data Science and AI",
      subtitle: "- Bharati Vidyapeeth University College Of Engineering, Pune",
      logo_path: "bvicam_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1sLlCOsVFL38w2gOpWpr3LABJke_oHs3x/view?usp=sharing",
      alt_name: "BVICAM",
      color_code: "#FFF",
    },
    {
      title: "Oracle Database: Introduction to SQL",
      subtitle: "- Oracle University",
      logo_path: "Oracle_Logo_1.png",
      certificate_link:
        "https://drive.google.com/file/d/1DXFVhBlTTn6tx5YiQAM2bKqx7wj-hk8X/view?usp=sharing",
      alt_name: "Oracle",
      color_code: "#DE3163",
    },
    {
      title: "Programming in Java",
      subtitle: "- NIIT Amritsar",
      logo_path: "niit_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/17YzW5qo2Zbit4vsoqg3XzB3Hu9qvZ9_0/view?usp=sharing",
      alt_name: "JAVA",
      color_code: "#FFF",
    },
    {
      title: "Building Websites with HTML, CSS, and JavaScript",
      subtitle: "- Craig Shoemaker",
      logo_path: "Pluralsight_logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1co529E0182WYglbvMnNuyHCHhu2_5wUr/view?usp=sharing",
      alt_name: "Website Building",
      color_code: "#000",
    },
    {
      title: "Data Structures Workshop",
      subtitle: "- Coding Blocks",
      logo_path: "coding-blocks_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1hBZMo9oc7C06ylINAbmxPTuGYBCqgrfv/view?usp=sharing",
      alt_name: "Data Structures",
      color_code: "#FFF",
    },
    {
      title: "Getting Started with Programming in Java 11",
      subtitle: "- Jim Wilson",
      logo_path: "Pluralsight_logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1jZNt4tFgBd0PI6b1yKhTKrBZP-twfOCy/view?usp=sharing",
      alt_name: "Pluralsight",
      color_code: "#000",
    },
    {
      title: "Certification in Python 3",
      subtitle: "- VMM Education",
      logo_path: "vmm-education_logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1Txhs4Nmp7VhwAL0ZesKvg7I8ZZotyF4_/view?usp=sharing",
      alt_name: "Python 3",
      color_code: "#FFF",
    },
    {
      title: "Learn To Create AI Assistant (JARVIS) With Python",
      subtitle: "- Arbaz Khan",
      logo_path: "Udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-5f783ff9-d6e4-42d0-bbbc-0131e802560d/",
      alt_name: "AI",
      color_code: "#89CFF0",
    },
    {
      title: "Certification in C and C++",
      subtitle: "- VMM Education",
      logo_path: "vmm-education_logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1soLzGtwCKnn2OBnM29NuT-6-My0YMjp5/view?usp=sharing",
      alt_name: "C/C++",
      color_code: "#FFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "KPMG Intern",
          company: "KPMG Assurance and Consulting Services LLP.",
          company_url:
            "https://home.kpmg/in/en/home.html",
          logo_path: "KPMG-Logo.jpg",
          duration: "Jan 2022 - July 2022",
          location: "Gurugram,India",
          description:
            "KPMG in India is one of the leading providers of risk, financial and business advisory, tax and regulatory services, and internal audits. The Leadership Team is the principal governing body of KPMG's operations in India. During my internship, I was part of 3 different projects in which I contributed in the field of UI-UX Design, Data Analytics, and Frond-end and Back-end respectively.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Projects worked on during my Internship",
      experiences: [
        {
          title: "Revenue Assurance in Toll Operations",
          company: "IN-Cube-Highways",
          company_url: "https://www.cubehighways.com/",
          logo_path: "cube_highways_logo.jpg",
          duration: "Jan 2022 - Feb 2022",
          location: "Gurugram,India",
          description:
            "My first project was Revenue Assurance in Toll Operations. Here in this project, data related to different tolls spread all over India were given to me from the toll company, where on that data we had to perform some checks to remove the inconsistencies in that data through the use of KPI (Key Performance Indicator) and then report it to the client side through the help of document files and diagrams like “if same vehicle Plate No has been charged twice while entering to the toll or if a vehicle plate number had been charged incorrectly” etc. Firstly, we had to clean the data by doing the correct analysis of the data for performing those KPIs or checks leaving columns we don’t require, and then we had to create the tables in PostgreSQL to load all the data into it to perform all those checks with the help of SQL scripts using the concept of Joins, Subqueries, and inner queries, etc.",
          color: "#4285F4",
        },
        {
          title: "Governance and Operations Tool UI-UX development",
          company: "KPMG Internal Project",
          company_url: "https://home.kpmg/in/en/home.html",
          logo_path: "KPMG-Logo.jpg",
          duration: "March 2022 - June 2022",
          location: "Gurugram,India",
          description:
            "My second project was Governance and Operations Tool UI-UX development. Here in this project, I was assigned a task to create a modern-looking UI and add more functionalities to the tool using HTML, CSS, and JS. This tool aims to track the things performed by every member working on their respective projects or ventures. It contains two different bifurcations for Analysts and Managers. The manager section contains various features like Create New Task, View Assigned Task, User-wise Dashboard Section, Issue Tracker Section, View Leakage Dashboard, and User Access Management Section. The analyst section contains features like Create New Task, View Assigned Task, Manage SLA Compliance, Report/Update an Issue, View Status of Issue, Track Initiative Progress, Monthly Self-Assessment, Issue Tracker, etc. The sole purpose of creating this tool was to create one place where every project's progress can be tracked properly.",
          color: "#D83B01",
        },
        {
          title: "Audit-Automation Tool (Initiative Built for the KPMG network)",
          company: "KPMG Internal Project",
          company_url: "https://home.kpmg/in/en/home.html",
          logo_path: "KPMG-Logo.jpg",
          duration: "April 2022 - July 2022",
          location: "Gurugram,India",
          description:
            "My third project was Audit-Automation Tool in which I have given contributions in both frontend and at the backend. Here the purpose of this project was not to automate the entire process of the audit report generation but to remove all the redundant work which we do while creating the audit report. So instead of wasting a lot of time in creating the basic ppt, we would automate this process where after filling the forms having all the required fields we would get that same generated ppt were just by selecting certain input fields and dropdowns regarding the problem and their required controls used for creating the audit report would generate a ppt having that KPMG Template(having sock reports embedded into it) + basic options that we had chosen earlier to provide it to the client as our final report. The tool contains 2 portals – for admin i.e., Manager and Above Manager Level, and for Below Manager Level. In the case of admin, we would have functionalities like Creating an audit report, Seeing the List of Audits, exporting Documents, etc. In the case of Below Manager Level, we would have the functionalities of Seeing the List of Audit, Export Documents, and Alignment of RACM to the Audit, and even we would have timely email reminders but would not have the functionality of Creating an audit report as that feature is only given to Manager or Above Manager.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science, Machine Learning, React based projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_kritagya.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React and Cloud Computing or Cloud infrastructure.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character and would create a blog website very shortly.",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "61, Hukam Singh Road, Shivala Colony, Amritsar, Punjab 143001",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/arpqmqtjJspg825g8",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 6284470690",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
