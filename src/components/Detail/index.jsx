
import Loader from '../Spinner';
import Arrow from '../../assets/icons/arrow-up.svg'

import {Sumary,Detail,Subparagraph,Image,Item,ImagenSpinner} from './detail.style'
const DetailInfo = ({terms, isLoading}) => {
    console.log(terms);

    return(
    <>
    {isLoading ?  (
        <Loader></Loader>
    )
    :(
        terms?.map((item, index) => {
            return(
                <Item>
                   <Detail>
                        <Sumary>{item?.title}<Image src={Arrow}></Image></Sumary>
                            <Subparagraph>{item?.subtitle}</Subparagraph>
                    </Detail>
                </Item>
            )
        })
    )
    }
    </>
    )
}
export default DetailInfo
// la idea es reutilizar el componente detail segun se necesite , qu e cada componente se encargue mediante un for de renderizar la cantidad necesaria