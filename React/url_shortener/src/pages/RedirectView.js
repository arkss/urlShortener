import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router'
import axios from "axios";

const RedirectView = ({ match }) => {
    const [shorten] = useState(match.url.split('/').pop());
    const [originUrl, setOriginUrl] = useState("");
    const [isRedirect, setIsRedirect] = useState(false);

    const getOriginUrl = () => {
        axios.get(`/${shorten}/`)
            .then(response => {
                console.log(response);
                if (response.data.response === 'success') {
                    console.log("success");
                    setIsRedirect(true);
                    setOriginUrl(response.data.data);
                }
            })
    }

    const handleOriginUrl = () => {
        window.location.href = originUrl;
    }

    useEffect(() => {
        getOriginUrl();
    }, []);

    if (isRedirect) {
        return (
            <button onclick={handleOriginUrl()}>
            </button >
        )
    } else {
        return (
            <div>ing... {shorten} {isRedirect}</div>
        )
    }

}

export default RedirectView;