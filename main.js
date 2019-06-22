var main = async () => {
    var app = require('./express')
    
    require('./robots').init(app)
    require('./verifications').init(app)
    require('./cookies').init(app)

    app.listen(8000, function () {
        console.log('HTTP Server is running on: http://www.dungbeetles.xyz:8000/online-course-helper')
    })
}

main()