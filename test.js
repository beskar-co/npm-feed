const getNpmFeed = require('./dist').default;

const main = async () => {
  const feed1 = await getNpmFeed('haydenbleasel');
  const feed2 = await getNpmFeed('haydenbleasel', true);

  console.log(feed1);
  console.log(feed2);
};

main().catch(console.error);
