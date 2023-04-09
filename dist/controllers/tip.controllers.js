function tip(req, res) {
    var client = req.body;
    console.log(client);
    res.send({
        name: client.name,
        price: client.price,
        tip: (client.price * 1.1).toFixed(2),
    });
}
export { tip, };
