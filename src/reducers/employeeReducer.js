// สร้าง initialState state
// const initialState={
//     result:15000,
//     value:[]
// }


//reducer เปลี่ยนแปลงค่าให้ state

function  userReducer(state={name:"",age:"18"},action){
    switch (action.type) {
        case "setName":
              state={
                //   result:state.result,
                //   value:state.value,
                //ใชแทนการเรียก state
                    ...state,
                    name:action.payload
              }
            break;

        default:
            break;
    }
    return state 
}

export default userReducer;