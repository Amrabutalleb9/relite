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

export type SupportProduct = {
  id: string;
  name: string;
  description: LocalizedText;
  characterName: string;
  links: SupportProductLinks;
  premiumFeatures: PremiumFeature[];
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
      en: "ProfitLoop is an AI-powered outreach and campaign platform built to help members run income loops at scale. Users create outreach offers, generate copy, manage leads, and follow step-by-step training to turn cold contacts into paid opportunities. The app is designed for beginners who want a clear path from signup to sending, tracking, and repeating profitable campaigns without needing technical skills.",
      ar: "ProfitLoop منصة مدعومة بالذكاء الاصطناعي للتواصل وإدارة الحملات، تساعد الأعضاء على تشغيل حلقات دخل قابلة للتكرار. ينشئ المستخدم العروض، ويولد النصوص، ويدير العملاء المحتملين، ويتبع تدريبًا خطوة بخطوة لتحويل التواصل البارد إلى فرص مدفوعة. التطبيق مصمم للمبتدئين الذين يريدون مسارًا واضحًا من التسجيل إلى الإرسال والمتابعة وتكرار الحملات المربحة دون خبرة تقنية.",
    },
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
        description: {
          en: "Gives members exclusive access to pre-scraped, highly qualified leads so they can skip cold research. Each niche pack includes around 200 verified emails plus hand-crafted outreach copy ready to personalize and send, helping users start conversations faster and close more opportunities.",
          ar: "يمنح الأعضاء وصولًا حصريًا إلى عملاء محتملين مؤهلين مسبقًا لتوفير وقت البحث البارد. كل باقة متخصصة تتضمن حوالي 200 بريد إلكتروني موثق مع نصوص تواصل جاهزة للتخصيص والإرسال، مما يساعد على بدء المحادثات بسرعة أكبر وزيادة الفرص المغلقة.",
        },
        url: "https://profitloopaccess.com/dfy",
      },
      {
        name: "Recurring Streams",
        description: {
          en: "A swipe-file library of 200+ ready-to-post Facebook messages written for group engagement. Members copy a proven post, paste their link, publish in relevant groups, and reuse the same style of content to build a recurring stream of traffic and inquiries.",
          ar: "مكتبة جاهزة تضم أكثر من 200 رسالة فيسبوك معدة للنشر داخل المجموعات. ينسخ العضو منشورًا مجربًا، ويضيف رابطه، وينشره في المجموعات المناسبة، ثم يعيد استخدام نفس الأسلوب لبناء تدفق متكرر من الزيارات والاستفسارات.",
        },
        url: "https://profitloopaccess.com/instant-income",
      },
      {
        name: "Social Payouts",
        description: {
          en: "A curated directory of 100+ free traffic sources where users submit once and keep receiving visitors over time. Each source comes with simple guidance so members can build long-term traffic without paying for ads or posting every day.",
          ar: "دليل منظم لأكثر من 100 مصدر زيارات مجاني يمكن الإرسال إليه مرة واحدة والاستمرار في استقبال الزوار لاحقًا. كل مصدر يأتي بإرشادات بسيطة لمساعدة الأعضاء على بناء زيارات طويلة الأمد دون إعلانات مدفوعة أو نشر يومي.",
        },
        url: "https://profitloopaccess.com/autopilot",
      },
      {
        name: "Protector",
        description: {
          en: "An account security overview that shows monitoring status, protection checks, and account health at a glance. Support can point members here when they ask whether their ProfitLoop account and sessions are secure.",
          ar: "نظرة عامة على أمان الحساب تعرض حالة المراقبة وفحوصات الحماية وصحة الحساب بسرعة. يمكن لفريق الدعم توجيه الأعضاء إلى هذه الصفحة عند السؤال عن أمان حساب ProfitLoop والجلسات.",
        },
        url: "https://profitloopaccess.com/protector",
      },
    ],
  },
  {
    id: "robinhood",
    name: "Robinhood",
    description: {
      en: "Robinhood is an AI engagement platform focused on YouTube Shorts growth. It helps creators discover trending short-form videos, generate natural comment packs, organize those packs, and deploy them strategically to drive authentic engagement. Members use it to spend less time writing comments manually and more time placing high-quality replies where attention already exists.",
      ar: "Robinhood منصة تفاعل بالذكاء الاصطناعي تركز على نمو يوتيوب شورتس. تساعد صنّاع المحتوى على اكتشاف الفيديوهات الرائجة، وتوليد باقات تعليقات طبيعية، وتنظيمها، ونشرها بشكل استراتيجي لزيادة التفاعل الحقيقي. يستخدمها الأعضاء لتقليل الكتابة اليدوية والتركيز على وضع ردود عالية الجودة حيث يوجد الاهتمام أصلًا.",
    },
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
        description: {
          en: "A Done-For-You vault of 200+ viral video opportunities with ready-to-use comment templates. Members open a video pack, copy polished comments, lightly personalize them, and post faster without building every reply from scratch.",
          ar: "خزنة جاهزة تضم أكثر من 200 فرصة فيديو رائج مع قوالب تعليقات جاهزة للاستخدام. يفتح العضو الباقة، وينسخ تعليقات مصقولة، ويخصصها قليلًا، ثم ينشر بسرعة دون كتابة كل رد من الصفر.",
        },
        url: "https://rhappaccess.com/upgrades/dfy-vault",
      },
      {
        name: "Recurring Streams",
        description: {
          en: "200+ ready-to-post Facebook group messages designed to sound like personal stories rather than hard ads. Users paste their affiliate or offer link into the message and post across groups to create a recurring engagement-to-traffic loop.",
          ar: "أكثر من 200 رسالة جاهزة لمجموعات فيسبوك مكتوبة بأسلوب قصص شخصية بدل الإعلان المباشر. يلصق المستخدم رابطه داخل الرسالة وينشرها في المجموعات ليخلق حلقة متكررة من التفاعل والزيارات.",
        },
        url: "https://rhappaccess.com/upgrades/instant-income",
      },
      {
        name: "Social Payouts",
        description: {
          en: "A set-and-forget traffic system with 100+ free places to submit content once and keep getting visitors. Ideal for members who want ongoing exposure without managing paid ads or daily posting schedules.",
          ar: "نظام زيارات يعتمد على الإرسال مرة واحدة إلى أكثر من 100 مكان مجاني مع استمرار وصول الزوار. مناسب للأعضاء الذين يريدون ظهورًا مستمرًا دون إعلانات مدفوعة أو جداول نشر يومية.",
        },
        url: "https://rhappaccess.com/upgrades/automated-income",
      },
      {
        name: "Protector",
        description: {
          en: "Security dashboard covering real-time monitoring, encryption status, and session health. Use this page when members ask how their Robinhood account is protected or whether login activity looks normal.",
          ar: "لوحة أمان تغطي المراقبة اللحظية وحالة التشفير وصحة الجلسات. استخدم هذه الصفحة عندما يسأل الأعضاء كيف يتم حماية حساب Robinhood أو ما إذا كان نشاط تسجيل الدخول طبيعيًا.",
        },
        url: "https://rhappaccess.com/upgrades/protector",
      },
    ],
  },
  {
    id: "battery-profits",
    name: "Battery Profits",
    description: {
      en: "Battery Profits is an AI content platform that helps members create SEO-focused authority articles (about 1,500 words), generate matching professional images, and publish across LinkedIn, Medium, Quora, Reddit, and X. The workflow is built for affiliate and promotional traffic: pick a topic, add a money link, generate publish-ready content, then follow platform guides to post manually and safely.",
      ar: "Battery Profits منصة محتوى بالذكاء الاصطناعي تساعد الأعضاء على إنشاء مقالات سلطة محسّنة لمحركات البحث (حوالي 1500 كلمة)، وتوليد صور احترافية مطابقة، والنشر عبر LinkedIn وMedium وQuora وReddit وX. سير العمل مصمم لزيارات الأفلييت: اختيار موضوع، إضافة رابط ربح، توليد محتوى جاهز للنشر، ثم اتباع أدلة المنصات للنشر اليدوي الآمن.",
    },
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
        description: {
          en: "Turns one promotional link into 10 unique high-converting Facebook posts, each using a different angle such as urgency, social proof, storytelling, or curiosity. Members can rotate these posts across groups to maximize reach without rewriting every message.",
          ar: "يحوّل رابطًا ترويجيًا واحدًا إلى 10 منشورات فيسبوك فريدة عالية التحويل، كل منها بزاوية مختلفة مثل الاستعجال أو الإثبات الاجتماعي أو السرد أو الفضول. يمكن للأعضاء تدوير هذه المنشورات عبر المجموعات لزيادة الوصول دون إعادة كتابة كل رسالة.",
        },
        url: "https://batteryproftaccess.com/upsell/10x",
      },
      {
        name: "Recurring Wealth",
        description: {
          en: "A library of 100 pre-written, SEO-optimized authority articles across 10 profitable niches, each bundled with professional images. Members insert their promotional link, save the article, and publish it to build longer-term search and social traffic.",
          ar: "مكتبة من 100 مقالة سلطة مكتوبة مسبقًا ومحسّنة لمحركات البحث عبر 10 مجالات مربحة، مع صور احترافية لكل مقال. يضيف العضو رابطه الترويجي، ويحفظ المقال، ثم ينشره لبناء زيارات بحثية واجتماعية أطول أمدًا.",
        },
        url: "https://batteryproftaccess.com/upsell/infinite",
      },
      {
        name: "Accelerator",
        description: {
          en: "Provides 60 free traffic sources with niche-organized lists and step-by-step posting instructions. Members submit content once in the right communities and keep sending visitors to their promotional links over time.",
          ar: "يوفر 60 مصدر زيارات مجانيًا مع قوائم منظمة حسب المجالات وتعليمات نشر خطوة بخطوة. يرسل العضو المحتوى مرة واحدة في المجتمعات المناسبة ويستمر في توجيه الزوار إلى روابطه الترويجية مع الوقت.",
        },
        url: "https://batteryproftaccess.com/automation",
      },
      {
        name: "Wealth Protector",
        description: {
          en: "Account security dashboard showing real-time checks, verification status, encrypted connection status, and recent account activity. Best for support replies when members ask if their Battery Profits account is secure.",
          ar: "لوحة أمان للحساب تعرض فحوصات لحظية وحالة التحقق والاتصال المشفّر ونشاط الحساب الأخير. مفيدة لردود الدعم عندما يسأل الأعضاء عن أمان حساب Battery Profits.",
        },
        url: "https://batteryproftaccess.com/protector",
      },
    ],
  },
  {
    id: "cashtap",
    name: "CashTap",
    description: {
      en: "CashTap (CashTap AI) is an affiliate earnings app that helps members create monetized content, store money links, and follow traffic methods that can send buyers to their offers. It is designed as a beginner-friendly system for finding angles, generating replies or posts, and turning everyday online activity into commission opportunities.",
      ar: "CashTap (CashTap AI) تطبيق أرباح أفلييت يساعد الأعضاء على إنشاء محتوى مربح، وحفظ روابط المال، واتباع طرق زيارات يمكن أن ترسل مشترين إلى عروضهم. مصمم كنظام سهل للمبتدئين لاكتشاف الزوايا، وتوليد الردود أو المنشورات، وتحويل النشاط اليومي على الإنترنت إلى فرص عمولات.",
    },
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
        description: {
          en: "A Done-For-You Vault with 50 proven search angles and keywords members can use immediately. Instead of inventing niches from scratch, users pick a validated angle, hunt with it, and start earning faster.",
          ar: "خزنة Done-For-You تضم 50 زاوية بحث وكلمة مفتاحية مجرّبة يمكن استخدامها فورًا. بدل اختراع المجالات من الصفر، يختار المستخدم زاوية مثبتة ويبدأ البحث والكسب بسرعة أكبر.",
        },
        url: "https://cashtapaiaccess.com/dfy",
      },
      {
        name: "Instant Income",
        description: {
          en: "200+ ready-to-post Facebook group messages written as personal success-style posts. Members paste their affiliate link, copy a message, and publish into groups to generate engagement and traffic the same day.",
          ar: "أكثر من 200 رسالة جاهزة لمجموعات فيسبوك مكتوبة بأسلوب قصص نجاح شخصية. يلصق العضو رابط الأفلييت، وينسخ الرسالة، وينشرها في المجموعات لتوليد تفاعل وزيارات في نفس اليوم.",
        },
        url: "https://cashtapaiaccess.com/instant",
      },
      {
        name: "Automated Profits",
        description: {
          en: "A traffic automation library of 100+ free sources where users submit once and continue receiving visitors. Useful for members who want ongoing clicks without constant daily posting.",
          ar: "مكتبة أتمتة زيارات تضم أكثر من 100 مصدر مجاني يمكن الإرسال إليه مرة واحدة مع استمرار وصول الزوار. مفيدة للأعضاء الذين يريدون نقرات مستمرة دون نشر يومي دائم.",
        },
        url: "https://cashtapaiaccess.com/autopilot",
      },
    ],
  },
  {
    id: "qlaps",
    name: "Qlaps",
    description: {
      en: "Qlaps (Q-Labs 2000) is an AI image and monetization platform that helps members generate click-worthy visuals, attach affiliate or money links, and publish across social channels. The core idea is simple: create attractive images quickly, pair them with a commission link, and follow training to post consistently for traffic and sales.",
      ar: "Qlaps (Q-Labs 2000) منصة صور وربح بالذكاء الاصطناعي تساعد الأعضاء على توليد صور جذابة، وربطها بروابط أفلييت أو روابط مال، والنشر عبر القنوات الاجتماعية. الفكرة الأساسية بسيطة: إنشاء صور جذابة بسرعة، وربطها برابط عمولة، واتباع التدريب للنشر باستمرار من أجل الزيارات والمبيعات.",
    },
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
        description: {
          en: "A Done-For-You Image Vault with 100 ready image ideas. Members browse proven concepts, click Generate, and get publish-ready creatives without writing prompts or designing from scratch.",
          ar: "خزنة صور Done-For-You تضم 100 فكرة صورة جاهزة. يتصفح العضو مفاهيم مجرّبة، ويضغط Generate، ويحصل على تصاميم جاهزة للنشر دون كتابة برومبتات أو تصميم من الصفر.",
        },
        url: "https://getqlabsaccess.com/premium/dfy",
      },
      {
        name: "Instant Income",
        description: {
          en: "200+ ready-made Facebook posts that members can copy, paste, and publish with their links. Built for fast posting inside groups so users can start driving attention without writing captions every time.",
          ar: "أكثر من 200 منشور فيسبوك جاهز يمكن نسخه ولصقه ونشره مع الروابط. مصمم للنشر السريع داخل المجموعات حتى يبدأ المستخدم بجذب الانتباه دون كتابة وصف في كل مرة.",
        },
        url: "https://getqlabsaccess.com/premium/instant-income",
      },
      {
        name: "Autopilot",
        description: {
          en: "Autopilot Traffic Machine with 60 free traffic sources and step-by-step instructions. Members post or submit once in the listed places and keep sending visitors back to their monetized images and links.",
          ar: "آلة زيارات Autopilot تضم 60 مصدرًا مجانيًا مع تعليمات خطوة بخطوة. ينشر العضو أو يرسل مرة واحدة في الأماكن المدرجة ويستمر في إعادة الزوار إلى صوره وروابطه المربحة.",
        },
        url: "https://getqlabsaccess.com/premium/autopilot",
      },
    ],
  },
  {
    id: "click-clone-profits",
    name: "Click Clone Profits",
    description: {
      en: "Click Clone Profits is a content monetization app for members who want to create or claim products, promote them online, and follow guided traffic methods. It combines product workflows with training and Freshdesk support so users can clone proven campaign styles, publish offers, and get help when they get stuck.",
      ar: "Click Clone Profits تطبيق تحقيق دخل من المحتوى للأعضاء الذين يريدون إنشاء أو المطالبة بمنتجات، والترويج لها أونلاين، واتباع طرق زيارات موجّهة. يجمع بين سير عمل المنتجات والتدريب ودعم Freshdesk حتى يتمكن المستخدم من استنساخ أساليب حملات مجرّبة ونشر العروض والحصول على مساعدة عند التعثر.",
    },
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
        description: {
          en: "Ready-made digital products such as ebooks and sales pages that members can claim into My Products. This removes the need to invent an offer from zero and lets users start promoting a packaged product immediately.",
          ar: "منتجات رقمية جاهزة مثل الكتب الإلكترونية وصفحات المبيعات يمكن المطالبة بها داخل My Products. هذا يلغي الحاجة لاختراع عرض من الصفر ويسمح للمستخدم بالبدء في الترويج لمنتج جاهز فورًا.",
        },
        url: "https://clickcloneprofits.app/app/done-for-you",
      },
      {
        name: "Instant Income",
        description: {
          en: "200+ ready-to-post Facebook group messages for quick promotion. Members copy a message, insert their product or affiliate link, and post into groups to generate traffic and sales conversations.",
          ar: "أكثر من 200 رسالة جاهزة لمجموعات فيسبوك للترويج السريع. ينسخ العضو الرسالة، ويضيف رابط المنتج أو الأفلييت، وينشرها في المجموعات لتوليد زيارات ومحادثات مبيعات.",
        },
        url: "https://clickcloneprofits.app/app/instant-income",
      },
      {
        name: "Automated Income",
        description: {
          en: "100+ free traffic sources with a submit-once workflow for ongoing visitors. Helpful for members who want passive exposure while they continue promoting elsewhere.",
          ar: "أكثر من 100 مصدر زيارات مجاني بنمط الإرسال مرة واحدة للحصول على زوار مستمرين. مفيد للأعضاء الذين يريدون ظهورًا شبه تلقائي بينما يستمرون في الترويج في أماكن أخرى.",
        },
        url: "https://clickcloneprofits.app/app/autopilot",
      },
      {
        name: "Protector",
        description: {
          en: "Account security overview for Click Clone Profits. Support can send members here when they need confirmation that account monitoring and protection status are active.",
          ar: "نظرة عامة على أمان حساب Click Clone Profits. يمكن لفريق الدعم إرسال الأعضاء إلى هذه الصفحة عندما يحتاجون تأكيد أن المراقبة والحماية نشطة.",
        },
        url: "https://clickcloneprofits.app/app/protector",
      },
    ],
  },
  {
    id: "secret-millionaire-society",
    name: "Secret Millionaire Society",
    description: {
      en: "Secret Millionaire Society helps members build simple affiliate websites and share them to earn commissions. Users generate sites, attach offers, publish content, and use society tools to promote those sites with ready social posts and growth features, without needing to be a developer or marketer.",
      ar: "Secret Millionaire Society يساعد الأعضاء على بناء مواقع أفلييت بسيطة ومشاركتها لكسب العمولات. ينشئ المستخدم المواقع، ويربط العروض، وينشر المحتوى، ويستخدم أدوات المجتمع للترويج عبر منشورات اجتماعية جاهزة وميزات نمو، دون الحاجة لأن يكون مطورًا أو مسوقًا محترفًا.",
    },
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
        description: {
          en: "Unlocks higher output for active members, including unlimited websites plus ready-to-post Facebook content tied to sites they have already generated. Useful when members want to scale beyond a single site and promote faster.",
          ar: "يفتح إنتاجية أعلى للأعضاء النشطين، بما في ذلك مواقع غير محدودة ومحتوى فيسبوك جاهز مرتبط بالمواقع التي أنشؤوها بالفعل. مفيد عندما يريد العضو التوسع لأكثر من موقع واحد والترويج بسرعة أكبر.",
        },
        url: "https://getsmsociety.com/accelerator",
      },
      {
        name: "Recurring Wealth",
        description: {
          en: "Focuses on offers and website packages designed for monthly recurring commissions. Ready-made sites with tested content are dropped into the member vault with their link already placed, so promotion can start immediately.",
          ar: "يركز على العروض وباقات المواقع المصممة لعمولات شهرية متكررة. تُضاف مواقع جاهزة بمحتوى مجرّب إلى خزنة العضو مع رابطه جاهز، حتى يبدأ الترويج فورًا.",
        },
        url: "https://getsmsociety.com/recurring-wealth",
      },
      {
        name: "Social Payouts",
        description: {
          en: "200+ ready-to-post Facebook messages across 8 niches. Members paste their website link into the post, copy it, and publish in groups to send visitors to their affiliate sites.",
          ar: "أكثر من 200 رسالة فيسبوك جاهزة عبر 8 مجالات. يلصق العضو رابط موقعه داخل المنشور، وينسخه، وينشره في المجموعات لإرسال الزوار إلى مواقع الأفلييت الخاصة به.",
        },
        url: "https://getsmsociety.com/social-payouts",
      },
      {
        name: "Wealth Protector",
        description: {
          en: "Real-time account security overview that shows whether the member’s society account and assets are being monitored. Use this when members ask about account safety or protection status.",
          ar: "نظرة عامة لحظية على أمان الحساب توضح ما إذا كان حساب العضو وأصوله تحت المراقبة. استخدمها عندما يسأل الأعضاء عن سلامة الحساب أو حالة الحماية.",
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
