var fs = require('fs');
var path = require('path');

var setting = require('../setting');

//项目目录
var projectsFolder = '../' + setting.projectsFolder + '/';

exports.renderProjects = function(req, res) {
    var realPath = path.join(__dirname, projectsFolder);

    try {
        var dir = fs.readdirSync(realPath);
    } catch (e) {
        console.log(e);
        var data = {
            errorInfo: e
        }
        res.render('error', data);
        return false;
    }

    setting.ignoreFile.forEach(function(n) {
        var temp = dir.indexOf(n);
        if (temp !== -1) {
            dir.splice(dir.indexOf(n), 1);
        }
    })
    
    var renderData = {
        projects: dir,
        link: 'link'
    }
    res.render('index', renderData);
};
