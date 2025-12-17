package com.backendx.backend.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CheckStatus
{
    @GetMapping("/")
    public String checkStatus()
    {
        return "Application is Working Successfully!";
    }
}
