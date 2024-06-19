import { useDashboardContext } from "../pages/DashboardLayout"

const SmallSidebar = () => {
  const data = useDashboardContext()
  console.log(data);
  return(
    <div>
      Small sidebar
    </div>
  )
}

export default SmallSidebar