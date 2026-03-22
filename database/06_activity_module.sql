SET NAMES utf8mb4;
USE campusfit;

CREATE TABLE IF NOT EXISTS activity_topic (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    activity_code VARCHAR(50) NOT NULL UNIQUE,
    title VARCHAR(120) NOT NULL,
    badge_label VARCHAR(50),
    theme_desc VARCHAR(255),
    summary_desc VARCHAR(255),
    period_text VARCHAR(50),
    reward_desc VARCHAR(255),
    participation_desc VARCHAR(255),
    scene_label VARCHAR(50),
    status_code VARCHAR(20) NOT NULL DEFAULT 'ONGOING',
    featured_flag TINYINT NOT NULL DEFAULT 0,
    heat_value INT NOT NULL DEFAULT 0,
    sort_order INT NOT NULL DEFAULT 0,
    status TINYINT NOT NULL DEFAULT 1,
    start_time DATETIME,
    end_time DATETIME,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS user_activity_join (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    activity_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uk_user_activity_join (activity_id, user_id),
    CONSTRAINT fk_user_activity_join_activity FOREIGN KEY (activity_id) REFERENCES activity_topic(id),
    CONSTRAINT fk_user_activity_join_user FOREIGN KEY (user_id) REFERENCES app_user(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS post_activity_binding (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    post_id BIGINT NOT NULL,
    activity_id BIGINT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uk_post_activity_binding_post (post_id),
    CONSTRAINT fk_post_activity_binding_post FOREIGN KEY (post_id) REFERENCES post(id),
    CONSTRAINT fk_post_activity_binding_activity FOREIGN KEY (activity_id) REFERENCES activity_topic(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT IGNORE INTO user_activity_join (activity_id, user_id, created_at)
SELECT 1, ua.user_id, ua.created_at
FROM user_activity_join ua
JOIN activity_topic a ON a.id = ua.activity_id
WHERE a.activity_code IN ('club-style-challenge', 'budget-outfit-plan');

DELETE ua
FROM user_activity_join ua
JOIN activity_topic a ON a.id = ua.activity_id
WHERE a.activity_code IN ('club-style-challenge', 'budget-outfit-plan');

UPDATE post_activity_binding pab
JOIN activity_topic a ON a.id = pab.activity_id
SET pab.activity_id = 1,
    pab.updated_at = NOW()
WHERE a.activity_code IN ('club-style-challenge', 'budget-outfit-plan');

UPDATE post_draft
SET activity_code = 'campus-new-star-plan',
    updated_at = NOW()
WHERE activity_code IN ('spring-library-week', 'club-style-challenge', 'budget-outfit-plan');

INSERT INTO activity_topic (
    id, activity_code, title, badge_label, theme_desc, summary_desc, period_text,
    reward_desc, participation_desc, scene_label, status_code, featured_flag, heat_value,
    sort_order, status, start_time, end_time
) VALUES
    (
        1, 'campus-new-star-plan', '校园穿搭新星计划', '内容冷启动',
        '面向首批创作者的内容冷启动活动，鼓励在上线前 7 天持续发布带校园场景标签的原创穿搭，用真实互动分找出最值得被看见的校园内容。',
        '发布带校园场景标签的原创穿搭即可参评，每周按互动分评选 Top 30 优质穿搭。',
        '2026.03.22 - 2026.03.28',
        '入选 Top 30 可参与瓜分 500 元启动奖金池，前三名额外获得首页活动推荐位和官方公告露出。',
        '发布原创穿搭并至少选择 1 个校园场景标签，内容通过审核后按点赞×1 + 评论×3 + 收藏×2 计入互动分。',
        '校园穿搭', 'ONGOING', 1, 1280, 1, 1, '2026-03-22 00:00:00', '2026-03-28 23:59:59'
    ),
    (
        2, 'first-merchant-support-plan', '首批商家扶持计划', '商家扶持',
        '面向首批校园服饰合作商家的冷启动扶持计划，优先通过合作内容、商品跳转统计、首页推荐位和轮播位帮助合作商品起量。',
        '首月完成合作登记的商家可进入扶持池；带真实商品链接并通过审核的合作穿搭，会进入额外曝光评估。',
        '2026.03.22 - 2026.04.21',
        '首月入驻免服务费；符合排期的合作商品可获首页活动推荐或 1 天轮播扶持，每周点击热度最高的合作商品可获平台免费帮推全校。',
        '由平台运营登记首批合作商家；创作者发布带真实商品链接并通过审核的合作穿搭即可进入扶持池，商品点击与内容互动会作为评估依据。',
        '商家合作', 'RECRUITING', 1, 930, 2, 1, '2026-03-22 00:00:00', '2026-04-21 23:59:59'
    )
ON DUPLICATE KEY UPDATE
    activity_code = VALUES(activity_code),
    title = VALUES(title),
    badge_label = VALUES(badge_label),
    theme_desc = VALUES(theme_desc),
    summary_desc = VALUES(summary_desc),
    period_text = VALUES(period_text),
    reward_desc = VALUES(reward_desc),
    participation_desc = VALUES(participation_desc),
    scene_label = VALUES(scene_label),
    status_code = VALUES(status_code),
    featured_flag = VALUES(featured_flag),
    heat_value = VALUES(heat_value),
    sort_order = VALUES(sort_order),
    status = VALUES(status),
    start_time = VALUES(start_time),
    end_time = VALUES(end_time),
    updated_at = NOW();

DELETE FROM activity_topic
WHERE activity_code IN ('spring-library-week', 'club-style-challenge', 'budget-outfit-plan');

INSERT INTO user_activity_join (activity_id, user_id, created_at)
SELECT 1, 1, NOW()
WHERE NOT EXISTS (
    SELECT 1 FROM user_activity_join WHERE activity_id = 1 AND user_id = 1
);

INSERT INTO post_activity_binding (post_id, activity_id, created_at, updated_at)
SELECT 1, 1, NOW(), NOW()
WHERE EXISTS (SELECT 1 FROM post WHERE id = 1)
  AND NOT EXISTS (SELECT 1 FROM post_activity_binding WHERE post_id = 1);

INSERT INTO post_activity_binding (post_id, activity_id, created_at, updated_at)
SELECT 2, 1, NOW(), NOW()
WHERE EXISTS (SELECT 1 FROM post WHERE id = 2)
  AND NOT EXISTS (SELECT 1 FROM post_activity_binding WHERE post_id = 2);

INSERT INTO post_activity_binding (post_id, activity_id, created_at, updated_at)
SELECT 4, 1, NOW(), NOW()
WHERE EXISTS (SELECT 1 FROM post WHERE id = 4)
  AND NOT EXISTS (SELECT 1 FROM post_activity_binding WHERE post_id = 4);
