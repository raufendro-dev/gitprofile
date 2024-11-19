// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'raufendro-dev', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },

    },
    // external: {
    //   header: 'My Projects',
    //   // To hide the `External Projects` section, keep it empty.
    //   projects: [
    //     {
    //       title: 'Project Name',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //     {
    //       title: 'Project Name',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //   ],
    // },
  },
  seo: {
    title: 'Rauf Endro Widagdo',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'rauf-endro-widagdo',
    instagram: 'raufendro',
    medium: 'raufendro',
    website: 'http://www.raufendro.id',
    email: 'raufendro@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Dart',
    'Flutter',
    'Python',
    'Node.js',
    'MySQL',
    'SQL',
    'Git',
    'Docker',
  ],
  experiences: [
    {
      company: 'PT Citraweb Solusi Teknologi',
      position: 'Mobile Developer',
      from: 'July 2023',
      to: 'Present',
      companyLink: 'https://citraweb.com/',
    },
    {
      company: 'PT Citraweb Digital Multisolusi',
      position: 'Mobile Developer',
      from: 'January 2023',
      to: 'July 2023',
      companyLink: 'https://example.com',
    },
    {
      company: 'PT Unisia Tera Medika',
      position: 'IT Specialist RS JIH',
      from: 'September 2021',
      to: 'December 2022',
      companyLink: 'https://evizia.id/',
    },
  ],

  educations: [
    {
      institution: 'Universitas Islam Indonesia',
      degree: "Bachelor's degree, Computer Science",
      from: '2016',
      to: '2020',
    },

  ],

  // Display articles from your medium or dev account. (Optional)

  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'dracula'

    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
