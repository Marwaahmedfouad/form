import React, { useEffect, useState } from 'react'
import Child1 from '../Child1/Child1'
import Child2 from '../Child2/Child2'
export default function Parent() {

  const [data, setdata] = useState({})
  const [user, setUser] = useState([])
  function parentFunc(name, email) {
    setdata({ name, email });
  }
  useEffect(() => {
    setUser([...user, data])
  }, [data])

  return (<>

        <Child1 parFunc={parentFunc} />
        <Child2 user={user} />
    </>
  )
}
