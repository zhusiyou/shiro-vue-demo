package com.sv.shirovue.controller;

import com.alibaba.fastjson.JSONObject;
import com.sv.shirovue.bean.User;
import com.sv.shirovue.service.LoginService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationException;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.apache.shiro.authz.annotation.RequiresRoles;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;


/**
 * @author: zhudawei
 * @date: 2020/3/10
 * @description:
 */
@RestController
public class LoginController {

    @Autowired
    private LoginService loginService;

    @RequestMapping("/login")
    public JSONObject login(User user) {

        JSONObject result = new JSONObject();

        //添加用户认证信息
        Subject subject = SecurityUtils.getSubject();
        UsernamePasswordToken usernamePasswordToken = new UsernamePasswordToken(
                user.getUserName(),
                user.getPassword()
        );
        try {
            //进行验证，这里可以捕获异常，然后返回对应信息
            subject.login(usernamePasswordToken);
//            subject.checkRole("admin");
//            subject.checkPermissions("query", "add");

            User u = loginService.getUserByName(user.getUserName());

//            result.put("roles", u.getRoles());
            result.put("roleNames", u.getRoles().stream().map(r->r.getRoleName()).collect(Collectors.toSet()));

//            Set<Permissions> permissions = u.getRoles().stream().map(r->r.getPermissions())
//                    .flatMap(Collection::stream)
//                    .collect(Collectors.toSet());
//            result.put("permissions", permissions);

            Set<String> permissionNames = u.getRoles().stream().map(r->r.getPermissions())
                    .flatMap(Collection::stream)
                    .collect(Collectors.toSet())
                    .stream()
                    .map(p -> p.getPermissionsName())
                    .collect(Collectors.toSet());


            result.put("permissionNames", permissionNames);

            result.put("msg", "login success");
        } catch (AuthenticationException e) {
            e.printStackTrace();
            result.put("msg", "账号或密码错误！");
        } catch (AuthorizationException e) {
            e.printStackTrace();
            result.put("msg", "没有权限");
        }
        return result;
    }
    //注解验角色和权限
    @RequiresRoles("admin")
    @RequiresPermissions("add")
    @RequestMapping("/index")
    public String index() {
        return "index!";
    }
}
