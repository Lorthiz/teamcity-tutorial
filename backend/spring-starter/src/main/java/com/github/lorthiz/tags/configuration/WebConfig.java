package com.github.lorthiz.tags.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedMethods("*");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
                .addResourceHandler("/**/*.css", "/**/*.html", "/**/*.js", "/**/*.jsx", "/**/*.png", "/**/*.ttf", "/**/*.woff", "/**/*.woff2", "/**/*.json", "/**/*.svg")
                .setCachePeriod(0)
                .addResourceLocations("file:/frontend/static/");

        registry.addResourceHandler("/", "/**")
                .setCachePeriod(0)
                .addResourceLocations("file:/frontend/static/index.html")
                .resourceChain(true)
                .addResolver(new PathResourceResolver() {
                    @Override
                    protected Resource getResource(String resourcePath, Resource location) {
                        if (resourcePath.startsWith("/api/v1") || resourcePath.startsWith("api/v1")) {
                            return null;
                        }

                        return location.exists() && location.isReadable() ? location : null;
                    }
                });
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/")
                .setViewName("forward:/index.html");
    }

}