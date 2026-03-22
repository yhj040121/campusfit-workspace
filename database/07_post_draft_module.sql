CREATE TABLE IF NOT EXISTS post_draft (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    draft_code VARCHAR(50) NOT NULL UNIQUE,
    user_id BIGINT NOT NULL,
    title VARCHAR(120),
    description VARCHAR(500),
    image_urls_json TEXT,
    tags_json TEXT,
    product_link VARCHAR(500),
    product_price DECIMAL(10,2),
    activity_code VARCHAR(50),
    status TINYINT NOT NULL DEFAULT 1,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    KEY idx_post_draft_user_status (user_id, status, updated_at),
    CONSTRAINT fk_post_draft_user FOREIGN KEY (user_id) REFERENCES app_user(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
