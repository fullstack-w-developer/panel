export const formatMeta = (meta: MetaResponse) => {
    if (meta) {
        return {
            currentPage: meta.current_page,
            lastPage: meta.last_page,
            from: meta.from,
            to: meta.to,
            total: meta.total,
        };
    }
    return {
        currentPage: 1,
        lastPage: 1,
        from: 1,
        to: 1,
        total: 1,
    };
};
