export type SupportLocale = "en" | "ar";

export type LocalizedText = {
  en: string;
  ar: string;
};

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
  description: LocalizedText;
  url: string;
};

export type AffiliatePlatformInfo = {
  explodelyAccount: string;
  jvzooAccount: string;
};

export type TechnicalInfo = {
  supabaseUrl: string;
  supabaseAccount: string;
  digitalOceanAccount: string;
};

export type VslInfo = {
  everAffiliateAccount: string;
  convertriAccount: string;
};

export type SupportProduct = {
  id: string;
  name: string;
  description: LocalizedText;
  characterName: string;
  links: SupportProductLinks;
  premiumFeatures: PremiumFeature[];
  affiliatePlatform: AffiliatePlatformInfo;
  technical: TechnicalInfo;
  vsl: VslInfo;
};

export const EMPTY_AFFILIATE_PLATFORM: AffiliatePlatformInfo = {
  explodelyAccount: "",
  jvzooAccount: "",
};

export const EMPTY_TECHNICAL: TechnicalInfo = {
  supabaseUrl: "",
  supabaseAccount: "",
  digitalOceanAccount: "",
};

export const EMPTY_VSL: VslInfo = {
  everAffiliateAccount: "",
  convertriAccount: "",
};

export const SUPPORT_FIELD_LABELS: Record<
  keyof SupportProductLinks | "characterName",
  string
> = {
  signUp: "Sign up",
  signIn: "Sign in",
  forgotPassword: "Forgot password",
  training: "Training page",
  supportEmail: "Support email",
  supportPortal: "Support portal",
  thankYou: "Thank you page",
  characterName: "Character name",
};

export const SUPPORT_PRODUCTS: SupportProduct[] = [
  {
    id: "profitloop",
    name: "ProfitLoop",
    description: {
      en: "ProfitLoop helps people make money by sending offers to other people. The AI writes the messages for you. You pick an offer, send it out, and follow up with the people who reply. When someone buys, you get paid. The training page shows every step. You do not need any tech skills.",
      ar: "ProfitLoop يساعدك على كسب المال عن طريق إرسال عروض للناس. الذكاء الاصطناعي يكتب الرسائل بدلًا منك. أنت تختار عرضًا، وترسله، وتتابع مع من يرد عليك. عندما يشتري أحد، تحصل على المال. صفحة التدريب تشرح كل خطوة. لا تحتاج أي خبرة تقنية.",
    },
    characterName: "",
    affiliatePlatform: {
      explodelyAccount: "",
      jvzooAccount: "",
    },
    technical: {
      supabaseUrl: "",
      supabaseAccount: "",
      digitalOceanAccount: "",
    },
    vsl: {
      everAffiliateAccount: "",
      convertriAccount: "",
    },
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
        description: {
          en: "This gives you a list of people who are ready to buy. You get about 200 checked emails for each topic. The messages are already written for you. You just send them. This saves you the work of finding people yourself.",
          ar: "تعطيك قائمة بأشخاص جاهزين للشراء. تحصل على حوالي 200 بريد إلكتروني موثوق لكل مجال. الرسائل مكتوبة لك مسبقًا. أنت فقط ترسلها. هذا يوفر عليك عناء البحث عن الناس بنفسك.",
        },
        url: "https://profitloopaccess.com/dfy",
      },
      {
        name: "Recurring Streams",
        description: {
          en: "This gives you more than 200 Facebook posts that are ready to use. You copy a post, add your link, and share it in Facebook groups. People see the post, click your link, and you can earn money. You can do this again and again.",
          ar: "تعطيك أكثر من 200 منشور فيسبوك جاهز. تنسخ المنشور، وتضيف رابطك، وتشاركه في مجموعات فيسبوك. الناس يرون المنشور، ويضغطون على رابطك، وتكسب المال. ويمكنك تكرار ذلك مرارًا.",
        },
        url: "https://profitloopaccess.com/instant-income",
      },
      {
        name: "Social Payouts",
        description: {
          en: "This is a list of more than 100 free websites where you can share your link. You post your link one time on each site. Then people keep finding it and visiting for a long time. You do not pay for ads.",
          ar: "قائمة بأكثر من 100 موقع مجاني يمكنك نشر رابطك فيه. تنشر رابطك مرة واحدة في كل موقع. وبعدها يستمر الناس في رؤيته وزيارته لوقت طويل. لا تدفع أي إعلانات.",
        },
        url: "https://profitloopaccess.com/autopilot",
      },
      {
        name: "Protector",
        description: {
          en: "This page shows if the account is safe. It checks the account all the time. If a member asks about account safety, send them this page.",
          ar: "هذه الصفحة تعرض إذا كان الحساب آمنًا. تفحص الحساب طوال الوقت. إذا سأل عضو عن أمان حسابه، أرسل له هذه الصفحة.",
        },
        url: "https://profitloopaccess.com/protector",
      },
    ],
  },
  {
    id: "robinhood",
    name: "Robinhood",
    description: {
      en: "Robinhood helps people earn money using YouTube Shorts. The app finds videos that are getting lots of views right now. Then the AI writes comments for those videos. You post the comments with your link. People see your comment, click your link, and you can earn money.",
      ar: "Robinhood يساعدك على كسب المال من يوتيوب شورتس. التطبيق يجد الفيديوهات التي تحصل على مشاهدات كثيرة الآن. ثم يكتب الذكاء الاصطناعي تعليقات لهذه الفيديوهات. أنت تنشر التعليقات مع رابطك. الناس يرون تعليقك، ويضغطون على رابطك، وتكسب المال.",
    },
    characterName: "",
    affiliatePlatform: {
      explodelyAccount: "",
      jvzooAccount: "",
    },
    technical: {
      supabaseUrl: "",
      supabaseAccount: "",
      digitalOceanAccount: "",
    },
    vsl: {
      everAffiliateAccount: "",
      convertriAccount: "",
    },
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
        description: {
          en: "This gives you more than 200 popular videos with comments already written for them. You do not need to write anything. Just copy a comment, change a word or two, and post it. This makes the work much faster.",
          ar: "تعطيك أكثر من 200 فيديو رائج مع تعليقات مكتوبة جاهزة. لا تحتاج أن تكتب شيئًا. فقط انسخ التعليق، وغيّر كلمة أو اثنتين، وانشره. هذا يجعل العمل أسرع بكثير.",
        },
        url: "https://rhappaccess.com/upgrades/dfy-vault",
      },
      {
        name: "Recurring Streams",
        description: {
          en: "This gives you more than 200 Facebook posts that are ready to use. The posts sound like real stories, not ads. You add your link, post in Facebook groups, and people click your link.",
          ar: "تعطيك أكثر من 200 منشور فيسبوك جاهز. المنشورات تبدو كقصص حقيقية، وليست إعلانات. تضيف رابطك، وتنشر في مجموعات فيسبوك، والناس يضغطون على رابطك.",
        },
        url: "https://rhappaccess.com/upgrades/instant-income",
      },
      {
        name: "Social Payouts",
        description: {
          en: "This is a list of more than 100 free websites where you can share your link. You post one time, and people keep visiting for a long time. No ads and no daily work needed.",
          ar: "قائمة بأكثر من 100 موقع مجاني يمكنك نشر رابطك فيه. تنشر مرة واحدة، ويستمر الناس في الزيارة لوقت طويل. لا إعلانات ولا عمل يومي.",
        },
        url: "https://rhappaccess.com/upgrades/automated-income",
      },
      {
        name: "Protector",
        description: {
          en: "This page shows if the account is safe. It checks logins and sessions all the time. If a member asks about account safety, send them this page.",
          ar: "هذه الصفحة تعرض إذا كان الحساب آمنًا. تفحص تسجيلات الدخول والجلسات طوال الوقت. إذا سأل عضو عن أمان حسابه، أرسل له هذه الصفحة.",
        },
        url: "https://rhappaccess.com/upgrades/protector",
      },
    ],
  },
  {
    id: "battery-profits",
    name: "Battery Profits",
    description: {
      en: "Battery Profits helps people earn money by posting articles online. The AI writes a full article for you, about 1,500 words, with pictures. You add your link inside the article. Then you post it on sites like LinkedIn, Medium, Quora, Reddit, and X. People read the article, click your link, and you can earn money.",
      ar: "Battery Profits يساعدك على كسب المال عن طريق نشر مقالات على الإنترنت. الذكاء الاصطناعي يكتب لك مقالًا كاملًا، حوالي 1500 كلمة، مع صور. تضيف رابطك داخل المقال. ثم تنشره في مواقع مثل LinkedIn وMedium وQuora وReddit وX. الناس يقرؤون المقال، ويضغطون على رابطك، وتكسب المال.",
    },
    characterName: "",
    affiliatePlatform: {
      explodelyAccount: "",
      jvzooAccount: "",
    },
    technical: {
      supabaseUrl: "",
      supabaseAccount: "",
      digitalOceanAccount: "",
    },
    vsl: {
      everAffiliateAccount: "",
      convertriAccount: "",
    },
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
        description: {
          en: "You give it one link, and it writes 10 different Facebook posts for you. Each post is written in a different way. You can share them in many groups without writing anything yourself.",
          ar: "تعطيه رابطًا واحدًا، فيكتب لك 10 منشورات فيسبوك مختلفة. كل منشور مكتوب بطريقة مختلفة. يمكنك مشاركتها في مجموعات كثيرة دون أن تكتب شيئًا بنفسك.",
        },
        url: "https://batteryproftaccess.com/upsell/10x",
      },
      {
        name: "Recurring Wealth",
        description: {
          en: "This gives you 100 articles that are already written, with pictures. They cover 10 money-making topics. You add your link, save, and post. No writing needed.",
          ar: "تعطيك 100 مقال مكتوب مسبقًا، مع صور. تغطي 10 مجالات مربحة. تضيف رابطك، وتحفظ، وتنشر. لا حاجة للكتابة.",
        },
        url: "https://batteryproftaccess.com/upsell/infinite",
      },
      {
        name: "Accelerator",
        description: {
          en: "This is a list of 60 free websites where you can share your work. Each one has simple steps to follow. You post one time, and people keep visiting your links for a long time.",
          ar: "قائمة بـ 60 موقعًا مجانيًا يمكنك نشر عملك فيه. كل موقع له خطوات بسيطة. تنشر مرة واحدة، ويستمر الناس في زيارة روابطك لوقت طويل.",
        },
        url: "https://batteryproftaccess.com/automation",
      },
      {
        name: "Wealth Protector",
        description: {
          en: "This page shows if the account is safe. It checks the account all the time and shows recent activity. If a member asks about account safety, send them this page.",
          ar: "هذه الصفحة تعرض إذا كان الحساب آمنًا. تفحص الحساب طوال الوقت وتعرض آخر نشاط. إذا سأل عضو عن أمان حسابه، أرسل له هذه الصفحة.",
        },
        url: "https://batteryproftaccess.com/protector",
      },
    ],
  },
  {
    id: "cashtap",
    name: "CashTap",
    description: {
      en: "CashTap helps people earn money with special links. You get a link from a store or offer site. When someone buys through your link, you get paid. The app helps you find good topics, write posts, and share your link in the right places. The training shows you every step.",
      ar: "CashTap يساعدك على كسب المال من الروابط الخاصة. تحصل على رابط من متجر أو موقع عروض. عندما يشتري أحد من خلال رابطك، تحصل على المال. التطبيق يساعدك على إيجاد مواضيع جيدة، وكتابة منشورات، ونشر رابطك في الأماكن الصحيحة. التدريب يشرح كل خطوة.",
    },
    characterName: "",
    affiliatePlatform: {
      explodelyAccount: "",
      jvzooAccount: "",
    },
    technical: {
      supabaseUrl: "",
      supabaseAccount: "",
      digitalOceanAccount: "",
    },
    vsl: {
      everAffiliateAccount: "",
      convertriAccount: "",
    },
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
        description: {
          en: "This gives you 50 topics and search words that already work. You do not need to think of ideas yourself. Just pick one and start. This helps you earn faster.",
          ar: "تعطيك 50 موضوعًا وكلمة بحث مجربة وناجحة. لا تحتاج أن تفكر في أفكار بنفسك. فقط اختر واحدة وابدأ. هذا يساعدك على الكسب أسرع.",
        },
        url: "https://cashtapaiaccess.com/dfy",
      },
      {
        name: "Instant Income",
        description: {
          en: "This gives you more than 200 Facebook posts that are ready to use. You add your link, copy the post, and share it in Facebook groups. You can start the same day.",
          ar: "تعطيك أكثر من 200 منشور فيسبوك جاهز. تضيف رابطك، وتنسخ المنشور، وتشاركه في مجموعات فيسبوك. يمكنك البدء في نفس اليوم.",
        },
        url: "https://cashtapaiaccess.com/instant",
      },
      {
        name: "Automated Profits",
        description: {
          en: "This is a list of more than 100 free websites where you can share your link. You post one time, and people keep visiting for a long time. No daily work needed.",
          ar: "قائمة بأكثر من 100 موقع مجاني يمكنك نشر رابطك فيه. تنشر مرة واحدة، ويستمر الناس في الزيارة لوقت طويل. لا حاجة لعمل يومي.",
        },
        url: "https://cashtapaiaccess.com/autopilot",
      },
    ],
  },
  {
    id: "qlaps",
    name: "Qlaps",
    description: {
      en: "Qlaps helps people earn money using AI pictures. The app makes nice pictures for you with one click. You add your link to the picture and post it on sites like Pinterest, Instagram, and Facebook. When people click your link and buy, you get paid.",
      ar: "Qlaps يساعدك على كسب المال باستخدام صور الذكاء الاصطناعي. التطبيق يصنع لك صورًا جميلة بضغطة واحدة. تضيف رابطك إلى الصورة وتنشرها في مواقع مثل Pinterest وInstagram وFacebook. عندما يضغط الناس على رابطك ويشترون، تحصل على المال.",
    },
    characterName: "",
    affiliatePlatform: {
      explodelyAccount: "",
      jvzooAccount: "",
    },
    technical: {
      supabaseUrl: "",
      supabaseAccount: "",
      digitalOceanAccount: "",
    },
    vsl: {
      everAffiliateAccount: "",
      convertriAccount: "",
    },
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
        description: {
          en: "This gives you 100 picture ideas that already work. You do not need to think of ideas. Just pick one and click Generate. The picture is ready to post.",
          ar: "تعطيك 100 فكرة صورة مجربة وناجحة. لا تحتاج أن تفكر في أفكار. فقط اختر واحدة واضغط Generate. الصورة تكون جاهزة للنشر.",
        },
        url: "https://getqlabsaccess.com/premium/dfy",
      },
      {
        name: "Instant Income",
        description: {
          en: "This gives you more than 200 Facebook posts that are ready to use. You copy a post, add your link, and share it in groups. No writing needed.",
          ar: "تعطيك أكثر من 200 منشور فيسبوك جاهز. تنسخ المنشور، وتضيف رابطك، وتشاركه في المجموعات. لا حاجة للكتابة.",
        },
        url: "https://getqlabsaccess.com/premium/instant-income",
      },
      {
        name: "Autopilot",
        description: {
          en: "This is a list of 60 free websites where you can share your pictures and links. Each one has simple steps. You post one time, and people keep visiting for a long time.",
          ar: "قائمة بـ 60 موقعًا مجانيًا يمكنك نشر صورك وروابطك فيه. كل موقع له خطوات بسيطة. تنشر مرة واحدة، ويستمر الناس في الزيارة لوقت طويل.",
        },
        url: "https://getqlabsaccess.com/premium/autopilot",
      },
    ],
  },
  {
    id: "click-clone-profits",
    name: "Click Clone Profits",
    description: {
      en: "Click Clone Profits helps people earn money by selling ready-made products. The app gives you products like ebooks with sales pages already built. You take a product, share it online, and when someone buys, you get paid. The training shows you how to do each step.",
      ar: "Click Clone Profits يساعدك على كسب المال ببيع منتجات جاهزة. التطبيق يعطيك منتجات مثل كتب إلكترونية مع صفحات بيع جاهزة. تأخذ المنتج، وتشاركه على الإنترنت، وعندما يشتري أحد، تحصل على المال. التدريب يشرح لك كل خطوة.",
    },
    characterName: "",
    affiliatePlatform: {
      explodelyAccount: "",
      jvzooAccount: "",
    },
    technical: {
      supabaseUrl: "",
      supabaseAccount: "",
      digitalOceanAccount: "",
    },
    vsl: {
      everAffiliateAccount: "",
      convertriAccount: "",
    },
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
        description: {
          en: "This gives you finished products, like ebooks with sales pages. You claim a product and it goes to My Products. Then you can start selling it right away. No need to make anything yourself.",
          ar: "تعطيك منتجات جاهزة، مثل كتب إلكترونية مع صفحات بيع. تطالب بالمنتج فينتقل إلى My Products. ثم يمكنك البدء ببيعه فورًا. لا حاجة لصنع أي شيء بنفسك.",
        },
        url: "https://clickcloneprofits.app/app/done-for-you",
      },
      {
        name: "Instant Income",
        description: {
          en: "This gives you more than 200 Facebook posts that are ready to use. You add your product link, copy the post, and share it in groups. You can start the same day.",
          ar: "تعطيك أكثر من 200 منشور فيسبوك جاهز. تضيف رابط منتجك، وتنسخ المنشور، وتشاركه في المجموعات. يمكنك البدء في نفس اليوم.",
        },
        url: "https://clickcloneprofits.app/app/instant-income",
      },
      {
        name: "Automated Income",
        description: {
          en: "This is a list of more than 100 free websites where you can share your link. You post one time, and people keep visiting for a long time. No daily work needed.",
          ar: "قائمة بأكثر من 100 موقع مجاني يمكنك نشر رابطك فيه. تنشر مرة واحدة، ويستمر الناس في الزيارة لوقت طويل. لا حاجة لعمل يومي.",
        },
        url: "https://clickcloneprofits.app/app/autopilot",
      },
      {
        name: "Protector",
        description: {
          en: "This page shows if the account is safe. It checks the account all the time. If a member asks about account safety, send them this page.",
          ar: "هذه الصفحة تعرض إذا كان الحساب آمنًا. تفحص الحساب طوال الوقت. إذا سأل عضو عن أمان حسابه، أرسل له هذه الصفحة.",
        },
        url: "https://clickcloneprofits.app/app/protector",
      },
    ],
  },
  {
    id: "secret-millionaire-society",
    name: "Secret Millionaire Society",
    description: {
      en: "Secret Millionaire Society helps people earn money with simple websites. The app builds the website for you. You add your link to the site and share it online. When people visit your site and buy, you get paid. You do not need to know how to build websites.",
      ar: "Secret Millionaire Society يساعدك على كسب المال من مواقع بسيطة. التطبيق يبني الموقع بدلًا منك. تضيف رابطك إلى الموقع وتشاركه على الإنترنت. عندما يزور الناس موقعك ويشترون، تحصل على المال. لا تحتاج أن تعرف كيف تُبنى المواقع.",
    },
    characterName: "",
    affiliatePlatform: {
      explodelyAccount: "",
      jvzooAccount: "",
    },
    technical: {
      supabaseUrl: "",
      supabaseAccount: "",
      digitalOceanAccount: "",
    },
    vsl: {
      everAffiliateAccount: "",
      convertriAccount: "",
    },
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
        description: {
          en: "This lets you build as many websites as you want. It also gives you ready Facebook posts for each site you make. This helps you grow faster and share more.",
          ar: "تتيح لك بناء عدد غير محدود من المواقع. وتعطيك أيضًا منشورات فيسبوك جاهزة لكل موقع تصنعه. هذا يساعدك على النمو أسرع والمشاركة أكثر.",
        },
        url: "https://getsmsociety.com/accelerator",
      },
      {
        name: "Recurring Wealth",
        description: {
          en: "This gives you ready websites with offers that pay you every month, not just one time. The site comes with your link already inside. You just share it and earn.",
          ar: "تعطيك مواقع جاهزة بعروض تدفع لك كل شهر، وليس مرة واحدة فقط. الموقع يأتي مع رابطك جاهزًا بداخله. أنت فقط تشاركه وتكسب.",
        },
        url: "https://getsmsociety.com/recurring-wealth",
      },
      {
        name: "Social Payouts",
        description: {
          en: "This gives you more than 200 Facebook posts for 8 different topics. You add your website link, copy the post, and share it in groups. This sends people to your websites.",
          ar: "تعطيك أكثر من 200 منشور فيسبوك في 8 مجالات مختلفة. تضيف رابط موقعك، وتنسخ المنشور، وتشاركه في المجموعات. هذا يرسل الناس إلى مواقعك.",
        },
        url: "https://getsmsociety.com/social-payouts",
      },
      {
        name: "Wealth Protector",
        description: {
          en: "This page shows if the account is safe. It checks the account all the time. If a member asks about account safety, send them this page.",
          ar: "هذه الصفحة تعرض إذا كان الحساب آمنًا. تفحص الحساب طوال الوقت. إذا سأل عضو عن أمان حسابه، أرسل له هذه الصفحة.",
        },
        url: "https://getsmsociety.com/protector",
      },
    ],
  },
];

export const SUPPORT_FIELD_KEYS: Array<
  keyof SupportProductLinks | "characterName"
> = [
  "signUp",
  "signIn",
  "forgotPassword",
  "training",
  "supportEmail",
  "supportPortal",
  "thankYou",
  "characterName",
];

export function getSupportProduct(id: string): SupportProduct | undefined {
  return SUPPORT_PRODUCTS.find((product) => product.id === id);
}

export function t(text: LocalizedText, locale: SupportLocale): string {
  return text[locale];
}
