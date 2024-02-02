import {googleImage} from "@bochilteam/scraper";
let handler = async (m, {conn}) => {
  let shipost = "shipost";
  const res = await googleImage(shipost);
  let image = await res.getRandom();
  let link = image;
  let captionn = `👻 *IMAGEN DE: SHIPOST*`;
  await await conn.sendButton(
    m.chat,
    captionn,
    author,
    link,
    [
      ["🔄 [SIGUIENTE]", `#shipost`],
      ["🔷 [STICKER]", `#s`],
    ],
    m
  );
};
handler.help = ["shipost <query>", "shipost <query>"];
handler.tags = ["internet", "tools"];
handler.command = /^(shipost)$/i;
export default handler;
