const PAGE_LIST = [
  { id: "home", label: "首页" },
  { id: "activities", label: "活动" },
  { id: "publish", label: "发布" },
  { id: "profile", label: "我的" }
];

const HOME_TABS = [
  { id: "recommend", label: "推荐" },
  { id: "following", label: "关注" },
  { id: "hot", label: "热门" }
];

const ACTIVITY_FILTERS = [
  { id: "all", label: "全部" },
  { id: "hot", label: "热门" },
  { id: "active", label: "进行中" },
  { id: "finished", label: "已结束" }
];

const PROFILE_TABS = [
  { id: "posts", label: "我的发布" },
  { id: "favorites", label: "收藏" },
  { id: "drafts", label: "草稿" }
];

const STORAGE_KEYS = {
  token: "campusfit_user_token",
  user: "campusfit_user_info",
  composer: "campusfit_web_composer",
  customBaseUrl: "campusfit_custom_base_url"
};

const API_BASE_CANDIDATES = [
  "http://127.0.0.1:8080",
  "http://localhost:8080",
  "https://api.yuhaojie.cn"
];

const MAX_IMAGE_COUNT = 9;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const DEFAULT_TAGS = {
  scene: "图书馆",
  style: "学院风",
  budget: ""
};

const PREVIEW_DATA = {
  announcement: {
    id: "announcement-preview",
    badge: "活动发布",
    title: "CampusFit Web 已同步当前 app 的活动与发布口径",
    summary: "活动详情、发布活动选择、我的内容管理已经统一，不再保留旧版演示原型里的测试壳子。",
    content: "当前 web 版保留首页内容流、活动中心、发布和我的四个主入口。活动采用与 app 一致的可选逻辑：不可选活动只在活动中心展示，不会在发布时进入选择列表。",
    publishTime: "2026.03.26 10:00"
  },
  activities: [
    {
      id: "campus-new-star-plan",
      title: "校园穿搭新星计划",
      badge: "内容冷启动",
      theme: "面向首批创作者的内容冷启动活动，鼓励持续发布带校园场景标签的原创穿搭。",
      summary: "发布带校园场景标签的原创穿搭即可参评，每周按互动分评选 Top 30 优质穿搭。",
      period: "2026.03.22 - 2026.03.28",
      reward: "入选 Top 30 可参与瓜分 500 元启动奖金池，前三名额外获得首页推荐位。",
      participation: "发布原创穿搭并至少选择 1 个校园场景标签，通过审核后按互动分计入排行榜。",
      scene: "校园穿搭",
      status: "进行中",
      selectable: true,
      heat: 1280,
      entries: 2,
      joined: true,
      statusCopy: "报名后可获得更稳定的活动曝光与参与进度",
      progressText: "热度 1280 · 已有 2 条内容"
    },
    {
      id: "first-merchant-support-plan",
      title: "首批商家扶持计划",
      badge: "商家扶持",
      theme: "面向首批合作商家的冷启动扶持专题，用于承接真实商品链接与首页曝光资源。",
      summary: "首月完成合作登记的商家可进入扶持池，合作内容经审核后会进入额外曝光评估。",
      period: "2026.03.22 - 2026.04.21",
      reward: "首月入驻免服务费，符合排期的合作商品可获得首页活动推荐或轮播扶持。",
      participation: "由平台运营登记合作商家；创作者发布带真实商品链接的合作穿搭即可进入评估。",
      scene: "商家合作",
      status: "招募中",
      selectable: false,
      heat: 930,
      entries: 0,
      joined: false,
      statusCopy: "该活动当前仅在活动中心展示，发布时不会出现在可选列表中",
      progressText: "热度 930 · 已有 0 条内容"
    }
  ],
  posts: [
    {
      id: "preview-look-1",
      authorId: 1001,
      title: "图书馆蓝白通勤穿搭",
      subtitle: "清爽学院风",
      desc: "用蓝白衬衫叠一件奶油背心，既有层次也不会太正式，适合图书馆和白天通勤来回切换。",
      coverTag: "图书馆穿搭",
      coverImageUrl: "",
      imageUrls: [],
      user: "林夏",
      avatar: "林",
      avatarUrl: "",
      avatarClass: "soft",
      school: "华东理工大学 · 大三",
      scene: "图书馆",
      style: "学院风",
      budget: "50-100",
      likes: 128,
      comments: 16,
      saves: 42,
      shares: 5,
      publishTime: "今天 08:30",
      price: "¥129",
      product: "蓝白条纹衬衫 + 奶油背心",
      productLink: "",
      liked: false,
      favorited: false,
      followed: false,
      activity: {
        id: "campus-new-star-plan",
        title: "校园穿搭新星计划",
        badge: "内容冷启动",
        scene: "校园穿搭",
        period: "2026.03.22 - 2026.03.28",
        progressText: "热度 1280 · 已有 2 条内容",
        selectable: true,
        status: "进行中"
      }
    },
    {
      id: "preview-look-2",
      authorId: 1002,
      title: "操场晚风运动组合",
      subtitle: "卫衣和束脚裤的少年感",
      desc: "跑完步直接去食堂也不会突兀，绿色卫衣和灰白运动裤很适合晚上的校园氛围。",
      coverTag: "操场",
      coverImageUrl: "",
      imageUrls: [],
      user: "周沐",
      avatar: "周",
      avatarUrl: "",
      avatarClass: "mint",
      school: "南京师范大学 · 大二",
      scene: "运动",
      style: "宽松休闲",
      budget: "100-150",
      likes: 203,
      comments: 22,
      saves: 68,
      shares: 8,
      publishTime: "昨天 19:10",
      price: "¥168",
      product: "绿色卫衣 + 灰白束脚裤",
      productLink: "",
      liked: true,
      favorited: false,
      followed: true,
      activity: {
        id: "campus-new-star-plan",
        title: "校园穿搭新星计划",
        badge: "内容冷启动",
        scene: "校园穿搭",
        period: "2026.03.22 - 2026.03.28",
        progressText: "热度 1280 · 已有 2 条内容",
        selectable: true,
        status: "进行中"
      }
    },
    {
      id: "preview-look-3",
      authorId: 1003,
      title: "周末咖啡店的轻甜针织裙",
      subtitle: "舒服、轻盈，也适合约会",
      desc: "奶咖色针织裙在自然光里特别温柔，搭配浅色小包就能把周末氛围拉满。",
      coverTag: "周末约会",
      coverImageUrl: "",
      imageUrls: [],
      user: "顾言",
      avatar: "顾",
      avatarUrl: "",
      avatarClass: "amber",
      school: "苏州大学 · 大四",
      scene: "约会",
      style: "甜酷",
      budget: "150-200",
      likes: 176,
      comments: 14,
      saves: 75,
      shares: 6,
      publishTime: "昨天 14:20",
      price: "¥219",
      product: "奶咖色针织裙",
      productLink: "",
      liked: false,
      favorited: true,
      followed: false,
      activity: null
    }
  ],
  commentsByPost: {
    "preview-look-1": [
      {
        id: "c-preview-1",
        name: "宋梦",
        avatar: "宋",
        avatarUrl: "",
        avatarClass: "pink",
        text: "蓝白色真的很适合图书馆，预算写得也很清楚。",
        time: "12 分钟前",
        likes: 4,
        liked: false,
        replies: []
      },
      {
        id: "c-preview-2",
        name: "安宁",
        avatar: "安",
        avatarUrl: "",
        avatarClass: "soft",
        text: "这套很适合早八到图书馆连着走，想看背心细节。",
        time: "28 分钟前",
        likes: 2,
        liked: false,
        replies: []
      }
    ],
    "preview-look-2": [
      {
        id: "c-preview-3",
        name: "季乔",
        avatar: "季",
        avatarUrl: "",
        avatarClass: "mint",
        text: "卫衣颜色很提精神，晚上操场真的会很好看。",
        time: "1 小时前",
        likes: 6,
        liked: true,
        replies: []
      }
    ],
    "preview-look-3": []
  },
  profile: {
    name: "校园创作官",
    avatar: "青搭",
    avatarUrl: "",
    coverImageUrl: "",
    school: "浙江农林大学 · 大四",
    gender: "女生",
    email: "",
    locationName: "杭州",
    sign: "记录真实校园场景里的轻量穿搭灵感。",
    following: 16,
    followers: 134,
    likes: 289,
    cooperation: 2
  },
  incentives: {
    totalAmount: "¥128.00",
    availableAmount: "¥88.00",
    availableAmountRaw: 88,
    pendingSettlementAmount: "¥40.00",
    pendingWithdrawAmount: "¥0.00",
    withdrawnAmount: "¥120.00",
    settledCount: 3,
    pendingCount: 1,
    canWithdraw: true,
    withdrawHint: "当前为预览模式，提现按钮仅做展示。"
  },
  drafts: [
    {
      id: "draft-preview-1",
      title: "雨天图书馆的奶灰叠穿",
      desc: "内搭白色短 Tee，外面套灰色开衫，适合阴雨天的教室和图书馆。",
      imageUrls: [],
      tags: ["图书馆", "学院风", "50-100"],
      productPrice: 129,
      productLink: "",
      savedAt: "2026-03-26 09:10",
      activityId: "campus-new-star-plan"
    },
    {
      id: "draft-preview-2",
      title: "社团招新日的轻通勤套装",
      desc: "想要利落一点的上镜效果，先保留这版标题和活动关联。",
      imageUrls: [],
      tags: ["社团活动", "极简", ""],
      productPrice: 0,
      productLink: "",
      savedAt: "2026-03-25 22:18",
      activityId: ""
    }
  ],
  unreadCount: 3
};

const refs = {};

const state = {
  currentPage: "home",
  homeTab: "recommend",
  activityFilter: "all",
  profileTab: "posts",
  apiMode: "connecting",
  baseUrl: "",
  loadingText: "正在连接接口…",
  publicLoading: true,
  searchLoading: false,
  searchKeyword: "",
  searchResults: [],
  announcement: null,
  activities: [],
  featuredActivities: [],
  posts: [],
  tags: {
    sceneTags: ["图书馆", "早八", "社团活动", "约会", "通勤", "运动"],
    styleTags: ["学院风", "宽松休闲", "甜酷", "极简", "韩系", "清新"],
    budgetTags: ["50-100", "100-150", "150-200", "200+"]
  },
  user: readStoredUser(),
  profile: null,
  incentives: null,
  myPosts: [],
  favoritePosts: [],
  drafts: [],
  follows: [],
  myActivities: [],
  unreadCount: 0,
  toasts: [],
  drawer: null,
  login: {
    phone: "",
    code: "",
    sending: false,
    countdown: 0,
    timer: null,
    submitting: false
  },
  composer: buildEmptyComposer(),
  refreshPromise: null
};

function buildEmptyComposer(overrides) {
  return Object.assign(
    {
      title: "",
      desc: "",
      price: "",
      link: "",
      scene: DEFAULT_TAGS.scene,
      style: DEFAULT_TAGS.style,
      budget: DEFAULT_TAGS.budget,
      images: [],
      selectedActivityId: "",
      draftId: "",
      saving: false,
      submitting: false
    },
    overrides || {}
  );
}

function readStoredJson(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStoredJson(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return null;
  }
  return value;
}

function readStoredUser() {
  return readStoredJson(STORAGE_KEYS.user, null);
}

function getToken() {
  return window.localStorage.getItem(STORAGE_KEYS.token) || "";
}

function isLoggedIn() {
  return !!getToken();
}

function saveSession(payload) {
  if (!payload) {
    return;
  }
  window.localStorage.setItem(STORAGE_KEYS.token, payload.token || "");
  writeStoredJson(STORAGE_KEYS.user, {
    userId: payload.userId,
    phone: payload.phone,
    nickname: payload.nickname,
    avatarUrl: payload.avatarUrl || ""
  });
  state.user = readStoredUser();
}

function clearSessionStorage() {
  window.localStorage.removeItem(STORAGE_KEYS.token);
  window.localStorage.removeItem(STORAGE_KEYS.user);
  state.user = null;
}

function firstText() {
  for (let index = 0; index < arguments.length; index += 1) {
    const value = arguments[index];
    if (value === null || value === undefined) {
      continue;
    }
    const text = String(value).trim();
    if (text) {
      return text;
    }
  }
  return "";
}

function safeText(value, fallback) {
  const text = firstText(value);
  return text || (fallback || "");
}

function clampNumber(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number < 0) {
    return 0;
  }
  return number;
}

function formatCount(value) {
  const count = clampNumber(value);
  if (count >= 10000) {
    return `${(count / 10000).toFixed(count >= 100000 ? 0 : 1).replace(/\.0$/, "")}w`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(count >= 10000 ? 0 : 1).replace(/\.0$/, "")}k`;
  }
  return String(Math.round(count));
}

function formatMoney(value) {
  if (typeof value === "string" && value.trim()) {
    return value.trim();
  }
  const amount = Number(value || 0);
  if (!Number.isFinite(amount)) {
    return "¥0.00";
  }
  return `¥${amount.toFixed(2)}`;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

function unique(list) {
  return Array.from(new Set((list || []).filter(Boolean)));
}

function getInitial(value, fallback) {
  const text = firstText(value, fallback || "青");
  if (!text) {
    return "青";
  }
  return text.slice(0, 2).toUpperCase();
}

function coverToneFromIndex(index) {
  const tones = ["blue", "green", "amber", "slate", "mint", "rose"];
  return tones[index % tones.length];
}

function statusCategoryFromText(statusText) {
  const text = firstText(statusText);
  if (text.includes("结束")) {
    return "finished";
  }
  if (text.includes("招募")) {
    return "recruiting";
  }
  return "active";
}

function buildProductPrice(value) {
  const text = firstText(value);
  if (!text) {
    return null;
  }
  if (!/^(?:0|[1-9]\d*)(?:\.\d{1,2})?$/.test(text)) {
    return null;
  }
  const amount = Number(text);
  if (!Number.isFinite(amount) || amount <= 0) {
    return null;
  }
  return Number(amount.toFixed(2));
}

function isAuthError(error) {
  const message = firstText(error && error.message).toLowerCase();
  return message.includes("401") || message.includes("login") || message.includes("登录");
}

function normalizeAnnouncement(item) {
  const source = item || PREVIEW_DATA.announcement;
  return {
    id: String(source.id || "announcement"),
    badge: safeText(source.badge, "公告"),
    title: safeText(source.title, "CampusFit 最新公告"),
    summary: safeText(source.summary, "当前没有可展示的公告内容。"),
    content: safeText(source.content, source.summary),
    publishTime: safeText(source.publishTime, "刚刚")
  };
}

function normalizeActivity(item, index) {
  const source = item || {};
  const statusCategory = statusCategoryFromText(source.status);
  return {
    id: String(source.id || `activity-${index}`),
    title: safeText(source.title, "未命名活动"),
    badge: safeText(source.badge, "校园活动"),
    theme: safeText(source.theme, source.summary, "暂无活动简介。"),
    summary: safeText(source.summary, source.theme, "暂无活动摘要。"),
    period: safeText(source.period, "时间待更新"),
    reward: safeText(source.reward, "暂无奖励说明。"),
    participation: safeText(source.participation, "暂无参与方式说明。"),
    scene: safeText(source.scene, "校园活动"),
    status: safeText(source.status, "进行中"),
    selectable: source.selectable !== false,
    heat: clampNumber(source.heat),
    entries: clampNumber(source.entries),
    joined: !!source.joined,
    statusCopy: safeText(source.statusCopy, "活动状态将持续更新。"),
    progressText: safeText(source.progressText, `热度 ${clampNumber(source.heat)} · 已有 ${clampNumber(source.entries)} 条内容`),
    statusCategory,
    tone: coverToneFromIndex(index)
  };
}

function normalizePost(item, index) {
  const source = item || {};
  const images = Array.isArray(source.imageUrls) ? source.imageUrls.filter(Boolean) : [];
  const coverUrl = firstText(source.coverImageUrl, source.displayCoverUrl, images[0]);
  return {
    id: String(source.id || `post-${index}`),
    authorId: String(source.authorId || source.userId || source.id || index),
    title: safeText(source.title, "未命名内容"),
    subtitle: safeText(source.subtitle),
    desc: safeText(source.desc, "暂无内容说明。"),
    coverTag: safeText(source.coverTag, source.scene, "校园穿搭"),
    coverUrl,
    imageUrls: images.length ? images : (coverUrl ? [coverUrl] : []),
    user: safeText(source.user, source.nickname, "CampusFit 用户"),
    avatar: safeText(source.avatar, getInitial(source.user, "青")),
    avatarUrl: firstText(source.avatarUrl),
    avatarClass: safeText(source.avatarClass, "soft"),
    school: safeText(source.school, "校园用户"),
    scene: safeText(source.scene, "校园"),
    style: safeText(source.style, "极简"),
    budget: safeText(source.budget),
    likes: clampNumber(source.likes || source.likeCount),
    comments: clampNumber(source.comments || source.commentCount),
    saves: clampNumber(source.saves || source.favoriteCount || source.collectCount),
    shares: clampNumber(source.shares || source.shareCount),
    publishTime: safeText(source.publishTime, "刚刚"),
    price: safeText(source.price),
    product: safeText(source.product),
    productLink: firstText(source.productLink),
    guideTip: safeText(source.guideTip),
    profit: safeText(source.profit),
    mine: !!source.mine,
    liked: !!source.liked,
    favorited: !!source.favorited,
    followed: !!source.followed,
    activity: source.activity ? normalizeActivity(source.activity, 0) : null,
    tone: coverToneFromIndex(index)
  };
}

function normalizeProfile(item) {
  const source = item || PREVIEW_DATA.profile;
  const user = state.user || {};
  return {
    name: safeText(source.name, user.nickname, "CampusFit 用户"),
    avatar: safeText(source.avatar, getInitial(source.name, user.nickname || "青搭")),
    avatarUrl: firstText(source.avatarUrl, user.avatarUrl),
    coverImageUrl: firstText(source.coverImageUrl),
    school: safeText(source.school, "完善学校信息，让同校同学更快看到你"),
    gender: safeText(source.gender),
    email: safeText(source.email),
    locationName: safeText(source.locationName),
    sign: safeText(source.sign, "记录真实校园场景里的穿搭与活动内容。"),
    following: clampNumber(source.following),
    followers: clampNumber(source.followers),
    likes: clampNumber(source.likes),
    cooperation: clampNumber(source.cooperation)
  };
}

function normalizeIncentive(item) {
  const source = item || PREVIEW_DATA.incentives;
  return {
    totalAmount: formatMoney(source.totalAmount || source.availableAmount || 0),
    availableAmount: formatMoney(source.availableAmount || 0),
    availableAmountRaw: clampNumber(source.availableAmountRaw),
    pendingSettlementAmount: formatMoney(source.pendingSettlementAmount || 0),
    pendingWithdrawAmount: formatMoney(source.pendingWithdrawAmount || 0),
    withdrawnAmount: formatMoney(source.withdrawnAmount || 0),
    settledCount: clampNumber(source.settledCount),
    pendingCount: clampNumber(source.pendingCount),
    canWithdraw: !!source.canWithdraw,
    withdrawHint: safeText(source.withdrawHint)
  };
}

function normalizeDraft(item, index) {
  const source = item || {};
  const tags = Array.isArray(source.tags) ? source.tags.filter(Boolean) : [];
  return {
    id: String(source.id || `draft-${index}`),
    title: safeText(source.title, "未命名草稿"),
    desc: safeText(source.desc),
    imageUrls: Array.isArray(source.imageUrls) ? source.imageUrls.filter(Boolean) : [],
    coverUrl: firstText(source.coverImageUrl, source.imageUrls && source.imageUrls[0]),
    tags,
    scene: safeText(tags[0], DEFAULT_TAGS.scene),
    style: safeText(tags[1], DEFAULT_TAGS.style),
    budget: safeText(tags[2]),
    productPrice: buildProductPrice(source.productPrice),
    productLink: firstText(source.productLink),
    savedAt: safeText(source.savedAt, "刚刚保存"),
    activityId: firstText(source.activityId)
  };
}

function restoreComposer() {
  const stored = readStoredJson(STORAGE_KEYS.composer, null);
  if (!stored) {
    state.composer = buildEmptyComposer();
    return;
  }
  state.composer = buildEmptyComposer({
    title: safeText(stored.title),
    desc: safeText(stored.desc),
    price: safeText(stored.price),
    link: safeText(stored.link),
    scene: safeText(stored.scene, DEFAULT_TAGS.scene),
    style: safeText(stored.style, DEFAULT_TAGS.style),
    budget: safeText(stored.budget),
    selectedActivityId: safeText(stored.selectedActivityId),
    draftId: safeText(stored.draftId),
    images: Array.isArray(stored.images)
      ? stored.images
          .filter((item) => item && item.url)
          .map((item, index) => ({
            id: safeText(item.id, `stored-image-${index}`),
            url: item.url,
            previewUrl: item.url,
            status: "success",
            name: safeText(item.name, "已上传图片")
          }))
      : []
  });
}

function persistComposer() {
  const payload = {
    title: state.composer.title,
    desc: state.composer.desc,
    price: state.composer.price,
    link: state.composer.link,
    scene: state.composer.scene,
    style: state.composer.style,
    budget: state.composer.budget,
    selectedActivityId: state.composer.selectedActivityId,
    draftId: state.composer.draftId,
    images: state.composer.images
      .filter((item) => item && item.status === "success" && item.url)
      .map((item) => ({
        id: item.id,
        url: item.url,
        name: item.name
      }))
  };
  writeStoredJson(STORAGE_KEYS.composer, payload);
}

async function pingBaseUrl(baseUrl) {
  const paths = ["/api/health", "/api/posts/recommendations"];
  for (let index = 0; index < paths.length; index += 1) {
    try {
      const response = await fetch(`${baseUrl}${paths[index]}`, { method: "GET" });
      if (response.ok) {
        return true;
      }
    } catch (error) {
      continue;
    }
  }
  return false;
}

async function resolveBaseUrl() {
  const customBaseUrl = firstText(window.localStorage.getItem(STORAGE_KEYS.customBaseUrl));
  const candidates = unique([customBaseUrl].concat(API_BASE_CANDIDATES));
  for (let index = 0; index < candidates.length; index += 1) {
    const baseUrl = candidates[index];
    const available = await pingBaseUrl(baseUrl);
    if (available) {
      return baseUrl;
    }
  }
  throw new Error("No available backend");
}

async function requestApi(path, options, extra) {
  const config = options || {};
  const meta = extra || {};
  if (!state.baseUrl) {
    throw new Error("接口未连接");
  }

  const headers = new Headers(config.headers || {});
  const body = config.body;
  if (!(body instanceof FormData) && body !== undefined && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  if (meta.includeAuth !== false && getToken()) {
    headers.set("Authorization", `Bearer ${getToken()}`);
  }

  let response;
  try {
    response = await fetch(`${state.baseUrl}${path}`, {
      method: config.method || "GET",
      headers,
      body
    });
  } catch (error) {
    throw new Error("网络连接失败");
  }

  const text = await response.text();
  let payload = {};
  try {
    payload = text ? JSON.parse(text) : {};
  } catch (error) {
    payload = { message: text };
  }

  if (!response.ok) {
    throw new Error(firstText(payload.message, `HTTP ${response.status}`));
  }
  if (meta.raw) {
    return payload;
  }
  if (payload.code === 0) {
    return payload.data;
  }
  throw new Error(firstText(payload.message, "接口返回异常"));
}

async function uploadImage(file) {
  const formData = new FormData();
  formData.append("file", file);
  return requestApi("/api/uploads/images", { method: "POST", body: formData });
}

function normalizePublicData() {
  state.announcement = normalizeAnnouncement(PREVIEW_DATA.announcement);
  state.activities = PREVIEW_DATA.activities.map(normalizeActivity);
  state.featuredActivities = state.activities.slice(0, 2);
  state.posts = PREVIEW_DATA.posts.map(normalizePost);
  state.tags = {
    sceneTags: state.tags.sceneTags.slice(0),
    styleTags: state.tags.styleTags.slice(0),
    budgetTags: state.tags.budgetTags.slice(0)
  };
}

function normalizePrivatePreviewData() {
  state.profile = normalizeProfile(PREVIEW_DATA.profile);
  state.incentives = normalizeIncentive(PREVIEW_DATA.incentives);
  state.myPosts = PREVIEW_DATA.posts.map(normalizePost);
  state.favoritePosts = [PREVIEW_DATA.posts[0], PREVIEW_DATA.posts[2]].map(normalizePost);
  state.drafts = PREVIEW_DATA.drafts.map(normalizeDraft);
  state.follows = [
    { userId: "1002", name: "周沐" },
    { userId: "1004", name: "季乔" }
  ];
  state.myActivities = [PREVIEW_DATA.activities[0]].map(normalizeActivity);
  state.unreadCount = PREVIEW_DATA.unreadCount;
}

function resetPrivateData() {
  state.profile = normalizeProfile(PREVIEW_DATA.profile);
  state.incentives = normalizeIncentive(PREVIEW_DATA.incentives);
  state.myPosts = [];
  state.favoritePosts = [];
  state.drafts = [];
  state.follows = [];
  state.myActivities = [];
  state.unreadCount = 0;
}

async function loadPublicData() {
  if (state.apiMode === "preview") {
    normalizePublicData();
    state.publicLoading = false;
    return;
  }

  const results = await Promise.allSettled([
    requestApi("/api/announcements/latest"),
    requestApi("/api/activities/featured"),
    requestApi("/api/activities"),
    requestApi("/api/posts/recommendations"),
    requestApi("/api/tags/options")
  ]);

  const previewActivities = PREVIEW_DATA.activities.map(normalizeActivity);
  const announcementResult = results[0].status === "fulfilled" ? results[0].value : PREVIEW_DATA.announcement;
  const featuredResult = results[1].status === "fulfilled" ? results[1].value : [];
  const activityResult = results[2].status === "fulfilled" ? results[2].value : PREVIEW_DATA.activities;
  const postResult = results[3].status === "fulfilled" ? results[3].value : PREVIEW_DATA.posts;
  const tagResult = results[4].status === "fulfilled" ? results[4].value : {};

  state.announcement = normalizeAnnouncement(announcementResult);
  state.activities = (activityResult || PREVIEW_DATA.activities).map(normalizeActivity);
  state.featuredActivities = ((featuredResult && featuredResult.length ? featuredResult : state.activities) || previewActivities)
    .map(normalizeActivity)
    .slice(0, 2);
  state.posts = (postResult || PREVIEW_DATA.posts).map(normalizePost);
  state.tags = {
    sceneTags: (tagResult.sceneTags && tagResult.sceneTags.length ? tagResult.sceneTags : PREVIEW_DATA.activities.map((item) => item.scene)).filter(Boolean),
    styleTags: tagResult.styleTags && tagResult.styleTags.length ? tagResult.styleTags : state.tags.styleTags,
    budgetTags: tagResult.budgetTags && tagResult.budgetTags.length ? tagResult.budgetTags : state.tags.budgetTags
  };
  state.publicLoading = false;
}

async function loadPrivateData(options) {
  const config = options || {};
  if (!isLoggedIn()) {
    resetPrivateData();
    return;
  }

  if (state.apiMode === "preview") {
    normalizePrivatePreviewData();
    return;
  }

  try {
    const currentUser = await requestApi("/api/auth/me");
    state.user = Object.assign({}, state.user || {}, currentUser || {});
    writeStoredJson(STORAGE_KEYS.user, state.user);
  } catch (error) {
    if (isAuthError(error)) {
      clearSessionStorage();
      resetPrivateData();
      if (!config.silent) {
        showToast("登录状态已失效，请重新登录");
      }
      return;
    }
  }

  const results = await Promise.allSettled([
    requestApi("/api/profile/me"),
    requestApi("/api/profile/incentives"),
    requestApi("/api/posts/mine"),
    requestApi("/api/posts/favorites"),
    requestApi("/api/drafts"),
    requestApi("/api/profile/follows?type=following"),
    requestApi("/api/activities/mine"),
    requestApi("/api/messages/unread-count")
  ]);

  state.profile = normalizeProfile(results[0].status === "fulfilled" ? results[0].value : PREVIEW_DATA.profile);
  state.incentives = normalizeIncentive(results[1].status === "fulfilled" ? results[1].value : PREVIEW_DATA.incentives);
  state.myPosts = results[2].status === "fulfilled" ? results[2].value.map(normalizePost) : [];
  state.favoritePosts = results[3].status === "fulfilled" ? results[3].value.map(normalizePost) : [];
  state.drafts = results[4].status === "fulfilled" ? results[4].value.map(normalizeDraft) : [];
  state.follows = results[5].status === "fulfilled" ? results[5].value : [];
  state.myActivities = results[6].status === "fulfilled" ? results[6].value.map(normalizeActivity) : [];
  state.unreadCount = results[7].status === "fulfilled" ? clampNumber(results[7].value) : 0;
}

function getFollowedIds() {
  return unique(
    (state.follows || []).map((item) =>
      String(item.userId || item.id || item.targetUserId || item.followUserId || item.authorId || "")
    )
  );
}

function getHomeFeedList() {
  const source = state.searchKeyword.trim() ? state.searchResults : state.posts;
  const list = source.slice(0);
  if (state.homeTab === "following") {
    const followedIds = getFollowedIds();
    return list.filter((item) => followedIds.includes(String(item.authorId)));
  }
  if (state.homeTab === "hot") {
    return list.sort((left, right) => right.likes - left.likes);
  }
  return list;
}

function getFilteredActivities() {
  const list = state.activities.slice(0);
  if (state.activityFilter === "hot") {
    return list.sort((left, right) => right.heat - left.heat);
  }
  if (state.activityFilter === "active") {
    return list.filter((item) => item.statusCategory !== "finished");
  }
  if (state.activityFilter === "finished") {
    return list.filter((item) => item.statusCategory === "finished");
  }
  return list;
}

function getSelectableActivities() {
  return state.activities.filter((item) => item.selectable !== false && item.statusCategory !== "finished");
}

function getSelectedActivity() {
  if (!state.composer.selectedActivityId) {
    return null;
  }
  return (
    state.activities.find((item) => item.id === state.composer.selectedActivityId) ||
    state.myActivities.find((item) => item.id === state.composer.selectedActivityId) ||
    null
  );
}

function getProfilePreviewItems() {
  if (state.profileTab === "favorites") {
    return state.favoritePosts;
  }
  if (state.profileTab === "drafts") {
    return state.drafts;
  }
  return state.myPosts;
}

function filterPostsLocally(keyword, list) {
  const query = firstText(keyword).toLowerCase();
  if (!query) {
    return list.slice(0);
  }
  return list.filter((item) => {
    const haystack = [
      item.title,
      item.subtitle,
      item.desc,
      item.scene,
      item.style,
      item.user,
      item.school
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });
}

async function runSearch() {
  const keyword = state.searchKeyword.trim();
  state.currentPage = "home";
  if (!keyword) {
    state.searchResults = [];
    renderApp();
    return;
  }

  state.searchLoading = true;
  renderApp();

  if (state.apiMode === "preview") {
    state.searchResults = filterPostsLocally(keyword, state.posts);
    state.searchLoading = false;
    renderApp();
    return;
  }

  try {
    const data = await requestApi(`/api/posts/search?keyword=${encodeURIComponent(keyword)}&scene=&style=&budget=`);
    state.searchResults = (data || []).map(normalizePost);
  } catch (error) {
    state.searchResults = filterPostsLocally(keyword, state.posts);
    showToast(firstText(error.message, "搜索失败，已切换为本地筛选"));
  } finally {
    state.searchLoading = false;
    renderApp();
  }
}

async function refreshAll(showToastAfter) {
  if (state.refreshPromise) {
    return state.refreshPromise;
  }

  state.refreshPromise = (async () => {
    state.loadingText = "正在刷新内容…";
    state.publicLoading = true;
    renderApp();

    try {
      if (!state.baseUrl) {
        state.baseUrl = await resolveBaseUrl();
        state.apiMode = "connected";
      }
    } catch (error) {
      state.apiMode = "preview";
      state.baseUrl = "";
    }

    await loadPublicData();
    await loadPrivateData({ silent: true });

    if (state.searchKeyword.trim()) {
      await runSearch();
    } else {
      renderApp();
    }

    if (showToastAfter) {
      showToast(state.apiMode === "connected" ? "页面内容已刷新" : "接口未连接，当前展示预览内容");
    }
  })().finally(() => {
    state.refreshPromise = null;
  });

  return state.refreshPromise;
}

function patchPostCollection(collection, postId, patch) {
  return (collection || []).map((item, index) => {
    if (item.id !== postId) {
      return item;
    }
    return normalizePost(Object.assign({}, item, patch), index);
  });
}

function updatePostEverywhere(postId, patch) {
  state.posts = patchPostCollection(state.posts, postId, patch);
  state.searchResults = patchPostCollection(state.searchResults, postId, patch);
  state.myPosts = patchPostCollection(state.myPosts, postId, patch);
  state.favoritePosts = patchPostCollection(state.favoritePosts, postId, patch);
  if (state.drawer && state.drawer.type === "post" && state.drawer.post && state.drawer.post.id === postId) {
    state.drawer.post = normalizePost(Object.assign({}, state.drawer.post, patch), 0);
  }
}

function upsertActivity(activity) {
  const normalized = normalizeActivity(activity, 0);
  const nextActivities = state.activities.slice(0);
  const index = nextActivities.findIndex((item) => item.id === normalized.id);
  if (index > -1) {
    nextActivities[index] = normalized;
  } else {
    nextActivities.unshift(normalized);
  }
  state.activities = nextActivities;
  state.featuredActivities = state.activities.slice(0, 2);
  state.myActivities = state.myActivities.filter((item) => item.id !== normalized.id);
  if (normalized.joined) {
    state.myActivities.unshift(normalized);
  }
}

function buildComposerPayload() {
  const activity = getSelectedActivity();
  return {
    title: state.composer.title.trim(),
    desc: state.composer.desc.trim(),
    imageUrls: state.composer.images
      .filter((item) => item && item.status === "success" && item.url)
      .map((item) => item.url),
    tags: [state.composer.scene, state.composer.style, state.composer.budget].filter((item) => item !== null && item !== undefined),
    productPrice: buildProductPrice(state.composer.price),
    productLink: state.composer.link.trim(),
    activityId: activity ? activity.id : ""
  };
}

function isComposerReady() {
  const payload = buildComposerPayload();
  const hasUploading = state.composer.images.some((item) => item.status === "uploading");
  const hasError = state.composer.images.some((item) => item.status === "error");
  return (
    isLoggedIn() &&
    state.apiMode === "connected" &&
    !!payload.title &&
    !!payload.desc &&
    payload.imageUrls.length > 0 &&
    !hasUploading &&
    !hasError
  );
}

function renderNavs() {
  const navHtml = PAGE_LIST.map((item) => {
    const activeClass = state.currentPage === item.id ? " nav-chip--active" : "";
    return `<button class="nav-chip${activeClass}" type="button" data-action="switch-page" data-page="${item.id}">${escapeHtml(item.label)}</button>`;
  }).join("");
  refs.pageNav.innerHTML = navHtml;
  refs.mobileNav.innerHTML = navHtml;
}

function renderStatusPanel() {
  const postCount = state.posts.length;
  const activityCount = state.activities.length;
  const activitySelectableCount = getSelectableActivities().length;
  const statusClass = state.apiMode === "connected" ? "status-badge status-badge--ok" : "status-badge status-badge--preview";
  const statusLabel = state.apiMode === "connected" ? "接口已连接" : "预览模式";
  const statusCopy = state.apiMode === "connected"
    ? `当前使用 ${escapeHtml(state.baseUrl)}，会优先读取真实内容、活动和发布接口。`
    : "当前没有探测到可用接口，页面会回退到预览数据，发布与登录写操作不可用。";

  refs.statusPanel.innerHTML = `
    <div class="panel__eyebrow">Sync</div>
    <h2 class="panel__title">和 app 当前能力保持一致</h2>
    <p class="panel__copy">${statusCopy}</p>
    <div class="${statusClass}">${statusLabel}</div>
    <div class="status-metrics">
      <div class="status-metric">
        <strong>${postCount}</strong>
        <span>内容卡片</span>
      </div>
      <div class="status-metric">
        <strong>${activityCount}</strong>
        <span>活动专题</span>
      </div>
      <div class="status-metric">
        <strong>${activitySelectableCount}</strong>
        <span>发布可选活动</span>
      </div>
      <div class="status-metric">
        <strong>${formatCount(state.unreadCount)}</strong>
        <span>未读消息</span>
      </div>
    </div>
  `;
}

function renderQuickPanel() {
  if (!isLoggedIn()) {
    refs.quickPanel.innerHTML = `
      <div class="panel__eyebrow">Quick Start</div>
      <h2 class="panel__title">先浏览，再决定要不要登录</h2>
      <p class="panel__copy">首页、活动和详情都可以先看。登录后才会解锁发布、收藏、草稿和我的活动。</p>
      <div class="quick-actions">
        <button class="quick-action" type="button" data-action="switch-page" data-page="home">浏览首页内容</button>
        <button class="quick-action" type="button" data-action="switch-page" data-page="activities">查看活动中心</button>
        <button class="quick-action" type="button" data-action="open-login">手机号验证码登录</button>
      </div>
    `;
    return;
  }

  const profile = state.profile || normalizeProfile(PREVIEW_DATA.profile);
  refs.quickPanel.innerHTML = `
    <div class="quick-user">
      <div class="quick-user__avatar">${profile.avatarUrl ? `<img src="${escapeAttr(profile.avatarUrl)}" alt="">` : escapeHtml(getInitial(profile.name, profile.avatar))}</div>
      <div class="quick-user__meta">
        <strong>${escapeHtml(profile.name)}</strong>
        <span>${escapeHtml(profile.school)}</span>
      </div>
    </div>
    <div class="quick-grid">
      <button class="quick-tile" type="button" data-action="switch-page" data-page="publish">
        <span class="quick-tile__label">继续发布</span>
        <span class="quick-tile__value">${state.drafts.length}</span>
      </button>
      <button class="quick-tile" type="button" data-action="switch-page" data-page="activities">
        <span class="quick-tile__label">我的活动</span>
        <span class="quick-tile__value">${state.myActivities.length}</span>
      </button>
      <button class="quick-tile" type="button" data-action="switch-page" data-page="profile">
        <span class="quick-tile__label">我的收藏</span>
        <span class="quick-tile__value">${state.favoritePosts.length}</span>
      </button>
      <button class="quick-tile" type="button" data-action="switch-page" data-page="profile">
        <span class="quick-tile__label">未读消息</span>
        <span class="quick-tile__value">${state.unreadCount}</span>
      </button>
    </div>
    <div class="quick-actions">
      <button class="quick-action" type="button" data-action="switch-page" data-page="publish">发一条新内容</button>
      <button class="quick-action" type="button" data-action="switch-page" data-page="profile">打开我的中心</button>
      <button class="quick-action" type="button" data-action="logout">退出登录</button>
    </div>
  `;
}

function renderAuthButton() {
  if (isLoggedIn()) {
    const name = firstText((state.user && (state.user.nickname || state.user.name)), (state.profile && state.profile.name), "我的");
    refs.authButton.textContent = name.length > 6 ? `${name.slice(0, 6)}…` : name;
    refs.authButton.className = "ghost-button ghost-button--compact";
    return;
  }
  refs.authButton.textContent = "登录";
  refs.authButton.className = "primary-button primary-button--compact";
}

function renderPostCard(post) {
  const tags = [post.scene, post.style, post.budget ? `预算 ${post.budget}` : ""].filter(Boolean);
  return `
    <article class="post-card" data-action="open-post" data-id="${escapeAttr(post.id)}">
      <div class="post-card__media post-card__media--tone-${post.tone}">
        ${post.coverUrl ? `<img class="post-card__image" src="${escapeAttr(post.coverUrl)}" alt="${escapeAttr(post.title)}">` : ""}
        <span class="media-pill">${escapeHtml(post.coverTag)}</span>
        <span class="media-label">${escapeHtml(post.publishTime)}</span>
      </div>
      <div class="post-card__body">
        <div>
          <h3 class="post-card__title">${escapeHtml(post.title)}</h3>
          <p class="post-card__desc">${escapeHtml(post.desc)}</p>
        </div>
        <div class="tag-row">
          ${tags.map((tag) => `<span class="tag-pill">${escapeHtml(tag)}</span>`).join("")}
        </div>
        <div class="post-card__foot">
          <div class="author-inline">
            <div class="author-inline__avatar">${post.avatarUrl ? `<img src="${escapeAttr(post.avatarUrl)}" alt="">` : escapeHtml(getInitial(post.user, post.avatar))}</div>
            <div class="author-inline__body">
              <span class="author-inline__name">${escapeHtml(post.user)}</span>
              <span class="author-inline__meta">${escapeHtml(post.school)}</span>
            </div>
          </div>
          <span class="stat-inline">${formatCount(post.likes)} 赞 · ${formatCount(post.comments)} 评</span>
        </div>
      </div>
    </article>
  `;
}

function renderActivityHero(activity) {
  if (!activity) {
    return renderEmptyState("当前没有推荐活动", "活动中心会展示和 app 同步的专题内容。");
  }
  return `
    <article class="activity-hero" data-action="open-activity" data-id="${escapeAttr(activity.id)}" data-context="browse">
      <div class="activity-hero__cover activity-hero__cover--${activity.tone}">
        <div class="badge-list">
          <span class="status-pill status-pill--${activity.statusCategory === "active" ? "active" : activity.statusCategory === "recruiting" ? "recruiting" : "finished"}">${escapeHtml(activity.status)}</span>
          <span class="selectable-pill${activity.selectable ? "" : " selectable-pill--off"}">${activity.selectable ? "发布可选" : "发布不可选"}</span>
        </div>
        <div class="hero-card__meta">${escapeHtml(activity.badge)}</div>
        <h3 class="hero-card__title">${escapeHtml(activity.title)}</h3>
        <p class="hero-card__copy">${escapeHtml(activity.summary)}</p>
      </div>
      <div class="activity-card__body">
        <div>
          <h3 class="activity-card__title">${escapeHtml(activity.scene)}</h3>
          <p class="activity-card__copy">${escapeHtml(activity.period)}</p>
        </div>
        <div class="helper-inline">${escapeHtml(activity.progressText)}</div>
        <div class="activity-card__foot">
          <span class="stat-inline">${formatCount(activity.entries)} 条内容 · 热度 ${activity.heat}</span>
          <span class="small-link">查看详情</span>
        </div>
      </div>
    </article>
  `;
}

function renderActivityCard(activity) {
  return `
    <article class="activity-card" data-action="open-activity" data-id="${escapeAttr(activity.id)}" data-context="browse">
      <div class="activity-card__cover activity-card__cover--${activity.tone}">
        <div class="badge-list">
          <span class="status-pill status-pill--${activity.statusCategory === "active" ? "active" : activity.statusCategory === "recruiting" ? "recruiting" : "finished"}">${escapeHtml(activity.status)}</span>
        </div>
        <div class="hero-card__meta">${escapeHtml(activity.badge)}</div>
        <h3 class="hero-card__title">${escapeHtml(activity.scene)}</h3>
      </div>
      <div class="activity-card__body">
        <div>
          <h3 class="activity-card__title">${escapeHtml(activity.title)}</h3>
          <p class="activity-card__copy">${escapeHtml(activity.summary)}</p>
        </div>
        <div class="tag-row">
          <span class="tag-pill">${escapeHtml(activity.period)}</span>
          <span class="tag-pill${activity.selectable ? "" : " tag-pill--muted"}">${activity.selectable ? "可在发布时选择" : "发布时隐藏"}</span>
        </div>
        <div class="activity-card__foot">
          <span class="stat-inline">${escapeHtml(activity.progressText)}</span>
          <span class="small-link">查看详情</span>
        </div>
      </div>
    </article>
  `;
}

function renderActivityMiniCard(activity, active) {
  return `
    <article class="activity-mini-card${active ? " activity-mini-card--active" : ""}" data-action="open-activity" data-id="${escapeAttr(activity.id)}" data-context="publish">
      <div class="activity-mini-card__cover activity-mini-card__cover--${activity.tone}">
        <div class="badge-list">
          <span class="status-pill status-pill--${activity.statusCategory === "active" ? "active" : activity.statusCategory === "recruiting" ? "recruiting" : "finished"}">${escapeHtml(activity.status)}</span>
        </div>
      </div>
      <div class="activity-mini-card__body">
        <strong>${escapeHtml(activity.title)}</strong>
        <span class="preview-card__meta">${escapeHtml(activity.period)}</span>
        <span class="preview-card__action">${active ? "当前已选择" : "查看详情"}</span>
      </div>
    </article>
  `;
}

function renderEmptyState(title, copy, actionLabel, actionName, actionValue) {
  const extraData = actionValue ? (actionName === "switch-page" ? ` data-page="${escapeAttr(actionValue)}"` : ` data-id="${escapeAttr(actionValue)}"`) : "";
  return `
    <div class="empty-state">
      <div class="empty-state__title">${escapeHtml(title)}</div>
      <div class="empty-state__copy">${escapeHtml(copy)}</div>
      ${actionLabel && actionName ? `<button class="primary-button empty-state__action" type="button" data-action="${escapeAttr(actionName)}"${extraData}>${escapeHtml(actionLabel)}</button>` : ""}
    </div>
  `;
}

function renderHomePage() {
  const announcement = state.announcement || normalizeAnnouncement(PREVIEW_DATA.announcement);
  const featuredActivity = (state.featuredActivities && state.featuredActivities[0]) || state.activities[0] || null;
  const feed = getHomeFeedList();
  const isSearchMode = !!state.searchKeyword.trim();
  const filterHtml = HOME_TABS.map((item) => {
    const activeClass = state.homeTab === item.id ? " filter-chip--active" : "";
    return `<button class="filter-chip${activeClass}" type="button" data-action="set-home-tab" data-tab="${item.id}">${escapeHtml(item.label)}</button>`;
  }).join("");

  return `
    <div class="page-shell">
      <section class="page-shell__head">
        <div class="page-shell__eyebrow">Home</div>
        <h1 class="page-shell__title">内容流、活动入口和发布逻辑已经和 app 对齐。</h1>
        <p class="page-shell__copy">首页保留公告位、精选活动和内容流三块主信息，不再混入旧版原型里的演示面板与答辩状态机。</p>
        <div class="page-shell__actions">
          <button class="ghost-button" type="button" data-action="run-search">搜索当前内容</button>
          ${isSearchMode ? `<button class="outline-button" type="button" data-action="clear-search">清空搜索</button>` : ""}
          <button class="outline-button" type="button" data-action="switch-page" data-page="activities">进入活动中心</button>
        </div>
      </section>

      <section class="hero-grid">
        <article class="hero-card hero-card--notice">
          <div class="hero-card__eyebrow">${escapeHtml(announcement.badge)}</div>
          <h2 class="hero-card__title">${escapeHtml(announcement.title)}</h2>
          <p class="hero-card__copy">${escapeHtml(announcement.summary)}</p>
          <div class="hero-card__meta">${escapeHtml(announcement.publishTime)}</div>
        </article>
        <article class="hero-card hero-card--activity"${featuredActivity ? ` data-action="open-activity" data-id="${escapeAttr(featuredActivity.id)}" data-context="browse"` : ""}>
          <div class="hero-card__eyebrow">${featuredActivity ? escapeHtml(featuredActivity.badge) : "活动"}</div>
          <h2 class="hero-card__title">${featuredActivity ? escapeHtml(featuredActivity.title) : "当前没有活动"}</h2>
          <p class="hero-card__copy">${featuredActivity ? escapeHtml(featuredActivity.summary) : "稍后回来看看新的活动专题。"}</p>
          <div class="hero-card__meta">${featuredActivity ? escapeHtml(featuredActivity.period) : "暂无时间信息"}</div>
        </article>
      </section>

      <section class="section-panel">
        <div class="section-head">
          <div class="section-head__main">
            <div class="section-title__eyebrow">Feed</div>
            <h2 class="section-title">${isSearchMode ? `搜索 “${escapeHtml(state.searchKeyword.trim())}”` : "校园灵感流"}</h2>
            <p class="section-copy">${isSearchMode ? "搜索会优先走真实接口，失败时自动回退到本地筛选。" : "支持推荐、关注、热门三种视角，和 app 首页保持同一套内容逻辑。"}</p>
          </div>
          <div class="filter-row">${filterHtml}</div>
        </div>
        ${state.searchLoading ? `<div class="helper-inline">正在搜索相关内容…</div>` : ""}
        ${feed.length ? `<div class="feed-grid">${feed.map(renderPostCard).join("")}</div>` : renderEmptyState("当前没有可展示内容", state.homeTab === "following" ? "你还没有关注到可展示的作者，先去活动或首页看看吧。" : "换个关键词试试，或者稍后刷新内容。", "刷新内容", "refresh-all")}
      </section>
    </div>
  `;
}

function renderActivitiesPage() {
  const list = getFilteredActivities();
  const featured = list[0] || null;
  const rest = featured ? list.slice(1) : [];
  const filters = ACTIVITY_FILTERS.map((item) => {
    const activeClass = state.activityFilter === item.id ? " filter-chip--active" : "";
    return `<button class="filter-chip${activeClass}" type="button" data-action="set-activity-filter" data-filter="${item.id}">${escapeHtml(item.label)}</button>`;
  }).join("");

  return `
    <div class="page-shell">
      <section class="page-shell__head">
        <div class="page-shell__eyebrow">Activities</div>
        <h1 class="page-shell__title">活动中心只保留当前真正可用的专题。</h1>
        <p class="page-shell__copy">现在的活动卡片会直接进入详情。不可选活动仍会展示，但在发布时不会进入可选列表，这一点和 app 一致。</p>
        <div class="page-shell__actions">
          <button class="outline-button" type="button" data-action="switch-page" data-page="publish">去发布内容</button>
          <button class="ghost-button" type="button" data-action="refresh-all">刷新活动</button>
        </div>
      </section>

      <section class="section-panel">
        <div class="section-head">
          <div class="section-head__main">
            <div class="section-title__eyebrow">Center</div>
            <h2 class="section-title">共 ${state.activities.length} 个活动，发布可选 ${getSelectableActivities().length} 个</h2>
            <p class="section-copy">进行中和招募中的活动都能看见，但是否可被发布选择，取决于活动本身的 selectable 配置。</p>
          </div>
          <div class="filter-row">${filters}</div>
        </div>
        ${featured ? renderActivityHero(featured) : renderEmptyState("当前没有活动", "活动中心还没有可展示的数据。", "刷新活动", "refresh-all")}
        ${rest.length ? `<div class="activity-grid">${rest.map(renderActivityCard).join("")}</div>` : ""}
      </section>
    </div>
  `;
}

function renderPublishPage() {
  const selectedActivity = getSelectedActivity();
  const selectableActivities = getSelectableActivities().slice(0, 6);
  const ready = isComposerReady();
  const hasUploading = state.composer.images.some((item) => item.status === "uploading");
  const hasError = state.composer.images.some((item) => item.status === "error");
  const writeBlocked = state.apiMode !== "connected";
  const imageCards = state.composer.images.map((item) => `
    <div class="upload-card">
      ${item.previewUrl ? `<img class="upload-card__image" src="${escapeAttr(item.previewUrl)}" alt="${escapeAttr(item.name || "已选图片")}">` : ""}
      <button class="upload-card__remove" type="button" data-action="remove-image" data-id="${escapeAttr(item.id)}">移除</button>
      <div class="upload-card__overlay">${escapeHtml(item.status === "uploading" ? "上传中…" : item.status === "error" ? "上传失败" : "已上传")}</div>
    </div>
  `).join("");

  const placeholders = Array.from({ length: Math.max(0, 4 - Math.min(4, state.composer.images.length + 1)) }).map(() => `
    <div class="upload-card upload-card--ghost">
      <div class="upload-card__label">
        <strong>·</strong>
        <span>留给下一张图</span>
      </div>
    </div>
  `).join("");

  if (!isLoggedIn()) {
    return `
      <div class="page-shell">
        <section class="page-shell__head">
          <div class="page-shell__eyebrow">Publish</div>
          <h1 class="page-shell__title">发布页保留真正实用的字段。</h1>
          <p class="page-shell__copy">现在只有图片、标题、描述、价格、商品链接、标签和活动选择，没有旧版原型里的测试流程和演示占位。</p>
        </section>
        <section class="section-panel">
          ${renderEmptyState("登录后开始发布", "手机号验证码登录后，就能上传图片、保存草稿并选择当前可参与的活动。", "立即登录", "open-login")}
        </section>
      </div>
    `;
  }

  return `
    <div class="page-shell">
      <section class="page-shell__head">
        <div class="page-shell__eyebrow">Publish</div>
        <h1 class="page-shell__title">简化后的 web 发布页，更接近现在的 app。</h1>
        <p class="page-shell__copy">活动不再“绑定发布”，而是在提交前由用户主动选择。不可选活动只会出现在活动中心，不会进入这里的选择列表。</p>
        <div class="page-shell__actions">
          <div class="notice-strip">${writeBlocked ? "当前未连接接口，发布与草稿保存不可用。" : hasUploading ? "图片上传中，上传完成后才能提交。" : hasError ? "有图片上传失败，建议移除后重新上传。" : ready ? "当前内容可直接发布。" : "先补齐标题、描述和至少一张图片。"}</div>
        </div>
      </section>

      <section class="composer-layout">
        <div class="composer-media">
          <section class="section-panel">
            <div class="section-head">
              <div class="section-head__main">
                <div class="section-title__eyebrow">Images</div>
                <h2 class="section-title">上传内容图片</h2>
                <p class="section-copy">最多 ${MAX_IMAGE_COUNT} 张，建议至少准备一张主图。</p>
              </div>
            </div>
            <div class="uploader-grid">
              ${imageCards}
              ${state.composer.images.length < MAX_IMAGE_COUNT ? `
                <button class="upload-card upload-card--add" type="button" data-action="trigger-image-picker">
                  <div class="upload-card__label">
                    <strong>＋</strong>
                    <span>添加图片</span>
                  </div>
                </button>
              ` : ""}
              ${placeholders}
            </div>
          </section>

          ${selectedActivity ? `
            <section class="composer-summary">
              <div class="section-title__eyebrow">Selected</div>
              <h3 class="composer-summary__title">${escapeHtml(selectedActivity.title)}</h3>
              <p class="composer-summary__copy">${escapeHtml(selectedActivity.summary)}</p>
              <div class="tag-row">
                <span class="tag-pill">${escapeHtml(selectedActivity.period)}</span>
                <span class="tag-pill">${escapeHtml(selectedActivity.status)}</span>
              </div>
              <div class="button-row">
                <button class="outline-button" type="button" data-action="open-activity" data-id="${escapeAttr(selectedActivity.id)}" data-context="publish">查看详情</button>
                <button class="subtle-button" type="button" data-action="clear-selected-activity">取消选择</button>
              </div>
            </section>
          ` : ""}
        </div>

        <div class="composer-form">
          <section class="section-panel">
            <div class="form-group">
              <label class="form-label" for="composerTitle">标题</label>
              <input id="composerTitle" class="text-input" type="text" maxlength="30" data-model="composer.title" value="${escapeAttr(state.composer.title)}" placeholder="给这条穿搭起一个清晰标题">
            </div>
            <div class="form-group">
              <label class="form-label" for="composerDesc">描述</label>
              <textarea id="composerDesc" class="text-area" maxlength="200" data-model="composer.desc" placeholder="写清楚这套穿搭适合什么场景、怎么搭、预算大概是多少。">${escapeHtml(state.composer.desc)}</textarea>
            </div>
            <div class="inline-grid">
              <label class="inline-field">
                <span>价格</span>
                <input type="text" inputmode="decimal" data-model="composer.price" value="${escapeAttr(state.composer.price)}" placeholder="可不填">
              </label>
              <label class="inline-field">
                <span>链接</span>
                <input type="text" data-model="composer.link" value="${escapeAttr(state.composer.link)}" placeholder="真实商品链接">
              </label>
            </div>
          </section>

          <section class="section-panel">
            <div class="section-head">
              <div class="section-head__main">
                <div class="section-title__eyebrow">Tags</div>
                <h2 class="section-title">场景与风格</h2>
                <p class="section-copy">和 app 一样保留场景、风格和预算三类标签，直接在发布页完成即可。</p>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">场景</label>
              <div class="chip-grid">
                ${state.tags.sceneTags.map((item) => `<button class="select-chip${state.composer.scene === item ? " select-chip--active" : ""}" type="button" data-action="set-scene" data-value="${escapeAttr(item)}">${escapeHtml(item)}</button>`).join("")}
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">风格</label>
              <div class="chip-grid">
                ${state.tags.styleTags.map((item) => `<button class="select-chip${state.composer.style === item ? " select-chip--active" : ""}" type="button" data-action="set-style" data-value="${escapeAttr(item)}">${escapeHtml(item)}</button>`).join("")}
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">预算</label>
              <div class="chip-grid">
                <button class="select-chip${!state.composer.budget ? " select-chip--active" : ""}" type="button" data-action="set-budget" data-value="">不设置</button>
                ${state.tags.budgetTags.map((item) => `<button class="select-chip${state.composer.budget === item ? " select-chip--active" : ""}" type="button" data-action="set-budget" data-value="${escapeAttr(item)}">${escapeHtml(item)}</button>`).join("")}
              </div>
            </div>
          </section>

          <section class="section-panel">
            <div class="section-head">
              <div class="section-head__main">
                <div class="section-title__eyebrow">Activities</div>
                <h2 class="section-title">选择要关联的活动</h2>
                <p class="section-copy">这里只显示 selectable 为 true 的活动。点击卡片会先看活动详情，再决定是否选择。</p>
              </div>
            </div>
            ${selectableActivities.length ? `<div class="activity-picker">${selectableActivities.map((item) => renderActivityMiniCard(item, selectedActivity && selectedActivity.id === item.id)).join("")}</div>` : renderEmptyState("当前没有可选活动", "活动中心里如果是不可选活动，会被自动从发布列表中隐藏。")}
          </section>

          <section class="section-panel">
            <div class="composer-actions">
              <div class="helper-inline">已选图片 ${state.composer.images.length} 张${state.composer.draftId ? " · 草稿已关联" : ""}</div>
              <div class="button-row">
                <button class="ghost-button${writeBlocked ? " is-disabled" : ""}" type="button" data-action="save-draft"${writeBlocked ? " disabled" : ""}>保存草稿</button>
                <button class="primary-button${ready ? "" : " is-disabled"}" type="button" data-action="publish-post"${ready ? "" : " disabled"}>立即发布</button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  `;
}

function renderPreviewCard(item, kind) {
  const isDraft = kind === "drafts";
  const meta = isDraft
    ? `${item.savedAt} · ${[item.scene, item.style, item.budget].filter(Boolean).join(" / ")}`
    : `${item.publishTime} · ${formatCount(item.likes || 0)} 赞`;
  return `
    <article class="preview-card">
      <div class="preview-card__media post-card__media--tone-${item.tone || coverToneFromIndex(0)}">
        ${item.coverUrl ? `<img class="preview-card__image" src="${escapeAttr(item.coverUrl)}" alt="${escapeAttr(item.title)}">` : ""}
      </div>
      <div class="preview-card__body">
        <h3 class="preview-card__title">${escapeHtml(item.title)}</h3>
        <p class="preview-card__meta">${escapeHtml(meta)}</p>
        <button class="preview-card__action" type="button" data-action="${isDraft ? "use-draft" : "open-post"}" data-id="${escapeAttr(item.id)}">${isDraft ? "继续编辑" : "查看详情"}</button>
      </div>
    </article>
  `;
}

function renderProfilePage() {
  if (!isLoggedIn()) {
    return `
      <div class="page-shell">
        <section class="page-shell__head">
          <div class="page-shell__eyebrow">Profile</div>
          <h1 class="page-shell__title">我的中心只保留发布、收藏、草稿和活动。</h1>
          <p class="page-shell__copy">旧版原型里的消息演示、测试菜单和设置占位已经去掉。登录后你会看到和 app 一致的核心管理入口。</p>
        </section>
        <section class="section-panel">
          ${renderEmptyState("登录后查看我的内容", "包括我的发布、收藏、草稿和加入中的活动。", "立即登录", "open-login")}
        </section>
      </div>
    `;
  }

  const profile = state.profile || normalizeProfile(PREVIEW_DATA.profile);
  const incentives = state.incentives || normalizeIncentive(PREVIEW_DATA.incentives);
  const previewItems = getProfilePreviewItems();
  const tabs = PROFILE_TABS.map((item) => {
    const activeClass = state.profileTab === item.id ? " preview-tab--active" : "";
    return `<button class="preview-tab${activeClass}" type="button" data-action="set-profile-tab" data-tab="${item.id}">${escapeHtml(item.label)}</button>`;
  }).join("");

  return `
    <div class="page-shell">
      <section class="page-shell__head">
        <div class="page-shell__eyebrow">Profile</div>
        <h1 class="page-shell__title">发布、收藏、草稿和活动都集中在这里。</h1>
        <p class="page-shell__copy">信息架构已经和当前 app 对齐，保留创作激励、我的活动、我的发布和收藏，不再展示测试用的演示页签。</p>
      </section>

      <section class="profile-hero">
        <div class="profile-hero__cover">${profile.coverImageUrl ? `<img src="${escapeAttr(profile.coverImageUrl)}" alt="">` : ""}</div>
        <div class="profile-hero__overlay"></div>
        <div class="profile-hero__body">
          <div class="profile-avatar">${profile.avatarUrl ? `<img src="${escapeAttr(profile.avatarUrl)}" alt="">` : escapeHtml(getInitial(profile.name, profile.avatar))}</div>
          <div class="profile-identity">
            <h2>${escapeHtml(profile.name)}</h2>
            <div>${escapeHtml(profile.school)}</div>
            <div class="profile-meta-row">
              ${profile.gender ? `<span>${escapeHtml(profile.gender)}</span>` : ""}
              ${profile.locationName ? `<span>${escapeHtml(profile.locationName)}</span>` : ""}
              <span>未读消息 ${state.unreadCount}</span>
            </div>
            <div>${escapeHtml(profile.sign)}</div>
          </div>
          <div class="button-row">
            <button class="ghost-button" type="button" data-action="switch-page" data-page="publish">继续发布</button>
            <button class="outline-button" type="button" data-action="switch-page" data-page="activities">查看我的活动</button>
            <button class="subtle-button" type="button" data-action="logout">退出登录</button>
          </div>
        </div>
      </section>

      <section class="section-panel">
        <div class="metric-grid">
          <div class="metric-card">
            <strong>${formatCount(profile.following)}</strong>
            <span>关注</span>
          </div>
          <div class="metric-card">
            <strong>${formatCount(profile.followers)}</strong>
            <span>粉丝</span>
          </div>
          <div class="metric-card">
            <strong>${formatCount(profile.likes)}</strong>
            <span>获赞</span>
          </div>
          <div class="metric-card">
            <strong>${incentives.totalAmount}</strong>
            <span>累计激励</span>
          </div>
        </div>
        ${state.myActivities.length ? `<div class="helper-inline">当前已加入 ${state.myActivities.length} 个活动：${escapeHtml(state.myActivities.map((item) => item.title).slice(0, 2).join("、"))}${state.myActivities.length > 2 ? "…" : ""}</div>` : `<div class="helper-inline">你还没有加入活动，可以先去活动中心看看。</div>`}
      </section>

      <section class="section-panel">
        <div class="section-head">
          <div class="section-head__main">
            <div class="section-title__eyebrow">Library</div>
            <h2 class="section-title">${escapeHtml(PROFILE_TABS.find((item) => item.id === state.profileTab).label)}</h2>
            <p class="section-copy">${state.profileTab === "drafts" ? "草稿点击后会直接回填到发布页继续编辑。" : "这里展示与你当前账号相关的真实内容列表。"}</p>
          </div>
          <div class="preview-tabs">${tabs}</div>
        </div>
        ${previewItems.length ? `<div class="preview-grid">${previewItems.map((item) => renderPreviewCard(item, state.profileTab)).join("")}</div>` : renderEmptyState("这里还没有内容", state.profileTab === "drafts" ? "先去发布页存一个草稿。" : "继续浏览首页，把感兴趣的内容收藏起来。", state.profileTab === "drafts" ? "去发布页" : "返回首页", "switch-page", state.profileTab === "drafts" ? "publish" : "home")}
      </section>
    </div>
  `;
}

function renderPageContent() {
  if (state.publicLoading && !state.posts.length && state.currentPage !== "publish" && state.currentPage !== "profile") {
    refs.pageContent.innerHTML = `
      <div class="page-shell">
        <section class="page-shell__head">
          <div class="page-shell__eyebrow">Loading</div>
          <h1 class="page-shell__title">${escapeHtml(state.loadingText)}</h1>
          <p class="page-shell__copy">正在准备和当前 app 对齐的 web 页面内容。</p>
        </section>
        <div class="skeleton skeleton-card"></div>
      </div>
    `;
    return;
  }

  if (state.currentPage === "activities") {
    refs.pageContent.innerHTML = renderActivitiesPage();
    return;
  }
  if (state.currentPage === "publish") {
    refs.pageContent.innerHTML = renderPublishPage();
    return;
  }
  if (state.currentPage === "profile") {
    refs.pageContent.innerHTML = renderProfilePage();
    return;
  }
  refs.pageContent.innerHTML = renderHomePage();
}

function renderApp() {
  renderNavs();
  renderStatusPanel();
  renderQuickPanel();
  renderAuthButton();
  renderPageContent();
  renderDrawer();
  renderToasts();
  if (document.activeElement !== refs.globalSearchInput) {
    refs.globalSearchInput.value = state.searchKeyword;
  }
}

function showToast(message) {
  const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  state.toasts = (state.toasts || []).concat([{ id, message: safeText(message, "操作已完成") }]);
  renderToasts();
  window.setTimeout(() => {
    state.toasts = (state.toasts || []).filter((item) => item.id !== id);
    renderToasts();
  }, 2600);
}

function renderToasts() {
  refs.toastRoot.innerHTML = (state.toasts || [])
    .map((item) => `<div class="toast">${escapeHtml(item.message)}</div>`)
    .join("");
}

function closeDrawer() {
  if (state.drawer && state.drawer.type === "login" && state.login.timer) {
    updateLoginCountdownUi();
  }
  state.drawer = null;
  renderDrawer();
}

function renderCommentCard(item) {
  const replies = Array.isArray(item.replies) ? item.replies : [];
  return `
    <div class="comment-card">
      <div class="comment-card__avatar">${item.avatarUrl ? `<img src="${escapeAttr(item.avatarUrl)}" alt="">` : escapeHtml(getInitial(item.name, item.avatar || "评"))}</div>
      <div class="comment-card__body">
        <div class="comment-card__head">
          <strong class="comment-card__name">${escapeHtml(item.name || "用户")}</strong>
          <span class="comment-card__time">${escapeHtml(item.time || "刚刚")}</span>
        </div>
        <div class="comment-card__text">${escapeHtml(item.text || item.content || "")}</div>
        ${replies.length ? replies.map((reply) => `<div class="helper-inline">回复 ${escapeHtml(reply.replyToName || item.name)}：${escapeHtml(reply.text || reply.content || "")}</div>`).join("") : ""}
      </div>
    </div>
  `;
}

function renderPostDrawer() {
  if (!state.drawer) {
    return "";
  }
  if (state.drawer.loading) {
    return `
      <div class="drawer-layer">
        <div class="drawer-scrim" data-action="close-drawer"></div>
        <aside class="drawer-panel">
          <div class="drawer-panel__head">
            <div class="drawer-panel__title">内容详情</div>
            <button class="drawer-close" type="button" data-action="close-drawer">×</button>
          </div>
          <div class="drawer-panel__body">
            <div class="skeleton skeleton-card"></div>
          </div>
        </aside>
      </div>
    `;
  }

  const post = state.drawer.post;
  const comments = state.drawer.comments || [];
  const images = post.imageUrls && post.imageUrls.length ? post.imageUrls : (post.coverUrl ? [post.coverUrl] : []);
  const activeImage = images[state.drawer.imageIndex || 0] || images[0] || "";
  const relatedActivity = post.activity || state.activities.find((item) => item.id === post.activityId) || null;

  return `
    <div class="drawer-layer">
      <div class="drawer-scrim" data-action="close-drawer"></div>
      <aside class="drawer-panel">
        <div class="drawer-panel__head">
          <div class="drawer-panel__title">内容详情</div>
          <button class="drawer-close" type="button" data-action="close-drawer">×</button>
        </div>
        <div class="drawer-panel__body">
          <section class="drawer-hero drawer-hero--${post.tone}">
            ${activeImage ? `<img class="drawer-hero__image" src="${escapeAttr(activeImage)}" alt="${escapeAttr(post.title)}">` : ""}
            <div class="drawer-hero__content">
              <div class="badge-list">
                <span class="media-pill">${escapeHtml(post.coverTag)}</span>
                <span class="media-pill">${escapeHtml(post.publishTime)}</span>
              </div>
              <h2 class="drawer-hero__title">${escapeHtml(post.title)}</h2>
              <div>${escapeHtml(post.subtitle || post.desc)}</div>
            </div>
          </section>

          ${images.length > 1 ? `
            <div class="drawer-thumb-row">
              ${images.map((item, index) => `<button class="drawer-thumb${index === (state.drawer.imageIndex || 0) ? " drawer-thumb--active" : ""}" type="button" data-action="set-drawer-image" data-index="${index}"><img src="${escapeAttr(item)}" alt=""></button>`).join("")}
            </div>
          ` : ""}

          <section class="drawer-block">
            <div class="author-inline">
              <div class="author-inline__avatar">${post.avatarUrl ? `<img src="${escapeAttr(post.avatarUrl)}" alt="">` : escapeHtml(getInitial(post.user, post.avatar))}</div>
              <div class="author-inline__body">
                <span class="author-inline__name">${escapeHtml(post.user)}</span>
                <span class="author-inline__meta">${escapeHtml(post.school)}</span>
              </div>
            </div>
            <div class="tag-row">
              <span class="tag-pill">${escapeHtml(post.scene)}</span>
              <span class="tag-pill">${escapeHtml(post.style)}</span>
              ${post.budget ? `<span class="tag-pill">预算 ${escapeHtml(post.budget)}</span>` : ""}
            </div>
            <p class="drawer-block__copy">${escapeHtml(post.desc)}</p>
            ${post.guideTip ? `<div class="helper-inline">${escapeHtml(post.guideTip)}</div>` : ""}
            <div class="drawer-action-row">
              <button class="outline-button" type="button" data-action="toggle-like-post" data-id="${escapeAttr(post.id)}">${post.liked ? "取消点赞" : "点赞"} ${formatCount(post.likes)}</button>
              <button class="outline-button" type="button" data-action="toggle-favorite-post" data-id="${escapeAttr(post.id)}">${post.favorited ? "取消收藏" : "收藏"} ${formatCount(post.saves)}</button>
              ${!post.mine ? `<button class="ghost-button" type="button" data-action="toggle-follow-author" data-id="${escapeAttr(post.authorId)}">${post.followed ? "已关注" : "关注作者"}</button>` : ""}
            </div>
          </section>

          ${relatedActivity ? `
            <section class="drawer-related-card" data-action="open-activity" data-id="${escapeAttr(relatedActivity.id)}" data-context="browse">
              <div class="section-title__eyebrow">Activity</div>
              <strong>${escapeHtml(relatedActivity.title)}</strong>
              <div class="drawer-block__copy">${escapeHtml(relatedActivity.period || relatedActivity.progressText || relatedActivity.status)}</div>
            </section>
          ` : ""}

          ${post.product ? `
            <section class="drawer-block">
              <div class="drawer-block__eyebrow">Product</div>
              <h3 class="drawer-block__title">${escapeHtml(post.product)}</h3>
              <p class="drawer-block__copy">${escapeHtml(firstText(post.price, "价格待补充"))}</p>
              ${post.productLink ? `<button class="primary-button" type="button" data-action="open-product-link" data-url="${escapeAttr(post.productLink)}">打开商品链接</button>` : `<div class="helper-inline">当前没有可跳转的商品链接。</div>`}
            </section>
          ` : ""}

          <section class="drawer-block">
            <div class="section-head">
              <div class="section-head__main">
                <div class="section-title__eyebrow">Comments</div>
                <h3 class="section-title">评论 ${comments.length}</h3>
              </div>
            </div>
            ${comments.length ? `<div class="drawer-comment-list">${comments.map(renderCommentCard).join("")}</div>` : `<div class="helper-inline">还没有评论，试试发第一条。</div>`}
            ${isLoggedIn() && state.apiMode === "connected" ? `
              <div class="drawer-comment-form">
                <textarea class="text-area" data-model="drawer.commentText" placeholder="写下你的看法…">${escapeHtml(state.drawer.commentText || "")}</textarea>
                <button class="primary-button" type="button" data-action="submit-comment" data-id="${escapeAttr(post.id)}">发送评论</button>
              </div>
            ` : `<div class="helper-inline">登录并连接接口后可以发表评论。</div>`}
          </section>
        </div>
      </aside>
    </div>
  `;
}

function renderActivityDrawer() {
  if (!state.drawer) {
    return "";
  }
  if (state.drawer.loading) {
    return `
      <div class="drawer-layer">
        <div class="drawer-scrim" data-action="close-drawer"></div>
        <aside class="drawer-panel">
          <div class="drawer-panel__head">
            <div class="drawer-panel__title">活动详情</div>
            <button class="drawer-close" type="button" data-action="close-drawer">×</button>
          </div>
          <div class="drawer-panel__body">
            <div class="skeleton skeleton-card"></div>
          </div>
        </aside>
      </div>
    `;
  }

  const activity = state.drawer.activity;
  const statusTone = activity.statusCategory === "active" ? "active" : activity.statusCategory === "recruiting" ? "recruiting" : "finished";
  const canJoin = activity.statusCategory !== "finished";
  const canPick = state.drawer.context === "publish" && activity.selectable && activity.statusCategory !== "finished";

  return `
    <div class="drawer-layer">
      <div class="drawer-scrim" data-action="close-drawer"></div>
      <aside class="drawer-panel">
        <div class="drawer-panel__head">
          <div class="drawer-panel__title">活动详情</div>
          <button class="drawer-close" type="button" data-action="close-drawer">×</button>
        </div>
        <div class="drawer-panel__body">
          <section class="drawer-hero drawer-hero--${activity.tone}">
            <div class="drawer-hero__content">
              <div class="badge-list">
                <span class="status-pill status-pill--${statusTone}">${escapeHtml(activity.status)}</span>
                <span class="selectable-pill${activity.selectable ? "" : " selectable-pill--off"}">${activity.selectable ? "发布可选" : "发布不可选"}</span>
              </div>
              <div>${escapeHtml(activity.badge)}</div>
              <h2 class="drawer-hero__title">${escapeHtml(activity.title)}</h2>
              <div>${escapeHtml(activity.summary)}</div>
            </div>
          </section>

          <section class="drawer-block">
            <div class="drawer-meta-grid">
              <div class="drawer-meta">
                <strong>周期</strong>
                <span>${escapeHtml(activity.period)}</span>
              </div>
              <div class="drawer-meta">
                <strong>热度</strong>
                <span>${activity.heat}</span>
              </div>
              <div class="drawer-meta">
                <strong>内容数</strong>
                <span>${activity.entries}</span>
              </div>
            </div>
          </section>

          <section class="drawer-block">
            <div class="drawer-block__eyebrow">About</div>
            <h3 class="drawer-block__title">活动简介</h3>
            <p class="drawer-block__copy">${escapeHtml(activity.theme)}</p>
          </section>

          <section class="drawer-block">
            <div class="drawer-block__eyebrow">Rules</div>
            <h3 class="drawer-block__title">参与方式</h3>
            <p class="drawer-block__copy">${escapeHtml(activity.participation)}</p>
            <div class="helper-inline">${escapeHtml(activity.reward)}</div>
          </section>

          <section class="drawer-block">
            <div class="drawer-block__eyebrow">Progress</div>
            <h3 class="drawer-block__title">活动进展</h3>
            <p class="drawer-block__copy">${escapeHtml(activity.progressText)}</p>
          </section>

          <div class="drawer-action-row">
            ${canJoin ? `<button class="ghost-button" type="button" data-action="toggle-join-activity" data-id="${escapeAttr(activity.id)}">${activity.joined ? "退出活动" : "加入活动"}</button>` : ""}
            ${canPick ? `<button class="primary-button" type="button" data-action="select-activity-from-drawer" data-id="${escapeAttr(activity.id)}">选择这个活动</button>` : ""}
            ${state.drawer.context === "publish" && !canPick ? `<div class="helper-inline">这个活动当前不会出现在发布可选列表中。</div>` : ""}
          </div>
        </div>
      </aside>
    </div>
  `;
}

function renderLoginDrawer() {
  const disabled = state.apiMode !== "connected";
  const sendLabel = state.login.countdown > 0 ? `${state.login.countdown}s` : (state.login.sending ? "发送中…" : "发送验证码");
  return `
    <div class="drawer-layer">
      <div class="drawer-scrim" data-action="close-drawer"></div>
      <aside class="drawer-panel">
        <div class="drawer-panel__head">
          <div class="drawer-panel__title">登录</div>
          <button class="drawer-close" type="button" data-action="close-drawer">×</button>
        </div>
        <div class="drawer-panel__body">
          <section class="login-panel">
            <div class="panel__eyebrow">Auth</div>
            <h2 class="login-panel__title">手机号验证码登录</h2>
            <p class="login-panel__copy">${disabled ? "当前未连接接口，暂时只能浏览页面。" : "登录后即可发布内容、保存草稿、查看我的活动和收藏。"}</p>
            <div class="login-grid">
              <input class="text-input" type="tel" maxlength="11" data-model="login.phone" value="${escapeAttr(state.login.phone)}" placeholder="请输入 11 位手机号"${disabled ? " disabled" : ""}>
              <input class="text-input" type="text" maxlength="6" data-model="login.code" value="${escapeAttr(state.login.code)}" placeholder="请输入验证码"${disabled ? " disabled" : ""}>
            </div>
            <div class="login-button-row">
              <button class="ghost-button" type="button" data-action="send-login-code"${disabled || state.login.sending || state.login.countdown > 0 ? " disabled" : ""}>${escapeHtml(sendLabel)}</button>
              <button class="primary-button" type="button" data-action="submit-login"${disabled || state.login.submitting ? " disabled" : ""}>${state.login.submitting ? "登录中…" : "立即登录"}</button>
            </div>
          </section>
        </div>
      </aside>
    </div>
  `;
}

function renderDrawer() {
  let html = "";
  if (state.drawer) {
    if (state.drawer.type === "post") {
      html = renderPostDrawer();
    } else if (state.drawer.type === "activity") {
      html = renderActivityDrawer();
    } else if (state.drawer.type === "login") {
      html = renderLoginDrawer();
    }
  }
  refs.drawerRoot.innerHTML = html;
  document.body.classList.toggle("has-drawer", !!state.drawer);
}

function updateLoginCountdownUi() {
  if (!state.drawer || state.drawer.type !== "login") {
    return;
  }
  const button = refs.drawerRoot.querySelector('[data-action="send-login-code"]');
  if (!button) {
    return;
  }
  button.textContent = state.login.countdown > 0 ? `${state.login.countdown}s` : (state.login.sending ? "发送中…" : "发送验证码");
  button.disabled = state.apiMode !== "connected" || state.login.sending || state.login.countdown > 0;
}

function switchPage(pageId) {
  const nextPage = PAGE_LIST.some((item) => item.id === pageId) ? pageId : "home";
  state.currentPage = nextPage;
  renderApp();
}

function openLoginDrawer() {
  state.drawer = {
    type: "login"
  };
  renderDrawer();
}

function ensureLoggedIn(message) {
  if (isLoggedIn()) {
    return true;
  }
  if (message) {
    showToast(message);
  }
  openLoginDrawer();
  return false;
}

async function openPostDrawer(postId) {
  const fallbackPost =
    state.posts.find((item) => item.id === postId) ||
    state.myPosts.find((item) => item.id === postId) ||
    state.favoritePosts.find((item) => item.id === postId) ||
    PREVIEW_DATA.posts.map(normalizePost).find((item) => item.id === postId) ||
    null;

  state.drawer = {
    type: "post",
    loading: true,
    postId,
    post: fallbackPost,
    comments: [],
    commentText: "",
    imageIndex: 0
  };
  renderDrawer();

  if (state.apiMode !== "connected") {
    state.drawer = {
      type: "post",
      loading: false,
      post: fallbackPost || normalizePost(PREVIEW_DATA.posts[0], 0),
      comments: PREVIEW_DATA.commentsByPost[postId] || [],
      commentText: "",
      imageIndex: 0
    };
    renderDrawer();
    return;
  }

  try {
    const [detail, comments] = await Promise.all([
      requestApi(`/api/posts/${encodeURIComponent(postId)}`),
      requestApi(`/api/posts/${encodeURIComponent(postId)}/comments`)
    ]);
    state.drawer = {
      type: "post",
      loading: false,
      post: normalizePost(detail, 0),
      comments: comments || [],
      commentText: "",
      imageIndex: 0
    };
  } catch (error) {
    state.drawer = {
      type: "post",
      loading: false,
      post: fallbackPost || normalizePost(PREVIEW_DATA.posts[0], 0),
      comments: PREVIEW_DATA.commentsByPost[postId] || [],
      commentText: "",
      imageIndex: 0
    };
    showToast(firstText(error.message, "详情加载失败，已回退到预览内容"));
  }
  renderDrawer();
}

async function openActivityDrawer(activityId, context) {
  const fallbackActivity =
    state.activities.find((item) => item.id === activityId) ||
    state.myActivities.find((item) => item.id === activityId) ||
    PREVIEW_DATA.activities.map(normalizeActivity).find((item) => item.id === activityId) ||
    null;

  state.drawer = {
    type: "activity",
    loading: true,
    activityId,
    context: context || "browse",
    activity: fallbackActivity
  };
  renderDrawer();

  if (state.apiMode !== "connected") {
    state.drawer = {
      type: "activity",
      loading: false,
      activity: fallbackActivity || normalizeActivity(PREVIEW_DATA.activities[0], 0),
      context: context || "browse"
    };
    renderDrawer();
    return;
  }

  try {
    const detail = await requestApi(`/api/activities/${encodeURIComponent(activityId)}`);
    state.drawer = {
      type: "activity",
      loading: false,
      activity: normalizeActivity(detail, 0),
      context: context || "browse"
    };
  } catch (error) {
    state.drawer = {
      type: "activity",
      loading: false,
      activity: fallbackActivity || normalizeActivity(PREVIEW_DATA.activities[0], 0),
      context: context || "browse"
    };
    showToast(firstText(error.message, "活动详情加载失败，已回退到预览内容"));
  }
  renderDrawer();
}

function setValueByPath(path, value) {
  if (!path) {
    return;
  }
  const parts = path.split(".");
  let target = state;
  for (let index = 0; index < parts.length - 1; index += 1) {
    target = target[parts[index]];
    if (!target) {
      return;
    }
  }
  target[parts[parts.length - 1]] = value;
  if (path.startsWith("composer.")) {
    persistComposer();
  }
}

function revokeImageUrl(url) {
  if (firstText(url).startsWith("blob:")) {
    try {
      window.URL.revokeObjectURL(url);
    } catch (error) {
      return;
    }
  }
}

function removeComposerImage(imageId) {
  const image = state.composer.images.find((item) => item.id === imageId);
  if (image) {
    revokeImageUrl(image.previewUrl);
  }
  state.composer.images = state.composer.images.filter((item) => item.id !== imageId);
  persistComposer();
  renderApp();
}

async function handleSelectedImages(files) {
  if (!ensureLoggedIn("登录后才可以上传图片")) {
    return;
  }
  if (state.apiMode !== "connected") {
    showToast("当前未连接接口，暂时不能上传图片");
    return;
  }

  const remain = MAX_IMAGE_COUNT - state.composer.images.length;
  const acceptedFiles = Array.from(files || []).slice(0, remain);
  if (!acceptedFiles.length) {
    return;
  }

  for (let index = 0; index < acceptedFiles.length; index += 1) {
    const file = acceptedFiles[index];
    if (file.size > MAX_FILE_SIZE) {
      showToast(`已跳过 ${file.name}，图片不能超过 10MB`);
      continue;
    }
    const imageId = `image-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const previewUrl = window.URL.createObjectURL(file);
    state.composer.images.push({
      id: imageId,
      url: "",
      previewUrl,
      status: "uploading",
      name: file.name
    });
    renderApp();

    try {
      const result = await uploadImage(file);
      const nextImage = state.composer.images.find((item) => item.id === imageId);
      if (nextImage) {
        nextImage.url = result && result.url ? result.url : "";
        nextImage.previewUrl = result && result.url ? result.url : previewUrl;
        nextImage.status = result && result.url ? "success" : "error";
      }
      if (!(result && result.url)) {
        showToast("图片上传成功但没有返回可用链接");
      }
    } catch (error) {
      const nextImage = state.composer.images.find((item) => item.id === imageId);
      if (nextImage) {
        nextImage.status = "error";
      }
      showToast(firstText(error.message, "图片上传失败"));
    }
    persistComposer();
    renderApp();
  }
}

function resetComposer() {
  state.composer.images.forEach((item) => revokeImageUrl(item.previewUrl));
  state.composer = buildEmptyComposer();
  persistComposer();
}

async function saveDraft() {
  if (!ensureLoggedIn("登录后才可以保存草稿")) {
    return;
  }
  if (state.apiMode !== "connected") {
    showToast("当前未连接接口，草稿无法保存");
    return;
  }

  state.composer.saving = true;
  renderApp();

  try {
    const payload = buildComposerPayload();
    const data = state.composer.draftId
      ? await requestApi(`/api/drafts/${encodeURIComponent(state.composer.draftId)}`, {
          method: "PUT",
          body: JSON.stringify(payload)
        })
      : await requestApi("/api/drafts", {
          method: "POST",
          body: JSON.stringify(payload)
        });

    state.composer.draftId = firstText(data && data.id, state.composer.draftId);
    persistComposer();
    await loadPrivateData({ silent: true });
    showToast("草稿已保存");
  } catch (error) {
    showToast(firstText(error.message, "草稿保存失败"));
  } finally {
    state.composer.saving = false;
    renderApp();
  }
}

async function publishPost() {
  if (!ensureLoggedIn("登录后才可以发布内容")) {
    return;
  }
  if (state.apiMode !== "connected") {
    showToast("当前未连接接口，不能提交发布");
    return;
  }
  if (!isComposerReady()) {
    showToast("请先补齐标题、描述和至少一张图片");
    return;
  }

  state.composer.submitting = true;
  renderApp();

  try {
    const payload = buildComposerPayload();
    if (state.composer.draftId) {
      await requestApi(`/api/drafts/${encodeURIComponent(state.composer.draftId)}/publish`, {
        method: "POST",
        body: JSON.stringify(payload)
      });
    } else {
      await requestApi("/api/posts", {
        method: "POST",
        body: JSON.stringify(payload)
      });
    }
    resetComposer();
    await loadPublicData();
    await loadPrivateData({ silent: true });
    state.currentPage = "profile";
    showToast("内容已提交");
  } catch (error) {
    showToast(firstText(error.message, "发布失败"));
  } finally {
    state.composer.submitting = false;
    renderApp();
  }
}

function useDraft(draftId) {
  const draft = state.drafts.find((item) => item.id === draftId);
  if (!draft) {
    showToast("没有找到对应草稿");
    return;
  }
  resetComposer();
  state.composer = buildEmptyComposer({
    title: draft.title,
    desc: draft.desc,
    price: draft.productPrice ? String(draft.productPrice) : "",
    link: draft.productLink,
    scene: draft.scene || DEFAULT_TAGS.scene,
    style: draft.style || DEFAULT_TAGS.style,
    budget: draft.budget || "",
    selectedActivityId: draft.activityId || "",
    draftId: draft.id,
    images: (draft.imageUrls || []).map((item, index) => ({
      id: `draft-image-${index}`,
      url: item,
      previewUrl: item,
      status: "success",
      name: "draft"
    }))
  });
  persistComposer();
  state.currentPage = "publish";
  renderApp();
  showToast("草稿已载入发布页");
}

function startLoginCountdown(seconds) {
  if (state.login.timer) {
    window.clearInterval(state.login.timer);
  }
  state.login.countdown = Number(seconds || 60);
  updateLoginCountdownUi();
  state.login.timer = window.setInterval(() => {
    if (state.login.countdown <= 1) {
      state.login.countdown = 0;
      window.clearInterval(state.login.timer);
      state.login.timer = null;
      updateLoginCountdownUi();
      return;
    }
    state.login.countdown -= 1;
    updateLoginCountdownUi();
  }, 1000);
}

async function sendLoginCode() {
  if (state.apiMode !== "connected") {
    showToast("当前未连接接口，无法发送验证码");
    return;
  }
  if (!/^1\d{10}$/.test(state.login.phone)) {
    showToast("请输入 11 位手机号");
    return;
  }

  state.login.sending = true;
  updateLoginCountdownUi();
  try {
    const payload = await requestApi("/api/auth/send-code", {
      method: "POST",
      body: JSON.stringify({
        phone: state.login.phone,
        scene: "login"
      })
    }, { includeAuth: false });
    startLoginCountdown(payload && payload.retryAfterSeconds);
    showToast("验证码已发送");
  } catch (error) {
    showToast(firstText(error.message, "验证码发送失败"));
  } finally {
    state.login.sending = false;
    updateLoginCountdownUi();
  }
}

async function submitLogin() {
  if (state.apiMode !== "connected") {
    showToast("当前未连接接口，暂时不能登录");
    return;
  }
  if (!/^1\d{10}$/.test(state.login.phone)) {
    showToast("请输入 11 位手机号");
    return;
  }
  if (!/^\d{4,6}$/.test(state.login.code)) {
    showToast("请输入验证码");
    return;
  }

  state.login.submitting = true;
  renderDrawer();
  try {
    const payload = await requestApi("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        phone: state.login.phone,
        loginType: "code",
        code: state.login.code
      })
    }, { includeAuth: false });
    saveSession(payload);
    await loadPrivateData({ silent: true });
    closeDrawer();
    showToast("登录成功");
    renderApp();
  } catch (error) {
    showToast(firstText(error.message, "登录失败"));
  } finally {
    state.login.submitting = false;
    renderDrawer();
  }
}

function openProductLink(url) {
  const nextUrl = firstText(url);
  if (!nextUrl) {
    showToast("当前没有可用链接");
    return;
  }
  window.open(nextUrl, "_blank", "noopener");
}

async function toggleLikePost(postId) {
  if (!ensureLoggedIn("登录后才可以点赞")) {
    return;
  }
  const current = (state.drawer && state.drawer.post && state.drawer.post.id === postId ? state.drawer.post : null) || state.posts.find((item) => item.id === postId);
  if (!current) {
    return;
  }
  if (state.apiMode !== "connected") {
    updatePostEverywhere(postId, {
      liked: !current.liked,
      likes: Math.max(0, current.likes + (current.liked ? -1 : 1))
    });
    renderApp();
    return;
  }

  try {
    const updated = await requestApi(`/api/posts/${encodeURIComponent(postId)}/like`, { method: "POST" });
    updatePostEverywhere(postId, {
      liked: typeof updated.liked === "boolean" ? updated.liked : !current.liked,
      likes: clampNumber(updated.likes !== undefined ? updated.likes : current.likes + (current.liked ? -1 : 1))
    });
    renderApp();
  } catch (error) {
    showToast(firstText(error.message, "点赞失败"));
  }
}

async function toggleFavoritePost(postId) {
  if (!ensureLoggedIn("登录后才可以收藏")) {
    return;
  }
  const current = (state.drawer && state.drawer.post && state.drawer.post.id === postId ? state.drawer.post : null) || state.posts.find((item) => item.id === postId);
  if (!current) {
    return;
  }
  if (state.apiMode !== "connected") {
    updatePostEverywhere(postId, {
      favorited: !current.favorited,
      saves: Math.max(0, current.saves + (current.favorited ? -1 : 1))
    });
    renderApp();
    return;
  }

  try {
    const updated = await requestApi(`/api/posts/${encodeURIComponent(postId)}/favorite`, { method: "POST" });
    updatePostEverywhere(postId, {
      favorited: typeof updated.favorited === "boolean" ? updated.favorited : !current.favorited,
      saves: clampNumber(updated.saves !== undefined ? updated.saves : current.saves + (current.favorited ? -1 : 1))
    });
    await loadPrivateData({ silent: true });
    renderApp();
  } catch (error) {
    showToast(firstText(error.message, "收藏失败"));
  }
}

async function toggleFollowAuthor(authorId) {
  if (!ensureLoggedIn("登录后才可以关注作者")) {
    return;
  }
  if (!authorId) {
    return;
  }
  if (state.apiMode !== "connected") {
    if (state.drawer && state.drawer.type === "post" && state.drawer.post) {
      state.drawer.post.followed = !state.drawer.post.followed;
    }
    renderDrawer();
    return;
  }

  try {
    const updated = await requestApi(`/api/profile/follows/${encodeURIComponent(authorId)}`, { method: "POST" });
    const followed = typeof updated.followed === "boolean" ? updated.followed : !(state.drawer && state.drawer.post && state.drawer.post.followed);
    if (state.drawer && state.drawer.type === "post" && state.drawer.post) {
      state.drawer.post.followed = followed;
    }
    await loadPrivateData({ silent: true });
    renderDrawer();
  } catch (error) {
    showToast(firstText(error.message, "关注失败"));
  }
}

async function submitComment(postId) {
  if (!ensureLoggedIn("登录后才可以发表评论")) {
    return;
  }
  if (state.apiMode !== "connected") {
    showToast("当前未连接接口，不能提交评论");
    return;
  }
  const content = firstText(state.drawer && state.drawer.commentText);
  if (!content) {
    showToast("先写一点内容再发送");
    return;
  }

  try {
    await requestApi(`/api/posts/${encodeURIComponent(postId)}/comments`, {
      method: "POST",
      body: JSON.stringify({ content })
    });
    const comments = await requestApi(`/api/posts/${encodeURIComponent(postId)}/comments`);
    if (state.drawer && state.drawer.type === "post") {
      state.drawer.comments = comments || [];
      state.drawer.commentText = "";
    }
    renderDrawer();
    showToast("评论已发送");
  } catch (error) {
    showToast(firstText(error.message, "评论发送失败"));
  }
}

async function toggleJoinActivity(activityId) {
  if (!ensureLoggedIn("登录后才可以加入活动")) {
    return;
  }
  if (state.apiMode !== "connected") {
    if (state.drawer && state.drawer.type === "activity" && state.drawer.activity) {
      state.drawer.activity.joined = !state.drawer.activity.joined;
      upsertActivity(state.drawer.activity);
      renderApp();
    }
    return;
  }
  try {
    const updated = await requestApi(`/api/activities/${encodeURIComponent(activityId)}/join-toggle`, { method: "POST" });
    upsertActivity(updated);
    if (state.drawer && state.drawer.type === "activity") {
      state.drawer.activity = normalizeActivity(updated, 0);
    }
    await loadPrivateData({ silent: true });
    renderApp();
    showToast(updated.joined ? "已加入活动" : "已退出活动");
  } catch (error) {
    showToast(firstText(error.message, "活动状态更新失败"));
  }
}

function selectActivityFromDrawer(activityId) {
  state.composer.selectedActivityId = activityId;
  persistComposer();
  state.currentPage = "publish";
  closeDrawer();
  renderApp();
  showToast("活动已选中");
}

function clearSelectedActivity() {
  state.composer.selectedActivityId = "";
  persistComposer();
  renderApp();
}

function handleActionClick(event) {
  const target = event.target.closest("[data-action]");
  if (!target) {
    return;
  }

  const action = target.getAttribute("data-action");
  if (action === "switch-page") {
    switchPage(target.getAttribute("data-page"));
    return;
  }
  if (action === "refresh-all") {
    refreshAll(true);
    return;
  }
  if (action === "run-search") {
    runSearch();
    return;
  }
  if (action === "clear-search") {
    state.searchKeyword = "";
    state.searchResults = [];
    renderApp();
    return;
  }
  if (action === "set-home-tab") {
    state.homeTab = target.getAttribute("data-tab") || "recommend";
    renderApp();
    return;
  }
  if (action === "set-activity-filter") {
    state.activityFilter = target.getAttribute("data-filter") || "all";
    renderApp();
    return;
  }
  if (action === "set-profile-tab") {
    state.profileTab = target.getAttribute("data-tab") || "posts";
    renderApp();
    return;
  }
  if (action === "open-login") {
    openLoginDrawer();
    return;
  }
  if (action === "close-drawer") {
    closeDrawer();
    return;
  }
  if (action === "open-post") {
    openPostDrawer(target.getAttribute("data-id"));
    return;
  }
  if (action === "open-activity") {
    openActivityDrawer(target.getAttribute("data-id"), target.getAttribute("data-context") || "browse");
    return;
  }
  if (action === "trigger-image-picker") {
    refs.imagePicker.click();
    return;
  }
  if (action === "remove-image") {
    removeComposerImage(target.getAttribute("data-id"));
    return;
  }
  if (action === "set-scene") {
    state.composer.scene = target.getAttribute("data-value") || DEFAULT_TAGS.scene;
    persistComposer();
    renderApp();
    return;
  }
  if (action === "set-style") {
    state.composer.style = target.getAttribute("data-value") || DEFAULT_TAGS.style;
    persistComposer();
    renderApp();
    return;
  }
  if (action === "set-budget") {
    state.composer.budget = target.getAttribute("data-value") || "";
    persistComposer();
    renderApp();
    return;
  }
  if (action === "clear-selected-activity") {
    clearSelectedActivity();
    return;
  }
  if (action === "save-draft") {
    saveDraft();
    return;
  }
  if (action === "publish-post") {
    publishPost();
    return;
  }
  if (action === "use-draft") {
    useDraft(target.getAttribute("data-id"));
    return;
  }
  if (action === "send-login-code") {
    sendLoginCode();
    return;
  }
  if (action === "submit-login") {
    submitLogin();
    return;
  }
  if (action === "toggle-like-post") {
    toggleLikePost(target.getAttribute("data-id"));
    return;
  }
  if (action === "toggle-favorite-post") {
    toggleFavoritePost(target.getAttribute("data-id"));
    return;
  }
  if (action === "toggle-follow-author") {
    toggleFollowAuthor(target.getAttribute("data-id"));
    return;
  }
  if (action === "submit-comment") {
    submitComment(target.getAttribute("data-id"));
    return;
  }
  if (action === "toggle-join-activity") {
    toggleJoinActivity(target.getAttribute("data-id"));
    return;
  }
  if (action === "select-activity-from-drawer") {
    selectActivityFromDrawer(target.getAttribute("data-id"));
    return;
  }
  if (action === "open-product-link") {
    openProductLink(target.getAttribute("data-url"));
    return;
  }
  if (action === "logout") {
    clearSessionStorage();
    resetPrivateData();
    state.login.phone = "";
    state.login.code = "";
    state.currentPage = "home";
    closeDrawer();
    renderApp();
  }
  if (action === "set-drawer-image" && state.drawer && state.drawer.type === "post") {
    state.drawer.imageIndex = Number(target.getAttribute("data-index") || 0);
    renderDrawer();
  }
}

function handleInput(event) {
  const target = event.target;
  if (!target || !target.dataset || !target.dataset.model) {
    return;
  }
  setValueByPath(target.dataset.model, target.value);
}

function collectRefs() {
  refs.pageNav = document.getElementById("pageNav");
  refs.mobileNav = document.getElementById("mobileNav");
  refs.statusPanel = document.getElementById("statusPanel");
  refs.quickPanel = document.getElementById("quickPanel");
  refs.pageContent = document.getElementById("pageContent");
  refs.globalSearchInput = document.getElementById("globalSearchInput");
  refs.refreshButton = document.getElementById("refreshButton");
  refs.authButton = document.getElementById("authButton");
  refs.brandButton = document.getElementById("brandButton");
  refs.drawerRoot = document.getElementById("drawerRoot");
  refs.toastRoot = document.getElementById("toastRoot");
  refs.imagePicker = document.getElementById("imagePicker");
}

function bindEvents() {
  document.addEventListener("click", handleActionClick);
  document.addEventListener("input", handleInput);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.drawer) {
      closeDrawer();
    }
  });

  refs.brandButton.addEventListener("click", () => switchPage("home"));
  refs.refreshButton.addEventListener("click", () => refreshAll(true));
  refs.authButton.addEventListener("click", () => {
    if (isLoggedIn()) {
      switchPage("profile");
      return;
    }
    openLoginDrawer();
  });
  refs.globalSearchInput.addEventListener("input", (event) => {
    state.searchKeyword = event.target.value;
    if (!state.searchKeyword.trim()) {
      state.searchResults = [];
    }
  });
  refs.globalSearchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      runSearch();
    }
  });
  refs.imagePicker.addEventListener("change", async (event) => {
    const files = event.target.files;
    await handleSelectedImages(files);
    event.target.value = "";
  });
}

async function bootstrap() {
  collectRefs();
  restoreComposer();
  normalizePublicData();
  resetPrivateData();
  renderApp();
  bindEvents();

  try {
    state.baseUrl = await resolveBaseUrl();
    state.apiMode = "connected";
    state.loadingText = "正在同步真实内容…";
  } catch (error) {
    state.apiMode = "preview";
    state.baseUrl = "";
    state.loadingText = "接口未连接，已切换预览内容";
  }

  await loadPublicData();
  await loadPrivateData({ silent: true });
  renderApp();
}

bootstrap();
