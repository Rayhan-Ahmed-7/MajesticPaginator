import { useMemo, useState } from 'react';

type ItemType = "left_dot" | "right_dot" | "page";

interface Item {
    selected: boolean;
    type: ItemType;
    page: number;
}

const generateRange = (start: number, end: number): Item[] => {
    return Array.from(
        { length: end - start + 1 },
        (_, index) => ({
            selected: false,
            type: "page",
            page: start + index
        })
    );
};

let leftDot: Item = {
    type: 'left_dot',
    selected: false,
    page: 0,
}
let rightDot: Item = {
    type: 'right_dot',
    selected: false,
    page: 0,
}

const usePagination = ({ total = 76, currentPage }: { total: number, currentPage: number }) => {

    const [pageSize, setPageSize] = useState(10);

    let totalPage = Math.ceil(total / pageSize);

    const [selected, setSelected] = useState<Item>({ page: currentPage <= totalPage ? currentPage : 1, type: 'page', selected: true })


    const goTo = (index: number) => {
        setSelected({ page: index < 1 ? 1 : index >= totalPage ? totalPage : index, type: 'page', selected: true })
    }

    let firstElement: Item = { page: 1, selected: false, type: 'page' };
    let lastElement: Item = { page: totalPage, selected: false, type: 'page' };

    let sibilings = 1;
    let totalPageNumbers = sibilings + 5;

    let leftSibiling = { page: Math.max(selected.page - sibilings, 1), selected: false, type: 'page' };
    let rightSibiling = { page: Math.min(selected.page + sibilings, totalPage), selected: false, type: 'page' };

    let paginationRange: Item[] = useMemo(() => {
        if (totalPage <= totalPageNumbers) {
            return [...generateRange(1, totalPage)]
        }
        // add dots only when siblings are closed to length +- 2;
        let shouldShowLeftDot = leftSibiling.page > 2;
        let shouldShowRightDot = rightSibiling.page < totalPage - 2;

        if (shouldShowRightDot && !shouldShowLeftDot) {
            return [...generateRange(1, totalPageNumbers), rightDot, lastElement]
        }
        if (shouldShowLeftDot && !shouldShowRightDot) {
            return [firstElement, leftDot, ...generateRange(totalPage - totalPageNumbers + 1, totalPage)]
        }
        if (shouldShowLeftDot && shouldShowRightDot) {
            return [firstElement, leftDot, ...generateRange(leftSibiling.page, rightSibiling.page), rightDot, lastElement]
        }
        return [firstElement, leftDot, ...generateRange(leftSibiling.page, rightSibiling.page), rightDot, lastElement]
    }, [selected, pageSize])

    return { selected, setSelected, totalPage, pageSize, setPageSize, paginationRange, goTo };
};

export default usePagination;