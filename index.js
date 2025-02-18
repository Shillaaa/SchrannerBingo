const express = require('express');
const app = express();
const port = 80;
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const words = [
    "Kariertes Hemd", "Amerika", "Redet leise und Bayerisch", "Ich habe nichts gegen Migranten, (aber)", "Kopfrechnen (10/2=80)",
    "Technische Geräte sind scheiße", "Ich will zu Mama", "Lobt Kinder", "Beleidigt Werkzeuge", "Schreit plötzlich",
    "Geschichten von Bekannten", "Russen", "Droht mit Kießling", "Politiker sind Hurensöhne",
    "Wer misst misst mist", "Ökologie", "Schlägt gegen die Lampe", "Lobt sich selbst", "Putin",
    "Chinesen", "Studium ist scheiße macht Ausbildung", "Erzählt Lebensgeschichten", "Droht mit Stock", "Nachhilfezeit"
];
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
app.get('/words', (req, res) => {
    res.json(shuffle(words));
});
app.use(express.static(srcDir));
app.listen(port, () => {
    console.log(`Bingo app listening at http://localhost:${port}`);
});
