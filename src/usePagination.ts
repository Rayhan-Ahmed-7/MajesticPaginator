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

    let sibilings = 2;
    let totalPageNumbers = sibilings + 5;

    let leftSibiling = { page: selected.page - 1, selected: false, type: 'page' };
    let rightSibiling = { page: selected.page + 1, selected: false, type: 'page' };

    let paginationRange: Item[] = useMemo(() => {
        if (totalPage <= totalPageNumbers) {
            return [...generateRange(1, totalPage)]
        }
        let shouldShowLeftDot = leftSibiling.page > 2;
        let shouldShowRightDot = rightSibiling.page < totalPage - 2;

        if (shouldShowRightDot && !shouldShowLeftDot) {
            return [...generateRange(1, 5), dot, lastElement]
        }
        if (shouldShowLeftDot && !shouldShowRightDot) {
            return [firstElement, dot, ...generateRange(totalPage - 5 + 1, totalPage)]
        }
        if (shouldShowLeftDot && shouldShowRightDot) {
            return [firstElement, dot, ...generateRange(leftSibiling.page, rightSibiling.page), dot, lastElement]
        }
        return []
    }, [selected])

    return { selected, setSelected, pageSize, setPageSize, paginationRange };
};

export default usePagination;