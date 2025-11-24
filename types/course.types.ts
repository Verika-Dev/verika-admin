export interface Course {
  _id: string;
  title: string;
  subject: string;
  syllabus: string;
  price: number;
  isPublished: boolean;
  creator: string | null;
  lessons: any[];
  reviews: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface GetCoursesResponse {
  status?: string;
  message?: string;
  data?: Course[];
}
