SET NAMES utf8mb4;
START TRANSACTION;

DELETE FROM message_notification
WHERE user_id IN (4, 5, 6, 7, 8)
  AND title IN (
    '新的品牌合作排期待确认',
    '商家合作进入排期',
    '提现申请已受理',
    '提现已完成打款',
    '提现申请未通过'
  );

DELETE FROM creator_withdraw_request WHERE id BETWEEN 2261 AND 2265;
DELETE FROM commission_record WHERE id BETWEEN 2241 AND 2250;
DELETE FROM creator_cooperation WHERE id BETWEEN 2231 AND 2238;
DELETE FROM merchant WHERE id IN (2201, 2202, 2203, 2204);
DELETE FROM post_image WHERE id BETWEEN 2101 AND 2118;

UPDATE app_user SET avatar_url = 'https://api.dicebear.com/7.x/initials/svg?seed=ChenZhixia&backgroundColor=f4d7c8,bfd7ea,d6c4e5', updated_at = NOW() WHERE id = 4;
UPDATE app_user SET avatar_url = 'https://api.dicebear.com/7.x/initials/svg?seed=ZhouYuchuan&backgroundColor=c9e4de,ffd7a8,b8d0eb', updated_at = NOW() WHERE id = 5;
UPDATE app_user SET avatar_url = 'https://api.dicebear.com/7.x/initials/svg?seed=LinWancheng&backgroundColor=f7dec9,e6dced,c5e0dc', updated_at = NOW() WHERE id = 6;
UPDATE app_user SET avatar_url = 'https://api.dicebear.com/7.x/initials/svg?seed=XuJinan&backgroundColor=fde2cf,d7e7f5,eadfca', updated_at = NOW() WHERE id = 7;
UPDATE app_user SET avatar_url = 'https://api.dicebear.com/7.x/initials/svg?seed=SongXubai&backgroundColor=d8dee9,e8d5c4,cddfc8', updated_at = NOW() WHERE id = 8;

UPDATE user_profile SET cover_image_url = 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/83c7839639e8467db19fc265533722b3.jpeg', updated_at = NOW() WHERE user_id = 4;
UPDATE user_profile SET cover_image_url = 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/77a86d9e419147d5855fb95145194063.jpeg', updated_at = NOW() WHERE user_id = 5;
UPDATE user_profile SET cover_image_url = 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/4549721f52894611bfb1094a7d231f99.jpeg', updated_at = NOW() WHERE user_id = 6;
UPDATE user_profile SET cover_image_url = 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/3/2026/03/893b99291dab45cc853a230c59b157f8.jpeg', updated_at = NOW() WHERE user_id = 7;
UPDATE user_profile SET cover_image_url = 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/1c4d565b394b4e31b5cbc1e127d61cb3.jpeg', updated_at = NOW() WHERE user_id = 8;

UPDATE post SET cover_image_url = 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/3/2026/03/893b99291dab45cc853a230c59b157f8.jpeg', updated_at = NOW() WHERE id = 101;
UPDATE post SET cover_image_url = 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/83c7839639e8467db19fc265533722b3.jpeg', updated_at = NOW() WHERE id = 102;
UPDATE post SET cover_image_url = 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/77a86d9e419147d5855fb95145194063.jpeg', updated_at = NOW() WHERE id = 103;
UPDATE post SET cover_image_url = 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/4549721f52894611bfb1094a7d231f99.jpeg', updated_at = NOW() WHERE id = 104;
UPDATE post SET cover_image_url = 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/039fd0666d664dad8549d61b2f14aa9d.jpeg', updated_at = NOW() WHERE id = 105;
UPDATE post SET cover_image_url = 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/1c4d565b394b4e31b5cbc1e127d61cb3.jpeg', updated_at = NOW() WHERE id = 106;

INSERT INTO post_image (id, post_id, image_url, sort_order, created_at) VALUES
    (2101, 101, 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/3/2026/03/893b99291dab45cc853a230c59b157f8.jpeg', 1, DATE_SUB(NOW(), INTERVAL 30 HOUR)),
    (2102, 101, 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/039fd0666d664dad8549d61b2f14aa9d.jpeg', 2, DATE_SUB(NOW(), INTERVAL 30 HOUR)),
    (2103, 101, 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/16a64eeeb38941869810ec062e8b18eb.jpeg', 3, DATE_SUB(NOW(), INTERVAL 30 HOUR)),
    (2104, 102, 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/83c7839639e8467db19fc265533722b3.jpeg', 1, DATE_SUB(NOW(), INTERVAL 26 HOUR)),
    (2105, 102, 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/7d9209ad836f456ba1b339feda207ec3.jpeg', 2, DATE_SUB(NOW(), INTERVAL 26 HOUR)),
    (2106, 102, 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/1c4d565b394b4e31b5cbc1e127d61cb3.jpeg', 3, DATE_SUB(NOW(), INTERVAL 26 HOUR)),
    (2107, 103, 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/77a86d9e419147d5855fb95145194063.jpeg', 1, DATE_SUB(NOW(), INTERVAL 18 HOUR)),
    (2108, 103, 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/eea3059a4c744bd4981ce9fb805d620c.jpeg', 2, DATE_SUB(NOW(), INTERVAL 18 HOUR)),
    (2109, 103, 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/c4c6cfd7503e477fa2f2c4779eb40b37.jpeg', 3, DATE_SUB(NOW(), INTERVAL 18 HOUR)),
    (2110, 104, 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/4549721f52894611bfb1094a7d231f99.jpeg', 1, DATE_SUB(NOW(), INTERVAL 12 HOUR)),
    (2111, 104, 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/c36bc65e205143459a76b09630436a8e.jpeg', 2, DATE_SUB(NOW(), INTERVAL 12 HOUR)),
    (2112, 104, 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/8db7000f5bf348bea013568fdfc72f8b.jpeg', 3, DATE_SUB(NOW(), INTERVAL 12 HOUR)),
    (2113, 105, 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/039fd0666d664dad8549d61b2f14aa9d.jpeg', 1, DATE_SUB(NOW(), INTERVAL 8 HOUR)),
    (2114, 105, 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/83c7839639e8467db19fc265533722b3.jpeg', 2, DATE_SUB(NOW(), INTERVAL 8 HOUR)),
    (2115, 105, 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/7d9209ad836f456ba1b339feda207ec3.jpeg', 3, DATE_SUB(NOW(), INTERVAL 8 HOUR)),
    (2116, 106, 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/1c4d565b394b4e31b5cbc1e127d61cb3.jpeg', 1, DATE_SUB(NOW(), INTERVAL 3 HOUR)),
    (2117, 106, 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/c4c6cfd7503e477fa2f2c4779eb40b37.jpeg', 2, DATE_SUB(NOW(), INTERVAL 3 HOUR)),
    (2118, 106, 'https://campusfit.oss-cn-hangzhou.aliyuncs.com/post-images/2/2026/03/4549721f52894611bfb1094a7d231f99.jpeg', 3, DATE_SUB(NOW(), INTERVAL 3 HOUR));

INSERT INTO merchant (id, merchant_name, contact_name, contact_phone, cooperation_status, remark, created_at) VALUES
    (2201, '暖屿衣研室', 'Mia', '13800022001', 1, '偏学院风与图书馆场景的校园合作品牌。', DATE_SUB(NOW(), INTERVAL 20 DAY)),
    (2202, '松弛通勤实验室', 'Allen', '13800022002', 1, '聚焦学生通勤、实习切换和基础款复穿。', DATE_SUB(NOW(), INTERVAL 18 DAY)),
    (2203, '青柚运动局', 'Cici', '13800022003', 1, '主打社团招新、操场活动和轻运动混搭。', DATE_SUB(NOW(), INTERVAL 16 DAY)),
    (2204, '雾岚质感选物', 'Rita', '13800022004', 0, '偏低饱和审美的女生日常与约会合作线。', DATE_SUB(NOW(), INTERVAL 12 DAY));

INSERT INTO creator_cooperation (id, user_id, merchant_id, cooperation_title, cooperation_status, reward_amount, created_at) VALUES
    (2231, 4, 2201, '图书馆学院风共创排期', 1, 168.00, DATE_SUB(NOW(), INTERVAL 10 DAY)),
    (2232, 4, 2202, '实习通勤针织专题', 0, 132.00, DATE_SUB(NOW(), INTERVAL 7 DAY)),
    (2233, 5, 2203, '社团招新运动混搭合作', 1, 156.00, DATE_SUB(NOW(), INTERVAL 8 DAY)),
    (2234, 6, 2204, '低饱和约会内容测试', 0, 118.00, DATE_SUB(NOW(), INTERVAL 6 DAY)),
    (2235, 7, 2202, '预算通勤复穿清单', 1, 96.00, DATE_SUB(NOW(), INTERVAL 5 DAY)),
    (2236, 8, 2203, '理工通勤背包合作样片', 1, 144.00, DATE_SUB(NOW(), INTERVAL 4 DAY)),
    (2237, 8, 2202, '功能性通勤专题储备', 0, 88.00, DATE_SUB(NOW(), INTERVAL 3 DAY)),
    (2238, 5, 2201, '春季社团学院风联动', 0, 102.00, DATE_SUB(NOW(), INTERVAL 2 DAY));

INSERT INTO commission_record (id, post_id, user_id, income_type, commission_amount, settlement_status, created_at) VALUES
    (2241, 102, 4, '品牌合作', 72.00, 1, DATE_SUB(NOW(), INTERVAL 22 HOUR)),
    (2242, 101, 4, '导购佣金', 33.50, 0, DATE_SUB(NOW(), INTERVAL 6 HOUR)),
    (2243, 103, 5, '品牌分成', 66.00, 1, DATE_SUB(NOW(), INTERVAL 20 HOUR)),
    (2244, 103, 5, '活动激励', 41.80, 0, DATE_SUB(NOW(), INTERVAL 5 HOUR)),
    (2245, 104, 6, '品牌分成', 54.00, 1, DATE_SUB(NOW(), INTERVAL 18 HOUR)),
    (2246, 104, 6, '活动激励', 22.00, 1, DATE_SUB(NOW(), INTERVAL 11 HOUR)),
    (2247, 105, 7, '导购佣金', 38.60, 1, DATE_SUB(NOW(), INTERVAL 14 HOUR)),
    (2248, 105, 7, '校园扶持', 18.00, 0, DATE_SUB(NOW(), INTERVAL 4 HOUR)),
    (2249, 106, 8, '品牌分成', 47.20, 1, DATE_SUB(NOW(), INTERVAL 16 HOUR)),
    (2250, 106, 8, '商家扶持', 28.00, 0, DATE_SUB(NOW(), INTERVAL 3 HOUR));

INSERT INTO creator_withdraw_request (id, user_id, request_amount, request_status, created_at, processed_at, remark) VALUES
    (2261, 4, 48.00, 0, DATE_SUB(NOW(), INTERVAL 3 HOUR), NULL, '校园新星计划首批激励，等待财务复核'),
    (2262, 5, 20.00, 1, DATE_SUB(NOW(), INTERVAL 20 HOUR), DATE_SUB(NOW(), INTERVAL 10 HOUR), '已完成对公转账，保留作演示样例'),
    (2263, 6, 25.00, 2, DATE_SUB(NOW(), INTERVAL 18 HOUR), DATE_SUB(NOW(), INTERVAL 17 HOUR), '收款信息待补充，建议完善后重新提交'),
    (2264, 7, 12.00, 0, DATE_SUB(NOW(), INTERVAL 4 HOUR), NULL, '预算通勤专题结算后发起提现'),
    (2265, 8, 32.00, 1, DATE_SUB(NOW(), INTERVAL 30 HOUR), DATE_SUB(NOW(), INTERVAL 24 HOUR), '商家扶持计划激励已打款');

INSERT INTO message_notification (user_id, message_type, title, content, read_status, created_at) VALUES
    (4, '合作通知', '新的品牌合作排期待确认', '暖屿衣研室已给你发来图书馆学院风共创排期，建议确认拍摄与发布时间。', 0, DATE_SUB(NOW(), INTERVAL 100 MINUTE)),
    (5, '激励通知', '提现已完成打款', '你的 20.00 元创作激励提现已完成打款，可在激励中心查看处理记录。', 0, DATE_SUB(NOW(), INTERVAL 9 HOUR)),
    (6, '激励通知', '提现申请未通过', '本次提现因收款信息不完整被退回，补充后可重新提交。', 0, DATE_SUB(NOW(), INTERVAL 16 HOUR)),
    (7, '激励通知', '提现申请已受理', '你的 12.00 元提现申请已进入财务复核流程，预计 1-2 个工作日内处理。', 0, DATE_SUB(NOW(), INTERVAL 2 HOUR)),
    (8, '合作通知', '商家合作进入排期', '青柚运动局已将你的理工通勤背包合作样片加入下周首页资源位候选。', 0, DATE_SUB(NOW(), INTERVAL 70 MINUTE));

COMMIT;
