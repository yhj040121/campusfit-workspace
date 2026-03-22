ALTER TABLE post_comment
    ADD COLUMN parent_comment_id BIGINT NULL AFTER created_at,
    ADD COLUMN reply_user_id BIGINT NULL AFTER parent_comment_id;

CREATE TABLE IF NOT EXISTS post_comment_like (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    comment_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uk_post_comment_like (comment_id, user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
