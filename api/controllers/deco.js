module.exports = {
    get: (req, res, next) => {
        req.session.destroy(() => {
            res.clearCookie('coucou');
            res.redirect('/')
        })
    }
}
