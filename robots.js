var db = {
    '614332022': {        //成功则返回结果，否则null，并设置错误描述
        course: 'Ionic 4的学习与使用',            //直播间名，或者课程名
        accounts: [                              //用户提供的额外学生
            ['517013400', 'xfskyl'],             //需要执行任务的学生账号1
            ['614332022', 'xfskyl'],             //需要执行任务的学生账号2
            ['xfskyl@sina.com', 'xfskyl'],       //需要执行任务的学生账号3
            ['784593893', 'xfskyl'],             //需要执行任务的学生账号4
            ['sl.truman', 'xfskyl'],             //需要执行任务的学生账号5
            ['abceafiiw', 'xfskyl'],             //需要执行任务的学生账号6
        ],
        interactions: [                          //互动语言列表
            '老师666666！！',
            '老师牛逼！！',
            '吊吊吊！！',
            '赞一个！！',
            '长得帅啊！',
            '买买买！'
        ],
        questions: [                             //提出问题列表
            '那么学费是多少呢？',
            '这个课程要学多久呢？',
        ]
    }
}

var init = function (app) {
    console.log('init peoples service.')
    app.get('/online-course-helper/sign', function (req, res) {
        console.log('/sign:')
        console.log(req.query)
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        res.send({ ret: 'interfaces not implements!', err: true })
    })

    app.get('/online-course-helper/putOnlineCourseTask', function (req, res) {
        console.log('/putOnlineCourseTask:')
        console.log(req.query)
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        res.send({ ret: 'interfaces not implements!', err: true })
    })

    app.get('/online-course-helper/getOnlineCourseTask', function (req, res) {
        console.log('/getOnlineCourseTask:')
        console.log(req.query)
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        res.send({ ret: db['614332022'], err: null })
    })

    app.get('/online-course-helper/setStudentStatus', function (req, res) {
        console.log('/tellStatus:')
        console.log(req.query)
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        res.send({ ret: 'interfaces not implements!', err: true })
    })

    app.get('/online-course-helper/getStudentsStatus', function (req, res) {
        console.log('/numberOfRobotsOfStatus:')
        console.log(req.query)
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        res.send({ ret: 'interfaces not implements!', err: true })
    })
}

module.exports.init = init