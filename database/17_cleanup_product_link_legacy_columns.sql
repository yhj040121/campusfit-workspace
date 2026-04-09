SET NAMES utf8mb4;
USE campusfit;

-- 在删除历史冗余字段前，先补齐当前运行时仍会使用的展示文案。
UPDATE product_link
SET
    profit_label = COALESCE(NULLIF(profit_label, ''), '导购点击会进入创作者激励统计。'),
    guide_tip = COALESCE(NULLIF(guide_tip, ''), '请结合预算、使用频率和场景需求理性选购。')
WHERE id > 0;

SET @db := DATABASE();

SET @drop_is_partner_product := (
    SELECT IF(
        EXISTS (
            SELECT 1
            FROM information_schema.columns
            WHERE table_schema = @db
              AND table_name = 'product_link'
              AND column_name = 'is_partner_product'
        ),
        'ALTER TABLE product_link DROP COLUMN is_partner_product',
        'SELECT ''skip product_link.is_partner_product'' AS message'
    )
);
PREPARE stmt FROM @drop_is_partner_product;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @drop_commission_rate := (
    SELECT IF(
        EXISTS (
            SELECT 1
            FROM information_schema.columns
            WHERE table_schema = @db
              AND table_name = 'product_link'
              AND column_name = 'commission_rate'
        ),
        'ALTER TABLE product_link DROP COLUMN commission_rate',
        'SELECT ''skip product_link.commission_rate'' AS message'
    )
);
PREPARE stmt FROM @drop_commission_rate;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @drop_last_checked_at := (
    SELECT IF(
        EXISTS (
            SELECT 1
            FROM information_schema.columns
            WHERE table_schema = @db
              AND table_name = 'product_link'
              AND column_name = 'last_checked_at'
        ),
        'ALTER TABLE product_link DROP COLUMN last_checked_at',
        'SELECT ''skip product_link.last_checked_at'' AS message'
    )
);
PREPARE stmt FROM @drop_last_checked_at;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
