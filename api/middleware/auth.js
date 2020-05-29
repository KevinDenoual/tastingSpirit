module.exports = (req, res, next) => {

    if (!req.session.userId) {
        console.log('pas de compte');
         res.render('Co&password/connexion')  

    }else{
      next()  
    }


}