export interface Course {
  id: string;
  title: string;
  isBestseller: boolean;
  thumbnail: {
    src: string;
    alt: string;
  };
  instructor: {
    name: string;
    avatar: string;
  };
  metrics: {
    rating: number;
    reviewCount: number;
  };
  price: number;
  currency: string;
}
