import dayjs from "dayjs";

export const formatDate=(time)=>{
    return String( dayjs(time).format('YYYY MM-DD HH:mm') )
}