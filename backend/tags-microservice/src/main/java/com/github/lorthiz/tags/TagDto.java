package com.github.lorthiz.tags;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class TagDto {

    private Long id;

    private String tagName;

    private Integer timesUsed;

}
