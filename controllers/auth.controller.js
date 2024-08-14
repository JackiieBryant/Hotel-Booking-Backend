const home = (req, res) => {
    res.status(200).send(`Here is your messaage: ${req.params.message}`)
}

export const register = (req, res) => {
    console.log(req.body);
    res.send('Ni hao');
}

export default home;