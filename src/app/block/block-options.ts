import { Block } from "./block"
import { TRAITS } from "../trait/trait-options"

export const BLOCKS: Block[] = [
    // CATEGORY 1: EDUCATION
    {
        category: 1, // education
        title: 'University of Colorado - Boulder',
        titleLink:'',
        date: '08/21-05/25',
        subtitle: 'B.A. Computer Science, B.A. Economics',
        bulletedInfo: ['Enrolled in the College of Engineering & Applied Science','Cumulative GPA: 3.67/4.00'],
        traits: []
    },
    {
        category: 1, // education
        title: 'Pattonville High School',
        titleLink:'https://www.psdr3.org/news/80-district/554-pattonville-high-school-recognizes-top-10-in-class-of-2021',
        date: '08/17-05/21',
        subtitle: 'High School Diploma',
        bulletedInfo: ['Graduated 5th in class with summa cum laude honors','Cumulative GPA: 4.0/4.0'],
        traits: []
    },


    // CATEGORY 2: COURSEWORK
    {
        category: 2, // coursework
        title: 'CSCI 1300',
        titleLink: '',
        date: 'Fall 2021',
        subtitle: 'Computer Science 1: Starting Computing',
        bulletedInfo: ['Language(s): C++','Teaches techniques for writing computer programs in higher level programming languages to solve problems of interest in a range of application domains. Appropriate for students with little to no experience in computing or programming.'],
        traits: [
            TRAITS[0] // C++
        ]
    },
    {
        category: 2, // coursework
        title: 'CSCI 2700',
        titleLink: '',
        date: 'Spring 2022',
        subtitle: 'Computer Science 2: Data Structures',
        bulletedInfo: ['Language(s): C++','Studies data abstractions (e.g., stacks, queues, lists, trees, graphs, heaps, hash tables, priority queues) and their representation techniques (e.g., linking, arrays). Introduces concepts used in algorithm design and analysis including criteria for selecting data structures to fit their applications.','Final project was to create an interface for a cryptocurrency blockchain called BuffCUoin (see Projects).'],
        traits: [
            TRAITS[0] // C++
        ]
    },
    {
        category: 2, // coursework
        title: 'CSCI 2400',
        titleLink: '',
        date: 'Fall 2022',
        subtitle: 'Computer Systems',
        bulletedInfo: ['Language(s): C++','Covers how programs are represented and executed by modern computers, including low-level machine representations of programs and data, an understanding of how computer components and the memory hierarchy influence performance.'],
        traits: [
            TRAITS[0] // C++
        ]
    },
    {
        category: 2, // coursework
        title: 'CSCI 2824',
        titleLink: '',
        date: 'Fall 2022',
        subtitle: 'Discrete Structures',
        bulletedInfo: ['Language(s): C++','Covers foundational materials for computer science that is often assumed in advanced courses. Topics include set theory, Boolean algebra, functions and relations, graphs, propositional and predicate calculus, proofs, mathematical induction, recurrence relations, combinatorics, discrete probability.'],
        traits: [
            TRAITS[0] // C++
        ]
    },
    {
        category: 2, // coursework
        title: 'CSCI 2820',
        titleLink: '',
        date: 'Spring 2023',
        subtitle: 'Linear Algebra with CS Applications',
        bulletedInfo: ['Language(s): C++','Introduces the fundamentals of linear algebra in the context of computer science applications. Includes vector spaces, matrices, linear systems, and eigenvalues. Includes the basics of floating point computation and numerical linear algebra.'],
        traits: [
            TRAITS[0] // C++
        ]
    },
    {
        category: 2, // coursework
        title: 'CSCI 3308',
        titleLink: '',
        date: 'Spring 2023',
        subtitle: 'Software Development Methods and Tools',
        bulletedInfo: ['Language(s): HTML/CSS','Covers tools and techniques for successful software development with a strong focus on best practices used in industry. Students work in small teams to complete a semester-long application development project. Students learn front-end design and construction using HTML & CSS, back-end database design and construction, and full-stack integration. Students gain exposure to agile methodologies, web services, distributed version control, requirements definition, automated integration testing, and cloud-based application deployment.'],
        traits: [
            TRAITS[6], // HTML/CSS
            TRAITS[14], // Front-End
            TRAITS[15], // Back-End
            TRAITS[16], // Full-Stack
            TRAITS[17] // Cloud
        ]
    },


    // CATEGORY 3: PROJECTS
    {
        category: 3, // project
        title: 'Personal Website',
        titleLink: '',
        date: '05/22-Present',
        subtitle: 'Creator',
        bulletedInfo: ['Languages/Platforms Used: Angular, HTML/CSS, Angular Material.','From scratch, created personal website to showcase resume and provide contact portal.'],
        traits: [
            TRAITS[6], // HTML/CSS
            TRAITS[7], // Angular
            TRAITS[10], // Creativity
            TRAITS[14], // Front End
            TRAITS[18] // TypeScript
        ]
    },
    {
        category: 3, // project
        title: 'Buff CUoin',
        titleLink: '',
        date: '04/21',
        subtitle: 'Co-Creator',
        bulletedInfo: ['Languages/Platforms Used: C++.','Worked with partner to create a mock cryptocurrency blockchain. Created for CSCI 2700 as final project.'],
        traits: [
            TRAITS[0], // C++
            TRAITS[9], // Collaboration
        ] 
    },
    {
        category: 3, // project
        title: 'Pinventory',
        titleLink: 'https://github.com/sko-grace/public-git/tree/main/pinventory_backend-main',
        date: '08/20-05/21',
        subtitle: 'Backend Lead',
        bulletedInfo: ['Languages/Platforms Used: JavaScript, NodeJS, PostreSQL.','Led team of 3 to create back-end for textbook inventory web portal (Angular front-end).'],
        traits: [
            TRAITS[1],
            TRAITS[2],
            TRAITS[8],
            TRAITS[9],
            TRAITS[10],
            TRAITS[11],
            TRAITS[15],
            TRAITS[19]
        ] 
    },


    // CATEGORY 4: WORK EXPERIENCE
    {
        category: 4, // work experience
        title: 'Disability Services - CU Boulder',
        titleLink: 'https://www.colorado.edu/disabilityservices/',
        date: '02/22-Present',
        subtitle: 'Flex Plan/ Note-Taking Assistant',
        bulletedInfo: ['Assisted with Flex Plan', 'Assisted with Note-Taking'],
        traits: [
            TRAITS[9],
            TRAITS[11],
            TRAITS[13], 
        ] 
    },
    {
        category: 4, // work experience
        title: 'Ryze Adventure Park',
        titleLink: 'https://ryzeadventure.com/',
        date: '05/22-08/22',
        subtitle: 'Adventure Guide',
        bulletedInfo: ['Ensured safety of guests by harnessing, providing safety briefings, and monitoring course','Motivate and coach guests to push boundaries and attempt difficult obstacles'],
        traits: [
            TRAITS[9],
            TRAITS[11]
        ] 
    },
    {
        category: 4, // work experience
        title: 'The Quarry at Crystal Springs',
        titleLink: 'https://www.quarrygc.com/',
        date: '05/21-08/22',
        subtitle: 'Customer Service Attendant',
        bulletedInfo: ['Provided customer service to golfers by supplying concessions and ensuring customer satisfaction.','In charge of speaking with dozens of golfers a day and organizing reservations for tee times.'],
        traits: [
            TRAITS[11]
        ] 
    },
    {
        category: 4, // work experience
        title: 'Jake\'s On Main',
        titleLink: 'https://www.facebook.com/jakesonmain/',
        date: '02/19-08/21',
        subtitle: 'Cashier/ Social Media Assistant',
        bulletedInfo: ['Managed merchandise sales as well as organized order shipments.','Created and managed content for Instagram, Facebook, and VSCO social media pages to maximize online presence.'],
        traits: [
            TRAITS[10],
            TRAITS[11]
        ] 
    },
    {
        category: 4, // work experience
        title: 'The Sheridan at Creve Coeur',
        titleLink: 'https://bridgeseniorliving.com/community/the-grande-at-creve-coeur/',
        date: '05/18-01/19',
        subtitle: 'Server',
        bulletedInfo: ['Delivered care for dementia and memory-care residents by providing breakfast, lunch, and dinner.','Went beyond basic duties by helping kitchen staff with cleaning and helping nurses with the needs of residents.'],
        traits: [
            TRAITS[9],
            TRAITS[11]
        ] 
    }
]