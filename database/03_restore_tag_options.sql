SET NAMES utf8mb4;

INSERT INTO tag_option (id, category, option_value, sort_order, status) VALUES
    (1, 'scene', '早八', 1, 1),
    (2, 'scene', '图书馆', 2, 1),
    (3, 'scene', '社团活动', 3, 1),
    (4, 'scene', '约会', 4, 1),
    (5, 'scene', '通勤', 5, 1),
    (6, 'scene', '运动', 6, 1),
    (7, 'style', '学院风', 1, 1),
    (8, 'style', '宽松休闲', 2, 1),
    (9, 'style', '甜酷', 3, 1),
    (10, 'style', '极简', 4, 1),
    (11, 'style', '韩系', 5, 1),
    (12, 'style', '清新', 6, 1),
    (13, 'budget', '50-100', 1, 1),
    (14, 'budget', '100-150', 2, 1),
    (15, 'budget', '150-200', 3, 1),
    (16, 'budget', '200+', 4, 1)
ON DUPLICATE KEY UPDATE
    category = VALUES(category),
    option_value = VALUES(option_value),
    sort_order = VALUES(sort_order),
    status = VALUES(status);

ALTER TABLE tag_option AUTO_INCREMENT = 17;
