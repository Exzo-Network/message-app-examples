import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const deployFunc: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const args = [process.env.MESSAGE_BUS_ADDR];

  await deploy('MsgExampleBasic', {
    from: deployer,
    log: true,
    args: args
  });
};

deployFunc.tags = ['MsgExampleBasic'];
export default deployFunc;
