export type SupportProductLinks = {
  signUp: string;
  signIn: string;
  forgotPassword: string;
  training: string;
  supportEmail: string;
  supportPortal: string;
  thankYou: string;
};

export type PremiumFeature = {
  name: string;
  description: string;
  url: string;
};

export type SupportProduct = {
  id: string;
  name: string;
  description: string;
  characterName: string;
  links: SupportProductLinks;
  premiumFeatures: PremiumFeature[];
};

export const SUPPORT_PRODUCTS: SupportProduct[] = [
  {
    id: "profitloop",
    name: "ProfitLoop",
    description:
      "AI outreach and profit-loop automation platform for creating and running income campaigns.",
    characterName: "",
    links: {
      signUp: "https://profitloopaccess.com/signup",
      signIn: "https://profitloopaccess.com/login",
      forgotPassword: "https://profitloopaccess.com/forgot-password",
      training: "https://profitloopaccess.com/training",
      supportEmail: "ProfitLoopAI@neoai.freshdesk.com",
      supportPortal: "https://neoaifreshdesk.freshdesk.com",
      thankYou: "http://profloop.com/thank-you",
    },
    premiumFeatures: [
      {
        name: "Accelerator",
        description:
          "Pre-scraped qualified leads — 200 verified emails per niche with hand-crafted copy ready to send.",
        url: "https://profitloopaccess.com/dfy",
      },
      {
        name: "Recurring Streams",
        description:
          "200+ ready-to-post Facebook messages — copy proven posts, paste in groups, start generating income.",
        url: "https://profitloopaccess.com/instant-income",
      },
      {
        name: "Social Payouts",
        description:
          "100+ free traffic sources — submit once, get traffic forever with no daily work required.",
        url: "https://profitloopaccess.com/autopilot",
      },
      {
        name: "Protector",
        description:
          "Account security overview with real-time monitoring of your ProfitLoop account.",
        url: "https://profitloopaccess.com/protector",
      },
    ],
  },
  {
    id: "robinhood",
    name: "Robinhood",
    description:
      "AI YouTube Shorts engagement platform that finds trending videos and generates comment packs.",
    characterName: "",
    links: {
      signUp: "https://rhappaccess.com/auth/sign-up",
      signIn: "https://rhappaccess.com/auth/login",
      forgotPassword: "https://rhappaccess.com/auth/forgot-password",
      training: "https://rhappaccess.com/training",
      supportEmail: "Robinhood@neoai.freshdesk.com",
      supportPortal: "https://robinhood.neoaifreshdesk.com/support/home",
      thankYou: "https://getrobinhod.com/thankyou",
    },
    premiumFeatures: [
      {
        name: "Accelerator",
        description:
          "Done-For-You vault — 200+ viral videos with ready-to-use comment templates.",
        url: "https://rhappaccess.com/upgrades/dfy-vault",
      },
      {
        name: "Recurring Streams",
        description:
          "200+ ready-to-post Facebook group messages — copy, paste, and earn.",
        url: "https://rhappaccess.com/upgrades/instant-income",
      },
      {
        name: "Social Payouts",
        description:
          "100+ free traffic sources — submit once, get traffic forever.",
        url: "https://rhappaccess.com/upgrades/automated-income",
      },
      {
        name: "Protector",
        description:
          "Account security overview with real-time monitoring, encryption, and session status.",
        url: "https://rhappaccess.com/upgrades/protector",
      },
    ],
  },
  {
    id: "battery-profits",
    name: "Battery Profits",
    description:
      "AI content platform for SEO authority articles, professional images, and publish guides across LinkedIn, Medium, Quora, Reddit, and X.",
    characterName: "",
    links: {
      signUp: "https://batteryproftaccess.com/signup-pro",
      signIn: "https://batteryproftaccess.com/login",
      forgotPassword: "https://batteryproftaccess.com/forgot-password",
      training: "https://batteryproftaccess.com/training",
      supportEmail: "BatteryProfits@neoai.freshdesk.com",
      supportPortal: "",
      thankYou: "",
    },
    premiumFeatures: [
      {
        name: "Social Payouts",
        description:
          "Generates 10 unique high-converting Facebook posts from a single promotional link, each with a different angle.",
        url: "https://batteryproftaccess.com/upsell/10x",
      },
      {
        name: "Recurring Wealth",
        description:
          "100 pre-written SEO authority articles across 10 niches with images included — add your link and publish.",
        url: "https://batteryproftaccess.com/upsell/infinite",
      },
      {
        name: "Accelerator",
        description:
          "60 free traffic sources with step-by-step instructions — post once and drive ongoing traffic.",
        url: "https://batteryproftaccess.com/automation",
      },
      {
        name: "Wealth Protector",
        description:
          "Account security dashboard with real-time checks, verification status, and recent activity.",
        url: "https://batteryproftaccess.com/protector",
      },
    ],
  },
  {
    id: "cashtap",
    name: "CashTap",
    description:
      "Affiliate earnings and traffic content app for creating and sharing monetized content.",
    characterName: "",
    links: {
      signUp: "https://cashtapaiaccess.com/signup",
      signIn: "https://cashtapaiaccess.com/login",
      forgotPassword: "https://cashtapaiaccess.com/forgot-password",
      training: "https://cashtapaiaccess.com/training",
      supportEmail: "cashtapai@neoai.freshdesk.com",
      supportPortal: "",
      thankYou: "https://getcashtapai.com/thankyou-page",
    },
    premiumFeatures: [
      {
        name: "Done-For-You",
        description:
          "Done-For-You Vault — 50 proven search angles and keywords ready to hunt and earn.",
        url: "https://cashtapaiaccess.com/dfy",
      },
      {
        name: "Instant Income",
        description:
          "200+ ready-to-post Facebook group messages — copy, paste, and earn today.",
        url: "https://cashtapaiaccess.com/instant",
      },
      {
        name: "Automated Profits",
        description:
          "100+ free traffic sources — submit once, get traffic forever.",
        url: "https://cashtapaiaccess.com/autopilot",
      },
    ],
  },
  {
    id: "qlaps",
    name: "Qlaps",
    description:
      "AI image and monetization platform (Q-Labs 2000) for creating and publishing income content.",
    characterName: "",
    links: {
      signUp: "https://getqlabsaccess.com/signup",
      signIn: "https://getqlabsaccess.com/login",
      forgotPassword: "https://getqlabsaccess.com/forgot-password",
      training: "https://getqlabsaccess.com/training",
      supportEmail: "support@qlabs2000.com",
      supportPortal: "",
      thankYou: "https://getqlabs.com/thankyou-page",
    },
    premiumFeatures: [
      {
        name: "Done-For-You Images",
        description:
          "Done-For-You Image Vault — 100 ready-to-go image ideas; just click Generate.",
        url: "https://getqlabsaccess.com/premium/dfy",
      },
      {
        name: "Instant Income",
        description:
          "200+ ready-made Facebook posts — copy, paste, and earn.",
        url: "https://getqlabsaccess.com/premium/instant-income",
      },
      {
        name: "Autopilot",
        description:
          "Autopilot Traffic Machine — 60 free traffic sources with step-by-step instructions.",
        url: "https://getqlabsaccess.com/premium/autopilot",
      },
    ],
  },
  {
    id: "click-clone-profits",
    name: "Click Clone Profits",
    description:
      "Content monetization app for cloning and publishing income campaigns, with Freshdesk help center support.",
    characterName: "",
    links: {
      signUp: "https://clickcloneprofits.app/auth/signup",
      signIn: "https://clickcloneprofits.app/auth/signin",
      forgotPassword: "https://clickcloneprofits.app/auth/forgot-password",
      training: "https://clickcloneprofits.app/app/training",
      supportEmail: "ClickCloneProfit@neoai.freshdesk.com",
      supportPortal:
        "https://clickcloneprofit-neoaifreshdesk-help.freshdesk.com/support/home",
      thankYou: "",
    },
    premiumFeatures: [
      {
        name: "Done For You",
        description:
          "Ready-made products (ebook + sales page) you can claim into My Products.",
        url: "https://clickcloneprofits.app/app/done-for-you",
      },
      {
        name: "Instant Income",
        description:
          "200+ ready-to-post Facebook group messages — copy, paste, and make money today.",
        url: "https://clickcloneprofits.app/app/instant-income",
      },
      {
        name: "Automated Income",
        description:
          "100+ free traffic sources — submit once, get traffic forever.",
        url: "https://clickcloneprofits.app/app/autopilot",
      },
      {
        name: "Protector",
        description:
          "Account security overview for your Click Clone Profits account.",
        url: "https://clickcloneprofits.app/app/protector",
      },
    ],
  },
  {
    id: "secret-millionaire-society",
    name: "Secret Millionaire Society",
    description: "Affiliate websites made simple — build and share sites that drive commissions.",
    characterName: "",
    links: {
      signUp: "https://getsmsociety.com/signup",
      signIn: "https://getsmsociety.com/login",
      forgotPassword: "https://getsmsociety.com/forgot-password",
      training: "https://getsmsociety.com/training",
      supportEmail: "SecretMillionairesociety@neoai.freshdesk.com",
      supportPortal: "",
      thankYou: "",
    },
    premiumFeatures: [
      {
        name: "Accelerator",
        description:
          "Unlimited websites plus ready-to-post Facebook content for any site you’ve generated.",
        url: "https://getsmsociety.com/accelerator",
      },
      {
        name: "Recurring Wealth",
        description:
          "Offers that pay every month — ready-made websites with tested content dropped into your vault with your link.",
        url: "https://getsmsociety.com/recurring-wealth",
      },
      {
        name: "Social Payouts",
        description:
          "200+ ready-to-post Facebook messages across 8 niches — paste your link, copy, and post.",
        url: "https://getsmsociety.com/social-payouts",
      },
      {
        name: "Wealth Protector",
        description:
          "Account security overview — monitored in real time so your assets stay locked down.",
        url: "https://getsmsociety.com/protector",
      },
    ],
  },
];

export const SUPPORT_FIELD_LABELS: {
  key: keyof SupportProductLinks | "characterName";
  label: string;
}[] = [
  { key: "signUp", label: "Sign up" },
  { key: "signIn", label: "Sign in" },
  { key: "forgotPassword", label: "Forgot password" },
  { key: "training", label: "Training page" },
  { key: "supportEmail", label: "Support email" },
  { key: "supportPortal", label: "Support portal" },
  { key: "thankYou", label: "Thank you page" },
  { key: "characterName", label: "Character name" },
];

export function getSupportProduct(id: string): SupportProduct | undefined {
  return SUPPORT_PRODUCTS.find((product) => product.id === id);
}
