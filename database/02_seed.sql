SET NAMES utf8mb4;

INSERT INTO app_user (id, phone, nickname, avatar_url, password_hash, status) VALUES
    (1, '18688882026', '涔斾箶', NULL, NULL, 1),
    (2, '18688882027', '鏋楀', NULL, NULL, 1),
    (3, '18688882028', '楣垮畞', NULL, NULL, 1),
    (4, '18688882029', '瀹夊彲', NULL, NULL, 1);

INSERT INTO user_profile (id, user_id, school_name, grade_name, signature, avatar_text, avatar_class) VALUES
    (1, 1, '鍗庝笢甯堣寖澶у', '澶т笁', '鍒嗕韩鐪熷疄鏍″洯绌挎惌鍜岀悊鎬ц喘鐗╂帹鑽愩€?, 'Q', 'soft'),
    (2, 2, '涓婃捣澶у', '澶т簩', '涓撻棬鏀惰棌閫傚悎杩愬姩鍜岀ぞ鍥㈠満鏅殑鏍″洯绌挎惌鐏垫劅銆?, 'L', 'soft'),
    (3, 3, '鍚屾祹澶у', '鐮斾竴', '鍋忕埍娓╂煍鏃ュ父鍜岄珮鎬т环姣斿彔绌垮崟鍝併€?, 'L', 'alt'),
    (4, 4, '澶嶆棪澶у', '澶т竴', '鏇村叧娉ㄦ暀瀹ら€氬嫟鍜屽鐢熼绠楀唴鐨勫疄鐢ㄧ┛鎼€?, 'A', 'soft');

INSERT INTO tag_option (id, category, option_value, sort_order, status) VALUES
    (1, 'scene', '鏃╁叓', 1, 1),
    (2, 'scene', '鍥句功棣?, 2, 1),
    (3, 'scene', '绀惧洟娲诲姩', 3, 1),
    (4, 'scene', '绾︿細', 4, 1),
    (5, 'scene', '閫氬嫟', 5, 1),
    (6, 'scene', '杩愬姩', 6, 1),
    (7, 'style', '瀛﹂櫌椋?, 1, 1),
    (8, 'style', '瀹芥澗浼戦棽', 2, 1),
    (9, 'style', '鐢滈叿', 3, 1),
    (10, 'style', '鏋佺畝', 4, 1),
    (11, 'style', '闊╃郴', 5, 1),
    (12, 'style', '娓呮柊', 6, 1),
    (13, 'budget', '50-100', 1, 1),
    (14, 'budget', '100-150', 2, 1),
    (15, 'budget', '150-200', 3, 1),
    (16, 'budget', '200+', 4, 1);

INSERT INTO merchant (id, merchant_name, contact_name, contact_phone, cooperation_status, remark) VALUES
    (1, '闈掕娊鏍″洯鏈嶉グ', '鑹剧背', '13800000001', 1, '涓绘墦鏄ュ鏍″洯杞荤┛鎼悎浣?),
    (2, '鍩虹娆剧爺绌舵墍', 'Jason', '13800000002', 1, '涓绘墦瀛︾敓鏃ュ父楂橀鍩虹娆?),
    (3, '鍔ㄦ劅椋庢牸搴?, 'Helen', '13800000003', 1, '涓绘墦杩愬姩鍜岀ぞ鍥㈠満鏅┛鎼悎浣?);

INSERT INTO post (id, post_code, user_id, title, subtitle, description, scene_tag, style_tag, budget_tag, cover_tag, cover_image_url, status, audit_status, like_count, comment_count, favorite_count, share_count, created_at) VALUES
    (1, 'look1', 1, '閫傚悎鏃╁叓鍜屽浘涔﹂鐨勬竻鐖藉彔绌?, '钃濈櫧灞傛骞插噣鍒╄惤锛岄€傚悎瀛︾敓鏃ュ父璺嚎', '鐧借‖琛彔绌挎祬钃濋拡缁囬┈鐢诧紝涓嬭鎼厤鏌斿拰鐏拌壊鐧捐ざ瑁欙紝鏁翠綋杞荤泩娓呯埥锛屽緢閫傚悎鏃╄銆佸浘涔﹂鑷範鍜屾牎鍥蛋鍔ㄣ€?, '鍥句功棣?, '瀛﹂櫌椋?, '100-150', '鍥句功棣嗙簿閫?, NULL, 1, 1, 128, 36, 92, 14, DATE_SUB(NOW(), INTERVAL 6 DAY)),
    (2, 'look2', 2, '閫傚悎绀惧洟娲诲姩鍜屼笅鍗堟暎姝ョ殑瀹芥澗绌挎惌', '鍗。閰嶅伐瑁呰￥锛岃交鏉捐垝閫傚張鏈夋牎鍥椿鍔?, '钖勮嵎缁垮崼琛ｆ惌閰嶇背鐧藉伐瑁呰￥鍜岃繍鍔ㄩ瀷锛岄€傚悎绀惧洟鎷涙柊銆佹搷鍦烘媿鐓у拰鏀惧鍚庢椿鍔紝鏁翠綋杞绘澗涓嶈垂鍔涖€?, '绀惧洟娲诲姩', '瀹芥澗浼戦棽', '150-200', '鐑棬绌挎惌', NULL, 1, 1, 203, 48, 115, 21, DATE_SUB(NOW(), INTERVAL 5 DAY)),
    (3, 'look3', 3, '鏍″洯绾︿細涔熻嚜鐒剁殑濂舵补鑹叉俯鏌旀惌閰?, '杞昏杽寮€琛惌杩炶。瑁欙紝鐧借壊杩愬姩闉嬭鏁翠綋鏇磋交鏉?, '濂舵补鑹插紑琛彔鎼畝绾﹁繛琛ｈ锛屽啀閰嶄笂涓€鍙岀櫧鑹茶繍鍔ㄩ瀷鍜屽竼甯冨寘锛屾俯鏌斾笉鍋氫綔锛岄€傚悎鍛ㄦ湯绾︿細鍜屾牎鍥暎姝ャ€?, '绾︿細', '娓呮柊', '150-200', '鏍″洯浼橀€?, NULL, 1, 1, 176, 31, 142, 19, DATE_SUB(NOW(), INTERVAL 4 DAY)),
    (4, 'look4', 4, '鐧惧厓鍐呬篃鑳芥悶瀹氱殑鏁欏閫氬嫟绌挎惌', '鐧絋鍜岀墰浠旇缁勫悎锛岄€傚悎楂橀閲嶅绌跨潃', '绠€鍗曠櫧T鎼厤娴呰壊鐗涗粩瑁欏拰甯嗗竷闉嬶紝鏄緢閫傚悎鏁欏銆侀鍫傚拰瀹胯垗妤间箣闂撮€氬嫟鐨勫疄鐢ㄥ瀷鎼厤銆?, '閫氬嫟', '鏋佺畝', '50-100', '棰勭畻鍙嬪ソ', NULL, 1, 1, 98, 19, 87, 10, DATE_SUB(NOW(), INTERVAL 3 DAY)),
    (5, 'look5', 1, '閫傚悎鏍″洯澶滈棿娲诲姩鐨勭敎閰峰彔绌?, '琛～銆侀拡缁囪儗蹇冨拰鐭锛屾媿鐓ф洿鍑虹墖', '鎸烘嫭琛～鍙犳惌閽堢粐鑳屽績涓庢繁鑹茬煭瑁欙紝鍐嶉厤涔愮闉嬶紝閫傚悎绀惧洟澶滃満銆佷富鎸佹椿鍔ㄥ拰鏍″洯澶滄媿銆?, '绀惧洟娲诲姩', '鐢滈叿', '150-200', '澶滈棿姘涘洿', NULL, 1, 1, 155, 27, 101, 16, DATE_SUB(NOW(), INTERVAL 2 DAY)),
    (6, 'look6', 2, '澶嶄範鍛ㄤ篃鑳戒繚鎸佷綋闈㈢殑鑸掗€傜┛鎼?, '寮€琛厤闃旇吙瑁わ紝闀挎椂闂村涔犳洿杞绘澗', '浣庨ケ鍜屽紑琛惌閰嶆煍杞様鑵胯￥锛岄€傚悎闀挎椂闂磋嚜涔犮€佸涔犲懆鍜屽畨闈欑殑鍥句功棣嗗満鏅紝鑸掗€傚悓鏃朵篃涓嶆樉鎷栨矒銆?, '鏃╁叓', '闊╃郴', '100-150', '浜烘皵姒滃崟', NULL, 1, 1, 132, 29, 108, 13, DATE_SUB(NOW(), INTERVAL 1 DAY));

INSERT INTO post_tag (id, post_id, tag_type, tag_value) VALUES
    (1, 1, 'highlight', '灞傛娓呯埥'),
    (2, 1, 'highlight', '鏃╁叓鍙嬪ソ'),
    (3, 1, 'highlight', '楂橀鍙噸澶?),
    (4, 2, 'highlight', '杩愬姩娲诲姏'),
    (5, 2, 'highlight', '绀惧洟鍙┛'),
    (6, 2, 'highlight', '闈掓槬姘涘洿'),
    (7, 3, 'highlight', '娓╂煍绾︿細'),
    (8, 3, 'highlight', '鏃犲帇鍔涙惌閰?),
    (9, 3, 'highlight', '杞绘澗閫氬嫟'),
    (10, 4, 'highlight', '棰勭畻鍙嬪ソ'),
    (11, 4, 'highlight', '鏃ュ父鍩虹'),
    (12, 4, 'highlight', '鏁欏閫傞厤'),
    (13, 5, 'highlight', '鐢滈叿鍙犵┛'),
    (14, 5, 'highlight', '澶滈棿娲诲姩'),
    (15, 5, 'highlight', '鎷嶇収鍑虹墖'),
    (16, 6, 'highlight', '澶嶄範鍛?),
    (17, 6, 'highlight', '涔呭潗鍙嬪ソ'),
    (18, 6, 'highlight', '鏌斿拰涓€?);

INSERT INTO product_link (id, post_id, product_name, platform_name, product_url, link_status, price_amount, profit_label, guide_tip) VALUES
    (1, 1, '琛～ + 閽堢粐椹敳 + 鐧捐ざ瑁?, '娣樺疂鏍″洯绮鹃€?, 'https://s.taobao.com/search?q=%E8%A1%AC%E8%A1%AB%20%E9%92%88%E7%BB%87%E9%A9%AC%E7%94%B2%20%E7%99%BE%E8%A4%B6%E8%A3%99', 1, 139.00, '骞冲彴瀵艰喘浣ｉ噾 8%', '璇风粨鍚堢湡瀹為渶姹傛瘮浠峰悗鍐嶄笅鍗曘€?),
    (2, 2, '鍗。 + 宸ヨ瑁?+ 杩愬姩闉?, '浜笢鏍″洯搴?, 'https://search.jd.com/Search?keyword=%E5%8D%AB%E8%A1%A3%20%E5%B7%A5%E8%A3%85%E8%A3%A4%20%E8%BF%90%E5%8A%A8%E9%9E%8B', 1, 179.00, '骞冲彴瀵艰喘浣ｉ噾 6%', '杩愬姩鍦烘櫙浼樺厛鑰冭檻鑸掗€傚害鍜岃€愮┛鎬с€?),
    (3, 3, '寮€琛?+ 杩炶。瑁?+ 鐧借壊杩愬姩闉?, '澶╃尗鏍″洯搴?, 'https://list.tmall.com/search_product.htm?q=%E5%BC%80%E8%A1%AB%20%E8%BF%9E%E8%A1%A3%E8%A3%99%20%E7%99%BD%E8%89%B2%E8%BF%90%E5%8A%A8%E9%9E%8B', 1, 199.00, '鍝佺墝鍚堜綔鍒嗘垚', '濡傛灉閫氬嫟闇€姹傛洿寮猴紝鍙互鍐嶅姞涓€浠惰交钖勫濂椼€?),
    (4, 4, '鐧絋 + 鐗涗粩瑁?+ 甯嗗竷闉?, '鎷煎澶氬鐢熶紭閫?, 'https://mobile.yangkeduo.com/search_result.html?search_key=%E7%99%BDT%20%E7%89%9B%E4%BB%94%E8%A3%99%20%E5%B8%86%E5%B8%83%E9%9E%8B', 1, 89.00, '骞冲彴瀵艰喘浣ｉ噾 5%', '棰勭畻鏈夐檺鏃跺厛涔伴珮澶嶇敤鍩虹娆俱€?),
    (5, 5, '琛～ + 閽堢粐鑳屽績 + 鐭', '娣樺疂鏍″洯绮鹃€?, 'https://s.taobao.com/search?q=%E8%A1%AC%E8%A1%AB%20%E9%92%88%E7%BB%87%E8%83%8C%E5%BF%83%20%E7%9F%AD%E8%A3%99', 1, 189.00, '鍝佺墝鍚堜綔鍒嗘垚', '濡傛灉鍦烘櫙鏇存寮忥紝鍙互鎶婄煭瑁欐浛鎹㈡垚涓暱瑁欍€?),
    (6, 6, '寮€琛?+ 闃旇吙瑁?+ 浼戦棽闉?, '浜笢鏍″洯搴?, 'https://search.jd.com/Search?keyword=%E5%BC%80%E8%A1%AB%20%E9%98%94%E8%85%BF%E8%A3%A4%20%E4%BC%91%E9%97%B2%E9%9E%8B', 1, 149.00, '骞冲彴瀵艰喘浣ｉ噾 6%', '澶嶄範鍛ㄧ┛鎼缓璁互鑸掗€傚拰鑰愪箙涓哄厛銆?);

INSERT INTO post_comment (id, post_id, user_id, content, like_count, status, created_at) VALUES
    (1, 1, 2, '杩欎釜閰嶈壊鐪熺殑寰堥€傚悎鍥句功棣嗗満鏅€?, 16, 1, DATE_SUB(NOW(), INTERVAL 42 MINUTE)),
    (2, 1, 3, '棰勭畻鍖洪棿寰堢湡瀹烇紝鎴戝厛鏀惰棌浜嗐€?, 12, 1, DATE_SUB(NOW(), INTERVAL 30 MINUTE)),
    (3, 1, 4, '濡傛灉鎹㈡垚杩愬姩闉嬶紝浼氫笉浼氭洿閫傚悎鏃╁叓锛?, 8, 1, DATE_SUB(NOW(), INTERVAL 18 MINUTE)),
    (4, 2, 1, '杩欏纭疄寰堥€傚悎绀惧洟娲诲姩鎷嶇収銆?, 10, 1, DATE_SUB(NOW(), INTERVAL 1 HOUR));

INSERT INTO creator_cooperation (
    id, cooperation_code, user_id, merchant_id, cooperation_title, cooperation_desc, cooperation_mode,
    cooperation_status, reward_amount, target_post_count, deadline_at, accepted_at, created_at, updated_at
) VALUES
    (
        1, 'coop-spring-campus', 1, 1, '鏄ュ娓呯埥鏍″洯绌挎惌涓撻',
        '绠＄悊鍛樺彂璧风殑鏄ュ涓撻鍚堜綔锛岀‘璁ゅ悗鍙粦瀹?1 鏉￠€氳繃瀹℃牳鐨勬牎鍥┛鎼唴瀹广€?,
        'PLATFORM_INVITE', 0, 120.00, 1,
        DATE_ADD(NOW(), INTERVAL 10 DAY), NULL,
        DATE_SUB(NOW(), INTERVAL 7 DAY), DATE_SUB(NOW(), INTERVAL 7 DAY)
    ),
    (
        2, 'coop-budget-commute', 1, 2, '骞充环閫氬嫟鍩虹娆惧悎浣?,
        '闈㈠悜閫氬嫟鍦烘櫙鐨勫熀纭€娆惧悎浣滐紝纭鍚庡彂甯冪粦瀹氬唴瀹瑰嵆鍙繘鍏ュ鏍镐笌鍙戝娴佺▼銆?,
        'PLATFORM_INVITE', 1, 88.00, 1,
        DATE_ADD(NOW(), INTERVAL 7 DAY), DATE_SUB(NOW(), INTERVAL 5 DAY),
        DATE_SUB(NOW(), INTERVAL 5 DAY), DATE_SUB(NOW(), INTERVAL 2 DAY)
    ),
    (
        3, 'coop-club-sports', 1, 3, '绀惧洟涓庤繍鍔ㄥ満鏅┛鎼笓棰?,
        '闈㈠悜绀惧洟涓庤繍鍔ㄥ満鏅殑鍚堜綔涓撻锛屾敮鎸佺户缁粦瀹氬苟杩借釜鍚堜綔杩涘害銆?,
        'PLATFORM_INVITE', 1, 60.00, 1,
        DATE_ADD(NOW(), INTERVAL 14 DAY), DATE_SUB(NOW(), INTERVAL 3 DAY),
        DATE_SUB(NOW(), INTERVAL 3 DAY), DATE_SUB(NOW(), INTERVAL 1 DAY)
    );

INSERT INTO commission_record (
    id, post_id, user_id, cooperation_id, income_type, commission_amount, settlement_status, remark, created_at
) VALUES
    (1, 1, 1, NULL, '瀵艰喘浣ｉ噾', 86.50, 1, '棣栭〉瀵艰喘鐐瑰嚮缁撶畻', DATE_SUB(NOW(), INTERVAL 6 DAY)),
    (2, 5, 1, NULL, '鍝佺墝鍒嗘垚', 92.00, 1, '鍝佺墝鎺ㄥ箍鏀剁泭缁撶畻', DATE_SUB(NOW(), INTERVAL 3 DAY)),
    (3, 1, 1, NULL, '瀵艰喘浣ｉ噾', 89.50, 0, '寰呰储鍔＄‘璁ょ粨绠?, DATE_SUB(NOW(), INTERVAL 1 DAY));

INSERT INTO message_notification (id, user_id, message_type, title, content, read_status, created_at) VALUES
    (1, 1, '浜掑姩', '浣犵殑绌挎惌鏂板浜?18 涓敹钘?, '鍥句功棣嗛偅濂楁惌閰嶈繕鍦ㄦ寔缁幏寰楁洕鍏夛紝寤鸿琛ュ厖鏇村浜偣鏍囩銆?, 0, DATE_SUB(NOW(), INTERVAL 1 MINUTE)),
    (2, 1, '鍚堜綔', '鏈変竴涓牎鍥搧鐗屽悎浣滃緟纭', '闈掕娊鏍″洯鏈嶉グ甯屾湜鍦?24 灏忔椂鍐呯‘璁ゆ槬瀛ｄ笓棰樺悎浣溿€?, 0, DATE_SUB(NOW(), INTERVAL 5 MINUTE)),
    (3, 1, '绯荤粺', '鍟嗗搧閾炬帴瀹℃牳宸查€氳繃', '浣犳彁浜ょ殑瀵艰喘閾炬帴宸查€氳繃瀹℃牳锛岀幇鍦ㄥ彲浠ュ弬涓庝剑閲戠粺璁°€?, 0, DATE_SUB(NOW(), INTERVAL 12 MINUTE)),
    (4, 1, '璇勮', '楣垮畞璇勮浜嗕綘鐨勭┛鎼?, '濂规兂鐪?100 鍏冮绠椾互鍐呯殑鏇村鎼厤寤鸿銆?, 0, DATE_SUB(NOW(), INTERVAL 28 MINUTE)),
    (5, 1, '鏀剁泭', '鏈懆瀵艰喘鏀剁泭姝ｅ湪缁撶畻', '浣犳湰鍛ㄧ殑瀵艰喘鍐呭棰勮缁撶畻 86.50 鍏冿紝鍙墠寰€鍒涗綔鑰呮敹鐩婁腑蹇冩煡鐪嬨€?, 0, DATE_SUB(NOW(), INTERVAL 1 HOUR));

INSERT INTO user_follow (id, follower_user_id, followee_user_id, created_at) VALUES
    (1, 1, 2, DATE_SUB(NOW(), INTERVAL 12 DAY)),
    (2, 3, 1, DATE_SUB(NOW(), INTERVAL 10 DAY)),
    (3, 4, 1, DATE_SUB(NOW(), INTERVAL 8 DAY));

INSERT INTO post_like (id, post_id, user_id, created_at) VALUES
    (1, 1, 2, DATE_SUB(NOW(), INTERVAL 1 DAY)),
    (2, 1, 3, DATE_SUB(NOW(), INTERVAL 20 HOUR)),
    (3, 2, 1, DATE_SUB(NOW(), INTERVAL 18 HOUR));

INSERT INTO post_favorite (id, post_id, user_id, created_at) VALUES
    (1, 1, 2, DATE_SUB(NOW(), INTERVAL 10 HOUR)),
    (2, 1, 3, DATE_SUB(NOW(), INTERVAL 9 HOUR)),
    (3, 3, 1, DATE_SUB(NOW(), INTERVAL 7 HOUR));


INSERT IGNORE INTO user_activity_join (activity_id, user_id, created_at)
SELECT 1, ua.user_id, ua.created_at
FROM user_activity_join ua
JOIN activity_topic a ON a.id = ua.activity_id
WHERE a.activity_code IN ('club-style-challenge', 'budget-outfit-plan');

DELETE ua
FROM user_activity_join ua
JOIN activity_topic a ON a.id = ua.activity_id
WHERE a.activity_code IN ('club-style-challenge', 'budget-outfit-plan');

UPDATE post_activity_binding pab
JOIN activity_topic a ON a.id = pab.activity_id
SET pab.activity_id = 1,
    pab.updated_at = NOW()
WHERE a.activity_code IN ('club-style-challenge', 'budget-outfit-plan');

UPDATE post_draft
SET activity_code = 'campus-new-star-plan',
    updated_at = NOW()
WHERE activity_code IN ('spring-library-week', 'club-style-challenge', 'budget-outfit-plan');

INSERT INTO activity_topic (
    id, activity_code, title, badge_label, theme_desc, summary_desc, period_text,
    reward_desc, participation_desc, scene_label, status_code, featured_flag, heat_value,
    sort_order, status, start_time, end_time
) VALUES
    (
        1, 'campus-new-star-plan', '鏍″洯绌挎惌鏂版槦璁″垝', '鍐呭鍐峰惎鍔?,
        '闈㈠悜棣栨壒鍒涗綔鑰呯殑鍐呭鍐峰惎鍔ㄦ椿鍔紝榧撳姳鍦ㄤ笂绾垮墠 7 澶╂寔缁彂甯冨甫鏍″洯鍦烘櫙鏍囩鐨勫師鍒涚┛鎼紝鐢ㄧ湡瀹炰簰鍔ㄥ垎鎵惧嚭鏈€鍊煎緱琚湅瑙佺殑鏍″洯鍐呭銆?,
        '鍙戝竷甯︽牎鍥満鏅爣绛剧殑鍘熷垱绌挎惌鍗冲彲鍙傝瘎锛屾瘡鍛ㄦ寜浜掑姩鍒嗚瘎閫?Top 30 浼樿川绌挎惌銆?,
        '2026.03.22 - 2026.03.28',
        '鍏ラ€?Top 30 鍙弬涓庣摐鍒?500 鍏冨惎鍔ㄥ閲戞睜锛屽墠涓夊悕棰濆鑾峰緱棣栭〉娲诲姩鎺ㄨ崘浣嶅拰瀹樻柟鍏憡闇插嚭銆?,
        '鍙戝竷鍘熷垱绌挎惌骞惰嚦灏戦€夋嫨 1 涓牎鍥満鏅爣绛撅紝鍐呭閫氳繃瀹℃牳鍚庢寜鐐硅禐脳1 + 璇勮脳3 + 鏀惰棌脳2 璁″叆浜掑姩鍒嗐€?,
        '鏍″洯绌挎惌', 'ONGOING', 1, 1280, 1, 1, '2026-03-22 00:00:00', '2026-03-28 23:59:59'
    ),
    (
        2, 'first-merchant-support-plan', '棣栨壒鍟嗗鎵舵寔璁″垝', '鍟嗗鎵舵寔',
        '闈㈠悜棣栨壒鏍″洯鏈嶉グ鍚堜綔鍟嗗鐨勫喎鍚姩鎵舵寔璁″垝锛屼紭鍏堥€氳繃鍚堜綔鍐呭銆佸晢鍝佽烦杞粺璁°€侀椤垫帹鑽愪綅鍜岃疆鎾綅甯姪鍚堜綔鍟嗗搧璧烽噺銆?,
        '棣栨湀瀹屾垚鍚堜綔鐧昏鐨勫晢瀹跺彲杩涘叆鎵舵寔姹狅紱甯︾湡瀹炲晢鍝侀摼鎺ュ苟閫氳繃瀹℃牳鐨勫悎浣滅┛鎼紝浼氳繘鍏ラ澶栨洕鍏夎瘎浼般€?,
        '2026.03.22 - 2026.04.21',
        '棣栨湀鍏ラ┗鍏嶆湇鍔¤垂锛涚鍚堟帓鏈熺殑鍚堜綔鍟嗗搧鍙幏棣栭〉娲诲姩鎺ㄨ崘鎴?1 澶╄疆鎾壎鎸侊紝姣忓懆鐐瑰嚮鐑害鏈€楂樼殑鍚堜綔鍟嗗搧鍙幏骞冲彴鍏嶈垂甯帹鍏ㄦ牎銆?,
        '鐢卞钩鍙拌繍钀ョ櫥璁伴鎵瑰悎浣滃晢瀹讹紱鍒涗綔鑰呭彂甯冨甫鐪熷疄鍟嗗搧閾炬帴骞堕€氳繃瀹℃牳鐨勫悎浣滅┛鎼嵆鍙繘鍏ユ壎鎸佹睜锛屽晢鍝佺偣鍑讳笌鍐呭浜掑姩浼氫綔涓鸿瘎浼颁緷鎹€?,
        '鍟嗗鍚堜綔', 'RECRUITING', 1, 930, 2, 1, '2026-03-22 00:00:00', '2026-04-21 23:59:59'
    )
ON DUPLICATE KEY UPDATE
    activity_code = VALUES(activity_code),
    title = VALUES(title),
    badge_label = VALUES(badge_label),
    theme_desc = VALUES(theme_desc),
    summary_desc = VALUES(summary_desc),
    period_text = VALUES(period_text),
    reward_desc = VALUES(reward_desc),
    participation_desc = VALUES(participation_desc),
    scene_label = VALUES(scene_label),
    status_code = VALUES(status_code),
    featured_flag = VALUES(featured_flag),
    heat_value = VALUES(heat_value),
    sort_order = VALUES(sort_order),
    status = VALUES(status),
    start_time = VALUES(start_time),
    end_time = VALUES(end_time),
    updated_at = NOW();

DELETE FROM activity_topic
WHERE activity_code IN ('spring-library-week', 'club-style-challenge', 'budget-outfit-plan');

INSERT INTO official_announcement (
    id, title, badge_label, summary, content, status, pinned_flag, sort_order,
    publish_time, expire_time, created_by, updated_by
) VALUES (
    1,
    '闈掓惌 V2 娲诲姩鍙戝竷锛氭柊鏄熻鍒掍笌鍟嗗鎵舵寔涓婄嚎',
    '娲诲姩鍙戝竷',
    '娲诲姩涓績宸叉洿鏂颁负 2 涓柊涓撻锛氶潰鍚戝垱浣滆€呯殑鈥滄牎鍥┛鎼柊鏄熻鍒掆€濓紝浠ュ強闈㈠悜棣栨壒鍚堜綔鍟嗗鐨勨€滈鎵瑰晢瀹舵壎鎸佽鍒掆€濄€?,
    '娲诲姩涓績鐜板凡涓嬬嚎鏃х殑 3 涓粯璁ゆ椿鍔紝骞跺悓姝ヤ笂绾?2 涓洿璐村悎褰撳墠骞冲彴鑳藉姏鐨勬柊娲诲姩銆傛牎鍥┛鎼柊鏄熻鍒掗潰鍚戦鎵瑰垱浣滆€呭紑鏀撅細鍙戝竷甯︽牎鍥満鏅爣绛剧殑鍘熷垱绌挎惌骞堕€氳繃瀹℃牳鍚庯紝鎸夌偣璧灻? + 璇勮脳3 + 鏀惰棌脳2 缁熻浜掑姩鍒嗭紝姣忓懆璇勯€?Top 30锛屽叆閫夊彲鍙備笌 500 鍏冨惎鍔ㄥ閲戞睜锛屽墠涓夊悕棰濆鑾峰緱棣栭〉鎺ㄨ崘浣嶃€傞鎵瑰晢瀹舵壎鎸佽鍒掗潰鍚戦鎵瑰悎浣滃晢瀹朵笌鍚堜綔鍐呭寮€鏀撅細棣栨湀鍏ラ┗鍏嶆湇鍔¤垂锛屽垱浣滆€呭彂甯冨甫鐪熷疄鍟嗗搧閾炬帴骞堕€氳繃瀹℃牳鐨勫悎浣滅┛鎼嵆鍙繘鍏ユ壎鎸佹睜锛屽钩鍙颁細缁撳悎鍟嗗搧鐐瑰嚮鐑害銆佸唴瀹逛簰鍔ㄥ拰鍚堜綔鎺掓湡缁欎簣棣栭〉鎺ㄨ崘鎴栬疆鎾壎鎸併€傚綋鍓嶅钩鍙板凡鏀寔娲诲姩鎶ュ悕銆佹椿鍔ㄧ粦瀹氬彂甯冦€佸唴瀹瑰鏍搞€侀椤垫帹鑽愩€佸晢鍝侀摼鎺ヤ笌鐐瑰嚮缁熻銆佸畼鏂瑰叕鍛婂彂甯冿紝娲诲姩缁撴灉浠ョ幇闃舵杩愯惀璇勯€夊拰鍚庡彴閰嶇疆涓哄噯銆?,
    1,
    1,
    0,
    DATE_SUB(NOW(), INTERVAL 10 MINUTE),
    NULL,
    '绯荤粺杩愯惀',
    '绯荤粺杩愯惀'
)
ON DUPLICATE KEY UPDATE
    title = VALUES(title),
    badge_label = VALUES(badge_label),
    summary = VALUES(summary),
    content = VALUES(content),
    status = VALUES(status),
    pinned_flag = VALUES(pinned_flag),
    sort_order = VALUES(sort_order),
    publish_time = VALUES(publish_time),
    expire_time = VALUES(expire_time),
    updated_by = VALUES(updated_by),
    updated_at = NOW();

INSERT INTO sys_admin_user (id, username, password_hash, role_code, status) VALUES
    (1, 'admin', 'admin123', 'SUPER_ADMIN', 1),
    (2, 'operator', 'operator123', 'CONTENT_OPERATOR', 1),
    (3, 'finance', 'finance123', 'FINANCE', 1);

ALTER TABLE app_user AUTO_INCREMENT = 5;
ALTER TABLE user_profile AUTO_INCREMENT = 5;
ALTER TABLE tag_option AUTO_INCREMENT = 17;
ALTER TABLE merchant AUTO_INCREMENT = 4;
ALTER TABLE post AUTO_INCREMENT = 7;
ALTER TABLE post_image AUTO_INCREMENT = 1;
ALTER TABLE post_tag AUTO_INCREMENT = 19;
ALTER TABLE product_link AUTO_INCREMENT = 7;
ALTER TABLE post_comment AUTO_INCREMENT = 5;
ALTER TABLE creator_cooperation AUTO_INCREMENT = 4;
ALTER TABLE commission_record AUTO_INCREMENT = 4;
ALTER TABLE message_notification AUTO_INCREMENT = 6;
ALTER TABLE user_follow AUTO_INCREMENT = 4;
ALTER TABLE post_like AUTO_INCREMENT = 4;
ALTER TABLE post_favorite AUTO_INCREMENT = 4;
ALTER TABLE official_announcement AUTO_INCREMENT = 2;
ALTER TABLE sys_admin_user AUTO_INCREMENT = 4;
