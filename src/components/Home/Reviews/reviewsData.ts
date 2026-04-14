import { Review } from '@/types/review';

const reviewsData: Review[] = [
  {
    id: 1,
    userName: 'Marcus Chen',
    userDesignation: 'CTO, TechForward Solutions',
    userImage: '/images/user/user-01.png',
    description:
      'Danny brought exceptional technical leadership to our cloud migration project. His expertise with AWS and Azure made what seemed like an overwhelming transition smooth and efficient. Highly recommend.',
  },
  {
    id: 2,
    userName: 'Sarah Mitchell',
    userDesignation: 'VP of Engineering',
    userImage: '/images/user/user-09.png',
    description:
      'Working with Danny was a game-changer for our team. He designed a microservices architecture that scaled beautifully under load. His military discipline really shows in his attention to detail and reliability.',
  },
  {
    id: 3,
    userName: 'James Rodriguez',
    userDesignation: 'Product Manager',
    userImage: '/images/user/user-05.png',
    description:
      'Danny built our entire MERN stack application from the ground up. He was great at translating complex requirements into clean, maintainable code. The product shipped on time and has been rock-solid.',
  },
  {
    id: 4,
    userName: 'Lisa Thompson',
    userDesignation: 'CEO, VetTech Innovations',
    userImage: '/images/user/user-06.png',
    description:
      "As a veteran-owned business, we valued Danny's understanding of our mission. He delivered a cloud-based platform that transformed how we serve our community. His leadership of the dev team was outstanding.",
  },
  {
    id: 5,
    userName: 'David Park',
    userDesignation: 'Senior Developer',
    userImage: '/images/user/user-07.png',
    description:
      'Danny mentored me through the apprenticeship program at ERA Solutions. His ability to explain complex concepts and provide actionable feedback helped me grow from a junior dev into a confident full-stack developer.',
  },
  {
    id: 6,
    userName: 'Amanda Foster',
    userDesignation: 'Director of Operations',
    userImage: '/images/user/user-09.png',
    description:
      'Danny spearheaded our DevOps transformation, implementing CI/CD pipelines that cut deployment time by 60%. His Agile methodology adoption brought real structure and predictability to our sprints.',
  },
  {
    id: 7,
    userName: 'Robert Kim',
    userDesignation: 'Tech Lead',
    userImage: '/images/user/user-01.png',
    description:
      'Few developers can bridge the gap between technical execution and strategic thinking the way Danny does. He sees the bigger picture while still writing excellent code. A true asset to any engineering organization.',
  },
  {
    id: 8,
    userName: 'Jennifer Walsh',
    userDesignation: 'UX Design Lead',
    userImage: '/images/user/user-06.png',
    description:
      "Danny was one of the best developers I've collaborated with. He took our designs and built pixel-perfect React interfaces with smooth animations and excellent accessibility. Very thoughtful about the user experience.",
  },
  {
    id: 9,
    userName: 'Michael Torres',
    userDesignation: 'Engineering Manager',
    userImage: '/images/user/user-05.png',
    description:
      "Danny's REST API designs are among the cleanest I've seen. He built a set of Node.js microservices for our platform that handled 10x traffic growth without any issues. Solid engineer, even better leader.",
  },
  {
    id: 10,
    userName: 'Emily Sanders',
    userDesignation: 'Scrum Master',
    userImage: '/images/user/user-09.png',
    description:
      'Danny brought real Agile discipline to our team. His experience managing development workflows made our sprint planning and retrospectives much more productive. The team loved working with him.',
  },
  {
    id: 11,
    userName: 'Chris Nakamura',
    userDesignation: 'Cloud Architect',
    userImage: '/images/user/user-07.png',
    description:
      'Danny has a deep understanding of multi-cloud environments. He architected solutions across AWS, Azure, and GCP that were cost-effective and highly available. His Docker and CI/CD skills are top-notch.',
  },
  {
    id: 12,
    userName: 'Rachel Green',
    userDesignation: 'Startup Founder',
    userImage: '/images/user/user-06.png',
    description:
      'We hired Danny to build our MVP and he delivered beyond expectations. The React Native mobile app and Node.js backend he built allowed us to launch in half the time we planned. Incredibly efficient developer.',
  },
  {
    id: 13,
    userName: 'Thomas Wright',
    userDesignation: 'Fellow Veteran & Dev',
    userImage: '/images/user/user-01.png',
    description:
      "Danny's dedication to mentoring veteran developers through the Registered Apprenticeship Program changed my career. He understands the unique strengths vets bring to tech and helps us adapt those skills.",
  },
  {
    id: 14,
    userName: 'Nicole Patel',
    userDesignation: 'QA Lead',
    userImage: '/images/user/user-09.png',
    description:
      'Danny conducts thorough code reviews and champions best practices across the team. The code quality improved significantly under his leadership. He sets a high bar and helps everyone rise to meet it.',
  },
  {
    id: 15,
    userName: "Kevin O'Brien",
    userDesignation: 'Database Administrator',
    userImage: '/images/user/user-05.png',
    description:
      "Danny's database design skills across both SQL and MongoDB are impressive. He optimized our query performance by 40% and implemented a clean data migration strategy that had zero downtime.",
  },
  {
    id: 16,
    userName: 'Diana Morales',
    userDesignation: 'Product Owner',
    userImage: '/images/user/user-06.png',
    description:
      "What sets Danny apart is his ability to align technical initiatives with business goals. He doesn't just build features — he understands why they matter and delivers solutions that move the needle.",
  },
  {
    id: 17,
    userName: 'Brandon Lee',
    userDesignation: 'Junior Developer',
    userImage: '/images/user/user-07.png',
    description:
      'Danny is the manager every new developer hopes for. He invested real time in my growth, pair-programmed when I was stuck, and pushed me to learn cloud technologies early in my career. Grateful for his mentorship.',
  },
  {
    id: 18,
    userName: 'Samantha Cruz',
    userDesignation: 'HR Director',
    userImage: '/images/user/user-09.png',
    description:
      'Danny scaled our engineering department from the ground up. His hiring processes, onboarding workflows, and team culture initiatives were instrumental in building a cohesive, high-performing team of 37 developers.',
  },
  {
    id: 19,
    userName: 'Andrew Phillips',
    userDesignation: 'Solutions Architect',
    userImage: '/images/user/user-01.png',
    description:
      "Danny's versatility is rare. He can jump from writing Spring MVC controllers one day to optimizing React Native performance the next. His Java and .NET foundation gives him a breadth most JS developers lack.",
  },
  {
    id: 20,
    userName: 'Katherine Bell',
    userDesignation: 'Executive Director',
    userImage: '/images/user/user-06.png',
    description:
      'Danny collaborated with our executive team to align technology roadmaps with business strategy. He communicates complex technical decisions clearly and always keeps stakeholder needs front and center.',
  },
  {
    id: 21,
    userName: 'Greg Morrison',
    userDesignation: 'DevOps Engineer',
    userImage: '/images/user/user-05.png',
    description:
      'Danny set up our entire CI/CD pipeline from scratch using GitHub Actions and Docker. Deployments went from manual, error-prone processes to fully automated releases. His infrastructure knowledge is solid.',
  },
  {
    id: 22,
    userName: 'Olivia Barnes',
    userDesignation: 'Project Manager',
    userImage: '/images/user/user-09.png',
    description:
      'Danny consistently delivered projects on time and within scope. His military background gives him a unique ability to remain calm under pressure and lead teams through high-priority, tight-deadline situations.',
  },
  {
    id: 23,
    userName: 'Ryan Cooper',
    userDesignation: 'Frontend Developer',
    userImage: '/images/user/user-07.png',
    description:
      "Danny's React component architecture is incredibly well-thought-out. Working on his codebase was a pleasure \u2014 everything was modular, reusable, and well-documented. He raised the bar for our entire frontend team.",
  },
  {
    id: 24,
    userName: 'Maria Gonzalez',
    userDesignation: 'Client Success Manager',
    userImage: '/images/user/user-06.png',
    description:
      "Our clients consistently praised the applications Danny's team delivered. The quality of the work and the smooth user experiences spoke to his high standards and deep technical capabilities.",
  },
  {
    id: 25,
    userName: 'Daniel Hoffman',
    userDesignation: 'CIO',
    userImage: '/images/user/user-01.png',
    description:
      "Danny is one of those rare technology leaders who can execute at the code level while simultaneously thinking strategically about architecture and team development. He'd be an asset to any organization.",
  },
  {
    id: 26,
    userName: 'Tiffany Reed',
    userDesignation: 'Backend Developer',
    userImage: '/images/user/user-09.png',
    description:
      "Danny's Express.js and Node.js middleware implementations set the standard for our backend team. His code is always clean, well-tested, and performant. I learned more from his code reviews than from any course.",
  },
  {
    id: 27,
    userName: 'Patrick Sullivan',
    userDesignation: 'Software Architect',
    userImage: '/images/user/user-05.png',
    description:
      'Danny has an excellent grasp of both monolithic and microservices architectures. He knows when to keep things simple and when to distribute. His architectural decisions are always pragmatic and well-reasoned.',
  },
];

export default reviewsData;
