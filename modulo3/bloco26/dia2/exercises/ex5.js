const fs = require('fs/promises');

async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const createFilePromises = strings.map((string, index) =>
    fs.writeFile(`./file${index + 1}.txt`, string)
  );

  await Promise.all(createFilePromises);

  const fileNames = strings.map((string, index) => `./file${index + 1}.txt`);

  const fileContents = await Promise.all(
    fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'))
  );

    const newFileContent = fileContents.join(' ');

    await fs.writeFile('./fileAll.txt', newFileContent);
};

arrayToFile();
