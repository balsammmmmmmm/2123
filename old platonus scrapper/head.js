const edua = require('./scrapper.js');
(async () => {

  await edua.initialize();

  await edua.login('020924550859', 'Ch@rlycharly2002lool');

  await edua.grade();
  // await edua.direct2(msg);

  // await edua.direct3(msg);

  // await edua.direct4(msg);
  // await edua.direct5(msg);
  // await edua.direct6(msg);

})().then(() => {
  console.log('Process done!');
  // bot.sendPhoto(chatId, photo, { caption: ' ' });
}).catch((err) => {
  console.log(err)
});