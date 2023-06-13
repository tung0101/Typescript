var ptb2 = function (a, b, c) {
    var d = b * b - 4 * a * c;
    if (d <= 0)
        return [];
    else if (d == 0) {
        var n = -b / (2 * a);
        return [n];
    }
    else {
        var n1 = -b - Math.sqrt(d) / (2 * a);
        var n2 = -b + Math.sqrt(d) / (2 * a);
        return [n1, n2];
    }
};
