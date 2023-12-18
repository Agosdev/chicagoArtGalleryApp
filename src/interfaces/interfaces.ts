export interface IThumbnail {
  lqip: string;
  width: number;
  height: number;
  alt_text: string;
  place_of_origin: string;
  description: string;
  dimensions: string;
}

export interface IArtwork {
  id: number;
  api_model: string;
  api_link: string;
  is_boosted: boolean;
  title: string;
  alt_titles: string | null;
  thumbnail: IThumbnail;
  credit_line: string;
  description: string;
  publication_history: string;
  exhibition_history: string;
  gallery_title: string;
  artwork_type_title: string;
  department_title: string;
  artist_id: number;
  artist_title: string;
  timestamp: string;
}
