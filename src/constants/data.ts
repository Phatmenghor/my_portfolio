export interface Project {
  id: number;
  image: string; // URL of the project image
  projectName: string; // Name of the project
  urlWebsite: string; // URL of the project website
  type: string; // Type of the project
}

export interface ProjectDetail {
  id: number;
  image: string; // URL of the project image
  projectName: string; // Name of the project
  urlWebsite: string; // URL of the project website
  type: string; // Type of the project
  startDate: string; // Start date of the project
  endDate: string; // End date of the project
  designerName: string; // Name of the designer
  projectManagementName: string; // Name of the project manager
  clientName: string; // Name of the client
  title: string; // Title of the project
  projectDescription: string; // Detailed project description
}

// Sample data with a variety of project types
export const projectsRecent: Project[] = [
  {
    id: 1,
    image: "https://picsum.photos/1200/628?random=1",
    projectName: "Project One",
    urlWebsite: "https://project-one.com",
    type: "Website",
  },
  {
    id: 2,
    image: "https://picsum.photos/1200/628?random=2",
    projectName: "Project Two",
    urlWebsite: "https://project-two.com",
    type: "App",
  },
  {
    id: 3,
    image: "https://picsum.photos/1200/628?random=3",
    projectName: "Project Three",
    urlWebsite: "https://project-three.com",
    type: "Backend",
  },
  {
    id: 4,
    image: "https://picsum.photos/1200/628?random=4",
    projectName: "Project Four",
    urlWebsite: "https://project-four.com",
    type: "Website",
  },
  {
    id: 5,
    image: "https://picsum.photos/1200/628?random=5",
    projectName: "Project Five",
    urlWebsite: "https://project-five.com",
    type: "App",
  },
  {
    id: 6,
    image: "https://picsum.photos/1200/628?random=6",
    projectName: "Project Six",
    urlWebsite: "https://project-six.com",
    type: "Backend",
  },
  {
    id: 7,
    image: "https://picsum.photos/1200/628?random=7",
    projectName: "Project Seven",
    urlWebsite: "https://project-seven.com",
    type: "Website",
  },
  {
    id: 8,
    image: "https://picsum.photos/1200/628?random=8",
    projectName: "Project Eight",
    urlWebsite: "https://project-eight.com",
    type: "App",
  },
  {
    id: 9,
    image: "https://picsum.photos/1200/628?random=9",
    projectName: "Project Nine",
    urlWebsite: "https://project-nine.com",
    type: "Backend",
  },
  {
    id: 10,
    image: "https://picsum.photos/1200/628?random=10",
    projectName: "Project Ten",
    urlWebsite: "https://project-ten.com",
    type: "Website",
  },
  {
    id: 11,
    image: "https://picsum.photos/1200/628?random=11",
    projectName: "Project Eleven",
    urlWebsite: "https://project-eleven.com",
    type: "App",
  },
  {
    id: 12,
    image: "https://picsum.photos/1200/628?random=12",
    projectName: "Project Twelve",
    urlWebsite: "https://project-twelve.com",
    type: "Backend",
  },
  {
    id: 13,
    image: "https://picsum.photos/1200/628?random=13",
    projectName: "Project Thirteen",
    urlWebsite: "https://project-thirteen.com",
    type: "Website",
  },
  {
    id: 14,
    image: "https://picsum.photos/1200/628?random=14",
    projectName: "Project Fourteen",
    urlWebsite: "https://project-fourteen.com",
    type: "App",
  },
  {
    id: 15,
    image: "https://picsum.photos/1200/628?random=15",
    projectName: "Project Fifteen",
    urlWebsite: "https://project-fifteen.com",
    type: "Backend",
  },
];

export const projectsRecentDetail: ProjectDetail[] = [
  {
    id: 1,
    image: "https://picsum.photos/1200/628?random=1",
    projectName: "Project One",
    urlWebsite: "https://project-one.com",
    type: "Website",
    startDate: "2023-01-10",
    endDate: "2023-03-20",
    designerName: "Alice Smith",
    projectManagementName: "John Doe",
    clientName: "Client A",
    title: "Innovative Web Solution",
    projectDescription:
      "A responsive and interactive website developed for Client A to showcase their innovative products. This project focused on user engagement and functionality, ensuring that the website was not only visually appealing but also easy to navigate. Key features included a dynamic product gallery, a comprehensive blog section for updates and news, and an intuitive contact form. The website was optimized for SEO to enhance visibility, and extensive testing was performed to guarantee compatibility across various devices and browsers.",
  },
  {
    id: 2,
    image: "https://picsum.photos/1200/628?random=2",
    projectName: "Project Two",
    urlWebsite: "https://project-two.com",
    type: "App",
    startDate: "2022-09-15",
    endDate: "2023-01-10",
    designerName: "Bob Johnson",
    projectManagementName: "Sara Lee",
    clientName: "Client B",
    title: "Mobile App Development",
    projectDescription:
      "Cross-platform mobile app development for Client B, aimed at enhancing user interaction and maximizing engagement. The app incorporates features such as real-time notifications, an advanced analytics dashboard, and integration with social media platforms. User experience was a primary focus, with wireframes and prototypes developed to gather feedback during the design phase. The project utilized Agile methodologies, allowing for iterative testing and refinements based on user feedback, resulting in a high-quality product that meets client expectations.",
  },
  {
    id: 3,
    image: "https://picsum.photos/1200/628?random=3",
    projectName: "Project Three",
    urlWebsite: "https://project-three.com",
    type: "Backend",
    startDate: "2023-04-01",
    endDate: "2023-06-15",
    designerName: "Carol White",
    projectManagementName: "James Brown",
    clientName: "Client C",
    title: "Scalable Backend Solution",
    projectDescription:
      "High-performance backend system for Client C, designed to handle significant data loads and provide robust data handling capabilities. The architecture was built using microservices to ensure scalability and maintainability. Key components included a RESTful API, integration with third-party services for data enrichment, and a robust authentication system to secure user data. The project emphasized thorough testing practices, including unit, integration, and load testing, to guarantee performance and reliability under high traffic conditions.",
  },
  {
    id: 4,
    image: "https://picsum.photos/1200/628?random=4",
    projectName: "Project Four",
    urlWebsite: "https://project-four.com",
    type: "Website",
    startDate: "2022-05-20",
    endDate: "2022-08-10",
    designerName: "David Green",
    projectManagementName: "Emily King",
    clientName: "Client D",
    title: "E-commerce Platform",
    projectDescription:
      "Comprehensive e-commerce website for Client D that integrated multiple payment systems and featured a user-friendly interface designed to enhance the shopping experience. The site included a powerful search functionality, product recommendations based on user behavior, and an administrative dashboard for managing inventory and orders. The project also focused on implementing security measures to protect customer data and ensure compliance with data protection regulations. Continuous feedback loops were established with the client to refine features and improve overall functionality.",
  },
  {
    id: 5,
    image: "https://picsum.photos/1200/628?random=5",
    projectName: "Project Five",
    urlWebsite: "https://project-five.com",
    type: "App",
    startDate: "2023-02-10",
    endDate: "2023-05-25",
    designerName: "Ella Thompson",
    projectManagementName: "Oliver Queen",
    clientName: "Client E",
    title: "Fitness Tracking App",
    projectDescription:
      "A feature-rich fitness tracking app developed for Client E, designed to motivate users to achieve their fitness goals. The app offers features such as GPS tracking for outdoor activities, personalized workout plans based on user preferences, and comprehensive analytics to monitor progress. User engagement was enhanced through community features, allowing users to connect with friends and share achievements. The project incorporated user feedback throughout the development process, ensuring that the final product effectively met the needs of its target audience.",
  },
  {
    id: 6,
    image: "https://picsum.photos/1200/628?random=6",
    projectName: "Project Six",
    urlWebsite: "https://project-six.com",
    type: "Backend",
    startDate: "2023-07-01",
    endDate: "2023-09-01",
    designerName: "Frank Lee",
    projectManagementName: "Nina George",
    clientName: "Client F",
    title: "Inventory Management System",
    projectDescription:
      "Backend for an inventory management system that optimizes warehouse data handling, stock tracking, and order processing for Client F. The system features real-time updates, alerts for low stock levels, and detailed reporting capabilities. Built with scalability in mind, the architecture allows for easy integration with existing systems and the addition of new features as business needs evolve. A focus on security was paramount, ensuring that sensitive data is protected and access is strictly controlled.",
  },
  {
    id: 7,
    image: "https://picsum.photos/1200/628?random=7",
    projectName: "Project Seven",
    urlWebsite: "https://project-seven.com",
    type: "Website",
    startDate: "2023-03-15",
    endDate: "2023-06-30",
    designerName: "Grace Lee",
    projectManagementName: "Harry White",
    clientName: "Client G",
    title: "Portfolio Showcase",
    projectDescription:
      "A visually stunning portfolio website developed for Client G to showcase their creative work. The site features an interactive gallery, client testimonials, and a blog section for sharing insights and updates. Emphasis was placed on creating an engaging user experience, with smooth transitions and responsive design to cater to visitors on any device. Extensive user testing was conducted to ensure that the website not only looks great but also functions seamlessly, driving higher engagement rates and client inquiries.",
  },
  {
    id: 8,
    image: "https://picsum.photos/1200/628?random=8",
    projectName: "Project Eight",
    urlWebsite: "https://project-eight.com",
    type: "App",
    startDate: "2023-05-01",
    endDate: "2023-08-15",
    designerName: "Hannah Brown",
    projectManagementName: "Michael Davis",
    clientName: "Client H",
    title: "Travel Planning App",
    projectDescription:
      "An innovative travel planning app designed for Client H, enabling users to plan their trips with ease. The app includes features such as itinerary creation, collaborative planning with friends, and integrated booking options for flights and accommodations. It also provides personalized recommendations based on user preferences and past trips. To ensure the app meets the dynamic needs of travelers, user feedback was integrated throughout the development process, resulting in a highly functional and user-friendly application.",
  },
  {
    id: 9,
    image: "https://picsum.photos/1200/628?random=9",
    projectName: "Project Nine",
    urlWebsite: "https://project-nine.com",
    type: "Backend",
    startDate: "2023-06-20",
    endDate: "2023-09-10",
    designerName: "Ian Black",
    projectManagementName: "Olivia White",
    clientName: "Client I",
    title: "Data Analytics Platform",
    projectDescription:
      "A comprehensive data analytics platform developed for Client I, designed to process large datasets and provide actionable insights. The platform features advanced analytics tools, real-time data processing capabilities, and customizable dashboards that allow users to visualize data effectively. Security and compliance were prioritized throughout the development process, ensuring that user data is protected and adheres to industry regulations. User training sessions were conducted to ensure that clients could maximize the platform’s capabilities.",
  },
  {
    id: 10,
    image: "https://picsum.photos/1200/628?random=10",
    projectName: "Project Ten",
    urlWebsite: "https://project-ten.com",
    type: "Website",
    startDate: "2022-10-05",
    endDate: "2023-01-25",
    designerName: "Jessica Grey",
    projectManagementName: "Peter Green",
    clientName: "Client J",
    title: "Non-Profit Organization Website",
    projectDescription:
      "A comprehensive website developed for a non-profit organization to promote its mission and initiatives. The site includes sections for donations, volunteer sign-ups, and detailed information about ongoing projects. Emphasis was placed on accessibility and inclusivity, ensuring that the site is user-friendly for a diverse audience. The project also involved training the organization’s staff on how to update and manage content effectively, ensuring sustainability beyond the initial development phase.",
  },
  {
    id: 11,
    image: "https://picsum.photos/1200/628?random=11",
    projectName: "Project Eleven",
    urlWebsite: "https://project-eleven.com",
    type: "App",
    startDate: "2023-01-15",
    endDate: "2023-04-10",
    designerName: "Katherine Blue",
    projectManagementName: "Lucas Brown",
    clientName: "Client K",
    title: "Recipe Sharing App",
    projectDescription:
      "A user-friendly recipe sharing app designed for Client K, allowing users to upload, share, and discover recipes. The app features advanced search options, user ratings, and the ability to create shopping lists from selected recipes. The design focuses on community engagement, enabling users to follow one another and exchange culinary tips. User feedback was gathered continuously throughout the development process to refine features and enhance usability, resulting in an engaging platform for food enthusiasts.",
  },
  {
    id: 12,
    image: "https://picsum.photos/1200/628?random=12",
    projectName: "Project Twelve",
    urlWebsite: "https://project-twelve.com",
    type: "Backend",
    startDate: "2023-02-20",
    endDate: "2023-05-30",
    designerName: "Michael Green",
    projectManagementName: "Samantha Black",
    clientName: "Client L",
    title: "Healthcare Management System",
    projectDescription:
      "A secure and efficient healthcare management system developed for Client L, designed to streamline patient records and improve service delivery. The system integrates appointment scheduling, patient history tracking, and billing management in a user-friendly interface. Data security and compliance with healthcare regulations were top priorities, ensuring that patient information is safeguarded. The project involved collaboration with healthcare professionals to ensure that the system meets industry standards and user expectations.",
  },
  {
    id: 13,
    image: "https://picsum.photos/1200/628?random=13",
    projectName: "Project Thirteen",
    urlWebsite: "https://project-thirteen.com",
    type: "Website",
    startDate: "2023-07-15",
    endDate: "2023-09-30",
    designerName: "Emily White",
    projectManagementName: "Oliver Black",
    clientName: "Client M",
    title: "Event Management Platform",
    projectDescription:
      "A dynamic event management platform developed for Client M, enabling users to create, promote, and manage events seamlessly. The platform includes features such as ticketing, attendee management, and event promotion tools. Emphasis was placed on creating a user-friendly interface, ensuring that both event organizers and attendees can navigate the platform easily. Extensive testing and user feedback were incorporated throughout the development process to refine functionalities and enhance the overall user experience.",
  },
  {
    id: 14,
    image: "https://picsum.photos/1200/628?random=14",
    projectName: "Project Fourteen",
    urlWebsite: "https://project-fourteen.com",
    type: "App",
    startDate: "2023-03-01",
    endDate: "2023-05-20",
    designerName: "Thomas Grey",
    projectManagementName: "Nina Smith",
    clientName: "Client N",
    title: "Language Learning App",
    projectDescription:
      "An interactive language learning app developed for Client N, focusing on providing an engaging learning experience through gamification and personalized learning paths. The app features audio-visual lessons, quizzes, and community interactions to enhance the learning experience. Continuous user feedback played a crucial role in refining the app’s features and user interface, ensuring it meets the needs of learners of various levels. The project also included backend development to track user progress and provide analytics.",
  },
  {
    id: 15,
    image: "https://picsum.photos/1200/628?random=15",
    projectName: "Project Fifteen",
    urlWebsite: "https://project-fifteen.com",
    type: "Backend",
    startDate: "2023-08-01",
    endDate: "2023-10-10",
    designerName: "Rachel Blue",
    projectManagementName: "Matthew Green",
    clientName: "Client O",
    title: "Real Estate Listing System",
    projectDescription:
      "A comprehensive real estate listing system developed for Client O, designed to facilitate property listings and enhance user experience. The system features advanced search filters, virtual tours, and a user-friendly interface for both buyers and sellers. Data security and user privacy were prioritized, ensuring that sensitive information is protected. Collaboration with real estate professionals was essential in defining the features and functionalities, resulting in a system that effectively meets industry demands.",
  },
];

interface Blog {
  image: string; // URL of the blog image
  projectName: string; // Name of the project
  frameworkName: string; // Name of the framework used
  date: string; // Date in the format "day month year"
  description: string; // Description of the blog
}

// Sample blog data
export const projectBlogs: Blog[] = [
  {
    image: "https://picsum.photos/1200/628?random=1",
    projectName: "Building a Responsive Website",
    frameworkName: "Next.js",
    date: "15 October 2024",
    description:
      "A comprehensive guide on building responsive websites using Next.js with Tailwind CSS.",
  },
  {
    image: "https://picsum.photos/1200/628?random=2",
    projectName: "Creating RESTful APIs",
    frameworkName: "Express.js",
    date: "10 October 2024",
    description:
      "Learn how to create RESTful APIs with Express.js and connect them to a MongoDB database.",
  },
  {
    image: "https://picsum.photos/1200/628?random=3",
    projectName: "Getting Started with React",
    frameworkName: "React",
    date: "20 September 2024",
    description:
      "An introductory tutorial for beginners to get started with React and its core concepts.",
  },
  {
    image: "https://picsum.photos/1200/628?random=4",
    projectName: "Introduction to TypeScript",
    frameworkName: "TypeScript",
    date: "05 November 2024",
    description:
      "A beginner-friendly guide to understanding TypeScript and its benefits for JavaScript development.",
  },
  {
    image: "https://picsum.photos/1200/628?random=5",
    projectName: "Understanding Redux",
    frameworkName: "Redux",
    date: "25 August 2024",
    description:
      "Learn how to manage state in your applications using Redux and its core principles.",
  },
];

interface Item {
  imageUrl: string;
  title: string;
  description: string;
}

export const galleryList: Item[] = [
  {
    imageUrl: "https://picsum.photos/400/300?random=1",
    title: "Mountain Escape",
    description:
      "Experience the serenity of high altitudes and lush landscapes.",
  },
  {
    imageUrl: "https://picsum.photos/400/300?random=2",
    title: "Urban Adventure",
    description: "Explore the sights and sounds of vibrant city life.",
  },
  {
    imageUrl: "https://picsum.photos/400/300?random=3",
    title: "Desert Mirage",
    description: "Vast dunes and endless horizons await in the desert.",
  },
  {
    imageUrl: "https://picsum.photos/400/300?random=4",
    title: "Forest Retreat",
    description:
      "Immerse yourself in the beauty and tranquility of the forest.",
  },
  {
    imageUrl: "https://picsum.photos/400/300?random=5",
    title: "Coastal Getaway",
    description: "Relax by the sea and enjoy stunning ocean views.",
  },
  {
    imageUrl: "https://picsum.photos/400/300?random=6",
    title: "Mountain Escape",
    description:
      "Experience the serenity of high altitudes and lush landscapes.",
  },
  {
    imageUrl: "https://picsum.photos/400/300?random=7",
    title: "Urban Adventure",
    description: "Explore the sights and sounds of vibrant city life.",
  },
  {
    imageUrl: "https://picsum.photos/400/300?random=8",
    title: "Desert Mirage",
    description: "Vast dunes and endless horizons await in the desert.",
  },
  {
    imageUrl: "https://picsum.photos/400/300?random=9",
    title: "Forest Retreat",
    description:
      "Immerse yourself in the beauty and tranquility of the forest.",
  },
  {
    imageUrl: "https://picsum.photos/400/300?random=10",
    title: "Coastal Getaway",
    description: "Relax by the sea and enjoy stunning ocean views.",
  },
  {
    imageUrl: "https://picsum.photos/400/300?random=11",
    title: "Mountain Escape",
    description:
      "Experience the serenity of high altitudes and lush landscapes.",
  },
  {
    imageUrl: "https://picsum.photos/400/300?random=12",
    title: "Urban Adventure",
    description: "Explore the sights and sounds of vibrant city life.",
  },
  {
    imageUrl: "https://picsum.photos/400/300?random=13",
    title: "Desert Mirage",
    description: "Vast dunes and endless horizons await in the desert.",
  },
  {
    imageUrl: "https://picsum.photos/400/300?random=14",
    title: "Forest Retreat",
    description:
      "Immerse yourself in the beauty and tranquility of the forest.",
  },
  {
    imageUrl: "https://picsum.photos/400/300?random=15",
    title: "Coastal Getaway",
    description: "Relax by the sea and enjoy stunning ocean views.",
  },
];
