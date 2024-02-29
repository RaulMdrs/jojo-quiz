import jsonFile from './questions.json';

// ? Obter questões
export const getQuestions = async () => {
    try {
        return jsonFile.questions;
    } catch (error) {
        console.error(error)
        return {};
    }
}