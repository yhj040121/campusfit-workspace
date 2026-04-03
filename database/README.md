# 青搭 Database

## 说明

- `01_schema.sql`：创建数据库与完整表结构
- `02_seed.sql`：写入演示数据（穿搭内容、标签、消息、收益等）

## 本地导入顺序

1. 执行 `01_schema.sql`
2. 执行 `02_seed.sql`

## 开发环境

- 数据库名：`campusfit`
- 字符集：`utf8mb4`
- Spring Boot `dev` 环境已配置自动执行 `schema.sql` 和 `data.sql`
- 当前自动初始化属于演示环境，重启后端会重置演示数据
