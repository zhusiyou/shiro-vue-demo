package com.sv.shirovue.bean;

/**
 * @author: zhudawei
 * @date: 2020/3/10
 * @description:
 */
public class Permissions {
    private String id;
    private String permissionsName;

    public Permissions(String id, String name){
        this.id = id;
        this.permissionsName = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPermissionsName() {
        return permissionsName;
    }

    public void setPermissionsName(String permissionsName) {
        this.permissionsName = permissionsName;
    }
}
