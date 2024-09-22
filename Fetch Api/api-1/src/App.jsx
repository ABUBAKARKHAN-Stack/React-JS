import { useEffect, useState } from "react"

export const App = () => {
  const [apidata, setApiData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        return res.json()
      })
      .then((data) => setApiData(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="flex flex-col w-full h-fit bg-slate-500">
      {
        apidata.map((currVal) => {
          return (
            <ul className="grid w-fit"  key={currVal.id}>
              <li className="border p-5 rounded flex ">{currVal.title}</li>
            </ul>
          )
        })
      }
    </div>
  )
}