import type * as i from '$lib/types';
import gitlFeatured from '$lib/assets/projects/gitl/featured.png?width=600;900;1200;1600&format=webp;png&picture&imagetools';
import gitlDealsDevices from '$lib/assets/projects/gitl/deals_devices.png?width=600;900;1200;1600&format=webp;png&picture&imagetools';
import gitlSpotlightEmailTablet from '$lib/assets/projects/gitl/spotlight_email_tablet.png?width=600;900;1200;1600&format=webp;png&picture&imagetools';
import gitlLocalBusiness from '$lib/assets/projects/gitl/local_business.png?width=600;900;1200;1600&format=webp;png&picture&imagetools';
import deepFeatured from '$lib/assets/projects/deep/featured.png?width=600;900;1200;1600&format=webp;png&picture&imagetools';
import deepTech from '$lib/assets/projects/deep/tech.png?width=600;900;1200;1600&format=webp;png&picture&imagetools';
import deepLogo from '$lib/assets/projects/deep/splashscreen.png?width=600;900;1200;1600&format=webp;png&picture&imagetools';
import deepDevices from '$lib/assets/projects/deep/device_mashup.png?width=600;900;1200;1600&format=webp;png&picture&imagetools';
import deepOffline from '$lib/assets/projects/deep/offline.png?width=600;900;1200;1600&format=webp;png&picture&imagetools';
import deepBreaker from '$lib/assets/projects/deep/breaker.jpeg?width=600;900;1200;1600&format=webp;png&picture&imagetools';
import deepMetrics from '$lib/assets/projects/deep/metrics.png?width=600;900;1200;1600&format=webp;png&picture&imagetools';
import zelfFeatured from '$lib/assets/projects/zelfnl/featured.png?width=600;900;1200;1600&format=webp;png&picture&imagetools';
import zelfDashboardDevices from '$lib/assets/projects/zelfnl/dashboard_devices.png?width=600;900;1200;1600&format=webp;png&picture&imagetools';
import zelfLogo from '$lib/assets/projects/zelfnl/zelf.jpg?width=600;900;1200;1600&format=webp;png&picture&imagetools';
import boardbatchFilteredSearch from '$lib/assets/projects/boardbatch/271shots_so.png?width=2400&format=webp;png&picture&imagetools';
import boardbatchThemeable from '$lib/assets/projects/boardbatch/themeable.png?width=2400&format=webp;png&picture&imagetools';
import boardbatchDarkMode from '$lib/assets/projects/boardbatch/darkmode.png?width=2400&format=webp;png&picture&imagetools';
import boardbatchBoardlist from '$lib/assets/projects/boardbatch/boardlist.png?width=2400&format=webp;png&picture&imagetools';
import boardbatchPromoted from '$lib/assets/projects/boardbatch/promoted.png?width=2400&format=webp;png&picture&imagetools';
import boardbatchJobPostingSchema from '$lib/assets/projects/boardbatch/jobpostingschema.png?width=2400&format=webp;png&picture&imagetools';
import boardbatchFiltered from '$lib/assets/projects/boardbatch/filtered.png?width=2400&format=webp;png&picture&imagetools';
import boardbatchBlog from '$lib/assets/projects/boardbatch/blog.png?width=2400&format=webp;png&picture&imagetools';

// Move to a headless cms one day, probably, maybe..
const projects: i.Project[] = [
  {
    slug: 'boardbatch',
    title: 'BoardBatch.com',
    subtitle: 'Powering niche job boards',
    links: [
      {
        title: 'osintjob.com',
        url: 'https://osintjob.com/',
      },
      {
        title: 'dsworker.com',
        url: 'https://dsworker.com/',
      },
      {
        title: 'allweb3jobs.com',
        url: 'https://allweb3jobs.com/',
      },
      {
        title: 'reeemote.com',
        url: 'https://reeemote.com/',
      },
      {
        title: 'internshippers.com',
        url: 'https://internshippers.com/',
      },
      {
        title: 'Landing page',
        url: 'https://boardbatch.com/',
      },
    ],
    img: {
      type: 'image',
      sources: boardbatchThemeable,
      alt: 'Featured image of project BoardBatch',
    },
    category: 'Web App',
    summary: `BoardBatch is my "IndieHacker" side-project, created out of a need from people around me, it aims to bring niche jobs to the surface. Usually buried under the noise of promoted, corporate, "ghost" or simply fake job listings, BoardBatch gathers, filters and processes jobs directly from companies job pages and brings those to the forefront. Initially targeting the niche of Open-Source Intelligence (OSINT), I discovered I could apply the same techniques to create a more generic solution that targets any niche with ease. From there I have launched several job boards as my testing grounds, which receive about 500-1000 unique monthly visitors and curently serve a combined total of about 80.000 live job listings at any given time. To prototype and iterate quickly, I've used SvelteKit, Supabase (PostgreSQL) and Cloudflare Workers, and run several scraping Node.js scripts on a simple Hetzner VPS. `,
    tags: [
      'Svelte/ SvelteKit',
      'Tailwind',
      'PostgreSQL',
      'Node.js',
      'TypeScript',
      'Cloudflare Workers, KV',
    ],
    detail: [
      {
        title: 'A passion project to help others',
        description: 'BoardBatch is 100% free to use and provides an accessible user interface that allows job seekers to quickly find companies hiring in their niche. It gives them all the tools they need in order to stay on top of opportunities, such as saving filters to "collections" and being notified of new roles matching their preferences.',
        media: [
          [
            { type: 'image', sources: boardbatchFilteredSearch, alt: 'Screenshot of a filtered search on a BoardBatch job board' },
          ],
        ],
      },
      {
        title: 'Identity',
        description: `My vision for BoardBatch is for each niche board to be run by an expert in that niche. This "board owner" would then be responsible for curating the jobs, and marketing the board to the right audience. Each niche would be part of the BoardBatch network, but embrace their own identity and brand. Each board can therefore be themed to fit their branding. Dark-mode is also fully supported.`,
        media: [
          [
            { type: 'image', sources: boardbatchThemeable, alt: 'Screenshot of a several themed boards on BoardBatch' },
            { type: 'image', sources: boardbatchPromoted, alt: 'Screenshot of promoted job listings on BoardBatch' },
            { type: 'image', sources: boardbatchBoardlist, alt: 'Screenshot of several job boards that are powered by BoardBatch' },
            { type: 'image', sources: boardbatchDarkMode, alt: 'Screenshot of a job board in dark mode' },
          ],
        ],
      },
      {
        title: 'Filterable. Discoverable.',
        description: 'Do you really need to sift through a thousand listings to find a job? I believe not. By filtering on criteria that actually matter to the job seeker, BoardBatch serverely limits the results to listings that are truly relevant to the user. All postings are also made available to other job search systems (Google Jobs), by exposing a complete JobPosting schema to these systems. This allows users to discover these listings through other platforms as well.',
        media: [
          [
            { type: 'image', sources: boardbatchFiltered, alt: 'Screenshot of a filtered search on BoardBatch' },
            { type: 'image', sources: boardbatchJobPostingSchema, alt: 'Screenshot of code describing a job posting schema' },
          ],
        ],
      },
      {
        title: 'Blog',
        description: 'To support board owners in their marketing efforts, BoardBatch allows them to write blogs or informational postings that inform their users, and improve the brand\'s position in search results. Optimized for SEO, these postings can provide valuable insights and information about the niche industry that the job seeker is trying to break into.',
        media: [
          [
            { type: 'image', sources: boardbatchBlog, alt: 'Screenshot of a blog post on a job board' },
          ],
        ],
      },
    ],
  },
  {
    slug: 'getintheloop',
    title: 'GetintheLoop Canada',
    subtitle: 'Shopping local made easy',
    links: [
      {
        title: 'View live app',
        url: 'https://getintheloop.ca/deals/',
      },
    ],
    img: {
      type: 'image',
      sources: gitlFeatured,
      alt: 'Featured image of project GetintheLoop',
    },
    category: 'App / Site',
    summary: `GetintheLoop is a digital shop-local community that makes it easier to discover offers and rewards while supporting local businesses. As the day-to-day owner of the app's cloud infrastructure, I was responsible for changes to our API's, scheduled background tasks and overall maintenance to ensure the platform's smooth operation This included addressing and resolving critical issues, from e-mail sending failures to server downtime. Additionally, I led a small frontend team to rewrite the legacy Angular.js web app to React/ Next.js, resulting in a significant increase in user retention. The web app can be accessed at getintheloop.ca/deals.`,
    tags: [
      'Node.js',
      'Google Cloud',
      'Next.js',
      'React',
      'TypeScript',
    ],
    detail: [
      {
        title: 'Web App Rewrite 🚀',
        description: 'One of the projects I was responsible for was rewriting the legacy Angular.js web-app to React/Next.js, resulting in a significant improvements in performance and a better mobile user experience for those not using the native app.',
        media: [
          [
            { type: 'image', sources: gitlDealsDevices, alt: 'GetintheLoop deals page' },
          ],
        ],
      },
      {
        title: 'Push & Email',
        description: `I implemented and managed scheduled jobs that generated highly personalized email and push notifications for GetintheLoop users. These notifications were tailored to the user's location, preferences, and offers in their area. This lead to improved conversion and retention rates and allowed us to schedule-send hundreds of thousands of notifications a day.`,
        media: [
          [
            { type: 'image', sources: gitlSpotlightEmailTablet, alt: 'GetintheLoop business spotlight email' },
            { type: 'image', sources: gitlLocalBusiness, alt: 'Local Business' },
          ],
        ],
      },
      {
        title: 'Internal Tooling',
        description: 'I developed a suite of internal tools for GetintheLoop, which gave us the ability to effectively manage the active markets, control offers that are featured in certain areas, and gain valuable insights into the performance and growth of the business.',
        media: [
          [
            { type: 'video', url: '/video/gitl_market_expansion.mp4', videoType: 'video/mp4' },
          ],
        ],
      },
    ],
  },
  {
    slug: 'deep-pwa',
    title: 'Deep PWA',
    subtitle: 'Optimizing Ocean Survey Operations',
    links: [],
    img: {
      type: 'image',
      sources: deepFeatured,
      alt: 'Featured image of project at Deep BV',
    },
    category: 'App',
    summary: 'The Deep Progressive Web App (PWA) streamlines internal processes for the survey company Deep BV. Specializing in hydrography, geophysics, and oceanography, the company operates its own fleet of vessels and uses high-standard equipment to provide clients with high-quality data for reliable insights into the underwater world. Deep PWA was designed and developed from scratch, enabling "Deepers" to efficiently track their high-end equipment, report safety hazards, declare expenses, share files and provide customer feedback reports. It not only improves the company\'s internal processes but also enhances the overall employee experience. The development and optimization of this app demonstrates the ability to create efficient, user-friendly and valuable solutions. It has resulted in major cost savings for the company through automation of manual tasks and improved organization and management of data.',
    tags: [
      'Angular',
      'Rxjs',
      'TypeScript',
      'Firebase', 
      'Google Cloud',
      'PWA',
    ],
    detail: [
      {
        title: 'Tried-and-tested',
        description: 'One of my primary responsibilities was to set up a cross-platform app with minimal operating costs and to build upon tried-and-tested frameworks. Within days we had started iterating prototypes.',
        media: [
          [
            { type: 'image', sources: deepTech, alt: 'Project technologies' },
            { type: 'image', sources: deepLogo, alt: 'Deep logo' },
          ],
          [
            { type: 'image', sources: deepDevices, alt: 'Deep app on multiple devices' },
          ],
        ],
      },
      {
        title: 'Offshore? Offline. ✅',
        description: 'Designed to ensure uninterrupted operations in remote locations by allowing users to access and submit important data while offline and automatically synchronizing when back online. This feature allows for efficient and effective operations even when working offshore.',
        media: [
          [
            { type: 'image', sources: deepOffline, alt: 'Deep App functioning offline' },
            { type: 'image', sources: deepBreaker, alt: 'Survey ship' },
          ],
        ],
      },
      {
        title: 'Cloud Monitoring',
        description: 'Being the sole developer of Deep PWA, I stay informed and am able to quickly respond to failures using Cloud Monitoring. It helps me work proactively and confidently to ensure the application and it\'s services remain available and performant for Deep\'s users.',
        media: [
          [
            { type: 'image', sources: deepMetrics, alt: 'Cloud Monitoring graphs' },
          ]
        ],
      },
    ],
  },
  {
    slug: 'label-a',
    title: 'Zelf.nl',
    subtitle: 'Helping the self-employed succeed',
    links: [
      {
        url: 'https://zelf.nl/',
        title: 'View site',
      },
    ],
    img: {
      type: 'image',
      sources: zelfFeatured,
      alt: 'Featured image of project Zelf.nl',
    },
    category: 'Website',
    summary: 'Zelf.nl is a mobile-friendly dashboard designed for new self-employed individuals who are guided through all aspects of setting up and running a profitable business. As a freelance full-stack engineer I was brought onto the team to meet crucial deadlines. I successfully delivered high-quality frontend components, and implemented the payment checkout system. Thus enabling the platform to transition from a free to a monetized model.',
    tags: [
      'React',
      'TypeScript',
      'AWS Lambda',
      'AWS AppSync',
      'DynamoDB',
      'GraphQL',
      'Payments',
      'Teamwork',
    ],
    detail: [
      {
        title: 'Pixel-perfect styles',
        description: 'During the development of Zelf.nl, I was tasked with implementing frontend components that adhered to the designs provided, ensuring the final product was pixel-perfect on any screen size and met the high visual standards set by the design team.',
        media: [
          [
            { type: 'image', sources: zelfDashboardDevices, alt: 'Zelf dashboard on multiple devices' },
            { type: 'image', sources: zelfLogo, alt: 'Zelf logo' },
          ],
        ],
      },
      {
        title: 'Platform monetization',
        description: 'One of my key contributions to the Zelf.nl project was the integration of a payment provider, which allowed users to upgrade pricing tiers with ease and supported the platform\'s transition to a monetized model.',
        media: [
          [
            { type: 'video', url: '/video/zelf_payments.mp4', videoType: 'video/mp4' },
          ],
        ],
      },
    ],
  },
];

export default projects;