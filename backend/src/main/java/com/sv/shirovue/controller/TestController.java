package com.sv.shirovue.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author: zhudawei
 * @date: 2020/3/10
 * @description:
 */
@RestController
public class TestController {

    @GetMapping("/test")
    public String test(){
        return "hello world";
    }
}
