import React from 'react'

const Page = ({params}: {params: {agencyId: string}}) => {
  return (
    <div>agency id: <br/>
        {params.agencyId}
    </div>
  )
}

export default Page