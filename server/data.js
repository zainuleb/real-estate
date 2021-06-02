const ROLE = {
  ADMIN: 'admin',
  MGR: 'manager',
  AGT: 'agent',
  USER: 'client',
};

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: 'Asad', role: ROLE.ADMIN },
    { id: 2, name: 'Burhan', role: ROLE.MGR },
    { id: 3, name: 'Danial', role: ROLE.AGT },
    { id: 4, name: 'Khan', role: ROLE.USER },
  ],
};
