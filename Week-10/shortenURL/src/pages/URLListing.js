import React, { useState, useEffect } from "react";
import { useToasts } from 'react-toast-notifications';
import { Clipboard, TrashFill } from 'react-bootstrap-icons';

const URLListing = (props) => {
    // const { addToast } = useToasts();

    let { urlObj, setFlag, flag } = { ...props }

    const copyUrl = (url) => {
        navigator.clipboard.writeText(url)
        // addToast('Short URL copied to clipboard', { appearance: 'success', autoDismiss: true });
    }
    const deleteObj = (url) => {
        if (localStorage.getItem('URLObj') !== null) {
            let URLObj = JSON.parse(localStorage.getItem("URLObj"));
            delete URLObj[url];
            localStorage.setItem('URLObj', JSON.stringify(URLObj));
            setFlag(!flag)
            // addToast('Short URL deleted', { appearance: 'success', autoDismiss: true });
        }
    }

    return (
        <>
            <div className="card bg-info">
                <div className="card-body">
                    <div class="container text-center">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Original URL</th>
                                    <th scope="col">Shortened URL</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(urlObj)?.map((value, i) => {
                                    return <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td className="truncate"><a href={value} target="_blank">{value}</a> </td>
                                        <td><a href={urlObj[value]?.full_short_link} target="_blank">{urlObj[value]?.full_short_link}</a></td>
                                        <td>
                                            <Clipboard onClick={() => copyUrl(urlObj[value]?.full_short_link)}  className="c-pointer"/> 
                                            <TrashFill onClick={() => deleteObj(value)} className="c-pointer"/>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>


                    </div>

                </div>
            </div>
        </>
    )
}
export default URLListing;