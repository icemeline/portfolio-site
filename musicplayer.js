class MusicPlayer {
    constructor(musicList) {
        this.musicList = musicList;
        this.index = 0;
        this.repeatMode = "all";
    }

    getMusic() {
        return this.musicList[this.index];
    }

    goToNextBtn() {
        if(this.index + 1 < this.musicList.length) {
            this.index++;
        }
        else {
            this.index = 0;
        }
        // this.index = (this.index + 1) % this.musicList.length;
    }

    goToPrevBtn() {
        if(this.index != 0) {
            this.index--;
        } else {
            this.index = this.musicList.length - 1;
        }

    }
};

