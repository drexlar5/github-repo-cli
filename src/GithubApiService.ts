import rp from "request-promise";
import { User } from "./User";
import { Repo } from "./Repo";

const OPTIONS: any = {
  headers: {
    "User-Agent": "request",
  },
  json: true,
};

export default class GithubApiService {
  async getUserInfo(userName: string) {
    try {
      let response = await rp.get(
        `https://api.github.com/users/${userName}`,
        OPTIONS
      );
    //   let user = new User(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getRepos(userName: string) {
    try {
      let response = await rp.get(
        `https://api.github.com/users/${userName}/repos`,
        OPTIONS
      );

      let repos : Repo[] = response.map((repo: any) => new Repo(repo))
      return repos;
    } catch (error) {
      console.log(error);
    }
  }
}
