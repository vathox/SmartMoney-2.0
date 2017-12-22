import moment from 'moment'


export default [{
    id: 1,
    description: 'Car',
    amount: 193,
    createdAt: 0,
    note: 'Test note 1'
}, {
    id: 2,
    description: 'cTest',
    amount: 19398,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
    note: 'Test note 2'
}, {
    id: 3,
    description: 'aTest',
    amount: 6500,
    createdAt: moment(0).add(4, 'days').valueOf(),
    note: 'Test note 3'
}];