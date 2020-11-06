package com.sv.shirovue.service.impl;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.sv.shirovue.service.MenuService;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashMap;

/**
 * @author: zhudawei
 * @date: 2020/10/31
 * @description:
 */
@Service
public class MenuServiceImpl implements MenuService {
    private static String PATH = "path";
    private static String NAME = "name";
    private static String META = "meta";
    private static String TITLE = "title";
    private static String CHILDREN = "children";
    private static String COMPONENT = "component";

    @Override
    public JSONArray getMenus(String[] roles) {
        JSONObject sms = new JSONObject();
        sms.put(PATH, "/sms");
        sms.put(NAME, "ShortMessage");
        sms.put(COMPONENT, "/Layout");

        JSONObject smsMeta = new JSONObject();
        smsMeta.put(TITLE, "短信服务");
        sms.put(META, smsMeta);

//        next
        JSONObject next = new JSONObject();
        next.put(PATH, "sign");
        next.put(NAME, "Sign");
        next.put(COMPONENT, "/sms/Sign");

        JSONObject nextMeta = new JSONObject();
        nextMeta.put(TITLE, "签名管理");
        nextMeta.put("Component", "HomeOutlined");
        next.put(META, nextMeta);

//        account
        JSONObject account = new JSONObject();
        account.put(PATH, "account");
        account.put(NAME, "Account");
        account.put(COMPONENT, "/sms/Account");

        JSONObject accountMeta = new JSONObject();
        accountMeta.put(TITLE, "账号管理");
        accountMeta.put("Component", "SettingFilled");
        account.put(META, accountMeta);

        sms.put(CHILDREN, new JSONObject[]{next, account});

        return new JSONArray(Arrays.asList(sms));
    }
}
