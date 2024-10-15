import { useMemo } from "react"
import { Activity } from "../types"

type CalorieTrackerProps = {
    activities: Activity[]
}

export default function CalorieTracker({activities} : CalorieTrackerProps) {

    //Contadores
    const consumedCalories = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? 
        total + activity.calories : total, 0) , [activities])
  return (
    <>
        <h2 className="text-4xl text-white font-black text-center">Resumen de Calorias</h2>
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
            
            <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
                <span className="text-6xl font-black text-orange">{consumedCalories}</span>
                Consumidas
            </p>
        </div>
      
    </>
  )
}
