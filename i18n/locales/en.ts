interface LandingSection {
  subject: string,
  title: string,
  desc: string,
  items: object
}

export default {
  name: "xQuery Team",
  header: {
    login: {
      text: "Login to Panel",
      to: '/redirect/cpanel',
      icon: 'LoginIcon',
    }
  },
  landing: {
    title: "Software Development and Programming Team",
    desc: "Providing custom programming, web design, application development, system development, automation, and maintenance services by the xQuery team.",
    keywords: "xQuery, programming, software development, web design, application development, programming services, development team, software projects, xQuery team",
    hero: {
      title: "Hello, I am xQuery!",
      desc: "I am an intelligent bot who never gets tired and is always ready to optimize and automate your business. To have me, just get in touch with my creator!",
      buttons: [
        {
          text: "Telegram Channel",
          to: '/redirect/telegram-channel',
          icon: 'TelegramIcon',
          isPrimary: true,
        },
        {
          text: "Request Consultation",
          to: '/redirect/telegram-support',
          icon: 'MessageIcon',
          isPrimary: false,
        },
      ]
    },
    whyus: <LandingSection> {
      subject: "Why Us?",
      title: "Build the Future Today",
      desc: "By combining creativity, new technologies, and AI, we build a smarter future for your business.",
      items: [
        {
          title: 'Fast and Smart Performance',
          desc: 'Using advanced and optimized algorithms, your system’s speed and efficiency increase.',
          icon: 'FlashIcon',
        },
        {
          title: 'High Security and Reliability',
          desc: 'With the latest security protocols, your data is stored safely and securely.',
          icon: 'ShieldIcon',
        },
        {
          title: '24/7 Support',
          desc: 'Our support team is available around the clock to answer questions and resolve issues.',
          icon: 'ChatBubbleIcon',
        },
      ]
    },
    services: <LandingSection> {
      subject: "Our Services",
      title: "Specialized Services and Solutions",
      desc: "Providing smart solutions and professional services to grow and digitally transform your business.",
      items: [
        {
          title: "Artificial Intelligence",
          desc: "Optimizing business processes using advanced AI algorithms.",
          icon: 'SparklesIcon',
        },
        {
          title: "Automation",
          desc: "Automating processes with precise tools customized for your specific needs.",
          icon: 'FlashIcon',
        },
        {
          title: "Hosting",
          desc: "Reliable hosting with 12/7 support and comprehensive security and performance solutions.",
          icon: 'MonitorIcon',
        },
      ]
    },
    technologies: <LandingSection> {
      subject: "Our Technologies",
      title: "Advanced Technology for a Better Future",
      desc: "We use the latest technologies to deliver the most accurate and fastest services.",
      items: [
        { name: 'Clean Code', icon: 'BranchIcon' },
        { name: 'High Speed', icon: 'SpeedIcon' },
        { name: 'Advanced Security', icon: 'SecurityIcon' },
        { name: 'Artificial Intelligence', icon: 'AlignBottomIcon' },
      ]
    },
    features: <LandingSection> {
      subject: "Our Advantages",
      title: "Values That Make Us Stand Out",
      desc: "Our difference lies in the combination of expertise, new technologies, and delivering a unique experience for clients.",
      items: [
        {
          title: 'Advanced AI',
          desc: 'Data analysis and processing using state-of-the-art algorithms.',
          icon: 'SparklesIcon'
        },
        {
          title: 'Exceptional Speed',
          desc: 'Optimized design for fast, uninterrupted performance in any condition.',
          icon: 'FlashIcon'
        },
        {
          title: 'Multi-layer Security',
          desc: 'Your data is protected with the latest security protocols.',
          icon: 'LockIcon'
        }
      ]
    },
    stats: <LandingSection> {
      subject: "Our Achievements",
      title: "Growth Powered by Your Trust",
      desc: "Your trust is the driving force behind our progress and innovation.",
      items: [
        { label: 'Active Users', start: 0, end: 1000, suffix: '+' },
        { label: 'Successful Projects', start: 0, end: 200, suffix: '+' },
        { label: 'Support Hours', start: 0, end: 12, suffix: '/7' },
        { label: 'Customer Satisfaction', start: 0, end: 99, suffix: '%' },
      ]
    },
    pricing: <LandingSection> {
      subject: "Hosting Plans",
      title: "Reliable Hosting for Your Growth",
      desc: "Fast, secure, and cost-effective hosting; a solid foundation for your online presence.",
      suggested: "Special Offer",
      order: "Order",
      items: [
        {
          name: 'Basic Plan',
          desc: 'Suitable for startups and small projects',
          icon: 'StatsIcon',
          price: '$2.99',
          cycle: 'Monthly',
          features: [
            'Hosting space: 5 GB',
            'Unlimited bandwidth',
            '12/7 support',
            'Daily backup'
          ],
          orderLink: '/redirect/telegram-support'
        },
        {
          name: 'Professional Plan',
          desc: 'Ideal choice for growing businesses',
          icon: 'StarIcon',
          price: '$5.99',
          cycle: 'Monthly',
          isPrimary: true,
          features: [
            'Hosting space: 20 GB',
            'Unlimited bandwidth',
            '12/7 support',
            'Daily + weekly backup',
          ],
          orderLink: '/redirect/telegram-support'
        },
        {
          name: 'Enterprise Plan',
          desc: 'For organizations and large projects',
          icon: 'CloudIcon',
          price: '$11.99',
          cycle: 'Monthly',
          features: [
            'Hosting space: 50 GB',
            'Unlimited bandwidth',
            'VIP 12/7 support',
            'Daily + weekly + monthly backup',
          ],
          orderLink: '/redirect/telegram-support'
        }
      ]
    },
    steps: <LandingSection> {
      subject: "Collaboration Steps",
      title: "From Idea to Execution in a Few Simple Steps",
      desc: "Turn your idea into reality in a few simple steps and advance your project with us.",
      items: [
        { title: 'Contact Us', desc: 'Get in touch via Telegram or email.' },
        { title: 'Free Consultation', desc: 'Your needs are assessed and the best solution is provided.' },
        { title: 'Start Collaboration', desc: 'After agreement, the project begins.' },
        { title: 'Final Delivery', desc: 'The project is delivered with the highest quality.' }
      ]
    },
    experties: <LandingSection> {
      subject: "Our Expertise",
      title: "Our Activities in Software Development",
      desc: "With skills in various software development areas, we are ready to turn your ideas into professional products.",
      items: [
        {
          title: 'Mobile Development',
          desc: 'Building native iOS and Android apps with top performance.',
          icon: 'MobileIcon',
          skills: ['Swift', 'Kotlin', 'Java'],
        },
        {
          title: 'Web Development',
          desc: 'Designing and developing modern websites with the latest technologies.',
          icon: 'CodeIcon',
          skills: ['Vue.js', 'React', 'Laravel', 'Node.js'],
        },
        {
          title: 'Desktop Development',
          desc: 'Designing powerful and functional software for different operating systems.',
          icon: 'MonitorIcon',
          skills: ['C#', 'C++', 'Swift'],
        },
        {
          title: 'Blockchain Development',
          desc: 'Implementing smart contracts and decentralized applications.',
          icon: 'DatabaseIcon',
          skills: ['Solidity', 'Web3.js'],
        },
        {
          title: 'Server & DevOps',
          desc: 'Server management, automation, and CI/CD implementation for a stable infrastructure.',
          icon: 'ServerIcon',
          skills: ['Linux', 'Docker', 'Bash', 'Python'],
        },
        {
          title: 'UI/UX Design',
          desc: 'Designing modern and user-friendly interfaces and experiences.',
          icon: 'DesignIcon',
          skills: ['Figma', 'Photoshop'],
        },
        {
          title: 'IoT Development',
          desc: 'Designing and developing smart and IoT systems.',
          icon: 'PuzzleIcon',
          skills: ['Arduino', 'RaspberryPi', 'ESP32/8266'],
        },
        {
          title: 'Telegram Development',
          desc: 'Building advanced Telegram bots and Mini Apps.',
          icon: 'TelegramIcon',
          skills: ['Telegram Bot', 'Mini Apps'],
        },
      ]
    },
    tools: <LandingSection> {
      subject: "Management Panels",
      title: "Administrative Tools for Convenience",
      desc: "With our management panels, you have quick and easy access to all tools and reports.",
      status: {
        active: "Active",
        development: "In Development...",
      },
      items: [
        {
          title: 'Login to cPanel',
          desc: "Manage hosting and domains",
          to: '/redirect/cpanel',
          icon: 'MonitorIcon'
        },
        {
          title: 'Login to WHM',
          desc: "Manage server and accounts",
          to: '/redirect/whm',
          icon: 'LayersIcon'
        },
        {
          title: "Server Status",
          desc: "View status and statistics of active servers",
          redirect: null,
          icon: 'ServerIcon'
        }
      ]
    },
    faq: <LandingSection> {
      subject: "FAQ",
      title: "Guide to Answer Your Questions",
      desc: "By reviewing frequent questions, you can quickly get the information you need.",
      items: [
        {
          question: "How can I use your services?",
          answer: "To use our services, contact us via Telegram or email. Our team will respond as quickly as possible."
        },
        {
          question: "How are service costs calculated?",
          answer: "Costs are based on the project type, complexity, and required time. For accurate estimation, request a free consultation."
        },
        {
          question: "Is customization possible?",
          answer: "Yes, all our services are fully customizable and designed according to your needs."
        },
        {
          question: "How long does a project take?",
          answer: "It depends on the project size and complexity. During consultation, a precise timeline is provided."
        }
      ]
    }
  },
  redirects: {
    items: [
      {
          id: 'whm',
          title: 'WHM Management Panel',
          desc: 'With WHM, you can manage multiple cPanel accounts, monitor server resources, and easily control security and domain settings.',
          url: 'https://whm.example.org',
          icon: 'LayersIcon',
          open: 'Open WHM'
      },
      {
          id: 'cpanel',
          title: 'cPanel Management Panel',
          desc: 'cPanel allows you to manage files, emails, databases, and domains in the simplest way and have full control over your apps/websites.',
          url: 'https://cpanel.example.org',
          icon: 'MonitorIcon',
          open: 'Open cPanel'
      },
      {
          id: 'telegram-channel',
          title: 'Telegram Channel',
          desc: 'Follow xQuery’s Telegram channel for latest news, updates, and special offers.',
          items: [
              'Receive instant news and important announcements',
              'Access updates and service changes',
              'View special offers for users',
              'Receive tutorials and technical tips'
          ],
          icon: 'TelegramIcon',
          url: 'https://t.me/username',
          open: 'Go to Channel'
      },
      {
          id: 'telegram-support',
          title: 'Telegram Support',
          desc: 'Contact xQuery team via Telegram for consultation, services, project registration, feedback, and suggestions.',
          items: [
              'Direct contact with support team and quick response',
              'Receive professional advice for website and server management',
              'Register personal or organizational projects',
              'Provide suggestions and feedback to improve services',
              'Receive guidance and resolve technical issues quickly'
          ],
          icon: 'TelegramIcon',
          url: 'https://t.me/username',
          open: 'Go to Telegram'
      },
      {
          id: "bale-channel",
          title: "Bale Channel",
          desc: "On the xQuery Bale channel, you can follow the latest news, updates, and special offers.",
          items: [
              "Receive breaking news and important announcements",
              "Access updates and service changes",
              "View special conditions and user offers",
              "Get tutorials and technical tips related to services"
          ],
          icon: 'BaleIcon',
          url: 'https://ble.ir/username',
          open: 'Go to Channel'
      },
      {
          id: 'email-support',
          title: 'Email Support',
          desc: 'Send your feedback and suggestions to us via email.',
          items: [
              'Send questions and service issues',
              'Submit feedback and suggestions for improvement',
              'Track issues and requests in writing',
              'Send additional documents and information to resolve problems'
          ],
          icon: 'MailBoxIcon',
          url: 'mailto:support[.]example.org',
          open: 'Send Email'
      }
    ]
  },
  footer: {
    desc: "Using AI and advanced technologies, we take your business to the next level.",
    links: {
      text: "Quick Access",
      items: [
        { text: 'WHM', to: '/redirect/whm' },
        { text: 'cPanel', to: '/redirect/cpanel' },
      ]
    },
    contact: {
      text: "Contact Us",
      items: [
        {
          icon: 'TelegramIcon',
          text: 'Telegram Channel',
          to: "/redirect/telegram-channel",
        },
        {
          icon: 'MailBoxIcon',
          text: 'Support Email',
          to: "/redirect/email-support",
        }
      ]
    },
    copyright:
      "All rights reserved for xQuery team.",
  }
}
