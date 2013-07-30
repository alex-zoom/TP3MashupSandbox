tau.mashups
    .addModule('EmbeddedPages.config', function() {
        var EmbeddedPagesConfig = {
            tabs: [{
                entityTypeName: 'userStory',
                customFieldName: 'Sample URL Custom Field tab for User Story of projects with Scrum process',
                processName: 'Scrum'
            },{
                entityTypeName: 'bug',
                customFieldName: 'Sample URL Custom Field tab for Bug of any project'				
            }]
        };

        return EmbeddedPagesConfig;
    });