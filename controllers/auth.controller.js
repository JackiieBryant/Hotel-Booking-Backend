const home = (req, res) => {
    res.status(200).send(`Here is your messaage: ${req.params.message}`)
}

export default home;