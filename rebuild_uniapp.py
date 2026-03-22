from pathlib import Path
import shutil
from textwrap import dedent
import json

root = Path(r'E:/test/mobile-uniapp')
for item in list(root.iterdir()):
    if item.name == '.hbuilderx':
        shutil.rmtree(item, ignore_errors=True)
    elif item.is_dir():
        shutil.rmtree(item, ignore_errors=True)
    else:
        item.unlink(missing_ok=True)

(root / '.hbuilderx').mkdir(parents=True, exist_ok=True)
(root / 'pages').mkdir(parents=True, exist_ok=True)

base_style = dedent('''
  .screen {
    min-height: 100vh;
    padding: 24rpx;
    background: linear-gradient(180deg, #f7fbff 0%, #eef6fb 100%);
    box-sizing: border-box;
  }
  .top {
    margin-bottom: 24rpx;
  }
  .title {
    color: #243240;
    font-size: 42rpx;
    font-weight: 700;
    line-height: 1.25;
  }
  .subtitle {
    margin-top: 10rpx;
    color: #6d8191;
    font-size: 24rpx;
    line-height: 1.7;
  }
  .hero {
    margin-bottom: 20rpx;
    padding: 30rpx;
    border-radius: 32rpx;
    background: linear-gradient(135deg, #57bdf0 0%, #6ad6b0 100%);
    color: #ffffff;
    box-shadow: 0 18rpx 40rpx rgba(73, 183, 237, 0.16);
  }
  .hero-mini {
    display: inline-block;
    padding: 8rpx 18rpx;
    border-radius: 999rpx;
    background: rgba(255, 255, 255, 0.22);
    font-size: 22rpx;
  }
  .hero-title {
    margin-top: 18rpx;
    font-size: 40rpx;
    font-weight: 700;
    line-height: 1.35;
  }
  .hero-desc {
    margin-top: 12rpx;
    font-size: 24rpx;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.94);
  }
  .card {
    margin-bottom: 18rpx;
    padding: 24rpx;
    border-radius: 28rpx;
    background: #ffffff;
    box-shadow: 0 14rpx 30rpx rgba(58, 115, 155, 0.08);
  }
  .line {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .badge {
    display: inline-block;
    padding: 10rpx 18rpx;
    border-radius: 999rpx;
    background: rgba(87, 189, 240, 0.12);
    color: #2d95c9;
    font-size: 22rpx;
  }
  .text-main {
    color: #243240;
    font-size: 30rpx;
    font-weight: 700;
    line-height: 1.4;
  }
  .text-sub {
    margin-top: 10rpx;
    color: #6d8191;
    font-size: 24rpx;
    line-height: 1.7;
  }
  .btn {
    height: 82rpx;
    margin-top: 18rpx;
    line-height: 82rpx;
    text-align: center;
    border-radius: 999rpx;
    background: linear-gradient(135deg, #57bdf0 0%, #38c39a 100%);
    color: #ffffff;
    font-size: 28rpx;
    font-weight: 600;
  }
  .btn-light {
    height: 82rpx;
    margin-top: 18rpx;
    line-height: 82rpx;
    text-align: center;
    border-radius: 999rpx;
    background: #ffffff;
    color: #2d95c9;
    border: 2rpx solid rgba(87, 189, 240, 0.22);
    font-size: 28rpx;
    font-weight: 600;
  }
  .input {
    width: 100%;
    height: 88rpx;
    margin-top: 16rpx;
    padding: 0 22rpx;
    border-radius: 22rpx;
    background: #f2f7fb;
    color: #243240;
    font-size: 26rpx;
    box-sizing: border-box;
  }
  .textarea {
    width: 100%;
    min-height: 180rpx;
    margin-top: 16rpx;
    padding: 20rpx 22rpx;
    border-radius: 22rpx;
    background: #f2f7fb;
    color: #243240;
    font-size: 26rpx;
    line-height: 1.7;
    box-sizing: border-box;
  }
  .chip-wrap {
    display: flex;
    flex-wrap: wrap;
    margin-right: -12rpx;
    margin-bottom: -12rpx;
  }
  .chip {
    margin-right: 12rpx;
    margin-bottom: 12rpx;
    padding: 12rpx 20rpx;
    border-radius: 999rpx;
    background: #ecf5fa;
    color: #5d7485;
    font-size: 24rpx;
  }
  .chip-on {
    background: linear-gradient(135deg, #57bdf0 0%, #69d7af 100%);
    color: #ffffff;
  }
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .grid-item {
    width: 48%;
    margin-bottom: 16rpx;
    padding: 24rpx;
    border-radius: 24rpx;
    background: #ffffff;
    box-shadow: 0 12rpx 26rpx rgba(58, 115, 155, 0.07);
  }
  .grid-title {
    color: #243240;
    font-size: 28rpx;
    font-weight: 700;
  }
  .grid-desc {
    margin-top: 8rpx;
    color: #6d8191;
    font-size: 22rpx;
    line-height: 1.6;
  }
  .cover {
    height: 250rpx;
    padding: 24rpx;
    border-radius: 28rpx;
    background: linear-gradient(135deg, rgba(87, 189, 240, 0.2) 0%, rgba(105, 215, 175, 0.2) 100%);
  }
  .cover-title {
    margin-top: 26rpx;
    color: #243240;
    font-size: 34rpx;
    font-weight: 700;
    line-height: 1.35;
  }
  .cover-sub {
    margin-top: 10rpx;
    color: #5f7383;
    font-size: 24rpx;
    line-height: 1.6;
  }
  .metrics {
    display: flex;
    justify-content: space-between;
  }
  .metric {
    width: 31%;
    padding: 22rpx 10rpx;
    border-radius: 24rpx;
    background: #ffffff;
    text-align: center;
  }
  .metric-value {
    color: #243240;
    font-size: 34rpx;
    font-weight: 700;
  }
  .metric-label {
    margin-top: 8rpx;
    color: #7b90a0;
    font-size: 22rpx;
  }
''').strip()

home = dedent('''
<template>
  <view class="screen">
    <view class="top">
      <view class="title">CampusFit 校园穿搭首页</view>
      <view class="subtitle">这是重建后的稳定启动版本，先保证 uni-app 在 HBuilder X 和安卓模拟器里可正常进入。</view>
    </view>
    <view class="hero">
      <view class="hero-mini">稳定启动版</view>
      <view class="hero-title">校园穿搭社交电商导购 APP</view>
      <view class="hero-desc">首页提供搜索入口、推荐内容、演示页面导航和个人中心入口，后续我们可以在这个稳定底座上继续精修。</view>
    </view>
    <view class="card" @click="goTab('/pages/search/index')">
      <view class="line">
        <view class="text-main">搜索穿搭 / 场景 / 预算</view>
        <view class="badge">进入搜索</view>
      </view>
      <view class="text-sub">支持关键词、场景、风格和预算筛选。</view>
    </view>
    <view class="card">
      <view class="text-main">推荐频道</view>
      <view class="chip-wrap" style="margin-top:16rpx;">
        <view class="chip chip-on">推荐</view>
        <view class="chip">热门</view>
        <view class="chip">校园</view>
        <view class="chip">穿搭场景</view>
      </view>
    </view>
    <view class="card" v-for="item in outfits" :key="item.id" @click="goDetail(item.id)">
      <view class="cover">
        <view class="badge">{{ item.tag }}</view>
        <view class="cover-title">{{ item.title }}</view>
        <view class="cover-sub">{{ item.subtitle }}</view>
      </view>
      <view class="text-main" style="margin-top:18rpx; font-size:28rpx;">{{ item.author }} · {{ item.scene }} · {{ item.budget }}</view>
      <view class="text-sub">{{ item.desc }}</view>
    </view>
    <view class="top" style="margin-top:30rpx; margin-bottom:12rpx;">
      <view class="title" style="font-size:32rpx;">完整页面导航</view>
      <view class="subtitle">方便你直接在模拟器里把 20 个页面都点一遍。</view>
    </view>
    <view class="grid">
      <view class="grid-item" v-for="item in links" :key="item.path" @click="go(item.path)">
        <view class="grid-title">{{ item.title }}</view>
        <view class="grid-desc">{{ item.desc }}</view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      outfits: [
        { id: '1', tag: '图书馆', title: '蓝白衬衫叠奶油背心，早八也有清爽感', subtitle: '适合图书馆、教学楼与日常通勤场景', author: '林夏', scene: '清新学院', budget: '100-150', desc: '预算清晰、复用率高，是学生党最容易落地的一组基础搭配。' },
        { id: '2', tag: '操场', title: '青春绿卫衣配浅灰工装裤，社团活动很出片', subtitle: '运动休闲但不邋遢，适合团建与活动现场', author: '周沅', scene: '运动休闲', budget: '100-200', desc: '明亮但不刺眼的颜色组合，穿起来会很有校园元气感。' },
        { id: '3', tag: '答辩日', title: '浅绿衬衫裙搭针织披肩，轻盈又有精神', subtitle: '适合汇报、路演、社团招新等场景', author: '叶青', scene: '轻通勤', budget: '150-220', desc: '兼顾学生感和正式感，是答辩日很稳的一套。' }
      ],
      links: [
        { title: '启动页', desc: '查看 APP 启动画面', path: '/pages/splash/index' },
        { title: '登录页', desc: '手机号验证码登录', path: '/pages/login/index' },
        { title: '完善信息', desc: '注册与资料补齐', path: '/pages/register/index' },
        { title: '详情页', desc: '穿搭内容与导购按钮', path: '/pages/detail/index?id=1' },
        { title: '标签选择', desc: '选择场景风格预算', path: '/pages/tags/index' },
        { title: '搜索结果', desc: '搜索后的列表结果页', path: '/pages/results/index' },
        { title: '我的发布', desc: '管理已发布内容', path: '/pages/my-posts/index' },
        { title: '我的收藏', desc: '查看收藏穿搭', path: '/pages/favorites/index' },
        { title: '关注粉丝', desc: '关系链管理', path: '/pages/follows/index' },
        { title: '评论列表', desc: '互动评论管理', path: '/pages/comments/index' },
        { title: '点赞列表', desc: '点赞用户查看', path: '/pages/likes/index' },
        { title: '跳转确认', desc: '导购前的理性消费提醒', path: '/pages/product-jump/index' },
        { title: '设置页', desc: '账号与通知设置', path: '/pages/settings/index' },
        { title: '编辑资料', desc: '个人资料编辑', path: '/pages/edit-profile/index' },
        { title: '草稿箱', desc: '继续编辑未发布内容', path: '/pages/drafts/index' },
        { title: '消息通知', desc: '互动与商务合作提醒', path: '/pages/messages/index' }
      ]
    };
  },
  methods: {
    go(url) {
      uni.navigateTo({ url });
    },
    goTab(url) {
      uni.switchTab({ url });
    },
    goDetail(id) {
      uni.navigateTo({ url: '/pages/detail/index?id=' + id });
    }
  }
};
</script>
<style>
'''+base_style+'''
</style>
''').strip() + '\n'

(root / 'App.vue').write_text('<script>\nexport default {};\n</script>\n\n<style>\npage { background: #f7fbff; color: #243240; font-family: PingFang SC, Microsoft YaHei, sans-serif; }\n</style>\n', encoding='utf-8')
(root / 'main.js').write_text("import { createSSRApp } from 'vue'\nimport App from './App.vue'\n\nexport function createApp() {\n  const app = createSSRApp(App)\n  return { app }\n}\n", encoding='utf-8')
(root / 'manifest.json').write_text(json.dumps({"name":"CampusFit","appid":"__UNI__CAMPUSFIT","description":"CampusFit mobile client rebuilt for stable HBuilder startup","versionName":"0.0.2","versionCode":"2","transformPx":False,"app-plus":{"splashscreen":{"autoclose":True,"alwaysShowBeforeRender":False}}}, ensure_ascii=False, indent=2), encoding='utf-8')
pages = {"pages":[
    {"path":"pages/index/index","style":{"navigationBarTitleText":"首页"}},
    {"path":"pages/publish/index","style":{"navigationBarTitleText":"发布穿搭"}},
    {"path":"pages/search/index","style":{"navigationBarTitleText":"搜索"}},
    {"path":"pages/profile/index","style":{"navigationBarTitleText":"我的"}},
    {"path":"pages/splash/index","style":{"navigationBarTitleText":"启动页"}},
    {"path":"pages/login/index","style":{"navigationBarTitleText":"登录页"}},
    {"path":"pages/register/index","style":{"navigationBarTitleText":"完善信息"}},
    {"path":"pages/detail/index","style":{"navigationBarTitleText":"穿搭详情"}},
    {"path":"pages/tags/index","style":{"navigationBarTitleText":"选择标签"}},
    {"path":"pages/results/index","style":{"navigationBarTitleText":"搜索结果"}},
    {"path":"pages/my-posts/index","style":{"navigationBarTitleText":"我的发布"}},
    {"path":"pages/favorites/index","style":{"navigationBarTitleText":"我的收藏"}},
    {"path":"pages/follows/index","style":{"navigationBarTitleText":"关注与粉丝"}},
    {"path":"pages/comments/index","style":{"navigationBarTitleText":"评论列表"}},
    {"path":"pages/likes/index","style":{"navigationBarTitleText":"点赞列表"}},
    {"path":"pages/product-jump/index","style":{"navigationBarTitleText":"商品跳转确认"}},
    {"path":"pages/settings/index","style":{"navigationBarTitleText":"设置"}},
    {"path":"pages/edit-profile/index","style":{"navigationBarTitleText":"编辑资料"}},
    {"path":"pages/drafts/index","style":{"navigationBarTitleText":"草稿箱"}},
    {"path":"pages/messages/index","style":{"navigationBarTitleText":"消息通知"}}
],"tabBar":{"color":"#7b90a0","selectedColor":"#2d95c9","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","text":"首页"},{"pagePath":"pages/publish/index","text":"发布"},{"pagePath":"pages/search/index","text":"搜索"},{"pagePath":"pages/profile/index","text":"我的"}]},"globalStyle":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#f7fbff"}}
(root / 'pages.json').write_text(json.dumps(pages, ensure_ascii=False, indent=2), encoding='utf-8')
(root / '.hbuilderx' / 'launch.json').write_text('{\n  "version" : "0.0.0",\n  "configurations" : [],\n  "nativePlugins" : []\n}\n', encoding='utf-8')
(root / 'README.md').write_text('CampusFit uni-app rebuilt scaffold for stable HBuilder startup.\n', encoding='utf-8')
(root / 'pages/index').mkdir(parents=True, exist_ok=True)
(root / 'pages/index/index.vue').write_text(home, encoding='utf-8')

# shared helper to write simpler pages
page_defs = {
'splash/index.vue': ('启动页', '用于展示品牌感和项目主题，这里作为演示页保留，不再作为启动入口，先保证项目稳定运行。', '''<view class="hero"><view class="hero-mini">CampusFit</view><view class="hero-title">校园穿搭社交电商导购</view><view class="hero-desc">年轻、清爽、简约、校园风的移动端原型。</view></view><button class="btn" @click="goLogin">进入登录页</button>''', '''export default { methods: { goLogin() { uni.navigateTo({ url: '/pages/login/index' }); } } };'''),
'login/index.vue': ('登录页', '手机号验证码登录，支持游客体验和进入注册完善资料流程。', '''<view class="card"><view class="text-main">手机号</view><input class="input" v-model="phone" placeholder="请输入手机号" /></view><view class="card"><view class="line"><view class="text-main">验证码</view><view class="badge" @click="sendCode">获取验证码</view></view><input class="input" v-model="code" placeholder="请输入验证码" /></view><button class="btn" @click="goRegister">登录并完善资料</button><button class="btn-light" @click="guestMode">游客直接进入首页</button>''', '''export default { data() { return { phone: '18688882026', code: '2468' }; }, methods: { sendCode() { uni.showToast({ title: '验证码 2468', icon: 'none' }); }, goRegister() { uni.navigateTo({ url: '/pages/register/index' }); }, guestMode() { uni.switchTab({ url: '/pages/index/index' }); } } };'''),
'register/index.vue': ('完善信息页', '填写昵称、校园信息和个人简介，形成初始用户画像。', '''<view class="card"><view class="text-main">昵称</view><input class="input" v-model="nickname" /></view><view class="card"><view class="text-main">学校 / 专业</view><input class="input" v-model="school" /></view><view class="card"><view class="text-main">个性签名</view><textarea class="textarea" v-model="signature"></textarea></view><button class="btn" @click="finish">完成并进入首页</button>''', '''export default { data() { return { nickname: '林夏', school: '华东理工大学 · 广告学', signature: '记录真实校园场景里的好看穿搭，也认真帮同学们理性种草。' }; }, methods: { finish() { uni.switchTab({ url: '/pages/index/index' }); } } };'''),
'publish/index.vue': ('发布穿搭页', '支持图片上传占位、标题描述、标签选择、商品链接填写以及草稿保存。', '''<view class="card"><view class="text-main">图片上传</view><view class="chip-wrap" style="margin-top:16rpx;"><view class="chip chip-on" v-for="n in 6" :key="'a'+n">已上传 {{ n }}</view><view class="chip" v-for="n in 3" :key="'b'+n">+</view></view></view><view class="card"><view class="text-main">标题</view><input class="input" v-model="title" /></view><view class="card"><view class="text-main">描述</view><textarea class="textarea" v-model="desc"></textarea></view><view class="card"><view class="line"><view class="text-main">标签</view><view class="badge" @click="chooseTags">去选择</view></view><view class="chip-wrap" style="margin-top:16rpx;"><view class="chip chip-on" v-for="item in tags" :key="item">{{ item }}</view></view></view><view class="card"><view class="text-main">商品链接</view><input class="input" v-model="link" /></view><button class="btn-light" @click="saveDraft">保存草稿</button><button class="btn" @click="publishNow">立即发布</button>''', '''export default { data() { return { title: '操场晚风少年感穿搭', desc: '绿色卫衣配浅灰工装裤，适合操场、社团活动和部门团建。', link: 'https://campusfit.example.com/product/new-look', tags: ['操场', '运动休闲', '100-200'] }; }, onShow() { const stored = uni.getStorageSync('campusfit_tags'); if (stored && stored.length) this.tags = stored; }, methods: { chooseTags() { uni.navigateTo({ url: '/pages/tags/index' }); }, saveDraft() { uni.showToast({ title: '草稿已保存', icon: 'none' }); }, publishNow() { uni.showToast({ title: '发布成功', icon: 'none' }); } } };'''),
'tags/index.vue': ('标签选择页', '围绕场景、风格和预算建立统一标签体系，便于搜索与导购。', '''<view class="card"><view class="text-main">常用标签</view><view class="chip-wrap" style="margin-top:16rpx;"><view :class="['chip', isOn(item) ? 'chip-on' : '']" v-for="item in items" :key="item" @click="toggle(item)">{{ item }}</view></view></view><button class="btn" @click="done">完成并返回</button>''', '''export default { data() { return { items: ['图书馆', '早八', '操场', '社团', '约会', '清新学院', '运动休闲', '轻通勤', '50-100', '100-150', '150-200'], selected: ['图书馆', '清新学院', '100-150'] }; }, methods: { isOn(item) { return this.selected.indexOf(item) > -1; }, toggle(item) { const i = this.selected.indexOf(item); if (i > -1) this.selected.splice(i,1); else this.selected.push(item); }, done() { uni.setStorageSync('campusfit_tags', this.selected); uni.navigateBack(); } } };'''),
'search/index.vue': ('搜索页', '历史搜索、热门搜索和标签筛选集中在这一页。', '''<view class="card"><view class="text-main">关键词</view><input class="input" v-model="keyword" placeholder="例如：图书馆穿搭 / 百元穿搭" /></view><view class="card"><view class="text-main">历史搜索</view><view class="chip-wrap" style="margin-top:16rpx;"><view class="chip" v-for="item in history" :key="item" @click="keyword=item">{{ item }}</view></view></view><view class="card"><view class="text-main">热门搜索</view><view class="chip-wrap" style="margin-top:16rpx;"><view class="chip chip-on" v-for="item in hot" :key="item" @click="keyword=item">{{ item }}</view></view></view><button class="btn" @click="goResult">查看搜索结果</button>''', '''export default { data() { return { keyword: '图书馆穿搭', history: ['图书馆穿搭', '百元穿搭', '社团答辩', '雨天搭配'], hot: ['开学季清爽穿搭', '操场运动风', '考试周舒服穿搭'] }; }, methods: { goResult() { uni.navigateTo({ url: '/pages/results/index?keyword=' + encodeURIComponent(this.keyword) }); } } };'''),
'results/index.vue': ('搜索结果页', '展示与关键词相关的穿搭结果，并支持继续进入详情页。', '''<view class="card" v-for="item in list" :key="item.id" @click="goDetail(item.id)"><view class="cover"><view class="badge">{{ item.tag }}</view><view class="cover-title">{{ item.title }}</view><view class="cover-sub">{{ item.subtitle }}</view></view><view class="text-main" style="margin-top:18rpx; font-size:28rpx;">{{ item.scene }} · {{ item.budget }}</view><view class="text-sub">{{ item.desc }}</view></view><button class="btn-light" @click="loadMore">加载更多</button>''', '''export default { data() { return { list: [{ id: '1', tag: '图书馆', title: '蓝白衬衫叠奶油背心', subtitle: '早八清爽感', scene: '清新学院', budget: '100-150', desc: '复用率高，适合学生党。' }, { id: '2', tag: '操场', title: '青春绿卫衣配浅灰工装裤', subtitle: '社团活动很出片', scene: '运动休闲', budget: '100-200', desc: '颜色明亮但不夸张。' }, { id: '3', tag: '答辩日', title: '浅绿衬衫裙搭针织披肩', subtitle: '轻盈又有精神', scene: '轻通勤', budget: '150-220', desc: '适合汇报和路演。' }] }; }, methods: { loadMore() { uni.showToast({ title: '已加载更多', icon: 'none' }); }, goDetail(id) { uni.navigateTo({ url: '/pages/detail/index?id=' + id }); } } };'''),
'profile/index.vue': ('个人主页', '展示头像、校园信息、关注粉丝获赞和内容管理入口。', '''<view class="hero"><view class="hero-mini">个人中心</view><view class="hero-title">林夏 · 华东理工大学</view><view class="hero-desc">记录真实校园场景里的好看穿搭，也认真帮同学们理性种草。</view></view><view class="metrics"><view class="metric"><view class="metric-value">198</view><view class="metric-label">关注</view></view><view class="metric"><view class="metric-value">1240</view><view class="metric-label">粉丝</view></view><view class="metric"><view class="metric-value">3580</view><view class="metric-label">获赞</view></view></view><view class="grid" style="margin-top:20rpx;"><view class="grid-item" @click="go('/pages/my-posts/index')"><view class="grid-title">我的发布</view><view class="grid-desc">管理已发布穿搭内容</view></view><view class="grid-item" @click="go('/pages/favorites/index')"><view class="grid-title">我的收藏</view><view class="grid-desc">查看收藏穿搭与商品</view></view><view class="grid-item" @click="go('/pages/follows/index')"><view class="grid-title">关注 / 粉丝</view><view class="grid-desc">管理社交关系链</view></view><view class="grid-item" @click="go('/pages/messages/index')"><view class="grid-title">消息通知</view><view class="grid-desc">查看互动与合作消息</view></view><view class="grid-item" @click="go('/pages/edit-profile/index')"><view class="grid-title">编辑资料</view><view class="grid-desc">修改昵称、学校、签名</view></view><view class="grid-item" @click="go('/pages/settings/index')"><view class="grid-title">设置</view><view class="grid-desc">通知、隐私与账号设置</view></view></view>''', '''export default { methods: { go(url) { uni.navigateTo({ url: url }); } } };'''),
'my-posts/index.vue': ('我的发布', '查看自己已发布的穿搭内容，并可继续进入详情页。', '''<view class="card" v-for="item in list" :key="item.id" @click="goDetail(item.id)"><view class="text-main">{{ item.title }}</view><view class="text-sub">{{ item.meta }}</view></view>''', '''export default { data() { return { list: [{ id: '1', title: '蓝白早八高分穿搭', meta: '图书馆 · 清新学院 · 128 赞' }, { id: '2', title: '操场晚风少年感穿搭', meta: '操场 · 运动休闲 · 203 赞' }, { id: '3', title: '答辩日前一天轻通勤', meta: '社团活动 · 轻通勤 · 155 赞' }] }; }, methods: { goDetail(id) { uni.navigateTo({ url: '/pages/detail/index?id=' + id }); } } };'''),
'favorites/index.vue': ('我的收藏', '保留感兴趣的穿搭内容与商品导购信息。', '''<view class="card" v-for="item in list" :key="item.id" @click="goDetail(item.id)"><view class="text-main">{{ item.title }}</view><view class="text-sub">{{ item.meta }}</view></view>''', '''export default { data() { return { list: [{ id: '3', title: '奶咖针织裙校园约会氛围感', meta: '周末约会 · 韩系简约 · ¥199' }, { id: '1', title: '蓝白衬衫叠奶油背心', meta: '图书馆 · 清新学院 · ¥139' }, { id: '5', title: '浅绿衬衫裙搭针织披肩', meta: '答辩日 · 轻通勤 · ¥189' }] }; }, methods: { goDetail(id) { uni.navigateTo({ url: '/pages/detail/index?id=' + id }); } } };'''),
'follows/index.vue': ('关注与粉丝', '展示用户关注列表和粉丝列表，支持关注状态切换。', '''<view class="card" v-for="item in list" :key="item.name"><view class="line"><view><view class="text-main" style="font-size:28rpx;">{{ item.name }}</view><view class="text-sub">{{ item.desc }}</view></view><view class="badge" @click="toggle(item)">{{ item.on ? '已关注' : '回关' }}</view></view></view>''', '''export default { data() { return { list: [{ name: '周沅', desc: '运动休闲日常分享', on: true }, { name: '顾言', desc: '周末约会氛围感', on: true }, { name: '沈知', desc: '自习室舒服穿搭', on: false }, { name: '叶青', desc: '轻通勤答辩风', on: true }] }; }, methods: { toggle(item) { item.on = !item.on; } } };'''),
'comments/index.vue': ('评论列表', '评论区支持刷新、发送评论以及点赞状态变化。', '''<view class="card"><view class="text-main">发表评论</view><textarea class="textarea" v-model="draft"></textarea><button class="btn" @click="send">发送评论</button></view><view class="card" v-for="item in list" :key="item.name"><view class="line"><view class="text-main" style="font-size:28rpx;">{{ item.name }}</view><view class="badge" @click="like(item)">{{ item.on ? '已赞' : '点赞' }}</view></view><view class="text-sub">{{ item.text }}</view></view><button class="btn-light" @click="refreshList">刷新评论</button>''', '''export default { data() { return { draft: '预算和单品拆分写得很清楚。', list: [{ name: '宋棠', text: '这套真的很适合早八，预算说明特别加分。', on: true }, { name: '安宁', text: '图书馆场景感拿捏住了，想看背心链接。', on: false }, { name: '闻溪', text: '操场那套卫衣颜色很好看。', on: false }] }; }, methods: { like(item) { item.on = !item.on; }, refreshList() { uni.showToast({ title: '评论已刷新', icon: 'none' }); }, send() { if (!this.draft) { uni.showToast({ title: '先输入评论', icon: 'none' }); return; } this.list.unshift({ name: '你', text: this.draft, on: false }); this.draft = ''; } } };'''),
'likes/index.vue': ('点赞列表', '查看为当前穿搭点过赞的用户。', '''<view class="card" v-for="item in list" :key="item.name"><view class="line"><view><view class="text-main" style="font-size:28rpx;">{{ item.name }}</view><view class="text-sub">{{ item.desc }}</view></view><view class="badge" @click="follow(item)">关注</view></view></view>''', '''export default { data() { return { list: [{ name: '周沅', desc: '刚刚点赞了你的图书馆早八穿搭' }, { name: '顾言', desc: '收藏后又回来点了赞' }, { name: '宋棠', desc: '喜欢这种预算清晰的推荐方式' }] }; }, methods: { follow(item) { uni.showToast({ title: '已关注 ' + item.name, icon: 'none' }); } } };'''),
'product-jump/index.vue': ('商品跳转确认', '在跳转外部电商平台前，展示预算说明、理性消费提示与平台盈利逻辑。', '''<view class="hero"><view class="hero-mini">外部平台导购</view><view class="hero-title">衬衫 + 针织背心 + 小白鞋</view><view class="hero-desc">价格 ¥139 · 淘宝校园精选</view></view><view class="card"><view class="text-main">理性消费提示</view><view class="text-sub">如果宿舍里已有同类单品，建议先评估复用性再决定是否购买。</view><view class="text-sub">平台盈利方式：导购佣金 + 推广位合作 + 达人合作服务费。</view></view><button class="btn-light" @click="back">返回详情</button><button class="btn" @click="jump">继续跳转</button>''', '''export default { methods: { back() { uni.navigateBack(); }, jump() { uni.showModal({ title: '模拟跳转成功', content: '当前原型已完成导购链路演示。', showCancel: false }); } } };'''),
'settings/index.vue': ('设置页', '通知、隐私与理性消费节流模式都集中在这里。', '''<view class="card" v-for="item in list" :key="item.title"><view class="line"><view><view class="text-main" style="font-size:28rpx;">{{ item.title }}</view><view class="text-sub">{{ item.desc }}</view></view><switch :checked="item.on" color="#57bdf0" @change="change(item,$event)" /></view></view><button class="btn-light" @click="goEdit">编辑个人资料</button><button class="btn" @click="logout">退出登录</button>''', '''export default { data() { return { list: [{ title: '消息推送', desc: '接收点赞、评论和商务合作提醒', on: true }, { title: '理性消费节流模式', desc: '优先展示预算说明和替代款建议', on: true }, { title: '同校信息可见', desc: '允许同校用户快速识别你', on: false }] }; }, methods: { change(item, e) { item.on = e.detail.value; }, goEdit() { uni.navigateTo({ url: '/pages/edit-profile/index' }); }, logout() { uni.navigateTo({ url: '/pages/login/index' }); } } };'''),
'edit-profile/index.vue': ('编辑资料页', '修改昵称、校园信息和签名。', '''<view class="card"><view class="text-main">昵称</view><input class="input" v-model="name" /></view><view class="card"><view class="text-main">学校 / 专业</view><input class="input" v-model="school" /></view><view class="card"><view class="text-main">个性签名</view><textarea class="textarea" v-model="sign"></textarea></view><button class="btn" @click="save">保存资料</button>''', '''export default { data() { return { name: '林夏', school: '华东理工大学 · 广告学', sign: '记录真实校园场景里的好看穿搭，也认真帮同学们理性种草。' }; }, methods: { save() { uni.showToast({ title: '资料已保存', icon: 'none' }); uni.navigateBack(); } } };'''),
'drafts/index.vue': ('草稿箱页', '继续编辑未发布内容，或删除暂时不用的草稿。', '''<view class="card" v-for="item in list" :key="item.title"><view class="text-main">{{ item.title }}</view><view class="text-sub">{{ item.desc }}</view><view class="line" style="margin-top:16rpx;"><view class="badge" @click="remove(item)">删除</view><view class="badge" @click="edit">继续编辑</view></view></view>''', '''export default { data() { return { list: [{ title: '操场晚风少年感穿搭', desc: '已上传 6 张图，还差商品链接和封面顺序。' }, { title: '答辩前一天的轻通勤搭配', desc: '标题和预算已写好，建议补一张全身比例图。' }, { title: '雨天图书馆甜酷叠穿', desc: '评论区有人想看鞋款选择。' }] }; }, methods: { remove(item) { this.list = this.list.filter((row) => row.title !== item.title); }, edit() { uni.switchTab({ url: '/pages/publish/index' }); } } };'''),
'messages/index.vue': ('消息通知页', '点赞、评论、粉丝增长和商务合作消息统一汇总。', '''<view class="card" v-for="item in list" :key="item.title"><view class="line"><view class="text-main" style="font-size:28rpx;">{{ item.title }}</view><view class="badge">{{ item.type }}</view></view><view class="text-sub">{{ item.desc }}</view></view>''', '''export default { data() { return { list: [{ type: '商务合作', title: '校园专题合作邀请', desc: '品牌合作中心邀请你参与开学季清爽穿搭专题。' }, { type: '点赞提醒', title: '周沅点赞了你的图书馆早八穿搭', desc: '建议继续补充商品细节增强转化。' }, { type: '评论互动', title: '宋棠评论了你的发布', desc: '你可以一键回复并附上商品导购链接。' }, { type: '系统通知', title: '标签“社团答辩”热度上涨', desc: '推荐继续发布同场景系列内容。' }] }; } };''')
}
for rel, (title, subtitle, body, script) in page_defs.items():
    p = root / 'pages' / rel
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(dedent(f'''<template>\n  <view class="screen">\n    <view class="top">\n      <view class="title">{title}</view>\n      <view class="subtitle">{subtitle}</view>\n    </view>\n    {body}\n  </view>\n</template>\n<script>\n{script}\n</script>\n<style>\n{base_style}\n</style>\n'''), encoding='utf-8')

# detail page
p = root / 'pages/detail/index.vue'
p.parent.mkdir(parents=True, exist_ok=True)
p.write_text(dedent('''<template>
  <view class="screen">
    <view class="hero">
      <view class="hero-mini">穿搭详情</view>
      <view class="hero-title">{{ post.title }}</view>
      <view class="hero-desc">{{ post.subtitle }}</view>
    </view>
    <view class="card">
      <view class="text-main">标签</view>
      <view class="chip-wrap" style="margin-top:16rpx;">
        <view class="chip chip-on">{{ post.scene }}</view>
        <view class="chip">{{ post.style }}</view>
        <view class="chip">预算 {{ post.budget }}</view>
      </view>
      <view class="text-sub">{{ post.desc }}</view>
    </view>
    <view class="card">
      <view class="line">
        <view>
          <view class="text-main">发布者：{{ post.author }}</view>
          <view class="text-sub">{{ post.school }}</view>
        </view>
        <view class="badge" @click="followed = !followed">{{ followed ? '已关注' : '关注' }}</view>
      </view>
    </view>
    <view class="card">
      <view class="text-main">互动按钮状态</view>
      <view class="chip-wrap" style="margin-top:16rpx;">
        <view :class="['chip', liked ? 'chip-on' : '']" @click="liked = !liked">点赞 {{ likes }}</view>
        <view class="chip" @click="goComments">评论 {{ comments }}</view>
        <view :class="['chip', saved ? 'chip-on' : '']" @click="saved = !saved">收藏 {{ saves }}</view>
        <view class="chip" @click="share">分享</view>
      </view>
    </view>
    <view class="card">
      <view class="text-main">商品导购</view>
      <view class="text-sub">{{ post.guide }}</view>
      <view class="text-sub">外部平台：{{ post.platform }} · 价格 {{ post.price }}</view>
      <view class="text-sub">理性消费提示：先看复用率，再决定是否购买。</view>
      <button class="btn" @click="goProduct">跳转购买</button>
      <button class="btn-light" @click="goLikes">查看点赞列表</button>
    </view>
  </view>
</template>
<script>
const posts = {
  '1': { title: '蓝白衬衫叠奶油背心，早八也有清爽感', subtitle: '适合图书馆、教学楼与日常通勤场景', author: '林夏', school: '华东理工大学 · 广告学', scene: '图书馆', style: '清新学院', budget: '100-150', desc: '预算清晰、复用率高，是学生党最容易落地的一组基础搭配。', guide: '衬衫 + 针织背心 + 小白鞋', platform: '淘宝校园精选', price: '¥139' },
  '2': { title: '青春绿卫衣配浅灰工装裤，社团活动很出片', subtitle: '运动休闲但不邋遢，适合团建与活动现场', author: '周沅', school: '南京师范大学 · 学前教育', scene: '操场', style: '运动休闲', budget: '100-200', desc: '颜色明亮但不夸张，穿起来会很有校园元气感。', guide: '卫衣 + 工装裤 + 训练鞋', platform: '京东运动馆', price: '¥179' },
  '3': { title: '浅绿衬衫裙搭针织披肩，轻盈又有精神', subtitle: '适合汇报、路演、社团招新等场景', author: '叶青', school: '中山大学 · 新闻学', scene: '答辩日', style: '轻通勤', budget: '150-220', desc: '兼顾学生感和正式感，是答辩日很稳的一套。', guide: '衬衫裙 + 披肩 + 乐福鞋', platform: '天猫校园好价', price: '¥189' }
}
export default {
  data() {
    return { post: posts['1'], followed: true, liked: true, saved: true, likes: 128, comments: 36, saves: 92 };
  },
  onLoad(options) {
    const id = options.id || '1';
    this.post = posts[id] || posts['1'];
  },
  methods: {
    goComments() { uni.navigateTo({ url: '/pages/comments/index' }); },
    goLikes() { uni.navigateTo({ url: '/pages/likes/index' }); },
    goProduct() { uni.navigateTo({ url: '/pages/product-jump/index' }); },
    share() { uni.showToast({ title: '已生成分享卡片', icon: 'none' }); }
  }
};
</script>
<style>
'''+base_style+'''
</style>
'''), encoding='utf-8')
print('rebuilt mobile-uniapp')
