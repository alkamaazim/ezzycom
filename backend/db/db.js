const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@task-manager.5dwfxm0.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));
