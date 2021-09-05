import React, { Component } from 'react'

export class Formularios extends Component {

  constructor() {
    super()
    this.state = {
      value:'Valor Inicial',
      checked: false,
      selectValue: '2'
    }
  }

  render() {
    return (
      <div>
        <h1>Input text controlled</h1>

        <form>
          <input type="text" value={this.state.value} onChange={(e) => this.setState({ value: e.target.value }) }/>
        
          {/* [Controlled 1] Pra inverter o state de um checkbox a sintaxe é diferente. Não usamos o e.target como de costume. */}
          {/* [Controlled 2] O checkbox uncontrolled é defaultChecked={false}, por exemplo. Sem o state e sem o onChange.  */}
          <label>
            <h1>Input checkbox controlled</h1>
            <input type="checkbox" checked={this.state.checked} onChange={(e) => this.setState({ checked: !this.state.checked })}/>
            Checkbox

          {/* [Controlled 3] É igual ao checkbox.  */}
            <h1>Input radio controlled</h1>
            <input type="radio" name="teste" value="1" defaultChecked /> Radio 1
            <input type="radio" name="teste" value="2"/> Radio 2
          </label>
        </form>

        {/* [Controlled 4] Dica: Pode passar o value direto na tag select ao invés de passar na option. Isso torna ele um controlled component e precisa usar em conjunto com onChange pra funcionar. */}
        {/* [Controlled 5] Dica: Pode passar uma keyword multiple dentro do select que permite selecionar mais de uma opção. Aí neste caso usamos array ao invês de objeto. */}
        {/* Descontrolado: selected; Controlled:  */}
        <form>
          <h1>select e option</h1>
          <select value={this.state.selectValue} onChange={(e) => this.setState({ selectValue: e.target.selectValue }) }>
            <option value="1">Opção 1</option>
            <option value="2">Opção 2</option>
            <option value="3">Opção 3</option>
          </select>
        </form>
      </div>
    )
  }
}

export default Formularios
