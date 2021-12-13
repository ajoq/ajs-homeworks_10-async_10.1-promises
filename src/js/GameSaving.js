export default class GameSaving {
  constructor(data) {
    const parseData = JSON.parse(data);
    this.id = parseData.id;
    this.created = parseData.created;
    this.userInfo = parseData.userInfo;
  }
}
