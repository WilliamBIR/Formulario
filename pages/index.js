import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <form>
      <p><label className="LabelCliente">Cliente</label>
        <input className="ClienteInput" input="text" list="listacliente"/>
        <datalist id="listacliente">
        <option>a</option>
        </datalist>
        <label className="LabelEmisor">Emisor</label>
        <input className="EmisorInput" input="text" list="listaemisor"></input>
        <datalist id="listaemisor">
        <option>a</option>
        </datalist>
      </p>
      <p>
        <label className="LabelMontoR">Monto recibido</label>
        <input className="MontoRInput"></input>
        <label className="LabelMontoA">Monto Aplicable</label>
        <input className="MontoAInput" disabled={true}></input>
      </p>
      <p>
        <label className="LabelMoneda">Moneda</label>
        <input className="MonedaInput" input="text" list="listamoneda"/>
        <datalist id="listamoneda">
        <option>a</option>
        </datalist>
      </p>
      <p>
        <label className="LabelForma">Forma de pago</label>
        <input className="FormaInput" input="text" list="listaforma"></input>
        <datalist id="listaforma">
        <option>a</option>
        </datalist>
        <label className="LabelFecha">Fecha</label>
        <input className="FechaInput" type="datetime-local" min="2018-01-01T00:00" max="2025-12-31T23:59"></input>
      </p>
      <p>
        <label className="LabelStatus">Status pago</label>
        <input className="StatusInput" input="text" list="listastatus"></input>
        <datalist id="listastatus">
        <option>a</option>
        </datalist>
      </p>
      <p>
        <label className="LabelNumO">Num. Operación</label>
        <input className="NumOInput" disabled={true}></input>
        <label className="LabelObservaciones">Observaciones</label>
        <input className="ObservacionesInput"></input>
      </p>
      
      </form>
    </div>
  )
}
