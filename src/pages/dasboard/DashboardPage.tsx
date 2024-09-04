import CardComponent from "./component/card/CardComponent"
import datasCard from "./data"

export default function DashboardPage(){
    return (
<main className="mt-8 mx-4 md:mr-8 rounded-xl bg-white p-4 shadow-sm flex flex-col">
  <div className="p-8 bg-gradient-to-t from-cyan-950 to-cyan-700">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-4 gap-6" style={{height:"80%"}}>
       {
        datasCard.map((card,index)=>
          <CardComponent key= {index} data={card} />
        )
      }
      </div>
  </div>
</main>

    )
}
