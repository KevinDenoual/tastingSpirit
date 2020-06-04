module.exports = (req, res, next) => {

    if (req.session.isVerified !== true) {

        console.log('pas de compte vérifié')
        res.render('Co&password/connexion')  

    } else{

        next()

    }


}