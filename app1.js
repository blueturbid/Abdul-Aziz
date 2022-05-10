const music = new Audio('eup.mp3');

// create Array 

const songs = [
    {
        id:'25',
        songName:` Stigma <br>
        <div class="subtitle">BTS</div>`,
        poster: "img/25.jpg"
    },
    {
        id:'26',
        songName:` Hold Me Tight <br>
        <div class="subtitle">BTS</div>`,
        poster: "img/26.jpeg"
    },
    // all object type 
    {
        id:"27",
        songName: `Dis-Ease <br><div class="subtitle">BTS</div>`,
        poster: "img/27.jpg",
    },
    {
        id:"28",
        songName: `Fly To My Room <br><div class="subtitle">BTS</div>`,
        poster: "img/28.jpg",
    },
    {
        id:"29",
        songName: `Stay <br><div class="subtitle">BTS</div>`,
        poster: "img/29.jpg",
    },
    {
        id:"30",
        songName: `Filter <br><div class="subtitle">BTS</div>`,
        poster: "img/30.jpg",
    },
    {
        id:"31",
        songName: `Moon <br><div class="subtitle">BTS</div>`,
        poster: "img/31.jpg",
    },
     {
        id:"32",
        songName: `Chicken Noodle Soup <br><div class="subtitle">BTS</div>`,
        poster: "img/32.jpg",
    },
     {
        id:"33",
        songName: `Moon Child <br><div class="subtitle">BTS</div>`,
        poster: "img/33.png",
    },
     {
        id:"34",
        songName: `Daechwita <br><div class="subtitle">BTS</div>`,
        poster: "img/34.jpg",
    },
     {
        id:"35",
        songName: `Butter <br><div class="subtitle">BTS</div>`,
        poster: "img/35.jpg",
    },
     {
        id:"36",
        songName: `Permission To Dance <br><div class="subtitle">BTS</div>`,
        poster: "img/36.png",
    },
    {
        id:"7",
        songName: `Euphoria <br><div class="subtitle">BTS</div>`,
        poster: "img/7.jpg",
    },
    {
        id:"8",
        songName: `Magic Shop <br><div class="subtitle">BTS</div>`,
        poster: "img/8.jpg",
    },
    {
        id:"9",
        songName: `Dimple <br><div class="subtitle">BTS</div>`,
        poster: "img/9.jpg",
    },
    {
        id:"10",
        songName: `My Universe <br><div class="subtitle">BTS</div>`,
        poster: "img/10.png",
    },
    {
        id:"11",
        songName: `Boys With Love <br><div class="subtitle">BTS</div>`,
        poster: "img/11.jpg",
    },
    {
        id:"12",
        songName: `Idol <br><div class="subtitle">BTS</div>`,
        poster: "img/12.png",
    },
    {
        id:"13",
        songName: `Bullet Proof Eternal <br><div class="subtitle">BTS</div>`,
        poster: "img/13.jpg",
    },
    {
        id:"14",
        songName: `DNA <br><div class="subtitle">BTS</div>`,
        poster: "img/14.jpg",
    },
    {
        id:"15",
        songName: `Spring Day <br><div class="subtitle">BTS</div>`,
        poster: "img/15.webp",
    },
    {
        id:"16",
        songName: `Fake Love <br><div class="subtitle">BTS</div>`,
        poster: "img/16.jpg",
    },
    {
        id:"17",
        songName: `Dynamite <br><div class="subtitle">BTS</div>`,
        poster: "img/17.jpg",
    },
    {
        id:"18",
        songName: `Blood Sweat And Tears <br><div class="subtitle">BTS</div>`,
        poster: "img/18.jpg",
    },
    {
        id:"19",
        songName: `I Need U <br><div class="subtitle">BTS</div>`,
        poster: "img/19.png",
    },
    {
        id:"20",
        songName: `Mic Drop <br><div class="subtitle">BTS</div>`,
        poster: "img/20.jpg",
    },
    {
        id:"21",
        songName: `Life Goes On <br><div class="subtitle">BTS</div>`,
        poster: "img/21.webp",
    },
    {
        id:"22",
        songName: `Save Me <br><div class="subtitle">BTS</div>`,
        poster: "img/22.webp",
    },
    {
        id:"23",
        songName: `Anpanman <br><div class="subtitle">BTS</div>`,
        poster: "img/23.jpg",
    },
    {
        id:"24",
        songName: `Just One Day <br><div class="subtitle">BTS</div>`,
        poster: "img/24.jpg",
    },
    
   
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    index ++;
    
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
     let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))['${index-1}'].style.background = "rgb(105, 105, 170, .1)";
        makeAllPlays();
        document.getElementsByClassName('playListPlay')[index-1].classList.remove('bi-play-circle-fill');
        document.getElementsByClassName('playListPlay')[index-1].classList.add('bi-pause-circle-fill');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})