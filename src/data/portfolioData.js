export const portfolioData = {
  personalInfo: {
    name: "NAMBALA SANTOSH KUMAR",
    title: "Python Full Stack Developer",
    location: "Visakhapatnam, Andhra Pradesh, India",
    email: "santoshkumarnambala666@gmail.com",
    phone: "+91 9347366385",
    github: "https://github.com/NSantoshKumar2005",
    linkedin: "https://linkedin.com/in/nambala-santosh-kumar",
    githubUsername: "NSantoshKumar2005",
    linkedinUsername: "nambala-santosh-kumar",
    summary: `Python Full Stack Developer with strong foundations in Python, Flask, MySQL, SQL, JavaScript, React, and REST APIs. Experienced in building end-to-end web applications, including e-commerce, recruitment management, and transaction management systems with secure authentication, session management, and database design. Skilled in OOP, DBMS concepts, Git version control, and responsive front-end development using HTML5, CSS3, React, and Bootstrap.`
  },
  
  stats: [
    { label: "CGPA (B.Tech CSD)", value: "8.28" },
    { label: "Coding Challenges Solved", value: "100+" },
    { label: "HackerRank Badge", value: "Gold" },
    { label: "TCS CodeVita Rank", value: "11,563" }
  ],

  skillCategories: [
    {
      id: "languages",
      name: "Languages",
      skills: [
        { name: "Python", level: 90, highlight: true },
        { name: "JavaScript (ES6+)", level: 85, highlight: true },
        { name: "SQL", level: 85, highlight: true }
      ]
    },
    {
      id: "backend_frontend",
      name: "Backend & Frontend",
      skills: [
        { name: "Flask", level: 88, highlight: true },
        { name: "React.js", level: 85, highlight: true },
        { name: "REST APIs", level: 90, highlight: true },
        { name: "HTML5", level: 92, highlight: false },
        { name: "CSS3", level: 88, highlight: false },
        { name: "Bootstrap", level: 85, highlight: false },
        { name: "React Router", level: 85, highlight: false },
        { name: "Axios", level: 88, highlight: false }
      ]
    },
    {
      id: "database_tools",
      name: "Databases & Tools",
      skills: [
        { name: "MySQL", level: 88, highlight: true },
        { name: "Git", level: 85, highlight: true },
        { name: "GitHub", level: 88, highlight: true },
        { name: "VS Code", level: 90, highlight: false },
        { name: "JSON Server", level: 85, highlight: false }
      ]
    },
    {
      id: "concepts",
      name: "Core Concepts",
      skills: [
        { name: "Object-Oriented Programming (OOP)", level: 90, highlight: true },
        { name: "Database Management Systems (DBMS)", level: 88, highlight: true },
        { name: "CRUD Operations", level: 92, highlight: true },
        { name: "Authentication & Authorization", level: 88, highlight: true },
        { name: "Problem Solving", level: 90, highlight: true }
      ]
    }
  ],

  experience: [
    {
      role: "Web Development Intern",
      company: "NativeSoftTech",
      period: "March 2025 – May 2025",
      type: "Internship",
      location: "Remote / On-site",
      bgImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Engineered responsive web pages using HTML, CSS, and JavaScript, translating project requirements into functional, user-ready interfaces.",
        "Built and customized website layouts to align with project specifications, ensuring consistent design and functionality across pages.",
        "Performed cross-browser testing to validate page performance, responsiveness, and compatibility across devices and browsers.",
        "Identified and resolved UI issues, improving overall usability and enhancing the end-user experience."
      ],
      skillsUsed: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Cross-Browser Testing", "UI/UX Optimization"]
    }
  ],

  projects: [
    {
      id: "ecommerce-flask",
      title: "E-Commerce Web Application",
      subtitle: "Full-Stack Flask App with Razorpay Payment Integration",
      bgImage: "https://images.unsplash.com/photo-1556742049-0a67daf4002a?auto=format&fit=crop&w=1000&q=80",
      techStack: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript", "Jinja2", "Razorpay API"],
      category: "Full Stack",
      featured: true,
      description: "Developed a full-stack e-commerce web application using Flask with secure user authentication, product browsing, shopping cart, and order management functionality.",
      details: [
        "Developed a full-stack e-commerce web application using Flask with secure user authentication, product browsing, shopping cart, and order management functionality.",
        "Integrated the Razorpay Payment Gateway API to enable secure online payments and a seamless checkout experience.",
        "Designed and optimized a MySQL relational database to efficiently manage users, products, orders, and payment records.",
        "Implemented session management, role-based access control (RBAC), and CRUD operations to ensure secure user interactions and efficient order processing."
      ],
      highlights: [
        "Razorpay Payment Gateway API Integration",
        "Role-Based Access Control (RBAC)",
        "Optimized MySQL Relational Schema",
        "Session Management & Authentication"
      ],
      githubUrl: "https://github.com/NSantoshKumar2005"
    },
    {
      id: "recruitment-react",
      title: "Recruitment Management System",
      subtitle: "React.js Dynamic Dashboard with CRUD Operations & Protected Routes",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      techStack: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "React Router", "Axios", "JSON Server"],
      category: "Frontend & API",
      featured: true,
      description: "Developed a Recruitment Management System using React.js with complete CRUD operations for efficient job posting and recruitment record management.",
      details: [
        "Developed a Recruitment Management System using React.js with complete CRUD operations for efficient job posting and recruitment record management.",
        "Implemented user authentication with Login, Registration, Logout, and Protected Routes using React Router to ensure secure access control.",
        "Integrated Axios with RESTful APIs (JSON Server) to perform asynchronous data fetching, creation, updating, and deletion of recruitment records.",
        "Built reusable React components and managed application state using React Hooks (useState, useEffect), delivering a responsive, maintainable, and user-friendly interface."
      ],
      highlights: [
        "Protected Routing & User Auth Flow",
        "Asynchronous RESTful API Integration with Axios",
        "Full Job Posting & Application CRUD Operations",
        "Modular React Hooks (useState, useEffect)"
      ],
      githubUrl: "https://github.com/NSantoshKumar2005"
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science with Data Science (CSD)",
      institution: "Raghu Institute of Technology",
      period: "2022 – 2026",
      score: "CGPA: 8.28",
      bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      details: "Specializing in Computer Science with Data Science. Core coursework in Data Structures, Algorithms, Database Systems, Web Development, and Object-Oriented Programming."
    },
    {
      degree: "Class 12 (Board of Intermediate)",
      institution: "Sri Chaitanya Junior College",
      period: "2020 – 2022",
      score: "Percentage: 89.4%",
      bgImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
      details: "Completed Higher Secondary Education focusing on Mathematics, Physics, and Chemistry."
    },
    {
      degree: "Class 10 (SSC)",
      institution: "Srujana High School",
      period: "2019 – 2020",
      score: "GPA: 8.0",
      bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      details: "Secondary School Certificate with strong academic performance in science and mathematics."
    }
  ],

  certifications: [
    {
      title: "Programming in Python",
      issuer: "NPTEL",
      type: "Certification",
      bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
      description: "Comprehensive certification covering core Python syntax, algorithms, data structures, and computational thinking."
    },
    {
      title: "Programming in C",
      issuer: "NPTEL",
      type: "Certification",
      bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      description: "Rigorous fundamentals of programming, memory management, pointers, and algorithm design in C."
    },
    {
      title: "Python Certification",
      issuer: "HackerRank",
      type: "Certification",
      bgImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80",
      description: "Verified assessment demonstrating problem-solving, string manipulation, data structures, and object-oriented Python skills."
    },
    {
      title: "MySQL Certification",
      issuer: "Codegnan",
      type: "Certification",
      bgImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=600&q=80",
      description: "Hands-on training in relational database design, complex queries, joins, indexes, and performance tuning in MySQL."
    }
  ],

  achievements: [
    {
      title: "HackerRank Gold Badge in Python",
      description: "Earned the HackerRank Gold Badge in Python, demonstrating proficiency in Python programming, problem-solving, and algorithmic thinking.",
      badge: "Gold Badge"
    },
    {
      title: "100+ Coding Challenges Solved",
      description: "Solved 100+ coding challenges on HackerRank and other competitive platforms, strengthening skills in Python, SQL, Data Structures, and Algorithms.",
      badge: "100+ Solved"
    },
    {
      title: "TCS CodeVita Season 13 Rank",
      description: "Secured Global Rank 11,563 in TCS CodeVita Season 13, demonstrating strong problem-solving, algorithmic thinking, and competitive programming skills under timed constraints.",
      badge: "Global Rank 11,563"
    }
  ]
};
