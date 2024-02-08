export interface MovieType {
  id: number;
  name: string;
  country: {
    name: string;
    code: string;
    timezone: string;
  };
  officialSite: string;
}

interface Rating {
  average: number;
}

interface Schedule {
  time: string;
  days: string[];
}

interface Image {
  medium: string;
  original: string;
}

interface Externals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

interface Links {
  self: {
    href: string;
  };
  previousepisode: {
    href: string;
  };
}

interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: any;
  webChannel: any; 
  dvdCountry: any; 
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}
