require("dotenv").config({ path: __dirname + "/.env" });
const discord = require("discord.js");
const { Player } = require("discord-player");

const client = new discord.Client();
const player = new Player(client);

const token = process.env["SERVER_TOKEN"];
client.player = player;
client.login(token);

client.on("voiceStateUpdate", async (oldState, newState) => {
  let channel = newState.channel;
  if (!channel) return 1;
  let track = await client.player
    .play(channel, "nyan cat", newState.member)
    .catch((e) => {
      console.log(e.message);
    });
});
