SET NAMES utf8mb4;
USE campusfit;

SET @db := DATABASE();

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
