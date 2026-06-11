export interface PressRelease {
  year: number;
  releases: {
    title: string;
    date: string;
    englishUrl?: string;
    urduUrl?: string;
  }[];
}

export interface Advertisement {
  title: string;
  date: string;
  urls: {
    label: string;
    url: string;
  }[];
}

export interface Announcement {
  title: string;
  url: string;
  isPdf?: boolean;
}

export interface Circular {
  year: number;
  items: {
    type: 'Circular' | 'Letter';
    title: string;
    url: string;
    annexures?: { label: string; url: string }[];
  }[];
}
