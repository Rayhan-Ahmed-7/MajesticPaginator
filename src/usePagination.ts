import React, { useEffect, useState } from 'react';

const usePagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [range, setRange] = useState<number[]>([])
    const totalData = 76;

    useEffect(() => {

        setRange(generateRange(4, 8))
    },[])
    const generateRange = (start: number, end: number) => Array.from(
        { length: end - start },
        (value, index) => start + index
    )
    console.log(generateRange(4, 8))

    return { currentPage, setCurrentPage, pageSize, setPageSize, range };
};

export default usePagination;