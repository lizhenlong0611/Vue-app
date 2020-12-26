import waitPaid from "@/views/center/waitPaid/waitPaid"
import overPaid from "@/views/center/waitPaid/overPaid"
import onPaid from "@/views/center/waitPaid/onPaid"

var waitPaidRouter = [
    {path :"/waitPaid" ,component:waitPaid ,redirect:"/waitPaid/overPaid",children:[
        {path:'overPaid' , component:overPaid},
        {path:'onPaid' , component:onPaid},
    ]}
]

export default waitPaidRouter