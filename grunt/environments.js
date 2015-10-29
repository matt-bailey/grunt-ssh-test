module.exports = {
    options: {
        local_path: '',
        current_symlink: 'current',
        deploy_path: '/mnt/www/site/tempdirformatt'
    },
    staging: {
        options: {
            host: '<%= secret.staging.host %>',
            username: '<%= secret.staging.username %>',
            password: '<%= secret.staging.password %>',
            port: '<%= secret.staging.port %>',
            debug: true,
            releases_to_keep: '3'
        }
    }
};
