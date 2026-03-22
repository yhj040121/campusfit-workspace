SET NAMES utf8mb4;

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

INSERT INTO activity_topic (
    id, activity_code, title, badge_label, theme_desc, summary_desc, period_text,
    reward_desc, participation_desc, scene_label, status_code, featured_flag, heat_value, sort_order, status
) VALUES
    (
        1, 'spring-library-week', '图书馆清爽穿搭周', '本周主推',
        '围绕早八、自习和图书馆久坐场景，征集干净、耐看、预算友好的校园穿搭内容。',
        '适合图书馆、自习室和教室通勤的清爽穿搭专题推荐。',
        '03.20 - 03.31',
        '优质内容可获得首页专题位与校园品牌合作曝光。',
        '发布带有“图书馆”或“早八”标签的原创内容即可参与。',
        '图书馆', 'ONGOING', 1, 862, 1, 1
    ),
    (
        2, 'club-style-challenge', '社团活动出片挑战', '热门活动',
        '鼓励分享社团招新、主持、合照、路演等场景下更上镜的穿搭方案。',
        '适合社团招新、路演和合照的校园活动主题。',
        '03.18 - 04.05',
        '入选活动榜单后可获得校园创作者成长积分。',
        '发布带社团活动或甜酷、运动休闲风格标签的内容即可加入。',
        '社团活动', 'ONGOING', 1, 1046, 2, 1
    ),
    (
        3, 'budget-outfit-plan', '百元预算穿搭计划', '预算友好',
        '面向预算敏感用户，鼓励分享低成本、高复用、可直接照着穿的日常搭配。',
        '专门收纳百元内外的理性消费穿搭内容。',
        '03.15 - 04.10',
        '优质预算内容可进入理性消费专题并获得导购扶持。',
        '内容需明确预算区间，并至少包含一件核心单品。',
        '预算', 'RECRUITING', 0, 732, 3, 1
    )
ON DUPLICATE KEY UPDATE
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
    status = VALUES(status);

INSERT INTO user_activity_join (activity_id, user_id, created_at)
SELECT 1, 1, NOW()
WHERE NOT EXISTS (
    SELECT 1 FROM user_activity_join WHERE activity_id = 1 AND user_id = 1
);

INSERT INTO user_activity_join (activity_id, user_id, created_at)
SELECT 2, 2, NOW()
WHERE NOT EXISTS (
    SELECT 1 FROM user_activity_join WHERE activity_id = 2 AND user_id = 2
);

INSERT INTO user_activity_join (activity_id, user_id, created_at)
SELECT 2, 3, NOW()
WHERE NOT EXISTS (
    SELECT 1 FROM user_activity_join WHERE activity_id = 2 AND user_id = 3
);

INSERT INTO user_activity_join (activity_id, user_id, created_at)
SELECT 3, 1, NOW()
WHERE NOT EXISTS (
    SELECT 1 FROM user_activity_join WHERE activity_id = 3 AND user_id = 1
);

INSERT INTO post_activity_binding (post_id, activity_id, created_at, updated_at)
SELECT 1, 1, NOW(), NOW()
WHERE EXISTS (SELECT 1 FROM post WHERE id = 1)
  AND NOT EXISTS (SELECT 1 FROM post_activity_binding WHERE post_id = 1);

INSERT INTO post_activity_binding (post_id, activity_id, created_at, updated_at)
SELECT 2, 2, NOW(), NOW()
WHERE EXISTS (SELECT 1 FROM post WHERE id = 2)
  AND NOT EXISTS (SELECT 1 FROM post_activity_binding WHERE post_id = 2);

INSERT INTO post_activity_binding (post_id, activity_id, created_at, updated_at)
SELECT 4, 3, NOW(), NOW()
WHERE EXISTS (SELECT 1 FROM post WHERE id = 4)
  AND NOT EXISTS (SELECT 1 FROM post_activity_binding WHERE post_id = 4);

INSERT INTO post_activity_binding (post_id, activity_id, created_at, updated_at)
SELECT 12, 1, NOW(), NOW()
WHERE EXISTS (SELECT 1 FROM post WHERE id = 12)
  AND NOT EXISTS (SELECT 1 FROM post_activity_binding WHERE post_id = 12);
