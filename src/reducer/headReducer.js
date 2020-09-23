
const SORT_COL = 'SORT_COL';

export const actSort = () => ({
    type : SORT_COL
});


const initialState = {
    order : 'asc',
    orderBy : ''
};

export default function headReducer(state = initialState, actoin) {
    switch (action.type){

        case SORT_COL : 
            return {
                ...state,
                order : action.order === 'asc'? 'desc' : action.order,
                orderby : action.orderby
            }
        
        default :
            return stete;
     
    }
}