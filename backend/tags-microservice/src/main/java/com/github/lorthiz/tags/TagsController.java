package com.github.lorthiz.tags;


import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/tags")
@RequiredArgsConstructor
public class TagsController {

    private final TagsService tagsService;

    @GetMapping
    public TagPage get(@RequestParam(defaultValue = "0") Integer page,
                       @RequestParam(required = false) Optional<Integer> size) {
        var pageable = PageRequest.of(page, size.orElse(15));
        return tagsService.fetchPage(pageable);
    }

    @GetMapping("/{id}")
    public TagDto getById(@PathVariable Long id) {
        return tagsService.fetchById(id);
    }

    @PostMapping
    public TagDto post(@RequestBody String tagName) {
        return tagsService.createNewTag(tagName);
    }

    @PutMapping("/{id}")
    public TagDto update(@PathVariable Long id, @RequestBody String tagName) {
        return tagsService.updateTag(id, tagName);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        tagsService.deleteTag(id);
    }
}
