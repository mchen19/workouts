interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Workouts Map',
  siteUrl: 'https://run.mchen.xyz',
  logo: 'https://avatars.githubusercontent.com/u/40784883?v=4',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://mchen.xyz',
    },
    {
      name: 'About',
      url: 'https://mchen.xyz/#about',
    },
  ],
};

export default data;
