import moment from 'moment'


export default [{
    id: 1,
    description: 'Car',
    amount: 193,
    createdAt: 0
}, {
    id: 2,
    description: 'cTest',
    amount: 19398,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: 3,
    description: 'aTest',
    amount: 6500,
    createdAt: moment(0).add(4, 'days').valueOf()
}];