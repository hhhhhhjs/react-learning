import './App.css'
import { Hello } from './views/test'
import { Getname } from './views/test'
import { List } from './views/test'
import { Children } from './views/test'
import { Usechildren } from './views/test'
import { Count1 } from './views/Snapshot'
import { Counter2 } from './views/Snapshot'
import { Updateobj } from './views/updateobj'
import { Selfobj } from './views/updateobjtwo'
import { Immerobj } from './views/updateobjtwo'
import { ArrayList } from './views/array'
import { Counter } from './views/reducer'
import { Counterimmer } from './views/reducer'
import { Page } from './views/context'
import { PageContext } from './views/context'
import { PageContextSimplify } from './views/context'
import { Useref } from './views/ref'
function App() {


  return (
    <>
      <Hello></Hello>
      <Getname name="张三" age={20} hobby='水果'></Getname>
      <div>
        <del>
          hello, world
        </del>
      </div>
      <List></List>
      <Children>
        <Usechildren></Usechildren>
      </Children>
      <Count1></Count1>
      <Counter2></Counter2>
      <Updateobj></Updateobj>
      <Selfobj></Selfobj>
      <Immerobj></Immerobj>
      <ArrayList></ArrayList>
      <Counter></Counter>
      <Counterimmer></Counterimmer>
      <Page></Page>
      <PageContext></PageContext>
      <PageContextSimplify></PageContextSimplify>
      <Useref></Useref>
    </>
  )
}

export default App
