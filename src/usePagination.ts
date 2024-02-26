import { useMemo, useState } from 'react';

type ItemType = "dot" | "page";

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

let dot: Item = {
    type: 'dot',
    selected: false,
    page: 0,
}

const usePagination = ({ count = 76 }: { count: number }) => {
    const [selected, setSelected] = useState<Item>({ page: 1, type: 'page', selected: true })
    const [pageSize, setPageSize] = useState(10);
    const totalData = count;

    let totalPage = Math.ceil(totalData / pageSize);

    let firstElement: Item = { page: 1, selected: false, type: 'page' };
    let lastElement: Item = { page: totalPage, selected: false, type: 'page' };

    let sibilings = 3;
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
            return [...generateRange(1, totalPageNumbers), dot, lastElement]
        }
        if (shouldShowLeftDot && !shouldShowRightDot) {
            return [firstElement, dot, ...generateRange(totalPage - totalPageNumbers + 1, totalPage)]
        }
        if (shouldShowLeftDot && shouldShowRightDot) {
            return [firstElement, dot, ...generateRange(leftSibiling.page, rightSibiling.page), dot, lastElement]
        }
        return [firstElement, dot, ...generateRange(leftSibiling.page, rightSibiling.page), dot, lastElement]
    }, [selected])

    return { selected, setSelected, pageSize, setPageSize, paginationRange };
};

export default usePagination;