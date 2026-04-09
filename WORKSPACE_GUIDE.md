# 青搭 Workspace Guide

## 1. 工作区定位

本工作区用于承载青搭毕业设计的完整实现与文档材料，包含：

- 用户端 Web
- 用户端移动端
- 管理后台
- Spring Boot 后端
- MySQL 数据结构
- 产品文档、论文草稿与过程文档

如果按毕业设计说明书的写法理解，这个仓库对应的是“系统实现 + 论文素材库 + 答辩资料库”的合并工作区。

## 2. Project Layout

- `web/`
  - Vue 3 + Vite 用户端 Web
- `mobile-uniapp/`
  - uni-app 用户端移动工程
- `backend-java/`
  - JDK 21 + Spring Boot 后端服务
- `admin-web/`
  - Vue 3 + Element Plus 管理后台
- `database/`
  - MySQL 初始化脚本和数据库资源
- `product-design-deliverables/`
  - 产品、论文、答辩相关文档
- `work/`
  - 项目推进与过程性记录

## 3. 功能分层建议

### 用户端

- 首页内容流
- 搜索与标签筛选
- 内容详情与互动
- 发布、草稿箱、活动绑定
- 个人中心、消息、设置、创作者激励

### 管理后台

- 数据看板
- 内容审核
- 活动管理
- 公告管理
- 商家与合作管理
- 结算管理
- 提现审核
- 用户管理

### 后端

- 认证与登录态
- 内容与互动
- 活动与公告
- 个人中心与激励
- 图片上传
- 后台治理接口

## 4. 推荐启动顺序

1. 准备 MySQL，并执行 `database/` 或 `backend-java/src/main/resources/` 中的建表与初始化脚本
2. 启动 `backend-java/`
3. 启动 `admin-web/`
4. 启动 `web/`
5. 用 HBuilder X 打开并运行 `mobile-uniapp/`

## 5. 文档阅读顺序

如果你在写毕业设计或准备答辩，建议优先阅读：

1. `product-design-deliverables/05-graduation-design-outline.md`
2. `product-design-deliverables/06-graduation-design-draft-ch1-ch2.md`
3. `product-design-deliverables/07-graduation-design-draft-ch3-framework.md`
4. `product-design-deliverables/08-graduation-design-draft-ch4-implementation.md`
5. `README.md`

## 6. Notes

- 根目录保留了原型与说明性文件，便于答辩展示和结构回溯。
- `web`、`admin-web`、`backend-java`、`mobile-uniapp` 目前作为独立子模块维护。
- 如果后续继续补第 4 章“系统实现”，建议直接从各模块源码目录和 `schema.sql` 中取图、取表、取接口说明。
