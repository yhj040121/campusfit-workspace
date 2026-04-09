# 青搭 Workspace

青搭是一个面向大学生场景的校园穿搭内容平台毕业设计项目。当前仓库已经不是单一原型，而是包含用户端 Web、移动端、管理后台、Spring Boot 后端、MySQL 数据结构以及论文/答辩文档的一体化工作区。

## 项目定位

结合开题报告，青搭的核心目标是构建一个“内容 + 社交 + 导购 + 运营治理”闭环，重点覆盖以下能力：

- 首页穿搭内容流与搜索筛选
- 穿搭发布、草稿箱、活动参与
- 点赞、评论、收藏、关注、消息通知
- 商品导购跳转与商家合作
- 创作者激励、提现申请、后台审核与运营管理

如果按徐文特毕业设计的写法来理解，青搭可以看成是把“首页资讯 + 社区发布 + 商城 + 我的”扩展成了更完整的校园穿搭平台版本。

## 仓库结构

- `web/`
  - 用户端 Web，基于 Vue 3 + Vite
- `mobile-uniapp/`
  - 用户端移动应用，基于 uni-app
- `admin-web/`
  - 管理后台，基于 Vue 3 + Element Plus
- `backend-java/`
  - Spring Boot 3 后端服务
- `database/`
  - MySQL 初始化脚本与数据库资源
- `product-design-deliverables/`
  - 产品、论文与答辩文档
- `work/`
  - 项目推进与过程性文档

## 推荐阅读顺序

如果你当前目标是继续完成毕业设计，建议按下面顺序阅读：

1. `product-design-deliverables/05-graduation-design-outline.md`
2. `product-design-deliverables/06-graduation-design-draft-ch1-ch2.md`
3. `product-design-deliverables/07-graduation-design-draft-ch3-framework.md`
4. `product-design-deliverables/08-graduation-design-draft-ch4-implementation.md`
5. `WORKSPACE_GUIDE.md`

这样可以先把论文结构、前两章内容和第 3 章系统框架对齐，再回到代码补实现和截图。

## 各端对应关系

### 用户端

- `mobile-uniapp/pages/index/index.vue`
  - 首页内容流
- `mobile-uniapp/pages/publish/index.vue`
  - 穿搭发布
- `mobile-uniapp/pages/detail/index.vue`
  - 内容详情与互动
- `mobile-uniapp/pages/profile/index.vue`
  - 个人中心

### Web 用户端

- `web/src/views/HomeView.vue`
  - 首页内容流、公告、活动入口
- `web/src/views/PublishView.vue`
  - 发布与草稿编辑
- `web/src/views/PostDetailView.vue`
  - 内容详情
- `web/src/views/ProfileView.vue`
  - 个人主页与创作者功能

### 管理后台

- `admin-web/src/views/DashboardView.vue`
  - 数据看板
- `admin-web/src/views/ContentAuditView.vue`
  - 内容审核
- `admin-web/src/views/ActivityManageView.vue`
  - 活动管理
- `admin-web/src/views/AnnouncementManageView.vue`
  - 公告管理
- `admin-web/src/views/MerchantManageView.vue`
  - 商家管理
- `admin-web/src/views/SettlementView.vue`
  - 结算管理
- `admin-web/src/views/WithdrawRequestView.vue`
  - 提现审核

### 后端

- `backend-java/src/main/java/com/campusfit/modules/auth`
  - 登录注册与会话
- `backend-java/src/main/java/com/campusfit/modules/post`
  - 内容流、详情、互动、导购
- `backend-java/src/main/java/com/campusfit/modules/profile`
  - 个人中心、关注、激励
- `backend-java/src/main/java/com/campusfit/modules/activity`
  - 活动模块
- `backend-java/src/main/java/com/campusfit/modules/admin`
  - 管理后台能力

## 本地启动顺序

1. 准备 MySQL，并导入 `database/` 或 `backend-java/src/main/resources/` 中的初始化脚本
2. 启动 `backend-java/`
3. 启动 `admin-web/`
4. 启动 `web/`
5. 用 HBuilder X 打开并运行 `mobile-uniapp/`

更细的说明见 `WORKSPACE_GUIDE.md` 和各模块内的 `README.md`。

## 文档入口

- 产品/论文文档总览：`product-design-deliverables/README.md`
- 工作过程文档总览：`work/README.md`
- 工作区说明：`WORKSPACE_GUIDE.md`

## 当前建议

如果你接下来要继续做论文和答辩，优先顺序建议是：

1. 先以 `07-graduation-design-draft-ch3-framework.md` 为骨架补第 3 章
2. 再以 `08-graduation-design-draft-ch4-implementation.md` 为骨架补第 4 章“系统实现”
3. 最后统一补页面截图、流程图、数据库表和测试结果
