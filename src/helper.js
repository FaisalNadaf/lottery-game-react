

function GenNum(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

function add(ticket) {
    return ticket.reduce((sum, value) => sum + value, 0);
}

export { GenNum, add };
