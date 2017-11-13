import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Should setup  default filters values', () =>{
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('Should set sortBy to amount', () =>{
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
});

test('Should set sortBy to amount', () =>{
    const currentState ={
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducer({currentState}, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date')
});

test('Should set text Filter to provided text', () =>{
    const text = 'test';
    const action = {
        type: 'SET_TEXT_FILTER',
        text};
    const state = filtersReducer(undefined, action );
    expect(state.text).toBe('test')
});

test('Should set startDate to provided date', () =>{
    const startDate = moment(0);
    const action = {
        type: 'SET_START_DATE',
        startDate};
    const state = filtersReducer(undefined, action );
    expect(state.startDate).toEqual(moment(0))
});

test('Should set endDate to provided date', () =>{
    const endDate = moment(0);
    const action = {
        type: 'SET_END_DATE',
        endDate};
    const state = filtersReducer(undefined, action );
    expect(state.endDate).toEqual(moment(0))
});