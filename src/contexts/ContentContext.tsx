import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Default content for all pages
const defaultContent = {
  home: {
    heroTitle: "Sri Sathya Sai Baba Pre-University College",
    heroSubtitle: "Jayalakshmipuram, Mysuru",
    heroTagline: "Value-based Quality Education",
    heroDescription: "Nurturing minds, building character, and shaping futures through holistic education rooted in human values.",
    whyUs: {
      title: "Why SSSBPUC?",
      description: "Our institution stands apart with its unique blend of academic excellence and value-based education.",
      points: [
        "Experienced and dedicated faculty",
        "State-of-the-art infrastructure",
        "Focus on holistic development",
        "Strong emphasis on human values"
      ]
    },
    courses: {
      title: "Courses Offered",
      description: "Comprehensive pre-university programs designed for success",
      items: ["Science Stream (PCMB/PCMC)", "Commerce Stream", "Arts/Humanities"]
    },
    holistic: {
      title: "Holistic Development",
      description: "Beyond academics, we nurture complete individuals",
      points: ["Sports & Physical Education", "Cultural Activities", "Community Service", "Spiritual Growth"]
    },
    announcements: [
      { title: "Admissions Open 2024-25", date: "December 2024", description: "Applications are now being accepted for the new academic year." },
      { title: "Annual Day Celebration", date: "January 2025", description: "Join us for our annual cultural extravaganza." },
      { title: "Science Exhibition", date: "February 2025", description: "Showcase of student innovations and projects." }
    ]
  },
  academics: {
    intro: {
      title: "Academic Excellence",
      description: "Our academic programs are designed to provide students with a strong foundation for higher education and professional success. We combine rigorous academics with practical learning experiences."
    },
    streams: [
      {
        name: "Science Stream",
        description: "Preparing future scientists, engineers, and medical professionals with a strong foundation in sciences.",
        subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science", "English", "Kannada/Hindi"],
        features: ["Well-equipped laboratories", "Experienced faculty", "Regular practical sessions", "Excellent board results"]
      },
      {
        name: "Commerce Stream",
        description: "Building future business leaders and financial experts with comprehensive commerce education.",
        subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics/Statistics", "English", "Kannada/Hindi"],
        features: ["Industry exposure", "Business case studies", "Financial literacy programs", "Career guidance"]
      },
      {
        name: "Arts/Humanities",
        description: "Fostering critical thinking and cultural awareness for future leaders and scholars.",
        subjects: ["History", "Political Science", "Sociology", "Economics", "English", "Kannada/Hindi"],
        features: ["Research projects", "Field visits", "Guest lectures", "Debate competitions"]
      }
    ],
    calendar: {
      title: "Academic Calendar Highlights",
      events: [
        { event: "First Term Begins", date: "June" },
        { event: "Mid-term Examinations", date: "September" },
        { event: "Second Term Begins", date: "November" },
        { event: "Annual Examinations", date: "March" }
      ]
    }
  },
  gallery: {
    title: "Photo Gallery",
    description: "Glimpses of life at Sri Sathya Sai Baba PU College",
    categories: ["All", "Events", "Classrooms", "Laboratories", "Sports & Cultural"],
    images: [
      { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400", caption: "Annual Day Celebration", category: "Events" },
      { url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400", caption: "Modern Classrooms", category: "Classrooms" },
      { url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400", caption: "Science Laboratory", category: "Laboratories" },
      { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400", caption: "Library", category: "Classrooms" },
      { url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400", caption: "Sports Activities", category: "Sports & Cultural" },
      { url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400", caption: "Computer Lab", category: "Laboratories" },
      { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400", caption: "Cultural Program", category: "Sports & Cultural" },
      { url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400", caption: "Study Environment", category: "Classrooms" }
    ]
  },
  campusLife: {
    title: "Campus Life",
    description: "Experience a vibrant campus environment that nurtures growth beyond academics",
    sections: [
      {
        title: "Laboratories",
        description: "State-of-the-art laboratories for Physics, Chemistry, Biology, and Computer Science provide hands-on learning experiences.",
        icon: "flask"
      },
      {
        title: "Library",
        description: "A well-stocked library with thousands of books, journals, and digital resources to support learning and research.",
        icon: "book"
      },
      {
        title: "Sports & Games",
        description: "Comprehensive sports facilities including basketball court, volleyball, badminton, and indoor games for physical fitness.",
        icon: "trophy"
      },
      {
        title: "Cultural Activities",
        description: "Regular cultural programs, music, dance, and art activities to nurture creative talents.",
        icon: "music"
      },
      {
        title: "Value Education",
        description: "Daily value education classes and spiritual activities rooted in the teachings of Sri Sathya Sai Baba.",
        icon: "heart"
      },
      {
        title: "NSS & Community Service",
        description: "Active NSS unit engaging students in community service and social welfare activities.",
        icon: "users"
      }
    ],
    saturdayActivities: [
      "Bhajan sessions and spiritual discourse",
      "Sports tournaments and competitions",
      "Cultural practice and performances",
      "Community service activities",
      "Career counseling sessions"
    ]
  },
  about: {
    title: "About Us",
    history: "Sri Sathya Sai Baba Pre-University College, Jayalakshmipuram, Mysuru, was established with the vision of providing value-based quality education. The institution is inspired by the teachings of Bhagawan Sri Sathya Sai Baba and is committed to the holistic development of students.",
    vision: "To be a center of excellence in education that nurtures academically proficient, morally upright, and socially responsible citizens.",
    mission: [
      "To provide quality education accessible to all sections of society",
      "To instill human values and ethical principles in students",
      "To foster holistic development through academics, sports, and cultural activities",
      "To create an environment conducive to learning and personal growth"
    ],
    principalMessage: "Dear Students and Parents, Welcome to Sri Sathya Sai Baba Pre-University College. Our institution is dedicated to providing not just academic excellence but also character building based on human values. We believe in nurturing the complete individual - mind, body, and spirit. Join us in this journey of learning and transformation.",
    contact: {
      address: "Sri Sathya Sai Baba PU College, Jayalakshmipuram, Mysuru, Karnataka - 570012",
      phone: "+91 821 2345678",
      email: "contact@sssbpuc.edu.in"
    }
  },
  admission: {
    title: "Admissions",
    description: "Join our community of learners and begin your journey towards excellence",
    eligibility: [
      "Must have passed SSLC/10th standard from a recognized board",
      "Minimum 50% aggregate marks (relaxation for reserved categories as per norms)",
      "Age should not exceed 18 years as of June 1st of the admission year"
    ],
    documents: [
      "SSLC/10th Marks Card (Original and 2 copies)",
      "Transfer Certificate from previous school",
      "Study Certificate",
      "4 recent passport-size photographs",
      "Caste Certificate (if applicable)",
      "Aadhar Card copy",
      "Parent/Guardian ID proof"
    ],
    streams: ["Science (PCMB)", "Science (PCMC)", "Commerce", "Arts/Humanities"],
    instructions: "Please fill out the form below to initiate your admission process. Our team will contact you for further verification and document submission."
  }
};

type ContentType = typeof defaultContent;

interface ContentContextType {
  content: ContentType;
  updateContent: (section: keyof ContentType, data: any) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

const STORAGE_KEY = 'sssbpuc_content';

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ContentType>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return { ...defaultContent, ...JSON.parse(stored) };
      } catch {
        return defaultContent;
      }
    }
    return defaultContent;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  }, [content]);

  const updateContent = (section: keyof ContentType, data: any) => {
    setContent(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const resetContent = () => {
    setContent(defaultContent);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}

export { defaultContent };
