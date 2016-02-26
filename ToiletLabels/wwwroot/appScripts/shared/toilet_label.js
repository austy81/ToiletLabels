var ToiletLabel = (function () {
    function ToiletLabel() {
    }
    ToiletLabel.prototype.labelImageLaidies = function () {
        if (this.id)
            return this.id.toString() + '_l.jpg';
        return;
    };
    ToiletLabel.prototype.labelImageGentleman = function () {
        if (this.id)
            return this.id.toString() + '_g.jpg';
        return;
    };
    return ToiletLabel;
})();
exports.ToiletLabel = ToiletLabel;
