package com.github.lorthiz.tags;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "tag")
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "tag_name")
    private String tagName;

    @Column(name = "times_used")
    private Integer timesUsed;

}
