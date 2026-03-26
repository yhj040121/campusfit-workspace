SET NAMES utf8mb4;
START TRANSACTION;

DELETE FROM product_link_click WHERE post_id IN (101, 102, 103, 104, 105, 106);
DELETE FROM post_activity_binding WHERE post_id IN (101, 102, 103, 104, 105, 106);
DELETE FROM post_comment_like WHERE comment_id BETWEEN 1301 AND 1314;
DELETE FROM post_comment WHERE id BETWEEN 1301 AND 1314;
DELETE FROM post_like WHERE id BETWEEN 1401 AND 1421;
DELETE FROM post_favorite WHERE id BETWEEN 1451 AND 1466;
DELETE FROM product_link WHERE post_id IN (101, 102, 103, 104, 105, 106);
DELETE FROM post_tag WHERE post_id IN (101, 102, 103, 104, 105, 106);
DELETE FROM post_image WHERE post_id IN (101, 102, 103, 104, 105, 106);
DELETE FROM commission_record WHERE id BETWEEN 1601 AND 1603;
DELETE FROM user_activity_join WHERE id BETWEEN 1511 AND 1515;
DELETE FROM post WHERE id IN (101, 102, 103, 104, 105, 106);
DELETE FROM message_notification
WHERE user_id IN (4, 5, 6, 7, 8)
  AND title IN (
    '你的内容收到新评论',
    '你的图书馆搭配被收藏了',
    '社团活动穿搭进入热门',
    '你的约会搭配收到了新回复',
    '预算通勤穿搭被加入收藏',
    '功能性通勤搭配获得新点赞'
  );

INSERT INTO post (
    id, post_code, user_id, title, subtitle, description, scene_tag, style_tag, budget_tag,
    cover_tag, cover_image_url, status, audit_status, like_count, comment_count,
    favorite_count, share_count, created_at, updated_at
) VALUES
    (
        101, 'dchen-early-blue', 4,
        '早八教室到图书馆都能穿的蓝灰学院风',
        '蓝灰叠穿干净利落，坐一整天教室也不会闷。',
        '这套是白衬衫叠浅灰针织背心，再配雾蓝直筒半裙和轻底乐福鞋。颜色很克制，但在教室灯光和图书馆自然光里都很显干净，适合早八、答辩练习和一整天都在校内移动的节奏。',
        '早八', '学院风', '100-150',
        '蓝灰学院感', NULL, 1, 1, 4, 3, 3, 2,
        DATE_SUB(NOW(), INTERVAL 30 HOUR), DATE_SUB(NOW(), INTERVAL 30 HOUR)
    ),
    (
        102, 'dchen-knit-intern', 4,
        '实习日也不显紧绷的通勤针织叠穿',
        '软针织和直筒裤组合，上课后去实习也不需要再换。',
        '上身用了米杏色轻针织配内搭背心，下装是高腰深灰直筒裤和低调的小皮鞋。整体看起来比纯黑通勤装柔和一些，适合要在教室、地铁和公司之间来回切换的日子。',
        '通勤', '韩系', '150-200',
        '柔和通勤感', NULL, 1, 1, 3, 2, 2, 1,
        DATE_SUB(NOW(), INTERVAL 26 HOUR), DATE_SUB(NOW(), INTERVAL 26 HOUR)
    ),
    (
        103, 'dzhou-club-sport', 5,
        '社团招新当天最省心的运动混搭',
        '活动量大也能保持利落，拍照和摆摊都不容易出错。',
        '灰白卫衣外搭轻量防风外套，下装用了黑色工装短裤和长袜运动鞋。整套很适合招新、路演或者在操场边来回跑的场景，既有活动感，也不会因为过度造型耽误行动。',
        '社团活动', '宽松休闲', '150-200',
        '社团活力感', NULL, 1, 1, 4, 3, 3, 2,
        DATE_SUB(NOW(), INTERVAL 18 HOUR), DATE_SUB(NOW(), INTERVAL 18 HOUR)
    ),
    (
        104, 'dlin-date-apricot', 6,
        '低饱和奶杏色约会搭配，拍照也自然',
        '轻薄开衫和连衣裙的组合，不会太正式，也不会太松散。',
        '我把奶杏色短开衫搭在同色系连衣裙外面，再配一双干净的小白鞋和帆布包。整套更强调温柔和松弛，适合校园散步、咖啡馆或者傍晚约会，不需要夸张配饰也能显得很完整。',
        '约会', '清新', '150-200',
        '奶杏约会感', NULL, 1, 1, 3, 2, 3, 2,
        DATE_SUB(NOW(), INTERVAL 12 HOUR), DATE_SUB(NOW(), INTERVAL 12 HOUR)
    ),
    (
        105, 'dxu-budget-commute', 7,
        '预算 150 内搞定一整套教室通勤穿搭',
        '基础白T、牛仔和帆布鞋就能撑起高频校园通勤。',
        '这套的重点不是堆单品，而是把预算放在最常穿的基础款上。白T、浅蓝牛仔裤和帆布鞋都是高频复穿单品，适合教室、食堂、图书馆一路切换，学生党也比较好抄作业。',
        '通勤', '极简', '100-150',
        '预算通勤感', NULL, 1, 1, 3, 2, 2, 1,
        DATE_SUB(NOW(), INTERVAL 8 HOUR), DATE_SUB(NOW(), INTERVAL 8 HOUR)
    ),
    (
        106, 'dsong-tech-layer', 8,
        '理工科也能穿出层次的功能性通勤搭配',
        '轻机能外套和功能背包的组合，适合实验室和长距离移动。',
        '上身是炭灰轻机能外套配浅色内搭，下身用了宽松工装长裤，背包选择了有分区的通勤款。对需要背电脑、实验本或者常走远路的人来说，这套更实用，也不会显得太沉闷。',
        '通勤', '极简', '200+',
        '理工通勤感', NULL, 1, 1, 2, 2, 2, 1,
        DATE_SUB(NOW(), INTERVAL 3 HOUR), DATE_SUB(NOW(), INTERVAL 3 HOUR)
    );

INSERT INTO post_tag (id, post_id, tag_type, tag_value, created_at) VALUES
    (1101, 101, 'highlight', '图书馆友好', NOW()),
    (1102, 101, 'highlight', '早八耐看', NOW()),
    (1103, 101, 'highlight', '蓝灰层次', NOW()),
    (1104, 102, 'highlight', '实习通勤', NOW()),
    (1105, 102, 'highlight', '柔软针织', NOW()),
    (1106, 102, 'highlight', '可直接复穿', NOW()),
    (1107, 103, 'highlight', '社团招新', NOW()),
    (1108, 103, 'highlight', '活动量友好', NOW()),
    (1109, 103, 'highlight', '运动混搭', NOW()),
    (1110, 104, 'highlight', '低饱和配色', NOW()),
    (1111, 104, 'highlight', '约会自然感', NOW()),
    (1112, 104, 'highlight', '拍照出片', NOW()),
    (1113, 105, 'highlight', '预算真实', NOW()),
    (1114, 105, 'highlight', '教室通勤', NOW()),
    (1115, 105, 'highlight', '高频基础款', NOW()),
    (1116, 106, 'highlight', '机能通勤', NOW()),
    (1117, 106, 'highlight', '背包友好', NOW()),
    (1118, 106, 'highlight', '理工日常', NOW());

INSERT INTO product_link (
    id, post_id, product_name, platform_name, product_url, link_status, is_partner_product,
    commission_rate, price_amount, profit_label, guide_tip, last_checked_at, created_at
) VALUES
    (1201, 101, '蓝灰学院风三件套', '淘宝 / 天猫', 'https://s.taobao.com/search?q=%E8%93%9D%E7%81%B0%20%E5%AD%A6%E9%99%A2%E9%A3%8E%20%E8%A1%AC%E8%A1%AB%20%E9%92%88%E7%BB%87%20%E5%8D%8A%E8%A3%99', 1, 1, 7.50, 139.00, '导购点击会进入创作者激励统计。', '适合教室和图书馆高频切换，优先看面料透气度。', NOW(), NOW()),
    (1202, 102, '米杏通勤针织套装', '京东', 'https://search.jd.com/Search?keyword=%E7%B1%B3%E6%9D%8F%20%E9%92%88%E7%BB%87%20%E9%80%9A%E5%8B%A4%20%E7%9B%B4%E7%AD%92%E8%A3%A4', 1, 1, 6.00, 179.00, '通勤类内容会计入平台导购分析。', '如果要坐地铁和走校园长路，建议优先选轻薄针织。', NOW(), NOW()),
    (1203, 103, '社团活动运动混搭套装', '淘宝 / 天猫', 'https://s.taobao.com/search?q=%E7%A4%BE%E5%9B%A2%20%E6%B4%BB%E5%8A%A8%20%E8%BF%90%E5%8A%A8%E6%B7%B7%E6%90%AD', 1, 1, 6.80, 199.00, '合作活动内容会额外进入热度评估。', '招新和摆摊类场景优先考虑活动量与耐脏度。', NOW(), NOW()),
    (1204, 104, '奶杏色约会搭配套装', '淘宝 / 天猫', 'https://s.taobao.com/search?q=%E5%A5%B6%E6%9D%8F%E8%89%B2%20%E7%BA%A6%E4%BC%9A%20%E8%BF%9E%E8%A1%A3%E8%A3%99%20%E5%BC%80%E8%A1%AB', 1, 0, 6.20, 188.00, '这类温柔风内容适合做高收藏转化。', '如果要拍照，建议优先看裙长和开衫版型。', NOW(), NOW()),
    (1205, 105, '预算友好教室通勤套装', '拼多多', 'https://mobile.yangkeduo.com/search_result.html?search_key=%E7%99%BDT%20%E7%89%9B%E4%BB%94%E8%A3%A4%20%E5%B8%86%E5%B8%83%E9%9E%8B%20%E5%AD%A6%E7%94%9F', 1, 1, 5.50, 128.00, '学生预算型内容会重点看收藏和复穿反馈。', '高频通勤优先买最容易重复搭配的单品。', NOW(), NOW()),
    (1206, 106, '理工通勤机能组合', '京东', 'https://search.jd.com/Search?keyword=%E6%9C%BA%E8%83%BD%20%E9%80%9A%E5%8B%A4%20%E8%83%8C%E5%8C%85%20%E5%B7%A5%E8%A3%85%E8%A3%A4', 1, 1, 6.50, 239.00, '功能性内容会进入商家扶持计划观察池。', '背电脑和实验资料时，优先看背包分区和外套重量。', NOW(), NOW());

INSERT INTO post_like (id, post_id, user_id, created_at) VALUES
    (1401, 101, 5, DATE_SUB(NOW(), INTERVAL 20 HOUR)),
    (1402, 101, 6, DATE_SUB(NOW(), INTERVAL 18 HOUR)),
    (1403, 101, 7, DATE_SUB(NOW(), INTERVAL 16 HOUR)),
    (1404, 101, 8, DATE_SUB(NOW(), INTERVAL 14 HOUR)),
    (1405, 102, 5, DATE_SUB(NOW(), INTERVAL 19 HOUR)),
    (1406, 102, 6, DATE_SUB(NOW(), INTERVAL 17 HOUR)),
    (1407, 102, 7, DATE_SUB(NOW(), INTERVAL 15 HOUR)),
    (1408, 103, 4, DATE_SUB(NOW(), INTERVAL 12 HOUR)),
    (1409, 103, 6, DATE_SUB(NOW(), INTERVAL 10 HOUR)),
    (1410, 103, 7, DATE_SUB(NOW(), INTERVAL 9 HOUR)),
    (1411, 103, 8, DATE_SUB(NOW(), INTERVAL 8 HOUR)),
    (1412, 104, 4, DATE_SUB(NOW(), INTERVAL 7 HOUR)),
    (1413, 104, 5, DATE_SUB(NOW(), INTERVAL 6 HOUR)),
    (1414, 104, 7, DATE_SUB(NOW(), INTERVAL 5 HOUR)),
    (1415, 105, 4, DATE_SUB(NOW(), INTERVAL 4 HOUR)),
    (1416, 105, 5, DATE_SUB(NOW(), INTERVAL 3 HOUR)),
    (1417, 105, 6, DATE_SUB(NOW(), INTERVAL 2 HOUR)),
    (1418, 106, 4, DATE_SUB(NOW(), INTERVAL 100 MINUTE)),
    (1419, 106, 5, DATE_SUB(NOW(), INTERVAL 80 MINUTE));

INSERT INTO post_favorite (id, post_id, user_id, created_at) VALUES
    (1451, 101, 5, DATE_SUB(NOW(), INTERVAL 18 HOUR)),
    (1452, 101, 6, DATE_SUB(NOW(), INTERVAL 16 HOUR)),
    (1453, 101, 7, DATE_SUB(NOW(), INTERVAL 12 HOUR)),
    (1454, 102, 5, DATE_SUB(NOW(), INTERVAL 17 HOUR)),
    (1455, 102, 8, DATE_SUB(NOW(), INTERVAL 13 HOUR)),
    (1456, 103, 4, DATE_SUB(NOW(), INTERVAL 11 HOUR)),
    (1457, 103, 6, DATE_SUB(NOW(), INTERVAL 9 HOUR)),
    (1458, 103, 7, DATE_SUB(NOW(), INTERVAL 7 HOUR)),
    (1459, 104, 4, DATE_SUB(NOW(), INTERVAL 6 HOUR)),
    (1460, 104, 5, DATE_SUB(NOW(), INTERVAL 5 HOUR)),
    (1461, 104, 7, DATE_SUB(NOW(), INTERVAL 4 HOUR)),
    (1462, 105, 4, DATE_SUB(NOW(), INTERVAL 3 HOUR)),
    (1463, 105, 6, DATE_SUB(NOW(), INTERVAL 2 HOUR)),
    (1464, 106, 4, DATE_SUB(NOW(), INTERVAL 90 MINUTE)),
    (1465, 106, 5, DATE_SUB(NOW(), INTERVAL 70 MINUTE));

INSERT INTO post_comment (
    id, post_id, user_id, content, like_count, status, created_at, parent_comment_id, reply_user_id
) VALUES
    (1301, 101, 5, '这个配色在教室灯光下会特别干净，早八拍照也不会显脸色差。', 2, 1, DATE_SUB(NOW(), INTERVAL 13 HOUR), NULL, NULL),
    (1302, 101, 6, '图书馆空调房里这样叠穿真的更实用，而且坐久了也不会勒。', 1, 1, DATE_SUB(NOW(), INTERVAL 11 HOUR), NULL, NULL),
    (1303, 101, 7, '我也觉得，蓝灰色比纯黑更适合校园场景。', 0, 1, DATE_SUB(NOW(), INTERVAL 10 HOUR), 1301, 5),
    (1304, 102, 8, '这套从上课切换到实习真的很顺，不会太正式但也不松垮。', 1, 1, DATE_SUB(NOW(), INTERVAL 9 HOUR), NULL, NULL),
    (1305, 102, 5, '包如果选深棕或者炭灰，会和裤子更连贯。', 0, 1, DATE_SUB(NOW(), INTERVAL 8 HOUR), NULL, NULL),
    (1306, 103, 4, '招新那种要来回走动的日子，这套确实比纯工装更轻快。', 1, 1, DATE_SUB(NOW(), INTERVAL 7 HOUR), NULL, NULL),
    (1307, 103, 7, '运动鞋配长袜这个处理很有社团活动当天的氛围。', 2, 1, DATE_SUB(NOW(), INTERVAL 6 HOUR), NULL, NULL),
    (1308, 103, 6, '如果晚上还有活动，外套可以再加一层薄的防风。', 0, 1, DATE_SUB(NOW(), INTERVAL 5 HOUR), NULL, NULL),
    (1309, 104, 4, '奶杏色在校园里很自然，不会有过度打扮的压力。', 1, 1, DATE_SUB(NOW(), INTERVAL 4 HOUR), NULL, NULL),
    (1310, 104, 8, '对，而且这种版型对小个子也比较友好。', 0, 1, DATE_SUB(NOW(), INTERVAL 220 MINUTE), 1309, 4),
    (1311, 105, 4, '预算卡得很真实，学生党真的会愿意直接抄作业。', 1, 1, DATE_SUB(NOW(), INTERVAL 170 MINUTE), NULL, NULL),
    (1312, 105, 6, '这套从教室到食堂一路走都不会累赘。', 0, 1, DATE_SUB(NOW(), INTERVAL 140 MINUTE), NULL, NULL),
    (1313, 106, 4, '背包和外套的比例很稳，理工科通勤真的很需要这种思路。', 1, 1, DATE_SUB(NOW(), INTERVAL 85 MINUTE), NULL, NULL),
    (1314, 106, 5, '这套看起来很适合背电脑和实验本的人。', 0, 1, DATE_SUB(NOW(), INTERVAL 60 MINUTE), NULL, NULL);

INSERT INTO post_comment_like (id, comment_id, user_id, created_at) VALUES
    (1351, 1301, 4, DATE_SUB(NOW(), INTERVAL 12 HOUR)),
    (1352, 1301, 6, DATE_SUB(NOW(), INTERVAL 11 HOUR)),
    (1353, 1302, 4, DATE_SUB(NOW(), INTERVAL 10 HOUR)),
    (1354, 1304, 4, DATE_SUB(NOW(), INTERVAL 8 HOUR)),
    (1355, 1306, 5, DATE_SUB(NOW(), INTERVAL 6 HOUR)),
    (1356, 1307, 4, DATE_SUB(NOW(), INTERVAL 5 HOUR)),
    (1357, 1307, 8, DATE_SUB(NOW(), INTERVAL 4 HOUR)),
    (1358, 1309, 6, DATE_SUB(NOW(), INTERVAL 3 HOUR)),
    (1359, 1311, 7, DATE_SUB(NOW(), INTERVAL 130 MINUTE)),
    (1360, 1313, 8, DATE_SUB(NOW(), INTERVAL 70 MINUTE));

INSERT INTO post_activity_binding (id, post_id, activity_id, created_at, updated_at) VALUES
    (1501, 101, 1, NOW(), NOW()),
    (1502, 103, 1, NOW(), NOW()),
    (1503, 104, 1, NOW(), NOW()),
    (1504, 105, 2, NOW(), NOW()),
    (1505, 106, 2, NOW(), NOW());

INSERT INTO user_activity_join (id, activity_id, user_id, created_at) VALUES
    (1511, 1, 4, DATE_SUB(NOW(), INTERVAL 9 DAY)),
    (1512, 1, 5, DATE_SUB(NOW(), INTERVAL 8 DAY)),
    (1513, 1, 6, DATE_SUB(NOW(), INTERVAL 7 DAY)),
    (1514, 2, 7, DATE_SUB(NOW(), INTERVAL 5 DAY)),
    (1515, 2, 8, DATE_SUB(NOW(), INTERVAL 4 DAY));

INSERT INTO product_link_click (
    id, post_id, product_link_id, click_user_id, source_page, source_action,
    target_url, platform_name, created_at
) VALUES
    (1251, 101, 1201, 5, 'product_jump', 'jump_out', 'https://s.taobao.com/search?q=%E8%93%9D%E7%81%B0%20%E5%AD%A6%E9%99%A2%E9%A3%8E%20%E8%A1%AC%E8%A1%AB%20%E9%92%88%E7%BB%87%20%E5%8D%8A%E8%A3%99', '淘宝 / 天猫', DATE_SUB(NOW(), INTERVAL 15 HOUR)),
    (1252, 101, 1201, 6, 'product_jump', 'jump_out', 'https://s.taobao.com/search?q=%E8%93%9D%E7%81%B0%20%E5%AD%A6%E9%99%A2%E9%A3%8E%20%E8%A1%AC%E8%A1%AB%20%E9%92%88%E7%BB%87%20%E5%8D%8A%E8%A3%99', '淘宝 / 天猫', DATE_SUB(NOW(), INTERVAL 13 HOUR)),
    (1253, 101, 1201, 7, 'product_jump', 'jump_out', 'https://s.taobao.com/search?q=%E8%93%9D%E7%81%B0%20%E5%AD%A6%E9%99%A2%E9%A3%8E%20%E8%A1%AC%E8%A1%AB%20%E9%92%88%E7%BB%87%20%E5%8D%8A%E8%A3%99', '淘宝 / 天猫', DATE_SUB(NOW(), INTERVAL 12 HOUR)),
    (1254, 102, 1202, 5, 'product_jump', 'jump_out', 'https://search.jd.com/Search?keyword=%E7%B1%B3%E6%9D%8F%20%E9%92%88%E7%BB%87%20%E9%80%9A%E5%8B%A4%20%E7%9B%B4%E7%AD%92%E8%A3%A4', '京东', DATE_SUB(NOW(), INTERVAL 12 HOUR)),
    (1255, 102, 1202, 8, 'product_jump', 'jump_out', 'https://search.jd.com/Search?keyword=%E7%B1%B3%E6%9D%8F%20%E9%92%88%E7%BB%87%20%E9%80%9A%E5%8B%A4%20%E7%9B%B4%E7%AD%92%E8%A3%A4', '京东', DATE_SUB(NOW(), INTERVAL 10 HOUR)),
    (1256, 103, 1203, 4, 'product_jump', 'jump_out', 'https://s.taobao.com/search?q=%E7%A4%BE%E5%9B%A2%20%E6%B4%BB%E5%8A%A8%20%E8%BF%90%E5%8A%A8%E6%B7%B7%E6%90%AD', '淘宝 / 天猫', DATE_SUB(NOW(), INTERVAL 9 HOUR)),
    (1257, 103, 1203, 6, 'product_jump', 'jump_out', 'https://s.taobao.com/search?q=%E7%A4%BE%E5%9B%A2%20%E6%B4%BB%E5%8A%A8%20%E8%BF%90%E5%8A%A8%E6%B7%B7%E6%90%AD', '淘宝 / 天猫', DATE_SUB(NOW(), INTERVAL 8 HOUR)),
    (1258, 103, 1203, 7, 'product_jump', 'jump_out', 'https://s.taobao.com/search?q=%E7%A4%BE%E5%9B%A2%20%E6%B4%BB%E5%8A%A8%20%E8%BF%90%E5%8A%A8%E6%B7%B7%E6%90%AD', '淘宝 / 天猫', DATE_SUB(NOW(), INTERVAL 7 HOUR)),
    (1259, 103, 1203, 8, 'product_jump', 'jump_out', 'https://s.taobao.com/search?q=%E7%A4%BE%E5%9B%A2%20%E6%B4%BB%E5%8A%A8%20%E8%BF%90%E5%8A%A8%E6%B7%B7%E6%90%AD', '淘宝 / 天猫', DATE_SUB(NOW(), INTERVAL 6 HOUR)),
    (1260, 104, 1204, 4, 'product_jump', 'jump_out', 'https://s.taobao.com/search?q=%E5%A5%B6%E6%9D%8F%E8%89%B2%20%E7%BA%A6%E4%BC%9A%20%E8%BF%9E%E8%A1%A3%E8%A3%99%20%E5%BC%80%E8%A1%AB', '淘宝 / 天猫', DATE_SUB(NOW(), INTERVAL 5 HOUR)),
    (1261, 104, 1204, 5, 'product_jump', 'jump_out', 'https://s.taobao.com/search?q=%E5%A5%B6%E6%9D%8F%E8%89%B2%20%E7%BA%A6%E4%BC%9A%20%E8%BF%9E%E8%A1%A3%E8%A3%99%20%E5%BC%80%E8%A1%AB', '淘宝 / 天猫', DATE_SUB(NOW(), INTERVAL 4 HOUR)),
    (1262, 104, 1204, 7, 'product_jump', 'jump_out', 'https://s.taobao.com/search?q=%E5%A5%B6%E6%9D%8F%E8%89%B2%20%E7%BA%A6%E4%BC%9A%20%E8%BF%9E%E8%A1%A3%E8%A3%99%20%E5%BC%80%E8%A1%AB', '淘宝 / 天猫', DATE_SUB(NOW(), INTERVAL 3 HOUR)),
    (1263, 105, 1205, 4, 'product_jump', 'jump_out', 'https://mobile.yangkeduo.com/search_result.html?search_key=%E7%99%BDT%20%E7%89%9B%E4%BB%94%E8%A3%A4%20%E5%B8%86%E5%B8%83%E9%9E%8B%20%E5%AD%A6%E7%94%9F', '拼多多', DATE_SUB(NOW(), INTERVAL 2 HOUR)),
    (1264, 105, 1205, 6, 'product_jump', 'jump_out', 'https://mobile.yangkeduo.com/search_result.html?search_key=%E7%99%BDT%20%E7%89%9B%E4%BB%94%E8%A3%A4%20%E5%B8%86%E5%B8%83%E9%9E%8B%20%E5%AD%A6%E7%94%9F', '拼多多', DATE_SUB(NOW(), INTERVAL 100 MINUTE)),
    (1265, 106, 1206, 4, 'product_jump', 'jump_out', 'https://search.jd.com/Search?keyword=%E6%9C%BA%E8%83%BD%20%E9%80%9A%E5%8B%A4%20%E8%83%8C%E5%8C%85%20%E5%B7%A5%E8%A3%85%E8%A3%A4', '京东', DATE_SUB(NOW(), INTERVAL 80 MINUTE)),
    (1266, 106, 1206, 5, 'product_jump', 'jump_out', 'https://search.jd.com/Search?keyword=%E6%9C%BA%E8%83%BD%20%E9%80%9A%E5%8B%A4%20%E8%83%8C%E5%8C%85%20%E5%B7%A5%E8%A3%85%E8%A3%A4', '京东', DATE_SUB(NOW(), INTERVAL 65 MINUTE));

INSERT INTO commission_record (id, post_id, user_id, income_type, commission_amount, settlement_status, created_at) VALUES
    (1601, 101, 4, '推广佣金', 46.80, 1, DATE_SUB(NOW(), INTERVAL 1 DAY)),
    (1602, 103, 5, '品牌分成', 58.00, 0, DATE_SUB(NOW(), INTERVAL 9 HOUR)),
    (1603, 106, 8, '推广佣金', 35.50, 1, DATE_SUB(NOW(), INTERVAL 5 HOUR));

INSERT INTO message_notification (user_id, message_type, title, content, read_status, created_at) VALUES
    (4, '互动通知', '你的内容收到新评论', '周屿川评论了《早八教室到图书馆都能穿的蓝灰学院风》，现在这条内容的讨论氛围很不错。', 0, DATE_SUB(NOW(), INTERVAL 2 HOUR)),
    (4, '互动通知', '你的图书馆搭配被收藏了', '最近有 3 位同学把你的蓝灰学院风搭配加入了收藏，适合继续补充单品细节。', 0, DATE_SUB(NOW(), INTERVAL 90 MINUTE)),
    (5, '运营通知', '社团活动穿搭进入热门', '你的《社团招新当天最省心的运动混搭》已经进入活动中心的高热内容区。', 0, DATE_SUB(NOW(), INTERVAL 70 MINUTE)),
    (6, '互动通知', '你的约会搭配收到了新回复', '许今安回复了你评论区关于奶杏色版型的讨论。', 0, DATE_SUB(NOW(), INTERVAL 55 MINUTE)),
    (7, '互动通知', '预算通勤穿搭被加入收藏', '你的预算通勤内容最近新增了 2 次收藏，学生党反馈不错。', 0, DATE_SUB(NOW(), INTERVAL 45 MINUTE)),
    (8, '互动通知', '功能性通勤搭配获得新点赞', '陈知夏点赞了你的理工通勤内容，这条内容正在持续获得曝光。', 0, DATE_SUB(NOW(), INTERVAL 35 MINUTE));

COMMIT;
