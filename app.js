const screenCatalog = [
  { id: "splash", title: "启动页", group: "引导" },
  { id: "login", title: "登录页", group: "引导" },
  { id: "register", title: "注册完善信息", group: "引导" },
  { id: "home", title: "首页", group: "内容" },
  { id: "detail", title: "穿搭详情", group: "内容" },
  { id: "publish", title: "发布穿搭", group: "发布" },
  { id: "tags", title: "标签选择", group: "发布" },
  { id: "search", title: "搜索页", group: "搜索" },
  { id: "results", title: "搜索结果", group: "搜索" },
  { id: "profile", title: "个人主页", group: "个人中心" },
  { id: "my-posts", title: "我的发布", group: "个人中心" },
  { id: "favorites", title: "我的收藏", group: "个人中心" },
  { id: "follow-list", title: "关注/粉丝", group: "社交" },
  { id: "comments", title: "评论列表", group: "社交" },
  { id: "likes", title: "点赞列表", group: "社交" },
  { id: "product-jump", title: "商品跳转确认", group: "导购" },
  { id: "settings", title: "设置页", group: "个人中心" },
  { id: "edit-profile", title: "编辑资料", group: "个人中心" },
  { id: "drafts", title: "草稿箱", group: "发布" },
  { id: "messages", title: "消息通知", group: "社交" }
];

const outfits = [
  {
    id: "look1",
    art: "art-look-1",
    coverTag: "早八课",
    title: "蓝白衬衫 + 奶油背心的早八高分搭",
    subtitle: "图书馆拍照也很出片",
    user: "林夏",
    school: "华东理工大学 · 广告学",
    avatar: "夏",
    avatarClass: "",
    scene: "图书馆",
    style: "清新学院",
    budget: "80-150",
    likeCount: 128,
    commentCount: 36,
    saveCount: 92,
    shareCount: 14,
    desc: "把蓝白色系做得更轻一点，适合春夏校园通勤。衬衫选宽松一点，叠一个奶油色针织背心会显得更有层次。",
    tags: ["早八课", "图书馆", "清新学院", "百元穿搭"],
    productName: "蓝白条纹衬衫 / 奶油针织背心 / 小白鞋",
    productPlatform: "淘宝店铺精选",
    productLink: "https://campusfit.example.com/product/look1",
    tips: "预算控制在百元上下，优先选择可复用基础单品，避免为了单次拍照冲动消费。"
  },
  {
    id: "look2",
    art: "art-look-2",
    coverTag: "操场夜跑",
    title: "青春绿运动卫衣，一套搞定社团活动",
    subtitle: "操场、晨跑、部门团建都能穿",
    user: "周沐",
    school: "南京师范大学 · 学前教育",
    avatar: "沐",
    avatarClass: "mint",
    scene: "操场",
    style: "运动休闲",
    budget: "100-200",
    likeCount: 203,
    commentCount: 48,
    saveCount: 115,
    shareCount: 21,
    desc: "运动风别只会穿黑色，青春绿在校园里很显朝气。上衣选择略短款卫衣，裤子用高腰束脚会更利落。",
    tags: ["操场", "运动休闲", "社团活动", "百搭卫衣"],
    productName: "青春绿连帽卫衣 / 灰白束脚裤 / 训练鞋",
    productPlatform: "京东运动旗舰",
    productLink: "https://campusfit.example.com/product/look2",
    tips: "同类单品复购率高，建议先对比宿舍已有运动裤和鞋，再考虑是否补充新款。"
  },
  {
    id: "look3",
    art: "art-look-3",
    coverTag: "约会日",
    title: "奶咖色针织裙，校园约会不费力",
    subtitle: "甜而不腻，很适合周末咖啡馆",
    user: "顾言",
    school: "苏州大学 · 汉语言文学",
    avatar: "言",
    avatarClass: "amber",
    scene: "周末约会",
    style: "韩系简约",
    budget: "150-260",
    likeCount: 176,
    commentCount: 31,
    saveCount: 142,
    shareCount: 19,
    desc: "奶咖色对校园场景特别友好，既温柔又不显得太成熟。加一只奶白托特包和浅色发夹，照片氛围会更完整。",
    tags: ["周末约会", "韩系简约", "奶咖色", "温柔风"],
    productName: "奶咖针织连衣裙 / 奶白托特包 / 浅杏单鞋",
    productPlatform: "小红书同款合集",
    productLink: "https://campusfit.example.com/product/look3",
    tips: "约会穿搭建议围绕已拥有的包鞋做搭配，先补核心单品，再考虑配饰升级。"
  },
  {
    id: "look4",
    art: "art-look-4",
    coverTag: "考试周",
    title: "自习室盐系叠穿，舒服又不邋遢",
    subtitle: "连续泡馆一天也不会累",
    user: "沈知",
    school: "浙江大学 · 数据科学",
    avatar: "知",
    avatarClass: "soft",
    scene: "考试周",
    style: "盐系简约",
    budget: "50-100",
    likeCount: 98,
    commentCount: 19,
    saveCount: 87,
    shareCount: 10,
    desc: "考试周最怕衣服好看但不舒服，所以我会用灰紫开衫叠白T，再配软糯阔腿裤。坐得久也不勒。",
    tags: ["考试周", "盐系简约", "自习室", "50-100"],
    productName: "灰紫针织开衫 / 白色打底T / 灰蓝阔腿裤",
    productPlatform: "拼多多百搭专区",
    productLink: "https://campusfit.example.com/product/look4",
    tips: "考试周穿搭优先舒适与实穿，建议限制购物频率，把预算留给更高复用率单品。"
  },
  {
    id: "look5",
    art: "art-look-5",
    coverTag: "社团答辩",
    title: "清爽衬衫裙，学生干部感也能很轻盈",
    subtitle: "适合路演、汇报、社团招新",
    user: "叶青",
    school: "中山大学 · 新闻学",
    avatar: "青",
    avatarClass: "mint",
    scene: "社团活动",
    style: "轻通勤",
    budget: "120-220",
    likeCount: 155,
    commentCount: 27,
    saveCount: 101,
    shareCount: 16,
    desc: "做社团答辩时想看起来干净有精神，我会选一条浅绿色衬衫裙，外加浅灰针织披肩。",
    tags: ["社团活动", "轻通勤", "答辩", "衬衫裙"],
    productName: "浅绿衬衫裙 / 灰色针织披肩 / 乐福鞋",
    productPlatform: "天猫校园精选",
    productLink: "https://campusfit.example.com/product/look5",
    tips: "答辩类场景建议优先选择能反复用于面试、汇报的基础款，提升单品性价比。"
  },
  {
    id: "look6",
    art: "art-look-6",
    coverTag: "雨天通勤",
    title: "粉白卫衣层次感，阴天也能元气满格",
    subtitle: "寝室到教学楼的一键舒适公式",
    user: "季禾",
    school: "厦门大学 · 传播学",
    avatar: "禾",
    avatarClass: "pink",
    scene: "雨天",
    style: "甜酷轻松",
    budget: "80-180",
    likeCount: 132,
    commentCount: 29,
    saveCount: 108,
    shareCount: 13,
    desc: "阴雨天穿粉白会让人更有精神。卫衣里面叠一件白衬衫露边，配深色短裙和平底鞋很适合校园穿梭。",
    tags: ["雨天", "甜酷轻松", "教学楼", "层次感"],
    productName: "粉白连帽卫衣 / 白衬衫 / 深灰百褶裙",
    productPlatform: "淘宝学生价专区",
    productLink: "https://campusfit.example.com/product/look6",
    tips: "雨天场景建议优先检查宿舍已有外套和防水鞋，避免因为天气临时冲动下单。"
  }
];

const users = [
  { id: "u1", name: "林夏", subtitle: "华东理工大学 · 清新学院风分享", avatar: "夏", avatarClass: "" },
  { id: "u2", name: "周沐", subtitle: "南京师范大学 · 运动休闲日常", avatar: "沐", avatarClass: "mint" },
  { id: "u3", name: "顾言", subtitle: "苏州大学 · 周末约会搭子", avatar: "言", avatarClass: "amber" },
  { id: "u4", name: "沈知", subtitle: "浙江大学 · 自习室舒服穿搭", avatar: "知", avatarClass: "soft" },
  { id: "u5", name: "叶青", subtitle: "中山大学 · 社团答辩穿搭", avatar: "青", avatarClass: "mint" },
  { id: "u6", name: "季禾", subtitle: "厦门大学 · 雨天通勤灵感", avatar: "禾", avatarClass: "pink" }
];

const commentsBase = [
  { id: "c1", user: "宋梨", avatar: "梨", avatarClass: "pink", time: "2分钟前", text: "这套颜色真的很适合早八，背心链接求分享。", likes: 16 },
  { id: "c2", user: "安宁", avatar: "宁", avatarClass: "soft", time: "8分钟前", text: "图书馆氛围感绝了，校园感拿捏得很自然。", likes: 12 },
  { id: "c3", user: "陈早早", avatar: "早", avatarClass: "mint", time: "20分钟前", text: "预算写得很清楚，这点对学生党真的太友好了。", likes: 10 },
  { id: "c4", user: "闻溪", avatar: "溪", avatarClass: "", time: "28分钟前", text: "想看操场场景那套的细节图，卫衣颜色很特别。", likes: 7 },
  { id: "c5", user: "姜落", avatar: "落", avatarClass: "amber", time: "34分钟前", text: "建议多放一点同价位替代单品，会更像导购助手。", likes: 4 },
  { id: "c6", user: "秦羽", avatar: "羽", avatarClass: "soft", time: "41分钟前", text: "这个版型真的显瘦，答辩的时候穿也会很合适。", likes: 9 }
];

const messagesBase = [
  { id: "m0", type: "系统", title: "品牌合作中心向你发来 1 条校园专题邀约", desc: "若接受合作，平台将向商家收取推广服务费，并按内容表现向你结算达人合作分成。", time: "刚刚", badge: "商务合作", badgeClass: "orange" },
  { id: "m1", type: "点赞", title: "周沐赞了你的穿搭《蓝白早八高分搭》", desc: "这套蓝白叠穿收藏率正在上升，系统建议继续补充商品清单。", time: "刚刚", badge: "互动提升", badgeClass: "green" },
  { id: "m2", type: "评论", title: "宋梨评论了你的穿搭", desc: "“背心链接求分享。” 你可以一键回复并同步商品导购链接。", time: "5分钟前", badge: "待回复", badgeClass: "orange" },
  { id: "m3", type: "关注", title: "顾言关注了你", desc: "你的账号近 7 天新增 23 位同校粉丝，图书馆场景穿搭最受欢迎。", time: "18分钟前", badge: "粉丝增长", badgeClass: "green" },
  { id: "m4", type: "系统", title: "草稿《操场晚风少年感穿搭》已自动保存", desc: "建议补充预算标签与商品链接，可提高导购转化率。", time: "43分钟前", badge: "系统提醒", badgeClass: "pink" },
  { id: "m5", type: "收藏", title: "12 位同学收藏了你的考试周穿搭", desc: "用户更关注舒适度与预算说明，推荐增加面料细节描述。", time: "1小时前", badge: "高收藏", badgeClass: "green" },
  { id: "m6", type: "系统", title: "校园场景标签“社团答辩”热度上升", desc: "可以发布轻通勤或汇报风穿搭，提升首页曝光。", time: "2小时前", badge: "趋势建议", badgeClass: "orange" }
];

const draftsBase = [
  { id: "d1", title: "操场晚风少年感穿搭", status: "待发布", time: "今天 14:20", tags: ["操场", "运动休闲", "100-200"], note: "已上传 6 张图片，还差商品链接和封面排序。" },
  { id: "d2", title: "答辩前一天的轻通勤搭配", status: "待完善", time: "昨天 21:16", tags: ["社团答辩", "轻通勤", "120-220"], note: "标题和预算都写好了，建议补一个展示全身比例的正面图。" },
  { id: "d3", title: "雨天图书馆甜酷叠穿", status: "自动保存", time: "昨天 09:08", tags: ["雨天", "图书馆", "80-180"], note: "评论区有人想看雨天鞋款选择，可以作为下一次内容方向。" }
];

const searchHistory = ["图书馆穿搭", "早八课", "百元内", "社团答辩", "雨天搭配"];
const hotSearches = ["开学季清爽穿搭", "操场运动风", "考试周舒服穿搭", "约会裙装", "社团招新穿什么"];

const app = document.getElementById("app");
const screenGrid = document.getElementById("screenGrid");
const currentScreenLabel = document.getElementById("currentScreenLabel");
const statusClock = document.getElementById("statusClock");
const toast = document.getElementById("toast");

const state = {
  current: "splash",
  history: [],
  currentOutfit: "look1",
  homeTab: "recommend",
  sceneFilter: "全部",
  searchTerm: "图书馆穿搭",
  searchScene: ["图书馆"],
  searchStyle: ["清新学院"],
  searchBudget: ["50-100"],
  publishTags: ["操场", "运动休闲", "100-200"],
  selectedTagDraft: ["操场", "运动休闲", "100-200"],
  tagReturn: "publish",
  liked: new Set(["look1", "look2"]),
  saved: new Set(["look1", "look3"]),
  followed: new Set(["u1", "u3"]),
  commentLikes: new Set(["c1"]),
  toggles: { push: true, privacy: false, dataSaver: true },
  loadCounts: { home: 4, results: 3, comments: 4, likes: 4, posts: 3, favorites: 3, follows: 4, drafts: 2, messages: 4 },
  login: { phone: "186 8888 2026", code: "2468", countdown: 0 },
  register: {
    nickname: "林夏",
    school: "华东理工大学",
    grade: "大三",
    signature: "记录真实校园场景下的实穿穿搭"
  },
  publish: {
    title: "操场晚风少年感穿搭",
    desc: "下课后直接去操场拍了一套，绿色卫衣配灰白运动裤很有青春感，预算也比较友好。",
    link: "https://campusfit.example.com/product/new-look",
    imageCount: 6
  },
  followTab: "following",
  messageTab: "all",
  refreshSeed: 0
};

let toastTimer = null;
let splashTimer = null;
let codeTimer = null;

function icon(name) {
  return '<svg class="icon-svg"><use href="#' + name + '"></use></svg>';
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatCount(value) {
  return value >= 1000 ? (value / 1000).toFixed(1) + "k" : String(value);
}

function getOutfit(id = state.currentOutfit) {
  return outfits.find((item) => item.id === id) || outfits[0];
}

function getUserByName(name) {
  return users.find((item) => item.name === name) || users[0];
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1700);
}

function navigate(screen, options = {}) {
  const { push = true, outfitId } = options;
  if (push && state.current !== screen) {
    state.history.push({ screen: state.current, outfitId: state.currentOutfit });
  }
  state.current = screen;
  if (outfitId) {
    state.currentOutfit = outfitId;
  }
  render();
}

function returnToScreen(screen) {
  const previous = state.history[state.history.length - 1];
  if (previous && previous.screen === screen) {
    state.history.pop();
    state.current = previous.screen;
    state.currentOutfit = previous.outfitId || state.currentOutfit;
    render();
    return;
  }
  navigate(screen, { push: false });
}

function goBack() {
  const previous = state.history.pop();
  if (!previous) {
    showToast("已经是第一页啦");
    return;
  }
  state.current = previous.screen;
  state.currentOutfit = previous.outfitId || state.currentOutfit;
  render();
}

function refreshCurrent() {
  state.refreshSeed += 1;
  showToast("当前页面已刷新");
  render();
}

function loadMore() {
  const map = {
    home: "home",
    results: "results",
    comments: "comments",
    likes: "likes",
    "my-posts": "posts",
    favorites: "favorites",
    "follow-list": "follows",
    drafts: "drafts",
    messages: "messages"
  };
  const key = map[state.current];
  if (!key) {
    refreshCurrent();
    return;
  }
  const max = key === "home" ? outfits.length : 6;
  state.loadCounts[key] = Math.min(state.loadCounts[key] + 2, max);
  showToast("已加载更多内容");
  render();
}

function toggleLike(outfitId) {
  if (state.liked.has(outfitId)) {
    state.liked.delete(outfitId);
    showToast("已取消点赞");
  } else {
    state.liked.add(outfitId);
    showToast("已点赞");
  }
  render();
}

function toggleSave(outfitId) {
  if (state.saved.has(outfitId)) {
    state.saved.delete(outfitId);
    showToast("已取消收藏");
  } else {
    state.saved.add(outfitId);
    showToast("已加入收藏");
  }
  render();
}

function toggleFollow(userId) {
  if (state.followed.has(userId)) {
    state.followed.delete(userId);
    showToast("已取消关注");
  } else {
    state.followed.add(userId);
    showToast("关注成功");
  }
  render();
}

function toggleCommentLike(commentId) {
  if (state.commentLikes.has(commentId)) {
    state.commentLikes.delete(commentId);
  } else {
    state.commentLikes.add(commentId);
  }
  render();
}

function sendCode() {
  if (state.login.countdown > 0) {
    return;
  }
  state.login.countdown = 60;
  clearInterval(codeTimer);
  codeTimer = setInterval(() => {
    state.login.countdown -= 1;
    if (state.login.countdown <= 0) {
      clearInterval(codeTimer);
      state.login.countdown = 0;
    }
    if (state.current === "login") {
      render();
    }
  }, 1000);
  showToast("验证码已发送");
  render();
}

function openExternalShop() {
  const look = getOutfit();
  const win = window.open("", "_blank");
  if (!win) {
    showToast("浏览器拦截了新窗口");
    return;
  }
  win.document.write(
    '<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><title>外部电商平台模拟页</title><style>body{margin:0;font-family:"PingFang SC","Microsoft YaHei",sans-serif;background:linear-gradient(180deg,#eef8fd,#f8fcff);color:#243240}.wrap{max-width:760px;margin:0 auto;padding:32px 20px}.card{background:#fff;border-radius:28px;padding:24px;box-shadow:0 20px 50px rgba(58,115,155,.14)}.tag{display:inline-block;padding:8px 12px;border-radius:999px;background:#eaf7ff;color:#49b7ed;font-weight:700;font-size:12px}h1{margin:18px 0 10px;font-size:30px}p{line-height:1.9;color:#6d8191}.price{font-size:34px;font-weight:800;color:#23a27d;margin:16px 0}.btn{display:inline-block;padding:14px 24px;border-radius:18px;background:linear-gradient(135deg,#49b7ed,#3ec49d);color:#fff;text-decoration:none;font-weight:700}.tips{margin-top:18px;padding:14px 16px;border-radius:18px;background:#fff6eb;color:#9a6522}</style></head><body><div class="wrap"><div class="card"><span class="tag">外部平台跳转模拟</span><h1>' +
      escapeHtml(look.productName) +
      '</h1><p>这里用于演示从校园穿搭内容详情页跳转到外部电商平台的导购流程。APP 负责内容种草与理性消费提醒，实际购买行为发生在外部平台。</p><div class="price">学生参考价 ¥' +
      escapeHtml(look.budget) +
      '</div><a class="btn" href="' +
      escapeHtml(look.productLink) +
      '">模拟继续购买</a><div class="tips">理性消费提示：请根据预算、已有单品复用率和真实需求下单，避免冲动消费。</div></div></div></body></html>'
  );
  win.document.close();
  showToast("已打开外部电商模拟页");
}

function renderHeader(title, subtitle, options = {}) {
  const back = options.back !== false;
  const right = options.right || "";
  return `
    <div class="page-header">
      <div class="header-group">
        ${back ? '<button class="icon-btn" data-action="back">' + icon("icon-back") + "</button>" : '<div style="width:38px"></div>'}
        <div class="title-wrap">
          <h2 class="page-title">${title}</h2>
          ${subtitle ? '<div class="page-subtitle">' + subtitle + "</div>" : ""}
        </div>
      </div>
      <div class="header-group">
        <button class="icon-btn" data-action="refresh">${icon("icon-refresh")}</button>
        ${right}
      </div>
    </div>
  `;
}

function renderBottomNav(active) {
  const items = [
    { id: "home", label: "首页", icon: "icon-home" },
    { id: "publish", label: "发布", icon: "icon-plus", special: true },
    { id: "search", label: "搜索", icon: "icon-search" },
    { id: "profile", label: "我的", icon: "icon-user" }
  ];
  return `
    <div class="bottom-nav">
      ${items
        .map(
          (item) => `
            <button class="nav-item ${active === item.id ? "is-active" : ""} ${item.special ? "publish-nav" : ""}" data-nav="${item.id}">
              <span class="nav-icon-wrap">${icon(item.icon)}</span>
              <span>${item.label}</span>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderTagChips(tags, activeList) {
  return tags
    .map(
      (tag) =>
        '<button class="tag-chip-ui ' +
        (activeList.includes(tag) ? "is-active" : "") +
        '" data-action="tag-toggle" data-tag="' +
        tag +
        '">' +
        tag +
        "</button>"
    )
    .join("");
}

function renderFeedCard(item) {
  const user = getUserByName(item.user);
  const userId = "u" + (users.findIndex((entry) => entry.name === item.user) + 1);
  return `
    <article class="feed-card" data-open-detail="${item.id}">
      <div class="cover-art ${item.art}">
        <div class="cover-label">${item.coverTag}</div>
        <div class="cover-note">
          <strong>${item.title}</strong>
          <span>${item.subtitle}</span>
        </div>
      </div>
      <div class="card-body">
        <div class="user-row">
          <div class="avatar-wrap">
            <div class="avatar ${user.avatarClass}">${user.avatar}</div>
            <div class="avatar-meta">
              <div class="avatar-name">${item.user}</div>
              <div class="avatar-sub">${item.school}</div>
            </div>
          </div>
          <button class="follow-btn ${state.followed.has(userId) ? "is-active" : ""}" data-action="follow" data-user="${userId}">
            ${state.followed.has(userId) ? "已关注" : "+ 关注"}
          </button>
        </div>
        <div class="tag-row">${item.tags.map((tag) => '<span class="tag-chip-ui small is-active">' + tag + "</span>").join("")}</div>
        <p class="card-copy">${item.desc}</p>
        <div class="card-actions">
          <button class="action-pill ${state.liked.has(item.id) ? "is-active" : ""}" data-action="like" data-outfit="${item.id}">${icon("icon-heart")} ${formatCount(item.likeCount + (state.liked.has(item.id) ? 1 : 0))}</button>
          <button class="action-pill" data-nav="comments">${icon("icon-comment")} ${formatCount(item.commentCount)}</button>
          <button class="action-pill ${state.saved.has(item.id) ? "is-active" : ""}" data-action="save" data-outfit="${item.id}">${icon("icon-bookmark")} ${formatCount(item.saveCount + (state.saved.has(item.id) ? 1 : 0))}</button>
        </div>
      </div>
    </article>
  `;
}

function renderComment(item) {
  const liked = state.commentLikes.has(item.id);
  return `
    <div class="comment-card">
      <div class="comment-head">
        <div class="avatar-wrap">
          <div class="avatar ${item.avatarClass}">${item.avatar}</div>
          <div class="avatar-meta">
            <div class="avatar-name">${item.user}</div>
            <div class="comment-meta">${item.time}</div>
          </div>
        </div>
        <span class="badge">${item.likes + (liked ? 1 : 0)} 赞</span>
      </div>
      <div class="desc-text">${item.text}</div>
      <div class="comment-foot">
        <div class="mini-caption">来自校园场景评论区</div>
        <button class="thin-btn ${liked ? "" : "neutral"}" data-action="comment-like" data-comment="${item.id}">
          ${liked ? "已点赞" : "点赞评论"}
        </button>
      </div>
    </div>
  `;
}

function renderUserListItem(item, mode) {
  const followed = state.followed.has(item.id);
  return `
    <div class="comment-card">
      <div class="comment-head">
        <div class="avatar-wrap">
          <div class="avatar ${item.avatarClass}">${item.avatar}</div>
          <div class="avatar-meta">
            <div class="avatar-name">${item.name}</div>
            <div class="comment-meta">${item.subtitle}</div>
          </div>
        </div>
        <button class="follow-btn ${followed ? "is-active" : ""}" data-action="follow" data-user="${item.id}">
          ${mode === "fans" ? (followed ? "互相关注" : "回关") : followed ? "已关注" : "+ 关注"}
        </button>
      </div>
      <div class="list-inline">
        <span class="badge green">校园同频</span>
        <span class="badge">穿搭种草</span>
        <span class="badge orange">预算透明</span>
      </div>
    </div>
  `;
}

function pageWrap(content, activeNav = "") {
  return `
    <div class="page">
      ${content}
      ${activeNav ? renderBottomNav(activeNav) : ""}
    </div>
  `;
}

function renderSplashPage() {
  return pageWrap(`
    <div class="page splash-page">
      <div>
        <div class="brand-mark">${icon("icon-spark")}</div>
        <div class="eyebrow">Campus Style Social Commerce</div>
        <h1 class="splash-headline">校搭<br>把校园穿搭<br>变成真实种草</h1>
        <p class="splash-copy">为大学生提供校园场景穿搭灵感、社交互动与电商导购服务，从早八到社团答辩都能快速找到适合自己的搭配。</p>
        <div class="scene-labels">
          <span class="scene-label">早八课</span>
          <span class="scene-label">图书馆</span>
          <span class="scene-label">社团答辩</span>
        </div>
      </div>
      <div class="splash-visual">
        <div class="campus-scene">
          <div class="floating-card one">清爽校园风</div>
          <div class="floating-card two">支持商品导购</div>
          <div class="campus-building"></div>
          <div class="figure one"></div>
          <div class="figure two"></div>
        </div>
      </div>
      <div class="dual-actions">
        <button class="secondary-btn" data-nav="login">跳过启动页</button>
        <button class="primary-btn" data-nav="login">立即进入</button>
      </div>
    </div>
  `);
}

function renderLoginPage() {
  return pageWrap(`
    ${renderHeader("欢迎来到校搭", "手机号验证码登录", { back: false, right: '<button class="icon-btn" data-nav="messages">' + icon("icon-bell") + "</button>" })}
    <div class="page-body">
      <div class="hero-card">
        <div class="eyebrow">For Campus Trendsetters</div>
        <h3 style="margin:0;font-size:28px;line-height:1.2">连接校园场景<br>记录实穿穿搭</h3>
        <p class="card-copy">登录后即可浏览同校穿搭、发布内容、收藏商品并接收互动通知。</p>
      </div>
      <div class="section-card">
        <div class="section-headline">
          <h3>手机号登录</h3>
          <span>验证码快捷登录</span>
        </div>
        <div class="input-shell">${icon("icon-user")}<input data-bind="login-phone" value="${escapeHtml(state.login.phone)}" placeholder="请输入手机号"></div>
        <div class="spacer-10"></div>
        <div class="search-inline">
          ${icon("icon-check")}
          <input data-bind="login-code" value="${escapeHtml(state.login.code)}" placeholder="请输入验证码">
          <button class="thin-btn" data-action="send-code">${state.login.countdown > 0 ? state.login.countdown + "s" : "获取验证码"}</button>
        </div>
        <div class="hint-banner">已内置毕业设计演示数据，点击登录即可进入首页。也支持先去完善资料页查看完整注册流程。</div>
        <div class="dual-actions" style="margin-top:16px">
          <button class="secondary-btn" data-nav="register">注册 / 完善信息</button>
          <button class="primary-btn" data-action="do-login">登录</button>
        </div>
      </div>
    </div>
  `);
}

function renderRegisterPage() {
  return pageWrap(`
    ${renderHeader("完善校园档案", "首次注册后推荐更精准", { right: '<button class="icon-btn" data-nav="home">' + icon("icon-check") + "</button>" })}
    <div class="page-body">
      <div class="profile-header">
        <div class="profile-main">
          <div class="avatar-wrap">
            <div class="avatar profile-avatar">夏</div>
            <div class="avatar-meta">
              <div class="avatar-name">新用户档案</div>
              <div class="avatar-sub">用于个性化推荐校园穿搭</div>
            </div>
          </div>
          <span class="badge green">已完成 75%</span>
        </div>
        <p class="profile-bio">选择学校、年级和偏好后，首页会优先展示同校、同场景、同预算的穿搭内容。</p>
      </div>
      <div class="section-card">
        <div class="input-shell">${icon("icon-edit")}<input data-bind="register-nickname" value="${escapeHtml(state.register.nickname)}" placeholder="昵称"></div>
        <div class="spacer-10"></div>
        <div class="input-shell">${icon("icon-flag")}<input data-bind="register-school" value="${escapeHtml(state.register.school)}" placeholder="学校名称"></div>
        <div class="spacer-10"></div>
        <div class="input-shell">${icon("icon-star")}<input data-bind="register-grade" value="${escapeHtml(state.register.grade)}" placeholder="年级"></div>
        <div class="spacer-10"></div>
        <div class="textarea-shell">${icon("icon-comment")}<textarea data-bind="register-signature">${escapeHtml(state.register.signature)}</textarea></div>
      </div>
      <div class="section-card">
        <div class="section-headline"><h4>兴趣偏好</h4><span>用于内容推荐</span></div>
        <div class="tag-row">${["早八课", "图书馆", "社团活动", "清新学院", "运动休闲", "100-200"].map((tag) => '<span class="tag-chip-ui is-active">' + tag + "</span>").join("")}</div>
      </div>
      <div class="dual-actions" style="margin-top:16px">
        <button class="secondary-btn" data-nav="login">返回登录</button>
        <button class="primary-btn" data-action="finish-register">完成并进入首页</button>
      </div>
    </div>
  `);
}

function renderHomePage() {
  const tabs = [
    { id: "recommend", label: "推荐" },
    { id: "hot", label: "热门" },
    { id: "campus", label: "校园" },
    { id: "scene", label: "穿搭场景" }
  ];
  const scenes = ["全部", "早八课", "图书馆", "操场", "社团答辩", "雨天"];
  const homeItems = outfits
    .filter((item) => state.sceneFilter === "全部" || item.tags.includes(state.sceneFilter) || item.scene === state.sceneFilter)
    .slice(0, state.loadCounts.home);
  return pageWrap(`
    ${renderHeader("首页", "校园穿搭信息流", { back: false, right: '<button class="icon-btn" data-nav="messages">' + icon("icon-bell") + "</button>" })}
    <div class="page-body">
      <button class="search-bar" data-nav="search" style="width:100%">
        ${icon("icon-search")}
        <span style="color:var(--muted);font-size:14px">搜索场景、风格、预算或关键词</span>
      </button>
      <div class="section-card" style="padding:14px;margin-top:12px">
        <div class="pill-tabs">
          ${tabs.map((tab) => '<button class="pill-tab ' + (state.homeTab === tab.id ? "is-active" : "") + '" data-action="home-tab" data-tab="' + tab.id + '">' + tab.label + "</button>").join("")}
        </div>
        <div class="tag-row" style="margin-top:12px">
          ${scenes.map((tab) => '<button class="tag-chip-ui small ' + (state.sceneFilter === tab ? "is-active" : "") + '" data-action="scene-filter" data-scene="' + tab + '">' + tab + "</button>").join("")}
        </div>
      </div>
      <div class="hero-card" style="margin-top:14px">
        <div class="section-headline" style="margin:0 0 10px">
          <h3>今日校园热度</h3>
          <span>刷新后会同步变化</span>
        </div>
        <div class="summary-row">
          <div class="kpi-card"><strong style="font-size:24px;display:block">${formatCount(286 + state.refreshSeed)}</strong><span class="mini-caption">本日新穿搭</span></div>
          <div class="kpi-card"><strong style="font-size:24px;display:block">${formatCount(93 + state.refreshSeed)}</strong><span class="mini-caption">商品链接更新</span></div>
          <div class="kpi-card"><strong style="font-size:24px;display:block">${formatCount(18 + state.refreshSeed)}</strong><span class="mini-caption">热门场景</span></div>
        </div>
      </div>
      <div class="section-card">
        <div class="section-headline">
          <h4>平台盈利闭环</h4>
          <span>导购型电商模式</span>
        </div>
        <div class="summary-row">
          <div class="metric-card">
            <strong>佣金</strong>
            <span class="mini-caption">商品跳转成交后，平台收取导购服务佣金</span>
          </div>
          <div class="metric-card">
            <strong>推广</strong>
            <span class="mini-caption">商家可购买首页专题、标签页和校园推荐位</span>
          </div>
          <div class="metric-card">
            <strong>合作</strong>
            <span class="mini-caption">校园达人与品牌联动，平台收取服务费</span>
          </div>
        </div>
        <div class="business-banner">
          <strong>开学季校园合作专题正在投放</strong>
          <span>当前首页中带商品链接、合作标记和校园专题展示的内容，可对应“推广位收费 + 导购转化佣金”两类盈利方式。</span>
          <div class="business-steps">
            <span class="business-step">内容种草</span>
            <span class="business-step">点击跳转</span>
            <span class="business-step">成交分佣</span>
          </div>
        </div>
      </div>
      <div class="feed-list">${homeItems.map(renderFeedCard).join("")}</div>
      <div class="load-more-wrap"><button class="load-more-btn" data-action="load-more">加载更多校园穿搭内容</button></div>
    </div>
    ${renderBottomNav("home")}
  `);
}

function renderDetailPage() {
  const look = getOutfit();
  const userId = "u" + (users.findIndex((item) => item.name === look.user) + 1);
  return pageWrap(`
    ${renderHeader("穿搭详情", "内容种草 + 商品导购", { right: '<button class="icon-btn" data-action="share">' + icon("icon-share") + "</button>" })}
    <div class="page-body">
      <div class="detail-cover ${look.art}">
        <div class="cover-label">${look.coverTag}</div>
        <div class="cover-note">
          <strong>${look.title}</strong>
          <span>${look.subtitle}</span>
        </div>
      </div>
      <div class="tag-row" style="margin-top:14px">${look.tags.map((tag) => '<span class="tag-chip-ui is-active">' + tag + "</span>").join("")}</div>
      <div class="detail-block" style="margin-top:14px">
        <div class="user-row">
          <div class="avatar-wrap">
            <div class="avatar ${getUserByName(look.user).avatarClass}">${look.avatar}</div>
            <div class="avatar-meta">
              <div class="avatar-name">${look.user}</div>
              <div class="avatar-sub">${look.school}</div>
            </div>
          </div>
          <button class="follow-btn ${state.followed.has(userId) ? "is-active" : ""}" data-action="follow" data-user="${userId}">
            ${state.followed.has(userId) ? "已关注" : "+ 关注"}
          </button>
        </div>
        <p class="desc-text">${look.desc}</p>
        <div class="counter-row">
          <button class="counter-card ${state.liked.has(look.id) ? "is-active" : ""}" data-action="like" data-outfit="${look.id}"><strong>${formatCount(look.likeCount + (state.liked.has(look.id) ? 1 : 0))}</strong>点赞</button>
          <button class="counter-card" data-nav="comments"><strong>${formatCount(look.commentCount)}</strong>评论</button>
          <button class="counter-card ${state.saved.has(look.id) ? "is-active" : ""}" data-action="save" data-outfit="${look.id}"><strong>${formatCount(look.saveCount + (state.saved.has(look.id) ? 1 : 0))}</strong>收藏</button>
          <button class="counter-card" data-nav="likes"><strong>${formatCount(look.shareCount)}</strong>分享/赞</button>
        </div>
        <div class="card-actions" style="margin-top:16px">
          <button class="action-pill ${state.liked.has(look.id) ? "is-active" : ""}" data-action="like" data-outfit="${look.id}">${icon("icon-heart")} 点赞</button>
          <button class="action-pill" data-nav="comments">${icon("icon-comment")} 评论</button>
          <button class="action-pill ${state.saved.has(look.id) ? "is-active" : ""}" data-action="save" data-outfit="${look.id}">${icon("icon-bookmark")} 收藏</button>
          <button class="action-pill" data-action="share">${icon("icon-share")} 分享</button>
        </div>
      </div>
      <div class="product-box">
        <div class="product-top">
          <div>
            <div class="avatar-name">${look.productName}</div>
            <div class="mini-caption">校园导购模块 · 合作商品位</div>
          </div>
          <span class="product-platform">${look.productPlatform}</span>
        </div>
        <div class="tag-row">
          <span class="tag-chip-ui small is-active">合作商品</span>
          <span class="tag-chip-ui small is-active">导购佣金</span>
          <span class="tag-chip-ui small">校园精选</span>
        </div>
        <div class="product-link">${look.productLink}</div>
        <div class="warning-box">${icon("icon-flag")}<span>${look.tips}</span></div>
        <div class="business-banner">
          <strong>平台如何盈利</strong>
          <span>用户通过该商品链接完成下单后，平台获得导购服务佣金；若内容来自品牌合作专题，还会产生推广服务收入。</span>
        </div>
        <div class="dual-actions" style="margin-top:16px">
          <button class="secondary-btn" data-action="copy-link">复制链接</button>
          <button class="primary-btn" data-nav="product-jump">前往购买确认</button>
        </div>
      </div>
      <div class="section-headline"><h3>评论区</h3><span>支持加载更多</span></div>
      <div class="comment-list">${commentsBase.slice(0, state.loadCounts.comments).map(renderComment).join("")}</div>
      <div class="load-more-wrap"><button class="load-more-btn" data-action="load-more">加载更多评论</button></div>
    </div>
  `);
}

function renderPublishPage() {
  return pageWrap(`
    ${renderHeader("发布穿搭", "上传图片、标签与商品链接", { right: '<button class="icon-btn" data-nav="drafts">' + icon("icon-bookmark") + "</button>" })}
    <div class="page-body">
      <div class="section-card">
        <div class="section-headline"><h3>图片上传</h3><span>最多 9 张</span></div>
        <div class="gallery-grid">
          ${Array.from({ length: 6 }, (_, index) => '<div class="gallery-item" data-count="' + (index + 1) + '"></div>').join("")}
          <div class="gallery-item gallery-add"></div>
          <div class="gallery-item" data-count="7"></div>
          <div class="gallery-item" data-count="8"></div>
        </div>
        <div class="mini-caption" style="margin-top:12px">当前已选择 ${state.publish.imageCount} 张图片，支持封面排序与多图预览。</div>
      </div>
      <div class="section-card">
        <div class="input-shell">${icon("icon-edit")}<input data-bind="publish-title" value="${escapeHtml(state.publish.title)}" placeholder="输入标题"></div>
        <div class="spacer-10"></div>
        <div class="textarea-shell">${icon("icon-comment")}<textarea data-bind="publish-desc">${escapeHtml(state.publish.desc)}</textarea></div>
        <div class="spacer-10"></div>
        <button class="link-card" data-action="goto-tags" style="width:100%">
          ${icon("icon-flag")}
          <div style="text-align:left;flex:1">
            <div class="avatar-name">已选标签</div>
            <div class="mini-caption">${state.publishTags.join(" / ")}</div>
          </div>
          ${icon("icon-back")}
        </button>
        <div class="spacer-10"></div>
        <div class="input-shell">${icon("icon-link")}<input data-bind="publish-link" value="${escapeHtml(state.publish.link)}" placeholder="填写商品购买链接"></div>
      </div>
      <div class="section-card">
        <div class="section-headline">
          <h4>创作者合作收益</h4>
          <span>平台盈利在创作者端体现</span>
        </div>
        <div class="summary-row">
          <div class="metric-card">
            <strong>挂链分佣</strong>
            <span class="mini-caption">完善商品链接后，内容可进入导购分佣池</span>
          </div>
          <div class="metric-card">
            <strong>品牌合作</strong>
            <span class="mini-caption">优质内容可获得校园品牌专题合作邀约</span>
          </div>
          <div class="metric-card">
            <strong>推广曝光</strong>
            <span class="mini-caption">进入推荐位后，平台可向商家收取推广费</span>
          </div>
        </div>
      </div>
      <div class="hint-banner">发布后会同步到首页信息流，你也可以先保存到草稿箱，后续继续补充图片、标签或商品链接。</div>
      <div class="dual-actions" style="margin-top:16px">
        <button class="secondary-btn" data-action="save-draft">保存草稿</button>
        <button class="primary-btn" data-action="publish-look">立即发布</button>
      </div>
    </div>
    ${renderBottomNav("publish")}
  `);
}

function renderTagsPage() {
  const scenes = ["早八课", "图书馆", "操场", "社团活动", "周末约会", "考试周", "雨天"];
  const styles = ["清新学院", "韩系简约", "运动休闲", "盐系简约", "轻通勤", "甜酷轻松"];
  const budgets = ["50以下", "50-100", "80-150", "100-200", "120-220", "200以上"];
  return pageWrap(`
    ${renderHeader("选择标签", "场景 / 风格 / 预算", { right: '<button class="icon-btn" data-action="confirm-tags">' + icon("icon-check") + "</button>" })}
    <div class="page-body">
      <div class="hero-card">
        <h3 style="margin:0 0 10px;font-size:24px">校园场景标签体系</h3>
        <p class="card-copy">标签会用于首页推荐、搜索筛选和商品导购归类，可作为个性化推荐逻辑的重要模块展示。</p>
      </div>
      <div class="section-card">
        <div class="section-headline"><h4>场景</h4><span>真实校园日常</span></div>
        <div class="tag-row">${renderTagChips(scenes, state.selectedTagDraft)}</div>
      </div>
      <div class="section-card">
        <div class="section-headline"><h4>风格</h4><span>个性标签</span></div>
        <div class="tag-row">${renderTagChips(styles, state.selectedTagDraft)}</div>
      </div>
      <div class="section-card">
        <div class="section-headline"><h4>预算</h4><span>学生党友好</span></div>
        <div class="tag-row">${renderTagChips(budgets, state.selectedTagDraft)}</div>
      </div>
      <div class="dual-actions" style="margin-top:16px">
        <button class="secondary-btn" data-action="back">返回上一页</button>
        <button class="primary-btn" data-action="confirm-tags">确认并返回</button>
      </div>
    </div>
  `);
}

function renderSearchPage() {
  return pageWrap(`
    ${renderHeader("搜索", "关键词 + 标签筛选", { back: false, right: '<button class="icon-btn" data-nav="messages">' + icon("icon-bell") + "</button>" })}
    <div class="page-body">
      <div class="search-inline">
        ${icon("icon-search")}
        <input data-bind="search-term" value="${escapeHtml(state.searchTerm)}" placeholder="搜索场景、单品、风格">
        <button class="thin-btn" data-action="run-search">搜索</button>
      </div>
      <div class="search-card">
        <div class="section-headline"><h4>标签筛选</h4><span>场景 / 风格 / 预算</span></div>
        <div class="mini-caption">场景</div>
        <div class="tag-row" style="margin-top:8px">${["图书馆", "操场", "社团活动", "周末约会", "雨天"].map((tag) => '<button class="filter-chip ' + (state.searchScene.includes(tag) ? "is-active" : "") + '" data-action="search-filter" data-kind="scene" data-value="' + tag + '">' + tag + "</button>").join("")}</div>
        <div class="mini-caption" style="margin-top:12px">风格</div>
        <div class="tag-row" style="margin-top:8px">${["清新学院", "运动休闲", "轻通勤", "韩系简约", "甜酷轻松"].map((tag) => '<button class="filter-chip ' + (state.searchStyle.includes(tag) ? "is-active" : "") + '" data-action="search-filter" data-kind="style" data-value="' + tag + '">' + tag + "</button>").join("")}</div>
        <div class="mini-caption" style="margin-top:12px">预算</div>
        <div class="tag-row" style="margin-top:8px">${["50-100", "80-150", "100-200", "120-220", "200以上"].map((tag) => '<button class="filter-chip ' + (state.searchBudget.includes(tag) ? "is-active" : "") + '" data-action="search-filter" data-kind="budget" data-value="' + tag + '">' + tag + "</button>").join("")}</div>
      </div>
      <div class="search-card">
        <div class="section-headline"><h4>历史搜索</h4><span>一键复用</span></div>
        <div class="history-grid">${searchHistory.map((item) => '<button class="history-pill" data-action="set-search" data-term="' + item + '">' + item + "</button>").join("")}</div>
      </div>
      <div class="search-card">
        <div class="section-headline"><h4>热门搜索</h4><span>本周热门</span></div>
        <div class="history-grid">${hotSearches.map((item) => '<button class="history-pill is-active" data-action="set-search" data-term="' + item + '">' + item + "</button>").join("")}</div>
      </div>
      <div class="dual-actions" style="margin-top:16px">
        <button class="secondary-btn" data-action="clear-filters">清空筛选</button>
        <button class="primary-btn" data-action="run-search">查看搜索结果</button>
      </div>
    </div>
    ${renderBottomNav("search")}
  `);
}

function renderResultsPage() {
  const list = outfits
    .filter((item) => {
      const combined = [item.title, item.scene, item.style, item.tags.join(" "), item.desc].join(" ");
      const term = !state.searchTerm || combined.includes(state.searchTerm);
      const scene = state.searchScene.length === 0 || state.searchScene.some((tag) => item.scene.includes(tag) || item.tags.includes(tag));
      const style = state.searchStyle.length === 0 || state.searchStyle.some((tag) => item.style.includes(tag) || item.tags.includes(tag));
      const budget = state.searchBudget.length === 0 || state.searchBudget.some((tag) => item.budget.includes(tag) || item.tags.includes(tag));
      return term && scene && style && budget;
    })
    .slice(0, state.loadCounts.results);
  return pageWrap(`
    ${renderHeader("搜索结果", "共 ${list.length} 条匹配内容", { right: '<button class="icon-btn" data-nav="search">' + icon("icon-search") + "</button>" })}
    <div class="page-body">
      <div class="section-card">
        <div class="tag-row">
          ${state.searchTerm ? '<span class="tag-chip-ui is-active">关键词：' + state.searchTerm + "</span>" : ""}
          ${state.searchScene.map((item) => '<span class="tag-chip-ui is-active">' + item + "</span>").join("")}
          ${state.searchStyle.map((item) => '<span class="tag-chip-ui is-active">' + item + "</span>").join("")}
          ${state.searchBudget.map((item) => '<span class="tag-chip-ui is-active">' + item + "</span>").join("")}
        </div>
      </div>
      <div class="results-list">${list.length ? list.map(renderFeedCard).join("") : '<div class="empty-state">暂无匹配内容，试试放宽预算或切换校园场景标签。</div>'}</div>
      <div class="load-more-wrap"><button class="load-more-btn" data-action="load-more">加载更多搜索结果</button></div>
    </div>
  `);
}

function renderProfilePage() {
  return pageWrap(`
    ${renderHeader("我的主页", "个人中心与内容管理", { back: false, right: '<button class="icon-btn" data-nav="settings">' + icon("icon-settings") + "</button>" })}
    <div class="page-body">
      <div class="profile-header">
        <div class="profile-main">
          <div class="avatar-wrap">
            <div class="avatar profile-avatar">夏</div>
            <div class="avatar-meta">
              <div class="avatar-name">林夏</div>
              <div class="avatar-sub">华东理工大学 · 广告学 · 大三</div>
            </div>
          </div>
          <button class="follow-btn is-active" data-nav="edit-profile">编辑资料</button>
        </div>
        <p class="profile-bio">记录真实校园场景下的实穿穿搭，偏爱蓝白清新学院风，也会分享考试周和答辩场景的舒适搭配。</p>
      </div>
      <div class="metrics-strip">
        <button class="profile-stat" data-nav="follow-list"><strong>286</strong><span class="mini-caption">关注</span></button>
        <button class="profile-stat" data-nav="follow-list"><strong>1.2k</strong><span class="mini-caption">粉丝</span></button>
        <button class="profile-stat" data-nav="likes"><strong>5.8k</strong><span class="mini-caption">获赞</span></button>
      </div>
      <div class="profile-shortcuts">
        <button class="shortcut-card" data-nav="my-posts">${icon("icon-image")}<span>我的发布</span></button>
        <button class="shortcut-card" data-nav="favorites">${icon("icon-bookmark")}<span>我的收藏</span></button>
        <button class="shortcut-card" data-nav="drafts">${icon("icon-edit")}<span>草稿箱</span></button>
        <button class="shortcut-card" data-nav="messages">${icon("icon-bell")}<span>消息通知</span></button>
      </div>
      <div class="section-card">
        <div class="section-headline"><h4>近期数据</h4><span>校园穿搭创作者</span></div>
        <div class="summary-row">
          <div class="metric-card"><strong style="font-size:24px;display:block">12</strong><span class="mini-caption">累计发布</span></div>
          <div class="metric-card"><strong style="font-size:24px;display:block">46%</strong><span class="mini-caption">收藏转化</span></div>
          <div class="metric-card"><strong style="font-size:24px;display:block">9</strong><span class="mini-caption">本周互动</span></div>
        </div>
      </div>
      <div class="section-card">
        <div class="section-headline"><h4>创作者收益中心</h4><span>盈利模式展示</span></div>
        <div class="summary-row">
          <div class="metric-card"><strong>¥268</strong><span class="mini-caption">本月导购佣金估算</span></div>
          <div class="metric-card"><strong>3</strong><span class="mini-caption">品牌合作邀约</span></div>
          <div class="metric-card"><strong>2</strong><span class="mini-caption">专题推广位</span></div>
        </div>
        <div class="business-banner">
          <strong>平台收益来源</strong>
          <span>商品导购佣金、商家推广位收费、校园达人合作服务费。创作者完成内容发布与商品挂链后，可获得曝光和合作分成。</span>
        </div>
      </div>
    </div>
    ${renderBottomNav("profile")}
  `);
}

function renderMyPostsPage() {
  return pageWrap(`
    ${renderHeader("我的发布", "已发布内容管理", { right: '<button class="icon-btn" data-nav="publish">' + icon("icon-plus") + "</button>" })}
    <div class="page-body">
      <div class="hint-banner">点击任意卡片可进入对应穿搭详情页，适合演示“个人主页 -> 我的发布 -> 内容详情”的闭环跳转。</div>
      <div class="post-list">
        ${outfits.slice(0, state.loadCounts.posts).map((item) => `
          <article class="draft-card" data-open-detail="${item.id}">
            <div class="draft-head">
              <div>
                <div class="avatar-name">${item.title}</div>
                <div class="draft-meta">${item.scene} · ${item.style} · 预算 ${item.budget}</div>
              </div>
              <span class="badge green">已发布</span>
            </div>
            <div class="tag-row">${item.tags.map((tag) => '<span class="tag-chip-ui small">' + tag + "</span>").join("")}</div>
            <div class="draft-foot">
              <div class="mini-caption">点赞 ${formatCount(item.likeCount)} · 收藏 ${formatCount(item.saveCount)}</div>
              <button class="thin-btn" data-open-detail="${item.id}">查看详情</button>
            </div>
          </article>
        `).join("")}
      </div>
      <div class="load-more-wrap"><button class="load-more-btn" data-action="load-more">加载更多我的发布</button></div>
    </div>
  `);
}

function renderFavoritesPage() {
  const favorites = outfits.filter((item) => state.saved.has(item.id));
  const list = (favorites.length ? favorites : outfits).slice(0, state.loadCounts.favorites);
  return pageWrap(`
    ${renderHeader("我的收藏", "收藏内容与商品管理", { right: '<button class="icon-btn" data-nav="search">' + icon("icon-search") + "</button>" })}
    <div class="page-body">
      ${list.map((item) => `
        <div class="draft-card">
          <div class="draft-head">
            <div>
              <div class="avatar-name">${item.title}</div>
              <div class="draft-meta">${item.user} · ${item.scene} · ${item.productPlatform}</div>
            </div>
            <button class="action-pill is-active" data-action="save" data-outfit="${item.id}">${icon("icon-bookmark")} 已收藏</button>
          </div>
          <div class="product-link">${item.productLink}</div>
          <div class="draft-foot">
            <button class="thin-btn neutral" data-open-detail="${item.id}">查看内容</button>
            <button class="thin-btn" data-nav="product-jump">商品跳转</button>
          </div>
        </div>
      `).join("")}
      <div class="load-more-wrap"><button class="load-more-btn" data-action="load-more">加载更多收藏内容</button></div>
    </div>
  `);
}

function renderFollowListPage() {
  return pageWrap(`
    ${renderHeader("关注 / 粉丝", "社交关系管理", { right: '<button class="icon-btn" data-nav="messages">' + icon("icon-bell") + "</button>" })}
    <div class="page-body">
      <div class="segmented">
        <button class="${state.followTab === "following" ? "is-active" : ""}" data-action="follow-tab" data-tab="following">关注列表</button>
        <button class="${state.followTab === "fans" ? "is-active" : ""}" data-action="follow-tab" data-tab="fans">粉丝列表</button>
      </div>
      <div class="user-list">${users.slice(0, state.loadCounts.follows).map((item) => renderUserListItem(item, state.followTab)).join("")}</div>
      <div class="load-more-wrap"><button class="load-more-btn" data-action="load-more">加载更多用户</button></div>
    </div>
  `);
}

function renderCommentsPage() {
  return pageWrap(`
    ${renderHeader("评论列表", "当前穿搭评论管理", { right: '<button class="icon-btn" data-open-detail="' + getOutfit().id + '">' + icon("icon-image") + "</button>" })}
    <div class="page-body">
      <div class="hint-banner">评论页支持返回详情、刷新以及继续加载更多评论，适合展示社交互动模块。</div>
      <div class="comment-list">${commentsBase.slice(0, state.loadCounts.comments + 1).map(renderComment).join("")}</div>
      <div class="load-more-wrap"><button class="load-more-btn" data-action="load-more">继续加载评论</button></div>
    </div>
  `);
}

function renderLikesPage() {
  return pageWrap(`
    ${renderHeader("点赞列表", "谁为这条内容点了赞", { right: '<button class="icon-btn" data-open-detail="' + getOutfit().id + '">' + icon("icon-heart") + "</button>" })}
    <div class="page-body">
      <div class="hint-banner">这里展示对当前穿搭产生点赞或高互动的用户列表，可作为社交行为可视化的一部分。</div>
      <div class="user-list">
        ${users.slice(0, state.loadCounts.likes).map((item, index) => `
          <div class="comment-card">
            <div class="comment-head">
              <div class="avatar-wrap">
                <div class="avatar ${item.avatarClass}">${item.avatar}</div>
                <div class="avatar-meta">
                  <div class="avatar-name">${item.name}</div>
                  <div class="comment-meta">${item.subtitle}</div>
                </div>
              </div>
              <span class="badge ${index % 2 === 0 ? "green" : ""}">点赞 + 收藏</span>
            </div>
            <div class="mini-caption">最近常浏览 ${getOutfit().scene} 场景内容，对预算透明和商品链接完整的内容更感兴趣。</div>
          </div>
        `).join("")}
      </div>
      <div class="load-more-wrap"><button class="load-more-btn" data-action="load-more">加载更多点赞用户</button></div>
    </div>
  `);
}

function renderProductJumpPage() {
  const look = getOutfit();
  return pageWrap(`
    ${renderHeader("跳转购买确认", "导购前理性消费提醒", { right: '<button class="icon-btn" data-open-detail="' + look.id + '">' + icon("icon-image") + "</button>" })}
    <div class="page-body">
      <div class="hero-card">
        <div class="eyebrow">Shopping Redirect Check</div>
        <h3 style="margin:0;font-size:28px;line-height:1.2">确认前往外部电商平台</h3>
        <p class="card-copy">本 APP 负责内容分享与导购服务，实际购买将在外部平台完成。你可以在这里查看商品信息和理性消费提醒。</p>
      </div>
      <div class="product-box">
        <div class="product-top">
          <div>
            <div class="avatar-name">${look.productName}</div>
            <div class="mini-caption">${look.user} 推荐 · ${look.productPlatform}</div>
          </div>
          <span class="product-platform">外链</span>
        </div>
        <div class="product-link">${look.productLink}</div>
        <div class="warning-box">${icon("icon-flag")}<span>${look.tips}</span></div>
      </div>
      <div class="section-card">
        <div class="section-headline"><h4>平台盈利说明</h4><span>导购型电商闭环</span></div>
        <div class="summary-row">
          <div class="metric-card"><strong>导购佣金</strong><span class="mini-caption">用户成交后，平台获得技术服务佣金</span></div>
          <div class="metric-card"><strong>推广服务</strong><span class="mini-caption">若为合作专题，商家需支付推广位费用</span></div>
          <div class="metric-card"><strong>达人分成</strong><span class="mini-caption">创作者合作内容可按表现获得收益分成</span></div>
        </div>
      </div>
      <div class="section-card">
        <div class="section-headline"><h4>购买前建议</h4><span>学生党消费提示</span></div>
        <div class="hint-banner">先看预算，再看复用率，确认商品链接和尺码说明完整之后，再前往外部平台继续购买。本次跳转若成交，将形成“内容种草 -> 导购跳转 -> 平台分佣”的盈利闭环。</div>
      </div>
      <div class="dual-actions" style="margin-top:16px">
        <button class="secondary-btn" data-open-detail="${look.id}">返回内容详情</button>
        <button class="primary-btn" data-action="external-shop">继续前往购买</button>
      </div>
    </div>
  `);
}

function renderSettingsPage() {
  return pageWrap(`
    ${renderHeader("设置", "账号、隐私与通知", { right: '<button class="icon-btn" data-nav="edit-profile">' + icon("icon-edit") + "</button>" })}
    <div class="page-body">
      ${[
        ["消息推送", "点赞、评论、关注和系统通知", "push"],
        ["隐私保护", "隐藏校园信息，仅展示昵称与头像", "privacy"],
        ["省流模式", "信息流优先加载轻量图片与摘要内容", "dataSaver"]
      ].map((row) => `
        <div class="settings-item">
          <div class="settings-head">
            <div><div class="avatar-name">${row[0]}</div><div class="comment-meta">${row[1]}</div></div>
            <button class="toggle-switch ${state.toggles[row[2]] ? "is-active" : ""}" data-action="toggle-setting" data-key="${row[2]}"></button>
          </div>
        </div>
      `).join("")}
      <div class="settings-item">
        <div class="settings-head">
          <div><div class="avatar-name">草稿与缓存</div><div class="comment-meta">已保存 3 条草稿，可继续编辑</div></div>
          <button class="thin-btn" data-nav="drafts">查看草稿</button>
        </div>
      </div>
    </div>
  `);
}

function renderEditProfilePage() {
  return pageWrap(`
    ${renderHeader("编辑资料", "个人信息维护", { right: '<button class="icon-btn" data-action="save-profile">' + icon("icon-check") + "</button>" })}
    <div class="page-body">
      <div class="profile-header">
        <div class="profile-main">
          <div class="avatar-wrap">
            <div class="avatar profile-avatar">夏</div>
            <div class="avatar-meta">
              <div class="avatar-name">${state.register.nickname}</div>
              <div class="avatar-sub">${state.register.school} · ${state.register.grade}</div>
            </div>
          </div>
          <span class="badge green">资料完整</span>
        </div>
        <p class="profile-bio">这里用于维护昵称、校园身份、个性签名和风格偏好，是个人中心模块的重要组成部分。</p>
      </div>
      <div class="section-card">
        <div class="input-shell">${icon("icon-edit")}<input data-bind="register-nickname" value="${escapeHtml(state.register.nickname)}"></div>
        <div class="spacer-10"></div>
        <div class="input-shell">${icon("icon-flag")}<input data-bind="register-school" value="${escapeHtml(state.register.school)}"></div>
        <div class="spacer-10"></div>
        <div class="input-shell">${icon("icon-star")}<input data-bind="register-grade" value="${escapeHtml(state.register.grade)}"></div>
        <div class="spacer-10"></div>
        <div class="textarea-shell">${icon("icon-comment")}<textarea data-bind="register-signature">${escapeHtml(state.register.signature)}</textarea></div>
      </div>
      <div class="dual-actions" style="margin-top:16px">
        <button class="secondary-btn" data-nav="profile">取消</button>
        <button class="primary-btn" data-action="save-profile">保存修改</button>
      </div>
    </div>
  `);
}

function renderDraftsPage() {
  return pageWrap(`
    ${renderHeader("草稿箱", "发布前内容暂存区", { right: '<button class="icon-btn" data-nav="publish">' + icon("icon-plus") + "</button>" })}
    <div class="page-body">
      <div class="hint-banner">草稿页支持继续编辑、查看标签和跳回发布页，是“发布与编辑”模块的重要闭环。</div>
      <div class="draft-list">
        ${draftsBase.slice(0, state.loadCounts.drafts).map((item) => `
          <div class="draft-card">
            <div class="draft-head">
              <div>
                <div class="avatar-name">${item.title}</div>
                <div class="draft-meta">${item.time}</div>
              </div>
              <span class="badge orange">${item.status}</span>
            </div>
            <div class="tag-row">${item.tags.map((tag) => '<span class="tag-chip-ui small">' + tag + "</span>").join("")}</div>
            <p class="desc-text" style="margin:10px 0 0">${item.note}</p>
            <div class="draft-foot">
              <button class="thin-btn neutral" data-action="save-draft">再次保存</button>
              <button class="thin-btn" data-action="edit-draft">继续编辑</button>
            </div>
          </div>
        `).join("")}
      </div>
      <div class="load-more-wrap"><button class="load-more-btn" data-action="load-more">加载更多草稿</button></div>
    </div>
  `);
}

function renderMessagesPage() {
  const tabs = [
    { id: "all", label: "全部" },
    { id: "likes", label: "点赞" },
    { id: "comments", label: "评论" },
    { id: "system", label: "系统" }
  ];
  const list = messagesBase
    .filter((item) => {
      if (state.messageTab === "all") return true;
      if (state.messageTab === "likes") return item.type === "点赞";
      if (state.messageTab === "comments") return item.type === "评论";
      return item.type === "系统";
    })
    .slice(0, state.loadCounts.messages);
  return pageWrap(`
    ${renderHeader("消息通知", "社交互动与系统消息", { right: '<button class="icon-btn" data-nav="settings">' + icon("icon-settings") + "</button>" })}
    <div class="page-body">
      <div class="pill-tabs">${tabs.map((tab) => '<button class="pill-tab ' + (state.messageTab === tab.id ? "is-active" : "") + '" data-action="message-tab" data-tab="' + tab.id + '">' + tab.label + "</button>").join("")}</div>
      <div class="business-banner">
        <strong>商务合作消息已接入通知中心</strong>
        <span>品牌邀约、校园专题投放、导购分佣结算都会进入消息页，便于体现平台“内容 + 电商 + 合作服务”的盈利模式。</span>
      </div>
      <div class="message-list">
        ${list.map((item) => `
          <div class="notification-card">
            <div class="notification-head">
              <div>
                <div class="avatar-name">${item.title}</div>
                <div class="notification-meta">${item.time}</div>
              </div>
              <span class="badge ${item.badgeClass || ""}">${item.badge}</span>
            </div>
            <div class="desc-text">${item.desc}</div>
            <div class="notification-foot">
              <div class="mini-caption">${item.type} 通知</div>
              <button class="thin-btn neutral" data-action="mark-read">标记已读</button>
            </div>
          </div>
        `).join("")}
      </div>
      <div class="load-more-wrap"><button class="load-more-btn" data-action="load-more">加载更多通知</button></div>
    </div>
  `);
}

function renderCurrentScreen() {
  switch (state.current) {
    case "splash": return renderSplashPage();
    case "login": return renderLoginPage();
    case "register": return renderRegisterPage();
    case "home": return renderHomePage();
    case "detail": return renderDetailPage();
    case "publish": return renderPublishPage();
    case "tags": return renderTagsPage();
    case "search": return renderSearchPage();
    case "results": return renderResultsPage();
    case "profile": return renderProfilePage();
    case "my-posts": return renderMyPostsPage();
    case "favorites": return renderFavoritesPage();
    case "follow-list": return renderFollowListPage();
    case "comments": return renderCommentsPage();
    case "likes": return renderLikesPage();
    case "product-jump": return renderProductJumpPage();
    case "settings": return renderSettingsPage();
    case "edit-profile": return renderEditProfilePage();
    case "drafts": return renderDraftsPage();
    case "messages": return renderMessagesPage();
    default: return renderHomePage();
  }
}

function renderOverview() {
  screenGrid.innerHTML = screenCatalog
    .map(
      (screen, index) => `
        <button class="screen-chip ${state.current === screen.id ? "is-active" : ""}" data-nav="${screen.id}">
          <div>
            <strong style="font-size:13px">${screen.title}</strong>
            <small>${screen.group}</small>
          </div>
          <span class="badge">${String(index + 1).padStart(2, "0")}</span>
        </button>
      `
    )
    .join("");
  const current = screenCatalog.find((screen) => screen.id === state.current);
  currentScreenLabel.textContent = current ? current.title : "";
}

function scheduleSplashRedirect() {
  clearTimeout(splashTimer);
  if (state.current !== "splash") {
    return;
  }
  splashTimer = setTimeout(() => {
    if (state.current === "splash") {
      navigate("login", { push: false });
    }
  }, 1800);
}

function render() {
  app.innerHTML = renderCurrentScreen();
  renderOverview();
  scheduleSplashRedirect();
}

document.body.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-nav]");
  if (nav) {
    navigate(nav.getAttribute("data-nav"), { push: nav.getAttribute("data-nav") !== state.current });
    return;
  }

  const action = event.target.closest("[data-action]");
  if (action) {
    const type = action.getAttribute("data-action");
    if (type === "back" || type === "back-tool") {
      goBack();
    } else if (type === "refresh" || type === "refresh-tool") {
      refreshCurrent();
    } else if (type === "load-more" || type === "load-tool") {
      loadMore();
    } else if (type === "home-tab") {
      state.homeTab = action.getAttribute("data-tab");
      render();
    } else if (type === "scene-filter") {
      state.sceneFilter = action.getAttribute("data-scene");
      render();
    } else if (type === "like") {
      toggleLike(action.getAttribute("data-outfit"));
    } else if (type === "save") {
      toggleSave(action.getAttribute("data-outfit"));
    } else if (type === "follow") {
      toggleFollow(action.getAttribute("data-user"));
    } else if (type === "share") {
      showToast("分享卡片已生成");
    } else if (type === "copy-link") {
      navigator.clipboard?.writeText(getOutfit().productLink);
      showToast("商品链接已复制");
    } else if (type === "send-code") {
      sendCode();
    } else if (type === "do-login") {
      showToast("登录成功，进入首页");
      navigate("home");
    } else if (type === "finish-register") {
      showToast("资料完善成功");
      navigate("home");
    } else if (type === "goto-tags") {
      state.tagReturn = "publish";
      state.selectedTagDraft = [...state.publishTags];
      navigate("tags");
    } else if (type === "confirm-tags") {
      state.publishTags = [...state.selectedTagDraft];
      showToast("标签已更新");
      returnToScreen("publish");
    } else if (type === "tag-toggle") {
      const tag = action.getAttribute("data-tag");
      if (state.selectedTagDraft.includes(tag)) {
        state.selectedTagDraft = state.selectedTagDraft.filter((item) => item !== tag);
      } else {
        state.selectedTagDraft = [...state.selectedTagDraft, tag];
      }
      render();
    } else if (type === "run-search") {
      navigate("results");
    } else if (type === "search-filter") {
      const kind = action.getAttribute("data-kind");
      const value = action.getAttribute("data-value");
      const key = kind === "scene" ? "searchScene" : kind === "style" ? "searchStyle" : "searchBudget";
      if (state[key].includes(value)) {
        state[key] = state[key].filter((item) => item !== value);
      } else {
        state[key] = [...state[key], value];
      }
      render();
    } else if (type === "set-search") {
      state.searchTerm = action.getAttribute("data-term");
      render();
    } else if (type === "clear-filters") {
      state.searchScene = [];
      state.searchStyle = [];
      state.searchBudget = [];
      showToast("筛选条件已清空");
      render();
    } else if (type === "comment-like") {
      toggleCommentLike(action.getAttribute("data-comment"));
    } else if (type === "follow-tab") {
      state.followTab = action.getAttribute("data-tab");
      render();
    } else if (type === "external-shop") {
      openExternalShop();
    } else if (type === "toggle-setting") {
      const key = action.getAttribute("data-key");
      state.toggles[key] = !state.toggles[key];
      showToast("设置已更新");
      render();
    } else if (type === "save-profile") {
      showToast("资料已保存");
      returnToScreen("profile");
    } else if (type === "save-draft") {
      showToast("草稿已保存");
    } else if (type === "publish-look") {
      showToast("发布成功，已同步到首页");
      navigate("home");
    } else if (type === "edit-draft") {
      navigate("publish");
    } else if (type === "message-tab") {
      state.messageTab = action.getAttribute("data-tab");
      render();
    } else if (type === "mark-read") {
      showToast("已标记为已读");
    }
    return;
  }

  const openDetail = event.target.closest("[data-open-detail]");
  if (openDetail) {
    navigate("detail", { outfitId: openDetail.getAttribute("data-open-detail") });
  }
});

document.body.addEventListener("input", (event) => {
  const bind = event.target.getAttribute("data-bind");
  if (!bind) {
    return;
  }
  if (bind === "login-phone") state.login.phone = event.target.value;
  if (bind === "login-code") state.login.code = event.target.value;
  if (bind === "register-nickname") state.register.nickname = event.target.value;
  if (bind === "register-school") state.register.school = event.target.value;
  if (bind === "register-grade") state.register.grade = event.target.value;
  if (bind === "register-signature") state.register.signature = event.target.value;
  if (bind === "publish-title") state.publish.title = event.target.value;
  if (bind === "publish-desc") state.publish.desc = event.target.value;
  if (bind === "publish-link") state.publish.link = event.target.value;
  if (bind === "search-term") state.searchTerm = event.target.value;
});

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  statusClock.textContent = hours + ":" + minutes;
}

updateClock();
setInterval(updateClock, 20000);
render();
