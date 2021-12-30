import { useState, useEffect } from "react";
import YouTube from "react-youtube";
var getYoutubeId = require('get-youtube-id');


function YoutubeVids() {
    const [ url, setUrl ] = useState('');
    const [ ids, setIds ] = useState([
        getYoutubeId('https://www.youtube.com/watch?v=Wf3Y7F7D3R0&t=297s'),
        getYoutubeId('https://www.youtube.com/watch?v=Dr6Ze5V0hyY'),
        getYoutubeId('https://www.youtube.com/watch?v=3F46DwAHk88&t=2s')
    ]);

    // 'https://www.youtube.com/watch?v=Wf3Y7F7D3R0&t=297s',
    // 'https://www.youtube.com/watch?v=Dr6Ze5V0hyY',
    // 'https://www.youtube.com/watch?v=3F46DwAHk88&t=2s'

    function handleChange(evt) {
        setUrl(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        setIds([ ...ids, getYoutubeId(url) ]);
        setUrl('');
    }

    const opts = {
        playerVars: {
            autoplay: 0,
        }
    }

    useEffect(() => {
        console.log()
    }, [ids])

    const allVids = ids.slice(0).reverse().map( id => {
        return(
            <div className="each-slide">
                <YouTube key={id} videoId={id} opts={opts}/>
            </div>
        )
    })

    return ( 
        <main className="youtubeCont">
            <label className="vlogLbl">My Vlogs</label>
            <form onSubmit={handleSubmit} className="vlogsForm">
                <label htmlFor="vidInput" >Add Youtube Video</label>
                <input id="vidInput" name="vidInput" type="text" onChange={handleChange} value={url} placeholder="Youtube URL ..."/>
                <button type="submit">Add</button>
            </form>

            {allVids}



        </main>
    );
}

export default YoutubeVids;