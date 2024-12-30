export interface InternshipListing {
  id: string;
  title: string;
  company: string;
  description: string;
  requirements: string[];
  duration: string;
  type: 'full-time' | 'part-time' | 'flexible';
  stipend?: number;
  location: string;
  skills: string[];
  status: 'open' | 'closed' | 'in-review';
  postedBy: string;
  postedAt: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  modules: CourseModule[];
  progress: number;
  certificate?: string;
}

export interface CourseModule {
  id: string;
  title: string;
  content: string;
  videoUrl?: string;
  resources: string[];
  quiz?: Quiz;
}

export interface Quiz {
  id: string;
  questions: Question[];
  passingScore: number;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface MentorshipProgram {
  id: string;
  title: string;
  mentorId: string;
  mentorName: string;
  description: string;
  expertise: string[];
  duration: string;
  price: number;
  availability: {
    days: string[];
    slots: string[];
  };
  rating?: number;
  reviews?: Review[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  timestamp: number;
}