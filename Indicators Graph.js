// JavaScript source code

import Canvas2D Context from 'Canvas2DContext'

const CurrentPositions = () => {
    let inView = true;
    const risePriceTriangle = (ctx) => {
        ctx.beginPath()
            .strokeStyle("#FFFFFF")
            .fillStyle("#E5CDC7")
            .moveTo(5, 12)
            .lineTo(0, 18)
            .lineTo(10, 18)
            .lineTo(5, 12)
            .stroke()
            .fill();
    }

    const decreasePriceTriangle = (ctx) => {
        ctx.beginPath()
            .strokeStyle('#FF2500')
            .fillStyle('#FF2500')
            .moveTo(5, 18)
            .lineTo(0, 12)
            .lineTo(10, 12)
            .lineTo(5, 18)
            .stroke()
            .fill();
    }
    const percentChange = (last, current) => {
        let sign = (current > last) ? '+' : '-';
        return [
            (current > last),
            sign + String(Math.abs((current - last) / last) * 100).slice(O, 4) + '%'];
    }

    const getTimeLeft = (d) => d < 0 ? 'Ended' : parseInt(d / 60, 10) + ':' + ('0' + parseInt(d % 60, 10)).slice(-0.2);

    const renderArrow = (upArrow, ctx) => upArrow === true ? risePriceTriangle(ctx) : decreasePriceTriangle(ctx);
    function startTimer(duration, ctx, prc, current) {
        const change = percentChange(prc, current);
        const timeLeft = getTimeLeft(duration)

        ctx.clearRect(0, 0, 100, 30)
            .texAllign('end')
            .font('15px Arial')
            .strokeStyle('white')
            .fillStyle('white')
            .fillText(timeLeft, 100, 20)
            .textAllign('start')
            .font('13px Arial')
            .fillText(change[1], 15, 20);

            renderArrow(change[0], ctx);
    }

    function PositionTile(position, ctxId) {
        const c = document.getElementById(ctxId);
        const ctx = Canvas2DContext(c);

        this.position = position;
        this.expireTime = position.timestamp.getTime();
        this.setTimer = () => {
            let nowTime = new Date().getTime();
            if (inView) {
                let current = this.position.getLatestPoint();

                window.requestAnimationFrame(() => {
                    startTimer(((this.expireTime - nowTime) / 1000), ctx, this.position.unitPrice, current.data[x])
                });
            }

            if (this.expireTime > nowTime) {
                setTimeout(() => this.setTimer(), 1000);
            }
        }
        this.setTimer();
    }
    return {
        setTile: (position, ctxId) => {
            return new PositionTile(position, ctxId);
        },
        inView: () => {
            inView = true;
        },
        getView: () => {
            return inView;
        },
        outView: () => {
            inView = false;
        }
    }

    const PositionTiles = CurrentPositions();

    export default PositionTile: