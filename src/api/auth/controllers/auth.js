

const { sanitizeEntity } = require('@strapi/utils');
const jwt = require('jsonwebtoken');
const User = require('@strapi/database/lib/models');


module.exports = {
  async register(ctx) {
    const { username, email, password, isAdmin } = ctx.request.body;


    const existingUser = await strapi.query('plugin::users-permissions.user').findOne({ where: { email } });

    if (existingUser) {
      return ctx.badRequest('Email is already taken');
    }


    let role = 'user'; 
if (isAdmin === true) {
  const adminRole = await strapi.query('plugin::users-permissions.role').findOne({ where: { name: 'Admin' } });
  role = adminRole ? adminRole.id : 'user';
}

    const user = await strapi.query('plugin::users-permissions.user').create({
      data: {
        username,
        email,
        password,
        role,
      },
    });


    const token = jwt.sign({ id: user.id }, strapi.config.get('plugin.users-permissions.jwtSecret'), {
      expiresIn: strapi.config.get('plugin.users-permissions.jwtExpiration'),
    });

    return {
      jwt: token,
      user: sanitizeEntity(user, { model: User }),
    };
  },
};
