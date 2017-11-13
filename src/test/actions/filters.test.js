import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from "../../actions/filters";
import moment from 'moment'

test('should generate set start date action obj', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('should generate set start date action obj', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('should generate sort by date date action obj', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    })
});

test('should generate sort by date date action obj', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});

test('should generate set Text Filter date action obj with provided data', () => {
    const action = setTextFilter('Test text');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Test text'
    })
});

test('should generate set Text Filter date action obj with default data', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});