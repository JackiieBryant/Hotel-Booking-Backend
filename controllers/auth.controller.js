import User from '../models/user.model.js'

const home = (req, res) => {
    res.status(200).send(`Here is your messaage: ${req.params.message}`)
}

export const register = async (req, res) => {
    console.log(req.body);
    const {name, email, password} = req.body

    // validation

    if (!name) return res.status(400).send('Name is required')
    if (!password || password.lenght < 6) 
    return res
    .status(400)
    .send('Password is required ans you should be min 6 characters long');

let userExist = await User.findOne({email}).exec()
if (userExist) return res.status(400).send('Email is taken')
// Register

const user = new User(req.body)
try {
    await user.save();
    console.log("USER CREATED, user");
    return res.json({ ok: true })
} catch (err) {
    console.log('CREATE USER FAILED', err)
    return res.status(400).send('Error. Try again')
}};

export default home;