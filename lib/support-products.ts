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
      en: "ProfitLoop is an app that helps people make money by sending offers to other people online. The idea is simple: the member picks a ready offer, and the AI writes the outreach messages for them. The member sends the messages, and when someone replies, they follow up using ready scripts. When a person buys through their link, the member earns a commission. Everything works in a loop: send, follow up, get paid, repeat. The training page has short videos that show each step. It is built for beginners, so no tech skills or writing skills are needed.",
      ar: "ProfitLoop ده تطبيق بيساعد الناس تكسب فلوس عن طريق إنهم يبعتوا عروض لناس تانية على الإنترنت. الفكرة بسيطة: العضو بيختار عرض جاهز، والذكاء الاصطناعي بيكتب له الرسايل. العضو بيبعت الرسايل، ولما حد يرد عليه بيتابع معاه برسايل جاهزة برضه. ولما حد يشتري من اللينك بتاعه، العضو بياخد عمولة. كل حاجة شغالة في حلقة: ابعت، تابع، اقبض، وكرر. صفحة التدريب فيها فيديوهات قصيرة بتشرح كل خطوة. التطبيق معمول للمبتدئين، فمش محتاج أي خبرة تقنية ولا مهارة في الكتابة.",
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
          en: "A premium pack of ready buyers' contacts. The member gets about 200 checked and verified emails for each topic, plus outreach messages that are already written. Instead of spending days searching for people to contact, they just open the pack, copy a message, and send it. This is the fastest way to start getting replies and sales.",
          ar: "باقة مميزة فيها بيانات ناس جاهزين يشتروا. العضو بياخد حوالي 200 إيميل متشيك عليهم ومضمونين لكل مجال، ومعاهم رسايل جاهزة مكتوبة. بدل ما يقعد أيام يدور على ناس يكلمهم، بيفتح الباقة، ينسخ الرسالة، ويبعتها على طول. دي أسرع طريقة يبدأ بيها ياخد ردود ومبيعات.",
        },
        url: "https://profitloopaccess.com/dfy",
      },
      {
        name: "Recurring Streams",
        description: {
          en: "A library of more than 200 Facebook posts that are ready to use. The posts are written to look like normal posts from real people, not ads. The member copies a post, adds their link, and shares it in Facebook groups. People read the post, click the link, and the member can earn from every sale. The same posts can be reused again and again in different groups.",
          ar: "مكتبة فيها أكتر من 200 بوست فيسبوك جاهزين على طول. البوستات مكتوبة بشكل طبيعي كأنها من ناس حقيقيين، مش إعلانات. العضو بينسخ البوست، يحط اللينك بتاعه، وينشره في جروبات فيسبوك. الناس بتقرا البوست، تدوس على اللينك، والعضو بيكسب من كل عملية شراء. ونفس البوستات ممكن يستخدمها تاني وتالت في جروبات مختلفة.",
        },
        url: "https://profitloopaccess.com/instant-income",
      },
      {
        name: "Social Payouts",
        description: {
          en: "A directory of more than 100 free websites and communities where the member can post their link. The trick is: they post one time on each site, and the link stays there. People keep finding it and clicking it for months, with zero ads cost and no daily posting. Each site comes with simple steps that show exactly where and how to post.",
          ar: "دليل فيه أكتر من 100 موقع ومجتمع مجاني، العضو يقدر ينشر فيهم اللينك بتاعه. الفكرة إنه بينشر مرة واحدة بس في كل موقع، واللينك بيفضل موجود. الناس بتفضل تلاقيه وتدوس عليه لشهور، من غير ما يدفع مليم إعلانات ومن غير نشر يومي. وكل موقع معاه خطوات بسيطة بتوريه ينشر فين وإزاي بالظبط.",
        },
        url: "https://profitloopaccess.com/autopilot",
      },
      {
        name: "Protector",
        description: {
          en: "The account safety page. It watches the member's account all the time and shows security checks, login status, and account health in one place. When a member asks 'is my account safe?' or worries about strange logins, send them this page so they can see everything is protected.",
          ar: "دي صفحة أمان الحساب. بتراقب حساب العضو طول الوقت وبتعرض فحوصات الأمان وحالة تسجيل الدخول وصحة الحساب في مكان واحد. لو عضو سأل 'حسابي آمن؟' أو قلقان من دخول غريب على حسابه، ابعت له الصفحة دي عشان يشوف بنفسه إن كل حاجة محمية.",
        },
        url: "https://profitloopaccess.com/protector",
      },
    ],
  },
  {
    id: "robinhood",
    name: "Robinhood",
    description: {
      en: "Robinhood is an app that helps people make money from YouTube Shorts without making any videos. Here is how it works: the app finds short videos that are getting lots of views right now. Then the AI writes natural, friendly comments for those videos. The member posts these comments with their link under the trending videos. Since millions of people watch these videos, many of them see the comment, click the link, and some of them buy. The member earns a commission on each sale. The training shows the full method step by step.",
      ar: "Robinhood ده تطبيق بيساعد الناس تكسب فلوس من يوتيوب شورتس من غير ما يعملوا أي فيديو. الشغل بيمشي كده: التطبيق بيلاقي الفيديوهات القصيرة اللي بتجيب مشاهدات كتير دلوقتي. بعدين الذكاء الاصطناعي بيكتب تعليقات طبيعية ولطيفة على الفيديوهات دي. العضو بينزل التعليقات دي ومعاها اللينك بتاعه تحت الفيديوهات التريند. ولإن ملايين الناس بتتفرج على الفيديوهات دي، ناس كتير بتشوف التعليق وتدوس على اللينك، وفيهم اللي بيشتري. والعضو بياخد عمولة على كل عملية شراء. والتدريب بيشرح الطريقة كاملة خطوة بخطوة.",
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
          en: "A Done-For-You vault with more than 200 trending videos, and every video comes with comments that are already written and tested. The member does not write anything. They open the vault, pick a video, copy a comment, change a word or two to make it personal, and post it. It cuts the daily work down to a few minutes.",
          ar: "خزنة جاهزة فيها أكتر من 200 فيديو تريند، وكل فيديو معاه تعليقات مكتوبة ومجربة. العضو مش بيكتب أي حاجة. بيفتح الخزنة، يختار فيديو، ينسخ تعليق، يغير فيه كلمة أو اتنين عشان يبقى شخصي، وينزله. ده بيخلي الشغل اليومي كله ياخد دقايق بس.",
        },
        url: "https://rhappaccess.com/upgrades/dfy-vault",
      },
      {
        name: "Recurring Streams",
        description: {
          en: "More than 200 Facebook posts that are ready to use. They are written like real personal stories, so they fit naturally inside groups and do not look like ads. The member adds their link, posts in groups, and gets extra traffic from Facebook on top of the YouTube method. Two traffic sources means more clicks and more chances to earn.",
          ar: "أكتر من 200 بوست فيسبوك جاهزين. مكتوبين كأنهم قصص شخصية حقيقية، فبيبانوا طبيعيين جوه الجروبات ومش شكلهم إعلانات. العضو بيحط اللينك بتاعه، ينشر في الجروبات، وياخد زيارات إضافية من فيسبوك فوق طريقة اليوتيوب. يعني مصدرين زيارات، وده معناه ضغطات أكتر وفرص كسب أكتر.",
        },
        url: "https://rhappaccess.com/upgrades/instant-income",
      },
      {
        name: "Social Payouts",
        description: {
          en: "A list of more than 100 free websites where the member posts their link one time and keeps getting visitors for months. No ads to pay for and no daily posting schedule. It works quietly in the background while the member focuses on the main method.",
          ar: "قايمة فيها أكتر من 100 موقع مجاني، العضو بينشر فيهم اللينك بتاعه مرة واحدة وبيفضل ياخد زوار لشهور. مفيش إعلانات يدفعها ولا جدول نشر يومي. الطريقة دي شغالة في الخلفية بهدوء والعضو مركز في الطريقة الأساسية.",
        },
        url: "https://rhappaccess.com/upgrades/automated-income",
      },
      {
        name: "Protector",
        description: {
          en: "The account safety page. It watches logins and sessions all the time and shows if everything is secure. When a member asks about account safety or sees a strange login, send them this page to check their account status.",
          ar: "صفحة أمان الحساب. بتراقب تسجيلات الدخول والجلسات طول الوقت وبتوضح إذا كان كل حاجة آمنة. لو عضو سأل عن أمان حسابه أو شاف تسجيل دخول غريب، ابعت له الصفحة دي يشيك على حالة حسابه.",
        },
        url: "https://rhappaccess.com/upgrades/protector",
      },
    ],
  },
  {
    id: "battery-profits",
    name: "Battery Profits",
    description: {
      en: "Battery Profits is an app that helps people make money by publishing articles online. The member does not write anything. The AI writes a full article of about 1,500 words, made to rank well on Google, and it creates matching pictures too. The member puts their link inside the article, then posts it on big sites like LinkedIn, Medium, Quora, Reddit, and X. Each platform comes with easy step-by-step posting instructions. People find the article, read it, click the link, and the member earns a commission when they buy.",
      ar: "Battery Profits ده تطبيق بيساعد الناس تكسب فلوس عن طريق نشر مقالات على الإنترنت. العضو مش بيكتب أي حاجة. الذكاء الاصطناعي بيكتب مقال كامل حوالي 1500 كلمة، معمول عشان يظهر كويس في جوجل، وكمان بيعمل صور مناسبة للمقال. العضو بيحط اللينك بتاعه جوه المقال، وبعدين ينشره في مواقع كبيرة زي LinkedIn وMedium وQuora وReddit وX. وكل منصة معاها خطوات نشر سهلة. الناس بتلاقي المقال، تقراه، تدوس على اللينك، والعضو بياخد عمولة لما يشتروا.",
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
          en: "The member gives it one link, and it writes 10 different Facebook posts for that link. Each post uses a different style: one creates urgency, one tells a story, one asks a question, and so on. This lets the member post in many groups without sounding repeated, and reach more people with zero writing.",
          ar: "العضو بيديله لينك واحد، وهو بيكتب له 10 بوستات فيسبوك مختلفة لنفس اللينك. كل بوست بأسلوب مختلف: واحد بيستعجل الناس، وواحد بيحكي قصة، وواحد بيسأل سؤال، وهكذا. ده بيخلي العضو ينشر في جروبات كتير من غير ما يبان مكرر، ويوصل لناس أكتر من غير ما يكتب حرف.",
        },
        url: "https://batteryproftaccess.com/upsell/10x",
      },
      {
        name: "Recurring Wealth",
        description: {
          en: "A library of 100 articles that are already written and ready, covering 10 money-making topics, and every article comes with 3 professional pictures. The member picks an article, adds their link (it replaces the placeholder automatically), saves, and publishes. It is the fastest way to fill their accounts with content that earns.",
          ar: "مكتبة فيها 100 مقال جاهزين ومكتوبين، بيغطوا 10 مجالات مربحة، وكل مقال معاه 3 صور احترافية. العضو بيختار مقال، يحط اللينك بتاعه (بيتحط مكان العلامة أوتوماتيك)، يحفظ، وينشر. دي أسرع طريقة يملأ بيها حساباته بمحتوى بيكسب.",
        },
        url: "https://batteryproftaccess.com/upsell/infinite",
      },
      {
        name: "Accelerator",
        description: {
          en: "A list of 60 free traffic sources organized by topic, each with clear posting steps. The member posts their articles and links one time in the right places, and those places keep sending visitors for a long time. No ads and no daily grind.",
          ar: "قايمة فيها 60 مصدر زيارات مجاني مقسومين حسب المجال، وكل واحد معاه خطوات نشر واضحة. العضو بينشر مقالاته ولينكاته مرة واحدة في الأماكن الصح، والأماكن دي بتفضل تبعت له زوار لفترة طويلة. من غير إعلانات ومن غير شغل يومي متعب.",
        },
        url: "https://batteryproftaccess.com/automation",
      },
      {
        name: "Wealth Protector",
        description: {
          en: "The account safety dashboard. It shows live security checks, verification status, encrypted connection status, and the latest account activity. When a member asks if their account is safe, send them here so they can see the full picture themselves.",
          ar: "لوحة أمان الحساب. بتعرض فحوصات أمان لحظية وحالة التحقق وحالة التشفير وآخر نشاط على الحساب. لو عضو سأل إذا كان حسابه آمن، ابعته هنا عشان يشوف الصورة كاملة بنفسه.",
        },
        url: "https://batteryproftaccess.com/protector",
      },
    ],
  },
  {
    id: "cashtap",
    name: "CashTap",
    description: {
      en: "CashTap is an app that helps people make money with affiliate links. An affiliate link is a special link from a store or offer site: when someone buys through it, the link owner gets paid. CashTap helps the member with the whole journey: it finds hot topics people are searching for, writes posts and replies around those topics, and shows the best places to share the link. The member follows the steps, shares content, and earns a commission from every sale. The training page walks through everything from zero.",
      ar: "CashTap ده تطبيق بيساعد الناس تكسب فلوس من لينكات الأفلييت. لينك الأفلييت ده لينك خاص من متجر أو موقع عروض: لما حد يشتري من خلاله، صاحب اللينك بياخد فلوس. CashTap بيساعد العضو في الرحلة كلها: بيلاقي المواضيع اللي الناس بتدور عليها دلوقتي، وبيكتب بوستات وردود عن المواضيع دي، وبيوريه أحسن أماكن ينشر فيها اللينك. العضو بيمشي على الخطوات، ينشر المحتوى، وياخد عمولة من كل عملية بيع. وصفحة التدريب بتشرح كل حاجة من الصفر.",
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
          en: "A vault of 50 search angles and keywords that are already proven to work. Instead of guessing what topics to go after, the member picks one from the vault and starts right away. Every angle has been tested, so the member skips the trial-and-error phase and earns faster.",
          ar: "خزنة فيها 50 زاوية بحث وكلمة مفتاحية مجربين وشغالين فعلًا. بدل ما العضو يخمن يشتغل على أنهي مواضيع، بيختار واحدة من الخزنة ويبدأ على طول. كل زاوية متجربة قبل كده، فالعضو بيوفر وقت التجربة والغلط وبيكسب أسرع.",
        },
        url: "https://cashtapaiaccess.com/dfy",
      },
      {
        name: "Instant Income",
        description: {
          en: "More than 200 Facebook posts written like personal success stories, ready to copy and paste. The member adds their affiliate link, copies a post, and shares it in Facebook groups. Because the posts feel real and personal, people engage with them, click the link, and the member can start earning the same day.",
          ar: "أكتر من 200 بوست فيسبوك مكتوبين على شكل قصص نجاح شخصية، جاهزين للنسخ واللصق. العضو بيحط لينك الأفلييت بتاعه، ينسخ البوست، وينشره في جروبات فيسبوك. ولإن البوستات شكلها حقيقي وشخصي، الناس بتتفاعل معاها وتدوس على اللينك، والعضو ممكن يبدأ يكسب من نفس اليوم.",
        },
        url: "https://cashtapaiaccess.com/instant",
      },
      {
        name: "Automated Profits",
        description: {
          en: "A directory of more than 100 free traffic sources. The member submits their link one time on each source, and the visitors keep coming for months. It builds a steady flow of clicks in the background with no ads and no daily posting.",
          ar: "دليل فيه أكتر من 100 مصدر زيارات مجاني. العضو بيسجل اللينك بتاعه مرة واحدة في كل مصدر، والزوار بيفضلوا جايين لشهور. ده بيبني تدفق ثابت من الضغطات في الخلفية من غير إعلانات ومن غير نشر يومي.",
        },
        url: "https://cashtapaiaccess.com/autopilot",
      },
    ],
  },
  {
    id: "qlaps",
    name: "Qlaps",
    description: {
      en: "Qlaps is an app that helps people make money using AI pictures. The member picks a money-making topic, like home decor or beauty, and the AI creates a beautiful, eye-catching picture in seconds with one click. The member attaches their affiliate link to the picture and posts it on sites like Pinterest, Instagram, TikTok, and Facebook. People see the picture, click the link, and the member earns a commission when they buy. No design skills and no photography needed; the AI does all the creative work.",
      ar: "Qlaps ده تطبيق بيساعد الناس تكسب فلوس باستخدام صور الذكاء الاصطناعي. العضو بيختار مجال مربح، زي ديكور البيت أو الجمال، والذكاء الاصطناعي بيعمل له صورة جميلة وملفتة في ثواني بضغطة واحدة. العضو بيحط لينك الأفلييت بتاعه مع الصورة وينشرها في مواقع زي Pinterest وInstagram وTikTok وFacebook. الناس بتشوف الصورة، تدوس على اللينك، والعضو بياخد عمولة لما يشتروا. مش محتاج مهارات تصميم ولا تصوير؛ الذكاء الاصطناعي بيعمل كل الشغل الفني.",
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
          en: "An image vault with 100 picture ideas that are already proven to get clicks. The member does not need to think of ideas or write prompts. They browse the vault, pick an idea, click Generate, and get a ready-to-post picture. It removes the hardest part of the job: knowing what picture will work.",
          ar: "خزنة صور فيها 100 فكرة صورة مجربين وبيجيبوا ضغطات فعلًا. العضو مش محتاج يفكر في أفكار ولا يكتب أوامر. بيتصفح الخزنة، يختار فكرة، يدوس Generate، وياخد صورة جاهزة للنشر. دي بتشيل أصعب جزء في الشغل: إنك تعرف أنهي صورة هتنجح.",
        },
        url: "https://getqlabsaccess.com/premium/dfy",
      },
      {
        name: "Instant Income",
        description: {
          en: "More than 200 ready-made Facebook posts. The member copies a post, adds their link, and shares it in groups. It gives them a second source of traffic from Facebook next to the pictures, with no writing at all.",
          ar: "أكتر من 200 بوست فيسبوك جاهزين. العضو بينسخ البوست، يحط اللينك بتاعه، وينشره في الجروبات. ده بيديله مصدر زيارات تاني من فيسبوك جنب الصور، من غير أي كتابة خالص.",
        },
        url: "https://getqlabsaccess.com/premium/instant-income",
      },
      {
        name: "Autopilot",
        description: {
          en: "The Autopilot Traffic Machine: a list of 60 free websites where the member can post their pictures and links. Every site has simple steps to follow. The member posts one time, and those sites keep bringing visitors for a long time without ads.",
          ar: "آلة الزيارات الأوتوماتيكية: قايمة فيها 60 موقع مجاني العضو يقدر ينشر فيهم صوره ولينكاته. كل موقع معاه خطوات بسيطة. العضو بينشر مرة واحدة، والمواقع دي بتفضل تجيب له زوار لفترة طويلة من غير إعلانات.",
        },
        url: "https://getqlabsaccess.com/premium/autopilot",
      },
    ],
  },
  {
    id: "click-clone-profits",
    name: "Click Clone Profits",
    description: {
      en: "Click Clone Profits is an app that helps people make money by selling digital products that are already made for them. The member does not create anything: the app gives them finished products, like ebooks, and each product comes with a sales page that is already built and designed to sell. The member claims a product, gets their own link for it, and shares that link online. When someone buys the product, the member gets paid. The training shows exactly where and how to share the link to get buyers.",
      ar: "Click Clone Profits ده تطبيق بيساعد الناس تكسب فلوس عن طريق بيع منتجات رقمية جاهزة ومعمولة لهم. العضو مش بيعمل أي حاجة بنفسه: التطبيق بيديله منتجات خالصة، زي الكتب الإلكترونية، وكل منتج معاه صفحة بيع جاهزة ومصممة عشان تبيع. العضو بياخد المنتج، بياخد لينك خاص بيه، وينشر اللينك ده على الإنترنت. لما حد يشتري المنتج، العضو بيقبض. والتدريب بيوريه بالظبط ينشر اللينك فين وإزاي عشان يجيب مشترين.",
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
          en: "A collection of finished products: ebooks with sales pages that are already written and designed. The member clicks Claim, and the product moves into My Products with their own selling link. From that moment, they can start promoting and selling it. No writing, no design, no setup.",
          ar: "مجموعة منتجات خالصة: كتب إلكترونية مع صفحات بيع مكتوبة ومصممة جاهزة. العضو بيدوس Claim، والمنتج بيتنقل لـ My Products ومعاه لينك بيع خاص بيه. من اللحظة دي يقدر يبدأ يروج ويبيع. من غير كتابة ولا تصميم ولا تجهيز.",
        },
        url: "https://clickcloneprofits.app/app/done-for-you",
      },
      {
        name: "Instant Income",
        description: {
          en: "More than 200 Facebook posts ready to copy and paste. The member adds their product link, copies a post, and shares it in Facebook groups. The posts are written to get attention and clicks, so the member can start getting buyers the same day.",
          ar: "أكتر من 200 بوست فيسبوك جاهزين للنسخ واللصق. العضو بيحط لينك المنتج بتاعه، ينسخ البوست، وينشره في جروبات فيسبوك. البوستات مكتوبة عشان تلفت النظر وتجيب ضغطات، فالعضو ممكن يبدأ يجيب مشترين من نفس اليوم.",
        },
        url: "https://clickcloneprofits.app/app/instant-income",
      },
      {
        name: "Automated Income",
        description: {
          en: "A list of more than 100 free traffic sources. The member submits their product link one time on each source, and visitors keep coming for a long time. It builds steady background traffic with no ads and no daily posting.",
          ar: "قايمة فيها أكتر من 100 مصدر زيارات مجاني. العضو بيسجل لينك المنتج بتاعه مرة واحدة في كل مصدر، والزوار بيفضلوا جايين لفترة طويلة. ده بيبني زيارات ثابتة في الخلفية من غير إعلانات ولا نشر يومي.",
        },
        url: "https://clickcloneprofits.app/app/autopilot",
      },
      {
        name: "Protector",
        description: {
          en: "The account safety page. It watches the member's account all the time and shows the protection status. When a member asks about account safety, send them this page to check it themselves.",
          ar: "صفحة أمان الحساب. بتراقب حساب العضو طول الوقت وبتعرض حالة الحماية. لو عضو سأل عن أمان حسابه، ابعت له الصفحة دي يشيك بنفسه.",
        },
        url: "https://clickcloneprofits.app/app/protector",
      },
    ],
  },
  {
    id: "secret-millionaire-society",
    name: "Secret Millionaire Society",
    description: {
      en: "Secret Millionaire Society is an app that helps people make money with simple affiliate websites. The member does not need to know anything about building sites: the app builds a full website for them, filled with content, in a few clicks. The member adds their affiliate link to the site and shares the site online. When visitors come to the site, read the content, and buy through the link, the member earns a commission. The app also gives ready social posts to help bring visitors to each site.",
      ar: "Secret Millionaire Society ده تطبيق بيساعد الناس تكسب فلوس من مواقع أفلييت بسيطة. العضو مش محتاج يعرف أي حاجة عن بناء المواقع: التطبيق بيبني له موقع كامل مليان محتوى بكام ضغطة. العضو بيحط لينك الأفلييت بتاعه في الموقع وينشر الموقع على الإنترنت. لما الزوار يدخلوا الموقع ويقروا المحتوى ويشتروا من اللينك، العضو بياخد عمولة. وكمان التطبيق بيديله بوستات سوشيال جاهزة تساعده يجيب زوار لكل موقع.",
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
          en: "Removes the limits for serious members. They can build as many websites as they want instead of just a few, and they get ready-to-post Facebook content made for every site they build. More sites plus ready content means more visitors and more chances to earn.",
          ar: "بتشيل الحدود للأعضاء الجادين. يقدروا يبنوا مواقع بعدد ما يحبوا بدل كام موقع بس، وبياخدوا محتوى فيسبوك جاهز للنشر معمول لكل موقع بيبنوه. مواقع أكتر مع محتوى جاهز يعني زوار أكتر وفرص كسب أكتر.",
        },
        url: "https://getsmsociety.com/accelerator",
      },
      {
        name: "Recurring Wealth",
        description: {
          en: "Ready websites built around offers that pay every month, not just one time. When someone subscribes through the member's link, the member keeps earning from that same person month after month. The site arrives in their vault with tested content and their link already placed, so they only need to share it.",
          ar: "مواقع جاهزة مبنية على عروض بتدفع كل شهر، مش مرة واحدة بس. لما حد يشترك من لينك العضو، العضو بيفضل يكسب من نفس الشخص ده شهر ورا شهر. الموقع بيوصل في الخزنة بتاعته بمحتوى مجرب ولينكه محطوط جاهز، فهو محتاج بس ينشره.",
        },
        url: "https://getsmsociety.com/recurring-wealth",
      },
      {
        name: "Social Payouts",
        description: {
          en: "More than 200 Facebook posts covering 8 different topics. The member picks a post that matches their site, adds their website link, copies it, and shares it in groups. It is the fastest way to send people to their websites without writing anything.",
          ar: "أكتر من 200 بوست فيسبوك بيغطوا 8 مجالات مختلفة. العضو بيختار بوست يناسب موقعه، يحط لينك الموقع، ينسخه، وينشره في الجروبات. دي أسرع طريقة يبعت بيها ناس لمواقعه من غير ما يكتب أي حاجة.",
        },
        url: "https://getsmsociety.com/social-payouts",
      },
      {
        name: "Wealth Protector",
        description: {
          en: "The account safety page. It watches the member's account and websites in real time and shows that everything is locked down and protected. When a member asks about the safety of their account or their sites, send them this page.",
          ar: "صفحة أمان الحساب. بتراقب حساب العضو ومواقعه لحظة بلحظة وبتوضح إن كل حاجة مقفولة ومحمية. لو عضو سأل عن أمان حسابه أو مواقعه، ابعت له الصفحة دي.",
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
