import React from 'react'
import { Helmet } from 'react-helmet-async'
const Home: React.FC = (props) => {
  console.log(props)

  return (
    <div>
      <Helmet>
        <title>Learning React Helmet!</title>
        <meta name="description" content="Beginner friendly page for learning React Helmet." />
      </Helmet>
      Home
    </div>
  )
}

export default Home
