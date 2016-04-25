Router.route('/api', {
        where: 'server'
    })
    .post(function() {
        var postData = this.request.body;

        this.response.end('post acept\n');
    });
