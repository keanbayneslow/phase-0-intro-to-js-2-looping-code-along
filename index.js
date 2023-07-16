const names = ["Sarah", "Kean", "Bet", "Don", "Auret", "Katie", "Lilli"];
const eventName = "Birthday";

function writeCards(names, eventName) {
    const messages = [];

    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        messages.push(message);
    }

    return messages;
}

function countDown(number) {
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }
}