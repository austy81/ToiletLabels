var LabelsService = (function () {
    function LabelsService() {
        this.labels = new Array();
    }
    LabelsService.prototype.get = function () {
        return Promise.resolve(this.labels);
    };
    LabelsService.prototype.add = function (value) {
        this.labels.push(value);
    };
    return LabelsService;
})();
exports.LabelsService = LabelsService;
