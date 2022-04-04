const prefixSchema = require('../../models/prefixSchema');
const { Permissions } = require('discord.js');

module.exports = { 

    name: 'setprefix',
    aliases: ['set-prefix'],
    description: '📝 Actualiza el prefix del bot en este servidor.',
  
    async execute(client, message, args, Discord) {

        let buscarprefix, prefix
        try {
    
            buscarprefix = await prefixSchema.findOne({idserver: message.guild.id})
    
            if(buscarprefix){
    
                prefix = buscarprefix.prefix
    
            } else {
    
                prefix = process.env.PREFIX
    
            }
    
        } catch (error) {
    
            console.log('Error al buscar Prefix en Servidor: '+ message.guild.id + ' - ' + error)
            prefix = process.env.PREFIX
    
        }

        if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.reply({ embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | No tienes permisos para ejecutar este comando. Permiso Requerido: (Administrador del Servidor)')
    
        ]}).then(m => setTimeout(() => m.delete(), 10000)).catch((e) => console.log('Error al enviar mensaje: '+e))
        
        let newprefix = args[0]

        if (!newprefix) return message.reply({ embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | Por Favor, ingresa un nuevo prefix.\n\n> Uso: ' + prefix + 'setprefix <nuevoprefix>')
    
        ]}).then(m => setTimeout(() => m.delete(), 10000)).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        if (newprefix.length > 3) return message.reply({ embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | Solo se permite un máximo de 3 carácteres como prefix.\n\n> Uso: ' + prefix + 'setprefix <nuevoprefix>')
    
        ]}).then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        const embedinicial = new Discord.MessageEmbed()
        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
        .setColor('YELLOW')
        .setThumbnail(message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }))
        .setDescription('<a:cargando:960474774281256980> | **Actualizando prefix...**')
        .setTimestamp()

        message.reply({ allowedMentions: { repliedUser: false}, embeds: [embedinicial]})
        .then(async m => {

            try {

                if(!buscarprefix){
    
                    console.log('========================= REGISTRO DE PREFIX =========================');
            
                    let setprefix = await prefixSchema.create({
    
                        idserver: message.guild.id,
                        prefix: newprefix,
        
                    })
        
                    setprefix.save();
                    
                    console.log('Prefix registrado ===> Servidor: '+ message.guild.name + ' Prefix: ' + newprefix)
       
                    console.log('========================= REGISTRO DE PREFIX =========================');
       
                } else {
    
                    console.log('========================= ACTUALIZACIÓN DE PREFIX =========================');
       
                    let update = await prefixSchema.findOneAndUpdate({idserver: message.guild.id},
                        {
    
                            prefix: newprefix
    
                        })
    
                    update.save()
    
                    console.log('Prefix actualizado ===> Servidor: '+ message.guild.name + ' Prefix: ' + newprefix)
       
                    console.log('========================= ACTUALIZACIÓN DE PREFIX =========================');
       
                }

                const embedcambio = new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setColor('GREEN')
                .setThumbnail(message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }))
                .setDescription('<a:Verify1:931463354357276742> | **Prefix cambiado con éxito:** ')
                .addField('\u200B','\u200B')
                .addField('Servidor: ', '<a:flech:931432469935312937> `' + message.guild.name + '`')
                .addField('Nuevo Prefix: ', '<a:flech:931432469935312937> `' + newprefix + '`')
                .setTimestamp()

                setTimeout(() => {
          
                    m.edit({ allowedMentions: { repliedUser: false}, embeds: [embedcambio]}).catch((e) => console.log('Error al enviar mensaje editado en setprefix: '+e))
                    
                }, 5000)

            } catch (error) {
    
                console.log('Error al Registrar prefix en servidor: ' + message.guid.name + ' - ' + error)
                
                const e4 = new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setThumbnail(message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }))
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Ocurrió un error inesperado, por favor intenta de nuevo!\n> Error: `+error)
                .setTimestamp()

                setTimeout(() => {
          
                    m.edit({ allowedMentions: { repliedUser: false}, embeds: [e4]}).catch((e) => console.log('Error al enviar mensaje editado en setprefix: '+e))
    
                }, 5000)
                
            }

        })
        .catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}