const TextToSpeech = require('text-to-speech-converter')

async function testSpeechGeneration() {
    try {
        const outputFilePath = 'output';
        const text = 'Hello francis, this is a test';
        const result = await TextToSpeech(text, outputFilePath);
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}
testSpeechGeneration();