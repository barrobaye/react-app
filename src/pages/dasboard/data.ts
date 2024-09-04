export interface CardModel{
    stat: string,
    text:string,
    description?:string,
    icon?:string,
    pourcents?:string

}
const datasCard:CardModel[]=[{
    icon:"fas fa-money-bill-wave text-xl",
    text:"Total Dettes",
    stat:"$1000",
    pourcents:"3,5"

},{
    icon:"fas fa-users text-xl",
    text:"Clients",
    stat:"100",
    pourcents:"3,5"
},{
    icon:"fas fa-boxes text-xl",
    text:"Article en Stock",
    stat:"10",
    pourcents:"3,5"
 

},{
    icon:"fas fa-exclamation-circle text-xl",
    text:"Demande en cours",
    stat:"20",
    pourcents:"3,5"

}];


export default datasCard