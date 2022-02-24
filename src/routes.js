import { Route, Routes } from 'react-router-dom'
import Main from './components/main/main'
import PhoneView from './components/phoneView/phoneView'


const Navegacion = () => {
    return(
        <Routes>
            <Route path='/phone' element= {<Main/>}/>
            <Route path='/phone/:_id' element= {<PhoneView/>}/>
        </Routes>
    )
}

export default Navegacion