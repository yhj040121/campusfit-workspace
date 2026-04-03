SET NAMES utf8mb4;
START TRANSACTION;

SET @demo_password_hash = NULL;

INSERT INTO app_user (phone, nickname, avatar_url, password_hash, status, created_at, updated_at)
VALUES ('18800031001', '陈知夏', NULL, @demo_password_hash, 1, NOW(), NOW())
ON DUPLICATE KEY UPDATE
    id = LAST_INSERT_ID(id),
    nickname = VALUES(nickname),
    avatar_url = VALUES(avatar_url),
    status = VALUES(status),
    updated_at = NOW();
SET @user_chen = LAST_INSERT_ID();
DELETE FROM user_profile WHERE user_id = @user_chen;
INSERT INTO user_profile (
    user_id, school_name, grade_name, signature, avatar_text, avatar_class,
    cover_image_url, gender, email, location_name, like_count, follower_count, following_count, created_at, updated_at
) VALUES (
    @user_chen, '东华大学', '大三', '记录通勤和图书馆场景里最耐看的学院风搭配。', '陈', 'soft',
    NULL, 'female', 'zhixia.chen@campusfit.demo', '上海 长宁', 0, 0, 0, NOW(), NOW()
);
DELETE FROM message_notification WHERE user_id = @user_chen;
INSERT INTO message_notification (user_id, message_type, title, content, read_status, created_at)
VALUES
    (@user_chen, '系统通知', '欢迎来到青搭', '你的演示账号已经准备完成，可以直接查看个人资料、关注关系和消息列表。', 0, NOW()),
    (@user_chen, '运营通知', '演示账号已准备就绪', '这是一套偏学院风和通勤场景的演示人设，适合展示首页内容浏览与个人主页。', 0, NOW());

INSERT INTO app_user (phone, nickname, avatar_url, password_hash, status, created_at, updated_at)
VALUES ('18800031002', '周屿川', NULL, @demo_password_hash, 1, NOW(), NOW())
ON DUPLICATE KEY UPDATE
    id = LAST_INSERT_ID(id),
    nickname = VALUES(nickname),
    avatar_url = VALUES(avatar_url),
    status = VALUES(status),
    updated_at = NOW();
SET @user_zhou = LAST_INSERT_ID();
DELETE FROM user_profile WHERE user_id = @user_zhou;
INSERT INTO user_profile (
    user_id, school_name, grade_name, signature, avatar_text, avatar_class,
    cover_image_url, gender, email, location_name, like_count, follower_count, following_count, created_at, updated_at
) VALUES (
    @user_zhou, '上海体育大学', '大二', '偏爱运动混搭和社团活动当天能直接照着穿的组合。', '周', 'alt',
    NULL, 'male', 'yuchuan.zhou@campusfit.demo', '上海 杨浦', 0, 0, 0, NOW(), NOW()
);
DELETE FROM message_notification WHERE user_id = @user_zhou;
INSERT INTO message_notification (user_id, message_type, title, content, read_status, created_at)
VALUES
    (@user_zhou, '系统通知', '欢迎来到青搭', '你的演示账号已经准备完成，可以直接查看个人资料、关注关系和消息列表。', 0, NOW()),
    (@user_zhou, '运营通知', '演示账号已准备就绪', '这是一套偏运动社团场景的演示人设，适合展示活动中心和消息通知。', 0, NOW());

INSERT INTO app_user (phone, nickname, avatar_url, password_hash, status, created_at, updated_at)
VALUES ('18800031003', '林晚澄', NULL, @demo_password_hash, 1, NOW(), NOW())
ON DUPLICATE KEY UPDATE
    id = LAST_INSERT_ID(id),
    nickname = VALUES(nickname),
    avatar_url = VALUES(avatar_url),
    status = VALUES(status),
    updated_at = NOW();
SET @user_lin = LAST_INSERT_ID();
DELETE FROM user_profile WHERE user_id = @user_lin;
INSERT INTO user_profile (
    user_id, school_name, grade_name, signature, avatar_text, avatar_class,
    cover_image_url, gender, email, location_name, like_count, follower_count, following_count, created_at, updated_at
) VALUES (
    @user_lin, '华东理工大学', '研一', '喜欢把基础款和低饱和配色穿出一点温柔层次。', '林', 'soft',
    NULL, 'female', 'wancheng.lin@campusfit.demo', '上海 徐汇', 0, 0, 0, NOW(), NOW()
);
DELETE FROM message_notification WHERE user_id = @user_lin;
INSERT INTO message_notification (user_id, message_type, title, content, read_status, created_at)
VALUES
    (@user_lin, '系统通知', '欢迎来到青搭', '你的演示账号已经准备完成，可以直接查看个人资料、关注关系和消息列表。', 0, NOW()),
    (@user_lin, '运营通知', '演示账号已准备就绪', '这是一套偏低饱和审美和研究生日常的人设，适合展示搜索与收藏场景。', 0, NOW());

INSERT INTO app_user (phone, nickname, avatar_url, password_hash, status, created_at, updated_at)
VALUES ('18800031004', '许今安', NULL, @demo_password_hash, 1, NOW(), NOW())
ON DUPLICATE KEY UPDATE
    id = LAST_INSERT_ID(id),
    nickname = VALUES(nickname),
    avatar_url = VALUES(avatar_url),
    status = VALUES(status),
    updated_at = NOW();
SET @user_xu = LAST_INSERT_ID();
DELETE FROM user_profile WHERE user_id = @user_xu;
INSERT INTO user_profile (
    user_id, school_name, grade_name, signature, avatar_text, avatar_class,
    cover_image_url, gender, email, location_name, like_count, follower_count, following_count, created_at, updated_at
) VALUES (
    @user_xu, '上海师范大学', '大四', '做预算友好的教室通勤穿搭，也会分享实习日常。', '许', 'soft',
    NULL, 'female', 'jinan.xu@campusfit.demo', '上海 普陀', 0, 0, 0, NOW(), NOW()
);
DELETE FROM message_notification WHERE user_id = @user_xu;
INSERT INTO message_notification (user_id, message_type, title, content, read_status, created_at)
VALUES
    (@user_xu, '系统通知', '欢迎来到青搭', '你的演示账号已经准备完成，可以直接查看个人资料、关注关系和消息列表。', 0, NOW()),
    (@user_xu, '运营通知', '演示账号已准备就绪', '这是一套偏预算友好和实习通勤的人设，适合展示搜索筛选与个人主页。', 0, NOW());

INSERT INTO app_user (phone, nickname, avatar_url, password_hash, status, created_at, updated_at)
VALUES ('18800031005', '宋叙白', NULL, @demo_password_hash, 1, NOW(), NOW())
ON DUPLICATE KEY UPDATE
    id = LAST_INSERT_ID(id),
    nickname = VALUES(nickname),
    avatar_url = VALUES(avatar_url),
    status = VALUES(status),
    updated_at = NOW();
SET @user_song = LAST_INSERT_ID();
DELETE FROM user_profile WHERE user_id = @user_song;
INSERT INTO user_profile (
    user_id, school_name, grade_name, signature, avatar_text, avatar_class,
    cover_image_url, gender, email, location_name, like_count, follower_count, following_count, created_at, updated_at
) VALUES (
    @user_song, '同济大学', '研二', '更关注功能性单品和通勤背包，偏理工科审美。', '宋', 'alt',
    NULL, 'male', 'xubai.song@campusfit.demo', '上海 杨浦', 0, 0, 0, NOW(), NOW()
);
DELETE FROM message_notification WHERE user_id = @user_song;
INSERT INTO message_notification (user_id, message_type, title, content, read_status, created_at)
VALUES
    (@user_song, '系统通知', '欢迎来到青搭', '你的演示账号已经准备完成，可以直接查看个人资料、关注关系和消息列表。', 0, NOW()),
    (@user_song, '运营通知', '演示账号已准备就绪', '这是一套偏功能性单品和理工科校园场景的人设，适合展示通勤与收藏场景。', 0, NOW());

DELETE FROM user_follow
WHERE (follower_user_id IN (@user_chen, @user_zhou, @user_lin, @user_xu, @user_song)
   AND followee_user_id IN (@user_chen, @user_zhou, @user_lin, @user_xu, @user_song));

INSERT INTO user_follow (follower_user_id, followee_user_id, created_at)
VALUES
    (@user_chen, @user_zhou, DATE_SUB(NOW(), INTERVAL 9 DAY)),
    (@user_chen, @user_lin, DATE_SUB(NOW(), INTERVAL 6 DAY)),
    (@user_zhou, @user_chen, DATE_SUB(NOW(), INTERVAL 8 DAY)),
    (@user_zhou, @user_xu, DATE_SUB(NOW(), INTERVAL 5 DAY)),
    (@user_lin, @user_chen, DATE_SUB(NOW(), INTERVAL 7 DAY)),
    (@user_lin, @user_song, DATE_SUB(NOW(), INTERVAL 3 DAY)),
    (@user_xu, @user_chen, DATE_SUB(NOW(), INTERVAL 4 DAY)),
    (@user_xu, @user_lin, DATE_SUB(NOW(), INTERVAL 2 DAY)),
    (@user_song, @user_zhou, DATE_SUB(NOW(), INTERVAL 1 DAY));

COMMIT;

