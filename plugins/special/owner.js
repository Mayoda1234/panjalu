exports.run = {
   usage: ['owner'],
   category: 'special',
   async: async (m, {
      client
   }) => {
      client.sendContact(m.chat, [{
         name: global.owner_name,
         number: global.owner,
         about: 'Owner & Creator'
      }], m, {
         org: 'Neoxr Network',
         website: 'https://api.neoxr.my.id',
         email: 'contact@neoxr.my.id'
      })
   },
   error: false,
   cache: true,
   location: __filename
}