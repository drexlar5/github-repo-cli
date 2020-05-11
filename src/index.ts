import GitService from "./GithubApiService";
import { User } from "./User";
import yargs from "./config/yargs";

const argv: any = yargs.argv;

const svc = new GitService();

async function getUser(username: string) {
  try {
    if (!username) {
      throw new Error(
        `enter a valid username option. e.g: yarn start -u drexlar5`
      );
    }

    let userInfo = await svc.getUserInfo(username);
    let user = new User(userInfo);
    let repos = await svc.getRepos(username);

    let sortedArray = repos?.sort((a, b) => b.size - a.size);

    user.repos = sortedArray?.splice(0, 5);

    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}

getUser(argv.username);
