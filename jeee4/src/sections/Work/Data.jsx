import Work1 from '../../assets/barangay-profiling-system-preview.png';
import Work2 from '../../assets/orderizz-preview.png';
import Work3 from '../../assets/cvsu-website-preview.png';
import Work4 from '../../assets/codev-preview.png';
import Work5 from '../../assets/student-records-preview.png';
import orderizz from '../../assets/OrderManagementSystem.pdf';
import studentRecords from '../../assets/Cavite State University - Bacoor City Campus Student Records System.pdf';
import barangayProfiling from '../../assets/Barangay-Profiling-System.pdf';
import work6 from '../../assets/enrollment-system-landing-page.png';
import enrollmentSystem from '../../assets/Cavite State University - Enrollment System.pdf';
import work7 from '../../assets/finding-needmo-landing-page.png'
import work8 from '../../assets/kix.png'; 


export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Molino VI Profiling",
    demoLink: barangayProfiling, 
    category: "web",
  },
  {
    id: 2,
    image: Work2,
    title: "Orderizz",
    demoLink: orderizz,
    category: "app",
  },
  {
    id: 3,
    image: Work3,
    title: "CvSU Website",
    demoLink: 'https://gerlyntan07.github.io/group1_cvsuwebsite/?fbclid=IwY2xjawGdQSRleHRuA2FlbQIxMAABHfpcmQ7Mq-BdhauOethlANaIJR2Ozm8tTQHvpUIY_qwql9R-phNtMG8YSQ_aem_EO8upA-uK28aarWm9DmfIw',
    category: "web",
  },
  {
    id: 4,
    image: Work4,
    title: "Codev",
    demoLink: 'https://gerlyntan07.github.io/codev/?fbclid=IwY2xjawGdQP5leHRuA2FlbQIxMAABHWKbtQnvP4Uq0tccg8HdgverlRyI8gbAx5h-ItU5-BGfNy9hHXeSeleJMw_aem_vpwtnge334qrc4L_3XaIbQ#About',
    category: "web",
  },
  {
    id: 5,
    image: Work5,
    title: "CvSU Student Records",
    demoLink: studentRecords, // Adjusted path
    category: "web",
  },
  {
    id: 6,
    image: work6,
    title: "CvSU Enrollment System",
    demoLink: enrollmentSystem, // Adjusted path
    category: "web",
  },
  {
    id: 7,
    image: work7,
    title: "Finding NeedMo",
    demoLink: 'https://drive.google.com/drive/u/0/folders/1VyrYHTOFeAZHVws4cd7rH-y12PnqriNJ', // Adjusted path
    category: "web",
  },
  {
    id: 8,
    image: work8,
    title: "Kix",
    demoLink: 'https://kix-ten.vercel.app/',
    category: "web",
  }
];

export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'web',
  },
  {
    name: 'app',
  },
  {
    name: 'design',
  }
];
