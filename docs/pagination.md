# Pagination

This section describes how to implement pagination for tag pages. Use the following code snippet to paginate results:

```javascript
const paginate = (items, pageSize) => {
    const pages = Math.ceil(items.length / pageSize);
    return Array.from({ length: pages }, (v, i) => items.slice(i * pageSize, i * pageSize + pageSize));
};
```

Ensure that the pagination is set to display 20 posts per page.