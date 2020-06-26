import React, { useState, useEffect } from "react";
import className from "classnames/bind";
import styles from "../components/MainView/MainView.scss";
import Input from '../components/MainView/Input';
import Button from '../components/MainView/Button';
import SearchList from '../components/MainView/SearchList';
import Search from '../components/MainView/Search';
import axios from "axios";


const cx = className.bind(styles);

const MainView = () => {
    const [url, setUrl] = useState("");
    const [searchs, setSearchs] = useState([]);

    const createUrl = () => {
        axios.post(`/url/`, {
            origin_url: url
        }).then(response => {
            if (response.status === 200) {
                console.log(response);
            }
        })
    }

    const getSearchs = () => {
        axios.get('/url/')
            .then(response => {
                console.log(response);
                if (response.status == 200) {
                    setSearchs(response.data);
                }
                else {
                    console.error(response);
                }
            })
        console.log(searchs);
    }

    const searchComponents = searchs.map(({ id, shorten, origin_url }) => {
        return (
            <Search
                id={id}
                shorten={shorten}
                origin_url={origin_url}
            />
        )
    })

    useEffect(() => {
        getSearchs();
    }, []);

    return (
        <div className={cx("main-page")}>
            <div className={cx("content")}>
                <div className={cx("upper")}>
                    <Input
                        className={'urlInput'}
                        placeHolder={'Shorten your link'}
                        onChangeEvent={(e) => setUrl(e.target.value)}
                    />
                    <Button
                        className={'urlShortenButton'}
                        value={'Shorten'}
                        onClick={createUrl}
                    />
                </div>
                <div className={cx("lower")}>
                    <SearchList
                        searchs={searchComponents}
                    />
                </div>
            </div>
        </div>
    )
}

export default MainView;