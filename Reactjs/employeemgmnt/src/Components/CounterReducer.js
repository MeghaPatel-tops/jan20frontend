export const initialValue = {count:0}

export const reduce= (state,action)=>{
    switch(action.type){
        case 'incre':
            return {count : state.count + 1}
        break;
        case 'decre':
            return {count : state.count - 1}
        break;
         default:
      return state;

    }

}