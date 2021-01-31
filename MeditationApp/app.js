const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video');

    //sounds
    const sounds = document.querySelectorAll('sound-picker button');
    //time display
    const timeDisplay = document.querySelector('.time-display');
    //lenghte van de outline
    const outlineLength = outline.getTotalLength();
    console.log(outlineLength);
    //duration
    let fakeDuration = 600;

    //circel animeren
    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;


    // pay sound
    play.addEventListener('click', () => {
        checkPlaying(song);
    });


    //functio -> stop en play sounds
    const checkPlaying = song => {
        if (song.paused) {
            song.play();
            video.play();
            play.src = './svg/pause.svg';
        } else {
            song.pause();
            video.pause();
            play.src = './svg/play.svg';
        }
    };



    //aniamties
    song.ontimeupdate = () => {
        //tijd
        let currentTime = song.curretnTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);

        //circle
        let progess = outlineLength - (currentTime / fakeDuration) * outlineLength;
        outline.style.strokeDashoffset = progess;

        //tekst
        timeDisplay.textContent = `${minutes}:${seconds}`
    };





};

app();