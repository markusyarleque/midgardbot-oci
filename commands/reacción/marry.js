const { Collection } = require('mongoose');
const userSchema = require('../../models/userSchema');

module.exports =  {
    
    name: 'marry',
    aliases: [],
    description: '💍 Contrae matrimonio con algún miembro del servidor. Sólo puedes casarte una única vez.',
  
    async execute(client, message, args, Discord) { 

        var propuest = [

            'https://c.tenor.com/9BZuZR_ydhwAAAAC/compromiso-anillo.gif',
            'https://i.pinimg.com/originals/19/e7/c4/19e7c4a746a82dd9b1aeb1eabe4f34c9.gif',
            'https://luciasecasa.com/contents/uploads/2017/11/giphy-15.gif',
            'https://cdn2.actitudfem.com/media/files/tumblr_inline_ncfqd7sxks1seszfd.gif',
            'https://www.filo.news/export/sites/claro/img/2017/07/31/-906866726-animation_x16x.gif',
            'https://www.laguiadelvaron.com/wp-content/uploads/2019/01/enlaplaya.gif',
            'https://i0.wp.com/25.media.tumblr.com/8b50b8dfe089e86052ffcc3ca97fde68/tumblr_mvrrfkF4qR1qbbjduo1_250.gif',
            'http://37.media.tumblr.com/61b788ee4c5b2146848728ab3ed3fe55/tumblr_n3d5owAg6c1r5nd69o4_250.gif',
            'http://i.imgur.com/K2uCLlt.gif'

        ]
      
        var acepta = [

            'https://c.tenor.com/IC8h3gIj074AAAAM/casada-boda.gif',
            'https://c.tenor.com/1J5kkT96dcAAAAAC/up-si-quiero.gif',
            'https://img.buzzfeed.com/buzzfeed-static/static/2018-02/21/12/asset/buzzfeed-prod-fastlane-02/anigif_sub-buzz-15864-1519234329-2.gif',
            'https://i.pinimg.com/originals/47/f2/62/47f262da64e177792047d045e815c695.gif',
            'https://media.giphy.com/media/l2SpYryWKODJq0isM/giphy.gif',
            'https://media0.giphy.com/media/UJG50B8TJD5Mk/giphy.gif',
            'https://media.giphy.com/media/3U0NmWYS4O1kQ/giphy.gif',
            'https://img.wattpad.com/5c1f2d47198a28aa862ed794c57a45beb4320f01/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f357a34634f544b4f6578517157673d3d2d3536313838373434352e313532356232626563346134316131393730373132373031383732332e676966',
            'http://i.giphy.com/xT4uQiN5Knf0Gwhzfq.gif',
            'https://luciasecasa.com/contents/uploads/2019/10/13_razones_2.gif'
          
        ]
      
        var rechaza = [

            'https://st1.uvnimg.com/d1/29/fd7caa7e4767b665fa4b868b3faf/proposal17.gif',
            'https://gifs.cackhanded.net/bring-it-on/buh-bye.gif',
            'https://cdn.yoamoloszapatos.com/wp-content/uploads/2019/04/07220750/scared.gif',
            'https://i.gifer.com/TT5e.gif',
            'http://www.laguiadelvaron.com/wp-content/uploads/2015/09/cosas-que-hacen-a-los-hombres-m%C3%A1s-atractivos-2.gif',
            'https://i.pinimg.com/originals/cc/d7/db/ccd7db71b3bd772e359900f2ba0f7fcc.gif',
            'https://media.giphy.com/media/QEATjlWMiiixG/giphy.gif'
          
        ]
      
        var plantado = [

            'https://c.tenor.com/QOFzKfLBPMwAAAAC/plantado-esperando.gif',
            'https://luciasecasa.com/contents/uploads/2017/06/giphy-1-8.gif',
            'https://media1.giphy.com/media/I6px8ejjBGXny/giphy.gif',
            'https://i2.wp.com/www.elfarandi.com/wp-content/uploads/2016/10/bodagif.gif?resize=600%2C337&is-pending-load=1#038;ssl=1',
            'https://c.tenor.com/Ly9LeB2PKVgAAAAC/visto-lost.gif'
          
        ]


    }

}