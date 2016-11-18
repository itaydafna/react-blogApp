export const sortDescending = (column) => ({
    type: 'SORT_DESCENDING',
    column
});

export const sortAscending = (column) => ({
    type: 'SORT_ASCENDING',
    column
});
