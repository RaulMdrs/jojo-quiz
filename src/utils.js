import jsonFile from './data.json';

// ? Obter questões
export const getQuestions = async () => {
    try {
        return jsonFile.questions;
    } catch (error) {
        console.error(error)
        return [];
    }
}

// ? Obter personagens
export const getCharacters = async () => {
    try {
        return jsonFile.characters;
    } catch (error) {
        console.error(error)
        return {};
    }
}

// ? Calculando frequencia para definir resultado
const findMostRepeated = (frequencies) => {
    let letterMoreFrequent = '';
    let biggerFrequency = 0;

    for (let letter in frequencies) {
        if (frequencies[letter] === biggerFrequency) {
            letterMoreFrequent = null;
        } else if (frequencies[letter] > biggerFrequency) {
            letterMoreFrequent = letter;
            biggerFrequency = frequencies[letter];
        }
    }

    return letterMoreFrequent;
}

export const replysMostFrequent = (answers) => {
    try {
        let frequencies = {};
    
        answers.forEach(letter => {
            if (frequencies[letter]) {
                frequencies[letter]++;
            } else {
                frequencies[letter] = 1;
            }
        });

        return findMostRepeated(frequencies);
    } catch (error) {
        console.error(error);
        return null;
    }
}

// ? Play Sound
export const playSound = (dir, volume=1.0) => {
    const audio = new Audio(dir);
    audio.volume = volume;
    audio.play();
}