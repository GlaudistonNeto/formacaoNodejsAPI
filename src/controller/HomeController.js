class HomeController {

  async index(req, res) {
    res.send('App Express! - Guia de programador');
  }
}

module.exports = new HomeController();
