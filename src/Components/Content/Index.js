import React from 'react'
import ContentFooter from '../ContentFooter'
import Index from '../Content/List/Index' 

function Content() {
  return (
  <>
    <section className="main">
    <input className="toggle-all" type="checkbox" />
    <label htmlFor="toggle-all">
        Mark all as complete
    </label>

    <Index />
    </section>

    <ContentFooter />
  </>
  )
}

export default Content
