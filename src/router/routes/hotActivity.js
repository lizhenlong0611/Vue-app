import hotActivity from "@/views/hotActivity/hotActivity"
import hotActivityApply from "@/views/hotActivity/hotActivityApply"
import hotActivityRunning from "@/views/hotActivity/hotActivityRunning"
import Over from "@/views/hotActivity/Over"

var hotactivityRouter = [
    {path :"/hotActivity" ,component:hotActivity,children:[
        {path:'hotActivityApply' , component:hotActivityApply},
        {path:'hotActivityRunning' , component:hotActivityRunning},
        {path:'Over' , component:Over}
    ]}
]

export default hotactivityRouter