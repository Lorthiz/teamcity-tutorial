import Endpoint from "./BaseUrl";
import {Tag} from "../../interfaces/Tag";
import {TagPage} from "../../interfaces/TagPage";

export default class TagsApi {

    static fetchTags(page: number): Promise<TagPage> {
        const searchParams = new URLSearchParams({
            page: page.toString(),
        });

        return fetch(`${Endpoint}/tags?${searchParams}`, {headers: {"Content-Type": "application/json"}})
            .then((result) => result.json())
    }

    static fetchTagById(tagId: number): Promise<Tag> {
        return fetch(`${Endpoint}/tags/${tagId}`, {headers: {"Content-Type": "application/json"}})
            .then((result) => result.json())
    }

    static createNewTag(tagName: string): Promise<Tag> {
        return fetch(`${Endpoint}/tags`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(tagName)
        }).then((result => result.json()));
    }


    static updateTag(tagId: number, tagName: string): Promise<Tag> {
        return fetch(`${Endpoint}/tags/${tagId}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: tagName
        }).then((result => result.json()));
    }

    static deleteTag(tagId: number): Promise<Response> {
        return fetch(`${Endpoint}/tags/${tagId}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
        });
    }

}
