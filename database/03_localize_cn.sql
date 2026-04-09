SET NAMES utf8mb4;

UPDATE app_user SET nickname = '涔斾箶' WHERE id = 1;
UPDATE app_user SET nickname = '鏋楀' WHERE id = 2;
UPDATE app_user SET nickname = '楣垮畞' WHERE id = 3;
UPDATE app_user SET nickname = '瀹夊彲' WHERE id = 4;

UPDATE user_profile SET school_name = '鍗庝笢甯堣寖澶у', grade_name = '澶т笁', signature = '鍒嗕韩鐪熷疄鏍″洯绌挎惌鍜岀悊鎬ц喘鐗╂帹鑽愩€? WHERE id = 1;
UPDATE user_profile SET school_name = '涓婃捣澶у', grade_name = '澶т簩', signature = '涓撻棬鏀惰棌閫傚悎杩愬姩鍜岀ぞ鍥㈠満鏅殑鏍″洯绌挎惌鐏垫劅銆? WHERE id = 2;
UPDATE user_profile SET school_name = '鍚屾祹澶у', grade_name = '鐮斾竴', signature = '鍋忕埍娓╂煍鏃ュ父鍜岄珮鎬т环姣斿彔绌垮崟鍝併€? WHERE id = 3;
UPDATE user_profile SET school_name = '澶嶆棪澶у', grade_name = '澶т竴', signature = '鏇村叧娉ㄦ暀瀹ら€氬嫟鍜屽鐢熼绠楀唴鐨勫疄鐢ㄧ┛鎼€? WHERE id = 4;

UPDATE tag_option SET option_value = '鏃╁叓' WHERE id = 1;
UPDATE tag_option SET option_value = '鍥句功棣? WHERE id = 2;
UPDATE tag_option SET option_value = '绀惧洟娲诲姩' WHERE id = 3;
UPDATE tag_option SET option_value = '绾︿細' WHERE id = 4;
UPDATE tag_option SET option_value = '閫氬嫟' WHERE id = 5;
UPDATE tag_option SET option_value = '杩愬姩' WHERE id = 6;
UPDATE tag_option SET option_value = '瀛﹂櫌椋? WHERE id = 7;
UPDATE tag_option SET option_value = '瀹芥澗浼戦棽' WHERE id = 8;
UPDATE tag_option SET option_value = '鐢滈叿' WHERE id = 9;
UPDATE tag_option SET option_value = '鏋佺畝' WHERE id = 10;
UPDATE tag_option SET option_value = '闊╃郴' WHERE id = 11;
UPDATE tag_option SET option_value = '娓呮柊' WHERE id = 12;

UPDATE merchant SET merchant_name = '闈掕娊鏍″洯鏈嶉グ', contact_name = '鑹剧背', remark = '涓绘墦鏄ュ鏍″洯杞荤┛鎼悎浣? WHERE id = 1;
UPDATE merchant SET merchant_name = '鍩虹娆剧爺绌舵墍', contact_name = 'Jason', remark = '涓绘墦瀛︾敓鏃ュ父楂橀鍩虹娆? WHERE id = 2;
UPDATE merchant SET merchant_name = '鍔ㄦ劅椋庢牸搴?, contact_name = 'Helen', remark = '涓绘墦杩愬姩鍜岀ぞ鍥㈠満鏅┛鎼悎浣? WHERE id = 3;

UPDATE post SET title = '閫傚悎鏃╁叓鍜屽浘涔﹂鐨勬竻鐖藉彔绌?, subtitle = '钃濈櫧灞傛骞插噣鍒╄惤锛岄€傚悎瀛︾敓鏃ュ父璺嚎', description = '鐧借‖琛彔绌挎祬钃濋拡缁囬┈鐢诧紝涓嬭鎼厤鏌斿拰鐏拌壊鐧捐ざ瑁欙紝鏁翠綋杞荤泩娓呯埥锛屽緢閫傚悎鏃╄銆佸浘涔﹂鑷範鍜屾牎鍥蛋鍔ㄣ€?, scene_tag = '鍥句功棣?, style_tag = '瀛﹂櫌椋?, budget_tag = '100-150', cover_tag = '鍥句功棣嗙簿閫? WHERE id = 1;
UPDATE post SET title = '閫傚悎绀惧洟娲诲姩鍜屼笅鍗堟暎姝ョ殑瀹芥澗绌挎惌', subtitle = '鍗。閰嶅伐瑁呰￥锛岃交鏉捐垝閫傚張鏈夋牎鍥椿鍔?, description = '钖勮嵎缁垮崼琛ｆ惌閰嶇背鐧藉伐瑁呰￥鍜岃繍鍔ㄩ瀷锛岄€傚悎绀惧洟鎷涙柊銆佹搷鍦烘媿鐓у拰鏀惧鍚庢椿鍔紝鏁翠綋杞绘澗涓嶈垂鍔涖€?, scene_tag = '绀惧洟娲诲姩', style_tag = '瀹芥澗浼戦棽', budget_tag = '150-200', cover_tag = '鐑棬绌挎惌' WHERE id = 2;
UPDATE post SET title = '鏍″洯绾︿細涔熻嚜鐒剁殑濂舵补鑹叉俯鏌旀惌閰?, subtitle = '杞昏杽寮€琛惌杩炶。瑁欙紝鐧借壊杩愬姩闉嬭鏁翠綋鏇磋交鏉?, description = '濂舵补鑹插紑琛彔鎼畝绾﹁繛琛ｈ锛屽啀閰嶄笂涓€鍙岀櫧鑹茶繍鍔ㄩ瀷鍜屽竼甯冨寘锛屾俯鏌斾笉鍋氫綔锛岄€傚悎鍛ㄦ湯绾︿細鍜屾牎鍥暎姝ャ€?, scene_tag = '绾︿細', style_tag = '娓呮柊', budget_tag = '150-200', cover_tag = '鏍″洯浼橀€? WHERE id = 3;
UPDATE post SET title = '鐧惧厓鍐呬篃鑳芥悶瀹氱殑鏁欏閫氬嫟绌挎惌', subtitle = '鐧絋鍜岀墰浠旇缁勫悎锛岄€傚悎楂橀閲嶅绌跨潃', description = '绠€鍗曠櫧T鎼厤娴呰壊鐗涗粩瑁欏拰甯嗗竷闉嬶紝鏄緢閫傚悎鏁欏銆侀鍫傚拰瀹胯垗妤间箣闂撮€氬嫟鐨勫疄鐢ㄥ瀷鎼厤銆?, scene_tag = '閫氬嫟', style_tag = '鏋佺畝', budget_tag = '50-100', cover_tag = '棰勭畻鍙嬪ソ' WHERE id = 4;
UPDATE post SET title = '閫傚悎鏍″洯澶滈棿娲诲姩鐨勭敎閰峰彔绌?, subtitle = '琛～銆侀拡缁囪儗蹇冨拰鐭锛屾媿鐓ф洿鍑虹墖', description = '鎸烘嫭琛～鍙犳惌閽堢粐鑳屽績涓庢繁鑹茬煭瑁欙紝鍐嶉厤涔愮闉嬶紝閫傚悎绀惧洟澶滃満銆佷富鎸佹椿鍔ㄥ拰鏍″洯澶滄媿銆?, scene_tag = '绀惧洟娲诲姩', style_tag = '鐢滈叿', budget_tag = '150-200', cover_tag = '澶滈棿姘涘洿' WHERE id = 5;
UPDATE post SET title = '澶嶄範鍛ㄤ篃鑳戒繚鎸佷綋闈㈢殑鑸掗€傜┛鎼?, subtitle = '寮€琛厤闃旇吙瑁わ紝闀挎椂闂村涔犳洿杞绘澗', description = '浣庨ケ鍜屽紑琛惌閰嶆煍杞様鑵胯￥锛岄€傚悎闀挎椂闂磋嚜涔犮€佸涔犲懆鍜屽畨闈欑殑鍥句功棣嗗満鏅紝鑸掗€傚悓鏃朵篃涓嶆樉鎷栨矒銆?, scene_tag = '鏃╁叓', style_tag = '闊╃郴', budget_tag = '100-150', cover_tag = '浜烘皵姒滃崟' WHERE id = 6;

UPDATE post_tag SET tag_value = '灞傛娓呯埥' WHERE id = 1;
UPDATE post_tag SET tag_value = '鏃╁叓鍙嬪ソ' WHERE id = 2;
UPDATE post_tag SET tag_value = '楂橀鍙噸澶? WHERE id = 3;
UPDATE post_tag SET tag_value = '杩愬姩娲诲姏' WHERE id = 4;
UPDATE post_tag SET tag_value = '绀惧洟鍙┛' WHERE id = 5;
UPDATE post_tag SET tag_value = '闈掓槬姘涘洿' WHERE id = 6;
UPDATE post_tag SET tag_value = '娓╂煍绾︿細' WHERE id = 7;
UPDATE post_tag SET tag_value = '鏃犲帇鍔涙惌閰? WHERE id = 8;
UPDATE post_tag SET tag_value = '杞绘澗閫氬嫟' WHERE id = 9;
UPDATE post_tag SET tag_value = '棰勭畻鍙嬪ソ' WHERE id = 10;
UPDATE post_tag SET tag_value = '鏃ュ父鍩虹' WHERE id = 11;
UPDATE post_tag SET tag_value = '鏁欏閫傞厤' WHERE id = 12;
UPDATE post_tag SET tag_value = '鐢滈叿鍙犵┛' WHERE id = 13;
UPDATE post_tag SET tag_value = '澶滈棿娲诲姩' WHERE id = 14;
UPDATE post_tag SET tag_value = '鎷嶇収鍑虹墖' WHERE id = 15;
UPDATE post_tag SET tag_value = '澶嶄範鍛? WHERE id = 16;
UPDATE post_tag SET tag_value = '涔呭潗鍙嬪ソ' WHERE id = 17;
UPDATE post_tag SET tag_value = '鏌斿拰涓€? WHERE id = 18;

UPDATE product_link SET product_name = '琛～ + 閽堢粐椹敳 + 鐧捐ざ瑁?, platform_name = '娣樺疂鏍″洯绮鹃€?, profit_label = '骞冲彴瀵艰喘浣ｉ噾 8%', guide_tip = '璇风粨鍚堢湡瀹為渶姹傛瘮浠峰悗鍐嶄笅鍗曘€? WHERE id = 1;
UPDATE product_link SET product_name = '鍗。 + 宸ヨ瑁?+ 杩愬姩闉?, platform_name = '浜笢鏍″洯搴?, profit_label = '骞冲彴瀵艰喘浣ｉ噾 6%', guide_tip = '杩愬姩鍦烘櫙浼樺厛鑰冭檻鑸掗€傚害鍜岃€愮┛鎬с€? WHERE id = 2;
UPDATE product_link SET product_name = '寮€琛?+ 杩炶。瑁?+ 鐧借壊杩愬姩闉?, platform_name = '澶╃尗鏍″洯搴?, profit_label = '鍝佺墝鍚堜綔鍒嗘垚', guide_tip = '濡傛灉閫氬嫟闇€姹傛洿寮猴紝鍙互鍐嶅姞涓€浠惰交钖勫濂椼€? WHERE id = 3;
UPDATE product_link SET product_name = '鐧絋 + 鐗涗粩瑁?+ 甯嗗竷闉?, platform_name = '鎷煎澶氬鐢熶紭閫?, profit_label = '骞冲彴瀵艰喘浣ｉ噾 5%', guide_tip = '棰勭畻鏈夐檺鏃跺厛涔伴珮澶嶇敤鍩虹娆俱€? WHERE id = 4;
UPDATE product_link SET product_name = '琛～ + 閽堢粐鑳屽績 + 鐭', platform_name = '娣樺疂鏍″洯绮鹃€?, profit_label = '鍝佺墝鍚堜綔鍒嗘垚', guide_tip = '濡傛灉鍦烘櫙鏇存寮忥紝鍙互鎶婄煭瑁欐浛鎹㈡垚涓暱瑁欍€? WHERE id = 5;
UPDATE product_link SET product_name = '寮€琛?+ 闃旇吙瑁?+ 浼戦棽闉?, platform_name = '浜笢鏍″洯搴?, profit_label = '骞冲彴瀵艰喘浣ｉ噾 6%', guide_tip = '澶嶄範鍛ㄧ┛鎼缓璁互鑸掗€傚拰鑰愪箙涓哄厛銆? WHERE id = 6;

UPDATE post_comment SET content = '杩欎釜閰嶈壊鐪熺殑寰堥€傚悎鍥句功棣嗗満鏅€? WHERE id = 1;
UPDATE post_comment SET content = '棰勭畻鍖洪棿寰堢湡瀹烇紝鎴戝厛鏀惰棌浜嗐€? WHERE id = 2;
UPDATE post_comment SET content = '濡傛灉鎹㈡垚杩愬姩闉嬶紝浼氫笉浼氭洿閫傚悎鏃╁叓锛? WHERE id = 3;
UPDATE post_comment SET content = '杩欏纭疄寰堥€傚悎绀惧洟娲诲姩鎷嶇収銆? WHERE id = 4;

UPDATE creator_cooperation SET cooperation_title = '鏄ュ娓呯埥鏍″洯绌挎惌涓撻' WHERE id = 1;
UPDATE creator_cooperation SET cooperation_title = '骞充环閫氬嫟鍩虹娆惧悎浣? WHERE id = 2;
UPDATE creator_cooperation SET cooperation_title = '绀惧洟涓庤繍鍔ㄥ満鏅┛鎼笓棰? WHERE id = 3;

UPDATE commission_record SET income_type = '瀵艰喘浣ｉ噾' WHERE id IN (1, 3);
UPDATE commission_record SET income_type = '鍝佺墝鍒嗘垚' WHERE id = 2;

UPDATE message_notification SET message_type = '浜掑姩', title = '浣犵殑绌挎惌鏂板浜?18 涓敹钘?, content = '鍥句功棣嗛偅濂楁惌閰嶈繕鍦ㄦ寔缁幏寰楁洕鍏夛紝寤鸿琛ュ厖鏇村浜偣鏍囩銆? WHERE id = 1;
UPDATE message_notification SET message_type = '鍚堜綔', title = '鏈変竴涓牎鍥搧鐗屽悎浣滃緟纭', content = '闈掕娊鏍″洯鏈嶉グ甯屾湜鍦?24 灏忔椂鍐呯‘璁ゆ槬瀛ｄ笓棰樺悎浣溿€? WHERE id = 2;
UPDATE message_notification SET message_type = '绯荤粺', title = '鍟嗗搧閾炬帴瀹℃牳宸查€氳繃', content = '浣犳彁浜ょ殑瀵艰喘閾炬帴宸查€氳繃瀹℃牳锛岀幇鍦ㄥ彲浠ュ弬涓庝剑閲戠粺璁°€? WHERE id = 3;
UPDATE message_notification SET message_type = '璇勮', title = '楣垮畞璇勮浜嗕綘鐨勭┛鎼?, content = '濂规兂鐪?100 鍏冮绠椾互鍐呯殑鏇村鎼厤寤鸿銆? WHERE id = 4;
UPDATE message_notification SET message_type = '鏀剁泭', title = '鏈懆瀵艰喘鏀剁泭姝ｅ湪缁撶畻', content = '浣犳湰鍛ㄧ殑瀵艰喘鍐呭棰勮缁撶畻 86.50 鍏冿紝鍙墠寰€鍒涗綔鑰呮敹鐩婁腑蹇冩煡鐪嬨€? WHERE id = 5;


