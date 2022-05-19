package com.github.lorthiz.tags;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class TagPage {
    private long totalPages;
    private int currentPage;
    private List<TagDto> list;
}
