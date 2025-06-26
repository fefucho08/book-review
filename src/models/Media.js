export class Media {
    constructor({
        id,
        volumeInfo: {
            title,
            authors,
            publisher,
            publishedDate,
            pageCount,
            description,
        },
    }) {
        this.id = id;
        this.title = title;
        this.authors = authors;
        this.publisher = publisher;
        this.pubDate = new Date(publishedDate);
        this.pageCount = parseInt(pageCount);
        this.description = description;
    }
}
