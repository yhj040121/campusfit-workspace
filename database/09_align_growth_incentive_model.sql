SET NAMES utf8mb4;
USE campusfit;

UPDATE product_link
SET product_url = CASE id
    WHEN 1 THEN 'https://s.taobao.com/search?q=%E8%A1%AC%E8%A1%AB%20%E9%92%88%E7%BB%87%E9%A9%AC%E7%94%B2%20%E7%99%BE%E8%A4%B6%E8%A3%99'
    WHEN 2 THEN 'https://search.jd.com/Search?keyword=%E5%8D%AB%E8%A1%A3%20%E5%B7%A5%E8%A3%85%E8%A3%A4%20%E8%BF%90%E5%8A%A8%E9%9E%8B'
    WHEN 3 THEN 'https://list.tmall.com/search_product.htm?q=%E5%BC%80%E8%A1%AB%20%E8%BF%9E%E8%A1%A3%E8%A3%99%20%E7%99%BD%E8%89%B2%E8%BF%90%E5%8A%A8%E9%9E%8B'
    WHEN 4 THEN 'https://mobile.yangkeduo.com/search_result.html?search_key=%E7%99%BDT%20%E7%89%9B%E4%BB%94%E8%A3%99%20%E5%B8%86%E5%B8%83%E9%9E%8B'
    WHEN 5 THEN 'https://s.taobao.com/search?q=%E8%A1%AC%E8%A1%AB%20%E9%92%88%E7%BB%87%E8%83%8C%E5%BF%83%20%E7%9F%AD%E8%A3%99'
    WHEN 6 THEN 'https://search.jd.com/Search?keyword=%E5%BC%80%E8%A1%AB%20%E9%98%94%E8%85%BF%E8%A3%A4%20%E4%BC%91%E9%97%B2%E9%9E%8B'
    ELSE CASE
        WHEN platform_name LIKE '%京东%' THEN 'https://search.jd.com/Search?keyword=%E6%A0%A1%E5%9B%AD%E7%A9%BF%E6%90%AD%20%E5%8D%95%E5%93%81'
        WHEN platform_name LIKE '%天猫%' THEN 'https://list.tmall.com/search_product.htm?q=%E6%A0%A1%E5%9B%AD%E7%A9%BF%E6%90%AD%20%E5%8D%95%E5%93%81'
        WHEN platform_name LIKE '%拼多多%' THEN 'https://mobile.yangkeduo.com/search_result.html?search_key=%E6%A0%A1%E5%9B%AD%E7%A9%BF%E6%90%AD%20%E5%8D%95%E5%93%81'
        ELSE 'https://s.taobao.com/search?q=%E6%A0%A1%E5%9B%AD%E7%A9%BF%E6%90%AD%20%E5%8D%95%E5%93%81'
    END
END
WHERE product_url LIKE 'https://campusfit.%/product/%';

UPDATE product_link
SET
    profit_label = COALESCE(NULLIF(profit_label, ''), '导购点击会进入创作者激励统计。'),
    guide_tip = '请结合预算、使用频率和场景需求理性选购。'
WHERE id > 0;

UPDATE commission_record
SET income_type = CASE
    WHEN income_type IN ('导购佣金', '导购收益', '推广佣金', '推广激励') THEN '导购佣金'
    WHEN income_type IN ('品牌分成', '合作分成', '品牌合作奖励') THEN '品牌分成'
    ELSE income_type
END;

UPDATE message_notification
SET
    message_type = '系统通知',
    title = '商品链接审核通过',
    content = '你提交的导购链接已通过审核，后续跳转会计入导购点击统计和传播分析。'
WHERE title = '商品链接审核通过'
   OR content LIKE '%佣金统计%';

UPDATE message_notification
SET
    message_type = '激励通知',
    title = '本周创作激励待结算',
    content = '你的内容本周预计结算 86.50 元创作激励，请留意结算记录。'
WHERE message_type = '收益通知'
   OR title = '本周预计导购收益到账'
   OR content LIKE '%收益中心%';
