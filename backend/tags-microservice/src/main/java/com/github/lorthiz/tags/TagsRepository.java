package com.github.lorthiz.tags;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public interface TagsRepository extends JpaRepository<Tag, Long> {

    Page<Tag> findAll(Pageable pageable);

    Tag findByTagName(String tagName);

}
