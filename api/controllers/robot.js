const path = require('path')

module.exports={


    sitemap:(req,res) =>{

        res.sendFile('sitemap.xml', {root: './'});


    },
    robot:(req,res)=> {

        res.sendFile('robot.txt', {root: './'});

    }
}