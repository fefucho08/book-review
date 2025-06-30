import { faBookmark as solid } from "@fortawesome/fontawesome-free-solid";
import { faBookmark as empty } from "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function BookMark({ id }) {
    const [userInfo, setUserInfo] = useState({});
    const [bookmarked, isBookmarked] = useState(false);

    useEffect(() => {
        setUserInfo(JSON.parse(localStorage.getItem("userinfo")));
    }, []);

    useEffect(() => {
        if (userInfo.bookmarks) {
            isBookmarked(userInfo.bookmarks.includes(id));
        }
    }, [userInfo, id]);

    const updateLocalStorage = (newInfo) => {
        localStorage.setItem("userinfo", JSON.stringify(newInfo));
    };

    const bookMarkHandler = () => {
        const bookmarks = userInfo.bookmarks;
        if (bookmarked) {
            bookmarks.splice(bookmarks.indexOf(id), 1);
        } else {
            bookmarks.push(id);
        }
        const newInfo = {
            ...userInfo,
            bookmarks,
        };
        updateLocalStorage(newInfo);
        setUserInfo(newInfo);
    };

    return (
        <button type="button" onClick={bookMarkHandler}>
            <FontAwesomeIcon icon={bookmarked ? solid : empty} />
        </button>
    );
}
