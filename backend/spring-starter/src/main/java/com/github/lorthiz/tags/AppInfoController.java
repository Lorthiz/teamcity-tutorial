package com.github.lorthiz.tags;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.info.BuildProperties;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/health")
@RequiredArgsConstructor
public class AppInfoController {

    private final BuildProperties buildProperties;

    @GetMapping
    public BuildProperties get(){
        return buildProperties;
    }


}
