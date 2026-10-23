// ===============================
// Service Hero Images
// ===============================

import SeoHero from "./SeoHeroImg.png";
import SeoBg from "./BgImageForOptimedia.png";
import WebsiteBg from "./webServicesHeroImg.png";
import WebsiteMobileBg from "./webHeroMobileImg.png";
import SemBg from "./SEM_bgImg.png";
import MobileHero from "./mobileHeroBgForServices.png";
import SmmBg from "./social_media_marketing.png";
import ContentBg from "./contenctBg.png";
import EmailBg from "./eamilHeroBg.png";
import AffiliateBg from "./Affiliate_Marketing_heroBg.png";
import AnalyticsBg from "./Web_AnalyticsHeroBg.png";
import OrmBg from "./Reputation_Management_hero_bg.png";
import VideoBg from "./Video_Marketing_hero_bg.png";
import EcommerceBg from "./E-commerce-Marketing-hero-bg.png";

export const services = [
  {
    id: 1,
    slug: "seo-services",

    title: "SEO Services",

    shortDescription:
      "Improve your search engine rankings and drive more organic traffic with result-oriented SEO strategies.",

    heroImage: SeoHero, // SeoHero

    backgroundImage: SeoBg,

    icon: "Search",

    overview:
      "Our SEO experts optimize your website with advanced on-page, off-page, and technical SEO techniques to increase visibility and long-term growth.",


      overviewDashboard: {
  title: "SEO Dashboard",
  subtitle: "Performance Overview",

  badge: {
    title: "Monthly Growth",
    value: "+89%",
  },

  cards: [
    {
      icon: "Search",
      value: "24.5K",
      label: "Organic Traffic",
    },
    {
      icon: "TrendingUp",
      value: "#8",
      label: "Google Ranking",
    },
    {
      icon: "MousePointerClick",
      value: "32%",
      label: "Conversion Rate",
    },
    {
      icon: "BarChart3",
      value: "120+",
      label: "Keywords Ranked",
    },
  ],

  progress: {
    title: "Overall SEO Score",
    value: 92,
  },
},


   benefits: [
  {
    title: "Higher Google Rankings",
    description:
      "Improve your website's position on Google with proven on-page, off-page, and technical SEO strategies.",
  },
  {
    title: "Increase Organic Traffic",
    description:
      "Drive high-quality visitors from search engines without relying on paid advertising.",
  },
  {
    title: "Generate More Qualified Leads",
    description:
      "Attract the right audience and convert organic traffic into valuable business leads.",
  },
  {
    title: "Improve Brand Visibility",
    description:
      "Strengthen your online presence and increase brand awareness across search results.",
  },
  {
    title: "Better Conversion Rate",
    description:
      "Optimize user experience and landing pages to turn more visitors into customers.",
  },
  {
    title: "Long-Term Business Growth",
    description:
      "Build sustainable online growth with consistent SEO strategies that deliver lasting results.",
  },
],
  process: [
  {
    step: "01",
    title: "Website Audit",
    description:
      "We perform a comprehensive SEO audit to identify technical issues, content gaps, and opportunities for improvement.",
  },
  {
    step: "02",
    title: "Keyword Research",
    description:
      "We research high-value and relevant keywords your target audience is actively searching for.",
  },
  {
    step: "03",
    title: "On-Page SEO",
    description:
      "We optimize titles, meta descriptions, headings, content, images, and internal linking for better search visibility.",
  },
  {
    step: "04",
    title: "Technical SEO",
    description:
      "We improve website speed, mobile usability, crawlability, indexing, and overall technical performance.",
  },
  {
    step: "05",
    title: "Link Building",
    description:
      "We build high-quality backlinks to improve your website's authority and search engine rankings.",
  },
  {
    step: "06",
    title: "Monthly Reporting",
    description:
      "Receive detailed monthly reports with keyword rankings, traffic insights, and performance recommendations.",
  },
],

serviceTypes: [
  {
    id: 1,
    title: "On-Page SEO",
    description:
      "Optimize titles, meta tags, headings, content structure, and internal linking for better search visibility.",
  },
  {
    id: 2,
    title: "Technical SEO",
    description:
      "Improve website speed, indexing, crawlability, Core Web Vitals, and overall technical performance.",
  },
  {
    id: 3,
    title: "Local SEO",
    description:
      "Rank higher in local searches and Google Business Profile to attract nearby customers.",
  },
  {
    id: 4,
    title: "Off-Page SEO",
    description:
      "Build authority through quality backlinks, digital PR, and trusted citations.",
  },
  {
    id: 5,
    title: "E-commerce SEO",
    description:
      "Optimize product pages, categories, and shopping experiences to increase online sales.",
  },
],

    faqs: [
  {
    question: "How long does SEO take?",
    answer:
      "SEO generally takes between 3–6 months depending on your website, competition, and current rankings."
  },
  {
    question: "Do you provide monthly reports?",
    answer:
      "Yes. Every month we send detailed reports covering rankings, traffic, backlinks, and overall campaign performance."
  },
  {
    question: "Will my website rank #1 on Google?",
    answer:
      "No ethical SEO agency can guarantee a #1 ranking, but we follow proven strategies to improve visibility and long-term growth."
  },
  {
    question: "Is SEO better than Google Ads?",
    answer:
      "SEO is a long-term investment, while Google Ads provide immediate traffic. The best strategy often combines both."
  }
],


  },
  

  {
  id: 2,

  slug: "sem-services",

  title: "SEM Services",

  badge: "MAXIMIZE YOUR PAID ADVERTISING",

  highlight: "Instant Results.",

  shortDescription:
    "Generate instant leads and maximize your ROI with high-performing Google Ads campaigns managed by certified SEM experts.",

  // heroImage: null,

  backgroundImage: SemBg,

  mobileBackgroundImage: SemBg,

  icon: "Target",

  overview:
    "Our SEM specialists create, manage, and optimize Google Ads campaigns that drive qualified traffic, increase conversions, and maximize your advertising budget.",


    overviewDashboard: {
  title: "Google Ads Dashboard",

  subtitle: "Campaign Performance",

  badge: {
    title: "Monthly ROI",
    value: "+142%",
  },

  cards: [
    {
      icon: "Search",
      value: "18.5K",
      label: "Paid Clicks",
    },
    {
      icon: "TrendingUp",
      value: "4.8%",
      label: "CTR",
    },
    {
      icon: "MousePointerClick",
      value: "₹18",
      label: "Avg. CPC",
    },
    {
      icon: "BarChart3",
      value: "6.5x",
      label: "ROAS",
    },
  ],

  progress: {
    title: "Campaign Optimization",
    value: 95,
  },
},


  features: [
    "Google Search Ads",
    "Display Advertising",
    "YouTube Ads",
    "Shopping Campaigns",
    "Remarketing Campaigns",
    "Monthly Optimization",
  ],

  serviceTypes: [
    {
      id: 1,
      title: "Google Search Ads",
      description:
        "Reach customers actively searching for your products and services.",
    },
    {
      id: 2,
      title: "Display Advertising",
      description:
        "Increase brand awareness with visually engaging display campaigns.",
    },
    {
      id: 3,
      title: "YouTube Ads",
      description:
        "Connect with your audience through targeted video advertising.",
    },
    {
      id: 4,
      title: "Shopping Ads",
      description:
        "Promote your products directly on Google Shopping results.",
    },
    {
      id: 5,
      title: "Remarketing Campaigns",
      description:
        "Re-engage previous visitors and increase conversions.",
    },
  ],

  benefits: [
    {
      title: "Instant Traffic",
      description:
        "Drive qualified visitors immediately through paid search campaigns.",
    },
    {
      title: "Higher ROI",
      description:
        "Maximize every advertising dollar with data-driven optimization.",
    },
    {
      title: "Quality Leads",
      description:
        "Target the right audience based on search intent and demographics.",
    },
    {
      title: "Advanced Targeting",
      description:
        "Reach customers by location, interests, keywords, and devices.",
    },
    {
      title: "Performance Tracking",
      description:
        "Monitor campaign performance with detailed analytics and reports.",
    },
    {
      title: "Scalable Growth",
      description:
        "Increase your advertising budget confidently as your business grows.",
    },
  ],

  process: [
    {
      title: "Campaign Planning",
      description:
        "Understand your goals, audience, and competitors.",
    },
    {
      title: "Keyword Research",
      description:
        "Find high-converting keywords with strong commercial intent.",
    },
    {
      title: "Campaign Setup",
      description:
        "Build optimized Google Ads campaigns with proper targeting.",
    },
    {
      title: "Ad Optimization",
      description:
        "Continuously improve ad copy, bidding, and audience targeting.",
    },
    {
      title: "Performance Monitoring",
      description:
        "Track conversions, CTR, CPC, and ROI.",
    },
    {
      title: "Monthly Reporting",
      description:
        "Receive transparent reports with actionable insights.",
    },
  ],

  stats: [
    {
      value: "500+",
      label: "Campaigns Managed",
    },
    {
      value: "97%",
      label: "Client Satisfaction",
    },
    {
      value: "10M+",
      label: "Ad Impressions",
    },
    {
      value: "24/7",
      label: "Campaign Monitoring",
    },
  ],

  faqs: [
    {
      question: "How quickly can I see results from SEM?",
      answer:
        "Unlike SEO, SEM campaigns can begin generating traffic and leads almost immediately after they go live. Results improve further through continuous optimization.",
    },
    {
      question: "Which advertising platforms do you manage?",
      answer:
        "We primarily manage Google Ads, including Search, Display, Shopping, YouTube, and Remarketing campaigns based on your business objectives.",
    },
    {
      question: "How much should I invest in Google Ads?",
      answer:
        "The ideal budget depends on your industry, competition, and business goals. We help you determine a budget that maximizes ROI.",
    },
    {
      question: "Will I receive monthly campaign reports?",
      answer:
        "Yes. We provide detailed reports covering impressions, clicks, conversions, CPC, ROAS, and campaign performance insights.",
    },
    {
      question: "Do you continuously optimize campaigns?",
      answer:
        "Absolutely. We regularly optimize keywords, bids, audiences, and ad creatives to improve performance and reduce advertising costs.",
    },
  ],
},
 {
  id: 3,

  slug: "social-media-marketing",

  title: "Social Media Marketing",

  badge: "BUILD YOUR BRAND ONLINE",

  highlight: "Engage. Grow. Convert.",

  shortDescription:
    "Grow your brand with strategic social media marketing that increases engagement, builds trust, and generates quality leads.",

  heroImage: null,

  backgroundImage: SmmBg,

  mobileBackgroundImage: MobileHero,

  icon: "Share2",

  overview:
    "Our social media marketing experts create engaging content, manage campaigns, and build meaningful customer relationships across all major social media platforms to increase brand awareness and drive business growth.",

  features: [
    "Social Media Strategy",
    "Content Creation",
    "Creative Design",
    "Paid Advertising",
    "Community Management",
    "Monthly Reporting",
  ],

  

  serviceTypes: [
    {
      id: 1,
      title: "Facebook Marketing",
      description:
        "Reach your ideal audience with engaging content and highly targeted Facebook advertising campaigns.",
    },
    {
      id: 2,
      title: "Instagram Marketing",
      description:
        "Grow your brand with creative posts, reels, stories, and influencer collaborations.",
    },
    {
      id: 3,
      title: "LinkedIn Marketing",
      description:
        "Generate quality B2B leads and establish your business as an industry authority.",
    },
    {
      id: 4,
      title: "YouTube Marketing",
      description:
        "Increase visibility through engaging video content and YouTube advertising.",
    },
    {
      id: 5,
      title: "Paid Social Advertising",
      description:
        "Drive targeted traffic and conversions through Facebook, Instagram, and LinkedIn Ads.",
    },
  ],

  benefits: [
    {
      title: "Increase Brand Awareness",
      description:
        "Build a strong online presence and make your brand more recognizable across social media platforms.",
    },
    {
      title: "Higher Audience Engagement",
      description:
        "Create meaningful interactions with your audience through engaging content.",
    },
    {
      title: "Generate Quality Leads",
      description:
        "Convert followers into potential customers using targeted social media campaigns.",
    },
    {
      title: "Build Customer Trust",
      description:
        "Strengthen customer relationships through consistent communication and valuable content.",
    },
    {
      title: "Drive Website Traffic",
      description:
        "Bring qualified visitors to your website through strategic social media marketing.",
    },
    {
      title: "Measurable Business Growth",
      description:
        "Track performance with detailed analytics and continuous optimization.",
    },
  ],

  process: [
    {
      title: "Social Media Audit",
      description:
        "Analyze your current social media presence, competitors, and target audience.",
    },
    {
      title: "Strategy Planning",
      description:
        "Create a customized content and marketing strategy aligned with your business goals.",
    },
    {
      title: "Content Creation",
      description:
        "Design engaging graphics, videos, reels, and social media content.",
    },
    {
      title: "Campaign Management",
      description:
        "Publish, manage, and optimize both organic and paid social media campaigns.",
    },
    {
      title: "Community Engagement",
      description:
        "Respond to comments, messages, and build lasting customer relationships.",
    },
    {
      title: "Performance Reporting",
      description:
        "Provide detailed reports with insights and recommendations for continuous improvement.",
    },
  ],

  stats: [
    {
      value: "300+",
      label: "Brands Managed",
    },
    {
      value: "5M+",
      label: "People Reached",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
    },
    {
      value: "24/7",
      label: "Community Support",
    },
  ],

  faqs: [
    {
      question: "Which social media platforms do you manage?",
      answer:
        "We manage Facebook, Instagram, LinkedIn, YouTube, X (Twitter), and other platforms based on your business goals.",
    },
    {
      question: "How often do you post content?",
      answer:
        "Posting frequency depends on your selected package, and we create a consistent content calendar to maximize engagement.",
    },
    {
      question: "Do you create graphics and videos?",
      answer:
        "Yes. Our creative team designs professional graphics, reels, videos, and promotional content tailored to your brand.",
    },
    {
      question: "Can social media marketing generate leads?",
      answer:
        "Absolutely. We combine engaging content with targeted advertising to generate high-quality leads and increase conversions.",
    },
    {
      question: "Will I receive monthly reports?",
      answer:
        "Yes. We provide detailed monthly reports covering reach, engagement, followers, clicks, and overall campaign performance.",
    },
  ],
  overviewDashboard: {
  title: "Social Media Dashboard",
  subtitle: "Campaign Performance",

  badge: {
    title: "Monthly Reach",
    value: "+125%",
  },

  cards: [
    {
      icon: "Users",
      value: "250K",
      label: "Followers",
    },
    {
      icon: "TrendingUp",
      value: "4.8M",
      label: "Reach",
    },
    {
      icon: "Heart",
      value: "12.8%",
      label: "Engagement",
    },
    {
      icon: "BarChart3",
      value: "180+",
      label: "Campaigns",
    },
  ],

  progress: {
    title: "Campaign Performance",
    value: 96,
  },
},
},

// content-marketing

  {
  id: 4,

  slug: "content-marketing",

  title: "Content Marketing",

  badge: "CREATE CONTENT THAT CONVERTS",

  highlight: "Build Authority.",

  shortDescription:
    "Create valuable, SEO-friendly, and engaging content that attracts your audience, builds trust, and generates quality leads.",

  heroImage: null,

  backgroundImage: ContentBg,

  mobileBackgroundImage: MobileHero,

  icon: "FileText",

  overview:
    "Our content marketing experts develop strategic, high-quality content that improves search visibility, engages your audience, and supports long-term business growth.",

  overviewDashboard: {
    title: "Content Dashboard",

    subtitle: "Content Performance",

    badge: {
      title: "Monthly Reach",
      value: "+165%",
    },

    cards: [
      {
        icon: "FileText",
        value: "420+",
        label: "Articles Published",
      },
      {
        icon: "TrendingUp",
        value: "82%",
        label: "Organic Growth",
      },
      {
        icon: "Search",
        value: "310+",
        label: "Keywords Ranked",
      },
      {
        icon: "BarChart3",
        value: "4.6x",
        label: "Content ROI",
      },
    ],

    progress: {
      title: "Content Performance",
      value: 94,
    },
  },

  features: [
    "Content Strategy",
    "SEO Content Writing",
    "Blog Writing",
    "Website Copywriting",
    "Content Optimization",
    "Monthly Reporting",
  ],

  serviceTypes: [
    {
      id: 1,
      title: "Blog Content Writing",
      description:
        "Publish SEO-optimized blogs that educate your audience and improve search rankings.",
    },
    {
      id: 2,
      title: "Website Copywriting",
      description:
        "Create compelling website content that builds trust and increases conversions.",
    },
    {
      id: 3,
      title: "SEO Copywriting",
      description:
        "Develop keyword-focused content designed to rank higher on search engines.",
    },
    {
      id: 4,
      title: "Product Descriptions",
      description:
        "Write persuasive product descriptions that encourage customers to buy.",
    },
    {
      id: 5,
      title: "Content Strategy",
      description:
        "Build a long-term content plan aligned with your business objectives.",
    },
  ],

  benefits: [
    {
      title: "Increase Organic Traffic",
      description:
        "Drive more qualified visitors with SEO-optimized and valuable content.",
    },
    {
      title: "Build Brand Authority",
      description:
        "Establish your business as a trusted leader within your industry.",
    },
    {
      title: "Generate Quality Leads",
      description:
        "Attract potential customers through educational and engaging content.",
    },
    {
      title: "Improve Search Rankings",
      description:
        "Publish optimized content that helps your website rank for relevant keywords.",
    },
    {
      title: "Better Audience Engagement",
      description:
        "Keep your audience engaged with consistent, informative, and valuable content.",
    },
    {
      title: "Long-Term Business Growth",
      description:
        "Build sustainable online visibility with an effective content strategy.",
    },
  ],

  process: [
    {
      title: "Content Research",
      description:
        "Understand your industry, audience, and competitors before creating content.",
    },
    {
      title: "Keyword Research",
      description:
        "Identify valuable search terms that attract qualified traffic.",
    },
    {
      title: "Content Planning",
      description:
        "Develop a structured content calendar aligned with your business goals.",
    },
    {
      title: "Content Creation",
      description:
        "Produce engaging, informative, and SEO-friendly content.",
    },
    {
      title: "Content Optimization",
      description:
        "Optimize every piece of content for search engines and user experience.",
    },
    {
      title: "Performance Analysis",
      description:
        "Track content performance and continuously improve future strategies.",
    },
  ],

  stats: [
    {
      value: "800+",
      label: "Content Pieces",
    },
    {
      value: "96%",
      label: "Client Satisfaction",
    },
    {
      value: "150+",
      label: "Brands Served",
    },
    {
      value: "24/7",
      label: "Content Support",
    },
  ],

  faqs: [
    {
      question: "What is content marketing?",
      answer:
        "Content marketing is the process of creating valuable and relevant content to attract, engage, and convert your target audience.",
    },
    {
      question: "How often should I publish content?",
      answer:
        "Publishing consistently is important. Most businesses benefit from publishing fresh content weekly or monthly based on their goals.",
    },
    {
      question: "Does content marketing improve SEO?",
      answer:
        "Yes. High-quality, keyword-optimized content helps improve search rankings, organic traffic, and website authority.",
    },
    {
      question: "Do you write industry-specific content?",
      answer:
        "Absolutely. We research your industry thoroughly to create accurate, engaging, and relevant content for your audience.",
    },
    {
      question: "Will I receive performance reports?",
      answer:
        "Yes. We provide detailed reports covering traffic, rankings, engagement, and overall content performance.",
    },
  ],
},

  {
  id: 5,

  slug: "email-marketing",

  title: "Email Marketing",

  badge: "TURN SUBSCRIBERS INTO CUSTOMERS",

  highlight: "Engage. Nurture. Convert.",

  shortDescription:
    "Build lasting customer relationships with personalized email campaigns that increase engagement, generate leads, and drive more sales.",

  heroImage: null,

  backgroundImage: EmailBg,

  mobileBackgroundImage: MobileHero,

  icon: "Mail",

  overview:
    "Our email marketing specialists create personalized, automated, and data-driven campaigns that help businesses nurture leads, retain customers, and maximize ROI.",

  overviewDashboard: {
    title: "Email Dashboard",

    subtitle: "Campaign Performance",

    badge: {
      title: "Open Rate",
      value: "42%",
    },

    cards: [
      {
        icon: "Mail",
        value: "250K",
        label: "Emails Sent",
      },
      {
        icon: "TrendingUp",
        value: "42%",
        label: "Open Rate",
      },
      {
        icon: "MousePointerClick",
        value: "12.8%",
        label: "Click Rate",
      },
      {
        icon: "BarChart3",
        value: "5.4x",
        label: "Email ROI",
      },
    ],

    progress: {
      title: "Campaign Success",
      value: 95,
    },
  },

  features: [
    "Email Campaign Strategy",
    "Newsletter Design",
    "Marketing Automation",
    "Audience Segmentation",
    "A/B Testing",
    "Performance Reporting",
  ],

  serviceTypes: [
    {
      id: 1,
      title: "Newsletter Campaigns",
      description:
        "Keep your subscribers engaged with informative and visually appealing newsletters.",
    },
    {
      id: 2,
      title: "Promotional Emails",
      description:
        "Drive sales through targeted promotional campaigns and special offers.",
    },
    {
      id: 3,
      title: "Automated Email Sequences",
      description:
        "Automate welcome emails, follow-ups, abandoned cart recovery, and customer journeys.",
    },
    {
      id: 4,
      title: "Lead Nurturing Campaigns",
      description:
        "Build trust with potential customers through personalized email sequences.",
    },
    {
      id: 5,
      title: "Customer Retention Emails",
      description:
        "Increase repeat purchases with loyalty campaigns and re-engagement emails.",
    },
  ],

  benefits: [
    {
      title: "Higher Customer Engagement",
      description:
        "Connect with your audience through personalized and valuable email communication.",
    },
    {
      title: "Generate More Sales",
      description:
        "Convert subscribers into paying customers with strategic email campaigns.",
    },
    {
      title: "Increase Customer Retention",
      description:
        "Keep existing customers engaged and encourage repeat purchases.",
    },
    {
      title: "Marketing Automation",
      description:
        "Save time with automated email workflows that work 24/7.",
    },
    {
      title: "Better ROI",
      description:
        "Email marketing delivers one of the highest returns among digital marketing channels.",
    },
    {
      title: "Performance Insights",
      description:
        "Track opens, clicks, conversions, and continuously improve campaign performance.",
    },
  ],

  process: [
    {
      title: "Audience Research",
      description:
        "Understand your audience and segment subscribers for better targeting.",
    },
    {
      title: "Campaign Strategy",
      description:
        "Develop personalized email marketing strategies aligned with your business goals.",
    },
    {
      title: "Email Design",
      description:
        "Create visually appealing, mobile-friendly email templates.",
    },
    {
      title: "Automation Setup",
      description:
        "Configure automated email workflows for lead nurturing and customer retention.",
    },
    {
      title: "Testing & Optimization",
      description:
        "Perform A/B testing to improve subject lines, content, and conversion rates.",
    },
    {
      title: "Performance Reporting",
      description:
        "Analyze campaign performance and optimize future email marketing efforts.",
    },
  ],

  stats: [
    {
      value: "2M+",
      label: "Emails Delivered",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
    },
    {
      value: "45%",
      label: "Average Open Rate",
    },
    {
      value: "24/7",
      label: "Automation Support",
    },
  ],

  faqs: [
    {
      question: "Is email marketing still effective?",
      answer:
        "Yes. Email marketing remains one of the highest ROI digital marketing channels when campaigns are personalized and strategically planned.",
    },
    {
      question: "Can you automate email campaigns?",
      answer:
        "Absolutely. We build automated workflows including welcome emails, lead nurturing, abandoned cart recovery, and customer retention campaigns.",
    },
    {
      question: "Do you design email templates?",
      answer:
        "Yes. We create responsive, branded email templates optimized for all major email clients and devices.",
    },
    {
      question: "How do you measure campaign performance?",
      answer:
        "We track key metrics such as open rates, click-through rates, conversions, bounce rates, and overall ROI.",
    },
    {
      question: "Which email platforms do you support?",
      answer:
        "We work with popular platforms including Mailchimp, Brevo (Sendinblue), HubSpot, Klaviyo, ActiveCampaign, and more.",
    },
  ],
},

  {
  id: 6,

  slug: "affiliate-marketing",

  title: "Affiliate Marketing",

  badge: "EXPAND YOUR SALES NETWORK",

  highlight: "Partner. Promote. Profit.",

  shortDescription:
    "Grow your business through strategic affiliate partnerships that increase brand visibility, generate qualified leads, and boost online sales.",

  heroImage: null,

  backgroundImage: AffiliateBg,

  mobileBackgroundImage: MobileHero,

  icon: "Users",

  overview:
    "Our affiliate marketing experts help you build and manage profitable affiliate programs that drive targeted traffic, increase conversions, and maximize revenue while maintaining complete transparency.",

  overviewDashboard: {
    title: "Affiliate Dashboard",

    subtitle: "Partner Performance",

    badge: {
      title: "Monthly Revenue",
      value: "+186%",
    },

    cards: [
      {
        icon: "Users",
        value: "320+",
        label: "Active Affiliates",
      },
      {
        icon: "TrendingUp",
        value: "₹12L+",
        label: "Monthly Revenue",
      },
      {
        icon: "MousePointerClick",
        value: "7.4%",
        label: "Conversion Rate",
      },
      {
        icon: "BarChart3",
        value: "6.8x",
        label: "ROI",
      },
    ],

    progress: {
      title: "Program Performance",
      value: 97,
    },
  },

  features: [
    "Affiliate Program Setup",
    "Partner Recruitment",
    "Commission Management",
    "Affiliate Tracking",
    "Performance Optimization",
    "Monthly Reporting",
  ],

  serviceTypes: [
    {
      id: 1,
      title: "Affiliate Program Setup",
      description:
        "Launch a fully customized affiliate marketing program tailored to your business goals.",
    },
    {
      id: 2,
      title: "Affiliate Recruitment",
      description:
        "Find and onboard high-quality affiliates who can effectively promote your products.",
    },
    {
      id: 3,
      title: "Influencer Partnerships",
      description:
        "Collaborate with influencers and creators to expand your reach and drive sales.",
    },
    {
      id: 4,
      title: "Commission Management",
      description:
        "Create competitive commission structures that motivate affiliates to perform better.",
    },
    {
      id: 5,
      title: "Affiliate Performance Optimization",
      description:
        "Track affiliate performance and continuously optimize campaigns for maximum ROI.",
    },
  ],

  benefits: [
    {
      title: "Increase Sales",
      description:
        "Generate additional revenue through trusted affiliate partnerships.",
    },
    {
      title: "Performance-Based Marketing",
      description:
        "Pay only for measurable results like leads, clicks, or completed sales.",
    },
    {
      title: "Expand Brand Reach",
      description:
        "Reach new audiences through affiliate websites, blogs, and influencers.",
    },
    {
      title: "Lower Marketing Costs",
      description:
        "Reduce customer acquisition costs with commission-based marketing.",
    },
    {
      title: "Scalable Growth",
      description:
        "Grow your affiliate network alongside your business without increasing fixed costs.",
    },
    {
      title: "Real-Time Tracking",
      description:
        "Monitor affiliate performance, commissions, and revenue with detailed reports.",
    },
  ],

  process: [
    {
      title: "Business Analysis",
      description:
        "Understand your products, audience, and affiliate marketing objectives.",
    },
    {
      title: "Program Development",
      description:
        "Design an attractive affiliate program with competitive commission structures.",
    },
    {
      title: "Affiliate Recruitment",
      description:
        "Identify and onboard high-performing affiliates and influencers.",
    },
    {
      title: "Campaign Launch",
      description:
        "Launch affiliate campaigns with tracking and promotional assets.",
    },
    {
      title: "Performance Monitoring",
      description:
        "Monitor affiliate activity, conversions, and campaign performance.",
    },
    {
      title: "Optimization & Reporting",
      description:
        "Continuously optimize affiliate campaigns and provide transparent monthly reports.",
    },
  ],

  stats: [
    {
      value: "500+",
      label: "Affiliate Partners",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
    },
    {
      value: "₹5Cr+",
      label: "Revenue Generated",
    },
    {
      value: "24/7",
      label: "Partner Support",
    },
  ],

  faqs: [
    {
      question: "What is affiliate marketing?",
      answer:
        "Affiliate marketing is a performance-based strategy where affiliates promote your products or services and earn commissions for successful referrals or sales.",
    },
    {
      question: "How do you find affiliate partners?",
      answer:
        "We recruit affiliates through industry networks, influencer outreach, niche communities, and strategic partnerships.",
    },
    {
      question: "How are affiliate commissions managed?",
      answer:
        "We help create transparent commission structures and track every referral using reliable affiliate tracking platforms.",
    },
    {
      question: "Can affiliate marketing increase online sales?",
      answer:
        "Yes. A well-managed affiliate program can significantly increase brand exposure, website traffic, and overall sales.",
    },
    {
      question: "Do you provide performance reports?",
      answer:
        "Absolutely. We provide detailed reports covering affiliate activity, conversions, commissions, revenue, and ROI.",
    },
  ],
},

 {
  id: 7,

  slug: "web-analytics",

  title: "Web Analytics",

  badge: "TURN DATA INTO SMART DECISIONS",

  highlight: "Analyze. Optimize. Grow.",

  shortDescription:
    "Understand your website visitors with advanced analytics and transform data into actionable insights that drive business growth.",

  heroImage: null,

  backgroundImage: AnalyticsBg,

  mobileBackgroundImage: MobileHero,

  icon: "BarChart3",

  overview:
    "Our web analytics experts help businesses measure website performance, understand user behavior, and optimize digital marketing campaigns using powerful analytics platforms like Google Analytics and Google Tag Manager.",

  overviewDashboard: {
    title: "Analytics Dashboard",

    subtitle: "Website Performance",

    badge: {
      title: "Traffic Growth",
      value: "+138%",
    },

    cards: [
      {
        icon: "Users",
        value: "82K",
        label: "Monthly Visitors",
      },
      {
        icon: "TrendingUp",
        value: "48%",
        label: "Engagement Rate",
      },
      {
        icon: "MousePointerClick",
        value: "3.8%",
        label: "Conversion Rate",
      },
      {
        icon: "BarChart3",
        value: "2.4M",
        label: "Page Views",
      },
    ],

    progress: {
      title: "Data Accuracy",
      value: 98,
    },
  },

  features: [
    "Google Analytics Setup",
    "Google Tag Manager",
    "Conversion Tracking",
    "User Behavior Analysis",
    "Custom Dashboards",
    "Monthly Reporting",
  ],

  serviceTypes: [
    {
      id: 1,
      title: "Google Analytics Setup",
      description:
        "Configure Google Analytics to accurately measure website traffic and user behavior.",
    },
    {
      id: 2,
      title: "Conversion Tracking",
      description:
        "Track leads, sales, forms, and business goals with precise conversion measurement.",
    },
    {
      id: 3,
      title: "Google Tag Manager",
      description:
        "Manage website tracking codes efficiently without changing website code repeatedly.",
    },
    {
      id: 4,
      title: "Custom Reporting",
      description:
        "Build customized dashboards and reports tailored to your business KPIs.",
    },
    {
      id: 5,
      title: "Performance Analysis",
      description:
        "Analyze visitor behavior and identify opportunities to improve website performance.",
    },
  ],

  benefits: [
    {
      title: "Data-Driven Decisions",
      description:
        "Make smarter marketing decisions using accurate business insights.",
    },
    {
      title: "Improve User Experience",
      description:
        "Understand visitor behavior and optimize your website journey.",
    },
    {
      title: "Increase Conversions",
      description:
        "Identify bottlenecks and improve conversion rates with analytics.",
    },
    {
      title: "Track Marketing ROI",
      description:
        "Measure the performance of every digital marketing campaign.",
    },
    {
      title: "Better Business Insights",
      description:
        "Understand where your customers come from and what drives conversions.",
    },
    {
      title: "Continuous Optimization",
      description:
        "Use real-time analytics to continuously improve website performance.",
    },
  ],

  process: [
    {
      title: "Analytics Audit",
      description:
        "Review your existing analytics setup and identify tracking gaps.",
    },
    {
      title: "Tracking Implementation",
      description:
        "Configure Google Analytics, GA4, Google Tag Manager, and event tracking.",
    },
    {
      title: "Goal Configuration",
      description:
        "Set up business goals, conversions, ecommerce tracking, and custom events.",
    },
    {
      title: "Dashboard Creation",
      description:
        "Develop customized reporting dashboards for key business metrics.",
    },
    {
      title: "Performance Monitoring",
      description:
        "Monitor website traffic, user behavior, and campaign performance regularly.",
    },
    {
      title: "Optimization & Reporting",
      description:
        "Deliver monthly reports with actionable recommendations for business growth.",
    },
  ],

  stats: [
    {
      value: "1000+",
      label: "Reports Generated",
    },
    {
      value: "98%",
      label: "Tracking Accuracy",
    },
    {
      value: "250+",
      label: "Websites Optimized",
    },
    {
      value: "24/7",
      label: "Analytics Support",
    },
  ],

  faqs: [
    {
      question: "Why is web analytics important?",
      answer:
        "Web analytics helps you understand visitor behavior, measure marketing performance, and make data-driven decisions to improve business growth.",
    },
    {
      question: "Do you set up Google Analytics 4 (GA4)?",
      answer:
        "Yes. We provide complete GA4 setup, event tracking, conversion tracking, and Google Tag Manager implementation.",
    },
    {
      question: "Can you track ecommerce sales?",
      answer:
        "Absolutely. We configure enhanced ecommerce tracking to monitor purchases, revenue, customer journeys, and product performance.",
    },
    {
      question: "Will I receive monthly reports?",
      answer:
        "Yes. We provide detailed monthly reports including traffic, conversions, user behavior, and actionable insights.",
    },
    {
      question: "Can analytics improve my marketing ROI?",
      answer:
        "Yes. Analytics identifies high-performing channels, allowing you to invest more effectively and improve overall ROI.",
    },
  ],
},

  {
  id: 8,

  slug: "website-development",

  title: "Website Development",

  badge: "BUILDING WEBSITES THAT DRIVE RESULTS",

  highlight: "Smarter Solutions.",

  shortDescription:
    "We build fast, responsive, and SEO-friendly websites that elevate your brand and help your business grow online.",

  // heroImage: WebsiteBg,

   mobileBackgroundImage: WebsiteMobileBg,


  backgroundImage: WebsiteBg,

  icon: "Globe",

  overview:
    "Your website is the digital face of your business. We create modern, high-performance websites focused on user experience, speed, SEO, and conversions.",




    overviewDashboard: {
  title: "Development Stack",
  subtitle: "Technology Overview",

  badge: {
    title: "Projects Delivered",
    value: "250+",
  },

  cards: [
    {
      icon: "Laptop",
      value: "React",
      label: "Frontend",
    },
    {
      icon: "Globe",
      value: "Node.js",
      label: "Backend",
    },
    {
      icon: "Zap",
      value: "WordPress",
      label: "CMS",
    },
    {
      icon: "ShieldCheck",
      value: "Shopify",
      label: "E-commerce",
    },
  ],

  progress: {
    title: "Project Success Rate",
    value: 98,
  },
},



  features: [
    "Custom Website Design",
    "Responsive Development",
    "SEO Friendly Structure",
    "Lightning Fast Performance",
    "Secure Development",
    "Ongoing Maintenance",
  ],

  benefits: [
  {
    title: "Professional Brand Presence",
    description:
      "Build a modern and trustworthy website that strengthens your brand identity.",
  },
  {
    title: "Higher Conversion Rates",
    description:
      "Create user-focused experiences that convert visitors into loyal customers.",
  },
  {
    title: "Mobile Responsive Design",
    description:
      "Deliver a seamless browsing experience across smartphones, tablets, and desktops.",
  },
  {
    title: "SEO Optimized Website",
    description:
      "Develop websites with clean code and SEO best practices for better search visibility.",
  },
  {
    title: "Fast Loading Speed",
    description:
      "Optimize website performance for lightning-fast loading and an improved user experience.",
  },
  {
    title: "Long-Term Scalability",
    description:
      "Build a flexible and scalable website that grows with your business needs.",
  },
],

serviceTypes: [
  {
    id: 1,
    title: "Business Website",
    description:
      "Professional websites designed to establish your online presence.",
  },
  {
    id: 2,
    title: "Corporate Website",
    description:
      "Modern enterprise websites focused on branding and business growth.",
  },
  {
    id: 3,
    title: "E-commerce Website",
    description:
      "Online stores with secure payment integration and product management.",
  },
  {
    id: 4,
    title: "Landing Pages",
    description:
      "High-converting landing pages for marketing campaigns and lead generation.",
  },
  {
    id: 5,
    title: "Custom Web Applications",
    description:
      "Scalable custom web applications tailored to your business requirements.",
  },
],

  process: [
  {
    title: "Requirement Analysis",
    description:
      "We understand your business goals, target audience, and project requirements to create the right development strategy.",
  },
  {
    title: "UI/UX Design",
    description:
      "Our designers create intuitive, modern, and user-friendly interfaces focused on delivering the best user experience.",
  },
  {
    title: "Frontend Development",
    description:
      "We build responsive and interactive user interfaces using modern technologies and clean coding standards.",
  },
  {
    title: "Backend Development",
    description:
      "Develop secure, scalable, and high-performance server-side functionality with robust database integration.",
  },
  {
    title: "Testing & Launch",
    description:
      "Every website is thoroughly tested for performance, responsiveness, security, and functionality before going live.",
  },
  {
    title: "Support & Maintenance",
    description:
      "We provide continuous updates, security monitoring, backups, and technical support after launch.",
  },
],

  stats: [
    {
      value: "250+",
      label: "Projects Delivered",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
    },
    {
      value: "5+",
      label: "Years Experience",
    },
    {
      value: "24/7",
      label: "Support",
    },
  ],

  faqs: [
    {
      question: "How long does website development take?",
      answer:
        "Most business websites are completed within 2–6 weeks depending on project complexity.",
    },
    {
      question: "Will my website be mobile responsive?",
      answer:
        "Yes. Every website we build is fully responsive and optimized for all screen sizes.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Absolutely. We can redesign your existing website with a modern UI, better performance, and improved SEO.",
    },
    {
      question: "Do you provide website maintenance?",
      answer:
        "Yes. We offer ongoing maintenance, updates, backups, and technical support.",
    },
  ],
},

  {
  id: 9,

  slug: "online-reputation-management",

  title: "Online Reputation Management",

  badge: "BUILD TRUST. PROTECT YOUR BRAND.",

  highlight: "Monitor. Improve. Grow.",

  shortDescription:
    "Strengthen your online reputation by managing customer reviews, improving brand perception, and building trust across digital platforms.",

  heroImage: null,

  backgroundImage: OrmBg,

  mobileBackgroundImage: MobileHero,

  icon: "ShieldCheck",

  overview:
    "Our Online Reputation Management (ORM) services help businesses monitor, protect, and improve their digital reputation through review management, brand monitoring, customer engagement, and strategic reputation-building campaigns.",

  overviewDashboard: {
    title: "Reputation Dashboard",

    subtitle: "Brand Health Overview",

    badge: {
      title: "Positive Reviews",
      value: "+94%",
    },

    cards: [
      {
        icon: "ShieldCheck",
        value: "4.9★",
        label: "Average Rating",
      },
      {
        icon: "Users",
        value: "8.5K",
        label: "Customer Reviews",
      },
      {
        icon: "TrendingUp",
        value: "96%",
        label: "Positive Sentiment",
      },
      {
        icon: "BarChart3",
        value: "24/7",
        label: "Brand Monitoring",
      },
    ],

    progress: {
      title: "Brand Reputation Score",
      value: 97,
    },
  },

  features: [
    "Review Management",
    "Brand Monitoring",
    "Crisis Management",
    "Customer Engagement",
    "Reputation Recovery",
    "Monthly Reports",
  ],

  serviceTypes: [
    {
      id: 1,
      title: "Review Management",
      description:
        "Monitor and manage customer reviews across Google, Facebook, and other review platforms.",
    },
    {
      id: 2,
      title: "Brand Monitoring",
      description:
        "Track online mentions, customer feedback, and brand conversations in real time.",
    },
    {
      id: 3,
      title: "Reputation Recovery",
      description:
        "Recover from negative publicity with proven reputation improvement strategies.",
    },
    {
      id: 4,
      title: "Crisis Management",
      description:
        "Respond quickly and professionally to negative reviews and online crises.",
    },
    {
      id: 5,
      title: "Customer Engagement",
      description:
        "Build trust by responding to customer reviews and strengthening relationships.",
    },
  ],

  benefits: [
    {
      title: "Build Customer Trust",
      description:
        "Create a positive online reputation that increases customer confidence.",
    },
    {
      title: "Improve Brand Image",
      description:
        "Strengthen your digital presence with consistent reputation management.",
    },
    {
      title: "Increase Positive Reviews",
      description:
        "Encourage satisfied customers to share genuine positive experiences.",
    },
    {
      title: "Protect Brand Reputation",
      description:
        "Monitor and resolve reputation issues before they impact your business.",
    },
    {
      title: "Higher Customer Retention",
      description:
        "Build long-term customer loyalty through excellent online engagement.",
    },
    {
      title: "Long-Term Brand Growth",
      description:
        "Develop a trusted online reputation that supports sustainable business growth.",
    },
  ],

  process: [
    {
      title: "Reputation Audit",
      description:
        "Evaluate your current online reputation, reviews, and brand mentions.",
    },
    {
      title: "Brand Monitoring",
      description:
        "Continuously monitor review platforms, social media, and search results.",
    },
    {
      title: "Review Management",
      description:
        "Respond professionally to customer reviews and encourage positive feedback.",
    },
    {
      title: "Reputation Improvement",
      description:
        "Implement strategies to strengthen brand credibility and customer trust.",
    },
    {
      title: "Performance Tracking",
      description:
        "Track sentiment, ratings, and reputation trends across digital platforms.",
    },
    {
      title: "Monthly Reporting",
      description:
        "Receive transparent reports with insights and recommendations for continuous improvement.",
    },
  ],

  stats: [
    {
      value: "15K+",
      label: "Reviews Managed",
    },
    {
      value: "97%",
      label: "Positive Feedback",
    },
    {
      value: "500+",
      label: "Brands Protected",
    },
    {
      value: "24/7",
      label: "Brand Monitoring",
    },
  ],

  faqs: [
    {
      question: "What is Online Reputation Management (ORM)?",
      answer:
        "ORM is the process of monitoring, managing, and improving your brand's online reputation across search engines, review platforms, and social media.",
    },
    {
      question: "Can you remove negative reviews?",
      answer:
        "We cannot remove genuine customer reviews, but we help resolve issues, encourage positive reviews, and improve your overall brand perception.",
    },
    {
      question: "Which platforms do you monitor?",
      answer:
        "We monitor Google Business Profile, Facebook, review websites, social media platforms, and other online channels relevant to your business.",
    },
    {
      question: "How long does ORM take to show results?",
      answer:
        "Results vary depending on your current reputation, but most businesses notice measurable improvements within a few months of consistent ORM efforts.",
    },
    {
      question: "Will I receive regular reputation reports?",
      answer:
        "Yes. We provide detailed monthly reports covering reviews, ratings, brand mentions, sentiment analysis, and improvement recommendations.",
    },
  ],
},
 {
  id: 10,

  slug: "video-marketing",

  title: "Video Marketing",

  badge: "CAPTURE ATTENTION WITH VIDEO",

  highlight: "Create. Engage. Convert.",

  shortDescription:
    "Grow your brand with professional video marketing that captures attention, increases engagement, and drives more conversions across digital platforms.",

  heroImage: null,

  backgroundImage: VideoBg,

  mobileBackgroundImage: MobileHero,

  icon: "PlayCircle",

  overview:
    "Our video marketing experts create compelling video content that helps businesses increase brand awareness, engage audiences, and generate high-quality leads across YouTube, social media, and advertising platforms.",

  overviewDashboard: {
    title: "Video Dashboard",

    subtitle: "Campaign Performance",

    badge: {
      title: "Monthly Views",
      value: "+210%",
    },

    cards: [
      {
        icon: "PlayCircle",
        value: "2.8M",
        label: "Video Views",
      },
      {
        icon: "Users",
        value: "185K",
        label: "Audience Reached",
      },
      {
        icon: "TrendingUp",
        value: "14.2%",
        label: "Engagement",
      },
      {
        icon: "BarChart3",
        value: "5.8x",
        label: "ROI",
      },
    ],

    progress: {
      title: "Campaign Performance",
      value: 96,
    },
  },

  features: [
    "Brand Videos",
    "Promotional Videos",
    "YouTube Marketing",
    "Social Media Videos",
    "Video Advertising",
    "Performance Reporting",
  ],

  serviceTypes: [
    {
      id: 1,
      title: "Brand Videos",
      description:
        "Showcase your company's story and values through high-quality branded videos.",
    },
    {
      id: 2,
      title: "Promotional Videos",
      description:
        "Increase product and service awareness with engaging promotional content.",
    },
    {
      id: 3,
      title: "YouTube Marketing",
      description:
        "Optimize and promote videos to grow your YouTube channel and audience.",
    },
    {
      id: 4,
      title: "Social Media Videos",
      description:
        "Create short-form videos, reels, and stories for maximum social engagement.",
    },
    {
      id: 5,
      title: "Video Advertising",
      description:
        "Run high-performing video ad campaigns across YouTube and social media platforms.",
    },
  ],

  benefits: [
    {
      title: "Increase Brand Awareness",
      description:
        "Reach more people with engaging and memorable video content.",
    },
    {
      title: "Boost Customer Engagement",
      description:
        "Capture audience attention and encourage meaningful interactions.",
    },
    {
      title: "Improve Conversion Rates",
      description:
        "Turn viewers into customers using persuasive marketing videos.",
    },
    {
      title: "Higher Social Reach",
      description:
        "Expand your visibility through optimized video content across multiple platforms.",
    },
    {
      title: "Build Customer Trust",
      description:
        "Demonstrate your products and services in a more authentic and engaging way.",
    },
    {
      title: "Long-Term Marketing Value",
      description:
        "Create evergreen video content that continues generating results over time.",
    },
  ],

  process: [
    {
      title: "Strategy Planning",
      description:
        "Understand your business goals and create a customized video marketing strategy.",
    },
    {
      title: "Script Writing",
      description:
        "Develop engaging scripts designed to capture audience attention.",
    },
    {
      title: "Video Production",
      description:
        "Produce high-quality videos with professional editing and branding.",
    },
    {
      title: "Publishing & Promotion",
      description:
        "Distribute videos across YouTube, social media, and advertising platforms.",
    },
    {
      title: "Performance Tracking",
      description:
        "Monitor views, engagement, watch time, and conversions.",
    },
    {
      title: "Optimization & Reporting",
      description:
        "Continuously improve campaigns using performance insights and monthly reports.",
    },
  ],

  stats: [
    {
      value: "1200+",
      label: "Videos Produced",
    },
    {
      value: "15M+",
      label: "Views Generated",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
    },
    {
      value: "24/7",
      label: "Campaign Support",
    },
  ],

  faqs: [
    {
      question: "Why is video marketing important?",
      answer:
        "Video marketing helps businesses increase brand awareness, improve engagement, and generate more conversions through visual storytelling.",
    },
    {
      question: "Which platforms do you create videos for?",
      answer:
        "We create videos for YouTube, Facebook, Instagram, LinkedIn, TikTok, websites, and digital advertising campaigns.",
    },
    {
      question: "Can you create short-form videos and reels?",
      answer:
        "Yes. We produce short-form videos, Instagram Reels, YouTube Shorts, and other engaging social media content.",
    },
    {
      question: "Do you provide video advertising services?",
      answer:
        "Absolutely. We create and manage video advertising campaigns to maximize reach and conversions.",
    },
    {
      question: "Will I receive campaign performance reports?",
      answer:
        "Yes. We provide detailed reports covering views, engagement, watch time, conversions, and ROI.",
    },
  ],
},

  {
  id: 11,

  slug: "ecommerce-marketing",

  title: "E-commerce Marketing",

  badge: "GROW YOUR ONLINE STORE",

  highlight: "Sell More. Scale Faster.",

  shortDescription:
    "Increase online sales with data-driven e-commerce marketing strategies designed to attract customers, improve conversions, and maximize revenue.",

  heroImage: null,

  backgroundImage: EcommerceBg,

  mobileBackgroundImage: MobileHero,

  icon: "ShoppingCart",

  overview:
    "Our e-commerce marketing specialists help online stores generate more traffic, improve conversion rates, and increase revenue through SEO, paid advertising, email marketing, and customer retention strategies.",

  overviewDashboard: {
    title: "E-commerce Dashboard",

    subtitle: "Store Performance",

    badge: {
      title: "Monthly Sales",
      value: "+245%",
    },

    cards: [
      {
        icon: "ShoppingCart",
        value: "18.2K",
        label: "Orders",
      },
      {
        icon: "TrendingUp",
        value: "₹48L",
        label: "Revenue",
      },
      {
        icon: "MousePointerClick",
        value: "5.8%",
        label: "Conversion Rate",
      },
      {
        icon: "BarChart3",
        value: "4.9x",
        label: "ROAS",
      },
    ],

    progress: {
      title: "Store Growth",
      value: 98,
    },
  },

  features: [
    "Store SEO",
    "Google Shopping Ads",
    "Product Marketing",
    "Conversion Optimization",
    "Email Automation",
    "Performance Reporting",
  ],

  serviceTypes: [
    {
      id: 1,
      title: "Store SEO",
      description:
        "Optimize your online store to improve rankings and drive organic traffic.",
    },
    {
      id: 2,
      title: "Google Shopping Ads",
      description:
        "Promote products directly in Google Shopping results to attract ready-to-buy customers.",
    },
    {
      id: 3,
      title: "Marketplace Marketing",
      description:
        "Increase product visibility across Amazon, Flipkart, and other marketplaces.",
    },
    {
      id: 4,
      title: "Conversion Rate Optimization",
      description:
        "Improve user experience and optimize checkout to increase sales.",
    },
    {
      id: 5,
      title: "Customer Retention",
      description:
        "Boost repeat purchases with email campaigns, loyalty programs, and remarketing.",
    },
  ],

  benefits: [
    {
      title: "Increase Online Sales",
      description:
        "Generate more revenue with targeted e-commerce marketing strategies.",
    },
    {
      title: "Drive Qualified Traffic",
      description:
        "Attract high-intent customers ready to purchase your products.",
    },
    {
      title: "Higher Conversion Rates",
      description:
        "Turn more visitors into paying customers with optimized shopping experiences.",
    },
    {
      title: "Better Return on Ad Spend",
      description:
        "Maximize your advertising budget with data-driven campaign optimization.",
    },
    {
      title: "Improve Customer Retention",
      description:
        "Increase repeat purchases through loyalty and remarketing campaigns.",
    },
    {
      title: "Long-Term Business Growth",
      description:
        "Build a scalable marketing strategy that supports sustainable store growth.",
    },
  ],

  process: [
    {
      title: "Store Audit",
      description:
        "Analyze your website, products, competitors, and marketing performance.",
    },
    {
      title: "Marketing Strategy",
      description:
        "Develop a customized growth plan based on your business goals.",
    },
    {
      title: "Campaign Launch",
      description:
        "Launch SEO, paid ads, shopping campaigns, and email automation.",
    },
    {
      title: "Conversion Optimization",
      description:
        "Improve landing pages, product pages, and checkout experience.",
    },
    {
      title: "Performance Monitoring",
      description:
        "Track sales, traffic, conversions, and customer behavior in real time.",
    },
    {
      title: "Reporting & Scaling",
      description:
        "Provide detailed monthly reports and continuously scale winning campaigns.",
    },
  ],

  stats: [
    {
      value: "1000+",
      label: "Stores Managed",
    },
    {
      value: "₹50Cr+",
      label: "Revenue Generated",
    },
    {
      value: "99%",
      label: "Client Satisfaction",
    },
    {
      value: "24/7",
      label: "Growth Support",
    },
  ],

  faqs: [
    {
      question: "Which e-commerce platforms do you support?",
      answer:
        "We work with Shopify, WooCommerce, Magento, BigCommerce, and custom e-commerce websites.",
    },
    {
      question: "Can you increase my online sales?",
      answer:
        "Yes. We combine SEO, Google Shopping Ads, social media advertising, email marketing, and conversion optimization to increase your store's sales.",
    },
    {
      question: "Do you manage Google Shopping campaigns?",
      answer:
        "Absolutely. We create, optimize, and manage Google Shopping and Performance Max campaigns to maximize product visibility and ROI.",
    },
    {
      question: "How do you measure campaign success?",
      answer:
        "We monitor traffic, sales, conversion rates, average order value, ROAS, and customer lifetime value to measure performance.",
    },
    {
      question: "Will I receive monthly reports?",
      answer:
        "Yes. Every month you'll receive detailed reports with campaign performance, sales insights, and recommendations for future growth.",
    },
  ],
},
];