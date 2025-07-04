import http from "../http-common";

export default class GetBooks {
    static list(search, filter = "title", printType = "all") {
        return http.get("/", {
            params: {
                q: `in${filter}:${search}`,
                printType: printType,
                maxResults: 40,
            },
        });
    }
    //search the books form ID
    static getById(id) {
        return http.get(`/${id}`);
    }
}
