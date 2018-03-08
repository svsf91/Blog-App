module.exports = function (app, models) {
  var multer = require('multer'); // npm install multer save
  //var upload = multer({dest: __dirname + '/../../public/assignment/uploads'});

  var widgets = [];

  //POST Calls
  app.post('/api/page/:pageId/widget', createWidget);
  //app.post('/api/upload', upload.single('myFile'), uploadImage);

  //GET Calls
  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.get('/api/widget/:widgetId', findWidgetById);

  //PUT Calls
  app.put('/api/widget/:widgetId', updateWidget);
  app.put('/api/page/:pageId/widget', reorderWidgets);

  //DELETE Calls
  app.delete('/api/widget/:widgetId', deleteWidget);


  /*API calls implementation*/
  function createWidget(req, res) {
    var pid = req.params.pageId;
    var widget = req.body;

    models
      .widgetModel
      .createWidgetForPage(pid, widget)
      .then(
        function (newWidget) {
          res.json(newWidget);
        },
        function (error) {
          res.sendStatus(400).send(error);
        });

  };

  function findAllWidgetsForPage(req, res) {
    var pid = req.params.pageId;

    models
      .widgetModel
      .findAllWidgetsForPage(pid)
      .then(
        function (widgets) {
          res.json(widgets);
        },
        function (error) {
          res.sendStatus(400).send(error);
        });
  }

  function findWidgetById(req, res) {
    var wgid = req.params.widgetId;

    models
      .widgetModel
      .findWidgetById(wgid)
      .then(
        function (widget) {
          res.json(widget);
        },
        function (error) {
          res.sendStatus(400).send(error);
        });
  }

  function updateWidget(req, res) {
    var wgid = req.params.widgetId;
    var widget = req.body;

    models
      .widgetModel
      .updateWidget(wgid, widget)
      .then(
        function (widget) {
          res.send('');
        },
        function (error) {
          res.sendStatus(400).send(error);
        });
  }

  function deleteWidget(req, res) {
    var wgid = req.params.widgetId;

    models
      .widgetModel
      .deleteWidget(wgid)
      .then(
        function (status) {
          res.send('');
        },
        function (error) {
          res.sendStatus(400).send(error);
        });
  }

  function reorderWidgets(req, res) {
    var pageId = req.params.pageId;
    var start = req.query.initial;
    var end = req.query.final;

    models
      .widgetModel
      .reorderWidgets(pageId, start, end)
      .then(
        function (status) {
          res.send('');
        },
        function (error) {
          res.sendStatus(400).send("Cannot reorder widgets");
        });
  }

  function uploadImage(req, res) {
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;
    var widgetId = req.body.widgetId;

    var width = req.body.width;
    var myFile = req.file;

    var originalname = myFile.originalname; // file name on user's computer
    var filename = myFile.filename;     // new file name in upload folder
    var path = myFile.path;         // full path of uploaded file
    var destination = myFile.destination;  // folder where file is saved to
    var size = myFile.size;
    var mimetype = myFile.mimetype;

    console.log(myFile);

    models
      .widgetModel
      .findWidgetById(widgetId)
      .then(function (w) {
        var widget = w;
        widget.url = '/assignment/uploads/' + filename;
        w.url = "/assignment/uploads/" + filename;
        w.save();
      });

    var callbackUrl = "/assignment/#!/website/" + websiteId + "/page/" + pageId + "/widget/";

    res.redirect(callbackUrl);
  }
};
