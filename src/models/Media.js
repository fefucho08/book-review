export const VOLUME_TYPES = {
    BOOK: "BOOK",
    MAGAZINE: "MAGAZINE",
    ALL: "ALL",
};

export class Media {
    constructor(
        id,
        title,
        authors,
        publisher,
        pageCount,
        description,
        imageLinks,
        previewLink,
        printType
    ) {
        this.id = id;
        this.title = title;
        this.authors = authors;
        this.publisher = publisher;
        this.pageCount = parseInt(pageCount);
        this.description = description.replace(/<\/?[^>]+(>|$)/g, "");
        this.images = imageLinks;
        this.link = previewLink;
        this.type = printType;
    }
}

export class Book extends Media {
    constructor({
        id,
        volumeInfo: {
            title = "",
            authors = [],
            publisher = "",
            pageCount = null,
            description = "",
            imageLinks = {},
            previewLink = "",
            averageRating = 0,
            ratingsCount = 0,
            contentVersion = null,
            categories = [],
            publishedDate = "",
        },
    }) {
        super(
            id,
            title,
            authors,
            publisher,
            pageCount,
            description,
            imageLinks,
            previewLink,
            VOLUME_TYPES.BOOK
        );
        this.averageRating = parseFloat(averageRating);
        this.ratingsCount = parseInt(ratingsCount);
        this.contentVersion = contentVersion;
        this.categories = categories;
        if (publishedDate) {
            this.pubDate = publishedDate.split("-")[0];
        }
    }
}

export class Magazine extends Media {
    constructor({
        id,
        volumeInfo: {
            title = "",
            authors = [],
            publisher = "",
            pageCount = null,
            description = "",
            imageLinks = {},
            previewLink = "",
            publishedDate = null,
            subtitle = "",
        },
    }) {
        super(
            id,
            title,
            authors,
            publisher,
            pageCount,
            description,
            imageLinks,
            previewLink,
            VOLUME_TYPES.MAGAZINE
        );
        this.pubDate = publishedDate;
        this.subtitle = subtitle;
    }
}
