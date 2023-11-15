const IndexModel = require('../models/index');

class IndexController {
  constructor() {
    this.indexModel = new IndexModel();
  }

  async getIndex(req, res) {
    try {
      const data = await this.indexModel.getData();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: 'An error occurred while getting data' });
    }
  }
}

module.exports = IndexController;