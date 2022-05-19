package com.github.lorthiz.tags;


import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/tags")
@RequiredArgsConstructor
public class TagsService {

    private final TagsRepository tagsRepository;
    private final TagsMapper tagsMapper;

    public TagPage fetchPage(PageRequest pageRequest) {
        var page = tagsRepository.findAll(pageRequest);
        return TagPage.builder()
                .currentPage(page.getPageable().getPageNumber())
                .totalPages(page.getTotalPages())
                .list(tagsMapper.mapToDtos(page.getContent()))
                .build();
    }

    public TagDto fetchById(Long id) {
        return tagsMapper.mapToDto(tagsRepository.findById(id).orElse(null));
    }

    public TagDto createNewTag(String tagName) {
        var tag = tagsRepository.findByTagName(tagName);
        var newTag = tag == null ? createEmptyTag(tagName) : tag;
        return tagsMapper.mapToDto(tagsRepository.save(newTag));
    }

    public TagDto updateTag(Long id, String tagName) {
        var optTag = tagsRepository.findById(id);
        if (optTag.isEmpty()) return null;
        var tag = optTag.get();
        tag.setTagName(tagName);
        return tagsMapper.mapToDto(tagsRepository.save(tag));
    }

    public void deleteTag(Long id) {
        var optTag = tagsRepository.findById(id);
        if (optTag.isEmpty()) return;
        tagsRepository.delete(optTag.get());
    }

    private Tag createEmptyTag(String tagName) {
        var tag = new Tag();
        tag.setTagName(tagName);
        return tag;
    }
}
