SET @password_hash_exists := (
    SELECT COUNT(*)
    FROM information_schema.COLUMNS
    WHERE TABLE_SCHEMA = DATABASE()
      AND TABLE_NAME = 'app_user'
      AND COLUMN_NAME = 'password_hash'
);

SET @password_hash_sql := IF(
    @password_hash_exists = 0,
    'ALTER TABLE app_user ADD COLUMN password_hash VARCHAR(255) NULL AFTER avatar_url',
    'SELECT 1'
);

PREPARE password_hash_stmt FROM @password_hash_sql;
EXECUTE password_hash_stmt;
DEALLOCATE PREPARE password_hash_stmt;

UPDATE app_user
SET password_hash = NULL
WHERE password_hash = '';
