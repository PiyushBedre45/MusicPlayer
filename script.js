const music = document.querySelector('#music')
const progress = document.querySelector('#progress')
const progressBar = document.querySelector('#progressBar')
const play = document.querySelector('#play')
const songTime = document.querySelector('#songTime')
// const like = document.querySelector('#like')
const dislike = document.querySelector('#dislike')
const image = document.querySelector('#image')
const title = document.querySelector('#title')
const artist = document.querySelector('#artist')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const duration = document.querySelector('#duration')
const card = document.querySelector('#card')

const allSongs = [
    {
        SongName: 'jacinto-1',
        displayName: 'song1',
        artist: 'artist1',
        poster: 'Mars',
        duration: '126'
    },
    {
        SongName: 'jacinto-2',
        displayName: 'song2',
        artist: 'artist2',
        poster: 'Jupiter',
        duration: '128'
    },
    {
        SongName: 'jacinto-3',
        displayName: 'song3',
        artist: 'artist3',
        poster: 'jacinto-3',
        duration: '161'
    },
    {
        SongName: 'MoneyHiest',
        displayName: 'Story of my Life',
        artist: 'artist4',
        poster: 'MoneyHiestImage',
        duration: '30'

    }

]

function loadsong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `${song.SongName}.mp3`
    // music.src = `MoneyHiest.mp3`
    image.src = `${song.poster}.jpg`
    duration.textContent = Math.floor(song.duration) / 100;
}

// Change the Songs With buttons

let s = 0;

// next Song

loadsong(allSongs[s]);
const nextSong = () => {
    s++;
    if (s > allSongs.length - 1) {
        s = 0
    }
    loadsong(allSongs[s]);
    playSong();
    NotLike();
}
// previous

const prevSong = () => {
    s--;
    if (s < 0) {
        s = allSongs.length - 1;
    }
    loadsong(allSongs[s]);
    playSong();
    NotLike();


}

prev.addEventListener('click', prevSong);
next.addEventListener('click', nextSong);




// progression of a progress bar

music.ontimeupdate = function (e) {
    songTime.textContent = Math.floor(music.currentTime) / 100;

    progress.style.width = Math.floor(music.currentTime / music.duration * 100) + '%';
}

// For music update on clicking 

progressBar.onclick = function (e) {

    music.currentTime = ((e.offsetX / progressBar.offsetWidth) * music.duration)
}

// for play & pause

isPlaying = false;

const playSong = () => {
    isPlaying = true;
    play.classList.replace('fa-play', 'fa-pause')
    music.play();
}
const pauseSong = () => {
    isPlaying = false;
    play.classList.replace('fa-pause', 'fa-play')
    music.pause();
}

// play.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));  we can do this also
play.addEventListener('click', () => {

    if (isPlaying == false) {
        playSong()
    }
    else {
        pauseSong()
    }

});
// console.log(isPlaying);



islike = false
const songLike = () => {
    islike = true;
    like.style.color = 'red'
}
const NotLike = () => {
    islike = false;
    like.style.color = 'black'
}
//  LIKE BUTTON 
like.addEventListener('click', () => {
    if (islike === false) {
        songLike();
    }
    else {
        NotLike()
    }
})

dislike.addEventListener('click', () => {
    alert('😒 like plz')
})
