SET NAMES utf8mb4;
USE campusfit;

CREATE TABLE IF NOT EXISTS product_link_click (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    post_id BIGINT NOT NULL,
    product_link_id BIGINT NOT NULL,
    click_user_id BIGINT NULL,
    source_page VARCHAR(50) NOT NULL DEFAULT 'product_jump',
    source_action VARCHAR(50) NOT NULL DEFAULT 'jump_out',
    target_url VARCHAR(500) NOT NULL,
    platform_name VARCHAR(50) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    KEY idx_product_link_click_post_created (post_id, created_at),
    KEY idx_product_link_click_user_created (click_user_id, created_at),
    CONSTRAINT fk_product_link_click_post FOREIGN KEY (post_id) REFERENCES post(id),
    CONSTRAINT fk_product_link_click_product_link FOREIGN KEY (product_link_id) REFERENCES product_link(id),
    CONSTRAINT fk_product_link_click_user FOREIGN KEY (click_user_id) REFERENCES app_user(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

UPDATE product_link
SET
    profit_label = CASE
        WHEN COALESCE(is_partner_product, 0) = 0 THEN '品牌合作分成'
        WHEN commission_rate >= 8.00 THEN '平台导购佣金 8%'
        WHEN commission_rate >= 6.00 THEN '平台导购佣金 6%'
        ELSE '平台导购佣金 5%'
    END,
    guide_tip = '请结合预算、使用频率和场景需求理性选购。'
WHERE id > 0;

UPDATE commission_record
SET income_type = CASE
    WHEN income_type IN ('导购佣金', '导购收益', '推广佣金', '推广激励') THEN '导购佣金'
    WHEN income_type IN ('品牌分成', '合作分成', '品牌合作奖励') THEN '品牌分成'
    ELSE income_type
END;
