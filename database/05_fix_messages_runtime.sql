SET NAMES utf8mb4;
UPDATE message_notification
SET message_type = '系统通知',
    title = '商品链接已更新',
    content = '导购链接已切换到真实搜索页，后续点击统计会继续累计。'
WHERE id = 16;

UPDATE message_notification
SET message_type = '激励通知',
    title = '导购激励规则已同步',
    content = '导购激励已按最新规则重算，后续结算会同时参考点击与内容质量。'
WHERE id = 17;

UPDATE message_notification
SET message_type = '系统通知',
    title = '理性消费提示已更新',
    content = '商品详情页已补充理性消费提示，建议结合预算和使用场景再下单。'
WHERE id = 18;
