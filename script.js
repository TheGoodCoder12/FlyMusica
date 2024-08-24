async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response = await a.text()
    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")

    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }
    }
    return songs
}
async function main() {
    let songs = await getSongs()
    let songUl = document.querySelector(".music-cards").getElementsByTagName("ul")[0]
    
    for (const song of songs) {
        songUl.innerHTML = songUl.innerHTML + `<li><img src="./Assets/music.svg" alt="" id="img-on-header"> 
                    <div class="playnow">
                    ${song.replaceAll("%20"," ")}
                        <span>Play Now</span>
                        <img src="./Assets/play-btn.svg" alt="" id="img-on-header">
                    </div>
        </li>`
    }
    
}
main()