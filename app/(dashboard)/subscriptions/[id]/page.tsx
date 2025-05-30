import React from "react";

function BuyPage({ params }: { params: { id: string } }) {

  const { id } = params;

  return <section>
    <h1>Compra el plan {id}</h1>
  </section>;
}

export default BuyPage;
