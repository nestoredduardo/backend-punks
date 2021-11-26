const { expect } = require('chai');

describe('Platzi Punks Contract', () => {
  const setup = async ({ maxSupply = 10000 }) => {
    const [owner] = await ethers.getSigners();
    const PlatziPunks = await ethers.getContractFactory('PlatziPunks');
    const deployed = await PlatziPunks.deploy(maxSupply);

    return { owner, deployed };
  };
});
