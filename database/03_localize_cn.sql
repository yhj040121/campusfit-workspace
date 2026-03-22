SET NAMES utf8mb4;

UPDATE app_user SET nickname = '乔乔' WHERE id = 1;
UPDATE app_user SET nickname = '林夏' WHERE id = 2;
UPDATE app_user SET nickname = '鹿宁' WHERE id = 3;
UPDATE app_user SET nickname = '安可' WHERE id = 4;

UPDATE user_profile SET school_name = '华东师范大学', grade_name = '大三', signature = '分享真实校园穿搭和理性购物推荐。' WHERE id = 1;
UPDATE user_profile SET school_name = '上海大学', grade_name = '大二', signature = '专门收藏适合运动和社团场景的校园穿搭灵感。' WHERE id = 2;
UPDATE user_profile SET school_name = '同济大学', grade_name = '研一', signature = '偏爱温柔日常和高性价比叠穿单品。' WHERE id = 3;
UPDATE user_profile SET school_name = '复旦大学', grade_name = '大一', signature = '更关注教室通勤和学生预算内的实用穿搭。' WHERE id = 4;

UPDATE tag_option SET option_value = '早八' WHERE id = 1;
UPDATE tag_option SET option_value = '图书馆' WHERE id = 2;
UPDATE tag_option SET option_value = '社团活动' WHERE id = 3;
UPDATE tag_option SET option_value = '约会' WHERE id = 4;
UPDATE tag_option SET option_value = '通勤' WHERE id = 5;
UPDATE tag_option SET option_value = '运动' WHERE id = 6;
UPDATE tag_option SET option_value = '学院风' WHERE id = 7;
UPDATE tag_option SET option_value = '宽松休闲' WHERE id = 8;
UPDATE tag_option SET option_value = '甜酷' WHERE id = 9;
UPDATE tag_option SET option_value = '极简' WHERE id = 10;
UPDATE tag_option SET option_value = '韩系' WHERE id = 11;
UPDATE tag_option SET option_value = '清新' WHERE id = 12;

UPDATE merchant SET merchant_name = '青芽校园服饰', contact_name = '艾米', remark = '主打春夏校园轻穿搭合作' WHERE id = 1;
UPDATE merchant SET merchant_name = '基础款研究所', contact_name = 'Jason', remark = '主打学生日常高频基础款' WHERE id = 2;
UPDATE merchant SET merchant_name = '动感风格店', contact_name = 'Helen', remark = '主打运动和社团场景穿搭合作' WHERE id = 3;

UPDATE post SET title = '适合早八和图书馆的清爽叠穿', subtitle = '蓝白层次干净利落，适合学生日常路线', description = '白衬衫叠穿浅蓝针织马甲，下装搭配柔和灰色百褶裙，整体轻盈清爽，很适合早课、图书馆自习和校园走动。', scene_tag = '图书馆', style_tag = '学院风', budget_tag = '100-150', cover_tag = '图书馆精选' WHERE id = 1;
UPDATE post SET title = '适合社团活动和下午散步的宽松穿搭', subtitle = '卫衣配工装裤，轻松舒适又有校园活力', description = '薄荷绿卫衣搭配米白工装裤和运动鞋，适合社团招新、操场拍照和放学后活动，整体轻松不费力。', scene_tag = '社团活动', style_tag = '宽松休闲', budget_tag = '150-200', cover_tag = '热门穿搭' WHERE id = 2;
UPDATE post SET title = '校园约会也自然的奶油色温柔搭配', subtitle = '轻薄开衫搭连衣裙，白色运动鞋让整体更轻松', description = '奶油色开衫叠搭简约连衣裙，再配上一双白色运动鞋和帆布包，温柔不做作，适合周末约会和校园散步。', scene_tag = '约会', style_tag = '清新', budget_tag = '150-200', cover_tag = '校园优选' WHERE id = 3;
UPDATE post SET title = '百元内也能搞定的教室通勤穿搭', subtitle = '白T和牛仔裙组合，适合高频重复穿着', description = '简单白T搭配浅色牛仔裙和帆布鞋，是很适合教室、食堂和宿舍楼之间通勤的实用型搭配。', scene_tag = '通勤', style_tag = '极简', budget_tag = '50-100', cover_tag = '预算友好' WHERE id = 4;
UPDATE post SET title = '适合校园夜间活动的甜酷叠穿', subtitle = '衬衫、针织背心和短裙，拍照更出片', description = '挺括衬衫叠搭针织背心与深色短裙，再配乐福鞋，适合社团夜场、主持活动和校园夜拍。', scene_tag = '社团活动', style_tag = '甜酷', budget_tag = '150-200', cover_tag = '夜间氛围' WHERE id = 5;
UPDATE post SET title = '复习周也能保持体面的舒适穿搭', subtitle = '开衫配阔腿裤，长时间学习更轻松', description = '低饱和开衫搭配柔软阔腿裤，适合长时间自习、复习周和安静的图书馆场景，舒适同时也不显拖沓。', scene_tag = '早八', style_tag = '韩系', budget_tag = '100-150', cover_tag = '人气榜单' WHERE id = 6;

UPDATE post_tag SET tag_value = '层次清爽' WHERE id = 1;
UPDATE post_tag SET tag_value = '早八友好' WHERE id = 2;
UPDATE post_tag SET tag_value = '高频可重复' WHERE id = 3;
UPDATE post_tag SET tag_value = '运动活力' WHERE id = 4;
UPDATE post_tag SET tag_value = '社团可穿' WHERE id = 5;
UPDATE post_tag SET tag_value = '青春氛围' WHERE id = 6;
UPDATE post_tag SET tag_value = '温柔约会' WHERE id = 7;
UPDATE post_tag SET tag_value = '无压力搭配' WHERE id = 8;
UPDATE post_tag SET tag_value = '轻松通勤' WHERE id = 9;
UPDATE post_tag SET tag_value = '预算友好' WHERE id = 10;
UPDATE post_tag SET tag_value = '日常基础' WHERE id = 11;
UPDATE post_tag SET tag_value = '教室适配' WHERE id = 12;
UPDATE post_tag SET tag_value = '甜酷叠穿' WHERE id = 13;
UPDATE post_tag SET tag_value = '夜间活动' WHERE id = 14;
UPDATE post_tag SET tag_value = '拍照出片' WHERE id = 15;
UPDATE post_tag SET tag_value = '复习周' WHERE id = 16;
UPDATE post_tag SET tag_value = '久坐友好' WHERE id = 17;
UPDATE post_tag SET tag_value = '柔和中性' WHERE id = 18;

UPDATE product_link SET product_name = '衬衫 + 针织马甲 + 百褶裙', platform_name = '淘宝校园精选', profit_label = '平台导购佣金 8%', guide_tip = '请结合真实需求比价后再下单。' WHERE id = 1;
UPDATE product_link SET product_name = '卫衣 + 工装裤 + 运动鞋', platform_name = '京东校园店', profit_label = '平台导购佣金 6%', guide_tip = '运动场景优先考虑舒适度和耐穿性。' WHERE id = 2;
UPDATE product_link SET product_name = '开衫 + 连衣裙 + 白色运动鞋', platform_name = '天猫校园店', profit_label = '品牌合作分成', guide_tip = '如果通勤需求更强，可以再加一件轻薄外套。' WHERE id = 3;
UPDATE product_link SET product_name = '白T + 牛仔裙 + 帆布鞋', platform_name = '拼多多学生优选', profit_label = '平台导购佣金 5%', guide_tip = '预算有限时先买高复用基础款。' WHERE id = 4;
UPDATE product_link SET product_name = '衬衫 + 针织背心 + 短裙', platform_name = '淘宝校园精选', profit_label = '品牌合作分成', guide_tip = '如果场景更正式，可以把短裙替换成中长裙。' WHERE id = 5;
UPDATE product_link SET product_name = '开衫 + 阔腿裤 + 休闲鞋', platform_name = '京东校园店', profit_label = '平台导购佣金 6%', guide_tip = '复习周穿搭建议以舒适和耐久为先。' WHERE id = 6;

UPDATE post_comment SET content = '这个配色真的很适合图书馆场景。' WHERE id = 1;
UPDATE post_comment SET content = '预算区间很真实，我先收藏了。' WHERE id = 2;
UPDATE post_comment SET content = '如果换成运动鞋，会不会更适合早八？' WHERE id = 3;
UPDATE post_comment SET content = '这套确实很适合社团活动拍照。' WHERE id = 4;

UPDATE creator_cooperation SET cooperation_title = '春季清爽校园穿搭专题' WHERE id = 1;
UPDATE creator_cooperation SET cooperation_title = '平价通勤基础款合作' WHERE id = 2;
UPDATE creator_cooperation SET cooperation_title = '社团与运动场景穿搭专题' WHERE id = 3;

UPDATE commission_record SET income_type = '导购佣金' WHERE id IN (1, 3);
UPDATE commission_record SET income_type = '品牌分成' WHERE id = 2;

UPDATE message_notification SET message_type = '互动', title = '你的穿搭新增了 18 个收藏', content = '图书馆那套搭配还在持续获得曝光，建议补充更多亮点标签。' WHERE id = 1;
UPDATE message_notification SET message_type = '合作', title = '有一个校园品牌合作待确认', content = '青芽校园服饰希望在 24 小时内确认春季专题合作。' WHERE id = 2;
UPDATE message_notification SET message_type = '系统', title = '商品链接审核已通过', content = '你提交的导购链接已通过审核，现在可以参与佣金统计。' WHERE id = 3;
UPDATE message_notification SET message_type = '评论', title = '鹿宁评论了你的穿搭', content = '她想看 100 元预算以内的更多搭配建议。' WHERE id = 4;
UPDATE message_notification SET message_type = '收益', title = '本周导购收益正在结算', content = '你本周的导购内容预计结算 86.50 元，可前往创作者收益中心查看。' WHERE id = 5;

UPDATE promotion_slot SET slot_name = '首页主视觉推广位' WHERE id = 1;
UPDATE promotion_slot SET slot_name = '搜索热词推广位' WHERE id = 2;

UPDATE campaign SET campaign_name = '春季新生穿搭指南', campaign_type = '内容专题' WHERE id = 1;
UPDATE campaign SET campaign_name = '社团活力穿搭周', campaign_type = '品牌活动' WHERE id = 2;

UPDATE report_record SET reason = '演示用内容治理样例' WHERE id = 1;
