package com.github.lorthiz.tags;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TagsMapper {

    private static final TagDto emptyTagDto = TagDto.builder()
            .id(-1L)
            .tagName("")
            .timesUsed(0)
            .build();

    public List<TagDto> mapToDtos(List<Tag> tags) {
        if (tags == null) return new ArrayList<>();
        return tags.stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    public TagDto mapToDto(Tag tag) {
        if (tag == null) return emptyTagDto;
        return TagDto.builder()
                .id(tag.getId())
                .tagName(tag.getTagName())
                .timesUsed(tag.getTimesUsed())
                .build();
    }

}
