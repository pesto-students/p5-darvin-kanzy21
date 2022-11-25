import React, { useState, useMemo } from "react";
import { useToasts } from 'react-toast-notifications';

const URLCard = (props) => {
    const { addToast } = useToasts();
    const [url, setUrl] = useState('');
    const validateURL = () => {
        var pattern = new RegExp('^(http(s)?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        var res = pattern.test(url);
        return (res)
    }
    const shortenUrl = async () => {
        if (validateURL()) {
            const requestOptions = {
                // mode: 'no-cors', <----------------------NEVER USE THIS------------------------>
                'Access-Control-Allow-Origin': '*',
                method: 'GET',
                'Content-Type': 'application/json',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': ' application/json',
                    'Access-Control-Allow-Origin': '*'
                },
            };
            await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`, requestOptions)
                .then(response => {
                    response.json().then((res) => { console.log(res);storeURL(res) });
                }).catch((err) => {
                    addToast('Please try later', { appearance: 'error', autoDismiss: true });
                })
        } else {
            addToast('Invalid URL', { appearance: 'error', autoDismiss: true });
        }
    }
    const storeURL = (response)=>{
        if (localStorage.getItem('URLObj') !== null) {
            let URLObj = JSON.parse(localStorage.getItem("URLObj"));
            URLObj[url] = response?.result
            localStorage.setItem('URLObj', JSON.stringify(URLObj));
        } else {
            localStorage.setItem('URLObj', JSON.stringify({[url] : response?.result}));
        }
    }

    // const letterCount = useMemo(() => shortenUrl(), [url]);
    return (
        <>
            <div className="card bg-info">
                <div className="card-body">
                    <div className="input-group mb-3">
                        <div className="input-group-text" style={{ width: '90%' }}>
                            <input type="url" className="form-control" value={url}
                                onChange={(e) => { setUrl(e?.target?.value) }}
                                placeholder="Paste that long URL here" aria-label="url" />
                        </div>
                        <button className="btn btn-primary" type="button" onClick={() => shortenUrl()}>Shorten IT!</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default URLCard;