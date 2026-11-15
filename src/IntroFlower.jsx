import "./IntroFlower.css"

export default function IntroFlower()
{
    return( 
        <div className="flower-modal-overlay">
            <section className="flower-modal">
                <div class="flower">
                    <svg viewBox="0 0 400 400" class="flower-svg">
                        <defs>
                            <radialGradient id="petalGradient">
                                <stop offset="0%" stop-color="#ffd6e7"/>
                                <stop offset="100%" stop-color="#e75491"/>
                            </radialGradient>
                        </defs>

                        <g class="petals">

                            <ellipse cx="200" cy="105" rx="38" ry="75"
                                    fill="url(#petalGradient)"/>

                            <ellipse cx="200" cy="105" rx="38" ry="75"
                                    fill="url(#petalGradient)"
                                    transform="rotate(45 200 200)"/>

                            <ellipse cx="200" cy="105" rx="38" ry="75"
                                    fill="url(#petalGradient)"
                                    transform="rotate(90 200 200)"/>

                            <ellipse cx="200" cy="105" rx="38" ry="75"
                                    fill="url(#petalGradient)"
                                    transform="rotate(135 200 200)"/>

                            <ellipse cx="200" cy="105" rx="38" ry="75"
                                    fill="url(#petalGradient)"
                                    transform="rotate(180 200 200)"/>

                            <ellipse cx="200" cy="105" rx="38" ry="75"
                                    fill="url(#petalGradient)"
                                    transform="rotate(225 200 200)"/>

                            <ellipse cx="200" cy="105" rx="38" ry="75"
                                    fill="url(#petalGradient)"
                                    transform="rotate(270 200 200)"/>

                            <ellipse cx="200" cy="105" rx="38" ry="75"
                                    fill="url(#petalGradient)"
                                    transform="rotate(315 200 200)"/>

                        </g>

                        <g class="flower-center">
                            <circle cx="200" cy="200" r="48" fill="#ffcc4d"/>
                            <circle cx="200" cy="200" r="35" fill="#ffdf80"/>
                            <circle cx="185" cy="185" r="7" fill="#fff1bd"/>
                        </g>

                    </svg>
                </div>
                <p className="flower-quote">Make space for growth, and let yourself bloom.” 🌷</p>
            </section>
        </div>
    )
}