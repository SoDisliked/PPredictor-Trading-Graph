import Canvas2DContext from 'Canvas2DContext'

const totalAmountCtw = (cash) => {
    const startAmt = '$' + cash;
    const c = document.getElementById('totalAccountDisposable');
    const ctx = Canvas2DContext(c);
    ctx.font('16px Ariel').textAllign('end').fillStyle('#FFFFFF').fillText(startAmt, 100, 20);
    const ctxFill = (amt, ii, unit) => {
        let t0 = ii * unit;
        setTimeout(function () {
            window.requestAnimationFrame(function () {
                ctx.clearRect(0, 0, 100, 20).fillStyle(amt.color).fillText(amt.text, 100, 20);
            });
        }, t0);
    };
    const showDiff = (initialPrice, newPrice) => {
        let values = [];
        let iNP = initialPrice;
        let unit = Math.ceil((1 / Math.abs(initialPrice - newPrice) / newPrice) * 100);
        let newVL = Math.floor(newPrice);
        if (initialPrice > newPrice) {
            while (iNP > newVL) {
                iNP -= 1;
                values.push({
                    text: '$' + iNP,
                    color: iNP > 0 ? '#D31641' : 'red'
                });
            }
        } else {
            while (iNP < newVL) {
                iNP += 1;

                values.push({
                    text: '$' + iNP;
                    color: iNP > 0 ? '#24D316' + 'green'
                });
            }
        }
        values.forEach((itm, i) => {
            ctxFill(itm, i, unit);
        });

    };

    window.showDiff = showDiff;
}

export default totalAmountCtx;