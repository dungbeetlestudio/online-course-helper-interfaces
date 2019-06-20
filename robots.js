var init = function (app) {
    console.log('init peoples service.')

    app.get('/online-course-helper/sign', function (req, res) {
        console.log('/sign:')
        console.log(req.query)
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        res.send({ ret: 'interfaces not implements', err: true })
    })

    app.get('/online-course-helper/putOnlineCourseTask', function (req, res) {
        console.log('/online:')
        console.log(req.query)

        var robot = null
        for (k in peoples.truman.robots.offline) {
            robot = [k, peoples.truman.robots.offline[k]]
            break
        }

        if (robot == null) {
            res.send({ ret: null, err: true })
            return
        }

        peoples.truman.robots.online[robot[0]] = robot[1]
        delete peoples.truman.robots.offline[robot[0]]
        peoples.truman.orders[req.query.id] = { account: robot[0], pwd: robot[1], hasEntered: false }

        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        res.send({ ret: robot, err: null })
    })

    app.get('/online-course-helper/getOnlineCourseTask', function (req, res) {
        console.log('/doWhat:')
        console.log(req.query)
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        res.send({ ret: peoples.truman.online[req.query.account].order, err: null })
    })

    app.get('/online-course-helper/setStudentStatus', function (req, res) {
        console.log('/tellStatus:')
        console.log(req.query)

        peoples.truman.online[req.query.account].status = req.query.status

        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        res.send({ ret: true, err: null })
    })

    app.get('/online-course-helper/getStudentsStatus', function (req, res) {
        console.log('/numberOfRobotsOfStatus:')
        console.log(req.query)

        var available = 0, unsigned = 0, entered = 0
        for (k in peoples.truman.robots.online) {
            robot = peoples.truman.robots.online[k]
            available++
            if (undefined == robot.status.hasSigns[req.query.course])
                unsigned++
            if (robot.status.hasEntered)
                entered++
        }

        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        res.send({ ret: { available: available, unsigned: unsigned, entered: entered }, err: null })
    })
}

module.exports.init = init