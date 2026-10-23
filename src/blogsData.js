// data/blogsData.js
// Single source of truth for all blogs — used by BOTH BlogSection (list) and BlogDetailPage.
// Add a new object here and it automatically shows up on the list page AND gets its own detail page.

export const blogPostsData = [
  {
    id: 1,
    slug: "how-to-bring-fold-to-your-startup-company",
    title: "How To Bring Fold To Your Startup Company With Smart Digital Strategy",
    description:
      "Most startups don't fail because the product is bad — they fail because nobody hears about it. Here's how to fix that.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
    date: "31",
    monthYear: "OCT 2023",
    author: "Team Optimedia",
    content: [
      "Every founder believes their product will sell itself once it's live. In practice, the market doesn't reward good products — it rewards products people actually know exist. That gap between 'built' and 'discovered' is where most early-stage startups quietly lose their runway.",
      "The first mistake we see repeatedly is spreading a small budget across too many channels at once. A startup with limited resources trying to run paid ads, SEO, social media, and email marketing simultaneously ends up doing all four poorly. Pick the one channel where your actual customers already spend time, and go deep before you go wide.",
      "Positioning matters more than most founders expect. Before spending a single rupee on ads, you need a one-line answer to 'why you and not the ten other options.' If your team can't say it in one sentence, your customers definitely can't either — and that confusion shows up directly in your conversion rate.",
      "Content is the cheapest form of trust-building available to a young company. A founder writing honestly about the problem they're solving, the mistakes they made, and the data behind their decisions will consistently outperform generic brand posts, because people buy from businesses they understand, not businesses they've merely seen.",
      "Finally, treat your first 100 customers as a feedback engine, not just a revenue milestone. Their language — the exact words they use to describe your product's value — should end up in your ads, your website copy, and your sales calls. That's how a startup goes from 'interesting idea' to a brand people refer their friends to.",
    ],
  },
  {
    id: 2,
    slug: "everything-about-build-apartment",
    title: "You Should Know Everything About Marketing a New Residential Project",
    description:
      "Selling apartments before they're built takes more than a good brochure — it takes a marketing system buyers can trust.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    date: "31",
    monthYear: "OCT 2023",
    author: "Team Optimedia",
    content: [
      "Real estate is one of the few purchases where the customer is buying something that doesn't fully exist yet. That single fact changes everything about how a residential project should be marketed — the job isn't to sell an apartment, it's to sell certainty in an uncertain decision.",
      "High-quality visuals are non-negotiable, but they're not enough on their own. Buyers scrolling through property listings today expect walkthrough videos, drone footage of the actual site, and renders that are labelled honestly as renders. The moment a buyer feels misled by an image, the trust required to sign a booking amount disappears.",
      "Local SEO and Google Business listings do more heavy lifting than most developers realize. A large share of home buyers search for a project by locality before they search by builder name, so a project without a strong, review-backed local presence is invisible to exactly the people already looking to buy nearby.",
      "Retargeting is especially effective in real estate because the buying cycle is long — often several months from first interest to booking. A visitor who checks a project page once and leaves needs to see consistent, relevant follow-up: price updates, new amenity reveals, limited-unit alerts, and site-visit reminders, spaced out rather than dumped all at once.",
      "Lastly, site visits still close more deals than any digital touchpoint. The role of marketing here is to get a genuinely interested buyer to the site with minimal friction — clear directions, an easy scheduling process, and a sales team briefed on exactly what that buyer asked about online, so the conversation picks up where the ad left off.",
    ],
  },
  {
    id: 3,
    slug: "digital-marketing-agency-pricing-guide",
    title: "Digital Marketing Agency Pricing Guide: What You're Actually Paying For",
    description:
      "Agency pricing looks confusing from the outside. Here's what drives the number on your invoice, and how to know if it's fair.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    date: "31",
    monthYear: "OCT 2023",
    author: "Team Optimedia",
    content: [
      "Most businesses evaluating agencies fixate on the monthly fee and skip the more important question: what does that fee actually include? Two agencies quoting the same number can offer wildly different scopes — one might include strategy, creative, and reporting, while another charges the same amount for ad management alone.",
      "Retainer pricing is the most common model, typically ranging from a few thousand to well over a lakh per month depending on scope, and it works best for businesses that need ongoing, consistent output — content calendars, always-on ad campaigns, continuous SEO work. The tradeoff is commitment; retainers assume a long-term relationship, not a one-off project.",
      "Project-based pricing suits a narrower need: a website redesign, a single campaign launch, a brand refresh. It's easier to budget for because the deliverable and timeline are fixed upfront, but it doesn't cover the ongoing optimization that most marketing actually needs to keep working over time.",
      "Performance-based pricing — where an agency's fee is tied to leads, sales, or a percentage of ad spend — sounds appealing because it feels lower-risk, but it usually pushes agencies toward short-term wins over durable brand-building, since their income depends on immediate, measurable outcomes.",
      "When comparing quotes, ask three questions: who exactly will work on the account, what's included in reporting, and what happens if results underperform in month one. The answers reveal more about value than the price itself — a slightly higher fee with a dedicated, experienced team almost always outperforms a cheaper quote spread across a junior generalist's ten other clients.",
    ],
  },
];

export const getBlogBySlug = (slug) => blogPostsData.find((b) => b.slug === slug);