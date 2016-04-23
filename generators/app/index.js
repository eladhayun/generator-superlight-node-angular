'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

    initializing: function () {
        this.log(yosay(
            'Welcome ladies & gentlemen to the ' + chalk.green('Superlight Generator!') + ' by ' + chalk.red('Elad Hayun')
        ));
    },

    prompting: function () {
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname // Default to current folder name
        }, function (answers) {
            done();
        }.bind(this));
    },

    writing: function () {
        this.fs.copy(
            this.templatePath('_package.json'),
            this.destinationPath('package.json')
        );
        this.fs.copy(
            this.templatePath('_bower.json'),
            this.destinationPath('bower.json')
        );
        this.fs.copy(
            this.templatePath('bowerrc'),
            this.destinationPath('.bowerrc')
        );
        this.fs.copy(
            this.templatePath('editorconfig'),
            this.destinationPath('.editorconfig')
        );
        this.fs.copy(
            this.templatePath('gitattributes'),
            this.destinationPath('.gitattributes')
        );
        this.fs.copy(
            this.templatePath('gitignore'),
            this.destinationPath('.gitignore')
        );
        this.fs.copy(
            this.templatePath('jshintrc'),
            this.destinationPath('.jshintrc')
        );
        this.fs.copy(
            this.templatePath('_server.js'),
            this.destinationPath('server.js')
        );
        // app
        this.fs.copy(
            this.templatePath('_app/_models/_nerd.js'),
            this.destinationPath('app/models/nerd.js')
        );
        this.fs.copy(
            this.templatePath('_app/_routes/_frontend.js'),
            this.destinationPath('app/routes/frontend.js')
        );
        this.fs.copy(
            this.templatePath('_app/_routes/_nerds.js'),
            this.destinationPath('app/routes/nerds.js')
        );
        // config
        this.fs.copy(
            this.templatePath('_config/_db.js'),
            this.destinationPath('config/db.js')
        );
        // Public
        this.fs.copy(
            this.templatePath('_public/_404.html'),
            this.destinationPath('public/404.html')
        );
        this.fs.copy(
            this.templatePath('_public/_favicon.ico'),
            this.destinationPath('public/favicon.ico')
        );
        this.fs.copy(
            this.templatePath('_public/_gulpfile.js'),
            this.destinationPath('public/gulpfile.js')
        );
        this.fs.copy(
            this.templatePath('_public/_index.html'),
            this.destinationPath('public/index.html')
        );
        this.fs.copy(
            this.templatePath('_public/_app/_components/_dummy.txt'),
            this.destinationPath('public/app/components/dummy.txt')
        );
        this.fs.copy(
            this.templatePath('_public/_app/_shared/_dummy.txt'),
            this.destinationPath('public/app/shared/dummy.txt')
        );
        // First Module
        this.fs.copy(
            this.templatePath('_public/_app/_modules/_firstModule/_css/_style.css'),
            this.destinationPath('public/app/modules/firstModule/css/style.css')
        );
        this.fs.copy(
            this.templatePath('_public/_app/_modules/_firstModule/_js/_controllers.js'),
            this.destinationPath('public/app/modules/firstModule/js/controllers.js')
        );
        this.fs.copy(
            this.templatePath('_public/_app/_modules/_firstModule/_js/_module.js'),
            this.destinationPath('public/app/modules/firstModule/js/module.js')
        );
        this.fs.copy(
            this.templatePath('_public/_app/_modules/_firstModule/_js/_routes.js'),
            this.destinationPath('public/app/modules/firstModule/js/routes.js')
        );
        this.fs.copy(
            this.templatePath('_public/_app/_modules/_firstModule/_views/_dummy.html'),
            this.destinationPath('public/app/modules/firstModule/views/dummy.html')
        );
        // Second Module
        this.fs.copy(
            this.templatePath('_public/_app/_modules/_secondModule/_css/_style.css'),
            this.destinationPath('public/app/modules/secondModule/css/style.css')
        );
        this.fs.copy(
            this.templatePath('_public/_app/_modules/_secondModule/_js/_controllers.js'),
            this.destinationPath('public/app/modules/secondModule/js/controllers.js')
        );
        this.fs.copy(
            this.templatePath('_public/_app/_modules/_secondModule/_js/_module.js'),
            this.destinationPath('public/app/modules/secondModule/js/module.js')
        );
        this.fs.copy(
            this.templatePath('_public/_app/_modules/_secondModule/_js/_routes.js'),
            this.destinationPath('public/app/modules/secondModule/js/routes.js')
        );
        this.fs.copy(
            this.templatePath('_public/_app/_modules/_secondModule/_js/_services.js'),
            this.destinationPath('public/app/modules/secondModule/js/services.js')
        );
        this.fs.copy(
            this.templatePath('_public/_app/_modules/_secondModule/_views/_dummy.html'),
            this.destinationPath('public/app/modules/secondModule/views/dummy.html')
        );
        // Main Module
        this.fs.copy(
            this.templatePath('_public/_app/_modules/_mainModule/_js/_app.js'),
            this.destinationPath('public/app/modules/mainModule/js/app.js')
        );
        this.fs.copy(
            this.templatePath('_public/_app/_modules/_mainModule/_js/_routes.js'),
            this.destinationPath('public/app/modules/mainModule/js/routes.js')
        );
        // Assets
        this.fs.copy(
            this.templatePath('_public/_assets/_css/_style.css'),
            this.destinationPath('public/assets/css/style.css')
        );
        this.fs.copy(
            this.templatePath('_public/_assets/_css/_style.css.map'),
            this.destinationPath('public/assets/css/style.css.map')
        );
        this.fs.copy(
            this.templatePath('_public/_assets/_css/_style.sass'),
            this.destinationPath('public/assets/css/style.sass')
        );
        this.fs.copy(
            this.templatePath('_public/_assets/_img/_logo.png'),
            this.destinationPath('public/assets/img/logo.png')
        );
        // views
        this.fs.copy(
            this.templatePath('_public/_views/_first.html'),
            this.destinationPath('public/views/first.html')
        );
        this.fs.copy(
            this.templatePath('_public/_views/_second.html'),
            this.destinationPath('public/views/second.html')
        );
    },

    install: function () {
        this.installDependencies();
    }
});
