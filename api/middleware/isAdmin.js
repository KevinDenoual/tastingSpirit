module.exports = (req,res,next) => {


    if (req.session.isAdmin != true) {
        console.log('pas admin');
         res.render('Co&password/connexion')  

    }else{
      next()  
    }


}
