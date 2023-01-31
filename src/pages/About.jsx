import React from 'react'
import { useState } from 'react'
import '../pages/consultas.css'
const About = () => {

  // isShow is a boolean state variable
  const [Show, setShow] = useState(false);
  const [Show2, setShow2] = useState(false);
  // toggleShow is a function that changes the value of isShow
  const toggleConsulta = () => {
    setShow(!Show);
    setShow2(false);
  }
  const toggleEnvio = () => {
    setShow2(!Show2);
    setShow(false);
  }

  const showStyle = {
    display: 'block'
  };


  return (
    <>
      <div className='consultas-container'>
        <div className='consultas-list'>
          <ul className='consultas-list-ul'>
            <li onClick={
              toggleConsulta
            }>Consultas de stock</li>
            <li onClick={
              toggleEnvio
            }>Envío y seguimiento</li>
            <li>Formas de pago</li>
            <li>Cambios y devoluciones</li>
            <li>Preguntas generales</li>
          </ul>
        </div>

        {Show === true ? (
          <div className='quienes-somos' style={showStyle}>
            <h1>Consultas de stock</h1>
            <h3>1. ¿Hay stock de todos los productos?</h3>
            <p>Si, todos los productos que se encuentran en la página web están disponibles para su compra.</p>
            <h3>2. Compré y me dijeron que no tienen stock, ¿Qué hago?</h3>
            <p>Es inusual que haya pasado, pero quédate tranquilo ya que si no hay stock, se reintegra el dinero abonado.</p>
            <h3>3. ¿Hay algún limite de compra?</h3>
            <p>No. El único limite de compra que tenemos es el stock de nuestro e-Shop.</p>
          </div>
        ) : null}
        {
          Show2 === true ? (
          <div className='envio' style={showStyle}>
          <h1>Envío y seguimiento</h1>
          <h3>1. ¿Cuándo voy a recibir mi pedido?</h3>
          <p>según el envio que hayas solicitado, el pedido lo recibirás a traves de ... en la fecha probable que indica en la web.
          las entreas se concretan de Lunes a Viernes
          <br />
           de 8 a 20hs y Sábados de 8 a 12hs. En caso que el paquete no sea retirado dentro de ese plazo, .... lo devolverá al remitente.
          </p>
          <h3>2.¿Cuál es el costo de envío</h3>
          <p>El costo depende del código postal del domicilio de entrega y se detalla en el check-out.</p>
          <h3>3. ¿Puedo hacer el seguimiento de mi pedido?</h3>
          <p>Te enviaremos un main con un código (tracking number) y las instrucciones para que puedas hacer el seguiomiento de tu pedido.</p>
          <h3>4. ¿Qué pasa si no hay nadie cuando traen mi pedido?</h3>
          <p>Si no hay nadie en el domicilio que nos indicaste, el correo regresará a las 48 horas. En caso de no encontrar a nadie, deberás dirigirte al centro de distribución
          <br />
          asignado a tu pedido dentro de las 72 horas con tu DNI y el código de tracking</p>
          <h3>5. ¿Puede recibir el paquete otra persona?</h3>
          <p>sí, no es necesario que esté presente quien realizó la compra. Puede recibirlo cualquier adulto.</p>
        </div>
          ) : null
        }

      </div>
    </>
  )
}

export default About