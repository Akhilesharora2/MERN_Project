import React from 'react'

const KnowledgeTest1 = () => {

  const P11 = "This is a statement , option a, option b, option c, option d";

  const statement = P11.split(',');
  
  function noo(params) {
    return statement;
  }

  return (
    <>
    <div>KnowledgeTest1</div>
    
    <div className="h2">{statement[0]}</div>
    <div className="h3">{statement[1]}</div>
    <div className="h3">{statement[2]}</div>
    <div className="h3">{statement[3]}</div>
    <div className="h3">{statement[4]}</div>

    </>
  )

}

export default KnowledgeTest1