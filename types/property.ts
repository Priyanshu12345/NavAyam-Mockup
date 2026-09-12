export interface Property {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  location: string;
  city: string;
  state: string;
  type: 'Residential Plot' | 'Villa Plot' | 'Land Parcel';
  status: 'available' | 'sold';
  price: string;
  priceNumeric: number; // in Lakhs
  size: string;
  sizeSqFt: number;
  roadWidth: string;
  facing: string;
  approval: string;
  coverImage: string;
  galleryImages: string[];
  description: string;
  shortDescription: string;
  highlights: string[];
  nearbyLandmarks: {
    name: string;
    distance: string;
    category: 'transport' | 'school' | 'hospital' | 'retail';
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface PropertyFilterState {
  searchQuery: string;
  location: string;
  propertyType: string;
  priceRange: string;
  sizeRange: string;
  availability: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  avatar: string;
  propertyPurchased: string;
  year: string;
}
