import React from 'react'


export default function Spotify() {
    return (
        <div className="Header--spotify">
            <iframe
                style=
                {{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/41fXeYArdTRuSDO4C3Nabg?utm_source=generator&theme=0"
                width="100%"
                height="100%"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy" >
            </iframe >
        </div>

    )
}