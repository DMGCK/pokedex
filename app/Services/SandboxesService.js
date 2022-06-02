import { ProxyState } from "../AppState.js";

const SandApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/cameron/pokemon',
  timeout: 12000
})

class SandboxesService {
  
  async  getSandTeam() {
   const res = await SandApi.get();
   console.log('Here"s your team! ', res.data);
  }

  async addToTeam(active) {
   const res = await SandApi.post('',active);
   console.log('adding to your team ', res.data);
  }
}

export const sandboxesService = new SandboxesService()