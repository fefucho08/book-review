import http from "../http-common";

export default class GetBooks {
    static searchByTitle(title, printType = "all") {
        return http.get("/", {
            params: {
                q: `intitle:${title}`,
                printType: printType,
                maxResults: 40,
            },
        });
    }
}
