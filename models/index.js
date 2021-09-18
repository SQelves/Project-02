const User = require('./User');
const Project = require('./Project');
const Gifts = require('./Gifts');

User.hasMany(Project, {
  foreignKey: 'list_id',
});

Project.belongsTo(User, {
  foreignKey: 'list_id'
});

Gifts.belongsTo(Project, {
  foreignKey: 'list_id'
})

Gifts.hasMany(Project, {
  foreignKey: 'list_id'
});

module.exports = { User, Project, Gifts };
