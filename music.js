class Music {
    constructor(title, singer, img, file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer; 
    }
}

const musicList = [
    new Music("Under Your Spell", "Snow Strippers", "1.jpg", "1.mp3"),
    new Music("MI RESPIRAR", "bxkq, h6itam", "2.jpg", "2.mp3"),
    new Music("LUZ ROJA - Slowed", "bxkq", "3.jpg", "3.mp3"),
    new Music("VERANO LENTO", "Repsaj, GXMZ", "4.jpg", "4.mp3"),
   // new Music("TIKI TIKI (Slowed)", "QMIIR", "5.jpg", "5.mp3"),
    new Music("NO ERA AMOR - Slowed", "DJ Asul", "6.jpg", "6.mp3"),
    new Music("Goth", "Sidewalks and Skeletons", "7.jpg", "7.mp3"),
    new Music("We Don't Talk Anymore", "Charlie Puth feat Selena Gomez", "8.jpg", "8.mp3"),
    new Music("VISION - Slowed", "UdieNnx, HXVSAGE, MC Duduzinho", "9.jpg", "9.mp3"),
    new Music("Agudo Magido (Instrumental)", "MC K.K", "default.jpg", "10.mp3"),
    new Music("Blue (Da Ba Dee)", "Eiffel 65", "default.jpg", "11.mp3"),
    new Music("MONTAGEM VOZES TALENTINHO - Super Slowed", "heappen, DJ JUAN, Mc Luizinho", "12.jpg", "12.mp3")
];
