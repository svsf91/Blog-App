module.exports = function(mongoose, pageModel) {
    var widgetSchema = require('./widget.schema.server')(mongoose);
    var widgetModel = mongoose.model('Widget', widgetSchema);

    var api = {
        'createWidgetForPage' : createWidgetForPage,
        'findAllWidgetsForPage' : findAllWidgetsForPage,
        'findWidgetById' : findWidgetById,
        'updateWidget' : updateWidget,
        'deleteWidget' : deleteWidget,
        'reorderWidgets' : reorderWidgets
    };

    return api;


    function createWidgetForPage(pageId, widget) {
        widget._page = pageId;
        return widgetModel
            .create(widget)
            .then(
                function (widget) {
                    pageModel
                        .insertWidgetToPage(widget._page, widget._id);
                });
    }

    function findAllWidgetsForPage(pageId) {
        return pageModel
            .findPageById(pageId)
            .populate('widgets')
            .exec()
            .then(function (page) {
                return page.widgets;
            });
    }

    function findWidgetById(widgetId) {
        return widgetModel.findById(widgetId);
    }

    function updateWidget(widgetId, widget) {
        return widgetModel.update({
            _id : widgetId
        }, {
            type: widget.type,
            name: widget.name,
            text: widget.text,
            url: widget.url,
            width: widget.width,
            size: widget.size,
            placeholder : widget.placeholder,
            rows : widget.rows,
            formatted : widget.formatted
        });
    }

    function deleteWidget(widgetId) {
        return widgetModel.remove({
            _id : widgetId
        });
    }

    function reorderWidgets(pageId, start, end) {
        return pageModel
            .findPageById(pageId)
            .then(
                function (page) {
                    page.widgets.splice(end, 0, page.widgets.splice(start, 1)[0]);
                    page.save();
                });
    }
};