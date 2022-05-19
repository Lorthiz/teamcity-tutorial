import React, {useEffect} from "react";
import Pagination from "react-bootstrap/Pagination";

interface Props {
    totalPages: number;
    currentPage: number;

    setCurrentPage(pageNumber: number): void;
}

export const PaginationComponent = ({
                                        totalPages,
                                        currentPage,
                                        setCurrentPage
                                    }: Props) => {
    const isCurrentPageFirst = currentPage === 0;
    const isCurrentPageLast = currentPage === totalPages - 1;

    const changePage = (pageNumber: number) => {
        if (currentPage === pageNumber) return;
        setCurrentPage(pageNumber);
    };

    const setLastPageAsCurrent = () => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    };

    let isPageNumberOutOfRange: boolean;

    const pageNumbers = [...new Array(totalPages)].map((_, index) => {
        const pageNumber = index;
        const isPageNumberFirst = pageNumber === 0;
        const isPageNumberLast = pageNumber === totalPages;
        const isCurrentPageWithinTwoPageNumbers =
            Math.abs(pageNumber - currentPage) <= 2;

        if (
            isPageNumberFirst ||
            isPageNumberLast ||
            isCurrentPageWithinTwoPageNumbers
        ) {
            isPageNumberOutOfRange = false;
            return (
                <Pagination.Item
                    key={pageNumber}
                    onClick={() => changePage(pageNumber)}
                    active={pageNumber === currentPage}
                >
                    {pageNumber + 1}
                </Pagination.Item>
            );
        }

        if (!isPageNumberOutOfRange) {
            isPageNumberOutOfRange = true;
            return <Pagination.Ellipsis key={pageNumber} className="muted"/>;
        }

        return null;
    });

    useEffect(setLastPageAsCurrent, [totalPages]);

    return <Pagination className={'justify-content-center'}>
        <Pagination.First
            onClick={() => changePage(0)}
            disabled={isCurrentPageFirst}
        />
        <Pagination.Prev
            onClick={() => changePage(currentPage - 1)}
            disabled={isCurrentPageFirst}
        />

        {pageNumbers}

        <Pagination.Next
            onClick={() => changePage(currentPage + 1)}
            disabled={isCurrentPageLast}
        />
        <Pagination.Last
            onClick={() => changePage(totalPages - 1)}
            disabled={isCurrentPageLast}
        />
    </Pagination>
};

