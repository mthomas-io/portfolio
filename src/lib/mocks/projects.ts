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

// Move to a headless cms one day, probably, maybe..
const projects: i.Project[] = [
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
    summary: `GetintheLoop is a digital shop-local community that makes it easier to explore, discover offers and rewards while supporting local businesses. As the day-to-day owner of the app's cloud infrastructure, I was responsible for changes to our API's, scheduled background tasks and overall maintenance to ensure the platform's smooth operation This included addressing and resolving critical issues, from e-mail sending failures to server downtime. Additionally, I led a small frontend team to rewrite the legacy Angular.js web app to React/ Next.js, resulting in a significant increase in user retention. The web app can be accessed at getintheloop.ca/deals.`,
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
      'TypeScript',
      'Progressive Web App',
      'Mobile-First',
      'Offline Support',
      'Service Workers',
      'Google Cloud',
      'one-man dev team',
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