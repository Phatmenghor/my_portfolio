interface Project {
  image: string; // URL of the project image
  projectName: string; // Name of the project
  urlWebsite: string; // URL of the project website
  type: string; // Type of the project
}

// Sample data with a variety of project types
export const projectsRecent: Project[] = [
  {
    image: "https://picsum.photos/200/300?random=1",
    projectName: "Project One",
    urlWebsite: "https://project-one.com",
    type: "Website",
  },
  {
    image: "https://picsum.photos/200/300?random=2",
    projectName: "Project Two",
    urlWebsite: "https://project-two.com",
    type: "App",
  },
  {
    image: "https://picsum.photos/200/300?random=3",
    projectName: "Project Three",
    urlWebsite: "https://project-three.com",
    type: "Backend",
  },
  {
    image: "https://picsum.photos/200/300?random=4",
    projectName: "Project Four",
    urlWebsite: "https://project-four.com",
    type: "Website",
  },
  {
    image: "https://picsum.photos/200/300?random=5",
    projectName: "Project Five",
    urlWebsite: "https://project-five.com",
    type: "App",
  },
  {
    image: "https://picsum.photos/200/300?random=6",
    projectName: "Project Six",
    urlWebsite: "https://project-six.com",
    type: "Backend",
  },
  {
    image: "https://picsum.photos/200/300?random=7",
    projectName: "Project Seven",
    urlWebsite: "https://project-seven.com",
    type: "Website",
  },
  {
    image: "https://picsum.photos/200/300?random=8",
    projectName: "Project Eight",
    urlWebsite: "https://project-eight.com",
    type: "App",
  },
  {
    image: "https://picsum.photos/200/300?random=9",
    projectName: "Project Nine",
    urlWebsite: "https://project-nine.com",
    type: "Backend",
  },
  {
    image: "https://picsum.photos/200/300?random=10",
    projectName: "Project Ten",
    urlWebsite: "https://project-ten.com",
    type: "Website",
  },
  {
    image: "https://picsum.photos/200/300?random=11",
    projectName: "Project Eleven",
    urlWebsite: "https://project-eleven.com",
    type: "App",
  },
  {
    image: "https://picsum.photos/200/300?random=12",
    projectName: "Project Twelve",
    urlWebsite: "https://project-twelve.com",
    type: "Backend",
  },
  {
    image: "https://picsum.photos/200/300?random=13",
    projectName: "Project Thirteen",
    urlWebsite: "https://project-thirteen.com",
    type: "Website",
  },
  {
    image: "https://picsum.photos/200/300?random=14",
    projectName: "Project Fourteen",
    urlWebsite: "https://project-fourteen.com",
    type: "App",
  },
  {
    image: "https://picsum.photos/200/300?random=15",
    projectName: "Project Fifteen",
    urlWebsite: "https://project-fifteen.com",
    type: "Backend",
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
    image: "https://picsum.photos/200/300?random=1",
    projectName: "Building a Responsive Website",
    frameworkName: "Next.js",
    date: "15 October 2024",
    description:
      "A comprehensive guide on building responsive websites using Next.js with Tailwind CSS.",
  },
  {
    image: "https://picsum.photos/200/300?random=2",
    projectName: "Creating RESTful APIs",
    frameworkName: "Express.js",
    date: "10 October 2024",
    description:
      "Learn how to create RESTful APIs with Express.js and connect them to a MongoDB database.",
  },
  {
    image: "https://picsum.photos/200/300?random=3",
    projectName: "Getting Started with React",
    frameworkName: "React",
    date: "20 September 2024",
    description:
      "An introductory tutorial for beginners to get started with React and its core concepts.",
  },
  {
    image: "https://picsum.photos/200/300?random=4",
    projectName: "Introduction to TypeScript",
    frameworkName: "TypeScript",
    date: "05 November 2024",
    description:
      "A beginner-friendly guide to understanding TypeScript and its benefits for JavaScript development.",
  },
  {
    image: "https://picsum.photos/200/300?random=5",
    projectName: "Understanding Redux",
    frameworkName: "Redux",
    date: "25 August 2024",
    description:
      "Learn how to manage state in your applications using Redux and its core principles.",
  },
];
