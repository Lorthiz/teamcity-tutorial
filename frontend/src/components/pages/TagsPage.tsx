import React, {useEffect, useState} from "react";
import {Tag} from "../../interfaces/Tag";
import TagsApi from "../../services/api/TagsApi";
import {Table} from "react-bootstrap";
import {PaginationComponent} from "../PaginationComponent";

export const TagsPage = () => {
    const [tags, setTags] = useState<Tag[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        TagsApi.fetchTags(currentPage)
            .then(tagsPage => {
                setTags(tagsPage.list);
                setTotalPages(tagsPage.totalPages);
            })
    }, [currentPage])

    return <>
        <Table size="sm" hover>
            <thead>
            <tr>
                <th style={{width: '10%'}}>ID</th>
                <th style={{width: '70%'}}>Tag Name</th>
                <th style={{width: '20%'}}>Times Used</th>
            </tr>
            </thead>
            <tbody>
            {tags.map(tag =>
                <tr key={tag.id}>
                    <td>{tag.id}</td>
                    <td>#{tag.tagName}</td>
                    <td>{tag.timesUsed}</td>
                </tr>
            )}
            </tbody>
        </Table>
        <PaginationComponent currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>
    </>
}
