CREATE TABLE IF NOT EXISTS creator_withdraw_request (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    request_amount DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    request_status TINYINT NOT NULL DEFAULT 0,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    processed_at DATETIME NULL,
    remark VARCHAR(255) NULL,
    CONSTRAINT fk_creator_withdraw_request_user FOREIGN KEY (user_id) REFERENCES app_user(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
