import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div style={{
        textAlign:"center",
        fontSize:"30px"
      }}>
      <h1>Η Σελίδα δεν βρέθηκε</h1>
      <p><a href="/">επιστροφή στην αρχική σελίδα.</a></p>
    </div>
  </Layout>
)

export default NotFoundPage
