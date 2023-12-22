
// import { Reorder } from "framer-motion"
// import { useState } from "react"
const AllTask = () => {
    // const [items, setItems] = useState([0, 1, 2, 3])
  return (
    // <Reorder.Group axis="y" values={items} onReorder={setItems}>
    //   {items.map((item,index) => (
    //     <Reorder.Item key={item} value={item}>
    //        {/* task */}
    //     <div className="backdrop-blur-2xl bg-white/20">
    //         <h1 className="text-4xl text-white font-semibold text-center">item-{index}</h1>
    //     </div>
    //     </Reorder.Item>
    //   ))}
    // </Reorder.Group>
    <div className="space-y-3">
        {/* task */}
        <div className="backdrop-blur-2xl bg-white/20">
            <h1 className="text-4xl text-white font-semibold text-center">task-1</h1>
        </div>
        {/* task */}
        <div className="backdrop-blur-2xl bg-white/20">
            <h1 className="text-4xl text-white font-semibold text-center">task-1</h1>
        </div>
        {/* task */}
        <div className="backdrop-blur-2xl bg-white/20">
            <h1 className="text-4xl text-white font-semibold text-center">task-1</h1>
        </div>
        {/* task */}
        <div className="backdrop-blur-2xl bg-white/20">
            <h1 className="text-4xl text-white font-semibold text-center">task-1</h1>
        </div>
    </div>
  )
}

export default AllTask
