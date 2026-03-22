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

UPDATE activity_topic
SET badge_label = CASE activity_code
    WHEN 'spring-library-week' THEN '热门活动'
    WHEN 'club-style-challenge' THEN '校园挑战'
    WHEN 'budget-outfit-plan' THEN '预算计划'
    ELSE badge_label
END;

INSERT INTO official_announcement (
    title, badge_label, summary, content, status, pinned_flag, sort_order,
    publish_time, expire_time, created_by, updated_by
)
SELECT
    'CampusFit 内容发布与审核说明',
    '官方公告',
    '新发布或修改的穿搭内容会先进入审核，审核通过后才会展示到首页信息流。',
    '为了保证首页内容质量，用户新发和修改后的穿搭内容都会先进入后台审核。你可以在管理端处理审核，在移动端“我的发布”查看审核进度。',
    1,
    1,
    1,
    DATE_SUB(NOW(), INTERVAL 2 HOUR),
    NULL,
    '系统初始化',
    '系统初始化'
WHERE NOT EXISTS (
    SELECT 1
    FROM official_announcement
    WHERE title = 'CampusFit 内容发布与审核说明'
);
