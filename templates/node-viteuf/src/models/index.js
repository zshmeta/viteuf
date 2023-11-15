class IndexModel {
  constructor() {
    this.data = {
      message: 'Welcome to my Node.js backend project!',
    };
  }

  getData() {
    return this.data;
  }
}

module.exports = IndexModel;