SET NAMES utf8mb4;
USE campusfit;

-- For older databases, run 06_activity_module.sql and 10_announcement_module.sql
-- before disabling the legacy runtime schema repair runners.
-- After the scripts are applied, set APP_RUNTIME_SCHEMA_REPAIR_ENABLED=false.

SET @db := DATABASE();

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE app_user ADD COLUMN password_hash VARCHAR(255) NULL AFTER avatar_url',
        'SELECT ''skip app_user.password_hash'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'app_user'
      AND column_name = 'password_hash'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

UPDATE app_user
SET password_hash = NULL
WHERE password_hash = '';

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE user_profile ADD COLUMN cover_image_url VARCHAR(255) NULL AFTER avatar_class',
        'SELECT ''skip user_profile.cover_image_url'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'user_profile'
      AND column_name = 'cover_image_url'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE user_profile ADD COLUMN gender VARCHAR(20) NULL AFTER cover_image_url',
        'SELECT ''skip user_profile.gender'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'user_profile'
      AND column_name = 'gender'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE user_profile ADD COLUMN email VARCHAR(120) NULL AFTER gender',
        'SELECT ''skip user_profile.email'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'user_profile'
      AND column_name = 'email'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE user_profile ADD COLUMN location_name VARCHAR(100) NULL AFTER email',
        'SELECT ''skip user_profile.location_name'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'user_profile'
      AND column_name = 'location_name'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE merchant ADD COLUMN deleted_at DATETIME NULL AFTER created_at',
        'SELECT ''skip merchant.deleted_at'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'merchant'
      AND column_name = 'deleted_at'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE post ADD COLUMN cooperation_id BIGINT NULL AFTER user_id',
        'SELECT ''skip post.cooperation_id'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'post'
      AND column_name = 'cooperation_id'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE post ADD KEY idx_post_cooperation (cooperation_id)',
        'SELECT ''skip idx_post_cooperation'''
    )
    FROM information_schema.statistics
    WHERE table_schema = @db
      AND table_name = 'post'
      AND index_name = 'idx_post_cooperation'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE creator_cooperation ADD COLUMN cooperation_code VARCHAR(50) NULL AFTER id',
        'SELECT ''skip creator_cooperation.cooperation_code'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'creator_cooperation'
      AND column_name = 'cooperation_code'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE creator_cooperation ADD COLUMN cooperation_desc VARCHAR(500) NULL AFTER cooperation_title',
        'SELECT ''skip creator_cooperation.cooperation_desc'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'creator_cooperation'
      AND column_name = 'cooperation_desc'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE creator_cooperation ADD COLUMN cooperation_mode VARCHAR(30) NOT NULL DEFAULT ''PLATFORM_INVITE'' AFTER cooperation_desc',
        'SELECT ''skip creator_cooperation.cooperation_mode'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'creator_cooperation'
      AND column_name = 'cooperation_mode'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE creator_cooperation ADD COLUMN target_post_count INT NOT NULL DEFAULT 1 AFTER reward_amount',
        'SELECT ''skip creator_cooperation.target_post_count'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'creator_cooperation'
      AND column_name = 'target_post_count'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE creator_cooperation ADD COLUMN target_like_count INT NOT NULL DEFAULT 0 AFTER target_post_count',
        'SELECT ''skip creator_cooperation.target_like_count'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'creator_cooperation'
      AND column_name = 'target_like_count'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE creator_cooperation ADD COLUMN deadline_at DATETIME NULL AFTER target_like_count',
        'SELECT ''skip creator_cooperation.deadline_at'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'creator_cooperation'
      AND column_name = 'deadline_at'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE creator_cooperation ADD COLUMN accepted_at DATETIME NULL AFTER deadline_at',
        'SELECT ''skip creator_cooperation.accepted_at'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'creator_cooperation'
      AND column_name = 'accepted_at'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE creator_cooperation ADD COLUMN reward_issued_at DATETIME NULL AFTER accepted_at',
        'SELECT ''skip creator_cooperation.reward_issued_at'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'creator_cooperation'
      AND column_name = 'reward_issued_at'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE creator_cooperation ADD COLUMN settled_at DATETIME NULL AFTER reward_issued_at',
        'SELECT ''skip creator_cooperation.settled_at'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'creator_cooperation'
      AND column_name = 'settled_at'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE creator_cooperation ADD COLUMN abandoned_at DATETIME NULL AFTER settled_at',
        'SELECT ''skip creator_cooperation.abandoned_at'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'creator_cooperation'
      AND column_name = 'abandoned_at'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE creator_cooperation ADD COLUMN created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP AFTER abandoned_at',
        'SELECT ''skip creator_cooperation.created_at'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'creator_cooperation'
      AND column_name = 'created_at'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE creator_cooperation ADD COLUMN updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP AFTER created_at',
        'SELECT ''skip creator_cooperation.updated_at'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'creator_cooperation'
      AND column_name = 'updated_at'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE creator_cooperation ADD UNIQUE KEY uk_creator_cooperation_code (cooperation_code)',
        'SELECT ''skip creator_cooperation.cooperation_code index'''
    )
    FROM information_schema.statistics
    WHERE table_schema = @db
      AND table_name = 'creator_cooperation'
      AND column_name = 'cooperation_code'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

UPDATE creator_cooperation
SET cooperation_code = CONCAT('coop-', LPAD(id, 6, '0'))
WHERE cooperation_code IS NULL OR TRIM(cooperation_code) = '';

UPDATE creator_cooperation
SET accepted_at = COALESCE(accepted_at, created_at)
WHERE cooperation_status IN (1, 2, 3);

UPDATE creator_cooperation
SET reward_issued_at = COALESCE(reward_issued_at, created_at),
    settled_at = COALESCE(settled_at, reward_issued_at, created_at)
WHERE cooperation_status = 3;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE post_draft ADD COLUMN product_price DECIMAL(10,2) NULL AFTER product_link',
        'SELECT ''skip post_draft.product_price'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'post_draft'
      AND column_name = 'product_price'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE post_draft ADD COLUMN activity_code VARCHAR(50) NULL AFTER product_price',
        'SELECT ''skip post_draft.activity_code'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'post_draft'
      AND column_name = 'activity_code'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE post_draft ADD COLUMN cooperation_code VARCHAR(50) NULL AFTER activity_code',
        'SELECT ''skip post_draft.cooperation_code'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'post_draft'
      AND column_name = 'cooperation_code'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) > 0,
        'UPDATE post_draft d JOIN creator_cooperation c ON c.id = d.cooperation_id SET d.cooperation_code = c.cooperation_code WHERE d.cooperation_code IS NULL OR CHAR_LENGTH(TRIM(d.cooperation_code)) = 0',
        'SELECT ''skip post_draft.cooperation_id backfill'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'post_draft'
      AND column_name = 'cooperation_id'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE commission_record ADD COLUMN cooperation_id BIGINT NULL AFTER user_id',
        'SELECT ''skip commission_record.cooperation_id'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'commission_record'
      AND column_name = 'cooperation_id'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE commission_record ADD COLUMN remark VARCHAR(255) NULL AFTER settlement_status',
        'SELECT ''skip commission_record.remark'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'commission_record'
      AND column_name = 'remark'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE commission_record ADD KEY idx_commission_record_cooperation (cooperation_id)',
        'SELECT ''skip idx_commission_record_cooperation'''
    )
    FROM information_schema.statistics
    WHERE table_schema = @db
      AND table_name = 'commission_record'
      AND index_name = 'idx_commission_record_cooperation'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) > 0,
        'UPDATE commission_record cr JOIN post p ON p.id = cr.post_id SET cr.cooperation_id = p.cooperation_id WHERE cr.cooperation_id IS NULL AND p.cooperation_id IS NOT NULL',
        'SELECT ''skip commission_record.cooperation_id backfill'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'post'
      AND column_name = 'cooperation_id'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE post_comment ADD COLUMN parent_comment_id BIGINT NULL AFTER created_at',
        'SELECT ''skip post_comment.parent_comment_id'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'post_comment'
      AND column_name = 'parent_comment_id'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE post_comment ADD COLUMN reply_user_id BIGINT NULL AFTER parent_comment_id',
        'SELECT ''skip post_comment.reply_user_id'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'post_comment'
      AND column_name = 'reply_user_id'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

CREATE TABLE IF NOT EXISTS post_comment_like (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    comment_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uk_post_comment_like (comment_id, user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE post_comment_like ADD UNIQUE KEY uk_post_comment_like (comment_id, user_id)',
        'SELECT ''skip post_comment_like.uk_post_comment_like'''
    )
    FROM information_schema.statistics
    WHERE table_schema = @db
      AND table_name = 'post_comment_like'
      AND index_name = 'uk_post_comment_like'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE activity_topic ADD COLUMN publish_selectable_flag TINYINT NOT NULL DEFAULT 1 AFTER featured_flag',
        'SELECT ''skip activity_topic.publish_selectable_flag'''
    )
    FROM information_schema.columns
    WHERE table_schema = @db
      AND table_name = 'activity_topic'
      AND column_name = 'publish_selectable_flag'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE post ADD KEY idx_post_status_audit_created (status, audit_status, created_at, id)',
        'SELECT ''skip idx_post_status_audit_created'''
    )
    FROM information_schema.statistics
    WHERE table_schema = @db
      AND table_name = 'post'
      AND index_name = 'idx_post_status_audit_created'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE post ADD KEY idx_post_user_status_audit_updated (user_id, status, audit_status, updated_at, id)',
        'SELECT ''skip idx_post_user_status_audit_updated'''
    )
    FROM information_schema.statistics
    WHERE table_schema = @db
      AND table_name = 'post'
      AND index_name = 'idx_post_user_status_audit_updated'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE post_like ADD KEY idx_post_like_user_created (user_id, created_at, id, post_id)',
        'SELECT ''skip idx_post_like_user_created'''
    )
    FROM information_schema.statistics
    WHERE table_schema = @db
      AND table_name = 'post_like'
      AND index_name = 'idx_post_like_user_created'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE post_favorite ADD KEY idx_post_favorite_user_created (user_id, created_at, id, post_id)',
        'SELECT ''skip idx_post_favorite_user_created'''
    )
    FROM information_schema.statistics
    WHERE table_schema = @db
      AND table_name = 'post_favorite'
      AND index_name = 'idx_post_favorite_user_created'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE user_follow ADD KEY idx_user_follow_followee_created (followee_user_id, created_at, id, follower_user_id)',
        'SELECT ''skip idx_user_follow_followee_created'''
    )
    FROM information_schema.statistics
    WHERE table_schema = @db
      AND table_name = 'user_follow'
      AND index_name = 'idx_user_follow_followee_created'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE user_follow ADD KEY idx_user_follow_follower_created (follower_user_id, created_at, id, followee_user_id)',
        'SELECT ''skip idx_user_follow_follower_created'''
    )
    FROM information_schema.statistics
    WHERE table_schema = @db
      AND table_name = 'user_follow'
      AND index_name = 'idx_user_follow_follower_created'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE post_comment ADD KEY idx_post_comment_post_status_parent_created (post_id, status, parent_comment_id, created_at, id)',
        'SELECT ''skip idx_post_comment_post_status_parent_created'''
    )
    FROM information_schema.statistics
    WHERE table_schema = @db
      AND table_name = 'post_comment'
      AND index_name = 'idx_post_comment_post_status_parent_created'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE message_notification ADD KEY idx_message_user_created (user_id, created_at, id)',
        'SELECT ''skip idx_message_user_created'''
    )
    FROM information_schema.statistics
    WHERE table_schema = @db
      AND table_name = 'message_notification'
      AND index_name = 'idx_message_user_created'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql := (
    SELECT IF(
        COUNT(*) = 0,
        'ALTER TABLE message_notification ADD KEY idx_message_user_read (user_id, read_status)',
        'SELECT ''skip idx_message_user_read'''
    )
    FROM information_schema.statistics
    WHERE table_schema = @db
      AND table_name = 'message_notification'
      AND index_name = 'idx_message_user_read'
);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
