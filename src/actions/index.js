export function selectBook(book) {
    // selectBook is an ActionCreator it needs to retunr an action,
    // an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

// we need to wire it up to redux
