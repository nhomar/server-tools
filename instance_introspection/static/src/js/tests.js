(function() {
    'use strict';

    openerp.Tour.register({
        id: 'test_instance_introspection',
        name: 'Complete a basic order trough the Front-End',
        path: '/instance_introspection',
        mode: 'test',
        steps: [
            {
                title: 'Wait for the main screen',
                wait: 2000,
                waitFor: 'h3:contains("Addons Paths"),#accordion.results',
            },
            {
                title:  'Load Repositories',
                element: '.btn-reload',
            },
            {
                title:  'Not results in the middle, it should be cleaned up.',
                waitNot: '#accordion.results',
            },
            {
                title:  'Load Repositories',
                wait: 2000,
                waitFor: '#accordion.results',
            },
        ],
    });

    openerp.Tour.register({
        id: 'test_pyinfo',
        name: 'Complete a basic order trough the Front-End',
        path: '/instance_introspection/pyenv',
        mode: 'test',
        steps: [
            {
                title: 'Wait for the main screen',
                waitFor: '.table',
            },
        ],
    });
})();

