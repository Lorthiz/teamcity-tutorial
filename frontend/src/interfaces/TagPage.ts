import {Tag} from "./Tag";

export interface TagPage {
    totalPages: number;
    currentPage: number;
    list: Tag[];
}
