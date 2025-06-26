import http from "../http-common";

export default class GetBooks {
    static searchByTitle(title) {
        return http.get("/", {
            params: {
                q: `intitle:${title}`,
                maxResults: 40,
            },
        });
    }

    static searchById(id) {
        return http.get(`/${id}`);
    }
}
