import { useEffect, useState } from 'react';

type ItemType = "dot" | "page";

interface Item {
    selected: boolean;
    type: ItemType;
    page: number;
}

const generateRange = (start: number, end: number): Item[] => {
    return Array.from(
        { length: end - start },
        (_, index) => ({
            selected: false,
            type: "page",
            page: start + index
        })
    );
};

const usePagination = () => {
    const [pageSize, setPageSize] = useState(10);
    const [range, setRange] = useState<Item[]>([]);
    const totalData = 76;
    let totalPage = Math.ceil(totalData / pageSize);
    let firstElement = 1;
    let lastElement = totalPage;

    useEffect(() => {
        if (totalPage > 5) {
            setRange([...generateRange(firstElement, 6)])
        }
    }, [])

    return { pageSize, setPageSize, range };
};

export default usePagination;