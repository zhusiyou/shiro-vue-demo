package com.sv.shirovue.bean;

import java.util.Set;

/**
 * @author: zhudawei
 * @date: 2020/3/10
 * @description:
 */
public class User {
    private String id;
    private String userName;
    private String password;


    public User(String id, String name, String password, Set<Role> roles){
        this.id = id;
        this.userName = name;
        this.password = password;
        this.roles = roles;
    }

    public User(){}
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    /**
     * 用户对应的角色集合
     */
    private Set<Role> roles;

}
