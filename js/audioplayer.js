class EnbreakAudioPlayer {
    constructor(containerId, audioSrc) {
        this.container = document.getElementById(containerId);
        this.audioSrc = audioSrc;
        this.injectStyles();
        this.init();
    }

    injectStyles() {
        if (document.getElementById('enbreak-audio-player-styles')) return;
        const style = document.createElement('style');
        style.id = 'enbreak-audio-player-styles';
        style.textContent = `
            .audio-player {
                background: #ffffff;
                border: 1.5px solid #D9E2EE;
                border-radius: 20px;
                padding: 14px 18px;
                width: 100%;
                max-width: 460px;
                box-shadow: 0 1px 3px rgba(30,45,64,.07), 0 4px 16px rgba(30,45,64,.06);
                font-family: 'Inter', sans-serif;
            }
            .player-main {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .player-play-btn {
                width: 34px; height: 34px;
                border-radius: 50%;
                border: 2px solid #D9E2EE;
                background: #F0F4FA;
                color: #3B4F66;
                display: flex; align-items: center; justify-content: center;
                cursor: pointer; flex-shrink: 0;
                transition: background .2s, border-color .2s, color .2s, transform .15s;
            }
            .player-play-btn:hover { background: #E8EEF7; border-color: #B4C8E0; color: #1E2D40; transform: scale(1.07); }
            .player-play-btn:active { transform: scale(0.96); }
            .player-play-btn.playing { background: #1E2D40; border-color: #1E2D40; color: #ffffff; animation: pulse-navy 1.4s infinite; }
            .player-play-btn svg { display: block; }
            @keyframes pulse-navy {
                0%   { box-shadow: 0 0 0 0 rgba(30,45,64,.4); }
                70%  { box-shadow: 0 0 0 8px rgba(30,45,64,0); }
                100% { box-shadow: 0 0 0 0 rgba(30,45,64,0); }
            }
            .progress-wrap {
                flex: 1; min-width: 0; position: relative;
                height: 6px; background: #c0cad6; border-radius: 6px; cursor: pointer;
            }
            .progress-fill {
                position: absolute; left: 0; top: 0; bottom: 0;
                background: linear-gradient(90deg, #ea580c, #f97316);
                border-radius: 6px; width: 0%; transition: none; pointer-events: none;
            }
            .progress-thumb {
                position: absolute; top: 50%;
                transform: translate(-50%, -50%) scale(0);
                width: 14px; height: 14px; background: #ea580c;
                border: 2px solid #fff; border-radius: 50%;
                box-shadow: 0 1px 4px rgba(234,88,12,.4);
                transition: transform .15s; pointer-events: none;
            }
            .progress-wrap:hover .progress-thumb { transform: translate(-50%, -50%) scale(1); }
            .progress-input {
                position: absolute; inset: -8px 0;
                width: 100%; height: calc(100% + 16px); opacity: 0; cursor: pointer;
            }
            .player-time {
                font-family: 'Rubik', sans-serif;
                font-size: 12px; font-weight: 600;
                color: #3B4F66; letter-spacing: 0.3px;
                white-space: nowrap; flex-shrink: 0;
                width: 80px;
                text-align: center;
            }
            .player-time span { color: #3B4F66; }
            .player-speed-btn {
                width: 34px; height: 34px; border-radius: 50%;
                border: 2px solid #D9E2EE;
                background: #F0F4FA; color: #3B4F66;
                font-family: 'Inter', sans-serif;
                font-size: 11px; font-weight: 700; letter-spacing: -0.4px;
                display: flex; align-items: center; justify-content: center;
                cursor: pointer; flex-shrink: 0;
                transition: background .2s, border-color .2s, color .2s, transform .15s;
                user-select: none;
            }
            .player-speed-btn:hover { background: #E8EEF7; border-color: #B4C8E0; color: #1E2D40; transform: scale(1.07); }
            .player-speed-btn:active { transform: scale(0.96); }
            .vol-wrap {
                position: relative;
                flex-shrink: 0;
            }
            .player-vol-btn {
                width: 34px; height: 34px; border-radius: 50%;
                border: 2px solid #D9E2EE;
                background: #F0F4FA; color: #3B4F66;
                display: flex; align-items: center; justify-content: center;
                cursor: pointer; flex-shrink: 0;
                position: relative; z-index: 2;
                transition: background .2s, border-color .2s, color .2s, transform .15s;
            }
            .player-vol-btn:hover { background: #E8EEF7; border-color: #B4C8E0; color: #1E2D40; transform: scale(1.07); }
            .player-vol-btn:active { transform: scale(0.96); }
            .player-vol-btn.muted { background: #1E2D40; border-color: #1E2D40; color: #ffffff; }
            .vol-slider-wrap {
                position: absolute;
                right: 17px;
                top: 50%; transform: translateY(-50%);
                display: flex; align-items: center;
                height: 34px;
                background: #F0F4FA; border: 1.5px solid #D9E2EE;
                border-radius: 50px 0 0 50px;
                padding: 0 22px 0 14px;
                width: 0; overflow: hidden; opacity: 0;
                visibility: hidden;
                transition: width .25s ease, opacity .25s ease, visibility .25s;
                pointer-events: none;
                z-index: 1;
            }
            .vol-wrap:hover .vol-slider-wrap {
                width: 100px; opacity: 1; pointer-events: all;
                visibility: visible;
            }
            .vol-track {
                width: 60px; height: 4px;
                background: #D9E2EE; border-radius: 4px;
                position: relative; flex-shrink: 0;
            }
            .vol-track.muted { background: #c0cad6; }
            .vol-slider-fill {
                position: absolute; left: 0; top: 0; bottom: 0;
                background: linear-gradient(90deg, #ea580c, #f97316);
                border-radius: 4px; width: 100%; pointer-events: none;
            }
            .vol-thumb {
                position: absolute; top: 50%; right: 0;
                transform: translate(50%, -50%);
                width: 11px; height: 11px; background: #ea580c;
                border: 2px solid #fff; border-radius: 50%;
                box-shadow: none;
                pointer-events: none; transition: none;
            }
            .vol-input {
                position: absolute; inset: -8px 0;
                width: 100%; height: calc(100% + 16px);
                opacity: 0; cursor: pointer;
            }
        `;
        document.head.appendChild(style);
    }

    init() {
        if (!this.container) {
            console.error(`EnbreakAudioPlayer: No element found with id "${this.container}"`);
            return;
        }

        this.container.innerHTML = `
            <div class="audio-player">
                <audio class="audio-element" preload="metadata"></audio>
                <div class="player-main">
                    <button class="player-play-btn">
                        <svg class="play-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5,3 19,12 5,21"/>
                        </svg>
                    </button>
                    <div class="player-time"><span>0:00</span> / 0:00</div>
                    <div class="progress-wrap">
                        <div class="progress-fill"></div>
                        <div class="progress-thumb"></div>
                        <input type="range" class="progress-input" min="0" max="100" value="0" step="0.1">
                    </div>
                    <div class="vol-wrap">
                        <button class="player-vol-btn">
                            <svg class="vol-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                            </svg>
                        </button>
                        <div class="vol-slider-wrap">
                            <div class="vol-track">
                                <div class="vol-slider-fill"></div>
                                <div class="vol-thumb"></div>
                                <input type="range" class="vol-input" min="0" max="100" value="100" step="1">
                            </div>
                        </div>
                    </div>
                    <button class="player-speed-btn">1x</button>
                </div>
            </div>
        `;

        this.setupPlayer();
    }

    setupPlayer() {
        const audio         = this.container.querySelector('.audio-element');
        const playBtn       = this.container.querySelector('.player-play-btn');
        const playIcon      = playBtn.querySelector('.play-icon');
        const timeDisplay   = this.container.querySelector('.player-time');
        const speedBtn      = this.container.querySelector('.player-speed-btn');
        const volBtn        = this.container.querySelector('.player-vol-btn');
        const volIcon       = volBtn.querySelector('.vol-icon');
        const volSlider     = this.container.querySelector('.vol-input');
        const volFill       = this.container.querySelector('.vol-slider-fill');
        const volThumb      = this.container.querySelector('.vol-thumb');
        const progressFill  = this.container.querySelector('.progress-fill');
        const progressThumb = this.container.querySelector('.progress-thumb');
        const progressInput = this.container.querySelector('.progress-input');
        const volTrack      = this.container.querySelector('.vol-track');

        audio.src = this.audioSrc;

        // Icons
        const PLAY_SVG    = '<polygon points="5,3 19,12 5,21"/>';
        const PAUSE_SVG   = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
        const VOL_ON_SVG  = '<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>';
        const VOL_OFF_SVG = '<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>';

        // Play / Pause
        playBtn.addEventListener('click', () => {
            if (audio.paused) audio.play().catch(() => {});
            else audio.pause();
        });

        audio.addEventListener('play',  () => { playBtn.classList.add('playing');    playIcon.innerHTML = PAUSE_SVG; });
        audio.addEventListener('pause', () => { playBtn.classList.remove('playing'); playIcon.innerHTML = PLAY_SVG; });
        audio.addEventListener('ended', () => {
            playBtn.classList.remove('playing');
            playIcon.innerHTML = PLAY_SVG;
            audio.currentTime = 0;
            updateProgress();
        });

        // Progress
        const formatTime = (s) => {
            if (isNaN(s)) return '0:00';
            return `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`;
        };

        let isDragging = false;

        const updateProgress = () => {
            if (isDragging) return;
            const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
            progressFill.style.width = pct + '%';
            progressThumb.style.left = pct + '%';
            progressInput.value = pct;
            timeDisplay.innerHTML = `<span>${formatTime(audio.currentTime)}</span> / ${formatTime(audio.duration)}`;
        };

        audio.addEventListener('timeupdate',     updateProgress);
        audio.addEventListener('loadedmetadata', updateProgress);

        progressInput.addEventListener('input', () => {
            isDragging = true;
            const pct = progressInput.value;
            progressFill.style.width = pct + '%';
            progressThumb.style.left = pct + '%';
            if (audio.duration) {
                timeDisplay.innerHTML = `<span>${formatTime((pct / 100) * audio.duration)}</span> / ${formatTime(audio.duration)}`;
            }
        });

        progressInput.addEventListener('change', () => {
            isDragging = false;
            if (audio.duration) audio.currentTime = (progressInput.value / 100) * audio.duration;
            updateProgress();
        });

        // Speed
        const speeds = [1, 0.75, 0.5];
        const labels = ['1x', '0.75x', '0.5x'];
        let speedIdx = 0;

        speedBtn.addEventListener('click', () => {
            speedIdx = (speedIdx + 1) % speeds.length;
            audio.playbackRate = speeds[speedIdx];
            speedBtn.textContent = labels[speedIdx];
        });

        // Volume
        let lastVolume = 100;

        const updateVolThumb = (value) => {
            volFill.style.width  = value + '%';
            volThumb.style.right = (100 - value) + '%';
        };

        volSlider.addEventListener('input', () => {
            const v = volSlider.value / 100;
            audio.volume = v;
            audio.muted  = v === 0;
            if (v > 0) {
                lastVolume = volSlider.value;
                volFill.style.background = 'linear-gradient(90deg, #ea580c, #f97316)';
                volThumb.style.background = '#ea580c';
                volThumb.style.borderColor = '#fff';
                volTrack.classList.remove('muted');
                volIcon.innerHTML = VOL_ON_SVG;
                volBtn.classList.remove('muted');
            } else {
                volFill.style.background = '#c0cad6';
                volThumb.style.background = '#c0cad6';
                volThumb.style.borderColor = '#c0cad6';
                volTrack.classList.add('muted');
                volIcon.innerHTML = VOL_OFF_SVG;
                volBtn.classList.add('muted');
            }
            updateVolThumb(volSlider.value);
        });

        volBtn.addEventListener('click', () => {
            audio.muted = !audio.muted;
            if (audio.muted) {
                volIcon.innerHTML = VOL_OFF_SVG;
                volBtn.classList.add('muted');
                volFill.style.background = '#c0cad6';
                volThumb.style.background = '#c0cad6';
                volThumb.style.borderColor = '#c0cad6';
                volTrack.classList.add('muted');
            } else {
                audio.volume = lastVolume / 100;
                volIcon.innerHTML = VOL_ON_SVG;
                volBtn.classList.remove('muted');
                volFill.style.background = 'linear-gradient(90deg, #ea580c, #f97316)';
                volThumb.style.background = '#ea580c';
                volThumb.style.borderColor = '#fff';
                volTrack.classList.remove('muted');
                updateVolThumb(lastVolume);
                volSlider.value = lastVolume;
            }
        });

        updateVolThumb(100);
    }
}