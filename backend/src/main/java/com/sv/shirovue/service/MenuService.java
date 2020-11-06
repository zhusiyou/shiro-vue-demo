package com.sv.shirovue.service;

import com.alibaba.fastjson.JSONArray;

/**
 * @author: zhudawei
 * @date: 2020/10/31
 * @description:
 */
public interface MenuService {
    JSONArray getMenus(String[] roles);
}
