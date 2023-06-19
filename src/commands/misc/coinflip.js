module.exports = {
    name: "coinflip",
    description: "Flips a coin.",
    callback: (client, interaction) => {
        function getRandomString(list) {
            const randomIndex = Math.floor(Math.random() * list.length);
            return list[randomIndex];
        }

        // Example usage
        const myList = ["Heads", "Tails"];
        const randomString = getRandomString(myList);
        interaction.reply(`${randomString}`);
    },
};
