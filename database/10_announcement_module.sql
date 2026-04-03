SET NAMES utf8mb4;
USE campusfit;

CREATE TABLE IF NOT EXISTS official_announcement (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(120) NOT NULL,
    badge_label VARCHAR(30) NOT NULL DEFAULT '官方公告',
    summary VARCHAR(255) NOT NULL,
    content TEXT,
    status TINYINT NOT NULL DEFAULT 1,
    pinned_flag TINYINT NOT NULL DEFAULT 1,
    sort_order INT NOT NULL DEFAULT 0,
    publish_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    expire_time DATETIME,
    created_by VARCHAR(100),
    updated_by VARCHAR(100),
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO official_announcement (
    id, title, badge_label, summary, content, status, pinned_flag, sort_order,
    publish_time, expire_time, created_by, updated_by
) VALUES (
    1,
    '青搭 V2 活动发布：新星计划与商家扶持上线',
    '活动发布',
    '活动中心已更新为 2 个新专题：面向创作者的“校园穿搭新星计划”，以及面向首批合作商家的“首批商家扶持计划”。',
    '活动中心现已下线旧的 3 个默认活动，并同步上线 2 个更贴合当前平台能力的新活动。校园穿搭新星计划面向首批创作者开放：发布带校园场景标签的原创穿搭并通过审核后，按点赞×1 + 评论×3 + 收藏×2 统计互动分，每周评选 Top 30，入选可参与 500 元启动奖金池，前三名额外获得首页推荐位。首批商家扶持计划面向首批合作商家与合作内容开放：首月入驻免服务费，创作者发布带真实商品链接并通过审核的合作穿搭即可进入扶持池，平台会结合商品点击热度、内容互动和合作排期给予首页推荐或轮播扶持。当前平台已支持活动报名、活动绑定发布、内容审核、首页推荐、商品链接与点击统计、官方公告发布，活动结果以现阶段运营评选和后台配置为准。',
    1,
    1,
    0,
    DATE_SUB(NOW(), INTERVAL 10 MINUTE),
    NULL,
    '系统运营',
    '系统运营'
)
ON DUPLICATE KEY UPDATE
    title = VALUES(title),
    badge_label = VALUES(badge_label),
    summary = VALUES(summary),
    content = VALUES(content),
    status = VALUES(status),
    pinned_flag = VALUES(pinned_flag),
    sort_order = VALUES(sort_order),
    publish_time = VALUES(publish_time),
    expire_time = VALUES(expire_time),
    updated_by = VALUES(updated_by),
    updated_at = NOW();
