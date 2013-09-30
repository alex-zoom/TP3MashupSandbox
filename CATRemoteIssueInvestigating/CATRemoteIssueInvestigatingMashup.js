tau.mashups
    .addDependency('Underscore')
    .addDependency('tp3/mashups/topmenu')
    .addDependency('http://jslogger.apphb.com/Scripts/CATRemoteIssueInvestigatingModule.js')
    .addMashup(function (_, topMenu) {
        var link = topMenu.addItem({
            title: 'Turn JS Log on'
        });
        require(['CATRemoteIssueInvestigatingModule'], function(module){
            link.onClick(function() {
                module.setEnabled(!module.getEnabled());
                link.$element.find('.tau-popup-link').text('Turn JS Log ' + (module.getEnabled() ? 'off' : 'on'));
            });
        });
    });