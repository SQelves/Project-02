const User = require('./User');
const List = require('./List');
const Gifts = require('./Gifts');

User.hasMany(List, {
  foreignKey: 'list_id',
});

List.belongsTo(User, {
  foreignKey: 'list_id'
});

Gifts.belongsTo(List, {
  foreignKey: 'list_id'
})

Gifts.hasMany(List, {
  foreignKey: 'list_id'
});

module.exports = { User, List, Gifts };
