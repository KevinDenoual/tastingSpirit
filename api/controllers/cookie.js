module.exports={
    post : (req,res) => {


        if(req.body.accept === "accept"){
            console.log('accpet');
            
            res.clearCookie(`CookieRefuse`)
            res.cookie('CookieAccept', { domain: '.coucou', path: '/coucou', secure: true, resave: false, consent:true })


        }else if(req.body.refuse === "refuse"){

            res.clearCookie(`CookieAccept`)
            res.cookie('CookieRefuse', { domain: '.coucou', path: '/coucou', secure: true, resave: false, consent:true, expire:2000 })


        }

        res.redirect('/')
        
    }
}